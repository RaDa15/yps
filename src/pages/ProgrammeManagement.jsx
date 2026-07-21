import {
  Plus,
  Search,
  Calendar,
  MapPin,
  Users,
  Edit,
  Eye,
  Trash2,
  X
} from "lucide-react";

import { useState } from "react";



const ProgrammeManagement = () => {


  const [showForm, setShowForm] = useState(false);



  const programmes = [

    {
      id:1,
      title:"Youth Leadership Training",
      category:"Leadership",
      date:"25 July 2026",
      location:"Thimphu Youth Centre",
      participants:45,
      status:"Upcoming"
    },

    {
      id:2,
      title:"Career Guidance Workshop",
      category:"Career",
      date:"10 July 2026",
      location:"Youth Hall",
      participants:60,
      status:"Completed"
    },

    {
      id:3,
      title:"Environmental Awareness Campaign",
      category:"Environment",
      date:"30 July 2026",
      location:"Community Park",
      participants:80,
      status:"Ongoing"
    }

  ];





return (

<div className="space-y-6 w-full">



{/* HEADER */}

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
text-gray-800
">

Programme Management

</h1>


<p className="
text-gray-500
mt-1
">

Create and manage youth programmes

</p>


</div>





<button

onClick={()=>setShowForm(true)}

className="
bg-blue-600
hover:bg-blue-700
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

Create Programme


</button>


</div>








{/* STATS */}


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

<p className="text-gray-500">
Total Programmes
</p>

<h2 className="text-3xl font-bold">
52
</h2>

</div>




<div className="
bg-white
p-5
rounded-xl
shadow
">

<p className="text-gray-500">
Upcoming
</p>

<h2 className="
text-3xl
font-bold
text-blue-600
">

12

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p className="text-gray-500">
Participants
</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

1200

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p className="text-gray-500">
Completed
</p>

<h2 className="
text-3xl
font-bold
text-purple-600
">

40

</h2>

</div>


</div>









{/* SEARCH */}

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

placeholder="Search programme..."

className="
outline-none
w-full
"

/>


</div>










{/* TABLE */}


<div className="
bg-white
rounded-xl
shadow
overflow-x-auto
">


<table className="
min-w-full
table-auto
">


<thead className="
bg-blue-50
">


<tr>


<th className="
p-4
text-left
">

Programme

</th>


<th className="
p-4
text-left
">

Category

</th>


<th className="
p-4
text-left
">

Date

</th>


<th className="
p-4
text-left
">

Location

</th>


<th className="
p-4
text-left
">

Participants

</th>


<th className="
p-4
text-left
">

Status

</th>


<th className="
p-4
text-left
">

Action

</th>


</tr>


</thead>








<tbody>


{

programmes.map((item)=>(


<tr

key={item.id}

className="
border-t
hover:bg-gray-50
"


>



<td className="
p-4
font-medium
">

{item.title}

</td>





<td className="
p-4
">

{item.category}

</td>







<td className="
p-4
">


<div className="
flex
items-center
gap-2
">


<Calendar size={16}/>


{item.date}


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


<MapPin size={16}/>


{item.location}


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


<Users size={16}/>


{item.participants}


</div>


</td>









<td className="
p-4
">


<span

className={`

px-3
py-1
rounded-full
text-sm

${
item.status==="Completed"

?

"bg-green-100 text-green-700"

:

item.status==="Ongoing"

?

"bg-yellow-100 text-yellow-700"

:

"bg-blue-100 text-blue-700"

}

`}

>

{item.status}

</span>


</td>








{/* ACTION COLUMN */}


<td className="
p-4
">


<div className="
flex
items-center
gap-3
">


<button

className="
text-blue-600
hover:text-blue-800
"

>

<Eye size={18}/>

</button>




<button

className="
text-green-600
hover:text-green-800
"

>

<Edit size={18}/>

</button>





<button

className="
text-red-600
hover:text-red-800
"

>

<Trash2 size={18}/>

</button>


</div>


</td>





</tr>


))


}



</tbody>



</table>


</div>









{/* MODAL */}



{

showForm &&

<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-[100]
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
items-center
mb-6
">


<h2 className="
text-2xl
font-bold
">

Create Programme

</h2>



<button

onClick={()=>setShowForm(false)}

>

<X/>

</button>


</div>






<div className="
grid
md:grid-cols-2
gap-4
">


<input

placeholder="Programme Name"

className="
border
rounded-xl
p-3
"

/>




<select

className="
border
rounded-xl
p-3
"

>


<option>
Select Category
</option>

<option>
Leadership
</option>

<option>
Career
</option>

<option>
Sports
</option>

<option>
Culture
</option>

<option>
Environment
</option>


</select>





<input

type="date"

className="
border
rounded-xl
p-3
"

/>





<input

placeholder="Location"

className="
border
rounded-xl
p-3
"

/>





<input

placeholder="Maximum Participants"

className="
border
rounded-xl
p-3
"

/>






<textarea

placeholder="Programme Description"

className="
border
rounded-xl
p-3
md:col-span-2
"

></textarea>


</div>






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

Save Programme

</button>




</div>


</div>


}




</div>


)

}


export default ProgrammeManagement;