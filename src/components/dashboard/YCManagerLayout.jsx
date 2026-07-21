import YCManagerSidebar from "./YCManagerSidebar";


const YCManagerLayout = ({children}) => {


return(

<div>


<YCManagerSidebar />


<main

className="
ml-64
min-h-screen
bg-gray-50
"

>

{children}

</main>


</div>

)


}


export default YCManagerLayout;