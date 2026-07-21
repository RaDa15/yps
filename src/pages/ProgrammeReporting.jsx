import {
Plus,
Search,
FileText,
Eye,
Edit,
CheckCircle,
X
} from "lucide-react";


import {
useState
} from "react";



const ProgrammeReporting =()=>{


const [showForm,setShowForm]=useState(false);



const reports=[


{
id:1,
programme:"Youth Leadership Training",
date:"25 July 2026",
participants:45,
outcome:"Leadership skills improved",
status:"Approved"
},


{
id:2,
programme:"Career Guidance Workshop",
date:"10 July 2026",
participants:60,
outcome:"Career awareness increased",
status:"Pending"
}


];





return(


<div className="
space-y-6 w-full
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

Programme Reporting

</h1>


<p className="
text-gray-500
">

Prepare and submit programme reports

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

Create Report


</button>


</div>









{/* Stats */}



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

<p>
Total Reports
</p>


<h2 className="
text-3xl
font-bold
">

80

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Submitted
</p>


<h2 className="
text-3xl
font-bold
text-blue-600
">

65

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Approved
</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

55

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>
Pending Review
</p>


<h2 className="
text-3xl
font-bold
text-yellow-600
">

10

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

placeholder="Search reports..."

className="
outline-none
w-full
"

/>


</div>









{/* Reports Table */}



<div className="
bg-white
rounded-xl
shadow
overflow-hidden
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

Outcome

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

reports.map((report)=>(


<tr

key={report.id}

className="
border-t
"

>


<td className="
p-4
font-medium
">

{report.programme}

</td>




<td className="
p-4
">

{report.date}

</td>




<td className="
p-4
">

{report.participants}

</td>




<td className="
p-4
">

{report.outcome}

</td>





<td className="
p-4
">


<span className={`
px-3
py-1
rounded-full
text-sm

${
report.status==="Approved"

?

"bg-green-100 text-green-700"

:

"bg-yellow-100 text-yellow-700"

}

`}>

{report.status}

</span>


</td>







<td className="
p-4
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

<Edit size={18}/>

</button>



</td>



</tr>


))


}



</tbody>


</table>


</div>









{/* Create Report Modal */}



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
rounded-xl
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

Create Programme Report

</h2>



<button

onClick={()=>setShowForm(false)}

>

<X/>

</button>



</div>









<div className="
space-y-4
">



<select

className="
w-full
border
rounded-xl
p-3
"

>

<option>
Select Programme
</option>


<option>
Youth Leadership Training
</option>


<option>
Career Guidance Workshop
</option>


</select>





<input

placeholder="Number of Participants"

className="
w-full
border
rounded-xl
p-3
"

/>





<textarea

placeholder="Programme Outcome"

className="
w-full
border
rounded-xl
p-3
"

/>






<textarea

placeholder="Challenges Faced"

className="
w-full
border
rounded-xl
p-3
"

/>







<textarea

placeholder="Recommendations"

className="
w-full
border
rounded-xl
p-3
"

/>



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

Submit Report

</button>





</div>


</div>



}





</div>


)


}



export default ProgrammeReporting;