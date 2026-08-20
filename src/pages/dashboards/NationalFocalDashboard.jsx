import {
  Network,
  Users,
  Clock3,
  Activity,
  TrendingUp,
  TrendingDown,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  UserPlus,
  Megaphone,
  ClipboardCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";


const NETWORK_DATA = [
  {
    name: "Thimphu Youth Led Group Network",
    location: "Thimphu",
    volunteers: 186,
    activities: 24,
    hours: "1,284",
    participation: "91%",
    status: "Active",
  },
  {
    name: "Paro Youth Led Group Network",
    location: "Paro",
    volunteers: 142,
    activities: 18,
    hours: "962",
    participation: "87%",
    status: "Active",
  },
  {
    name: "Punakha Youth Led Group Network",
    location: "Punakha",
    volunteers: 118,
    activities: 15,
    hours: "746",
    participation: "83%",
    status: "Active",
  },
  {
    name: "Phuentsholing Youth Led Group Network",
    location: "Chukha",
    volunteers: 96,
    activities: 12,
    hours: "618",
    participation: "79%",
    status: "Active",
  },
];


const UPCOMING_ACTIVITIES = [
  {
    title: "National Youth Leadership Workshop",
    network: "All Youth Led Group Networks",
    date: "12 Aug 2026",
    participants: 85,
    type: "National",
  },
  {
    title: "Peer Education Training",
    network: "Thimphu Youth Led Group",
    date: "15 Aug 2026",
    participants: 42,
    type: "Training",
  },
  {
    title: "Community Health Awareness",
    network: "Paro Youth Led Group",
    date: "18 Aug 2026",
    participants: 60,
    type: "Outreach",
  },
];


const NationalFocalDashboard = () => {
  return (
    <div className="space-y-6">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-teal-600 text-sm font-medium">
            <MapPin size={15} />
            National Youth Led Group Network
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            National Focal Point Dashboard
          </h1>

          <p className="text-sm text-gray-500 mt-1 max-w-2xl">
            National oversight and coordination of Y-PEER networks,
            volunteer activities and network-level programmes.
          </p>

        </div>


        <div className="flex items-center gap-3">

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
              font-semibold
              flex
              items-center
              gap-2
              hover:bg-gray-50
              transition
            "
          >
            <FileText size={16} />

            Network Reports
          </button>


          <button
            className="
              px-4
              py-2.5
              rounded-xl
              bg-teal-600
              text-white
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              hover:bg-teal-700
              shadow-sm
              shadow-teal-500/20
              transition
            "
          >
            <Megaphone size={16} />

            National Activity
          </button>

        </div>

      </div>


      {/* =========================================
          KPI CARDS
      ========================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Networks */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-teal-50
                text-teal-600
                flex
                items-center
                justify-center
              "
            >
              <Network size={21} />
            </div>

            <span
              className="
                flex
                items-center
                gap-1
                text-xs
                font-bold
                text-emerald-600
              "
            >
              <TrendingUp size={14} />
              +2
            </span>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            Active Youth Led Group Networks
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            13
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Across Bhutan
          </p>

        </div>


        {/* Volunteers */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <Users size={21} />
            </div>

            <span
              className="
                flex
                items-center
                gap-1
                text-xs
                font-bold
                text-emerald-600
              "
            >
              <TrendingUp size={14} />
              +7.4%
            </span>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            Total Volunteers
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            1,126
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Across all networks
          </p>

        </div>


        {/* Volunteer Hours */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-violet-50
                text-violet-600
                flex
                items-center
                justify-center
              "
            >
              <Clock3 size={21} />
            </div>

            <span
              className="
                flex
                items-center
                gap-1
                text-xs
                font-bold
                text-emerald-600
              "
            >
              <TrendingUp size={14} />
              +11.2%
            </span>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            Cumulative Volunteer Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            8,742
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            This programme year
          </p>

        </div>


        {/* Activities */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-amber-50
                text-amber-600
                flex
                items-center
                justify-center
              "
            >
              <Activity size={21} />
            </div>

            <span
              className="
                flex
                items-center
                gap-1
                text-xs
                font-bold
                text-emerald-600
              "
            >
              <TrendingUp size={14} />
              +14.8%
            </span>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            Network Activities
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            69
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Active this month
          </p>

        </div>

      </div>


      {/* =========================================
          QUICK ACTIONS
      ========================================= */}

      <div>

        <div className="flex items-center justify-between mb-3">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Quick Actions
            </h2>

            <p className="text-xs text-gray-500">
              Frequently used national coordination functions
            </p>
          </div>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          <button
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-4
              text-left
              hover:border-teal-300
              hover:bg-teal-50/40
              transition
            "
          >

            <UserPlus className="text-teal-600" size={20} />

            <p className="font-semibold text-sm text-gray-900 mt-3">
              Manage Focal Points
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Network coordinators
            </p>

          </button>


          <button
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-4
              text-left
              hover:border-teal-300
              hover:bg-teal-50/40
              transition
            "
          >

            <Megaphone className="text-blue-600" size={20} />

            <p className="font-semibold text-sm text-gray-900 mt-3">
              Broadcast Message
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Notify networks
            </p>

          </button>


          <button
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-4
              text-left
              hover:border-teal-300
              hover:bg-teal-50/40
              transition
            "
          >

            <ClipboardCheck className="text-violet-600" size={20} />

            <p className="font-semibold text-sm text-gray-900 mt-3">
              Review Activities
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Pending approvals
            </p>

          </button>


          <button
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-4
              text-left
              hover:border-teal-300
              hover:bg-teal-50/40
              transition
            "
          >

            <FileText className="text-amber-600" size={20} />

            <p className="font-semibold text-sm text-gray-900 mt-3">
              Generate Report
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Network reporting
            </p>

          </button>

        </div>

      </div>


      {/* =========================================
          NETWORK PERFORMANCE
      ========================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 flex items-center justify-between">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Youth Led Group Network Performance
            </h2>

            <p className="text-sm text-gray-500">
              Comparative overview of active networks
            </p>

          </div>


          <button
            className="
              text-teal-600
              text-sm
              font-semibold
              flex
              items-center
              gap-1
              hover:text-teal-700
            "
          >
            View All

            <ArrowUpRight size={15} />
          </button>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[760px]">

            <thead>

              <tr className="border-t border-b border-gray-100 text-xs text-gray-400">

                <th className="text-left font-medium px-6 py-3">
                  Network
                </th>

                <th className="text-left font-medium px-4 py-3">
                  Volunteers
                </th>

                <th className="text-left font-medium px-4 py-3">
                  Activities
                </th>

                <th className="text-left font-medium px-4 py-3">
                  Volunteer Hours
                </th>

                <th className="text-left font-medium px-4 py-3">
                  Participation
                </th>

                <th className="text-left font-medium px-4 py-3">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {NETWORK_DATA.map((network) => (

                <tr
                  key={network.name}
                  className="
                    border-b
                    border-gray-100
                    last:border-0
                    hover:bg-gray-50
                    transition
                  "
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-9
                          h-9
                          rounded-xl
                          bg-teal-50
                          text-teal-600
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Network size={17} />
                      </div>


                      <div>

                        <p className="text-sm font-semibold text-gray-900">
                          {network.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {network.location}
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="px-4 py-4 text-sm text-gray-700">
                    {network.volunteers}
                  </td>


                  <td className="px-4 py-4 text-sm text-gray-700">
                    {network.activities}
                  </td>


                  <td className="px-4 py-4 text-sm text-gray-700">
                    {network.hours}
                  </td>


                  <td className="px-4 py-4">

                    <span className="text-sm font-semibold text-gray-800">
                      {network.participation}
                    </span>

                  </td>


                  <td className="px-4 py-4">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1
                        rounded-full
                        bg-emerald-50
                        text-emerald-700
                        text-xs
                        font-semibold
                      "
                    >

                      <CheckCircle2 size={13} />

                      {network.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =========================================
          BOTTOM SECTION
      ========================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Upcoming Activities */}

        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-lg font-bold text-gray-900">
                Upcoming Network Activities
              </h2>

              <p className="text-sm text-gray-500">
                Scheduled Youth Led Group activities
              </p>

            </div>


            <CalendarDays
              size={20}
              className="text-teal-600"
            />

          </div>


          <div className="space-y-3">

            {UPCOMING_ACTIVITIES.map((activity) => (

              <div
                key={activity.title}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-4
                  rounded-xl
                  bg-gray-50
                  border
                  border-gray-100
                "
              >

                <div className="flex items-center gap-3 min-w-0">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-teal-50
                      text-teal-600
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    <CalendarDays size={18} />
                  </div>


                  <div className="min-w-0">

                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {activity.title}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {activity.network} • {activity.participants} participants
                    </p>

                  </div>

                </div>


                <div className="text-right flex-shrink-0">

                  <p className="text-xs font-semibold text-gray-700">
                    {activity.date}
                  </p>

                  <span
                    className="
                      inline-block
                      mt-1
                      text-[10px]
                      font-bold
                      px-2
                      py-0.5
                      rounded-full
                      bg-blue-50
                      text-blue-700
                    "
                  >
                    {activity.type}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Attention */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-2 mb-5">

            <AlertTriangle
              size={19}
              className="text-amber-500"
            />

            <div>

              <h2 className="text-lg font-bold text-gray-900">
                Attention Required
              </h2>

              <p className="text-xs text-gray-500">
                Items requiring national review
              </p>

            </div>

          </div>


          <div className="space-y-3">

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">

              <p className="text-sm font-semibold text-gray-800">
                6 Activities Pending
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Network activities require approval.
              </p>

            </div>


            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">

              <p className="text-sm font-semibold text-gray-800">
                12 Volunteer Reviews
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Volunteer records need verification.
              </p>

            </div>


            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">

              <p className="text-sm font-semibold text-gray-800">
                4 Reports Submitted
              </p>

              <p className="text-xs text-gray-500 mt-1">
                New monthly reports are available.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          FOOTER STATUS
      ========================================= */}

      <div
        className="
          bg-teal-50
          border
          border-teal-100
          rounded-2xl
          p-4
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            w-9
            h-9
            rounded-xl
            bg-teal-600
            text-white
            flex
            items-center
            justify-center
            flex-shrink-0
          "
        >
          <CheckCircle2 size={18} />
        </div>


        <div>

          <p className="text-sm font-semibold text-gray-900">
            National network data is up to date
          </p>

          <p className="text-xs text-gray-500">
            Last synchronization completed successfully.
          </p>

        </div>

      </div>

    </div>
  );
};


export default NationalFocalDashboard;