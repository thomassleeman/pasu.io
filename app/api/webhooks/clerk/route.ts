//Ngrok development command: ngrok http 3000. Make sure to update the webhook URL in Clerk dashboard to point to the ngrok URL.

export const runtime = "edge";
import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { db } from "../../../db/index";
import { users } from "../../../db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!secret) return new Response("Missing secret", { status: 500 });

  const event = await verifyWebhook(req);

  switch (event.type) {
    case "user.created": {
      const { id, email_addresses } = event.data;

      if (!id || !email_addresses?.[0]?.email_address) {
        return new Response("Invalid user data", { status: 400 });
      }

      await db
        .insert(users)
        .values({
          clerkId: id,
          email: email_addresses[0].email_address,
        })
        .onConflictDoUpdate({
          target: users.clerkId,
          set: {
            email: email_addresses[0].email_address,
            updatedAt: new Date(),
          },
        });
      break;
    }

    case "user.updated": {
      const { id, email_addresses } = event.data;

      if (!id || !email_addresses?.[0]?.email_address) {
        return new Response("Invalid user data", { status: 400 });
      }

      await db
        .update(users)
        .set({
          email: email_addresses[0].email_address,
          updatedAt: new Date(),
        })
        .where(eq(users.clerkId, id));
      break;
    }

    case "user.deleted": {
      const { id } = event.data;

      if (!id) {
        return new Response("Invalid user id", { status: 400 });
      }

      await db.delete(users).where(eq(users.clerkId, id));
      break;
    }

    default:
      console.log(`Unhandled webhook event type: ${event.type}`);
  }

  return new Response("OK");
}
