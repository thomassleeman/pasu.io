"use client";

import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Spinner from "@/components/design/Spinner";
import { HomeButtonPayload } from "@/types/chatbot";

export default function HomeButton({
  payload,
}: {
  payload: HomeButtonPayload;
}) {
  const { content } = payload;

  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    if (user) {
      router.push(`/home/${user.id}`);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="flex items-center gap-x-4 rounded-md bg-white p-4 shadow-md">
      <p>{content}</p>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="h-6 w-6" />
          </div>
        ) : (
          <HomeIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
