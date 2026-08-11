import {
  Users,
  CalendarDays,
  Clock3,
  UserCheck,
  ClipboardCheck,
  Plus,
  Bell,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Network Volunteers",
    value: "86",
    description: "Active volunteers",
    icon: Users,
  },
  {
    title: "Pending Applications",
    value: "12",
    description: "Require review",
    icon: ClipboardCheck,
  },
  {
    title: "Upcoming Activities",
    value: "8",
    description: "Next 30 days",
    icon: CalendarDays,
  },
  {
    title: "Service Hours",
    value: "1,248",
    description: "This year",
    icon: Clock3,
  },
];

const NetworkHome = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <p className="text-sm text-blue-600 font-semibold">
            Y-PEER Network Management
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
            Network Dashboard
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Monitor volunteers, activities and engagement across your network.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md transition">
          <Plus className="w-4 h-4" />
          Create Activity
        </button>

      </div>

      {/* Network Badge */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">
            Assigned Network
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-1">
            Y-PEER Bhutan Network
          </h2>

          <p className="text-sm text-gray-500">
            Network Focal Point access
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold">
          Active Network
        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex items-start justify-between">

                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <ArrowUpRight className="w-4 h-4 text-gray-300" />

              </div>

              <p className="text-sm text-gray-500 mt-5">
                {stat.title}
              </p>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                {stat.value}
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                {stat.description}
              </p>

            </div>
          );

        })}

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Approval Queue */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl">

          <div className="p-5 border-b border-gray-100 flex items-center justify-between">

            <div>
              <h2 className="font-bold text-gray-900">
                Approval Queue
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Items requiring your attention
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
              12 Pending
            </span>

          </div>

          <div className="divide-y divide-gray-100">

            {[
              ["Volunteer Application", "Sonam Wangchuk", "2 hours ago"],
              ["Activity Validation", "Youth Leadership Workshop", "5 hours ago"],
              ["Service Hour Validation", "Karma Dorji", "Yesterday"],
              ["Post-Activity Submission", "Community Outreach", "Yesterday"],
            ].map((item, index) => (

              <div
                key={index}
                className="p-5 flex items-center justify-between gap-4"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item[0]}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item[1]} · {item[2]}
                    </p>
                  </div>

                </div>

                <button className="text-xs font-bold text-blue-600 hover:text-blue-800">
                  Review
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <h2 className="font-bold text-gray-900">
            Quick Actions
          </h2>

          <p className="text-xs text-gray-500 mt-1 mb-5">
            Frequently used network functions
          </p>

          <div className="space-y-3">

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition text-left">
              <Plus className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Create Network Activity
              </span>
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition text-left">
              <UserCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Approve Volunteers
              </span>
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition text-left">
              <Clock3 className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Validate Service Hours
              </span>
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition text-left">
              <Bell className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Notify Volunteers
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* Upcoming Activities */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-5 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Upcoming Network Activities
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Scheduled activities across your network
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {[
            ["Youth Leadership Workshop", "Aug 12, 2026", "32 volunteers"],
            ["Community Outreach", "Aug 18, 2026", "24 volunteers"],
            ["Peer Education Session", "Aug 25, 2026", "18 volunteers"],
          ].map((activity, index) => (

            <div key={index} className="p-5">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <CalendarDays className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-gray-900">
                {activity[0]}
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                {activity[1]}
              </p>

              <p className="text-xs text-blue-600 font-semibold mt-1">
                {activity[2]}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default NetworkHome;