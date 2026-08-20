import { useMemo, useState } from "react";

import {
  TrendingUp,
  Users,
  Activity,
  GraduationCap,
  HeartHandshake,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
  CalendarDays,
  Filter,
  Target,
  BriefcaseBusiness,
  Download,
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
} from "recharts";


// ======================================================
// ENGAGEMENT DATA
// ======================================================

const engagementData = {
  "Last 8 Months": [
    { month: "Jan", youth: 6200 },
    { month: "Feb", youth: 6800 },
    { month: "Mar", youth: 7100 },
    { month: "Apr", youth: 7600 },
    { month: "May", youth: 8200 },
    { month: "Jun", youth: 8900 },
    { month: "Jul", youth: 9460 },
    { month: "Aug", youth: 9820 },
  ],

  "Last 6 Months": [
    { month: "Mar", youth: 7100 },
    { month: "Apr", youth: 7600 },
    { month: "May", youth: 8200 },
    { month: "Jun", youth: 8900 },
    { month: "Jul", youth: 9460 },
    { month: "Aug", youth: 9820 },
  ],

  "This Year": [
    { month: "Jan", youth: 6200 },
    { month: "Feb", youth: 6800 },
    { month: "Mar", youth: 7100 },
    { month: "Apr", youth: 7600 },
    { month: "May", youth: 8200 },
    { month: "Jun", youth: 8900 },
    { month: "Jul", youth: 9460 },
    { month: "Aug", youth: 9820 },
  ],

  "Previous Year": [
    { month: "Jan", youth: 5200 },
    { month: "Feb", youth: 5600 },
    { month: "Mar", youth: 5900 },
    { month: "Apr", youth: 6200 },
    { month: "May", youth: 6500 },
    { month: "Jun", youth: 6900 },
    { month: "Jul", youth: 7200 },
    { month: "Aug", youth: 7500 },
  ],
};


// ======================================================
// PROGRAMME DATA
// ======================================================

const programmeData = [
  { month: "Jan", participation: 62 },
  { month: "Feb", participation: 65 },
  { month: "Mar", participation: 68 },
  { month: "Apr", participation: 71 },
  { month: "May", participation: 73 },
  { month: "Jun", participation: 75 },
  { month: "Jul", participation: 77 },
  { month: "Aug", participation: 78 },
];


// ======================================================
// KPI DATA
// ======================================================

const KPI_DATA = [
  {
    title: "Active Youth",
    value: "18,920",
    description: "Currently engaged youth",
    change: "+12.4%",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },

  {
    title: "Participation Rate",
    value: "78%",
    description: "Programme participation",
    change: "+6.2%",
    icon: Activity,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },

  {
    title: "Volunteer Hours",
    value: "45,600",
    description: "Community service contribution",
    change: "+18.7%",
    icon: HeartHandshake,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },

  {
    title: "Growth Trend",
    value: "+18%",
    description: "Compared with previous year",
    change: "+4.8%",
    icon: TrendingUp,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];


// ======================================================
// MAIN COMPONENT
// ======================================================

const YouthAnalytics = () => {

  const [period, setPeriod] = useState("Last 8 Months");

  const [feedbackFilter, setFeedbackFilter] = useState("All");


  const currentEngagementData = useMemo(() => {
    return engagementData[period];
  }, [period]);


  return (
    <div className="space-y-6">


      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">

        <div>

          <div className="flex items-center gap-3">

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
              <BarChart3 className="w-5 h-5" />
            </div>


            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Youth Analytics
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                National youth engagement, participation and outcome analysis
              </p>

            </div>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="flex flex-wrap items-center gap-2">


          {/* PERIOD */}

          <div
            className="
              flex
              items-center
              gap-2
              bg-white
              border
              border-gray-200
              rounded-xl
              px-3
              py-2
            "
          >

            <CalendarDays className="w-4 h-4 text-gray-400" />

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="
                bg-transparent
                outline-none
                text-sm
                font-medium
                text-gray-700
                cursor-pointer
              "
            >

              <option>Last 8 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>Previous Year</option>

            </select>

          </div>


          {/* EXPORT */}

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
              font-semibold
              text-gray-600
              hover:bg-gray-50
              transition
            "
          >

            <Download className="w-4 h-4" />

            Export

          </button>

        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {KPI_DATA.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                hover:shadow-md
                transition
              "
            >

              <div className="flex items-start justify-between">

                <div
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    ${item.iconBg}
                    ${item.iconColor}
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>


                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-semibold
                    text-emerald-600
                    bg-emerald-50
                    px-2
                    py-1
                    rounded-lg
                  "
                >

                  <ArrowUpRight className="w-3.5 h-3.5" />

                  {item.change}

                </div>

              </div>


              <p className="text-sm text-gray-500 mt-5">
                {item.title}
              </p>


              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {item.value}
              </h2>


              <p className="text-xs text-gray-400 mt-1">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>


      {/* ==================================================
          MAIN ENGAGEMENT CHART
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <TrendingUp className="w-5 h-5" />
            </div>


            <div>

              <h2 className="font-bold text-gray-900">
                Youth Engagement Trend
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Number of actively engaged youth over time
              </p>

            </div>

          </div>


          <div
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-emerald-600
              bg-emerald-50
              px-3
              py-2
              rounded-lg
            "
          >

            <ArrowUpRight className="w-3.5 h-3.5" />

            18% growth

          </div>

        </div>


        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart
              data={currentEngagementData}
              margin={{
                top: 10,
                right: 10,
                left: -15,
                bottom: 0,
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
                tick={{
                  fontSize: 12,
                  fill: "#6b7280",
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#6b7280",
                }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              />

              <Line
                type="monotone"
                dataKey="youth"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{
                  r: 4,
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* ==================================================
          SECOND ROW
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        {/* PROGRAMME PARTICIPATION */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-purple-50
                  text-purple-600
                  flex
                  items-center
                  justify-center
                "
              >
                <BarChart3 className="w-5 h-5" />
              </div>


              <div>

                <h2 className="font-bold text-gray-900">
                  Programme Participation
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Monthly participation rate
                </p>

              </div>

            </div>


            <span className="text-xs font-semibold text-gray-400">
              %
            </span>

          </div>


          <div className="h-64">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={programmeData}
                margin={{
                  top: 5,
                  right: 5,
                  left: -20,
                  bottom: 0,
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
                  tick={{
                    fontSize: 12,
                    fill: "#6b7280",
                  }}
                />

                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#6b7280",
                  }}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                  }}
                />

                <Bar
                  dataKey="participation"
                  fill="#7c3aed"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* YOUTH TRANSITION */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-emerald-50
                text-emerald-600
                flex
                items-center
                justify-center
              "
            >
              <GraduationCap className="w-5 h-5" />
            </div>


            <div>

              <h2 className="font-bold text-gray-900">
                Youth Transition Outcomes
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Education, employment and skills progression
              </p>

            </div>

          </div>


          <div className="space-y-6">

            <OutcomeBar
              label="Education Continuation"
              value={68}
              icon={GraduationCap}
            />

            <OutcomeBar
              label="Employment Transition"
              value={22}
              icon={BriefcaseBusiness}
            />

            <OutcomeBar
              label="Vocational Training"
              value={10}
              icon={Target}
            />

          </div>


          <div className="mt-6 pt-5 border-t border-gray-100">

            <p className="text-xs text-gray-400">
              Based on recorded youth transition outcomes
            </p>

          </div>

        </div>

      </div>


      {/* ==================================================
          FEEDBACK
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <MessageSquare className="w-5 h-5" />
            </div>


            <div>

              <h2 className="font-bold text-gray-900">
                Youth Feedback Sentiment
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Overall sentiment from youth feedback submissions
              </p>

            </div>

          </div>


          <div className="flex items-center gap-2">

            <Filter className="w-4 h-4 text-gray-400" />

            <select
              value={feedbackFilter}
              onChange={(e) => setFeedbackFilter(e.target.value)}
              className="
                text-xs
                font-semibold
                text-gray-600
                bg-gray-50
                border
                border-gray-200
                rounded-lg
                px-3
                py-2
                outline-none
              "
            >

              <option>All</option>
              <option>This Month</option>
              <option>This Quarter</option>

            </select>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <SentimentCard
            label="Positive Feedback"
            value="82%"
            description="Strong satisfaction"
            className="bg-emerald-50 text-emerald-700"
          />

          <SentimentCard
            label="Neutral Feedback"
            value="12%"
            description="Generally satisfied"
            className="bg-amber-50 text-amber-700"
          />

          <SentimentCard
            label="Negative Feedback"
            value="6%"
            description="Requires attention"
            className="bg-red-50 text-red-700"
          />

        </div>

      </div>


      {/* ==================================================
          EXECUTIVE INSIGHT
      ================================================== */}

      <div
        className="
          bg-blue-50
          border
          border-blue-100
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-start gap-4">

          <div
            className="
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
            "
          >
            <TrendingUp className="w-5 h-5" />
          </div>


          <div>

            <h3 className="font-bold text-gray-900">
              Executive Insight
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              National youth engagement continues to show positive growth.
              Programme participation has reached 78%, while education
              continuation remains the strongest transition outcome.
              Continued attention should be given to employment transition
              and the 6% negative feedback segment.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


// ======================================================
// OUTCOME BAR
// ======================================================

const OutcomeBar = ({
  label,
  value,
  icon: Icon,
}) => {

  return (

    <div>

      <div className="flex items-center justify-between mb-2">

        <div className="flex items-center gap-2">

          <Icon className="w-4 h-4 text-gray-500" />

          <span className="text-sm font-medium text-gray-700">
            {label}
          </span>

        </div>


        <span className="text-sm font-bold text-gray-900">
          {value}%
        </span>

      </div>


      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

        <div
          className="h-full bg-blue-600 rounded-full transition-all"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>

  );
};


// ======================================================
// SENTIMENT CARD
// ======================================================

const SentimentCard = ({
  label,
  value,
  description,
  className,
}) => {

  return (

    <div
      className={`
        ${className}
        rounded-xl
        p-5
      `}
    >

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium">
          {label}
        </p>

        <Activity className="w-4 h-4 opacity-60" />

      </div>


      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>


      <p className="text-xs mt-1 opacity-70">
        {description}
      </p>

    </div>

  );
};


export default YouthAnalytics;