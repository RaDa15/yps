import AdminSidebar from "./AdminSidebar";


const AdminLayout = ({children}) => {


return (

<div className="
min-h-screen
bg-gray-50
">


<AdminSidebar/>


<main className="
lg:ml-72
p-8
">

{children}

</main>



</div>

)

}


export default AdminLayout;