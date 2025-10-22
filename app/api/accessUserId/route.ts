import { getAuth } from "firebase-admin/auth";
import { adminInit } from "@/firebase/auth/adminConfig";
import { NextRequest, NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
adminInit();

export async function POST(request: NextRequest) {
  //get session coookie
  const session = request.cookies.get("session");
  const sessionCookie = session?.value;

  //typechecks: check session cookie exists and is a string
  if (!sessionCookie) {
    return NextResponse.json(
      { error: "No session cookie found." },
      { status: 401 }
    );
  }

  if (typeof sessionCookie !== "string") {
    return NextResponse.json(
      { error: "Invalid session cookie" },
      { status: 401 }
    );
  }

  //Verify session cookie
  const decodedClaims = await getAuth().verifySessionCookie(
    sessionCookie,
    true
  );

  //Get the userID from the decoded cookie
  const userID = decodedClaims.uid;

  return NextResponse.json({ userID });
}
