import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ResourcesNav from "./resourcesNav/NewResourcesNav";

export default function AuthAndResourcesPanel() {
  return (
    <div className="flex items-center gap-x-4 lg:gap-x-8">
      <SignedOut>
        <SignUpButton mode="modal">
          <button className="lg:text-md text-sm font-medium text-green-700 underline underline-offset-4 hover:text-green-900">
            Sign up <span className="hidden lg:inline">for a free account</span>
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
  );
}
