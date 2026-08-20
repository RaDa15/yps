import {
  HeartHandshake,
  Users,
  Clock3,
  TrendingUp,
  MapPin,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Award,
  CalendarDays,
  BarChart3,
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
// DEMO DATA
// ======================================================

const volunteerTrendData = [
  { year: "2024", hours: 62000 },
  { year: "2025", hours: 72500 },
  { year: "2026", hours: 85420 },
];

const monthlyVolunteerData = [
  { month: "Jan", volunteers: 2180, hours: 6800 },
  { month: "Feb", volunteers: 2260, hours: 7200 },
  { month: "Mar", volunteers: 2340, hours: 7600 },
  { month: "Apr", volunteers: 2420, hours: 7900 },
  { month: "May", volunteers: 2510, hours: 8300 },
  { month: "Jun", volunteers: 2640, hours: 8700 },
  { month: "Jul", volunteers: 2760, hours: 9100 },
  { month: "Aug", volunteers: 2850, hours: 9820 },
];

// ======================================================
// CENTRE DATA
// ======================================================

const volunteerData = [
  {
    centre: "Thimphu Youth Centre",
    volunteers: 850,
    hours: "24,500",
    activities: 120,
    participation: "92%",
    status: "Strong",
  },
  {
    centre: "Paro Youth Centre",
    volunteers: 620,
    hours: "18,200",
    activities: 95,
    participation: "86%",
    status: "Strong",
  },
  {
    centre: "Samtse Youth Centre",
    volunteers: 430,
    hours: "12,800",
    activities: 70,
    participation: "68%",
    status: "Needs Attention",
  },
];

// ======================================================
// KPI DATA
// ======================================================

const KPI_DATA = [
  {
    title: "Total Volunteers",
    value: "18,920",
    description: "Registered volunteers",
    change: "+16.8%",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Volunteers",
    value: "15,850",
    description: "Currently contributing",
    change: "+12.4%",
    icon: HeartHandshake,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Service Hours",
    value: "85,420",
    description: "Total contribution hours",
    change: "+18.7%",
    icon: Clock3,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Annual Growth",
    value: "+24%",
    description: "Compared with previous year",
    change: "+4.8%",
    icon: TrendingUp,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

// ======================================================
// COMPONENT
// ======================================================

const VolunteerAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">

            <div className="
              w-11
              h-11
              rounded-xl
              bg-purple-50
              text-purple-600
              flex
              items-center
              justify-center
            ">
              <HeartHandshake className="w-5 h-5" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Volunteer Impact
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                National volunteer contribution, service impact and engagement analytics
              </p>
            </div>

          </div>
        </div>

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
          bg-white
          border
          border-gray-200
          rounded-xl
          px-4
          py-2.5
        ">
          <CalendarDays className="w-4 h-4" />
          2026 Overview
        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      ">

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

                <div className="
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
                ">
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
          MAIN VOLUNTEER TREND
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
          gap-4
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
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Volunteer Contribution Trend
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Growth in national volunteer service hours
              </p>
            </div>

          </div>

          <div className="
            flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-emerald-600
            bg-emerald-50
            px-3
            py-2
            rounded-lg
          ">
            <ArrowUpRight className="w-3.5 h-3.5" />
            24% annual growth
          </div>

        </div>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={volunteerTrendData}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="year"
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

              <Line
                type="monotone"
                dataKey="hours"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* ==================================================
          SECOND ROW
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      ">


        {/* MONTHLY VOLUNTEER ACTIVITY */}

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
                Monthly Volunteer Activity
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Active volunteers throughout 2026
              </p>

            </div>

          </div>

          <div className="h-64">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={monthlyVolunteerData}>

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
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="volunteers"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* APPROVAL STATUS */}

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
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            ">
              <CheckCircle className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Volunteer Approval Status
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Current application processing status
              </p>

            </div>

          </div>


          <div className="space-y-5">

            <ApprovalRow
              label="Approved Applications"
              value="3,120"
              percentage="91%"
              progress="91"
              type="success"
            />

            <ApprovalRow
              label="Pending Approval"
              value="210"
              percentage="6%"
              progress="6"
              type="warning"
            />

            <ApprovalRow
              label="Rejected"
              value="90"
              percentage="3%"
              progress="3"
              type="danger"
            />

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
          gap-4
          mb-6
        ">

          <div className="flex items-center gap-3">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-red-50
              text-red-600
              flex
              items-center
              justify-center
            ">
              <MapPin className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Volunteer Distribution Across Youth Centres
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Comparative volunteer engagement by centre
              </p>

            </div>

          </div>

          <div className="
            flex
            items-center
            gap-2
            text-xs
            text-gray-500
          ">
            <Users className="w-4 h-4" />
            24,859 registered
          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>

              <tr className="
                border-b
                border-gray-100
                text-gray-500
              ">

                <th className="text-left py-3 font-medium">
                  Youth Centre
                </th>

                <th className="text-center py-3 font-medium">
                  Volunteers
                </th>

                <th className="text-center py-3 font-medium">
                  Service Hours
                </th>

                <th className="text-center py-3 font-medium">
                  Activities
                </th>

                <th className="text-center py-3 font-medium">
                  Participation
                </th>

                <th className="text-center py-3 font-medium">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {volunteerData.map((item) => (

                <tr
                  key={item.centre}
                  className="
                    border-b
                    border-gray-100
                    last:border-0
                    hover:bg-gray-50
                    transition
                  "
                >

                  <td className="py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-9
                        h-9
                        rounded-lg
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        text-gray-600
                      ">
                        <MapPin className="w-4 h-4" />
                      </div>

                      <span className="font-medium text-gray-800">
                        {item.centre}
                      </span>

                    </div>

                  </td>

                  <td className="text-center font-semibold">
                    {item.volunteers}
                  </td>

                  <td className="text-center">
                    {item.hours}
                  </td>

                  <td className="text-center">
                    {item.activities}
                  </td>

                  <td className="text-center font-semibold">
                    {item.participation}
                  </td>

                  <td className="text-center">

                    <span
                      className={`
                        inline-flex
                        items-center
                        px-2.5
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          item.status === "Strong"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
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


      {/* ==================================================
          ATTENTION + EXECUTIVE INSIGHT
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      ">


        {/* ATTENTION REQUIRED */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        ">

          <div className="flex items-center gap-3 mb-5">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-orange-50
              text-orange-600
              flex
              items-center
              justify-center
            ">
              <AlertCircle className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Volunteer Attention Required
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Areas requiring executive review
              </p>

            </div>

          </div>


          <div className="space-y-3">

            <AttentionItem>
              Declining volunteer activity in some regions
            </AttentionItem>

            <AttentionItem>
              210 volunteer applications pending approval
            </AttentionItem>

            <AttentionItem>
              Rural areas require stronger youth participation
            </AttentionItem>

          </div>

        </div>


        {/* EXECUTIVE INSIGHT */}

        <div className="
          bg-gradient-to-r
          from-purple-50
          to-indigo-50
          border
          border-purple-100
          rounded-2xl
          p-6
        ">

          <div className="flex items-start gap-4">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-white
              text-purple-600
              flex
              items-center
              justify-center
              shadow-sm
              flex-shrink-0
            ">
              <Award className="w-5 h-5" />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                Executive Insight
              </h3>

              <p className="
                text-sm
                text-gray-600
                mt-2
                leading-relaxed
              ">
                Volunteer participation continues to show strong national
                growth, with service contribution reaching 85,420 hours.
                Thimphu currently demonstrates the strongest centre-level
                contribution, while Samtse requires additional attention
                to improve participation and volunteer engagement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


// ======================================================
// APPROVAL ROW
// ======================================================

const ApprovalRow = ({
  label,
  value,
  percentage,
  progress,
  type,
}) => {

  const progressClass = {
    success: "bg-emerald-500",
    warning: "bg-orange-500",
    danger: "bg-red-500",
  };

  return (
    <div>

      <div className="
        flex
        items-center
        justify-between
        mb-2
      ">

        <span className="text-sm text-gray-600">
          {label}
        </span>

        <div className="flex items-center gap-2">

          <span className="font-semibold text-gray-900">
            {value}
          </span>

          <span className="text-xs text-gray-400">
            ({percentage})
          </span>

        </div>

      </div>

      <div className="
        h-2
        bg-gray-100
        rounded-full
        overflow-hidden
      ">

        <div
          className={`
            h-full
            rounded-full
            ${progressClass[type]}
            transition-all
          `}
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
};


// ======================================================
// ATTENTION ITEM
// ======================================================

const AttentionItem = ({ children }) => {

  return (
    <div className="
      flex
      items-start
      gap-3
      p-3
      rounded-xl
      bg-gray-50
    ">

      <AlertCircle className="
        w-4
        h-4
        text-orange-500
        mt-0.5
        flex-shrink-0
      " />

      <p className="text-sm text-gray-600">
        {children}
      </p>

    </div>
  );
};


export default VolunteerAnalytics;