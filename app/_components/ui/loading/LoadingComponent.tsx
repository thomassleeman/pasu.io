import Spinner from "../_components/Spinner";

export default function LoadingComponent({ text }: { text?: string }) {
  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center gap-y-6 lg:mt-24">
      <Spinner size="large" />
      <p className="mt-4 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
        {text || "Loading..."}
      </p>
    </div>
  );
}
