import {
  Users,
  GraduationCap,
  MapPin,
  UserRoundCheck,
  VenusAndMars,
  School,
  TrendingUp,
  TrendingDown,
  Filter,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const NationalOverview = () => {
  const dzongkhags = [
    {
      name: "Thimphu",
      youth: "4,840",
      engagement: 91,
      status: "High",
      trend: "+8.4%",
    },
    {
      name: "Paro",
      youth: "2,420",
      engagement: 87,
      status: "High",
      trend: "+6.2%",
    },
    {
      name: "Chhukha",
      youth: "1,180",
      engagement: 76,
      status: "Moderate",
      trend: "+3.8%",
    },
    {
      name: "Samtse",
      youth: "1100",
      engagement: 62,
      status: "Needs Support",
      trend: "-2.1%",
    },
    {
      name: "Trashigang",
      youth: "1,060",
      engagement: 71,
      status: "Growing",
      trend: "+4.7%",
    },
    {
      name: "Mongar",
      youth: "950",
      engagement: 68,
      status: "Moderate",
      trend: "+2.9%",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "High":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";

      case "Growing":
        return "bg-blue-50 text-blue-700 border-blue-100";

      case "Moderate":
        return "bg-amber-50 text-amber-700 border-amber-100";

      case "Needs Support":
        return "bg-red-50 text-red-700 border-red-100";

      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                National Overview
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                National youth demographic, education and geographic profile
              </p>
            </div>

          </div>
        </div>

        {/* Reporting Period */}

        <div className="flex items-center gap-3">

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              bg-white
              border
              border-gray-200
              rounded-xl
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            <CalendarDays className="w-4 h-4 text-gray-500" />
            2026
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              bg-blue-600
              text-white
              rounded-xl
              text-sm
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

        </div>

      </div>


      {/* =====================================================
          NATIONAL KPI SUMMARY
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* Total Youth */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              6.8%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Total Registered Youth
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            12,540
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Across all Youth Centres
          </p>

        </div>


        {/* Youth Centres */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-gray-400">
              National
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Youth Centres
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            13
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            All centres reporting
          </p>

        </div>


        {/* In-School */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <School className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              2.4%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            In-School Youth
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            82%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Of registered youth
          </p>

        </div>


        {/* Out of School */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-start justify-between">

            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <UserRoundCheck className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-red-500">
              <TrendingDown className="w-3.5 h-3.5" />
              1.2%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Out-of-School Youth
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            18%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Requires continued monitoring
          </p>

        </div>

      </div>


      {/* =====================================================
          DEMOGRAPHIC BREAKDOWN
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Youth Demographic Breakdown
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Registered youth by age group
              </p>
            </div>

          </div>

          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            View Details →
          </button>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* 10–14 */}

          <div className="bg-gray-50 rounded-xl p-5">

            <div className="flex justify-between items-center">

              <p className="text-sm font-medium text-gray-600">
                Age 10–14
              </p>

              <span className="text-sm font-bold text-blue-600">
                18%
              </span>

            </div>

            <div className="h-2 bg-gray-200 rounded-full mt-4">

              <div className="h-2 bg-blue-600 rounded-full w-[18%]" />

            </div>

            <p className="text-xs text-gray-400 mt-3">
              Approximately 2,257 youth
            </p>

          </div>


          {/* 15–19 */}

          <div className="bg-gray-50 rounded-xl p-5">

            <div className="flex justify-between items-center">

              <p className="text-sm font-medium text-gray-600">
                Age 15–19
              </p>

              <span className="text-sm font-bold text-purple-600">
                42%
              </span>

            </div>

            <div className="h-2 bg-gray-200 rounded-full mt-4">

              <div className="h-2 bg-purple-600 rounded-full w-[42%]" />

            </div>

            <p className="text-xs text-gray-400 mt-3">
              Approximately 5,267 youth
            </p>

          </div>


          {/* 20–24 */}

          <div className="bg-gray-50 rounded-xl p-5">

            <div className="flex justify-between items-center">

              <p className="text-sm font-medium text-gray-600">
                Age 20–24
              </p>

              <span className="text-sm font-bold text-emerald-600">
                40%
              </span>

            </div>

            <div className="h-2 bg-gray-200 rounded-full mt-4">

              <div className="h-2 bg-emerald-600 rounded-full w-[40%]" />

            </div>

            <p className="text-xs text-gray-400 mt-3">
              Approximately 5,016 youth
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          GENDER + EDUCATION
      ====================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        {/* Gender */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <VenusAndMars className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Gender Distribution
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                National registered youth
              </p>
            </div>

          </div>


          <div className="flex items-center gap-8">

            <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">

              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">

                <span className="text-lg font-bold text-gray-900">
                  12.5K
                </span>

              </div>

            </div>


            <div className="flex-1 space-y-5">

              <div>

                <div className="flex justify-between text-sm mb-2">

                  <div className="flex items-center gap-2">

                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />

                    <span className="text-gray-600">
                      Male
                    </span>

                  </div>

                  <strong>
                    51%
                  </strong>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div className="h-2 bg-blue-500 rounded-full w-[51%]" />

                </div>

              </div>


              <div>

                <div className="flex justify-between text-sm mb-2">

                  <div className="flex items-center gap-2">

                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />

                    <span className="text-gray-600">
                      Female
                    </span>

                  </div>

                  <strong>
                    49%
                  </strong>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div className="h-2 bg-purple-500 rounded-full w-[49%]" />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Education */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Education Level
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Current education participation
              </p>
            </div>

          </div>


          <div className="space-y-5">

            {[
              ["School", "72%", "bg-blue-600", "w-[72%]"],
              ["College", "18%", "bg-purple-600", "w-[18%]"],
              [
                "Vocational Training",
                "10%",
                "bg-emerald-600",
                "w-[10%]",
              ],
            ].map(([label, value, color, width]) => (

              <div key={label}>

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-600">
                    {label}
                  </span>

                  <strong className="text-gray-900">
                    {value}
                  </strong>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div
                    className={`h-2 rounded-full ${color} ${width}`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          YOUTH STATUS
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <UserRoundCheck className="w-5 h-5" />
          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Youth Status
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Education participation across the country
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="border border-emerald-100 bg-emerald-50/50 rounded-xl p-5">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-sm font-medium text-gray-600">
                  In-School Youth
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  82%
                </h2>

              </div>

              <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>

            </div>

            <div className="h-2 bg-white rounded-full mt-5">

              <div className="h-2 bg-emerald-500 rounded-full w-[82%]" />

            </div>

          </div>


          <div className="border border-orange-100 bg-orange-50/50 rounded-xl p-5">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-sm font-medium text-gray-600">
                  Out-of-School Youth
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  18%
                </h2>

              </div>

              <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>

            </div>

            <div className="h-2 bg-white rounded-full mt-5">

              <div className="h-2 bg-orange-500 rounded-full w-[18%]" />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DZONGKHAG PERFORMANCE
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  Dzongkhag Distribution
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Youth registration and engagement performance
                </p>

              </div>

            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-blue-600">
              View National Map
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>

        </div>


        <div className="divide-y divide-gray-100">

          {dzongkhags.map((item) => (

            <div
              key={item.name}
              className="p-5 hover:bg-gray-50 transition"
            >

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

                {/* Name */}

                <div className="lg:col-span-2">

                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.youth} registered youth
                  </p>

                </div>


                {/* Progress */}

                <div className="lg:col-span-5">

                  <div className="flex justify-between text-xs mb-2">

                    <span className="text-gray-500">
                      Engagement
                    </span>

                    <span className="font-semibold text-gray-700">
                      {item.engagement}%
                    </span>

                  </div>

                  <div className="h-2 bg-gray-100 rounded-full">

                    <div
                      className={`h-2 rounded-full ${
                        item.engagement >= 85
                          ? "bg-emerald-500"
                          : item.engagement >= 70
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      }`}
                      style={{
                        width: `${item.engagement}%`,
                      }}
                    />

                  </div>

                </div>


                {/* Status */}

                <div className="lg:col-span-2">

                  <span
                    className={`inline-flex px-2.5 py-1 rounded-lg border text-xs font-semibold ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                </div>


                {/* Trend */}

                <div className="lg:col-span-2">

                  <span
                    className={`text-sm font-semibold ${
                      item.trend.startsWith("-")
                        ? "text-red-500"
                        : "text-emerald-600"
                    }`}
                  >
                    {item.trend}
                  </span>

                  <span className="text-xs text-gray-400 ml-1">
                    vs previous period
                  </span>

                </div>


                {/* Action */}

                <div className="lg:col-span-1 flex justify-end">

                  <button
                    className="
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                    title="View details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default NationalOverview;