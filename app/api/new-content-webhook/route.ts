import { NextRequest, NextResponse } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
// Firebase Admin SDK
import { adminInit } from "@/firebase/auth/adminConfig";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

adminInit();
const db = getFirestore();

const secret = process.env.SANITY_WEBHOOK_SECRET || "";

// Define the Payload interface
interface Payload {
  _id: string;
  title: string;
  description?: string;
  slug?: { current?: string };
  _type: string;
}

export async function POST(request: NextRequest) {
  // Retrieve the signature from the headers
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) || "";
  // Read the raw body as text
  const body = await request.text();

  // Verify the webhook signature
  if (!(await isValidSignature(body, signature, secret))) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  // Parse the body as JSON after verification and type it as Payload
  const payload: Payload = JSON.parse(body);

  console.log("Sanity webhook body:", payload);

  // Extract necessary data from the webhook payload
  const { _id, title, description, slug, _type } = payload;

  // Determine the content type for the announcement
  const contentTypeMap: { [key: string]: { name: string; path: string } } = {
    burnoutStory: { name: "Burnout Story", path: "burnout-stories" },
    article: { name: "Article", path: "articles" },
    course: { name: "Course", path: "courses" },
    writingExercise: { name: "Writing Exercise", path: "writing-exercises" },
  };

  // Ensure _type is a string and index contentTypeMap safely
  const contentType = contentTypeMap[_type] || { name: "Content", path: "" };
  console.log("content type: ", contentType);

  // Create an announcement object
  const announcement: any = {
    title: `New ${contentType.name}: ${title}`,
    href: `/${contentType.path}/${slug?.current || _id}`,
    createdAt: FieldValue.serverTimestamp(),
    expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // Expires in 14 days
    type: _type,
  };

  // Add the announcement to Firestore
  try {
    await db.collection("announcements").add(announcement);
    return NextResponse.json({ message: "Announcement created" });
  } catch (error) {
    console.error("Error adding announcement:", error);
    return NextResponse.json(
      { message: "Failed to create announcement" },
      { status: 500 }
    );
  }
}
