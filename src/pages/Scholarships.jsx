import React from "react";
import { School, Globe, FlaskConical, Leaf } from "lucide-react";
import ScholarshipCard from "../components/ScholarshipCard";
import MatchFinder from "../components/MatchFinder";


const Scholarships = () => {


const scholarships = [
{
title:"Global STEM Leadership Award",
category:"International",
icon:<Globe/>,
funding:"Full Tuition + Stipend",
requirements:[
"Open to Class XII Graduates",
"Minimum GPA 3.8"
],
deadline:"30 October 2026"
},

{
title:"Bhutan Research Innovation Grant",
category:"National",
icon:<FlaskConical/>,
funding:"Up to Nu.500,000",
requirements:[
"Research focused on Bhutan",
"Postgraduate students"
],
deadline:"15 November 2026"
},


{
title:"Sustainability Fellowship",
category:"Environment",
icon:<Leaf/>,
funding:"Full Funding + Travel",
requirements:[
"Environmental Science",
"IELTS 6.5+"
],
deadline:"7 Days Left"
}

]


return (

<div className="p-8">


{/* Hero Section */}

<section className="
bg-blue-800 
text-white 
rounded-3xl 
p-10 
mb-10
">

<span className="
bg-yellow-400 
text-black 
px-4 
py-2 
rounded-full
text-sm
">

Prestigious Scholarship

</span>


<h1 className="
text-4xl 
font-bold 
mt-5
">

His Majesty's National Excellence Scholarship

</h1>


<p className="
mt-4 
max-w-2xl
">

Opportunity for Bhutanese youth to pursue higher education globally with financial support.

</p>


<button className="
bg-white 
text-blue-800
px-6
py-3
rounded-xl
mt-6
font-semibold
">

View Eligibility

</button>


</section>



<div className="
grid
grid-cols-1
lg:grid-cols-3
gap-8
">


{/* Scholarship Cards */}

<div className="
lg:col-span-2
">

<h2 className="
text-3xl
font-bold
mb-6
">

Available Scholarships

</h2>


<div className="
grid
md:grid-cols-2
gap-6
">


{
scholarships.map((item,index)=>(

<ScholarshipCard
key={index}
data={item}
/>

))
}


</div>


</div>



{/* Right Sidebar */}

<div>

<MatchFinder/>

</div>


</div>


</div>

)

}


export default Scholarships;