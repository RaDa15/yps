import { Outlet } from "react-router-dom";
import NetworkSidebar from "../components/network/NetworkSidebar";
import NetworkHeader from "../components/network/NetworkHeader";

const NetworkLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <NetworkSidebar />

      <main className="ml-72 min-h-screen">

        <NetworkHeader />

        <div className="p-6 md:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default NetworkLayout;