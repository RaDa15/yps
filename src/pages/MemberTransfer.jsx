import {
Search,
Plus,
Check,
X
} from "lucide-react";


import {
useState
} from "react";



const MemberTransfer =()=>{


const [showForm,setShowForm]=useState(false);



const transfers=[


{
id:1,
name:"Tshering Pem",
from:"Thimphu Youth Centre",
to:"Paro Youth Centre",
reason:"Family relocation",
status:"Pending"
},


{
id:2,
name:"Sonam Dorji",
from:"Haa Youth Centre",
to:"Thimphu Youth Centre",
reason:"Education purpose",
status:"Approved"
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

Member Transfer

</h1>


<p className="
text-gray-500
">

Manage youth centre transfer requests

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

New Transfer


</button>



</div>









{/* Search */}


<div className="
bg-white
p-4
rounded-xl
shadow
">


<div className="
flex
items-center
gap-3
border
rounded-xl
px-4
">


<Search size={20}/>


<input

placeholder="Search youth transfer..."

className="
w-full
p-2
outline-none
"

/>


</div>


</div>









{/* Transfer Table */}



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


<th className="p-4 text-left">
Youth
</th>


<th className="p-4 text-left">
From
</th>


<th className="p-4 text-left">
To
</th>


<th className="p-4 text-left">
Reason
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Action
</th>


</tr>


</thead>





<tbody>


{

transfers.map((item)=>(


<tr

key={item.id}

className="
border-t
"


>


<td className="p-4">

{item.name}

</td>


<td className="p-4">

{item.from}

</td>


<td className="p-4">

{item.to}

</td>


<td className="p-4">

{item.reason}

</td>




<td className="p-4">


<span className="
px-3
py-1
rounded-full
bg-yellow-100
text-yellow-700
text-sm
">

{item.status}

</span>


</td>






<td className="
p-4
flex
gap-2
">


<button

className="
bg-green-100
text-green-700
p-2
rounded-lg
"

>


<Check size={18}/>


</button>




<button

className="
bg-red-100
text-red-700
p-2
rounded-lg
"

>


<X size={18}/>


</button>



</td>



</tr>


))


}



</tbody>


</table>


</div>









{/* Transfer Form Modal */}


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


<div className="
flex
justify-between
mb-6
">


<h2 className="
text-2xl
font-bold
">

New Transfer Request

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



<input

placeholder="Youth Name"

className="
w-full
border
rounded-xl
p-3
"

/>





<select className="
w-full
border
rounded-xl
p-3
">

<option>
Current Youth Centre
</option>

<option>
Thimphu Youth Centre
</option>

<option>
Paro Youth Centre
</option>

</select>






<select className="
w-full
border
rounded-xl
p-3
">


<option>
Transfer To
</option>


<option>
Haa Youth Centre
</option>


<option>
Punakha Youth Centre
</option>


</select>






<textarea

placeholder="Transfer Reason"

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
bg-blue-600
text-white
py-3
rounded-xl
"

>

Submit Request

</button>




</div>


</div>


}



</div>


)

}


export default MemberTransfer;