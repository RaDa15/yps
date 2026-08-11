// src/components/layout/AdminSidebar.jsx

import {
    LayoutDashboard,
    Users,
    UserRoundCog,
    CalendarDays,
    HeartHandshake,
    Award,
    MessageSquare,
    FileText,
    ShieldCheck,
    Settings,
    LogOut
} from "lucide-react";


import { NavLink, useNavigate } from "react-router-dom";





const menuItems = [

    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: LayoutDashboard
    },


    {
        name: "Youth Management",
        path: "/admin/youth",
        icon: Users
    },


    {
        name: "User Management",
        path: "/admin/users",
        icon: UserRoundCog
    },


    {
        name: "Programmes",
        path: "/admin/programmes",
        icon: CalendarDays
    },


    {
        name: "Volunteer Management",
        path: "/admin/volunteers",
        icon: HeartHandshake
    },


    {
        name: "Certificates",
        path: "/admin/certificates",
        icon: Award
    },


    {
        name: "Counselling",
        path: "/admin/counselling",
        icon: MessageSquare
    },


    {
        name: "Reports",
        path: "/admin/reports",
        icon: FileText
    },


    {
        name: "Audit Logs",
        path: "/admin/audit",
        icon: ShieldCheck
    },


    {
        name: "Settings",
        path: "/admin/settings",
        icon: Settings
    }

];









const AdminSidebar = () => {


    const navigate = useNavigate();




    const logout = () => {


        localStorage.removeItem("user");


        navigate("/login");


    };








return (


<div

className="
h-screen
w-full
flex
flex-col
bg-white
border-r
border-gray-200
"

>







{/* LOGO SECTION */}


<div

className="
h-20
flex
items-center
gap-3
px-6
border-b
border-gray-200
"

>


<div

className="
h-11
w-11
rounded-xl
bg-blue-600
flex
items-center
justify-center
text-white
font-bold
"

>

YP

</div>




<div>


<h1

className="
font-bold
text-gray-900
"

>

Youth Portal

</h1>



<p

className="
text-xs
text-gray-500
"

>

Admin Panel

</p>


</div>



</div>













{/* NAVIGATION */}


<nav

className="
flex-1
overflow-y-auto
px-4
py-6
space-y-2
"

>



{

menuItems.map((item)=>{


const Icon = item.icon;



return (


<NavLink


key={item.name}


to={item.path}



className={({isActive}) =>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition-all
duration-200


${
isActive

?

"bg-blue-600 text-white shadow-md"

:

"text-gray-600 hover:bg-blue-50 hover:text-blue-600"

}

`

}



>


<Icon size={20}/>



<span

className="
text-sm
font-medium
"

>

{item.name}

</span>



</NavLink>


)


})


}



</nav>













{/* USER PROFILE */}


<div

className="
border-t
border-gray-200
p-4
"

>




<div

className="
flex
items-center
gap-3
mb-4
"

>


<div

className="
h-10
w-10
rounded-full
bg-blue-100
text-blue-600
flex
items-center
justify-center
font-bold
"

>

A

</div>





<div>


<p

className="
text-sm
font-semibold
text-gray-900
"

>

Administrator

</p>


<p

className="
text-xs
text-gray-500
"

>

PYCD Focal

</p>



</div>


</div>








<button


onClick={logout}



className="
w-full
flex
items-center
justify-center
gap-2
py-3
rounded-xl
bg-red-50
text-red-600
hover:bg-red-100
transition
"

>


<LogOut size={18}/>


Logout


</button>






</div>






</div>


);


};



export default AdminSidebar;