import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BarChart3,
  CalendarCheck,
  ChartNoAxesCombined,
  Eye,
  HeartHandshake,
  MapPin,
  TrendingUp,
  UserCheck,
  Users,
  UserRoundCheck,
  UserRoundPlus,
  UsersRound,
  Wifi,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* =========================================================
   MOCK DATA
   Replace these values with API data later.
========================================================= */

const registrationData = [
  { month: "Jan", youth: 1480, volunteers: 210 },
  { month: "Feb", youth: 1760, volunteers: 245 },
  { month: "Mar", youth: 1980, volunteers: 280 },
  { month: "Apr", youth: 2240, volunteers: 310 },
  { month: "May", youth: 2510, volunteers: 355 },
  { month: "Jun", youth: 2860, volunteers: 390 },
  { month: "Jul", youth: 3180, volunteers: 430 },
  { month: "Aug", youth: 3440, volunteers: 470 },
];

const centreData = [
  { name: "Thimphu", youth: 5420, volunteers: 620 },
  { name: "Phuentsholing", youth: 3240, volunteers: 410 },
  { name: "Paro", youth: 2760, volunteers: 335 },
  { name: "Gelephu", youth: 2410, volunteers: 290 },
  { name: "Punakha", youth: 1980, volunteers: 250 },
  { name: "Samdrup Jongkhar", youth: 1740, volunteers: 220 },
  { name: "Mongar", youth: 1510, volunteers: 190 },
];

const genderData = [
  {
    name: "Male",
    value: 53,
  },
  {
    name: "Female",
    value: 44,
  },
  {
    name: "Other",
    value: 3,
  },
];

const programmeData = [
  {
    name: "Skills",
    participants: 4820,
  },
  {
    name: "Sports",
    participants: 3940,
  },
  {
    name: "Leadership",
    participants: 3260,
  },
  {
    name: "Volunteer",
    participants: 2890,
  },
  {
    name: "Digital",
    participants: 2510,
  },
];

const dailyVisitsData = [
  { day: "Mon", visits: 820 },
  { day: "Tue", visits: 1040 },
  { day: "Wed", visits: 1180 },
  { day: "Thu", visits: 1320 },
  { day: "Fri", visits: 1490 },
  { day: "Sat", visits: 1730 },
  { day: "Sun", visits: 1560 },
];

const recentActivities = [
  {
    title: "New youth registration",
    description: "Thimphu Youth Centre",
    time: "2 minutes ago",
    icon: UserRoundPlus,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Volunteer registered",
    description: "Paro Youth Centre",
    time: "8 minutes ago",
    icon: UserCheck,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Programme completed",
    description: "Youth Leadership Programme",
    time: "24 minutes ago",
    icon: Award,
    iconClass: "bg-purple-50 text-purple-600",
  },
  {
    title: "Certificate generated",
    description: "Digital Skills Workshop",
    time: "41 minutes ago",
    icon: CalendarCheck,
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    title: "New feedback received",
    description: "Phuentsholing Youth Centre",
    time: "1 hour ago",
    icon: HeartHandshake,
    iconClass: "bg-rose-50 text-rose-600",
  },
];

/* =========================================================
   ANIMATED NUMBER HOOK
========================================================= */

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
}

/* =========================================================
   FORMAT NUMBER
========================================================= */

function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

/* =========================================================
   ANIMATED STAT CARD
========================================================= */

function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  iconColor,
  iconBg,
  trend = "up",
}) {
  const animatedValue = useCountUp(value);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Decorative background */}
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${iconBg} opacity-50 transition-transform duration-500 group-hover:scale-150`}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
          >
            <Icon size={23} className={iconColor} />
          </div>

          {change && (
            <div
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                trend === "up"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {trend === "up" ? (
                <ArrowUpRight size={13} />
              ) : (
                <ArrowDownRight size={13} />
              )}

              {change}
            </div>
          )}
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            {formatNumber(animatedValue)}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CUSTOM TOOLTIP
========================================================= */

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
      <p className="mb-2 text-xs font-semibold text-slate-500">
        {label}
      </p>

      {payload.map((item, index) => (
        <div
          key={`${item.dataKey}-${index}`}
          className="flex items-center justify-between gap-5 text-sm"
        >
          <span className="text-slate-600">
            {item.name}
          </span>

          <span className="font-semibold text-slate-900">
            {formatNumber(item.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   PIE TOOLTIP
========================================================= */

function GenderTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const item = payload[0];

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
      <p className="text-sm font-semibold text-slate-900">
        {item.name}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {item.value}% of registered youth
      </p>
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  description,
  icon: Icon,
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Icon size={19} className="text-slate-700" />
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-0.5 text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PycdStats() {
  /* =======================================================
     LIVE WEBSITE VISIT COUNTER
  ======================================================= */

  const [liveVisitors, setLiveVisitors] = useState(38);

  const [todayVisits, setTodayVisits] = useState(1560);

  useEffect(() => {
    const visitorInterval = setInterval(() => {
      setLiveVisitors((current) => {
        const variation =
          Math.floor(Math.random() * 7) - 3;

        return Math.max(
          20,
          current + variation
        );
      });
    }, 4000);

    const visitInterval = setInterval(() => {
      setTodayVisits((current) => current + 1);
    }, 7000);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(visitInterval);
    };
  }, []);

  /* =======================================================
     STATISTICS
  ======================================================= */

  const stats = useMemo(
    () => [
      {
        title: "Registered Youth",
        value: 24850,
        change: "+12.8%",
        description: "Across 13 Youth Centres",
        icon: Users,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
      },
      {
        title: "Active Volunteers",
        value: 4260,
        change: "+8.4%",
        description: "Currently active volunteers",
        icon: UserRoundCheck,
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-50",
      },
      {
        title: "Youth Centres",
        value: 13,
        change: "+2",
        description: "Active centres nationwide",
        icon: MapPin,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-50",
      },
      {
        title: "Programmes",
        value: 186,
        change: "+16.2%",
        description: "Programmes delivered",
        icon: CalendarCheck,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-50",
      },
    ],
    []
  );

  /* =======================================================
     TOTAL PROGRAMME PARTICIPATION
  ======================================================= */

  const totalParticipants = programmeData.reduce(
    (total, item) => total + item.participants,
    0
  );

  return (
    <div className="w-full space-y-6">
      {/* ===================================================
          PAGE HEADER
      =================================================== */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ChartNoAxesCombined
              size={22}
              className="text-blue-600"
            />

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              PYCD Statistics
            </h1>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Overview of youth engagement, programmes,
            volunteers and Youth Centre performance.
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <span className="text-xs font-semibold text-emerald-700">
            System Live
          </span>
        </div>
      </div>

      {/* ===================================================
          MAIN STAT CARDS
      =================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>

      {/* ===================================================
          LIVE WEBSITE STATISTICS
      =================================================== */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Live Visitors */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Wifi size={21} />
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-300">
              Visitors Online
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {formatNumber(liveVisitors)}
              </span>

              <span className="text-xs text-slate-400">
                right now
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Users currently browsing the Youth Portal
            </p>
          </div>
        </div>

        {/* Daily Visits */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Eye
                size={21}
                className="text-blue-600"
              />
            </div>

            <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight size={13} />
              14.6%
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Today's Visits
          </p>

          <h3 className="mt-1 text-3xl font-bold text-slate-900">
            {formatNumber(todayVisits)}
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Total portal visits today
          </p>
        </div>

        {/* Engagement */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <Activity
                size={21}
                className="text-purple-600"
              />
            </div>

            <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight size={13} />
              6.2%
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Engagement Rate
          </p>

          <h3 className="mt-1 text-3xl font-bold text-slate-900">
            78.4%
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Youth actively engaging with the portal
          </p>
        </div>
      </div>

      {/* ===================================================
          REGISTRATION TREND + DAILY VISITS
      =================================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Registration Trend */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <SectionHeader
            title="Youth Registration Trend"
            description="Monthly youth and volunteer registration"
            icon={TrendingUp}
          />

          <div className="h-[320px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart
                data={registrationData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="youthGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2563eb"
                      stopOpacity={0.25}
                    />

                    <stop
                      offset="100%"
                      stopColor="#2563eb"
                      stopOpacity={0}
                    />
                  </linearGradient>

                  <linearGradient
                    id="volunteerGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#10b981"
                      stopOpacity={0.2}
                    />

                    <stop
                      offset="100%"
                      stopColor="#10b981"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                  }}
                />

                <Tooltip
                  content={<CustomTooltip />}
                />

                <Area
                  type="monotone"
                  dataKey="youth"
                  name="Youth"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="url(#youthGradient)"
                />

                <Area
                  type="monotone"
                  dataKey="volunteers"
                  name="Volunteers"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#volunteerGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 flex items-center gap-5 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              Youth
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Volunteers
            </div>
          </div>
        </div>

        {/* Daily Visits */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SectionHeader
            title="Daily Visits"
            description="Portal traffic this week"
            icon={Eye}
          />

          <div className="h-[320px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart
                data={dailyVisitsData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748b",
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  content={<CustomTooltip />}
                />

                <Line
                  type="monotone"
                  dataKey="visits"
                  name="Visits"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    strokeWidth: 2,
                    fill: "#ffffff",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Weekly average
              </span>

              <span className="text-sm font-bold text-slate-900">
                {formatNumber(
                  Math.round(
                    dailyVisitsData.reduce(
                      (sum, item) =>
                        sum + item.visits,
                      0
                    ) / dailyVisitsData.length
                  )
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================
          YOUTH CENTRE PERFORMANCE
      =================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeader
          title="Youth Centre Performance"
          description="Registered youth and active volunteers by centre"
          icon={MapPin}
        />

        <div className="h-[380px] w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={centreData}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 50,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="name"
                angle={-30}
                textAnchor="end"
                interval={0}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 11,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 12,
                }}
              />

              <Tooltip
                content={<CustomTooltip />}
              />

              <Bar
                dataKey="youth"
                name="Registered Youth"
                fill="#2563eb"
                radius={[5, 5, 0, 0]}
                maxBarSize={30}
              />

              <Bar
                dataKey="volunteers"
                name="Volunteers"
                fill="#10b981"
                radius={[5, 5, 0, 0]}
                maxBarSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===================================================
          DEMOGRAPHICS + PROGRAMMES
      =================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Gender Distribution */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SectionHeader
            title="Youth Demographics"
            description="Gender distribution of registered youth"
            icon={UsersRound}
          />

          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            <div className="h-[250px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                  >
                    {genderData.map(
                      (entry, index) => (
                        <Cell
                          key={`gender-${index}`}
                          fill={
                            [
                              "#2563eb",
                              "#ec4899",
                              "#94a3b8",
                            ][index]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip
                    content={<GenderTooltip />}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {genderData.map(
                (item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            [
                              "#2563eb",
                              "#ec4899",
                              "#94a3b8",
                            ][index],
                        }}
                      />

                      <span className="text-sm text-slate-600">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-slate-900">
                      {item.value}%
                    </span>
                  </div>
                )
              )}

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">
                  Total registered youth
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  24,850
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Programme Participation */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SectionHeader
            title="Programme Participation"
            description="Participation across major programme categories"
            icon={BarChart3}
          />

          <div className="space-y-4">
            {programmeData.map(
              (programme, index) => {
                const percentage =
                  Math.round(
                    (programme.participants /
                      totalParticipants) *
                      100
                  );

                return (
                  <div key={programme.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">
                        {programme.name}
                      </span>

                      <span className="text-xs font-semibold text-slate-500">
                        {formatNumber(
                          programme.participants
                        )}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor:
                            [
                              "#2563eb",
                              "#10b981",
                              "#7c3aed",
                              "#f97316",
                              "#ec4899",
                            ][index],
                        }}
                      />
                    </div>

                    <div className="mt-1 text-right text-[11px] text-slate-400">
                      {percentage}% of participation
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* ===================================================
          RECENT ACTIVITY + QUICK SUMMARY
      =================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <SectionHeader
            title="Recent Activity"
            description="Latest activity across the Youth Portal"
            icon={Activity}
          />

          <div className="divide-y divide-slate-100">
            {recentActivities.map(
              (activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={`${activity.title}-${index}`}
                    className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.iconClass}`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {activity.title}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-slate-500">
                        {activity.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs text-slate-400">
                      {activity.time}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* System Summary */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SectionHeader
            title="System Summary"
            description="Current portal status"
            icon={Activity}
          />

          <div className="space-y-4">
            <div className="rounded-xl bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-700">
                  Youth Centres
                </span>

                <MapPin
                  size={17}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-2 text-2xl font-bold text-blue-900">
                13
              </p>

              <p className="mt-1 text-xs text-blue-600">
                All centres operational
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-700">
                  Active Volunteers
                </span>

                <UserCheck
                  size={17}
                  className="text-emerald-600"
                />
              </div>

              <p className="mt-2 text-2xl font-bold text-emerald-900">
                4,260
              </p>

              <p className="mt-1 text-xs text-emerald-600">
                +8.4% this month
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-purple-700">
                  Certificates
                </span>

                <Award
                  size={17}
                  className="text-purple-600"
                />
              </div>

              <p className="mt-2 text-2xl font-bold text-purple-900">
                18,492
              </p>

              <p className="mt-1 text-xs text-purple-600">
                Generated digitally
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-orange-700">
                  Programmes
                </span>

                <CalendarCheck
                  size={17}
                  className="text-orange-600"
                />
              </div>

              <p className="mt-2 text-2xl font-bold text-orange-900">
                186
              </p>

              <p className="mt-1 text-xs text-orange-600">
                Delivered this year
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================
          FOOTER INFORMATION
      =================================================== */}

      <div className="flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          PYCD Youth Portal • Statistics Dashboard
        </p>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <span>
            Data updated in real time
          </span>
        </div>
      </div>
    </div>
  );
}