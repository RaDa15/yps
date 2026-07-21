function Innovation() {


const innovations = [

{
image:"📱",
title:"Seamless Connectivity",
description:
"Access youth services anytime, anywhere. Progressive Web App (PWA) technology enables offline data entry even in areas with limited connectivity."
},


{
image:"📊",
title:"Data-Driven Insights",
description:
"Smart analytics help youth discover relevant programmes, track progress and receive personalized opportunities."
},


{
image:"🔐",
title:"Trusted Security",
description:
"Your information is protected with secure authentication and integrated National Digital Identity (NDI)."
}

]



return (


<section
className="
py-24
bg-gray-50
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>



{/* Heading */}


<div
className="
text-center
mb-16
"
>


<h2
className="
text-4xl
md:text-5xl
font-bold
text-blue-700
"
>

Digital Innovation

</h2>



<p
className="
mt-4
text-gray-600
text-lg
max-w-2xl
mx-auto
"
>

Harnessing technology to empower the next generation of Bhutanese leaders.

</p>


</div>





{/* Cards */}


<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-8
"
>


{

innovations.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-3xl
p-8
text-center
border
border-gray-100
hover:-translate-y-2
hover:shadow-xl
transition
"
>


<div
className="
w-full
h-48
rounded-2xl
bg-blue-50
flex
items-center
justify-center
mb-6
"
>


<span
className="
text-7xl
"
>

{item.image}

</span>


</div>



<h3
className="
text-xl
font-bold
text-blue-700
mb-4
"
>

{item.title}

</h3>



<p
className="
text-gray-600
leading-relaxed
"
>

{item.description}

</p>



</div>


))


}



</div>



</div>


</section>


)

}


export default Innovation