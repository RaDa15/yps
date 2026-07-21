import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";


function DashboardLayout({children}){


return(

<div
className="
min-h-screen
bg-gray-50
flex
"
>


{/* Sidebar */}

<Sidebar />



{/* Content Area */}

<div
className="
flex-1
lg:ml-72
">


<DashboardNavbar />


<main
className="
p-6
lg:p-10
"
>

{children}


</main>


</div>


</div>

)

}


export default DashboardLayout;