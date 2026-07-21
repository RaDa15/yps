import {
Plus,
Shield,
Users,
Edit,
Trash2,
Search,
X
} from "lucide-react";


import {
useState
} from "react";



const RoleManagement=()=>{


const [showForm,setShowForm]=useState(false);



const roles=[


{
id:1,
name:"PYCD Admin",
users:5,
permissions:48,
status:"Active"
},


{
id:2,
name:"YC Manager",
users:13,
permissions:25,
status:"Active"
},


{
id:3,
name:"Volunteer Coordinator",
users:35,
permissions:15,
status:"Active"
},


{
id:4,
name:"Counsellor",
users:20,
permissions:10,
status:"Active"
}



];




return(


<div className="space-y-6">





{/* Header */}


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

Role & Permission Management

</h1>


<p className="
text-gray-500
">

Manage system access and permissions

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

Create Role


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
Total Roles
</p>


<h2 className="
text-3xl
font-bold
">

6

</h2>


</div>





<div className="
bg-white
rounded-xl
p-5
shadow
">


<p>
Active Roles
</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

6

</h2>


</div>





<div className="
bg-white
rounded-xl
p-5
shadow
">


<p>
Users Assigned
</p>


<h2 className="
text-3xl
font-bold
text-blue-600
">

25,450

</h2>


</div>





<div className="
bg-white
rounded-xl
p-5
shadow
">


<p>
Permissions
</p>


<h2 className="
text-3xl
font-bold
text-purple-600
">

48

</h2>


</div>


</div>








{/* Search */}



<div className="
bg-white
rounded-xl
p-4
shadow
flex
gap-3
items-center
">


<Search size={20}/>


<input

placeholder="Search role..."

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
">


<thead className="
bg-blue-50
">


<tr>


<th className="p-4 text-left">
Role Name
</th>


<th className="p-4">
Users
</th>


<th className="p-4">
Permissions
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>





<tbody>


{

roles.map((role)=>(


<tr

key={role.id}

className="
border-t
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


<Shield size={18}/>


</div>


{role.name}


</div>


</td>





<td className="text-center">

{role.users}

</td>



<td className="text-center">

{role.permissions}

</td>




<td className="text-center">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
">

{role.status}

</span>


</td>





<td className="
p-4
">


<div className="
flex
justify-center
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









{/* Create Role Modal */}


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

Create New Role

</h2>


<button

onClick={()=>setShowForm(false)}

>

<X/>

</button>


</div>






<input

placeholder="Role Name"

className="
border
p-3
rounded-xl
w-full
mb-4
"

/>




<textarea

placeholder="Role Description"

className="
border
p-3
rounded-xl
w-full
mb-4
"

/>





<h3 className="
font-bold
mb-3
">

Permissions

</h3>




<div className="
space-y-3
">


{

[
"Youth Management",
"Programme Management",
"Reports",
"Certificate Generation",
"Feedback Management"

].map((item)=>(


<label className="
flex
gap-3
">


<input

type="checkbox"

/>


{item}


</label>


))


}



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

Save Role

</button>





</div>


</div>


}




</div>


)


}


export default RoleManagement;