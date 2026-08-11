import {
  Users,
  GraduationCap,
  MapPin,
  TrendingUp,
  UserRoundCheck,
  UserCheck,
  Activity,
  Target,
  Filter,
  RotateCcw,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";

const AGE_DATA = [
  {
    label: "10 - 14 Years",
    value: 18,
    color: "bg-blue-500",
  },
  {
    label: "15 - 19 Years",
    value: 42,
    color: "bg-purple-500",
  },
  {
    label: "20 - 24 Years",
    value: 40,
    color: "bg-emerald-500",
  },
];

const EDUCATION_DATA = [
  {
    label: "School",
    value: 72,
    color: "bg-blue-500",
  },
  {
    label: "College",
    value: 18,
    color: "bg-purple-500",
  },
  {
    label: "Vocational Training",
    value: 10,
    color: "bg-orange-500",
  },
];

const DZONGKHAG_DATA = [
  {
    name: "Thimphu",
    value: 92,
    youth: "4,120",
    status: "High",
  },
  {
    name: "Paro",
    value: 89,
    youth: "3,450",
    status: "High",
  },
  {
    name: "Chukha",
    value: 82,
    youth: "2,890",
    status: "Medium",
  },
  {
    name: "Sarpang",
    value: 74,
    youth: "1,950",
    status: "Needs Attention",
  },
];

const YouthAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Youth Analytics
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                National youth demographic analysis and engagement trends
              </p>

            </div>

          </div>

        </div>

        <div className="text-xs text-gray-500">
          Last updated: Today, 10:30 AM
        </div>

      </div>


      {/* =====================================================
          KPI CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* Total Youth */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight className="w-3.5 h-3.5" />
              8.4%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Total Youth
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            24,850
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Registered nationwide
          </p>

        </div>


        {/* Active Youth */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-emerald-600">
              76%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Active Youth
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            18,920
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Participating in programmes
          </p>

        </div>


        {/* Engagement */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight className="w-3.5 h-3.5" />
              5.2%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Engagement Rate
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            84%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            National participation rate
          </p>

        </div>


        {/* Coverage */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-blue-600">
              13 / 13
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Centre Coverage
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            100%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Youth Centres reporting
          </p>

        </div>

      </div>


      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col lg:flex-row lg:items-center gap-3">

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">

            <Filter className="w-4 h-4 text-blue-600" />

            Filters

          </div>


          <select className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>2026</option>
            <option>2025</option>
            <option>2024</option>

          </select>


          <select className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>All Dzongkhag</option>
            <option>Thimphu</option>
            <option>Paro</option>
            <option>Chukha</option>
            <option>Sarpang</option>

          </select>


          <select className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>All Youth Centres</option>

          </select>


          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>

        </div>

      </div>


      {/* =====================================================
          AGE + GENDER
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* AGE DISTRIBUTION */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Age Distribution
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Registered youth by age group
                </p>

              </div>

            </div>

            <span className="text-xs text-gray-400">
              2026
            </span>

          </div>


          <div className="space-y-5">

            {AGE_DATA.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between items-center mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {item.value}%
                  </span>

                </div>

                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{
                      width: `${item.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* GENDER */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <UserRoundCheck className="w-5 h-5" />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                Gender Distribution
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Registered youth demographic breakdown
              </p>

            </div>

          </div>


          <div className="grid grid-cols-2 gap-4">

            <div className="bg-blue-50 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  Male
                </span>

                <span className="w-2 h-2 rounded-full bg-blue-500" />

              </div>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                52%
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Approx. 12,922 youth
              </p>

            </div>


            <div className="bg-pink-50 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  Female
                </span>

                <span className="w-2 h-2 rounded-full bg-pink-500" />

              </div>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                48%
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Approx. 11,928 youth
              </p>

            </div>

          </div>


          <div className="mt-5 h-3 rounded-full overflow-hidden flex">

            <div
              className="bg-blue-500"
              style={{ width: "52%" }}
            />

            <div
              className="bg-pink-400"
              style={{ width: "48%" }}
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          EDUCATION + STATUS
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* EDUCATION */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                Education Level
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Current education status
              </p>

            </div>

          </div>


          <div className="space-y-5">

            {EDUCATION_DATA.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {item.value}%
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{
                      width: `${item.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* YOUTH STATUS */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                Youth Status
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Education participation status
              </p>

            </div>

          </div>


          <div className="grid grid-cols-2 gap-4">

            <div className="border border-emerald-100 bg-emerald-50 rounded-2xl p-5">

              <p className="text-sm text-gray-600">
                In-School Youth
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                82%
              </h2>

              <p className="text-xs text-emerald-600 font-semibold mt-2">
                20,377 youth
              </p>

            </div>


            <div className="border border-orange-100 bg-orange-50 rounded-2xl p-5">

              <p className="text-sm text-gray-600">
                Out-of-School Youth
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                18%
              </h2>

              <p className="text-xs text-orange-600 font-semibold mt-2">
                4,473 youth
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DZONGKHAG PERFORMANCE
      ===================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                Dzongkhag Engagement
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Youth participation by Dzongkhag
              </p>

            </div>

          </div>

          <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">
            View Detailed Report →
          </button>

        </div>


        <div className="space-y-5">

          {DZONGKHAG_DATA.map((item) => (

            <div key={item.name}>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">

                <div className="w-28">

                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.youth} youth
                  </p>

                </div>


                <div className="flex-1">

                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className={`h-full rounded-full ${
                        item.value >= 85
                          ? "bg-emerald-500"
                          : item.value >= 80
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      }`}
                      style={{
                        width: `${item.value}%`,
                      }}
                    />

                  </div>

                </div>


                <div className="flex items-center gap-3 w-36">

                  <span className="text-sm font-bold text-gray-900">
                    {item.value}%
                  </span>

                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      item.status === "High"
                        ? "bg-emerald-50 text-emerald-600"
                        : item.status === "Medium"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================================
          INSIGHTS
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Strong Engagement
          </h3>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            National youth engagement has reached 84%, showing
            strong participation across Youth Centres.
          </p>

        </div>


        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Education Participation
          </h3>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            82% of registered youth are currently engaged in
            formal education.
          </p>

        </div>


        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Attention Required
          </h3>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Sarpang currently records the lowest engagement
            rate and may require targeted programme support.
          </p>

        </div>

      </div>

    </div>
  );
};

export default YouthAnalytics;