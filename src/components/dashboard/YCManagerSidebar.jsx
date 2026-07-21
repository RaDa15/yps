import {
Link,
useLocation,
useNavigate
} from "react-router-dom";


import {

LayoutDashboard,
Users,
RefreshCcw,
UserPlus,
Activity,
FileBadge,
Calendar,
FileText,
Trophy,
Lightbulb,
MessageSquare,
Brain,
Settings,
LogOut

} from "lucide-react";





const YCManagerSidebar =()=>{


const location = useLocation();

const navigate = useNavigate();




const handleLogout=()=>{

localStorage.clear();

navigate("/login");

};





const menu=[


{
name:"Dashboard",
icon:LayoutDashboard,
path:"/yc-manager-dashboard"
},


{
name:"Youth Registration",
icon:Users,
path:"/youth-registration"
},


{
name:"Member Transfer",
icon:RefreshCcw,
path:"/member-transfer"
},


{
name:"Volunteer Registration",
icon:UserPlus,
path:"/volunteer-registration"
},


{
name:"Volunteer Activities",
icon:Activity,
path:"/volunteer-activities"
},


{
name:"E-Certificate",
icon:FileBadge,
path:"/certificates"
},


{
name:"Programme Management",
icon:Calendar,
path:"/programmes"
},


{
name:"Programme Reporting",
icon:FileText,
path:"/programme-reports"
},


{
name:"Achievement Tracking",
icon:Trophy,
path:"/achievements"
},


{
name:"Additional Initiatives",
icon:Lightbulb,
path:"/initiatives"
},


{
name:"Feedback Management",
icon:MessageSquare,
path:"/feedback"
},


{
name:"Counselling Booking",
icon:Brain,
path:"/counselling"
},


{
name:"Settings",
icon:Settings,
path:"/yc-settings"
}



];







return(


<aside

className="
hidden
lg:flex
fixed
left-0
top-0
h-screen
w-64
bg-white
border-r
border-gray-200
flex-col
px-5
py-6
z-50
"

>







{/* Logo */}



<div className="
mb-8
">


<h1

className="
text-xl
font-bold
text-blue-700
"

>

Youth Portal

</h1>



<p

className="
text-xs
text-gray-500
mt-1
"

>

YC Manager Panel

</p>


</div>









{/* Navigation */}



<nav

className="
flex-1
space-y-1
overflow-y-auto
pr-1
"

>


{

menu.map((item,index)=>{


const Icon=item.icon;


const active =
location.pathname === item.path;



return(


<Link

key={index}

to={item.path}


className={`

flex
items-center
gap-3
px-3
py-2.5
rounded-xl
transition-all
duration-300
text-sm
font-medium


${
active

?

"bg-blue-600 text-white shadow-md shadow-blue-200"

:

"text-gray-600 hover:bg-blue-50 hover:text-blue-700"

}


`}

>


<Icon

size={19}

strokeWidth={2}

/>



<span>

{item.name}

</span>



</Link>


)


})


}



</nav>









{/* Bottom User Section */}



<div

className="
mt-4
space-y-3
"

>







{/* Profile Card */}



<div

className="
bg-blue-50
rounded-xl
p-3
"

>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-10
h-10
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
text-sm
"

>

SD

</div>




<div>


<h3

className="
text-sm
font-semibold
text-gray-800
"

>

Sonam Dorji

</h3>



<p

className="
text-xs
text-gray-500
"

>

YC Manager

</p>


</div>


</div>


</div>









{/* Logout Button */}



<button

onClick={handleLogout}

className="

flex
items-center
gap-3
w-full
px-3
py-2.5
rounded-xl
text-red-600
hover:bg-red-50
transition-all
duration-300
text-sm
font-medium

"

>


<LogOut

size={18}

/>


<span>

Logout

</span>



</button>






</div>








</aside>


)


}



export default YCManagerSidebar;