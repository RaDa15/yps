import {
Plus,
Search,
Calendar,
Users,
Clock,
X,
Eye,
Edit,
Trash2
} from "lucide-react";


import {
useState
} from "react";



const VolunteerActivityManagement =()=>{


const [showForm,setShowForm]=useState(false);



const activities=[


{
id:1,
title:"Community Cleaning Campaign",
date:"15 July 2026",
volunteers:25,
hours:"5 hrs",
status:"Completed"
},


{
id:2,
title:"Youth Awareness Programme",
date:"20 July 2026",
volunteers:15,
hours:"3 hrs",
status:"Ongoing"
},


{
id:3,
title:"Tree Plantation Drive",
date:"25 July 2026",
volunteers:30,
hours:"6 hrs",
status:"Upcoming"
}


];





return(


<div className="
space-y-6
w-full
">





{/* Header */}


<div className="
bg-white
rounded-xl
shadow-sm
p-6
flex
flex-col
md:flex-row
justify-between
md:items-center
gap-4
">


<div>


<h1 className="
text-3xl
font-bold
">

Volunteer Activity Management

</h1>


<p className="
text-gray-500
">

Create and monitor volunteer activities

</p>


</div>





<button

onClick={()=>setShowForm(true)}

className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
"

>


<Plus size={20}/>

Create Activity


</button>


</div>









{/* Stats */}


<div className="
grid
grid-cols-1
md:grid-cols-4
gap-5
">


<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Total Activities
</p>

<h2 className="
text-3xl
font-bold
">

36

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Active Activities
</p>

<h2 className="
text-3xl
font-bold
text-blue-600
">

8

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Volunteer Hours
</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

450

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Participants
</p>

<h2 className="
text-3xl
font-bold
text-purple-600
">

320

</h2>

</div>


</div>









{/* Search */}


<div className="
bg-white
p-4
rounded-xl
shadow
flex
items-center
gap-3
">


<Search size={20}/>


<input

placeholder="Search activity..."

className="
outline-none
w-full
"

/>


</div>









{/* Table */}



<div className="
bg-white
rounded-xl
shadow
overflow-hidden
">



<table className="
w-full
table-fixed
">



<thead className="
bg-blue-50
">


<tr>


<th className="
p-4
text-left
w-[30%]
">

Activity

</th>


<th className="
p-4
text-left
w-[15%]
">

Date

</th>


<th className="
p-4
text-left
w-[15%]
">

Volunteers

</th>


<th className="
p-4
text-left
w-[15%]
">

Hours

</th>


<th className="
p-4
text-left
w-[15%]
">

Status

</th>


<th className="
p-4
text-center
w-[10%]
">

Action

</th>



</tr>


</thead>







<tbody>



{

activities.map((activity)=>(


<tr

key={activity.id}

className="
border-t
hover:bg-gray-50
"

>





<td className="
p-4
">

<div className="
flex
items-center
gap-2
">

<Calendar size={18}/>

{activity.title}


</div>

</td>







<td className="
p-4
">

{activity.date}

</td>








<td className="
p-4
">


<div className="
flex
items-center
gap-2
">

<Users size={18}/>

{activity.volunteers}


</div>


</td>








<td className="
p-4
">


<div className="
flex
items-center
gap-2
">

<Clock size={18}/>

{activity.hours}


</div>


</td>








<td className="
p-4
">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
">

{activity.status}

</span>


</td>









{/* ACTION COLUMN */}


<td className="
p-4
">


<div className="
flex
justify-center
gap-2
">


<button

className="
w-8
h-8
rounded-lg
bg-blue-50
text-blue-600
flex
items-center
justify-center
hover:bg-blue-100
"

>

<Eye size={16}/>

</button>






<button

className="
w-8
h-8
rounded-lg
bg-green-50
text-green-600
flex
items-center
justify-center
hover:bg-green-100
"

>

<Edit size={16}/>

</button>







<button

className="
w-8
h-8
rounded-lg
bg-red-50
text-red-600
flex
items-center
justify-center
hover:bg-red-100
"

>

<Trash2 size={16}/>

</button>




</div>


</td>





</tr>


))


}



</tbody>



</table>



</div>









{/* Modal */}


{

showForm &&


<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-2xl
p-8
w-full
max-w-2xl
">



<div className="
flex
justify-between
mb-6
">


<h2 className="
text-2xl
font-bold
">

Create Volunteer Activity

</h2>



<button

onClick={()=>setShowForm(false)}

>

<X/>

</button>


</div>





<input

placeholder="Activity Name"

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>




<input

type="date"

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>





<input

placeholder="Location"

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>






<textarea

placeholder="Activity Description"

className="
w-full
border
rounded-xl
p-3
"

/>






<button

className="
mt-6
w-full
bg-green-600
text-white
py-3
rounded-xl
"

>

Save Activity

</button>




</div>


</div>



}



</div>


)

}


export default VolunteerActivityManagement;