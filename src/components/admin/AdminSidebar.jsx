import {

LayoutDashboard,
Users,
Shield,
Building2,
CalendarDays,
FileText,
History,
Settings,
LogOut

} from "lucide-react";


import {

useLocation,
Link,
useNavigate

} from "react-router-dom";





const AdminSidebar=()=>{


const location = useLocation();

const navigate = useNavigate();





const logout=()=>{


localStorage.clear();

navigate("/login");


};







const menu=[


{
name:"Dashboard",
icon:LayoutDashboard,
path:"/admin-dashboard"
},


{
name:"User Management",
icon:Users,
path:"/admin-users"
},


{
name:"Roles & Permission",
icon:Shield,
path:"/admin-roles"
},


{
name:"Youth Centres",
icon:Building2,
path:"/admin-centres"
},


{
name:"Programme Review",
icon:CalendarDays,
path:"/admin-programmes"
},


{
name:"Reports",
icon:FileText,
path:"/admin-reports"
},


{
name:"Audit Logs",
icon:History,
path:"/admin-logs"
},


{
name:"Settings",
icon:Settings,
path:"/admin-settings"
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


<h1 className="
text-xl
font-bold
text-blue-700
">

Youth Portal

</h1>


<p className="
text-xs
text-gray-500
mt-1
">

PYCD Admin

</p>


</div>









{/* Menu */}



<nav

className="
flex-1
space-y-1
overflow-y-auto
"

>


{

menu.map((item,index)=>{


const Icon=item.icon;


const active=

location.pathname===item.path;



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
rounded-lg
transition-all
duration-300
text-sm


${
active

?

"bg-blue-600 text-white shadow-md"

:

"text-gray-600 hover:bg-blue-50 hover:text-blue-700"

}

`}


>


<Icon

size={19}

/>


<span>

{item.name}

</span>


</Link>


)


})

}


</nav>









{/* Profile + Logout */}



<div className="
mt-4
space-y-3
">





{/* Profile */}



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

KW

</div>





<div>


<p className="
text-sm
font-semibold
text-gray-800
">

Karma Wangmo

</p>


<p className="
text-xs
text-gray-500
">

PYCD Admin

</p>


</div>


</div>


</div>








{/* Logout */}



<button

onClick={logout}

className="
flex
items-center
gap-3
w-full
px-3
py-2.5
rounded-lg
text-red-600
hover:bg-red-50
transition
text-sm
"

>


<LogOut size={18}/>


<span>

Logout

</span>


</button>





</div>








</aside>


)


}



export default AdminSidebar;