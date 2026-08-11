import {
  CalendarCheck,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
} from "lucide-react";

const PROGRAMME_DATA = [
  {
    name: "Youth Leadership Development",
    category: "Leadership",
    participants: "4,850",
    completion: "92%",
    impact: "High",
    status: "Completed",
  },
  {
    name: "Digital Skills Training",
    category: "ICT Skills",
    participants: "3,920",
    completion: "86%",
    impact: "High",
    status: "Ongoing",
  },
  {
    name: "Volunteer Service Programme",
    category: "Community Service",
    participants: "5,430",
    completion: "78%",
    impact: "Medium",
    status: "Ongoing",
  },
  {
    name: "Career Guidance Initiative",
    category: "Employment",
    participants: "2,760",
    completion: "70%",
    impact: "Medium",
    status: "Review",
  },
];

const PARTICIPATION_DATA = [
  ["Jan", "2,300"],
  ["Feb", "3,100"],
  ["Mar", "3,850"],
  ["Apr", "4,200"],
  ["May", "5,470"],
];

const ProgrammeAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Programme Analytics & Impact Assessment
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          National programme performance, participation trends and outcome
          monitoring
        </p>
      </div>

      {/* SUMMARY KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Programmes */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50">
              <CalendarCheck className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Programmes
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                328
              </h3>
            </div>
          </div>
        </div>

        {/* Youth Participants */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-green-50">
              <Users className="w-5 h-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Youth Participants
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                18,920
              </h3>
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Average Completion
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                82%
              </h3>
            </div>
          </div>
        </div>

        {/* Successful Outcomes */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50">
              <Award className="w-5 h-5 text-orange-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Successful Outcomes
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                145
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* PARTICIPATION TREND */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h3 className="font-bold text-gray-900">
              National Participation Trend
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Monthly youth participation across national programmes
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
            <TrendingUp className="w-4 h-4" />
            +18.4%
          </div>

        </div>

        {/* TREND BARS */}
        <div className="space-y-4">

          {PARTICIPATION_DATA.map(([month, value]) => {
            const percentage =
              (Number(value.replace(",", "")) / 5500) * 100;

            return (
              <div
                key={month}
                className="grid grid-cols-[45px_1fr_70px] items-center gap-4"
              >

                <span className="text-sm font-medium text-gray-500">
                  {month}
                </span>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <span className="text-sm font-semibold text-gray-700 text-right">
                  {value}
                </span>

              </div>
            );
          })}

        </div>
      </div>

      {/* PROGRAMME TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-xl bg-blue-50">
            <CalendarCheck className="w-5 h-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Programme Effectiveness Overview
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Performance indicators across major youth programmes
            </p>
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-gray-200 text-gray-500">

                <th className="text-left py-3 pr-4 font-medium">
                  Programme
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Category
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Participants
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Completion
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Impact
                </th>

                <th className="text-left py-3 pl-3 font-medium">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {PROGRAMME_DATA.map((item) => (
                <tr
                  key={item.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >

                  {/* Programme */}
                  <td className="py-4 pr-4">

                    <div className="font-semibold text-gray-900">
                      {item.name}
                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-3 text-gray-600">
                    {item.category}
                  </td>

                  {/* Participants */}
                  <td className="px-3 font-medium text-gray-700">
                    {item.participants}
                  </td>

                  {/* Completion */}
                  <td className="px-3">

                    <div className="flex items-center gap-3">

                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">

                        <div
                          className={`h-full rounded-full ${
                            Number(item.completion.replace("%", "")) >= 85
                              ? "bg-green-500"
                              : Number(
                                  item.completion.replace("%", "")
                                ) >= 75
                              ? "bg-blue-500"
                              : "bg-orange-500"
                          }`}
                          style={{
                            width: item.completion,
                          }}
                        />

                      </div>

                      <span className="font-semibold text-gray-700">
                        {item.completion}
                      </span>

                    </div>

                  </td>

                  {/* Impact */}
                  <td className="px-3">

                    <span
                      className={`font-semibold ${
                        item.impact === "High"
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      {item.impact}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="pl-3">

                    <span
                      className={`
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Ongoing"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* IMPACT SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Successful Outcomes */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-white">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>

            <h3 className="font-bold text-gray-900">
              Successful Outcomes
            </h3>

          </div>

          <p className="text-sm text-gray-600 mt-3">
            Youth transitioned into education, employment and vocational
            pathways.
          </p>

        </div>

        {/* Ongoing Monitoring */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-white">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>

            <h3 className="font-bold text-gray-900">
              Ongoing Monitoring
            </h3>

          </div>

          <p className="text-sm text-gray-600 mt-3">
            Programmes requiring progress review and reporting updates.
          </p>

        </div>

        {/* Impact Assessment */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-white">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>

            <h3 className="font-bold text-gray-900">
              Impact Assessment
            </h3>

          </div>

          <p className="text-sm text-gray-600 mt-3">
            Measure programme effectiveness against youth development
            goals.
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProgrammeAnalytics;