import {
Plus,
Search,
Calendar,
Clock,
User,
X
} from "lucide-react";


import {
useState
} from "react";



const CounsellingBooking =()=>{


const [showForm,setShowForm]=useState(false);



const [bookings,setBookings]=useState([


{
id:1,
name:"Tashi Wangmo",
category:"Career Counselling",
date:"22 July 2026",
time:"10:00 AM",
counsellor:"Karma Dorji",
status:"Upcoming"
},


{
id:2,
name:"Sonam Dorji",
category:"Personal Guidance",
date:"24 July 2026",
time:"02:00 PM",
counsellor:"Pema Choden",
status:"Completed"
},


{
id:3,
name:"Ugyen Tshering",
category:"Education Support",
date:"28 July 2026",
time:"11:30 AM",
counsellor:"Karma Wangmo",
status:"Pending"
}


]);




const [form,setForm]=useState({

name:"",
category:"",
date:"",
time:"",
counsellor:""

});





const handleSubmit=(e)=>{


e.preventDefault();


const newBooking={

id:Date.now(),

name:form.name,

category:form.category,

date:form.date,

time:form.time,

counsellor:form.counsellor,

status:"Upcoming"

};



setBookings([

...bookings,

newBooking

]);



setShowForm(false);



};









return(


<div className="
space-y-6
w-full
">







{/* Header */}


<div className="
bg-white
rounded-xl
shadow
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

Counselling Booking

</h1>



<p className="
text-gray-500
mt-2
">

Manage youth counselling appointments and sessions.

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

New Booking


</button>



</div>











{/* Statistics */}



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-5
">





<div className="
bg-white
rounded-xl
shadow
p-5
min-w-0
">


<p className="
text-gray-500
">

Total Sessions

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

124

</h2>


</div>






<div className="
bg-white
rounded-xl
shadow
p-5
min-w-0
">


<p className="
text-gray-500
">

Upcoming

</p>


<h2 className="
text-3xl
font-bold
text-blue-600
mt-2
">

18

</h2>


</div>







<div className="
bg-white
rounded-xl
shadow
p-5
min-w-0
">


<p className="
text-gray-500
">

Completed

</p>


<h2 className="
text-3xl
font-bold
text-green-600
mt-2
">

95

</h2>


</div>







<div className="
bg-white
rounded-xl
shadow
p-5
min-w-0
">


<p className="
text-gray-500
">

Pending

</p>


<h2 className="
text-3xl
font-bold
text-orange-600
mt-2
">

11

</h2>


</div>





</div>












{/* Search */}



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

placeholder="
Search counselling session...
"

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


<div className="
overflow-x-auto
">


<table className="
w-full
min-w-[900px]
">



<thead className="
bg-blue-50
">


<tr>


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

Category

</th>



<th className="
p-4
text-left
">

Date & Time

</th>




<th className="
p-4
text-left
">

Counsellor

</th>



<th className="
p-4
text-left
">

Status

</th>



</tr>


</thead>





<tbody>


{

bookings.map((item)=>(


<tr

key={item.id}

className="
border-t
hover:bg-gray-50
"

>



<td className="
p-4
">

<div className="
flex
items-center
gap-3
">


<div className="
w-10
h-10
rounded-full
bg-blue-100
flex
items-center
justify-center
">

<User size={18}/>

</div>


{item.name}


</div>


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


<div className="
flex
items-center
gap-2
text-gray-500
text-sm
mt-1
">

<Clock size={16}/>

{item.time}

</div>


</td>






<td className="
p-4
">

{item.counsellor}

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
item.status==="Completed"

?

"bg-green-100 text-green-700"

:

item.status==="Pending"

?

"bg-orange-100 text-orange-700"

:

"bg-blue-100 text-blue-700"

}

`}>

{item.status}

</span>


</td>






</tr>


))


}



</tbody>


</table>


</div>


</div>













{/* Modal */}



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



<form

onSubmit={handleSubmit}

className="
bg-white
rounded-2xl
p-8
w-full
max-w-xl
space-y-4
"


>



<div className="
flex
justify-between
items-center
">


<h2 className="
text-2xl
font-bold
">

New Counselling Booking

</h2>


<button

type="button"

onClick={()=>setShowForm(false)}

>

<X/>

</button>


</div>







<input

required

placeholder="Youth Name"

className="
w-full
border
rounded-xl
p-3
"

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>





<select

required

className="
w-full
border
rounded-xl
p-3
"

onChange={(e)=>

setForm({

...form,

category:e.target.value

})

}

>


<option>

Select Type

</option>


<option>

Career Counselling

</option>


<option>

Personal Guidance

</option>


<option>

Education Support

</option>


</select>






<input

type="date"

className="
w-full
border
rounded-xl
p-3
"

onChange={(e)=>

setForm({

...form,

date:e.target.value

})

}

/>






<input

placeholder="Time"

className="
w-full
border
rounded-xl
p-3
"

onChange={(e)=>

setForm({

...form,

time:e.target.value

})

}

/>






<input

placeholder="Counsellor"

className="
w-full
border
rounded-xl
p-3
"

onChange={(e)=>

setForm({

...form,

counsellor:e.target.value

})

}

/>






<button

className="
w-full
bg-green-600
text-white
py-3
rounded-xl
"

>

Save Booking

</button>





</form>


</div>


}




</div>


)


}



export default CounsellingBooking;