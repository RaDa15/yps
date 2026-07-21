import {

Search,
ShieldCheck,
UserPlus,
CalendarCheck,
Settings,
Eye

} from "lucide-react";



const AuditLogs=()=>{



const logs=[


{
id:1,
user:"Karma Wangmo",
action:"Created new user",
module:"User Management",
date:"21 July 2026",
status:"Success"
},



{
id:2,
user:"Sonam Dorji",
action:"Approved Programme",
module:"Programme Review",
date:"20 July 2026",
status:"Success"
},



{
id:3,
user:"PYCD Admin",
action:"Updated Role Permission",
module:"Role Management",
date:"19 July 2026",
status:"Success"
},



{
id:4,
user:"System",
action:"Failed Login Attempt",
module:"Security",
date:"18 July 2026",
status:"Warning"
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

Audit Logs

</h1>


<p className="
text-gray-500
">

Track all system activities and security events

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
shadow
rounded-xl
p-5
">

<p>Total Activities</p>

<h2 className="
text-3xl
font-bold
">

125,450

</h2>


</div>




<div className="
bg-white
shadow
rounded-xl
p-5
">


<p>Today's Activity</p>


<h2 className="
text-3xl
font-bold
text-blue-600
">

350

</h2>


</div>





<div className="
bg-white
shadow
rounded-xl
p-5
">


<p>Successful Login</p>


<h2 className="
text-3xl
font-bold
text-green-600
">

320

</h2>


</div>




<div className="
bg-white
shadow
rounded-xl
p-5
">


<p>Security Alert</p>


<h2 className="
text-3xl
font-bold
text-red-600
">

5

</h2>


</div>



</div>










{/* SEARCH */}



<div className="
bg-white
shadow
rounded-xl
p-4
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









{/* TABLE */}



<div className="
bg-white
shadow
rounded-xl
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

User

</th>


<th className="
p-4
text-left
">

Action

</th>


<th className="
p-4
text-left
">

Module

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

Status

</th>


<th className="
p-4
text-left
">

View

</th>


</tr>


</thead>







<tbody>


{

logs.map((log)=>(


<tr

key={log.id}

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


<ShieldCheck size={18}/>


</div>


{log.user}


</div>


</td>






<td className="
p-4
">

{log.action}

</td>






<td className="
p-4
">

{log.module}

</td>






<td className="
p-4
">

{log.date}

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
log.status==="Success"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}

>


{log.status}


</span>


</td>






<td className="
p-4
">


<button className="
text-blue-600
">


<Eye size={18}/>


</button>


</td>




</tr>


))


}



</tbody>


</table>


</div>









{/* ACTIVITY TYPES */}



<div className="
bg-white
shadow
rounded-xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Activity Categories

</h2>




<div className="
grid
md:grid-cols-4
gap-5
">



<div className="
border
rounded-xl
p-4
">


<UserPlus/>


<h3 className="
font-bold
mt-2
">

User Actions

</h3>


<p className="
text-gray-500
">

Account changes

</p>


</div>







<div className="
border
rounded-xl
p-4
">


<CalendarCheck/>


<h3 className="
font-bold
mt-2
">

Programme

</h3>


<p className="
text-gray-500
">

Approval tracking

</p>


</div>







<div className="
border
rounded-xl
p-4
">


<Settings/>


<h3 className="
font-bold
mt-2
">

System

</h3>


<p className="
text-gray-500
">

Configuration changes

</p>


</div>







<div className="
border
rounded-xl
p-4
">


<ShieldCheck/>


<h3 className="
font-bold
mt-2
">

Security

</h3>


<p className="
text-gray-500
">

Login monitoring

</p>


</div>



</div>


</div>







</div>


)

}


export default AuditLogs;