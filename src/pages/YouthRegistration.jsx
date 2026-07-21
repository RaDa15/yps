import {
Search,
Plus,
Eye,
Edit
} from "lucide-react";



const YouthRegistration =()=>{



const youth=[


{
id:1,
name:"Tshering Pem",
cid:"11502001234",
gender:"Female",
age:22,
centre:"Thimphu YC"
},


{
id:2,
name:"Sonam Dorji",
cid:"11503004567",
gender:"Male",
age:24,
centre:"Thimphu YC"
},


{
id:3,
name:"Pema Choden",
cid:"11504007891",
gender:"Female",
age:21,
centre:"Paro YC"
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
text-gray-800
">

Youth Registration

</h1>



<p className="
text-gray-500
mt-2
">

Manage youth profiles and registration records

</p>



</div>






<button

className="
bg-blue-600
hover:bg-blue-700
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

Add Youth


</button>





</div>













{/* Search and Filter */}




<div className="
bg-white
rounded-xl
shadow-sm
p-4
flex
flex-col
md:flex-row
gap-4
">





<div className="
flex
items-center
gap-2
border
rounded-lg
px-3
flex-1
">



<Search size={20}/>



<input


placeholder="
Search youth...
"


className="
outline-none
w-full
p-2
"


/>



</div>








<select

className="
border
rounded-lg
px-4
py-2
"

>


<option>

All Gender

</option>


<option>

Male

</option>


<option>

Female

</option>


</select>






</div>














{/* Table */}




<div className="
bg-white
rounded-xl
shadow-sm
overflow-hidden
">



<div className="
overflow-x-auto
">





<table className="
w-full
min-w-[800px]
">





<thead

className="
bg-blue-50
"

>


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

Gender

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

Youth Centre

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

youth.map((person)=>(


<tr

key={person.id}

className="
border-t
hover:bg-gray-50
"

>


<td className="
p-4
font-medium
">

{person.name}

</td>






<td className="
p-4
">

{person.cid}

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
person.gender==="Female"

?

"bg-pink-100 text-pink-700"

:

"bg-blue-100 text-blue-700"

}

`}>

{person.gender}

</span>

</td>







<td className="
p-4
">

{person.age}

</td>






<td className="
p-4
">

{person.centre}

</td>








<td className="
p-4
">


<div className="
flex
items-center
gap-3
">





<button

className="
text-blue-600
hover:bg-blue-50
p-2
rounded-lg
"

title="View"

>


<Eye size={20}/>


</button>








<button

className="
text-green-600
hover:bg-green-50
p-2
rounded-lg
"

title="Edit"

>


<Edit size={20}/>


</button>






</div>


</td>







</tr>


))


}




</tbody>






</table>




</div>




</div>









</div>


)


}



export default YouthRegistration;