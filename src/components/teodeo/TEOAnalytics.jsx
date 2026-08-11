import { useMemo, useState } from "react";

import {
  Users,
  TrendingUp,
  Building2,
  GraduationCap,
  HeartHandshake,
  Activity,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  BarChart3,
  Target,
  AlertTriangle,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// ======================================================
// DEMOGRAPHIC DATA
// ======================================================

const demographicData = [
  {
    label: "In-School Youth",
    value: 78,
    description: "Currently enrolled",
    icon: GraduationCap,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Out-of-School Youth",
    value: 22,
    description: "Requires targeted support",
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "Male",
    value: 54,
    description: "Registered youth",
    icon: Users,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    label: "Female",
    value: 46,
    description: "Registered youth",
    icon: Users,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

// ======================================================
// CENTRE PERFORMANCE
// ======================================================

const centrePerformance = [
  {
    name: "Thimphu Youth Centre",
    location: "Thimphu",
    youth: 4200,
    engagement: 92,
    programmes: 24,
    volunteers: 420,
  },
  {
    name: "Paro Youth Centre",
    location: "Paro",
    youth: 3150,
    engagement: 88,
    programmes: 18,
    volunteers: 315,
  },
  {
    name: "Chukha Youth Centre",
    location: "Chukha",
    youth: 2700,
    engagement: 84,
    programmes: 15,
    volunteers: 260,
  },
  {
    name: "Punakha Youth Centre",
    location: "Punakha",
    youth: 2200,
    engagement: 80,
    programmes: 13,
    volunteers: 245,
  },
];

// ======================================================
// TREND DATA
// ======================================================

const engagementData = [
  {
    month: "Jan",
    engagement: 65,
    participation: 58,
  },
  {
    month: "Feb",
    engagement: 72,
    participation: 64,
  },
  {
    month: "Mar",
    engagement: 80,
    participation: 70,
  },
  {
    month: "Apr",
    engagement: 88,
    participation: 76,
  },
  {
    month: "May",
    engagement: 84,
    participation: 73,
  },
  {
    month: "Jun",
    engagement: 89,
    participation: 78,
  },
  {
    month: "Jul",
    engagement: 91,
    participation: 81,
  },
  {
    month: "Aug",
    engagement: 93,
    participation: 84,
  },
];

// ======================================================
// PROGRAMME DATA
// ======================================================

const programmeData = [
  {
    centre: "Thimphu",
    programmes: 24,
  },
  {
    centre: "Paro",
    programmes: 18,
  },
  {
    centre: "Chukha",
    programmes: 15,
  },
  {
    centre: "Punakha",
    programmes: 13,
  },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function TEOAnalytics() {
  const [period, setPeriod] = useState("This Year");
  const [selectedCentre, setSelectedCentre] = useState("All Centres");

  // ====================================================
  // FILTER CENTRE DATA
  // ====================================================

  const filteredCentres = useMemo(() => {
    if (selectedCentre === "All Centres") {
      return centrePerformance;
    }

    return centrePerformance.filter(
      (centre) => centre.name === selectedCentre
    );
  }, [selectedCentre]);

  // ====================================================
  // NATIONAL TOTALS
  // ====================================================

  const totalYouth = centrePerformance.reduce(
    (total, centre) => total + centre.youth,
    0
  );

  const totalVolunteers = centrePerformance.reduce(
    (total, centre) => total + centre.volunteers,
    0
  );

  const totalProgrammes = centrePerformance.reduce(
    (total, centre) => total + centre.programmes,
    0
  );

  return (
    <div className="space-y-6">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">

        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <MapPin className="w-4 h-4" />
            Thimphu Jurisdiction
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Jurisdiction Analytics
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Data insights across Youth Centres under your jurisdiction
          </p>
        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap items-center gap-3">

          {/* PERIOD FILTER */}

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5">

            <CalendarDays className="w-4 h-4 text-gray-400" />

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="
                bg-transparent
                text-sm
                font-medium
                text-gray-700
                outline-none
                cursor-pointer
              "
            >
              <option>This Year</option>
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>Previous Year</option>
            </select>

          </div>

          {/* CENTRE FILTER */}

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5">

            <Building2 className="w-4 h-4 text-gray-400" />

            <select
              value={selectedCentre}
              onChange={(e) => setSelectedCentre(e.target.value)}
              className="
                bg-transparent
                text-sm
                font-medium
                text-gray-700
                outline-none
                cursor-pointer
              "
            >

              <option>All Centres</option>

              {centrePerformance.map((centre) => (
                <option
                  key={centre.name}
                  value={centre.name}
                >
                  {centre.name}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <AnalyticsKPI
          title="Registered Youth"
          value={totalYouth.toLocaleString()}
          description="Across jurisdiction"
          change="+8.4%"
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <AnalyticsKPI
          title="Youth Centres"
          value={centrePerformance.length}
          description="Under supervision"
          change="100% Active"
          icon={Building2}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <AnalyticsKPI
          title="Active Volunteers"
          value={totalVolunteers.toLocaleString()}
          description="Centre volunteers"
          change="+6.8%"
          icon={HeartHandshake}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />

        <AnalyticsKPI
          title="Active Programmes"
          value={totalProgrammes}
          description="Currently running"
          change="+12.5%"
          icon={Activity}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

      </div>


      {/* ==================================================
          ENGAGEMENT TREND
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <div className="flex items-center gap-3">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Youth Engagement Trend
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Monthly engagement and participation performance
              </p>

            </div>

          </div>

          <div className="
            flex
            items-center
            gap-1.5
            px-3
            py-2
            rounded-lg
            bg-emerald-50
            text-emerald-600
            text-xs
            font-semibold
          ">

            <ArrowUpRight className="w-3.5 h-3.5" />

            +28% growth

          </div>

        </div>


        <div className="h-72">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={engagementData}
              margin={{
                top: 5,
                right: 10,
                left: -10,
                bottom: 5,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />

              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
              />

              <Tooltip
                formatter={(value) => [`${value}%`]}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="engagement"
                name="Engagement"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="participation"
                name="Participation"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* ==================================================
          DEMOGRAPHICS + PROGRAMMES
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* DEMOGRAPHICS */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        ">

          <div className="flex items-center gap-3 mb-6">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-indigo-50
              text-indigo-600
              flex
              items-center
              justify-center
            ">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Youth Demographics
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Current demographic profile
              </p>

            </div>

          </div>


          <div className="space-y-5">

            {demographicData.map((item) => {

              const Icon = item.icon;

              return (

                <div key={item.label}>

                  <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center gap-2">

                      <div
                        className={`
                          w-8
                          h-8
                          rounded-lg
                          ${item.iconBg}
                          ${item.iconColor}
                          flex
                          items-center
                          justify-center
                        `}
                      >

                        <Icon className="w-4 h-4" />

                      </div>

                      <div>

                        <p className="text-sm font-medium text-gray-800">
                          {item.label}
                        </p>

                        <p className="text-xs text-gray-400">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    <span className="text-sm font-bold text-gray-900">
                      {item.value}%
                    </span>

                  </div>


                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className={`
                        h-full
                        rounded-full
                        ${item.iconColor.replace(
                          "text-",
                          "bg-"
                        )}
                      `}
                      style={{
                        width: `${item.value}%`,
                      }}
                    />

                  </div>

                </div>

              );

            })}

          </div>

        </div>


        {/* PROGRAMMES */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        ">

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div className="
                w-10
                h-10
                rounded-xl
                bg-purple-50
                text-purple-600
                flex
                items-center
                justify-center
              ">
                <BarChart3 className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  Programme Distribution
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Active programmes by centre
                </p>

              </div>

            </div>

          </div>


          <div className="h-64">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={programmeData}
                margin={{
                  top: 5,
                  right: 10,
                  left: -10,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="centre"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="programmes"
                  name="Programmes"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* ==================================================
          CENTRE PERFORMANCE
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-6
      ">

        <div className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
          mb-6
        ">

          <div className="flex items-center gap-3">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <Building2 className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Youth Centre Performance
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Comparative performance across your jurisdiction
              </p>

            </div>

          </div>


          <span className="text-xs text-gray-400">
            {filteredCentres.length} centre
            {filteredCentres.length !== 1 ? "s" : ""}
          </span>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[760px] text-sm">

            <thead>

              <tr className="
                border-b
                border-gray-100
                text-xs
                text-gray-400
              ">

                <th className="text-left pb-4 font-medium">
                  Youth Centre
                </th>

                <th className="text-center pb-4 font-medium">
                  Registered Youth
                </th>

                <th className="text-center pb-4 font-medium">
                  Engagement
                </th>

                <th className="text-center pb-4 font-medium">
                  Programmes
                </th>

                <th className="text-center pb-4 font-medium">
                  Volunteers
                </th>

                <th className="text-right pb-4 font-medium">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredCentres.map((centre) => (

                <tr
                  key={centre.name}
                  className="
                    border-b
                    border-gray-100
                    last:border-none
                    hover:bg-gray-50
                    transition
                  "
                >

                  {/* CENTRE */}

                  <td className="py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-9
                        h-9
                        rounded-lg
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                      ">

                        <Building2 className="w-4 h-4" />

                      </div>

                      <div>

                        <p className="font-semibold text-gray-800">
                          {centre.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {centre.location}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* YOUTH */}

                  <td className="text-center font-medium">
                    {centre.youth.toLocaleString()}
                  </td>


                  {/* ENGAGEMENT */}

                  <td className="text-center">

                    <div className="flex items-center justify-center gap-2">

                      <span className="font-bold text-gray-800">
                        {centre.engagement}%
                      </span>

                    </div>

                  </td>


                  {/* PROGRAMMES */}

                  <td className="text-center">
                    {centre.programmes}
                  </td>


                  {/* VOLUNTEERS */}

                  <td className="text-center">
                    {centre.volunteers.toLocaleString()}
                  </td>


                  {/* STATUS */}

                  <td className="text-right">

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          centre.engagement >= 90
                            ? "bg-emerald-50 text-emerald-700"
                            : centre.engagement >= 80
                            ? "bg-blue-50 text-blue-700"
                            : "bg-orange-50 text-orange-700"
                        }
                      `}
                    >

                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-current
                        "
                      />

                      {centre.engagement >= 90
                        ? "Excellent"
                        : centre.engagement >= 80
                        ? "Good"
                        : "Needs Attention"}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==================================================
          INSIGHTS
      ================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <InsightCard
          icon={TrendingUp}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
          title="Positive Trend"
          text="Youth engagement has increased consistently across the jurisdiction over the reporting period."
        />

        <InsightCard
          icon={Target}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          title="Strongest Centre"
          text="Thimphu Youth Centre currently records the highest engagement level at 92%."
        />

        <InsightCard
          icon={AlertTriangle}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
          title="Attention Area"
          text="Out-of-school youth represent 22% of registered youth and may require targeted interventions."
        />

      </div>


      {/* ==================================================
          EXECUTIVE SUMMARY
      ================================================== */}

      <div className="
        bg-gradient-to-r
        from-blue-50
        to-indigo-50
        border
        border-blue-100
        rounded-2xl
        p-6
      ">

        <div className="flex items-start gap-4">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-white
            text-blue-600
            flex
            items-center
            justify-center
            shadow-sm
            flex-shrink-0
          ">

            <Activity className="w-5 h-5" />

          </div>


          <div>

            <h3 className="font-bold text-gray-900">
              Jurisdiction Insight
            </h3>

            <p className="
              text-sm
              text-gray-600
              mt-2
              leading-relaxed
            ">
              Youth engagement is showing a positive upward trend
              across the jurisdiction. Centre performance remains
              strongest in Thimphu, while continued attention should
              be given to out-of-school youth and centres with
              comparatively lower engagement levels.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


// ======================================================
// KPI COMPONENT
// ======================================================

function AnalyticsKPI({
  title,
  value,
  description,
  change,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-5
      hover:shadow-md
      transition
    ">

      <div className="flex items-start justify-between">

        <div
          className={`
            w-11
            h-11
            rounded-xl
            ${iconBg}
            ${iconColor}
            flex
            items-center
            justify-center
          `}
        >

          <Icon className="w-5 h-5" />

        </div>


        <span className="
          text-xs
          font-semibold
          text-emerald-600
          flex
          items-center
          gap-1
        ">

          <ArrowUpRight className="w-3.5 h-3.5" />

          {change}

        </span>

      </div>


      <p className="text-sm text-gray-500 mt-5">
        {title}
      </p>


      <h2 className="
        text-3xl
        font-bold
        text-gray-900
        mt-1
      ">
        {value}
      </h2>


      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>

    </div>
  );
}


// ======================================================
// INSIGHT CARD
// ======================================================

function InsightCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  text,
}) {
  return (
    <div className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-5
    ">

      <div
        className={`
          w-10
          h-10
          rounded-xl
          ${iconBg}
          ${iconColor}
          flex
          items-center
          justify-center
          mb-4
        `}
      >

        <Icon className="w-5 h-5" />

      </div>


      <h3 className="font-bold text-gray-900">
        {title}
      </h3>


      <p className="
        text-sm
        text-gray-500
        mt-2
        leading-relaxed
      ">
        {text}
      </p>

    </div>
  );
}