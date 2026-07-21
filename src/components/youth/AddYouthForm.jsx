import {useState} from "react";

import AddYouthForm from "../components/youth/AddYouthForm";
import {
X,
Save,
ShieldCheck
} from "lucide-react";


const AddYouthForm = ({closeForm}) => {


return (

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
w-full
max-w-3xl
rounded-2xl
p-8
shadow-xl
max-h-[90vh]
overflow-y-auto
">





{/* Header */}

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

Register New Youth

</h2>



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

Add Youth


</button>
{
showForm &&

<AddYouthForm

closeForm={()=>setShowForm(false)}

/>

}


</div>







{/* NDI Verification */}

<div className="
bg-blue-50
p-4
rounded-xl
mb-6
flex
justify-between
items-center
">


<div>

<h3 className="
font-semibold
">

NDI Verification

</h3>


<p className="
text-sm
text-gray-500
">

Verify youth identity using National Digital Identity

</p>


</div>




<button

className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
flex
items-center
gap-2
"

>


<ShieldCheck size={18}/>

Verify CID


</button>



</div>









{/* Form */}


<div className="
grid
md:grid-cols-2
gap-5
">





<input

placeholder="Citizenship ID (CID)"

className="
border
rounded-xl
p-3
"

/>




<input

placeholder="Full Name"

className="
border
rounded-xl
p-3
"

/>






<input

type="date"

className="
border
rounded-xl
p-3
"

/>






<select

className="
border
rounded-xl
p-3
"

>

<option>
Select Gender
</option>

<option>
Male
</option>


<option>
Female
</option>


</select>






<input

placeholder="Contact Number"

className="
border
rounded-xl
p-3
"

/>






<input

placeholder="Email Address"

className="
border
rounded-xl
p-3
"

/>






<input

placeholder="Dzongkhag"

className="
border
rounded-xl
p-3
"

/>





<input

placeholder="Gewog"

className="
border
rounded-xl
p-3
"

/>






<select

className="
border
rounded-xl
p-3
"

>


<option>
Education Level
</option>


<option>
School
</option>


<option>
College
</option>


<option>
Vocational Training
</option>


<option>
Graduate
</option>


</select>







<input

placeholder="Skills / Interests"

className="
border
rounded-xl
p-3
"

/>




</div>








{/* Buttons */}


<div className="
flex
justify-end
gap-4
mt-8
">


<button

onClick={closeForm}

className="
px-5
py-3
rounded-xl
border
"

>

Cancel

</button>





<button

className="
bg-green-600
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
"

>


<Save size={18}/>

Save Youth


</button>



</div>






</div>


</div>

)

}


export default AddYouthForm;