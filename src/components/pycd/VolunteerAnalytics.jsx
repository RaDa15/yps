import {
  HeartHandshake,
  Users,
  Clock3,
  TrendingUp,
  Award,
  MapPin,
} from "lucide-react";

const VOLUNTEER_DATA = [
  {
    centre: "Thimphu Youth Centre",
    volunteers: "820",
    hours: "18,450",
    activities: "145",
    growth: "+15%",
  },
  {
    centre: "Paro Youth Centre",
    volunteers: "540",
    hours: "12,300",
    activities: "98",
    growth: "+12%",
  },
  {
    centre: "Chukha Youth Centre",
    volunteers: "430",
    hours: "9,850",
    activities: "76",
    growth: "+10%",
  },
  {
    centre: "Sarpang Youth Centre",
    volunteers: "310",
    hours: "6,420",
    activities: "54",
    growth: "+8%",
  },
];

const SERVICE_TREND = [
  ["Jan", "9k"],
  ["Feb", "12k"],
  ["Mar", "14k"],
  ["Apr", "17k"],
  ["May", "19k"],
  ["Jun", "22k"],
];

const VolunteerAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Volunteer Analytics & Impact
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          National volunteer participation, contribution hours and service
          impact monitoring
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Active Volunteers */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-purple-50">
              <HeartHandshake className="w-5 h-5 text-purple-600" />
            </div>

            <p className="text-sm text-gray-500">
              Active Volunteers
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            3,840
          </h2>

          <p className="text-xs text-green-600 font-semibold mt-1">
            +14% from last period
          </p>
        </div>

        {/* Service Hours */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-blue-50">
              <Clock3 className="w-5 h-5 text-blue-600" />
            </div>

            <p className="text-sm text-gray-500">
              Service Hours
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            86,420
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Total volunteer contribution
          </p>
        </div>

        {/* Volunteer Groups */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-green-50">
              <Users className="w-5 h-5 text-green-600" />
            </div>

            <p className="text-sm text-gray-500">
              Volunteer Groups
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            245
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Active groups nationwide
          </p>
        </div>

        {/* Growth Rate */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-orange-50">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>

            <p className="text-sm text-gray-500">
              Growth Rate
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            +14%
          </h2>

          <p className="text-xs text-green-600 font-semibold mt-1">
            Volunteer participation growth
          </p>
        </div>

      </div>

      {/* SERVICE TREND */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-blue-50">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Volunteer Service Trend
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Monthly volunteer service contribution
              </p>
            </div>

          </div>

          <span className="hidden sm:block text-xs font-semibold text-green-600">
            +24% growth
          </span>

        </div>

        {/* TREND */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

          {SERVICE_TREND.map(([month, value]) => (
            <div
              key={month}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"
            >

              <p className="text-sm text-gray-500">
                {month}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-2">
                {value}
              </h3>

              <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{
                    width: `${Math.min(
                      (parseInt(value) / 22) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* CENTRE PERFORMANCE TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-xl bg-red-50">
            <MapPin className="w-5 h-5 text-red-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Volunteer Contribution by Youth Centre
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Volunteer participation and service contribution across centres
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
                  Volunteers
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Service Hours
                </th>

                <th className="text-left py-3 px-3 font-medium">
                  Activities
                </th>

                <th className="text-left py-3 pl-3 font-medium">
                  Growth
                </th>

              </tr>
            </thead>

            <tbody>

              {VOLUNTEER_DATA.map((item) => (
                <tr
                  key={item.centre}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >

                  <td className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">
                    {item.centre}
                  </td>

                  <td className="px-3 text-gray-700">
                    {item.volunteers}
                  </td>

                  <td className="px-3 text-gray-700">
                    {item.hours}
                  </td>

                  <td className="px-3 text-gray-700">
                    {item.activities}
                  </td>

                  <td className="pl-3">
                    <span className="inline-flex items-center gap-1 text-green-600 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.growth}
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

        {/* Top Contribution */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
            <Award className="w-5 h-5 text-purple-600" />
          </div>

          <h3 className="font-bold text-gray-900 mt-3">
            Top Contribution Area
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Community service and youth mentoring activities contribute the
            highest volunteer hours.
          </p>

        </div>

        {/* Average Service */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
            <Clock3 className="w-5 h-5 text-blue-600" />
          </div>

          <h3 className="font-bold text-gray-900 mt-3">
            Average Service
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Average volunteer contribution is{" "}
            <span className="font-semibold text-gray-900">
              22 hours
            </span>{" "}
            per active volunteer.
          </p>

        </div>

        {/* Volunteer Impact */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
            <HeartHandshake className="w-5 h-5 text-green-600" />
          </div>

          <h3 className="font-bold text-gray-900 mt-3">
            Volunteer Impact
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Volunteer activities continue to support youth development
            outcomes across the country.
          </p>

        </div>

      </div>

    </div>
  );
};

export default VolunteerAnalytics;