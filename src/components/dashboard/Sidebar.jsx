import { 
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";


import {
  LayoutDashboard,
  User,
  FileText,
  GraduationCap,
  Award,
  Settings,
  LogOut
} from "lucide-react";



function Sidebar(){


const location = useLocation();

const navigate = useNavigate();





const handleLogout = () => {


  // Clear user session/data

  localStorage.removeItem("user");

  localStorage.removeItem("role");



  // Redirect to login page

  navigate("/login");


};





const menu = [


{
name:"Dashboard",
icon:LayoutDashboard,
path:"/dashboard"
},


{
name:"Profile",
icon:User,
path:"/profile"
},


{
name:"Applications",
icon:FileText,
path:"/applications"
},


{
name:"Scholarships",
icon:GraduationCap,
path:"/scholarships"
},


{
name:"Youth Quest",
icon:Award,
path:"/youth-quest"
},


{
name:"Settings",
icon:Settings,
path:"/settings"
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
w-72
bg-white
border-r
border-gray-200
flex-col
px-6
py-8
z-50
"

>





{/* Logo Section */}


<div className="mb-10">


<h1

className="
text-2xl
font-bold
text-blue-700
"

>

Youth Portal

</h1>



<p

className="
text-sm
text-gray-500
mt-1
"

>

Empowering Bhutan's Future

</p>


</div>









{/* Navigation */}


<nav

className="
flex-1
space-y-2
"

>


{

menu.map((item,index)=>{


const Icon = item.icon;


const active = location.pathname === item.path;



return(


<Link

key={index}

to={item.path}

className={`

flex
items-center
gap-4
px-4
py-3
rounded-xl
transition-all
duration-300


${

active

?

"bg-blue-600 text-white shadow-lg shadow-blue-200"

:

"text-gray-600 hover:bg-blue-50 hover:text-blue-700"

}

`}

>


<Icon

size={21}

strokeWidth={2}

/>




<span

className="
font-medium
"

>

{item.name}

</span>



</Link>


)


})

}


</nav>









{/* User Profile Card */}


<div

className="
bg-blue-50
rounded-2xl
p-4
mb-4
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
w-12
h-12
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
"

>

SD

</div>





<div>


<h3

className="
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

Youth Member

</p>


</div>



</div>


</div>









{/* Logout */}


<button

onClick={handleLogout}

className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-red-500
hover:bg-red-50
transition
"

>


<LogOut size={20}/>


<span>

Logout

</span>


</button>






</aside>


)


}



export default Sidebar;