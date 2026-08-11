import DirectorSidebar from "../../components/director/DirectorSidebar";
import DirectorHeader from "../../components/director/DirectorHeader";

import { Outlet } from "react-router-dom";


const DirectorDashboard = () => {


return (

<div className="min-h-screen bg-gray-100">


{/* SIDEBAR */}

<DirectorSidebar />



{/* MAIN */}

<main className="ml-72 p-6">


<div className="max-w-7xl mx-auto space-y-6">


{/* HEADER */}

<DirectorHeader />



{/* CHILD PAGE CONTENT */}

<Outlet />



</div>


</main>


</div>

);


};


export default DirectorDashboard;