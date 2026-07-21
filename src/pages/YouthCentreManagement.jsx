import {
Plus,
Search,
Building2,
Users,
Edit,
Trash2,
X
} from "lucide-react";


import {
useState
} from "react";



const YouthCentreManagement=()=>{


const [showForm,setShowForm]=useState(false);



const centres=[


{
id:1,
name:"Thimphu Youth Centre",
dzongkhag:"Thimphu",
manager:"Sonam Dorji",
youth:2500,
programmes:80,
status:"Active"
},


{
id:2,
name:"Paro Youth Centre",
dzongkhag:"Paro",
manager:"Pema Choden",
youth:1800,
programmes:60,
status:"Active"
},


{
id:3,
name:"Haa Youth Centre",
dzongkhag:"Haa",
manager:"Karma Wangmo",
youth:900,
programmes:35,
status:"Active"
}


];





return(


<div className="
space-y-6
">





{/* HEADER */}


<div className="
flex
justify-between
items-center
">


<div>


<h1 className="
text-3xl
font-bold
">

Youth Centre Management

</h1>


<p className="
text-gray-500
">

Manage Youth Centres and assigned managers

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

Add Youth Centre

</button>


</div>










{/* STATS */}


<div className="
grid
md:grid-cols-4
gap-5
">


<div className="
bg-white
rounded-xl
shadow
p-5
">


<p>Total Centres</p>


<h2 className="
text-3xl
font-bold
">

13

</h2>


</div>




<div className="
bg-white
rounded-xl
shadow
p-5
">


<p>Active Centres</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

13

</h2>


</div>





<div className="
bg-white
rounded-xl
shadow
p-5
">


<p>YC Managers</p>


<h2 className="
text-3xl
font-bold
text-blue-600
">

13

</h2>


</div>





<div className="
bg-white
rounded-xl
shadow
p-5
">


<p>Total Youth</p>


<h2 className="
text-3xl
font-bold
text-purple-600
">

25,450

</h2>


</div>



</div>









{/* SEARCH */}



<div className="
bg-white
rounded-xl
shadow
p-4
flex
items-center
gap-3
">


<Search size={20}/>


<input

placeholder="Search Youth Centre..."

className="
w-full
outline-none
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

Centre Name

</th>


<th className="
p-4
text-left
">

Dzongkhag

</th>


<th className="
p-4
text-left
">

Manager

</th>


<th className="
p-4
text-left
">

Youth

</th>


<th className="
p-4
text-left
">

Programmes

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

centres.map((centre)=>(


<tr

key={centre.id}

className="
border-t
hover:bg-gray-50
"

>


<td className="
p-4
font-semibold
">


<div className="
flex
items-center
gap-3
">


<div className="
bg-blue-100
p-2
rounded-lg
">


<Building2 size={18}/>


</div>


{centre.name}


</div>


</td>





<td className="
p-4
">

{centre.dzongkhag}

</td>






<td className="
p-4
">

{centre.manager}

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

{centre.youth}


</div>


</td>






<td className="
p-4
">

{centre.programmes}

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
">

{centre.status}

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

<Edit size={18}/>

</button>



<button className="
text-red-600
">

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









{/* ADD CENTRE MODAL */}



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
max-w-xl
w-full
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

Add Youth Centre

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

placeholder="Centre Name"

className="
border
p-3
rounded-xl
w-full
"

/>



<input

placeholder="Dzongkhag"

className="
border
p-3
rounded-xl
w-full
"

/>




<select

className="
border
p-3
rounded-xl
w-full
"

>


<option>
Assign YC Manager
</option>


<option>
Sonam Dorji
</option>


<option>
Pema Choden
</option>


</select>



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

Save Centre

</button>




</div>


</div>


}





</div>


)

}


export default YouthCentreManagement;