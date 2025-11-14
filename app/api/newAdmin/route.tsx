import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, id } = body; // id is clerkId
    if (!name || !id) {
      return NextResponse.json(
        { error: "Missing name or id" },
        { status: 400 }
      );
    }

    // Update Clerk privateMetadata with admin role
    const client = await clerkClient();
    const clerkUser = await client.users.getUser(id);

    await client.users.updateUserMetadata(id, {
      privateMetadata: {
        ...clerkUser.privateMetadata,
        admin: true,
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error("******Error in POST handler:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
