export default function BuyLoading() {

  return (
    <div className="flex items-center justify-center py-32">

      <div className="flex flex-col items-center">

        <div className="h-16 w-16 rounded-full border-4 border-zinc-200 border-t-black animate-spin" />

        <p className="mt-5 text-zinc-500 font-medium">
          Loading premium devices...
        </p>

      </div>
    </div>
  );
}