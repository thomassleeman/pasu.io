import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    // Verify Clerk authentication
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Clear all custom metadata (both public and private)
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {},
      privateMetadata: {},
    });

    return NextResponse.json({
      message: "Custom metadata cleared successfully.",
    });
  } catch (error: any) {
    console.error("Error clearing custom metadata:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
