// import { Outlet } from "react-router-dom";
// import DirectorSidebar from "../components/director/DirectorSidebar";

// const DirectorLayout = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Sidebar */}
//       <DirectorSidebar />

//       {/* Main Content */}
//       <main className="ml-72 min-h-screen">
//         <div className="p-6 md:p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DirectorLayout;

import { Outlet } from "react-router-dom";
import DirectorSidebar from "../components/director/DirectorSidebar";
import DirectorHeader from "../components/director/DirectorHeader";

const DirectorLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Sidebar */}
      <DirectorSidebar />

      {/* Main Area */}
      <div className="ml-72">

        {/* Header */}
        <DirectorHeader />

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DirectorLayout;