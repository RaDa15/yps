import {
    Bell,
    UserCircle,
    LogOut
} from "lucide-react";


const AdminHeader = () => {


return (

<header

className="
fixed
top-0
right-0
lg:left-80
h-20
bg-white
border-b
border-gray-200
z-40
flex
items-center
justify-end
px-8
"

>


<div
className="
flex
items-center
gap-6
"
>


{/* Notification */}

<button
className="
relative
text-gray-600
hover:text-blue-600
"
>

<Bell size={22}/>

<span
className="
absolute
top-0
right-0
w-2
h-2
bg-red-500
rounded-full
"
/>

</button>



{/* Profile */}

<div
className="
flex
items-center
gap-3
"
>


<UserCircle
size={42}
className="text-blue-600"
/>


<div>

<p
className="
font-semibold
text-gray-900
"
>
PYCD Admin
</p>


<p
className="
text-xs
text-gray-500
"
>
Super Administrator
</p>


</div>



</div>




<button

className="
flex
items-center
gap-2
text-gray-500
hover:text-red-600
"

>

<LogOut size={20}/>

</button>



</div>



</header>

)

}


export default AdminHeader;