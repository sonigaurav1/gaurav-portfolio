import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-white mb-4">404</h1>
      <p className="text-slate-400 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
