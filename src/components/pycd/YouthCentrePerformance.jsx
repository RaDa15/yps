import {
  Building2,
  Users,
  TrendingUp,
  FileCheck,
  AlertCircle,
} from "lucide-react";

const CENTRE_DATA = [
  {
    name: "Thimphu Youth Centre",
    dzongkhag: "Thimphu",
    youth: "4,120",
    programmes: 45,
    participation: "92%",
    reports: "Completed",
    performance: "Excellent",
  },
  {
    name: "Paro Youth Centre",
    dzongkhag: "Paro",
    youth: "3,450",
    programmes: 38,
    participation: "89%",
    reports: "Completed",
    performance: "Excellent",
  },
  {
    name: "Chukha Youth Centre",
    dzongkhag: "Chukha",
    youth: "2,890",
    programmes: 34,
    participation: "82%",
    reports: "Completed",
    performance: "Good",
  },
  {
    name: "Sarpang Youth Centre",
    dzongkhag: "Sarpang",
    youth: "1,950",
    programmes: 27,
    participation: "74%",
    reports: "Pending",
    performance: "Needs Attention",
  },
];

const YouthCentrePerformance = () => {
  return (
    <div className="space-y-6">

      {/* TITLE */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Youth Centre Performance
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Comparative performance monitoring across all Youth Centres
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Centres */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-xl bg-blue-50">
              <Building2 className="text-blue-600 w-5 h-5" />
            </div>

            <p className="text-sm text-gray-500">
              Total Centres
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-3 text-gray-900">
            13
          </h2>
        </div>

        {/* Youth Covered */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-xl bg-green-50">
              <Users className="text-green-600 w-5 h-5" />
            </div>

            <p className="text-sm text-gray-500">
              Youth Covered
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-3 text-gray-900">
            24,850
          </h2>
        </div>

        {/* Average Engagement */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-xl bg-purple-50">
              <TrendingUp className="text-purple-600 w-5 h-5" />
            </div>

            <p className="text-sm text-gray-500">
              Average Engagement
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-3 text-gray-900">
            84%
          </h2>
        </div>

        {/* Report Compliance */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-xl bg-orange-50">
              <FileCheck className="text-orange-600 w-5 h-5" />
            </div>

            <p className="text-sm text-gray-500">
              Report Compliance
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-3 text-gray-900">
            92%
          </h2>
        </div>
      </div>

      {/* CENTRE TABLE */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-blue-50">
            <Building2 className="text-blue-600 w-5 h-5" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Centre Performance Ranking
            </h3>

            <p className="text-xs text-gray-500 mt-0.5">
              Comparative performance across Youth Centres
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                <th className="text-left py-3 pr-4 font-medium">
                  Youth Centre
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Dzongkhag
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Youth
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Programmes
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Participation
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Report Status
                </th>

                <th className="text-left py-3 pl-3 font-medium">
                  Performance
                </th>
              </tr>
            </thead>

            <tbody>
              {CENTRE_DATA.map((centre) => (
                <tr
                  key={centre.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">
                    {centre.name}
                  </td>

                  <td className="px-3 text-gray-600">
                    {centre.dzongkhag}
                  </td>

                  <td className="px-3 text-gray-700">
                    {centre.youth}
                  </td>

                  <td className="px-3 text-gray-700">
                    {centre.programmes}
                  </td>

                  <td className="px-3">
                    <span className="font-bold text-green-600">
                      {centre.participation}
                    </span>
                  </td>

                  <td className="px-3">
                    <span
                      className={`
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        ${
                          centre.reports === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }
                      `}
                    >
                      {centre.reports}
                    </span>
                  </td>

                  <td className="pl-3">
                    <span
                      className={`font-bold ${
                        centre.performance === "Excellent"
                          ? "text-green-600"
                          : centre.performance === "Good"
                          ? "text-blue-600"
                          : "text-orange-600"
                      }`}
                    >
                      {centre.performance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* ALERT */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-3">

        <AlertCircle className="text-orange-600 w-5 h-5 shrink-0 mt-0.5" />

        <div>
          <h3 className="font-bold text-gray-900">
            Monitoring Attention
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Sarpang Youth Centre requires follow-up due to pending
            reports and lower engagement rate.
          </p>
        </div>

      </div>

    </div>
  );
};

export default YouthCentrePerformance;