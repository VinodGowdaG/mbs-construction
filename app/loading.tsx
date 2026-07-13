export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#0B4EA2] border-t-[#D62828]" />

        <h2 className="mt-6 text-2xl font-bold text-[#0B4EA2]">
          MBS Construction
        </h2>

        <p className="mt-2 text-gray-600">
          Loading...
        </p>
      </div>
    </main>
  );
}