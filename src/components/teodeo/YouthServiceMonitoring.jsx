import {
  Users,
  GraduationCap,
  UserRoundCheck,
  ArrowRightLeft,
  Activity,
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock3,
} from "lucide-react";

// ======================================================
// CENTRE DATA
// ======================================================

const centres = [
  {
    name: "Thimphu Youth Centre",
    location: "Thimphu",
    registered: 4200,
    school: 3500,
    outSchool: 700,
    services: 92,
  },
  {
    name: "Paro Youth Centre",
    location: "Paro",
    registered: 3150,
    school: 2700,
    outSchool: 450,
    services: 88,
  },
  {
    name: "Chukha Youth Centre",
    location: "Chukha",
    registered: 2700,
    school: 2100,
    outSchool: 600,
    services: 84,
  },
  {
    name: "Punakha Youth Centre",
    location: "Punakha",
    registered: 2200,
    school: 1800,
    outSchool: 400,
    services: 81,
  },
];

// ======================================================
// TRANSFER REQUEST DATA
// ======================================================

const transferRequests = [
  {
    id: "TR-001",
    from: "Paro YC",
    to: "Thimphu YC",
    date: "08 Aug 2026",
    status: "Approved",
  },
  {
    id: "TR-002",
    from: "Sarpang YC",
    to: "Chukha YC",
    date: "07 Aug 2026",
    status: "Pending",
  },
  {
    id: "TR-003",
    from: "Wangdue YC",
    to: "Punakha YC",
    date: "05 Aug 2026",
    status: "Completed",
  },
];

// ======================================================
// COMPONENT
// ======================================================

export default function YouthServiceMonitoring() {
  // ====================================================
  // NATIONAL TOTALS
  // ====================================================

  const totalRegistered = centres.reduce(
    (total, centre) => total + centre.registered,
    0
  );

  const totalSchool = centres.reduce(
    (total, centre) => total + centre.school,
    0
  );

  const totalOutSchool = centres.reduce(
    (total, centre) => total + centre.outSchool,
    0
  );

  const averageServices =
    centres.reduce((total, centre) => total + centre.services, 0) /
    centres.length;

  // ====================================================
  // OUT-OF-SCHOOL YOUTH
  // ====================================================

  const outSchoolPercentage =
    totalRegistered > 0
      ? Math.round((totalOutSchool / totalRegistered) * 100)
      : 0;

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
            Youth Service Monitoring
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Monitor youth registration, services and intervention progress
            across your jurisdiction
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3">
          <Activity className="w-4 h-4 text-blue-600" />

          <span className="text-sm font-medium text-gray-700">
            Jurisdiction Overview
          </span>
        </div>
      </div>

      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <MonitoringKPI
          title="Registered Youth"
          value={totalRegistered.toLocaleString()}
          description="Across jurisdiction"
          change="+8.4%"
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <MonitoringKPI
          title="In-School Youth"
          value={totalSchool.toLocaleString()}
          description="Currently enrolled"
          change="+5.2%"
          icon={GraduationCap}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <MonitoringKPI
          title="Out-of-School Youth"
          value={totalOutSchool.toLocaleString()}
          description={`${outSchoolPercentage}% of registered youth`}
          change="-4.2%"
          icon={UserRoundCheck}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
        />

        <MonitoringKPI
          title="Service Utilization"
          value={`${averageServices.toFixed(1)}%`}
          description="Jurisdiction average"
          change="+5.1%"
          icon={Activity}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />
      </div>

      {/* ==================================================
          CENTRE SERVICE OVERVIEW
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
              <MapPin className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Youth Centre Service Overview
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Registration and service utilization across centres
              </p>
            </div>
          </div>

          <span className="text-xs text-gray-400">
            {centres.length} Youth Centres
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr
                className="
                  border-b
                  border-gray-100
                  text-xs
                  text-gray-400
                "
              >
                <th className="text-left pb-4 font-medium">
                  Youth Centre
                </th>

                <th className="text-center pb-4 font-medium">
                  Registered
                </th>

                <th className="text-center pb-4 font-medium">
                  In-School
                </th>

                <th className="text-center pb-4 font-medium">
                  Out-of-School
                </th>

                <th className="text-center pb-4 font-medium">
                  Service Utilization
                </th>

                <th className="text-right pb-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {centres.map((centre) => (
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
                      <div
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-blue-50
                          text-blue-600
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <MapPin className="w-4 h-4" />
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

                  {/* REGISTERED */}

                  <td className="text-center font-medium">
                    {centre.registered.toLocaleString()}
                  </td>

                  {/* SCHOOL */}

                  <td className="text-center">
                    {centre.school.toLocaleString()}
                  </td>

                  {/* OUT OF SCHOOL */}

                  <td className="text-center">
                    <span
                      className={`
                        font-semibold
                        ${
                          centre.outSchool >= 600
                            ? "text-orange-600"
                            : "text-gray-700"
                        }
                      `}
                    >
                      {centre.outSchool.toLocaleString()}
                    </span>
                  </td>

                  {/* SERVICE */}

                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`
                            h-full
                            rounded-full
                            ${
                              centre.services >= 90
                                ? "bg-emerald-500"
                                : centre.services >= 80
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }
                          `}
                          style={{
                            width: `${centre.services}%`,
                          }}
                        />
                      </div>

                      <span className="font-bold text-gray-800">
                        {centre.services}%
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}

                  <td className="text-right">
                    <ServiceStatus value={centre.services} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================================================
          OUT OF SCHOOL MONITORING
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* INTERVENTION OVERVIEW */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-orange-50
                text-orange-600
                flex
                items-center
                justify-center
              "
            >
              <UserRoundCheck className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Out-of-School Youth Intervention Tracking
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Monitoring targeted support and intervention coverage
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <ProgressRow
              label="Youth Identified"
              value="2,150"
              percentage={100}
              color="bg-blue-500"
            />

            <ProgressRow
              label="Receiving Services"
              value="1,720"
              percentage={80}
              color="bg-emerald-500"
            />

            <ProgressRow
              label="Under Active Intervention"
              value="1,340"
              percentage={62}
              color="bg-orange-500"
            />

            <ProgressRow
              label="Successfully Re-engaged"
              value="860"
              percentage={40}
              color="bg-violet-500"
            />
          </div>
        </div>

        {/* INTERVENTION INSIGHT */}

        <div
          className="
            bg-gradient-to-br
            from-orange-50
            to-amber-50
            border
            border-orange-100
            rounded-2xl
            p-6
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-white
                text-orange-600
                flex
                items-center
                justify-center
                shadow-sm
                flex-shrink-0
              "
            >
              <AlertTriangle className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Intervention Attention
              </h2>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Out-of-school youth represent{" "}
                <strong>{outSchoolPercentage}%</strong> of registered youth
                across the jurisdiction. Continued monitoring is recommended,
                particularly for centres with higher OOS youth populations.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-xl p-4">
              <p className="text-xs text-gray-500">
                Total OOS Youth
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-1">
                {totalOutSchool.toLocaleString()}
              </p>
            </div>

            <div className="bg-white/80 rounded-xl p-4">
              <p className="text-xs text-gray-500">
                Intervention Coverage
              </p>

              <p className="text-2xl font-bold text-orange-600 mt-1">
                80%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          MEMBER TRANSFER MONITORING
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-indigo-50
                text-indigo-600
                flex
                items-center
                justify-center
              "
            >
              <ArrowRightLeft className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Member Transfer Monitoring
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Recent youth centre transfer requests and status
              </p>
            </div>
          </div>

          <span className="text-xs text-gray-400">
            Recent Requests
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr
                className="
                  border-b
                  border-gray-100
                  text-xs
                  text-gray-400
                "
              >
                <th className="text-left pb-4 font-medium">
                  Request ID
                </th>

                <th className="text-left pb-4 font-medium">
                  Transfer
                </th>

                <th className="text-left pb-4 font-medium">
                  Date
                </th>

                <th className="text-right pb-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {transferRequests.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-gray-100
                    last:border-none
                    hover:bg-gray-50
                    transition
                  "
                >
                  <td className="py-4">
                    <span className="font-semibold text-gray-800">
                      {item.id}
                    </span>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">
                        {item.from}
                      </span>

                      <ArrowRightLeft className="w-4 h-4 text-gray-400" />

                      <span className="font-medium text-gray-700">
                        {item.to}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-gray-500">
                    {item.date}
                  </td>

                  <td className="py-4 text-right">
                    <TransferStatus status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================================================
          SERVICE INSIGHTS
      ================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ServiceInsight
          icon={TrendingUp}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
          title="Strong Service Utilization"
          text="Thimphu Youth Centre currently records the highest service utilization at 92%."
        />

        <ServiceInsight
          icon={CheckCircle}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          title="Good Coverage"
          text="Most Youth Centres are maintaining service utilization above 80%."
        />

        <ServiceInsight
          icon={AlertTriangle}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
          title="OOS Youth Attention"
          text="Chukha Youth Centre has a comparatively higher out-of-school youth population and may require additional intervention."
        />
      </div>

      {/* ==================================================
          EXECUTIVE SUMMARY
      ================================================== */}

      <div
        className="
          bg-gradient-to-r
          from-blue-50
          to-indigo-50
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
            <Activity className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Jurisdiction Service Insight
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Youth service utilization remains positive across the
              jurisdiction, with an average utilization of{" "}
              <strong>{averageServices.toFixed(1)}%</strong>. While the
              majority of registered youth are currently in school,
              out-of-school youth continue to require targeted support and
              re-engagement interventions. Transfer activity should also be
              monitored to ensure continuity of youth services.
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

function MonitoringKPI({
  title,
  value,
  description,
  change,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div
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
            ${iconBg}
            ${iconColor}
            flex
            items-center
            justify-center
          `}
        >
          <Icon className="w-5 h-5" />
        </div>

        <span
          className={`
            text-xs
            font-semibold
            flex
            items-center
            gap-1
            ${
              change.startsWith("-")
                ? "text-orange-600"
                : "text-emerald-600"
            }
          `}
        >
          {change.startsWith("-") ? (
            <Clock3 className="w-3.5 h-3.5" />
          ) : (
            <TrendingUp className="w-3.5 h-3.5" />
          )}

          {change}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-5">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-1">
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}

// ======================================================
// SERVICE STATUS
// ======================================================

function ServiceStatus({ value }) {
  const status =
    value >= 90
      ? {
          label: "Excellent",
          className: "bg-emerald-50 text-emerald-700",
        }
      : value >= 80
      ? {
          label: "Good",
          className: "bg-blue-50 text-blue-700",
        }
      : {
          label: "Needs Attention",
          className: "bg-orange-50 text-orange-700",
        };

  return (
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
        ${status.className}
      `}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />

      {status.label}
    </span>
  );
}

// ======================================================
// PROGRESS ROW
// ======================================================

function ProgressRow({
  label,
  value,
  percentage,
  color,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {label}
        </span>

        <span className="text-sm font-bold text-gray-900">
          {value}
        </span>
      </div>

      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">
        {percentage}% of identified youth
      </p>
    </div>
  );
}

// ======================================================
// TRANSFER STATUS
// ======================================================

function TransferStatus({ status }) {
  const statusConfig = {
    Approved: {
      className: "bg-emerald-50 text-emerald-700",
      icon: CheckCircle,
    },

    Pending: {
      className: "bg-orange-50 text-orange-700",
      icon: Clock3,
    },

    Completed: {
      className: "bg-blue-50 text-blue-700",
      icon: CheckCircle,
    },
  };

  const config =
    statusConfig[status] || statusConfig.Pending;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        px-3
        py-1.5
        rounded-full
        text-xs
        font-semibold
        ${config.className}
      `}
    >
      <Icon className="w-3.5 h-3.5" />

      {status}
    </span>
  );
}

// ======================================================
// INSIGHT CARD
// ======================================================

function ServiceInsight({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  text,
}) {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-5
      "
    >
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

      <p
        className="
          text-sm
          text-gray-500
          mt-2
          leading-relaxed
        "
      >
        {text}
      </p>
    </div>
  );
}