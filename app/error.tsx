"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-red-600">
          Oops!
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred. Please try again.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-[#0B4EA2] px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}