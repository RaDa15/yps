import {
Users,
Building2,
CalendarCheck,
Award,
TrendingUp
} from "lucide-react";


import {

BarChart,
Bar,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell,
AreaChart,
Area

} from "recharts";



const AdminDashboard=()=>{



const stats=[

{
title:"Total Youth",
value:"25,450",
icon:Users
},

{
title:"Youth Centres",
value:"13",
icon:Building2
},

{
title:"Programmes",
value:"650",
icon:CalendarCheck
},

{
title:"Volunteers",
value:"4,200",
icon:Award
}

];





const dzongkhag=[

{
name:"Thimphu",
youth:5200
},

{
name:"Paro",
youth:3500
},

{
name:"Punakha",
youth:2800
},

{
name:"Haa",
youth:1200
},

{
name:"Samtse",
youth:3000
}

];





const monthly=[

{
month:"Jan",
users:1200
},

{
month:"Feb",
users:1800
},

{
month:"Mar",
users:2500
},

{
month:"Apr",
users:3200
},

{
month:"May",
users:4000
},

{
month:"Jun",
users:5200
}

];





const gender=[

{
name:"Male",
value:52
},

{
name:"Female",
value:48
}

];







const centres=[

{
name:"Thimphu YC",
performance:95
},

{
name:"Paro YC",
performance:88
},

{
name:"Haa YC",
performance:82
},

{
name:"Punakha YC",
performance:78
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

Admin Dashboard

</h1>


<p className="
text-gray-500
">

Overall Youth Development System Overview

</p>


</div>








{/* STAT CARDS */}



<div className="
grid
md:grid-cols-4
gap-5
">


{

stats.map((item,index)=>{


const Icon=item.icon;


return(

<div

key={index}

className="
bg-white
rounded-xl
shadow
p-6
flex
items-center
gap-4
"


>


<div className="
bg-blue-100
p-3
rounded-xl
">


<Icon/>

</div>



<div>

<p className="
text-gray-500
">

{item.title}

</p>


<h2 className="
text-3xl
font-bold
">

{item.value}

</h2>


</div>



</div>

)


})


}



</div>









{/* CHART ROW 1 */}



<div className="
grid
md:grid-cols-2
gap-6
">





{/* BAR CHART */}


<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
font-bold
text-xl
mb-5
">

Youth By Dzongkhag

</h2>


<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={dzongkhag}

>


<XAxis

dataKey="name"

/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="youth"

/>


</BarChart>


</ResponsiveContainer>



</div>








{/* PIE */}


<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
font-bold
text-xl
mb-5
">

Gender Distribution

</h2>



<ResponsiveContainer

height={300}

>


<PieChart>


<Pie

data={gender}

dataKey="value"

outerRadius={100}

label

>


{

gender.map((item,index)=>(

<Cell

key={index}

/>

))

}



</Pie>


</PieChart>



</ResponsiveContainer>



</div>




</div>









{/* LINE GRAPH */}



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Youth Registration Growth

</h2>




<ResponsiveContainer

width="100%"

height={300}

>


<LineChart

data={monthly}

>


<XAxis

dataKey="month"

/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="users"

/>


</LineChart>


</ResponsiveContainer>



</div>









{/* AREA GRAPH */}



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

System Growth Trend

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<AreaChart

data={monthly}

>


<XAxis

dataKey="month"

/>


<YAxis/>


<Tooltip/>


<Area

type="monotone"

dataKey="users"

/>


</AreaChart>



</ResponsiveContainer>



</div>









{/* YC PERFORMANCE */}



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Top Performing Youth Centres

</h2>



<div className="
space-y-4
">


{

centres.map((centre,index)=>(


<div

key={index}

>


<div className="
flex
justify-between
mb-2
">


<span>

{centre.name}

</span>


<span>

{centre.performance}%

</span>


</div>



<div className="
bg-gray-200
h-3
rounded-full
">


<div

className="
bg-blue-600
h-3
rounded-full
"

style={{

width:`${centre.performance}%`

}}

/>


</div>


</div>


))


}



</div>


</div>









{/* RECENT ACTIVITY */}



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Recent Activities

</h2>



<div className="
space-y-3
">


<p>
🟢 YC Manager approved Youth Leadership Programme
</p>


<p>
🟢 120 new youth registered today
</p>


<p>
🟢 Volunteer certificates generated
</p>


</div>


</div>







</div>


)


}



export default AdminDashboard;