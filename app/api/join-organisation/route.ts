import { NextResponse } from "next/server";
import { db } from "@db/index";
import {
  users,
  organizations,
  organizationMembers,
  organizationInvitations,
} from "@db/schema";
import { eq, and, gte } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

interface JoinRequestBody {
  orgId: string;
  token: string;
  uid: string; // Clerk user ID
  role: "admin" | "standard"; // The membership type
}

/**
 * POST /api/join-organisation
 * Expects JSON body: { orgId, token, uid, role }
 */
export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { orgId, token, uid, role } =
      (await request.json()) as JoinRequestBody;

    // Basic validation
    if (!orgId || !token || !uid || !role) {
      return NextResponse.json(
        { error: "Missing orgId, token, uid, or role." },
        { status: 400 }
      );
    }

    // Get user from database using Clerk ID
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, uid),
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Get organization
    const organization = await db.query.organizations.findFirst({
      where: eq(organizations.id, orgId),
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Organisation not found." },
        { status: 404 }
      );
    }

    // Check for valid invitation token
    const invitation = await db.query.organizationInvitations.findFirst({
      where: and(
        eq(organizationInvitations.organizationId, orgId),
        eq(organizationInvitations.token, token),
        eq(organizationInvitations.valid, true),
        gte(organizationInvitations.expiresAt, new Date())
      ),
    });

    if (!invitation) {
      return NextResponse.json(
        { error: "Invalid or expired invitation token." },
        { status: 400 }
      );
    }

    // Check seat availability
    const currentMembers = await db.query.organizationMembers.findMany({
      where: eq(organizationMembers.organizationId, orgId),
    });

    const totalMembersCount = currentMembers.length;

    if (totalMembersCount >= organization.subscriptionQuantity) {
      return NextResponse.json(
        { error: "No seats available in this organisation." },
        { status: 400 }
      );
    }

    // Check if user is already a member
    const existingMembership = currentMembers.find(
      (member) => member.userId === user.id
    );

    if (existingMembership) {
      return NextResponse.json(
        { error: "User is already a member of this organisation." },
        { status: 400 }
      );
    }

    // Add user to organization
    await db.insert(organizationMembers).values({
      organizationId: orgId,
      userId: user.id,
      role,
    });

    // Update Clerk metadata with organization ID
    const clerkUser = await clerkClient.users.getUser(uid);
    await clerkClient.users.updateUserMetadata(uid, {
      publicMetadata: {
        ...clerkUser.publicMetadata,
        organizationId: orgId,
      },
    });

    // If transaction succeeds
    return NextResponse.json({
      success: true,
      message: "Joined organisation successfully.",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error." },
      { status: 400 }
    );
  }
}
