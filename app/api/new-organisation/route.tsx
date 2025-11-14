import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { getStorage } from "firebase-admin/storage";
import { adminInit } from "@/firebase/auth/adminConfig";
import { db } from "@db/index";
import { users, organizations, organizationMembers } from "@db/schema";
import { eq } from "drizzle-orm";

// Initialize Firebase for storage (to be migrated later)
adminInit();

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // **Authenticate the user using Clerk**
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

    // Parse the incoming form data
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const logoFile = formData.get("logo") as File;

    if (!name) {
      return NextResponse.json(
        { error: "Organisation name is required" },
        { status: 400 }
      );
    }

    if (!logoFile) {
      return NextResponse.json(
        { error: "Logo file is required" },
        { status: 400 }
      );
    }

    // **Step 1: Check for existing organisation allocation**
    const existingMembership = await db.query.organizationMembers.findFirst({
      where: eq(organizationMembers.userId, user.id),
    });

    if (existingMembership) {
      return NextResponse.json(
        { error: "Seats have already been allocated to an organisation." },
        { status: 403 }
      );
    }

    // **Step 2: Ensure the user has subscription seats available**
    const subscriptionQuantity =
      (clerkUser.publicMetadata?.subscriptionQuantity as number) || 0;

    if (subscriptionQuantity < 2) {
      return NextResponse.json(
        { error: "No subscription seats available." },
        { status: 400 }
      );
    }

    const subscriptionStatus =
      (clerkUser.publicMetadata?.subscriptionStatus as string) || "active";

    // **Step 3: Upload the logo to Firebase Storage**
    const bucket = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
    const logoFileName = `logos/${user.id}_${Date.now()}_${logoFile.name}`;
    const logoBuffer = Buffer.from(await logoFile.arrayBuffer());

    const file = bucket.file(logoFileName);
    await file.save(logoBuffer, {
      metadata: {
        contentType: logoFile.type,
      },
      public: true,
    });

    // Get the public URL to the uploaded file
    const logoUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

    // **Step 4: Create the organisation in the database**
    const [newOrganization] = await db
      .insert(organizations)
      .values({
        name,
        ownerId: user.id,
        ownerEmail: email,
        logoUrl,
        subscriptionStatus,
        subscriptionQuantity,
      })
      .returning();

    // **Step 5: Add owner as admin member**
    await db.insert(organizationMembers).values({
      organizationId: newOrganization.id,
      userId: user.id,
      role: "admin",
    });

    // **Step 6: Update user's Clerk metadata to include organisationId**
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...clerkUser.publicMetadata,
        organizationId: newOrganization.id,
      },
    });

    // **Step 7: Return success response**
    return NextResponse.json(
      {
        message: "Organisation created successfully",
        organisationId: newOrganization.id,
        logoUrl,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating organisation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
