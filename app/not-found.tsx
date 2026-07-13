import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}