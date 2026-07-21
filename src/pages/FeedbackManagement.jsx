import {
Plus,
Search,
MessageSquare,
Star,
Eye,
Edit,
Trash2,
X
} from "lucide-react";


import {
useState
} from "react";



const FeedbackManagement =()=>{


const [showForm,setShowForm]=useState(false);



const feedbacks=[


{
id:1,
youth:"Tshering Pem",
category:"Programme",
subject:"Leadership Training",
rating:5,
message:"Excellent programme. Learned leadership skills.",
status:"Resolved"
},


{
id:2,
youth:"Sonam Dorji",
category:"Facility",
subject:"Internet Facility",
rating:3,
message:"Need better internet connection at centre.",
status:"Pending"
},


{
id:3,
youth:"Karma Wangmo",
category:"Suggestion",
subject:"More Career Events",
rating:4,
message:"Please organize more career workshops.",
status:"In Review"
}


];






return(


<div className="space-y-6 w-full">







{/* HEADER */}


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

Feedback Management

</h1>


<p className="
text-gray-500
">

Manage youth feedback and suggestions

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

Add Feedback

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

<p>Total Feedback</p>

<h2 className="
text-3xl
font-bold
">

850

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Average Rating</p>

<h2 className="
text-3xl
font-bold
text-yellow-600
">

4.5 ⭐

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Resolved</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

720

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Pending</p>

<h2 className="
text-3xl
font-bold
text-red-600
">

130

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

placeholder="Search feedback..."

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
table-auto
">


<thead className="
bg-blue-50
">


<tr>


<th className="p-4 text-left">
Youth
</th>


<th className="p-4 text-left">
Category
</th>


<th className="p-4 text-left">
Subject
</th>


<th className="p-4 text-left">
Rating
</th>


<th className="p-4 text-left">
Message
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

feedbacks.map((item)=>(


<tr

key={item.id}

className="
border-t
hover:bg-gray-50
"

>



<td className="
p-4
font-medium
">

{item.youth}

</td>





<td className="
p-4
">

{item.category}

</td>





<td className="
p-4
">

{item.subject}

</td>





<td className="
p-4
">

<div className="
flex
items-center
gap-1
">

<Star 
size={16}
className="text-yellow-500"
/>

{item.rating}

</div>

</td>







<td className="
p-4
max-w-xs
">

{item.message}

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
item.status==="Resolved"

?

"bg-green-100 text-green-700"

:

item.status==="Pending"

?

"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700"

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









{/* ADD FEEDBACK MODAL */}



{

showForm &&


<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-[100]
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

Add Feedback

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
border
rounded-xl
p-3
w-full
"

/>





<select

className="
border
rounded-xl
p-3
w-full
"

>


<option>
Select Category
</option>


<option>
Programme
</option>


<option>
Facility
</option>


<option>
Suggestion
</option>


<option>
Complaint
</option>


</select>







<input

placeholder="Subject"

className="
border
rounded-xl
p-3
w-full
"

/>






<textarea

placeholder="Feedback message"

className="
border
rounded-xl
p-3
w-full
"

></textarea>



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

Submit Feedback

</button>




</div>


</div>


}



</div>


)

}



export default FeedbackManagement;