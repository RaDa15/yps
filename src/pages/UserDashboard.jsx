// import DashboardLayout from "../components/dashboard/DashboardLayout";
// import WelcomeCard from "../components/dashboard/WelcomeCard";
// import StatCard from "../components/dashboard/StatCard";
// import DashboardHero from "../components/dashboard/DashboardHero";
// import StatsOverview from "../components/dashboard/StatsOverview";

// function UserDashboard(){


// return(

// <DashboardLayout>


// <div className="
// space-y-8
// ">


// <DashboardHero />



// <div className="
// grid
// grid-cols-1
// md:grid-cols-3
// gap-6
// ">

// <StatsOverview />

// </div>


// </div>


// </DashboardLayout>

// )

// }


// export default UserDashboard;

import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsOverview from "../components/dashboard/StatsOverview";
import ApplicationCard from "../components/dashboard/ApplicationCard";
import App from "../App";


function UserDashboard(){

return (

<div className="
min-h-screen
bg-gray-50
flex
">


{/* Sidebar */}

<Sidebar />



{/* Main Content Area */}

<div className="
flex-1
lg:ml-72
w-full
">


{/* Navbar */}

<DashboardNavbar />



{/* Dashboard Content */}

<main className="
w-full
px-10
py-15
lg:px-10
">


<div className="
w-full
space-y-10
">


{/* Welcome */}

<WelcomeCard />



{/* Statistics */}

<StatsOverview />


<ApplicationCard />

</div>


</main>



</div>


</div>

)

}


export default UserDashboard;