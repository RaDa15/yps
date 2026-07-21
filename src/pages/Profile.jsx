import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import {
  BadgeCheck,
  Award,
  Users,
  Clock,
  Calendar,
  MapPin,
  Trophy
} from "lucide-react";


function Profile(){


return (

<div className="
min-h-screen
bg-gray-50
flex
">


{/* Sidebar */}

<Sidebar />



{/* Main Content */}

<div className="
flex-1
lg:ml-72
">


<DashboardNavbar />



<main className="
p-6
lg:p-10
space-y-8
">



{/* Profile Header */}


<section className="
bg-white
rounded-3xl
shadow-sm
border
border-gray-100
p-8
">


<div className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
">


<div className="
flex
items-center
gap-6
">


<img

src="https://i.pravatar.cc/150"

className="
w-28
h-28
rounded-full
object-cover
border-4
border-blue-100
"

/>



<div>


<h1 className="
text-3xl
font-bold
text-gray-900
">

Kuzuzangpo, Sonam

</h1>


<div className="
flex
items-center
gap-2
text-green-600
mt-2
">

<BadgeCheck size={20}/>

Verified Youth Member

</div>


<p className="
text-gray-500
mt-3
">

Passionate about technology, volunteering and community development.

</p>


</div>


</div>



<button

className="
bg-blue-700
text-white
px-6
py-3
rounded-xl
font-semibold
hover:bg-blue-800
transition
"

>

Show Youth ID Card

</button>


</div>



{/* Volunteer Progress */}

<div className="
mt-8
border-t
pt-6
">


<div className="
flex
justify-between
mb-2
">

<span className="
text-gray-500
font-medium
">

Volunteer Goal

</span>


<span className="
font-bold
text-blue-700
">

142 / 150 hrs

</span>


</div>



<div className="
w-full
bg-gray-200
h-3
rounded-full
overflow-hidden
">


<div

className="
bg-green-500
h-full
rounded-full
"

style={{
width:"94%"
}}

/>


</div>


</div>


</section>





{/* Profile Statistics */}


<section className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">


<ProfileStat

icon={<Award/>}

title="Certificates"

value="4 Earned"

/>


<ProfileStat

icon={<Users/>}

title="Programmes"

value="7 Joined"

/>



<ProfileStat

icon={<Clock/>}

title="Volunteer Hours"

value="142 hrs"

/>



</section>





{/* Information Section */}


<section className="
grid
grid-cols-1
lg:grid-cols-2
gap-8
">


{/* Personal Information */}


<div className="
bg-white
rounded-3xl
border
border-gray-100
p-6
shadow-sm
">


<h2 className="
text-xl
font-bold
mb-6
">

Personal Information

</h2>


<div className="space-y-5">


<Info

label="Location"

value="Thimphu, Bhutan"

icon={<MapPin/>}

/>



<Info

label="Joined Date"

value="January 2026"

icon={<Calendar/>}

/>



<Info

label="Achievement Level"

value="Gold Youth"

icon={<Trophy/>}

/>


</div>


</div>





{/* Achievement Timeline */}


<div className="
bg-white
rounded-3xl
border
border-gray-100
p-6
shadow-sm
">


<h2 className="
text-xl
font-bold
mb-6
">

Achievement Timeline

</h2>



<div className="space-y-6">


<Timeline

date="October 2025"

title="ASEAN Youth Exchange"

description="Represented Bhutan in international youth programme."

/>


<Timeline

date="August 2025"

title="Digital Skills Workshop"

description="Completed frontend development training."

/>



<Timeline

date="July 2025"

title="Community Service Award"

description="Recognized for river cleaning initiative."

/>


</div>


</div>



</section>




</main>



</div>


</div>

)

}




function ProfileStat({icon,title,value}){

return (

<div className="
bg-white
rounded-3xl
border
border-gray-100
p-6
flex
items-center
gap-5
shadow-sm
hover:shadow-lg
transition
">


<div className="
w-14
h-14
rounded-2xl
bg-blue-100
text-blue-700
flex
items-center
justify-center
">

{icon}

</div>



<div>

<p className="
text-gray-500
text-sm
">

{title}

</p>


<h3 className="
text-2xl
font-bold
">

{value}

</h3>


</div>



</div>

)

}




function Info({icon,label,value}){


return (

<div className="
flex
items-center
gap-4
">


<div className="
text-blue-700
">

{icon}

</div>


<div>

<p className="
text-sm
text-gray-400
">

{label}

</p>


<p className="
font-semibold
">

{value}

</p>


</div>


</div>


)

}





function Timeline({date,title,description}){


return (

<div className="
border-l-4
border-blue-600
pl-5
">


<p className="
text-sm
text-gray-400
">

{date}

</p>


<h3 className="
font-bold
mt-1
">

{title}

</h3>


<p className="
text-gray-500
text-sm
mt-1
">

{description}

</p>


</div>


)

}



export default Profile;