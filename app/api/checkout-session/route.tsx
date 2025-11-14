import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@db/index";
import { users } from "@db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // Verify Clerk authentication
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user from Clerk
    const clerkUser = await clerkClient.users.getUser(userId);
    const email = clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { error: "Email not available" },
        { status: 400 }
      );
    }

    // Get user from database
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Retrieve priceId and quantity from the request body
    const { priceId, quantity } = await request.json();

    if (!priceId || !quantity) {
      return NextResponse.json(
        { error: "Missing priceId or quantity" },
        { status: 400 }
      );
    }

    // Check if user already has a Stripe customer ID in Clerk metadata
    let customerId: string | undefined =
      (clerkUser.privateMetadata?.stripeCustomerId as string) || undefined;

    if (!customerId) {
      // Create a new customer in Stripe
      const customer = await stripe.customers.create({
        email,
        metadata: { clerkUserId: userId },
      });

      customerId = customer.id;

      // Update Clerk metadata with the Stripe customer ID
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...clerkUser.privateMetadata,
          stripeCustomerId: customerId,
        },
      });
    }

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: priceId, quantity }],
      success_url: `${request.nextUrl.origin}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/subscribe/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
