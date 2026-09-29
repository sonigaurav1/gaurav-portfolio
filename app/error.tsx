'use client';

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
