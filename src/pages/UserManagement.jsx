import {
Plus,
Search,
Users,
UserPlus,
Edit,
Trash2,
X
} from "lucide-react";


import {
useState
} from "react";



const UserManagement=()=>{


const [showForm,setShowForm]=useState(false);



const users=[


{
id:1,
name:"Tshering Pem",
cid:"11502003456",
role:"Youth",
centre:"Thimphu YC",
status:"Active"
},


{
id:2,
name:"Sonam Dorji",
cid:"11502007890",
role:"YC Manager",
centre:"Paro YC",
status:"Active"
},


{
id:3,
name:"Karma Wangmo",
cid:"11502004567",
role:"Counsellor",
centre:"Punakha YC",
status:"Inactive"
},


{
id:4,
name:"Pema Choden",
cid:"11502009876",
role:"Volunteer",
centre:"Haa YC",
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

User Management

</h1>


<p className="
text-gray-500
">

Manage users, roles and system access

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

<UserPlus size={20}/>

Create User

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
p-5
rounded-xl
shadow
">


<p>Total Users</p>


<h2 className="
text-3xl
font-bold
">

25,450

</h2>


</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">


<p>Active Users</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

24,800

</h2>


</div>






<div className="
bg-white
p-5
rounded-xl
shadow
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
p-5
rounded-xl
shadow
">


<p>Volunteers</p>


<h2 className="
text-3xl
font-bold
text-purple-600
">

4,200

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

placeholder="Search user by name or CID..."

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


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
CID
</th>


<th className="p-4 text-left">
Role
</th>


<th className="p-4 text-left">
Youth Centre
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

users.map((user)=>(


<tr

key={user.id}

className="
border-t
hover:bg-gray-50
"

>



<td className="
p-4
font-semibold
">

{user.name}

</td>



<td className="
p-4
">

{user.cid}

</td>




<td className="
p-4
">


<span className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-sm
">

{user.role}

</span>


</td>





<td className="
p-4
">

{user.centre}

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
user.status==="Active"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}


`}

>

{user.status}

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









{/* CREATE USER MODAL */}



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

Create New User

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

placeholder="Full Name"

className="
border
p-3
rounded-xl
w-full
"

/>





<input

placeholder="CID Number"

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
Select Role
</option>

<option>
Youth
</option>

<option>
Volunteer
</option>

<option>
YC Manager
</option>

<option>
Counsellor
</option>

<option>
Programme Coordinator
</option>

</select>






<select

className="
border
p-3
rounded-xl
w-full
"

>


<option>
Assign Youth Centre
</option>


<option>
Thimphu YC
</option>


<option>
Paro YC
</option>


<option>
Haa YC
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

Create Account

</button>



</div>


</div>


}



</div>


)

}



export default UserManagement;