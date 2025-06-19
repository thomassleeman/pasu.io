// app/home/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomeRedirect() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  // Always redirect to the user's specific page
  redirect(`/home/${userId}`);
}
