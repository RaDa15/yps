import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import ApplicationCard from "../components/dashboard/ApplicationCard";
import OpportunityCard from "../components/dashboard/OpportunityCard";


function Applications(){


return(

<div
className="
min-h-screen
bg-gray-50
flex
"
>


<Sidebar/>


<div
className="
flex-1
lg:ml-72
"
>


<DashboardNavbar/>


<main
className="
p-6
lg:p-10
space-y-10
"
>


{/* HEADER */}

<div>

<h1
className="
text-4xl
font-bold
text-blue-700
"
>
Your Applications
</h1>


<p
className="
text-gray-600
mt-2
"
>
Track and manage your scholarship and programme applications.
</p>

</div>



{/* APPLICATION LIST */}


<div
className="
space-y-5
max-w-4xl
"
>


<ApplicationCard

title="National Excellence Scholarship"

date="Submitted June 12, 2026"

status="Under Review"

statusColor="
bg-blue-100
text-blue-700
"

description="
Your scholarship application is currently being reviewed.
"

/>



<ApplicationCard

title="Youth Volunteer Network"

date="Starting July 1, 2026"

status="Approved"

statusColor="
bg-green-100
text-green-700
"

description="
You have been selected for the volunteer programme.
"

/>



<ApplicationCard

title="Public Service Internship"

date="Action Required"

status="Missing Document"

statusColor="
bg-red-100
text-red-700
"

description="
Please upload your academic transcript.
"

/>



</div>





{/* OPPORTUNITIES */}


<section>


<h2
className="
text-3xl
font-bold
mb-6
"
>

Discover Opportunities

</h2>


<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"
>


<OpportunityCard

title="STEM Innovation Grant"

category="Science"

description="
Funding support for youth technology projects.
"

/>



<OpportunityCard

title="Japan Cultural Exchange"

category="Global"

description="
Two week international youth exchange programme.
"

/>



<OpportunityCard

title="Advanced Digital Skills"

category="Skills"

description="
Learn modern technology and cloud computing.
"

/>



</div>


</section>



</main>



</div>



</div>

)

}


export default Applications;