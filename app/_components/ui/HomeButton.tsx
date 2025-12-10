"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Spinner from "@/components/design/Spinner";

export default function HomeButton() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (isSignedIn && user) {
      router.push(`/home/${user.id}`);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isLoaded}
      className="rounded-md px-4 py-2 text-emerald-600"
    >
      {!isLoaded ? (
        <div className="flex items-center justify-center gap-2">
          <Spinner className="h-6 w-6" />
        </div>
      ) : (
        <HomeIcon className="h-6 w-6" />
      )}
    </button>
  );
}
