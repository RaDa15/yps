import {
  Users,
  UserCheck,
  UserPlus,
  Clock3,
  CalendarDays,
  TrendingUp,
  MapPin,
  Activity,
  Award,
} from "lucide-react";

const NetworkOverview = () => {
  const statistics = [
    {
      title: "Total Volunteers",
      value: "86",
      change: "+8.4%",
      description: "Compared to last month",
      icon: Users,
    },
    {
      title: "Active Volunteers",
      value: "64",
      change: "+5.2%",
      description: "Currently active",
      icon: UserCheck,
    },
    {
      title: "Pending Applications",
      value: "12",
      change: "+3",
      description: "Awaiting review",
      icon: UserPlus,
    },
    {
      title: "Service Hours",
      value: "1,248",
      change: "+12.6%",
      description: "This year",
      icon: Clock3,
    },
  ];

  const volunteerStatus = [
    {
      label: "Active",
      value: 64,
      percentage: 74,
    },
    {
      label: "Inactive",
      value: 14,
      percentage: 16,
    },
    {
      label: "Pending",
      value: 8,
      percentage: 10,
    },
  ];

  const upcomingActivities = [
    {
      title: "Youth Leadership Workshop",
      date: "12 Aug 2026",
      location: "Thimphu",
      volunteers: 32,
      status: "Upcoming",
    },
    {
      title: "Community Outreach",
      date: "18 Aug 2026",
      location: "Changzamtog",
      volunteers: 24,
      status: "Upcoming",
    },
    {
      title: "Peer Education Session",
      date: "25 Aug 2026",
      location: "Motithang",
      volunteers: 18,
      status: "Upcoming",
    },
  ];

  const recentActivities = [
    {
      title: "New volunteer approved",
      user: "Sonam Wangchuk",
      time: "2 hours ago",
    },
    {
      title: "Service hours verified",
      user: "Karma Dorji",
      time: "5 hours ago",
    },
    {
      title: "Activity completed",
      user: "Community Outreach",
      time: "Yesterday",
    },
    {
      title: "Volunteer application submitted",
      user: "Pema Choden",
      time: "Yesterday",
    },
  ];

  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}
      <div>
        <p className="text-sm font-semibold text-blue-600">
          Network Management
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Network Overview
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Monitor volunteer engagement, activities and performance within your
          Y-PEER network.
        </p>
      </div>

      {/* NETWORK INFORMATION */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide font-bold text-gray-400">
                Assigned Network
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                Y-PEER Bhutan Network
              </h2>

              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                Bhutan
              </div>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              Active Network
            </span>

          </div>

        </div>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {statistics.map((stat) => {

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

                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stat.change}
                </div>

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

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* VOLUNTEER STATUS */}
        <div className="bg-white border border-gray-200 rounded-2xl">

          <div className="p-5 border-b border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Volunteer Status
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Current volunteer distribution
                </p>
              </div>

            </div>

          </div>

          <div className="p-5 space-y-5">

            {volunteerStatus.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {item.value}
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />

                </div>

                <p className="text-[11px] text-gray-400 mt-1">
                  {item.percentage}% of network volunteers
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* SERVICE HOURS */}
        <div className="bg-white border border-gray-200 rounded-2xl">

          <div className="p-5 border-b border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock3 className="w-5 h-5" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Service Hours
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Volunteer contribution this year
                </p>
              </div>

            </div>

          </div>

          <div className="p-5">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-4xl font-extrabold text-gray-900">
                  1,248
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Total verified hours
                </p>
              </div>

              <div className="text-right">

                <p className="text-sm font-bold text-emerald-600">
                  +12.6%
                </p>

                <p className="text-[11px] text-gray-400">
                  Year over year
                </p>

              </div>

            </div>

            {/* Simple monthly bars */}
            <div className="flex items-end gap-2 h-32 mt-8">

              {[42, 58, 48, 72, 65, 82, 70, 90, 76, 95, 84, 100].map(
                (height, index) => (

                  <div
                    key={index}
                    className="flex-1 bg-blue-100 rounded-t-lg relative group"
                  >

                    <div
                      className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                  </div>

                )
              )}

            </div>

            <div className="flex justify-between mt-2 text-[10px] text-gray-400">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>

          </div>

        </div>

      </div>

      {/* UPCOMING ACTIVITIES */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-5 border-b border-gray-100 flex items-center justify-between">

          <div>
            <h2 className="font-bold text-gray-900">
              Upcoming Activities
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Activities scheduled within your network
            </p>
          </div>

          <CalendarDays className="w-5 h-5 text-blue-600" />

        </div>

        <div className="divide-y divide-gray-100">

          {upcomingActivities.map((activity) => (

            <div
              key={activity.title}
              className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5" />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-gray-900">
                    {activity.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-500">

                    <span>
                      {activity.date}
                    </span>

                    <span>
                      {activity.location}
                    </span>

                    <span className="text-blue-600 font-semibold">
                      {activity.volunteers} volunteers
                    </span>

                  </div>

                </div>

              </div>

              <span className="w-fit px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                {activity.status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-5 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Recent Network Activity
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Latest actions performed within the network
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          {recentActivities.map((activity, index) => (

            <div
              key={index}
              className="p-5 flex items-center gap-4"
            >

              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Award className="w-4 h-4 text-gray-600" />
              </div>

              <div className="flex-1">

                <p className="text-sm font-semibold text-gray-900">
                  {activity.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {activity.user}
                </p>

              </div>

              <span className="text-xs text-gray-400">
                {activity.time}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default NetworkOverview;