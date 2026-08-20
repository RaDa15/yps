import { useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  UserPlus,
  Clock3,
  TrendingUp,
  TrendingDown,
  Search,
  MapPin,
  Award,
  Activity,
} from "lucide-react";

const volunteerData = [
  {
    id: 1,
    name: "Sonam Wangchuk",
    network: "Youth Led Group Thimphu",
    location: "Thimphu",
    status: "Active",
    activities: 18,
    hours: 126,
    joined: "2025-02-15",
    achievements: 6,
  },
  {
    id: 2,
    name: "Karma Choden",
    network: "Youth Led Group Paro",
    location: "Paro",
    status: "Active",
    activities: 14,
    hours: 98,
    joined: "2025-05-10",
    achievements: 4,
  },
  {
    id: 3,
    name: "Tshering Dorji",
    network: "Youth Led Group Punakha",
    location: "Punakha",
    status: "Active",
    activities: 21,
    hours: 154,
    joined: "2024-11-03",
    achievements: 8,
  },
  {
    id: 4,
    name: "Pema Lhamo",
    network: "Youth Led Group Chukha",
    location: "Chukha",
    status: "Inactive",
    activities: 5,
    hours: 32,
    joined: "2025-08-20",
    achievements: 1,
  },
  {
    id: 5,
    name: "Ugyen Tashi",
    network: "Youth Led Group Wangdue",
    location: "Wangdue",
    status: "Active",
    activities: 17,
    hours: 119,
    joined: "2025-01-12",
    achievements: 5,
  },
  {
    id: 6,
    name: "Dechen Yangzom",
    network: "Youth Led Group Mongar",
    location: "Mongar",
    status: "Active",
    activities: 12,
    hours: 86,
    joined: "2025-06-18",
    achievements: 3,
  },
  {
    id: 7,
    name: "Jigme Namgyal",
    network: "Youth Led Group Samtse",
    location: "Samtse",
    status: "Active",
    activities: 16,
    hours: 110,
    joined: "2025-03-22",
    achievements: 4,
  },
];

const networkData = [
  {
    network: "Thimphu",
    volunteers: 148,
    active: 121,
    hours: 1284,
    retention: 87,
  },
  {
    network: "Paro",
    volunteers: 112,
    active: 94,
    hours: 986,
    retention: 84,
  },
  {
    network: "Punakha",
    volunteers: 96,
    active: 82,
    hours: 812,
    retention: 86,
  },
  {
    network: "Chukha",
    volunteers: 88,
    active: 69,
    hours: 721,
    retention: 78,
  },
  {
    network: "Wangdue",
    volunteers: 74,
    active: 63,
    hours: 604,
    retention: 81,
  },
  {
    network: "Mongar",
    volunteers: 63,
    active: 51,
    hours: 492,
    retention: 79,
  },
];

const VolunteerAnalytics = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredVolunteers = useMemo(() => {
    return volunteerData.filter((volunteer) => {
      const matchesSearch =
        volunteer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        volunteer.network
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        volunteer.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        volunteer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const totalVolunteers = 581;
  const activeVolunteers = 480;
  const totalHours = 4899;
  const avgHours = Math.round(totalHours / totalVolunteers);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>

        <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
          <Users size={17} />
          National Volunteer Analytics
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Volunteer Analytics
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Monitor volunteer participation, retention and contribution
          across all Youth Led Group networks.
        </p>

      </div>


      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <AnalyticsCard
          title="Total Volunteers"
          value={totalVolunteers}
          change="+8.4%"
          positive
          icon={Users}
          iconClass="bg-blue-50 text-blue-600"
        />

        <AnalyticsCard
          title="Active Volunteers"
          value={activeVolunteers}
          change="+6.2%"
          positive
          icon={UserCheck}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <AnalyticsCard
          title="Volunteer Hours"
          value={`${totalHours.toLocaleString()}h`}
          change="+12.8%"
          positive
          icon={Clock3}
          iconClass="bg-violet-50 text-violet-600"
        />

        <AnalyticsCard
          title="Avg. Hours / Volunteer"
          value={`${avgHours}h`}
          change="-1.3%"
          positive={false}
          icon={Activity}
          iconClass="bg-amber-50 text-amber-600"
        />

      </div>


      {/* TREND SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="font-bold text-gray-900">
                Volunteer Engagement Trend
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Monthly active volunteer participation
              </p>

            </div>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
              +8.4% YoY
            </span>

          </div>


          {/* SIMPLE BAR CHART */}
          <div className="h-64 flex items-end gap-3 sm:gap-5">

            {[
              ["Jan", 55],
              ["Feb", 62],
              ["Mar", 58],
              ["Apr", 71],
              ["May", 67],
              ["Jun", 78],
              ["Jul", 84],
              ["Aug", 91],
            ].map(([month, value]) => (

              <div
                key={month}
                className="flex-1 h-full flex flex-col justify-end items-center gap-2"
              >

                <span className="text-[10px] font-semibold text-gray-500">
                  {value}%
                </span>

                <div
                  className="w-full max-w-[42px] bg-blue-600 rounded-t-lg transition hover:bg-blue-700"
                  style={{
                    height: `${value * 2.1}px`,
                  }}
                />

                <span className="text-[10px] text-gray-400">
                  {month}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* RETENTION */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Volunteer Retention
              </h2>

              <p className="text-xs text-gray-500">
                National network retention
              </p>

            </div>

          </div>


          <div className="text-4xl font-bold text-gray-900">
            82%
          </div>

          <p className="text-xs text-emerald-600 font-semibold mt-2">
            ↑ 4.6% compared with last year
          </p>


          <div className="mt-6 space-y-4">

            {networkData.slice(0, 5).map((network) => (

              <div key={network.network}>

                <div className="flex justify-between mb-1">

                  <span className="text-xs font-medium text-gray-600">
                    {network.network}
                  </span>

                  <span className="text-xs font-bold text-gray-800">
                    {network.retention}%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">

                  <div
                    className="h-full bg-teal-500 rounded-full"
                    style={{
                      width: `${network.retention}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* NETWORK PERFORMANCE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Network Volunteer Performance
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Compare volunteer participation across Y-PEER networks.
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>

              <tr className="bg-gray-50 border-b border-gray-200">

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Network
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Volunteers
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Active
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Volunteer Hours
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Retention
                </th>

              </tr>

            </thead>


            <tbody>

              {networkData.map((network) => (

                <tr
                  key={network.network}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <MapPin
                        size={15}
                        className="text-teal-500"
                      />

                      <span className="text-sm font-semibold text-gray-900">
                        Youth Led Group {network.network}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {network.volunteers}
                  </td>

                  <td className="px-6 py-4">

                    <span className="text-sm font-semibold text-emerald-600">
                      {network.active}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {network.hours.toLocaleString()} hrs
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-teal-500 rounded-full"
                          style={{
                            width: `${network.retention}%`,
                          }}
                        />

                      </div>

                      <span className="text-xs font-bold text-gray-700">
                        {network.retention}%
                      </span>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* VOLUNTEER DIRECTORY */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Volunteer Contribution Overview
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            View approved volunteers and their national contribution.
          </p>

        </div>


        {/* FILTER */}
        <div className="p-4 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-3">

          <div className="relative">

            <Search
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search volunteers..."
              className="
                w-full
                pl-9
                pr-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                text-sm
                outline-none
                focus:ring-2
                focus:ring-teal-500
              "
            />

          </div>


          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              outline-none
            "
          >

            <option value="All">
              All Volunteers
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>

              <tr className="bg-gray-50 border-b border-gray-200">

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Volunteer
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Network
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Activities
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Hours
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Achievements
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredVolunteers.map((volunteer) => (

                <tr
                  key={volunteer.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                        {getInitials(volunteer.name)}
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-gray-900">
                          {volunteer.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          Joined {volunteer.joined}
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="px-6 py-4">

                    <div className="flex items-center gap-1.5 text-sm text-gray-700">

                      <MapPin
                        size={14}
                        className="text-gray-400"
                      />

                      {volunteer.network}

                    </div>

                  </td>


                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {volunteer.activities}
                  </td>


                  <td className="px-6 py-4 text-sm text-gray-700">
                    {volunteer.hours} hrs
                  </td>


                  <td className="px-6 py-4">

                    <div className="flex items-center gap-1.5">

                      <Award
                        size={15}
                        className="text-amber-500"
                      />

                      <span className="text-sm font-semibold text-gray-800">
                        {volunteer.achievements}
                      </span>

                    </div>

                  </td>


                  <td className="px-6 py-4">

                    <span
                      className={`
                        px-2.5
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        border
                        ${
                          volunteer.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-gray-50 text-gray-500 border-gray-200"
                        }
                      `}
                    >
                      {volunteer.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {filteredVolunteers.length === 0 && (
          <div className="py-10 text-center text-sm text-gray-400">
            No volunteers found.
          </div>
        )}

      </div>


      {/* QUICK INSIGHT */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
            <Award size={21} />
          </div>

          <div>

            <h3 className="font-bold">
              National Volunteer Insight
            </h3>

            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Volunteer participation is trending upward across
              the Youth Led Group network. Active volunteers currently
              contribute approximately {avgHours} hours per volunteer.
              Network retention is strongest in Thimphu and Punakha.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   ANALYTICS CARD
========================================================= */

const AnalyticsCard = ({
  title,
  value,
  change,
  positive,
  icon: Icon,
  iconClass,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold text-gray-500">
            {title}
          </p>

          <p className="text-2xl font-bold text-gray-900 mt-2">
            {value}
          </p>

        </div>

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconClass}`}
        >
          <Icon size={20} />
        </div>

      </div>


      <div className="flex items-center gap-1 mt-3">

        {positive ? (
          <TrendingUp
            size={14}
            className="text-emerald-500"
          />
        ) : (
          <TrendingDown
            size={14}
            className="text-red-500"
          />
        )}

        <span
          className={`text-xs font-semibold ${
            positive
              ? "text-emerald-600"
              : "text-red-600"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-gray-400">
          vs last year
        </span>

      </div>

    </div>
  );
};


/* =========================================================
   HELPERS
========================================================= */

const getInitials = (name) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

export default VolunteerAnalytics;
