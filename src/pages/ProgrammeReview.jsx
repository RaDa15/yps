import {

Search,
Calendar,
MapPin,
Users,
Eye,
Check,
XCircle,
Clock

} from "lucide-react";


import {
useState
} from "react";



const ProgrammeReview=()=>{


const programmes=[


{
id:1,
title:"Youth Leadership Training",
centre:"Thimphu Youth Centre",
category:"Leadership",
date:"25 July 2026",
participants:120,
status:"Pending"
},


{
id:2,
title:"Career Guidance Workshop",
centre:"Paro Youth Centre",
category:"Career",
date:"10 July 2026",
participants:80,
status:"Approved"
},


{
id:3,
title:"Environmental Awareness Campaign",
centre:"Haa Youth Centre",
category:"Environment",
date:"30 July 2026",
participants:200,
status:"Rejected"
}



];




return(


<div className="
space-y-6
">







{/* HEADER */}



<div>


<h1 className="
text-3xl
font-bold
">

Programme Review

</h1>


<p className="
text-gray-500
">

Review and approve Youth Centre programmes

</p>


</div>









{/* STATS */}



<div className="
grid
md:grid-cols-4
gap-5
">


<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Total Submitted</p>


<h2 className="
text-3xl
font-bold
">

650

</h2>


</div>




<div className="
bg-white
p-5
rounded-xl
shadow
">


<p>Pending Review</p>


<h2 className="
text-3xl
font-bold
text-orange-600
">

45

</h2>


</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">


<p>Approved</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

520

</h2>


</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">


<p>Rejected</p>


<h2 className="
text-3xl
font-bold
text-red-600
">

85

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
w-full
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

Centre

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
font-semibold
">

{item.title}

</td>



<td className="
p-4
">

{item.centre}

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
gap-2
items-center
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
gap-2
items-center
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
item.status==="Approved"

?

"bg-green-100 text-green-700"


:

item.status==="Rejected"

?

"bg-red-100 text-red-700"


:

"bg-orange-100 text-orange-700"

}

`}

>


{item.status}


</span>


</td>







<td className="
p-4
">


<div className="
flex
gap-3
">


<button className="
text-blue-600
">


<Eye size={18}/>


</button>




<button className="
text-green-600
">


<Check size={18}/>


</button>





<button className="
text-red-600
">


<XCircle size={18}/>


</button>



</div>


</td>




</tr>


))


}



</tbody>


</table>


</div>








{/* REVIEW CARD */}



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-4
">

Approval Workflow

</h2>


<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
border
rounded-xl
p-4
">


<Clock/>

<h3 className="
font-bold
mt-2
">

Pending

</h3>


<p className="
text-gray-500
">

Waiting for admin review

</p>


</div>






<div className="
border
rounded-xl
p-4
">


<Check/>

<h3 className="
font-bold
mt-2
">

Approved

</h3>


<p className="
text-gray-500
">

Visible to youth

</p>


</div>






<div className="
border
rounded-xl
p-4
">


<XCircle/>


<h3 className="
font-bold
mt-2
">

Rejected

</h3>


<p className="
text-gray-500
">

Needs modification

</p>


</div>



</div>


</div>






</div>


)


}



export default ProgrammeReview;