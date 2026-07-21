function ApplicationCard({
title,
date,
status,
statusColor,
description,
icon
}){


return(

<div
className="
bg-white
rounded-3xl
p-6
border
border-gray-100
shadow-sm
hover:shadow-lg
transition
border-l-4
border-blue-700
"
>


<div className="
flex
justify-between
items-start
">


<div>

<h3 className="
text-xl
font-bold
text-gray-900
">
{title}
</h3>


<p className="
text-sm
text-gray-500
mt-2
">
{date}
</p>


<p className="
text-sm
text-gray-600
mt-4
">
{description}
</p>


</div>



<span
className={`
px-4
py-2
rounded-full
text-xs
font-bold
${statusColor}
`}
>

{status}

</span>


</div>


</div>


)

}


export default ApplicationCard;