import {
  PlusCircle,
  Megaphone,
  Database,
  Settings,
  UserCog,
  FileText
} from "lucide-react";

import { Link } from "react-router-dom";


const actions = [

  {
    title: "Create National Programme",
    description:
      "Create and publish nationwide youth programmes and initiatives",
    icon: PlusCircle,
    path: "/pycd-dashboard/programmes",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },


  {
    title: "Broadcast Notification",
    description:
      "Send announcements to Youth Centres and volunteers",
    icon: Megaphone,
    path: "/pycd-dashboard/notifications",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },


  {
    title: "Manage Master Data",
    description:
      "Configure achievements, categories and service types",
    icon: Database,
    path: "/pycd-dashboard/master-data",
    color: "text-green-600",
    bg: "bg-green-50"
  },


  {
    title: "User & Role Management",
    description:
      "Manage user accounts and access permissions",
    icon: UserCog,
    path: "/pycd-dashboard/users",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },


  {
    title: "System Configuration",
    description:
      "Configure platform settings and controls",
    icon: Settings,
    path: "/pycd-dashboard/settings",
    color: "text-red-600",
    bg: "bg-red-50"
  },


  {
    title: "Generate Reports",
    description:
      "Create national reports for stakeholders",
    icon: FileText,
    path: "/pycd-dashboard/reports",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }

];



const QuickAction = () => {


return (

<div className="bg-white rounded-2xl border border-gray-200 p-6">


  <div className="mb-6">

    <h2 className="text-lg font-bold text-gray-900">
      Quick Actions
    </h2>


    <p className="text-sm text-gray-500 mt-1">
      National-level system management and operational shortcuts
    </p>

  </div>





  <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-5
  ">


  {
    actions.map((action)=>{


      const Icon = action.icon;


      return (

      <Link
        key={action.title}
        to={action.path}
        className="
          group
          border
          border-gray-100
          rounded-xl
          p-5
          hover:shadow-md
          transition
          bg-gray-50/50
        "
      >


        <div className="
          flex
          items-start
          gap-4
        ">


          <div
          className={`
            ${action.bg}
            ${action.color}
            p-3
            rounded-xl
          `}
          >

            <Icon
              className="w-6 h-6"
            />

          </div>





          <div>


            <h3 className="
              font-bold
              text-gray-900
              group-hover:text-blue-600
              transition
            ">

              {action.title}

            </h3>



            <p className="
              text-sm
              text-gray-500
              mt-2
              leading-relaxed
            ">

              {action.description}

            </p>


          </div>


        </div>


      </Link>


      )


    })
  }


  </div>


</div>

);


};


export default QuickAction;