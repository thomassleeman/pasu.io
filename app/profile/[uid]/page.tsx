// profile/[uid]/page.tsx
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { verifyAuth } from "@/app/actions/authAction";
import { getFirestoreUser } from "@/app/actions/dbUserAction";
import ProfileContent from "./ProfileContent";
import Loading from "./loading";
import ErrorBoundary from "./components/ErrorBoundary";

export default function ProfilePage({ params }: { params: Promise<{ uid: string }> }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="mt-8 text-red-600">
          Something went wrong loading the profile
        </div>
      }
    >
      <Suspense fallback={<Loading />}>
        <ProfilePageContent params={params} />
      </Suspense>
    </ErrorBoundary>
  );
}

async function ProfilePageContent({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  // Server-side auth verification
  const authUser = await verifyAuth({ returnClaims: true });

  if (!authUser) {
    redirect("/signin");
  }

  // Check if user is viewing their own profile
  if (authUser.uid !== uid) {
    redirect(`/profile/${authUser.uid}`);
  }

  // Fetch Firestore user data
  const firestoreUser = await getFirestoreUser(uid);

  if (!firestoreUser) {
    throw new Error("User data not found");
  }

  return <ProfileContent firestoreUser={firestoreUser} userId={uid} />;
}
