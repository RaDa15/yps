import StatsCard from "../components/dashboard/StatsCard";
import ModuleCard from "../components/dashboard/ModuleCard";


import {
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
Cell,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";





const YCManagerDashboard = () => {



const youthGrowth = [

{
month:"Jan",
youth:320
},

{
month:"Feb",
youth:370
},

{
month:"Mar",
youth:420
},

{
month:"Apr",
youth:460
},

{
month:"May",
youth:510
},

{
month:"Jun",
youth:540
}

];






const programmeData=[

{
name:"Completed",
value:40
},

{
name:"Ongoing",
value:12
},

{
name:"Upcoming",
value:18
}

];





const volunteerData=[


{
month:"Jan",
volunteers:40
},

{
month:"Feb",
volunteers:55
},

{
month:"Mar",
volunteers:65
},

{
month:"Apr",
volunteers:75
},

{
month:"May",
volunteers:85
}


];







return (

<div className="
p-6
bg-gray-50
min-h-screen
space-y-8
">





{/* Header */}

<div>

<h1 className="
text-3xl
font-bold
text-gray-800
">

🏢 YC Manager Dashboard

</h1>


<p className="
text-gray-500
mt-2
">

Manage Youth Centre activities and services

</p>


</div>









{/* Stats */}

<div>


<h2 className="
text-xl
font-semibold
mb-4
">

Overview

</h2>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-5
">


<StatsCard

icon="👥"

title="Total Youth"

value="540"

description="Registered youth members"

color="bg-blue-50"

/>



<StatsCard

icon="🙋"

title="Volunteers"

value="85"

description="Active volunteers"

color="bg-green-50"

/>



<StatsCard

icon="📅"

title="Programmes"

value="12"

description="Active programmes"

color="bg-purple-50"

/>



<StatsCard

icon="🏆"

title="Achievements"

value="245"

description="Recorded achievements"

color="bg-yellow-50"

/>



</div>

</div>









{/* Analytics Section */}

<div>


<h2 className="
text-xl
font-semibold
mb-4
">

Youth Centre Analytics

</h2>





<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
">







{/* Line Chart */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h3 className="
font-semibold
mb-4
">

Youth Registration Growth

</h3>



<ResponsiveContainer
width="100%"
height={300}
>


<LineChart
data={youthGrowth}
>


<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Line

type="monotone"

dataKey="youth"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>









{/* Pie Chart */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h3 className="
font-semibold
mb-4
">

Programme Status

</h3>



<ResponsiveContainer
width="100%"
height={300}
>


<PieChart>


<Pie

data={programmeData}

dataKey="value"

nameKey="name"

outerRadius={100}

label

>


{
programmeData.map((entry,index)=>(


<Cell

key={index}

/>


))

}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>



</div>






</div>


</div>









{/* Volunteer Chart */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h3 className="
font-semibold
mb-4
">

Volunteer Participation Trend

</h3>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={volunteerData}

>


<XAxis

dataKey="month"

/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="volunteers"

/>


</BarChart>


</ResponsiveContainer>


</div>









{/* Modules */}

<div>


<h2 className="
text-xl
font-semibold
mb-4
">

YC Manager Modules

</h2>





<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
">



<ModuleCard

icon="👥"

title="Youth Registration"

description="Register and manage youth profiles"

/>



<ModuleCard

icon="🔄"

title="Member Transfer"

description="Manage youth transfer between centres"

/>



<ModuleCard

icon="🙋"

title="Volunteer Registration"

description="Register and manage volunteers"

/>



<ModuleCard

icon="🏃"

title="Volunteer Activity Management"

description="Track volunteer activities"

/>



<ModuleCard

icon="📜"

title="E-Certificate Generation"

description="Generate digital certificates"

/>



<ModuleCard

icon="📅"

title="Programme Management"

description="Create and manage programmes"

/>



<ModuleCard

icon="📊"

title="Programme Reporting"

description="Submit programme reports"

/>



<ModuleCard

icon="🏆"

title="Achievement Tracking"

description="Monitor youth achievements"

/>



<ModuleCard

icon="💡"

title="Additional Initiatives"

description="Manage youth initiatives"

/>



<ModuleCard

icon="💬"

title="Feedback Management"

description="Manage youth feedback"

/>



<ModuleCard

icon="🧠"

title="Counselling Booking"

description="Manage counselling sessions"

/>



</div>


</div>








</div>


);


};


export default YCManagerDashboard;