import {
  Trophy,
  QrCode,
  Star
} from "lucide-react";


function DashboardHero(){


return(


<section

className="
relative
overflow-hidden
bg-gradient-to-r
from-blue-700
via-blue-600
to-indigo-600
rounded-3xl
p-8
lg:p-10
text-white
shadow-xl
"

>


{/* Background Decoration */}

<div

className="
absolute
right-0
top-0
w-72
h-72
bg-white
opacity-10
rounded-full
translate-x-20
-translate-y-20
"

></div>



<div

className="
absolute
left-0
bottom-0
w-40
h-40
bg-white
opacity-10
rounded-full
-translate-x-10
translate-y-10
"

></div>





<div

className="
relative
z-10
grid
grid-cols-1
lg:grid-cols-3
gap-8
items-center
"

>




{/* Welcome */}

<div

className="
lg:col-span-2
"

>


<p

className="
text-blue-100
font-medium
"

>

Good Morning 👋

</p>


<h1

className="
text-4xl
font-bold
mt-2
"

>

Kuzuzangpo, Sonam!

</h1>



<p

className="
mt-4
text-blue-100
max-w-xl
leading-relaxed
"

>

Continue your youth development journey.
Explore opportunities, improve your skills,
volunteer and create positive impact in Bhutan.

</p>





{/* XP Progress */}

<div

className="
mt-8
bg-white/20
backdrop-blur-md
rounded-2xl
p-5
max-w-lg
"

>


<div

className="
flex
justify-between
mb-3
"

>

<span>

Youth Level 5

</span>


<span

className="
font-bold
"

>

1,240 XP

</span>


</div>



<div

className="
w-full
h-3
bg-white/30
rounded-full
overflow-hidden
"

>


<div

className="
h-full
bg-yellow-400
rounded-full
w-[65%]
"

></div>


</div>



<p

className="
text-sm
text-blue-100
mt-3
"

>

260 XP remaining to reach Level 6

</p>



</div>


</div>







{/* Digital Youth ID Card */}

<div

className="
bg-white
text-gray-800
rounded-3xl
p-6
shadow-lg
"

>


<div

className="
flex
justify-between
items-start
"

>


<div>


<p

className="
text-sm
text-gray-500
"

>

Digital Youth ID

</p>


<h2

className="
text-xl
font-bold
text-blue-700
mt-1
"

>

YD-2026-00045

</h2>


</div>



<QrCode

className="
text-blue-600
"

size={45}

/>


</div>





<div

className="
mt-6
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
rounded-full
bg-blue-100
flex
items-center
justify-center
"

>


<Star

className="
text-blue-600
"

size={25}

/>


</div>



<div>

<p

className="
font-semibold
"

>

Active Youth Member

</p>


<p

className="
text-sm
text-gray-500
"

>

Verified Profile

</p>


</div>



</div>



<button

className="
mt-6
w-full
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
flex
items-center
justify-center
gap-2
"

>

<Trophy size={18}/>

View Achievements

</button>



</div>



</div>



</section>


)


}


export default DashboardHero;