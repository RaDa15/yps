import {
Plus,
Search,
Award,
Eye,
Edit,
Trash2,
X,
Star
} from "lucide-react";


import {
useState
} from "react";



const AchievementTracking =()=>{


const [showForm,setShowForm]=useState(false);



const achievements=[


{
id:1,
youth:"Tshering Pem",
achievement:"National Volunteer Award",
category:"Volunteer",
points:100,
badge:"Gold Volunteer",
status:"Verified"
},


{
id:2,
youth:"Sonam Dorji",
achievement:"Leadership Excellence",
category:"Leadership",
points:80,
badge:"Leadership Star",
status:"Verified"
},


{
id:3,
youth:"Karma Wangmo",
achievement:"Digital Skills Champion",
category:"Skills",
points:50,
badge:"Skill Explorer",
status:"Pending"
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
">

Achievement Tracking

</h1>


<p className="
text-gray-500
">

Manage youth achievements and rewards

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

Add Achievement


</button>


</div>









{/* Stats */}



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

<p>Total Achievements</p>

<h2 className="
text-3xl
font-bold
">

450

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Badges Awarded</p>

<h2 className="
text-3xl
font-bold
text-yellow-600
">

320

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Total Points</p>

<h2 className="
text-3xl
font-bold
text-blue-600
">

25000

</h2>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<p>Verified</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

400

</h2>

</div>



</div>









{/* Search */}



<div className="
bg-white
rounded-xl
p-4
shadow
flex
items-center
gap-3
">


<Search size={20}/>


<input

placeholder="Search achievement or youth..."

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



<table className="
w-full
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

Achievement

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

Points

</th>


<th className="
p-4
text-left
">

Badge

</th>


<th className="
p-4
text-left
">

Status

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

achievements.map((item)=>(


<tr

key={item.id}

className="
border-t
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

{item.achievement}

</td>




<td className="
p-4
">

{item.category}

</td>




<td className="
p-4
flex
items-center
gap-2
">

<Star size={16}/>

{item.points}

</td>




<td className="
p-4
">

<span className="
bg-yellow-100
text-yellow-700
px-3
py-1
rounded-full
">

{item.badge}

</span>


</td>





<td className="
p-4
">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
">

{item.status}

</span>


</td>






<td className="
p-4
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




</td>


</tr>


))


}



</tbody>



</table>


</div>









{/* Add Achievement Modal */}




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



<div className="
bg-white
rounded-2xl
p-8
w-full
max-w-2xl
">





<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-2xl
font-bold
">

Add Youth Achievement

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
w-full
border
rounded-xl
p-3
"

/>





<select

className="
w-full
border
rounded-xl
p-3
"

>


<option>
Achievement Category
</option>


<option>
Volunteer
</option>


<option>
Leadership
</option>


<option>
Skills
</option>


<option>
Sports
</option>


<option>
Culture
</option>


</select>






<input

placeholder="Achievement Title"

className="
w-full
border
rounded-xl
p-3
"

/>







<input

placeholder="Points"

className="
w-full
border
rounded-xl
p-3
"

/>






<select

className="
w-full
border
rounded-xl
p-3
"

>


<option>
Select Badge
</option>


<option>
Bronze Achiever
</option>


<option>
Silver Star
</option>


<option>
Gold Champion
</option>


</select>








<textarea

placeholder="Achievement Description"

className="
w-full
border
rounded-xl
p-3
"

/>



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

Award Achievement

</button>





</div>


</div>



}




</div>


)

}


export default AchievementTracking;