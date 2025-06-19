import { auth } from "firebase-admin";
import { adminInit } from "@/firebase/auth/adminConfig";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
adminInit();

/* POST */
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const authorization = headers().get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
      const idToken = authorization.split("Bearer ")[1];
      const decodedToken: auth.DecodedIdToken = await auth().verifyIdToken(
        idToken
      );

      if (decodedToken) {
        //Set session expiration to 14 days. This is the firebase max.
        const expiresIn = 60 * 60 * 24 * 14 * 1000;
        // const expiresIn = 60000 * 5;
        //Generate session cookie
        const sessionCookie = await auth().createSessionCookie(idToken, {
          expiresIn,
        });
        const options = {
          name: "session",
          value: sessionCookie,
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
        };

        //Add the cookie to the browser
        cookies().set(options);

        //send back confirmed user details
        return NextResponse.json({ decodedToken }, { status: 200 });
      }
    }
    //move return statement back down here if this breaks!
  } catch (error) {
    console.error("******Error in POST handler:", error);
    return NextResponse.json(
      { error: "Unauthorised request." },
      { status: 401 }
    );
  }
}

/* GET */
export async function GET(request: NextRequest) {
  //Get the session cookie from the browser
  const session = request.headers.get("Cookie");

  //Validate if the cookie exists
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  //Use Firebase Admin to validate the session cookie
  const decodedClaims: auth.DecodedIdToken = await auth().verifySessionCookie(
    session,
    true
  );

  if (!decodedClaims) {
    cookies().delete("session");
    console.log("session cookie deleted");
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  // console.log("decoded claims /signin route:", decodedClaims);

  return NextResponse.json({ decodedClaims }, { status: 200 });
}
