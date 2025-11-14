// app/_components/ui/nav/Nav.tsx

import Image from "next/image";
import brainLogo from "@/components/design/brainLogo.png";
import AuthAndResourcesPanel from "./_components/AuthAndResourcesPanel";
import HomeButton from "../HomeButton";

export default async function Nav() {
  return (
    <nav className="shadow">
      <div className="mx-auto my-1 px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Image
            className="h-5/6 w-auto pr-12 drop-shadow-lg"
            src={brainLogo}
            alt="Pasu Logo"
          />
          <AuthAndResourcesPanel />
        </div>
      </div>
    </nav>
  );
}
