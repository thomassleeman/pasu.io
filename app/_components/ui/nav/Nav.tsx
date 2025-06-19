// app/_components/ui/nav/Nav.tsx

import Image from "next/image";
import brainLogo from "@/components/design/brainLogo.png";
import ResourcesNav from "./_components/resourcesNav/NewResourcesNav";

//clerk
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default async function Nav() {
  // const homeUrl = user?.uid ? `/home/${user.uid}` : "/signin";

  return (
    <nav className="shadow">
      <div className="mx-auto my-1 px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Image
            className="h-5/6 w-auto pr-12 drop-shadow-lg"
            src={brainLogo}
            alt="MindHub Logo"
          />
          <div className="flex items-center gap-x-4 lg:gap-x-8">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="lg:text-md text-sm font-medium text-green-700 underline underline-offset-4 hover:text-green-900">
                  Sign up{" "}
                  <span className="hidden lg:inline">for a free account</span>
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="rounded-lg border border-slate-600 bg-transparent px-2 py-1 text-xs text-slate-600">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <ResourcesNav />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
