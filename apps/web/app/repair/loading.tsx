export default function Loading() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

      <div className="text-center">

        <div className="h-14 w-14 border-4 border-zinc-300 border-t-black rounded-full animate-spin mx-auto" />

        <p className="mt-5 text-zinc-500 font-semibold">
          Loading...
        </p>

      </div>

    </div>
  );
}