import { Outlet } from "react-router-dom";
import NationalSidebar from "../components/national/NationalSidebar";
import NationalHeader from "../components/national/NationalHeader";

const NationalLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <NationalSidebar />

      <main className="ml-72 min-h-screen">

        <NationalHeader />

        <div className="p-6 md:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default NationalLayout;