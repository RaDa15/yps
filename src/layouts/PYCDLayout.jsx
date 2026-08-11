import { Outlet } from "react-router-dom";

import PYCDSidebar from "../components/pycd/PYCDSidebar";
import PYCDHeader from "../components/pycd/PYCDHeader";


const PYCDLayout = () => {


return (

<div className="min-h-screen bg-gray-100">


    {/* SIDEBAR */}

    <PYCDSidebar />



    {/* MAIN CONTENT AREA */}

    <div className="ml-72">


        {/* HEADER */}

        <PYCDHeader />



        {/* PAGE CONTENT */}

        <main className="
        p-6
        max-w-7xl
        mx-auto
        ">


            <Outlet />


        </main>


    </div>



</div>

);


};


export default PYCDLayout;