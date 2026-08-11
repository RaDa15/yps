// src/layouts/AdminLayout.jsx

import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/layout/AdminSidebar";



const AdminLayout = () => {


    return (

        <div
            className="
            flex
            min-h-screen
            bg-slate-100
            "
        >





            {/* SIDEBAR */}

            <aside

                className="
                fixed
                left-0
                top-0
                h-screen
                w-72
                bg-slate-900
                text-white
                shadow-xl
                z-50
                "

            >


                <AdminSidebar />


            </aside>









            {/* MAIN CONTENT AREA */}


            <div

                className="
                flex-1
                ml-72
                min-h-screen
                "

            >





                {/* HEADER */}


                <header

                    className="
                    h-20
                    bg-white
                    border-b
                    border-slate-200
                    flex
                    items-center
                    justify-between
                    px-8
                    sticky
                    top-0
                    z-40
                    "

                >




                    {/* TITLE */}


                    <div>


                        <h1

                            className="
                            text-xl
                            font-bold
                            text-slate-800
                            "

                        >

                            Youth Portal System

                        </h1>



                        <p

                            className="
                            text-sm
                            text-slate-500
                            "

                        >

                            National Youth Development Platform

                        </p>


                    </div>








                    {/* PROFILE */}


                    <div

                        className="
                        flex
                        items-center
                        gap-3
                        "

                    >



                        <div

                            className="
                            h-11
                            w-11
                            rounded-full
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                            font-bold
                            "

                        >

                            A

                        </div>





                        <div>


                            <p

                                className="
                                text-sm
                                font-semibold
                                text-slate-800
                                "

                            >

                                Administrator

                            </p>



                            <p

                                className="
                                text-xs
                                text-slate-500
                                "

                            >

                                PYCD Focal

                            </p>



                        </div>



                    </div>



                </header>









                {/* PAGE CONTENT */}


                <main

                    className="
                    p-8
                    overflow-y-auto
                    min-h-[calc(100vh-80px)]
                    "

                >



                    <Outlet />



                </main>



            </div>



        </div>

    );

};



export default AdminLayout;