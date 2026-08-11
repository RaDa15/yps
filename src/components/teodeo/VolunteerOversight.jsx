import {
  HeartHandshake,
  Users,
  Clock,
  Activity,
  CheckCircle,
  Building2,
} from "lucide-react";

// ======================================================
// CENTRE VOLUNTEER DATA
// ======================================================

const centreVolunteerData = [
  {
    centre: "Thimphu Youth Centre",
    volunteers: 420,
    hours: "6,850 hrs",
    activities: 96,
    rate: "94%",
  },
  {
    centre: "Paro Youth Centre",
    volunteers: 315,
    hours: "4,620 hrs",
    activities: 74,
    rate: "89%",
  },
  {
    centre: "Chukha Youth Centre",
    volunteers: 260,
    hours: "3,850 hrs",
    activities: 61,
    rate: "86%",
  },
  {
    centre: "Punakha Youth Centre",
    volunteers: 210,
    hours: "2,980 hrs",
    activities: 45,
    rate: "82%",
  },
];

// ======================================================
// ACTIVITY VALIDATION DATA
// ======================================================

const activityValidation = [
  {
    activity: "Community Cleaning Campaign",
    centre: "Thimphu YC",
    submitted: 120,
    validated: 120,
    status: "Completed",
  },
  {
    activity: "Youth Mentorship Programme",
    centre: "Paro YC",
    submitted: 80,
    validated: 65,
    status: "Pending",
  },
  {
    activity: "Environmental Awareness",
    centre: "Chukha YC",
    submitted: 55,
    validated: 55,
    status: "Completed",
  },
];

// ======================================================
// COMPONENT
// ======================================================

export default function VolunteerOversight() {
  // ----------------------------------------------------
  // KPI CALCULATIONS
  // ----------------------------------------------------

  const totalVolunteers = centreVolunteerData.reduce(
    (total, item) => total + item.volunteers,
    0
  );

  const totalActivities = centreVolunteerData.reduce(
    (total, item) => total + item.activities,
    0
  );

  const totalValidated = activityValidation.reduce(
    (total, item) => total + item.validated,
    0
  );

  const totalSubmitted = activityValidation.reduce(
    (total, item) => total + item.submitted,
    0
  );

  const validationRate =
    totalSubmitted > 0
      ? Math.round((totalValidated / totalSubmitted) * 100)
      : 0;

  return (
    <div className="space-y-6">
      {/* ==================================================
          HEADER
      ================================================== */}

      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
          <HeartHandshake className="w-4 h-4" />

          <span>Volunteer Programme Oversight</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Volunteer Oversight
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Monitor volunteer contribution and activity engagement across Youth
          Centres
        </p>
      </div>

      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Volunteers */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
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
              <Users className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-green-600">
              Active
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Active Volunteers
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {totalVolunteers.toLocaleString()}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Across monitored Youth Centres
          </p>
        </div>

        {/* Service Hours */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-purple-50
                text-purple-600
                flex
                items-center
                justify-center
              "
            >
              <Clock className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-purple-600">
              Contribution
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Service Hours
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            18,300
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Recorded volunteer hours
          </p>
        </div>

        {/* Activities */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-emerald-50
                text-emerald-600
                flex
                items-center
                justify-center
              "
            >
              <Activity className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-emerald-600">
              Completed
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Activities
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {totalActivities}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Volunteer activities recorded
          </p>
        </div>

        {/* Validation Rate */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-orange-50
                text-orange-600
                flex
                items-center
                justify-center
              "
            >
              <CheckCircle className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-orange-600">
              Validation
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Activity Validation
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {validationRate}%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Activities successfully validated
          </p>
        </div>
      </div>

      {/* ==================================================
          CENTRE VOLUNTEER PERFORMANCE
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
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
            <Building2 className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Volunteer Performance by Youth Centre
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Comparative volunteer engagement and contribution
            </p>
          </div>
        </div>

        {/* Responsive Table */}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400">
                <th className="text-left pb-4 font-medium">
                  Youth Centre
                </th>

                <th className="text-center pb-4 font-medium">
                  Volunteers
                </th>

                <th className="text-center pb-4 font-medium">
                  Service Hours
                </th>

                <th className="text-center pb-4 font-medium">
                  Activities
                </th>

                <th className="text-right pb-4 font-medium">
                  Engagement Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {centreVolunteerData.map((item) => (
                <tr
                  key={item.centre}
                  className="
                    border-b
                    border-gray-100
                    last:border-none
                    hover:bg-gray-50
                    transition
                  "
                >
                  {/* Centre */}

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
                        <Building2 className="w-4 h-4" />
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.centre}
                        </p>

                        <p className="text-xs text-gray-400">
                          Youth Centre
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Volunteers */}

                  <td className="text-center font-medium">
                    {item.volunteers.toLocaleString()}
                  </td>

                  {/* Hours */}

                  <td className="text-center">
                    {item.hours}
                  </td>

                  {/* Activities */}

                  <td className="text-center">
                    {item.activities}
                  </td>

                  {/* Rate */}

                  <td className="text-right">
                    <span
                      className={`
                        inline-flex
                        items-center
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          Number.parseInt(item.rate) >= 90
                            ? "bg-emerald-50 text-emerald-700"
                            : Number.parseInt(item.rate) >= 80
                            ? "bg-blue-50 text-blue-700"
                            : "bg-orange-50 text-orange-700"
                        }
                      `}
                    >
                      {item.rate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================================================
          VALIDATION MONITORING
      ================================================== */}

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
            <CheckCircle className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Volunteer Activity Validation Status
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Monitor submitted and validated volunteer activities
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {activityValidation.map((item) => {
            const validationPercentage =
              item.submitted > 0
                ? Math.round(
                    (item.validated / item.submitted) * 100
                  )
                : 0;

            return (
              <div
                key={item.activity}
                className="
                  border
                  border-gray-100
                  rounded-xl
                  p-4
                  hover:bg-gray-50
                  transition
                "
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Activity Information */}

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.activity}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.centre}
                    </p>
                  </div>

                  {/* Validation Progress */}

                  <div className="w-full lg:w-56">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">
                        Validation Progress
                      </span>

                      <span className="text-xs font-semibold text-gray-700">
                        {validationPercentage}%
                      </span>
                    </div>

                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`
                          h-full
                          rounded-full
                          ${
                            validationPercentage === 100
                              ? "bg-emerald-500"
                              : "bg-orange-500"
                          }
                        `}
                        style={{
                          width: `${validationPercentage}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Count */}

                  <div className="text-sm text-gray-700">
                    <span className="font-bold">
                      {item.validated}
                    </span>

                    <span className="text-gray-400">
                      {" "}
                      / {item.submitted}
                    </span>
                  </div>

                  {/* Status */}

                  <span
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      font-bold
                      ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================
          OVERSIGHT SUMMARY
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
            <HeartHandshake className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Volunteer Oversight Summary
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Volunteer engagement remains strong across the monitored
              Youth Centres. Thimphu Youth Centre currently records the
              highest volunteer participation and activity engagement,
              while pending validation activities should be reviewed
              to maintain accurate reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}