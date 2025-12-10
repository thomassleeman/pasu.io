import brainLogoCompressed from "@/components/design/brainLogoCompressed.png";
import Image from "next/image";

export default function BotAvatar() {
  return (
    <>
      <Image
        alt="Pasu Health Logo"
        src={brainLogoCompressed}
        className="h-10 w-auto pr-4 drop-shadow-lg"
      />
    </>
  );
}
