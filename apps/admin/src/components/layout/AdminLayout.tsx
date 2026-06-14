import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FB]">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}