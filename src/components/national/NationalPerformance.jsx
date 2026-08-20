import {
  TrendingUp,
  Users,
  Activity,
  Clock,
  Award,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const NETWORK_DATA = [
  {
    name: "Thimphu Youth Led Group Network",
    volunteers: 248,
    activities: 32,
    hours: 1840,
    participation: "91%",
    achievements: 86,
    trend: "+12.4%",
    status: "Excellent",
  },
  {
    name: "Chukha Youth Led Group Network",
    volunteers: 186,
    activities: 24,
    hours: 1260,
    participation: "84%",
    achievements: 64,
    trend: "+8.7%",
    status: "Good",
  },
  {
    name: "Punakha Youth Led Group Network",
    volunteers: 154,
    activities: 21,
    hours: 980,
    participation: "79%",
    achievements: 52,
    trend: "+5.2%",
    status: "Good",
  },
  {
    name: "Paro Youth Led Group Network",
    volunteers: 132,
    activities: 18,
    hours: 840,
    participation: "74%",
    achievements: 43,
    trend: "-2.1%",
    status: "Needs Attention",
  },
];

const NetworkPerformance = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <TrendingUp size={16} />
          Network Performance
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Network Performance
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Monitor and compare Youth Led Group network performance across Bhutan.
        </p>
      </div>


      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Users size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Total Volunteers
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            1,126
          </h2>

          <p className="text-xs text-emerald-600 font-semibold mt-2">
            +8.4% from last year
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
            <Activity size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Network Activities
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            148
          </h2>

          <p className="text-xs text-emerald-600 font-semibold mt-2">
            +14.2% this year
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Clock size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Volunteer Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            7,420
          </h2>

          <p className="text-xs text-emerald-600 font-semibold mt-2">
            +11.6% from last year
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Award size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Average Participation
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            82.4%
          </h2>

          <p className="text-xs text-emerald-600 font-semibold mt-2">
            +4.8% from last month
          </p>
        </div>

      </div>


      {/* PERFORMANCE TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Network Performance Comparison
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Compare volunteer engagement and activity performance.
          </p>
        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-gray-100 text-gray-500">

                <th className="text-left px-6 py-4 font-medium">
                  Network
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Volunteers
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Activities
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Hours
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Participation
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Achievements
                </th>

                <th className="text-center px-4 py-4 font-medium">
                  Trend
                </th>

                <th className="text-center px-6 py-4 font-medium">
                  Status
                </th>

              </tr>
            </thead>


            <tbody>

              {NETWORK_DATA.map((network) => {

                const positive = network.trend.startsWith("+");

                return (
                  <tr
                    key={network.name}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Users size={17} />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            {network.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            Youth Led Group Network
                          </p>
                        </div>

                      </div>

                    </td>


                    <td className="text-center font-medium text-gray-700">
                      {network.volunteers}
                    </td>


                    <td className="text-center text-gray-700">
                      {network.activities}
                    </td>


                    <td className="text-center text-gray-700">
                      {network.hours.toLocaleString()}
                    </td>


                    <td className="text-center font-semibold text-gray-800">
                      {network.participation}
                    </td>


                    <td className="text-center font-semibold text-gray-800">
                      {network.achievements}
                    </td>


                    <td className="text-center">

                      <span
                        className={`inline-flex items-center gap-1 text-xs font-bold ${
                          positive
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >

                        {positive ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}

                        {network.trend}

                      </span>

                    </td>


                    <td className="text-center px-6">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          network.status === "Excellent"
                            ? "bg-emerald-50 text-emerald-700"
                            : network.status === "Good"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {network.status}
                      </span>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>


      {/* PERFORMANCE INSIGHT */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

        <div className="flex gap-4">

          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <TrendingUp size={20} />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              Network Performance Insight
            </h3>

            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Thimphu Youth Led Group Network currently leads in volunteer
              participation, activity engagement and contribution hours.
              Paro Youth Led Group Network shows a decline in participation and
              may require additional coordination or engagement support.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NetworkPerformance;
