import { NextResponse } from "next/server";
import { db } from "@/app/db/index";
import { users } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

interface JoinRequestBody {
  orgId: string;
  token: string;
  clerkId: string; // Changed from uid to clerkId
  role: "admin" | "standard"; // The membership type
}

/**
 * POST /api/join-organisation
 * Expects JSON body: { orgId, token, clerkId, role }
 */
export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { orgId, token, clerkId, role } =
      (await request.json()) as JoinRequestBody;

    // Basic validation
    if (!orgId || !token || !clerkId || !role) {
      return NextResponse.json(
        { error: "Missing orgId, token, clerkId, or role." },
        { status: 400 }
      );
    }

    // Get user from database
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, clerkId),
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    // Check if user already belongs to an organisation
    if (user.organisationId) {
      return NextResponse.json(
        { error: "User already belongs to an organisation." },
        { status: 403 }
      );
    }

    // TODO: In a full implementation, you would:
    // 1) Verify the invitation token (check expiry, validity)
    // 2) Get the organisation details from a separate organisations table
    // 3) Check seat availability against the organisation's subscription
    //
    // For now, we'll assume the token is valid and seats are available
    // This is a simplified implementation that needs expansion

    // Update user's database record
    await db
      .update(users)
      .set({
        organisationId: orgId,
        organisationRole: role,
        updatedAt: new Date(),
      })
      .where(eq(users.id, user.id));

    // Update Clerk publicMetadata
    const client = await clerkClient();
    const clerkUser = await client.users.getUser(clerkId);

    await client.users.updateUserMetadata(clerkId, {
      publicMetadata: {
        ...clerkUser.publicMetadata,
        organisationId: orgId,
        organisationRole: role,
      },
    });

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

// import { NextResponse } from "next/server";
// import { auth } from "firebase-admin";
// import { adminInit } from "@/firebase/auth/adminConfig";
// import { getFirestore, FieldValue } from "firebase-admin/firestore";

// adminInit();

// interface JoinRequestBody {
//   orgId: string;
//   token: string;
//   uid: string;
//   role: "admin" | "standard"; // The membership type
// }

// export async function POST(request: Request) {
//   try {
//     // Parse JSON body
//     const { orgId, token, uid, role } =
//       (await request.json()) as JoinRequestBody;

//     if (!orgId || !token || !uid || !role) {
//       return NextResponse.json(
//         { error: "Missing orgId, token, uid, or role." },
//         { status: 400 }
//       );
//     }

//     const db = getFirestore();
//     const orgRef = db.collection("organisations").doc(orgId);
//         const userRef = db.collection("users").doc(uid);

//     // Use a Firestore transaction to avoid concurrency issues
//     await db.runTransaction(async (transaction) => {
//       const orgSnapshot = await transaction.get(orgRef);
//       if (!orgSnapshot.exists) {
//         throw new Error("Organisation not found.");
//       }

//       const orgData = orgSnapshot.data();
//       if (!orgData) {
//         throw new Error("Organisation data not found.");
//       }

//       // 1) Check token
//       if (
//         !orgData.joinToken ||
//         orgData.joinToken.token !== token ||
//         !orgData.joinToken.valid
//       ) {
//         throw new Error("Invalid or missing token.");
//       }

//       // 2) Check expiry
//       const expiresAt = orgData.joinToken.expiresAt;
//       const expiresDate = new Date(
//         expiresAt.seconds * 1000 + (expiresAt.nanoseconds || 0) / 1_000_000
//       );
//       if (expiresDate < new Date()) {
//         throw new Error("Invitation link has expired.");
//       }

//       // 3) Check seat availability
//       //    We'll consider that both admins and standard users count toward subscription seats
//       const subscriptionQuantity = orgData.subscriptionQuantity || 0;

//       const adminArray = orgData?.members?.admin || [];
//       const standardArray = orgData?.members?.standard || [];

//       // Combined seat usage: admin + standard
//       const totalMembersCount = adminArray.length + standardArray.length;
//       if (totalMembersCount >= subscriptionQuantity) {
//         throw new Error("No seats available in this organisation.");
//       }

//       // 4) Depending on the 'role', push UID into the appropriate array
//       if (role === "admin") {
//         if (!adminArray.includes(uid)) {
//           adminArray.push(uid);
//         }
//       } else {
//         // role === "standard"
//         if (!standardArray.includes(uid)) {
//           standardArray.push(uid);
//         }
//       }

//       // 5) Update Firestore with new arrays
//       transaction.update(orgRef, {
//         "members.admin": adminArray,
//         "members.standard": standardArray,
//       });
//     });

//     // If transaction succeeds
//     return NextResponse.json({
//       success: true,
//       message: "Joined organisation.",
//     });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, error: error.message || "Unknown error." },
//       { status: 400 }
//     );
//   }
// }
