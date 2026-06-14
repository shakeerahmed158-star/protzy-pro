export default function AdminNavbar() {
  return (
    <header
      className="
      h-20
      bg-white
      border-b
      border-gray-200
      px-8
      flex
      items-center
      justify-between
      "
    >
      <input
        placeholder="Search dealers, orders..."
        className="
        w-96
        rounded-xl
        border
        border-gray-300
        px-4
        py-3
        outline-none
        "
      />

      <div className="flex items-center gap-4">

        <button
          className="
          px-5
          py-2
          rounded-xl
          bg-[#FFD60A]
          font-semibold
          "
        >
          Notifications
        </button>

        <div
          className="
          h-12
          w-12
          rounded-full
          bg-[#FFD60A]
          "
        />
      </div>
    </header>
  );
}