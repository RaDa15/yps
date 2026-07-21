import React from "react";


const ScholarshipCard = ({data})=>{


return(

<div className="
bg-white
rounded-3xl
shadow-md
p-6
hover:-translate-y-2
transition
">


<div className="
flex
justify-between
">

<div className="
bg-blue-100
p-3
rounded-xl
text-blue-700
">

{data.icon}

</div>


<span className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-xs
">

{data.category}

</span>


</div>



<h3 className="
text-xl
font-bold
mt-5
">

{data.title}

</h3>



<p className="
text-yellow-600
font-semibold
mt-3
">

💰 {data.funding}

</p>



<ul className="
mt-4
space-y-2
text-gray-600
">


{
data.requirements.map((r,index)=>(

<li key={index}>
✓ {r}
</li>

))
}


</ul>



<div className="
border-t
mt-5
pt-4
flex
justify-between
items-center
">


<div>

<p className="text-xs">
Deadline
</p>

<p className="font-semibold">
{data.deadline}
</p>

</div>


<button className="
bg-blue-700
text-white
px-4
py-2
rounded-xl
">

Details

</button>


</div>


</div>

)


}


export default ScholarshipCard;