import { Spinner } from "@heroui/react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center gap-8 min-h-screen justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    </div>
  );
}
