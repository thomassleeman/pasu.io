import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, id } = body;

    if (!name || !id) {
      return NextResponse.json(
        { error: "Missing name or id" },
        { status: 400 }
      );
    }

    // Get the user to preserve existing metadata
    const user = await clerkClient.users.getUser(id);

    // Update user's private metadata to include admin role
    await clerkClient.users.updateUserMetadata(id, {
      privateMetadata: {
        ...user.privateMetadata,
        admin: true,
      },
    });

    return NextResponse.json(
      { message: "Admin role granted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error granting admin role:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
