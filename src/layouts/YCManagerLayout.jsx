import { Outlet } from "react-router-dom";
import YCManagerSidebar from "../components/ycmanager/YCManagerSidebar";
import YCManagerHeader from "../components/ycmanager/YCManagerHeader";

const YCManagerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          YC MANAGER SIDEBAR
      ========================== */}
      <YCManagerSidebar />

      {/* =========================
          MAIN AREA
      ========================== */}
      <main className="ml-72 min-h-screen">

        {/* HEADER */}
        <YCManagerHeader />

        {/* PAGE CONTENT */}
        <div className="p-6 md:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default YCManagerLayout;
