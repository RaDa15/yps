import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function DashboardLayout({children}) {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 ml-72">

        <TopNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}