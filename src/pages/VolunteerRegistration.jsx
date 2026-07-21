import {
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  X
} from "lucide-react";


import {
  useState
} from "react";



const VolunteerRegistration = () => {


  const [showForm, setShowForm] = useState(false);



  const volunteers = [

    {
      id:1,
      name:"Karma Wangmo",
      cid:"11502001234",
      age:23,
      gender:"Female",
      skill:"Teaching",
      availability:"Weekend",
      status:"Active"
    },


    {
      id:2,
      name:"Jigme Dorji",
      cid:"11503004567",
      age:25,
      gender:"Male",
      skill:"Event Management",
      availability:"Weekdays",
      status:"Active"
    },


    {
      id:3,
      name:"Sonam Choden",
      cid:"11504007890",
      age:21,
      gender:"Female",
      skill:"Digital Skills",
      availability:"Flexible",
      status:"Inactive"
    }


  ];





return (


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
text-gray-800
">

Volunteer Registration

</h1>


<p className="
text-gray-500
mt-1
">

Register and manage Youth Centre volunteers

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
hover:bg-blue-700
"

>


<Plus size={20}/>

Add Volunteer


</button>


</div>









{/* Stats Cards */}



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
">



<div className="
bg-white
rounded-xl
p-5
shadow
">


<p className="
text-gray-500
">

Total Volunteers

</p>


<h2 className="
text-3xl
font-bold
mt-2
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


<p className="
text-gray-500
">

Active Volunteers

</p>


<h2 className="
text-3xl
font-bold
text-green-600
mt-2
">

98

</h2>


</div>





<div className="
bg-white
rounded-xl
p-5
shadow
">


<p className="
text-gray-500
">

Pending Approval

</p>


<h2 className="
text-3xl
font-bold
text-yellow-600
mt-2
">

22

</h2>


</div>




</div>









{/* Search Section */}



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

placeholder="Search volunteer by name or CID..."

className="
w-full
outline-none
p-2
"

/>



</div>



</div>









{/* Volunteer Table */}



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

CID

</th>



<th className="
p-4
text-left
">

Age

</th>



<th className="
p-4
text-left
">

Gender

</th>




<th className="
p-4
text-left
">

Skills

</th>




<th className="
p-4
text-left
">

Availability

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

volunteers.map((volunteer)=>(


<tr

key={volunteer.id}

className="
border-t
hover:bg-gray-50
"

>



<td className="
p-4
">

{volunteer.name}

</td>




<td className="
p-4
">

{volunteer.cid}

</td>




<td className="
p-4
">

{volunteer.age}

</td>




<td className="
p-4
">

{volunteer.gender}

</td>




<td className="
p-4
">

{volunteer.skill}

</td>




<td className="
p-4
">

{volunteer.availability}

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
volunteer.status==="Active"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}>

{volunteer.status}

</span>


</td>





<td className="
p-4
flex
gap-3
">


<button className="
text-blue-600
hover:bg-blue-50
p-2
rounded-lg
">


<Eye size={18}/>


</button>





<button className="
text-green-600
hover:bg-green-50
p-2
rounded-lg
">


<Edit size={18}/>


</button>





<button className="
text-red-600
hover:bg-red-50
p-2
rounded-lg
">


<Trash2 size={18}/>


</button>




</td>




</tr>



))


}


</tbody>




</table>


</div>









{/* Add Volunteer Modal */}



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
w-full
max-w-3xl
p-8
max-h-[90vh]
overflow-y-auto
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

Register New Volunteer

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
gap-5
">





<input

placeholder="Full Name"

className="
border
rounded-xl
p-3
"

/>






<input

placeholder="CID Number"

className="
border
rounded-xl
p-3
"

/>







<input

placeholder="Contact Number"

className="
border
rounded-xl
p-3
"

/>






<input

placeholder="Email"

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
Select Gender
</option>


<option>
Male
</option>


<option>
Female
</option>


</select>







<input

placeholder="Skills"

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
Availability

</option>


<option>
Weekdays

</option>


<option>
Weekends

</option>


<option>
Flexible

</option>


</select>







<textarea

placeholder="Volunteer Experience"

className="
border
rounded-xl
p-3
md:col-span-2
"

>

</textarea>



</div>









<div className="
flex
justify-end
gap-4
mt-8
">



<button

onClick={()=>setShowForm(false)}

className="
px-5
py-3
border
rounded-xl
"

>

Cancel

</button>





<button

className="
px-5
py-3
bg-green-600
text-white
rounded-xl
"

>

Save Volunteer

</button>



</div>






</div>


</div>



}



</div>


);


};



export default VolunteerRegistration;