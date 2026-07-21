function DashboardNavbar(){

return(

<header
className="
h-20
bg-white
border-b
flex
items-center
justify-between
px-6
lg:px-10
"
>


<div>

<input
type="text"
placeholder="Search opportunities, courses..."
className="
rounded-full
bg-gray-100
px-5
py-3
w-80
"
/>

</div>



<div className="
flex
items-center
gap-4
">


<button>

🔔

</button>


<button>

?

</button>


</div>


</header>

)

}


export default DashboardNavbar;