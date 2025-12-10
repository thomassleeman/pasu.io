import { UserIcon } from "@heroicons/react/24/outline";

export default function UserIndicator() {
  return (
    <div className="ml-4 flex h-12 w-12 items-center justify-center self-center justify-self-end rounded-full bg-gradient-to-r from-purple-500/75 to-pink-500/75 p-3 drop-shadow-lg hover:outline hover:outline-2 hover:outline-sky-500">
      <UserIcon className="h-8 w-8 text-white" />
    </div>
  );
}
