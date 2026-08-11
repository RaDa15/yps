// import { Outlet } from "react-router-dom";
// import TEODEOSidebar from "../components/teodeo/TEODEOSidebar";


// const TEODEOLayout = () => {

// return (

// <div className="min-h-screen bg-gray-50">

//   <TEODEOSidebar />


//   <main className="ml-72 min-h-screen">

//     <div className="p-6 md:p-8">

//       <Outlet />

//     </div>

//   </main>


// </div>

// );

// };


// export default TEODEOLayout;

import { Outlet } from "react-router-dom";
import TEODEOSidebar from "../components/teodeo/TEODEOSidebar";
import TEODEOHeader from "../components/teodeo/TEODEOHeader";

const TEODEOLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <TEODEOSidebar />

      <div className="ml-72">

        <TEODEOHeader />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default TEODEOLayout;