import {
Search,
Plus,
Download,
Eye,
Award,
QrCode
} from "lucide-react";


import {
useState
} from "react";



const ECertificateGeneration =()=>{


const [showForm,setShowForm]=useState(false);



const certificates=[


{
id:1,
name:"Tshering Pem",
activity:"Community Cleaning Campaign",
date:"15 July 2026",
certificate:"CERT-001",
status:"Issued"
},


{
id:2,
name:"Sonam Dorji",
activity:"Youth Awareness Programme",
date:"20 July 2026",
certificate:"CERT-002",
status:"Issued"
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

E-Certificate Generation

</h1>


<p className="
text-gray-500
">

Generate and manage digital certificates

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

Generate Certificate


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
rounded-xl
p-5
shadow
">

<p>
Total Certificates
</p>

<h2 className="
text-3xl
font-bold
">

850

</h2>

</div>




<div className="
bg-white
rounded-xl
p-5
shadow
">

<p>
This Month
</p>

<h2 className="
text-3xl
font-bold
text-blue-600
">

120

</h2>

</div>





<div className="
bg-white
rounded-xl
p-5
shadow
">

<p>
Volunteer Certificates
</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

430

</h2>

</div>




<div className="
bg-white
rounded-xl
p-5
shadow
">

<p>
Youth Certificates
</p>

<h2 className="
text-3xl
font-bold
text-purple-600
">

420

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

placeholder="Search certificate..."

className="
outline-none
w-full
"

/>


</div>









{/* Certificate Table */}



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
Name
</th>


<th className="
p-4
text-left
">
Activity
</th>


<th className="
p-4
text-left
">
Certificate ID
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
Action
</th>


</tr>


</thead>





<tbody>


{

certificates.map((item)=>(


<tr

key={item.id}

className="
border-t
"

>


<td className="
p-4
">

{item.name}

</td>


<td className="
p-4
">

{item.activity}

</td>


<td className="
p-4
">

{item.certificate}

</td>


<td className="
p-4
">

{item.date}

</td>





<td className="
p-4
flex
gap-3
">


<button

className="
text-blue-600
"

>

<Eye size={20}/>

</button>



<button

className="
text-green-600
"

>

<Download size={20}/>

</button>




</td>




</tr>


))


}



</tbody>



</table>



</div>









{/* Generate Certificate Modal */}



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
max-w-xl
">



<h2 className="
text-2xl
font-bold
mb-6
">

Generate New Certificate

</h2>





<div className="
space-y-4
">



<input

placeholder="Participant Name"

className="
w-full
border
rounded-xl
p-3
"

/>




<input

placeholder="Activity Name"

className="
w-full
border
rounded-xl
p-3
"

/>





<select

className="
w-full
border
rounded-xl
p-3
"

>


<option>
Certificate Type
</option>


<option>
Volunteer Certificate
</option>


<option>
Participation Certificate
</option>


<option>
Achievement Certificate
</option>


</select>





<div className="
bg-blue-50
p-4
rounded-xl
flex
items-center
gap-3
">


<QrCode/>


<p>
QR verification will be generated automatically
</p>


</div>



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

Generate Certificate

</button>




</div>



</div>


}



</div>


)

}


export default ECertificateGeneration;