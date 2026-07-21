import {

FileText,
Download,
Search,
Users,
CalendarDays,
Award,
Building2

} from "lucide-react";



import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell

} from "recharts";





const AdminReports=()=>{



const reportStats=[


{
title:"Youth Reports",
value:"25,450",
icon:Users
},


{
title:"Programmes",
value:"650",
icon:CalendarDays
},


{
title:"Volunteers",
value:"4,200",
icon:Award
},


{
title:"Youth Centres",
value:"13",
icon:Building2
}


];







const dzongkhagData=[


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






const genderData=[


{
name:"Male",
value:52
},


{
name:"Female",
value:48
}


];







return(


<div className="
space-y-6
">






{/* HEADER */}


<div className="
flex
justify-between
items-center
">


<div>


<h1 className="
text-3xl
font-bold
">

Reports & Analytics

</h1>


<p className="
text-gray-500
">

Generate insights and government reports

</p>


</div>





<button

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


<Download size={20}/>

Export Report


</button>



</div>









{/* STATS */}



<div className="
grid
md:grid-cols-4
gap-5
">


{

reportStats.map((item,index)=>{


const Icon=item.icon;


return(


<div

key={index}

className="
bg-white
p-6
rounded-xl
shadow
flex
gap-4
items-center
"


>


<div className="
bg-blue-100
p-3
rounded-xl
">


<Icon size={25}/>


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









{/* FILTER */}



<div className="
bg-white
rounded-xl
shadow
p-5
grid
md:grid-cols-4
gap-4
">



<select className="
border
rounded-xl
p-3
">


<option>
Select Year
</option>


<option>
2026
</option>


<option>
2025
</option>


</select>






<select className="
border
rounded-xl
p-3
">


<option>
Select Dzongkhag
</option>


<option>
Thimphu
</option>


<option>
Paro
</option>


<option>
Haa
</option>


</select>





<select className="
border
rounded-xl
p-3
">


<option>
Report Type
</option>


<option>
Youth Report
</option>


<option>
Programme Report
</option>


<option>
Volunteer Report
</option>


</select>





<button className="
bg-green-600
text-white
rounded-xl
">

Generate

</button>




</div>









{/* CHART SECTION */}



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

Youth Distribution by Dzongkhag

</h2>



<ResponsiveContainer

height={300}

width="100%"

>


<BarChart

data={dzongkhagData}

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

Gender Analysis

</h2>



<ResponsiveContainer

height={300}

>


<PieChart>


<Pie

data={genderData}

dataKey="value"

outerRadius={100}

label

>


{

genderData.map((item,index)=>(


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









{/* REPORT LIST */}



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

Available Reports

</h2>





<div className="
space-y-4
">



{

[

"Youth Registration Report",

"Programme Performance Report",

"Volunteer Activity Report",

"Youth Centre Performance Report",

"Certificate Generation Report"

].map((report,index)=>(


<div

key={index}

className="
flex
justify-between
items-center
border
rounded-xl
p-4
"


>


<div className="
flex
items-center
gap-3
">


<FileText/>

<span className="
font-medium
">

{report}

</span>


</div>




<button className="
text-blue-600
flex
gap-2
items-center
">


<Download size={18}/>

Download


</button>




</div>


))


}



</div>


</div>







</div>


)


}



export default AdminReports;