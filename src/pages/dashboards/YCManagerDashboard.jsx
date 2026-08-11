import {
  Users,
  UserCheck,
  UserPlus,
  ArrowRightLeft,
  HeartHandshake,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Activity,
  TrendingUp,
  Clock,
  Bell,
  ChevronRight,
  Plus,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";


// ======================================================
// SAMPLE DATA
// Later this can be replaced with API/database data
// ======================================================

const STATS = [
  {
    title: "Registered Youth",
    value: "2,480",
    change: "+8.4%",
    description: "This month",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Today's Visitors",
    value: "86",
    change: "+12.5%",
    description: "Compared to yesterday",
    icon: UserCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Active Volunteers",
    value: "340",
    change: "+6.8%",
    description: "Centre volunteers",
    icon: HeartHandshake,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Active Programmes",
    value: "12",
    change: "+2",
    description: "This month",
    icon: BookOpen,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];


const PENDING_APPROVALS = [
  {
    title: "Youth Registrations",
    count: 18,
    description: "Waiting for verification",
    icon: UserPlus,
    color: "blue",
  },
  {
    title: "Volunteer Applications",
    count: 7,
    description: "Waiting for approval",
    icon: HeartHandshake,
    color: "violet",
  },
  {
    title: "Programme Requests",
    count: 5,
    description: "Waiting for review",
    icon: BookOpen,
    color: "amber",
  },
  {
    title: "Member Transfers",
    count: 3,
    description: "Transfer requests",
    icon: ArrowRightLeft,
    color: "emerald",
  },
];


const UPCOMING_EVENTS = [
  {
    title: "Youth Leadership Workshop",
    date: "08 Aug",
    time: "10:00 AM",
    participants: 42,
    type: "Workshop",
  },
  {
    title: "Community Volunteer Drive",
    date: "10 Aug",
    time: "09:30 AM",
    participants: 68,
    type: "Volunteer",
  },
  {
    title: "Digital Skills Programme",
    date: "13 Aug",
    time: "02:00 PM",
    participants: 35,
    type: "Training",
  },
  {
    title: "Youth Wellness Session",
    date: "16 Aug",
    time: "11:00 AM",
    participants: 28,
    type: "Wellness",
  },
];


const RECENT_ACTIVITIES = [
  {
    title: "New youth registration approved",
    user: "Karma Wangchuk",
    time: "10 minutes ago",
    icon: CheckCircle2,
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Volunteer application submitted",
    user: "Sonam Dorji",
    time: "35 minutes ago",
    icon: UserPlus,
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Programme report submitted",
    user: "Youth Leadership Team",
    time: "1 hour ago",
    icon: FileText,
    iconColor: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Member transfer request received",
    user: "Thimphu Youth Centre",
    time: "2 hours ago",
    icon: ArrowRightLeft,
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
  },
];


const SERVICE_DATA = [
  {
    name: "Counselling",
    value: 82,
  },
  {
    name: "Career Guidance",
    value: 74,
  },
  {
    name: "Sports & Recreation",
    value: 68,
  },
  {
    name: "Training & Skills",
    value: 61,
  },
  {
    name: "Volunteer Services",
    value: 56,
  },
];


// ======================================================
// COMPONENT
// ======================================================

const YCManagerDashboard = () => {
  return (
    <div className="space-y-6">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <Activity size={16} />
            Thimphu Youth Centre
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Youth Centre Dashboard
          </h1>

          <p className="text-gray-500 mt-1 text-sm">
            Centre operations, youth engagement and programme management.
          </p>
        </div>


        <div className="flex flex-wrap gap-3">

          <button
            className="
              px-4
              py-2.5
              rounded-xl
              bg-white
              border
              border-gray-200
              text-gray-700
              text-sm
              font-medium
              flex
              items-center
              gap-2
              hover:bg-gray-50
              transition
            "
          >
            <CalendarDays size={17} />
            View Calendar
          </button>

          <button
            className="
              px-4
              py-2.5
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              hover:bg-blue-700
              transition
              shadow-sm
            "
          >
            <Plus size={17} />
            Quick Action
          </button>

        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {STATS.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                hover:shadow-sm
                transition
              "
            >

              <div className="flex items-start justify-between">

                <div
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    ${stat.iconBg}
                    ${stat.iconColor}
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <Icon size={21} />
                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  {stat.change}
                </span>

              </div>


              <p className="text-sm text-gray-500 mt-4">
                {stat.title}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                {stat.description}
              </p>

            </div>
          );

        })}

      </div>


      {/* ==================================================
          MAIN GRID
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


        {/* ================================================
            PENDING APPROVALS
        ================================================= */}

        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Pending Approvals
              </h2>

              <p className="text-sm text-gray-500">
                Items requiring your attention
              </p>
            </div>

            <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
              View All
              <ChevronRight size={16} />
            </button>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {PENDING_APPROVALS.map((item) => {

              const Icon = item.icon;

              const colorStyles = {
                blue: "bg-blue-50 text-blue-600",
                violet: "bg-violet-50 text-violet-600",
                amber: "bg-amber-50 text-amber-600",
                emerald: "bg-emerald-50 text-emerald-600",
              };

              return (
                <div
                  key={item.title}
                  className="
                    border
                    border-gray-100
                    rounded-xl
                    p-4
                    hover:border-blue-200
                    hover:shadow-sm
                    transition
                    cursor-pointer
                  "
                >

                  <div className="flex items-center justify-between">

                    <div
                      className={`
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        ${colorStyles[item.color]}
                      `}
                    >
                      <Icon size={19} />
                    </div>

                    <span className="text-2xl font-bold text-gray-900">
                      {item.count}
                    </span>

                  </div>


                  <h3 className="font-semibold text-gray-900 mt-4">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>


        {/* ================================================
            DAILY SERVICE UTILIZATION
        ================================================= */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Service Utilization
              </h2>

              <p className="text-sm text-gray-500">
                Popular services this month
              </p>
            </div>

            <Activity
              size={20}
              className="text-blue-600"
            />

          </div>


          <div className="space-y-5">

            {SERVICE_DATA.map((service) => (

              <div key={service.name}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm text-gray-600">
                    {service.name}
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {service.value}%
                  </span>

                </div>


                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{
                      width: `${service.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ==================================================
          EVENTS + ACTIVITY
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        {/* ================================================
            UPCOMING EVENTS
        ================================================= */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Upcoming Activities
              </h2>

              <p className="text-sm text-gray-500">
                Scheduled centre activities
              </p>
            </div>

            <button className="text-blue-600 text-sm font-medium">
              Calendar
            </button>

          </div>


          <div className="space-y-3">

            {UPCOMING_EVENTS.map((event) => (

              <div
                key={event.title}
                className="
                  flex
                  items-center
                  gap-4
                  p-3
                  rounded-xl
                  hover:bg-gray-50
                  transition
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    flex
                    flex-col
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <CalendarDays size={16} />
                  <span className="text-[10px] font-bold mt-0.5">
                    {event.date}
                  </span>
                </div>


                <div className="flex-1 min-w-0">

                  <h3 className="font-semibold text-sm text-gray-900 truncate">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-1">

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={12} />
                      {event.time}
                    </span>

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Users size={12} />
                      {event.participants}
                    </span>

                  </div>

                </div>


                <span className="hidden sm:block text-xs px-2 py-1 rounded-lg bg-gray-100 text-gray-600">
                  {event.type}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* ================================================
            RECENT ACTIVITY
        ================================================= */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Recent Activity
              </h2>

              <p className="text-sm text-gray-500">
                Latest centre activities
              </p>
            </div>

            <Bell
              size={20}
              className="text-blue-600"
            />

          </div>


          <div className="space-y-1">

            {RECENT_ACTIVITIES.map((activity) => {

              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="
                    flex
                    gap-3
                    p-3
                    rounded-xl
                    hover:bg-gray-50
                    transition
                  "
                >

                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      ${activity.bg}
                      ${activity.iconColor}
                      flex
                      items-center
                      justify-center
                      shrink-0
                    `}
                  >
                    <Icon size={17} />
                  </div>


                  <div className="flex-1">

                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      {activity.user}
                    </p>

                    <p className="text-[11px] text-gray-400 mt-1">
                      {activity.time}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </div>


      {/* ==================================================
          QUICK ACTIONS
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="mb-5">

          <h2 className="text-lg font-bold text-gray-900">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500">
            Frequently used centre functions
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">

          {[
            {
              title: "Register Youth",
              icon: UserPlus,
            },
            {
              title: "Record Service",
              icon: ClipboardCheck,
            },
            {
              title: "Add Volunteer",
              icon: HeartHandshake,
            },
            {
              title: "Create Programme",
              icon: BookOpen,
            },
            {
              title: "Member Transfer",
              icon: ArrowRightLeft,
            },
            {
              title: "Generate Report",
              icon: FileText,
            },
          ].map((action) => {

            const Icon = action.icon;

            return (
              <button
                key={action.title}
                className="
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  hover:border-blue-300
                  hover:bg-blue-50
                  transition
                  text-left
                  group
                "
              >

                <Icon
                  size={20}
                  className="
                    text-blue-600
                    group-hover:scale-110
                    transition
                  "
                />

                <p className="text-sm font-semibold text-gray-800 mt-3">
                  {action.title}
                </p>

              </button>
            );

          })}

        </div>

      </div>


      {/* ==================================================
          ATTENTION ALERT
      ================================================== */}

      <div
        className="
          bg-amber-50
          border
          border-amber-200
          rounded-2xl
          p-5
          flex
          items-start
          gap-3
        "
      >

        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
          <AlertCircle size={20} />
        </div>

        <div>

          <h3 className="font-semibold text-gray-900">
            Attention Required
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            There are pending approvals and programme reports that require
            review before the end of the day.
          </p>

        </div>

      </div>

    </div>
  );
};


export default YCManagerDashboard;