import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/app/db/index";
import { users } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // **Authenticate the user using Clerk**
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

    // Get Clerk user to check subscription
    const client = await clerkClient();
    const clerkUser = await client.users.getUser(userId);
    const subscriptionQuantity = (clerkUser.publicMetadata?.subscriptionQuantity as number) || 0;
    const subscriptionStatus = (clerkUser.publicMetadata?.subscriptionStatus as string) || "";

    // **Step 1: Get user from database**
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    // **Step 2: Check for existing organisation allocation**
    if (user.organisationId) {
      return NextResponse.json(
        { error: "User already belongs to an organisation." },
        { status: 403 }
      );
    }

    // **Step 3: Ensure the user has subscription seats available**
    if (subscriptionQuantity < 2) {
      return NextResponse.json(
        { error: "No subscription seats available. Need at least 2 seats to create an organisation." },
        { status: 400 }
      );
    }

    // **Step 4: Upload the logo (for now, we'll store the file name, actual file storage would need implementation)**
    // TODO: Implement proper file storage (e.g., upload to Vercel Blob, AWS S3, or Cloudinary)
    // For now, we'll just use a placeholder URL
    const logoUrl = `/logos/${userId}_${Date.now()}_${logoFile.name}`;

    // In a real implementation, you would upload the file here:
    // const logoBuffer = Buffer.from(await logoFile.arrayBuffer());
    // const uploadedUrl = await uploadToStorage(logoBuffer, logoFile.type);

    // **Step 5: Create organisation ID (you may want to create a separate organisations table)**
    // For now, we'll use a simple ID format. In production, consider a UUID or database-generated ID
    const organisationId = `org_${Date.now()}_${userId}`;

    // **Step 6: Update user's database record**
    await db
      .update(users)
      .set({
        organisationId,
        organisationRole: "owner",
        updatedAt: new Date(),
      })
      .where(eq(users.id, user.id));

    // **Step 7: Update Clerk publicMetadata to include organisationId**
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...clerkUser.publicMetadata,
        organisationId,
        organisationRole: "owner",
      },
    });

    // **Step 8: Return success response**
    return NextResponse.json(
      {
        message: "Organisation created successfully",
        organisationId,
        logoUrl,
        note: "File upload functionality needs to be implemented with a storage provider"
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating organisation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
