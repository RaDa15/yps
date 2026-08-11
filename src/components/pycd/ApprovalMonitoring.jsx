import {
  ClipboardCheck,
  UserCheck,
  FileCheck,
  AlertTriangle,
  Database,
  Bell,
  Clock,
  CheckCircle,
} from "lucide-react";

const APPROVAL_DATA = [
  {
    type: "Volunteer Application",
    submitted: "Thimphu Youth Centre",
    count: 45,
    priority: "High",
  },
  {
    type: "Programme Approval",
    submitted: "Paro Youth Centre",
    count: 18,
    priority: "Medium",
  },
  {
    type: "Activity Report Review",
    submitted: "Sarpang Youth Centre",
    count: 12,
    priority: "Low",
  },
  {
    type: "Certificate Verification",
    submitted: "National Queue",
    count: 26,
    priority: "Medium",
  },
];

const ApprovalMonitoring = () => {
  return (
    <div className="space-y-6">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Approval & Compliance Monitoring
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          National workflow monitoring, approvals and system data quality
          tracking
        </p>
      </div>

      {/* =========================================================
          SUMMARY CARDS
      ========================================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Volunteer Pending */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-orange-50">
              <UserCheck className="w-5 h-5 text-orange-600" />
            </div>

            <p className="text-sm text-gray-500">
              Volunteer Pending
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            245
          </h2>

          <p className="text-xs text-orange-600 font-semibold mt-1">
            Requires review
          </p>

        </div>

        {/* Programme Approval */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-blue-50">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
            </div>

            <p className="text-sm text-gray-500">
              Programme Approval
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            35
          </h2>

          <p className="text-xs text-blue-600 font-semibold mt-1">
            Awaiting approval
          </p>

        </div>

        {/* Average Review Time */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-purple-50">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>

            <p className="text-sm text-gray-500">
              Average Review Time
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            2.5
            <span className="text-base font-medium text-gray-500 ml-1">
              Days
            </span>
          </h2>

          <p className="text-xs text-green-600 font-semibold mt-1">
            Within target
          </p>

        </div>

        {/* Data Completeness */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="p-2.5 rounded-xl bg-green-50">
              <Database className="w-5 h-5 text-green-600" />
            </div>

            <p className="text-sm text-gray-500">
              Data Completeness
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            96%
          </h2>

          <p className="text-xs text-green-600 font-semibold mt-1">
            System compliance maintained
          </p>

        </div>

      </div>

      {/* =========================================================
          NATIONAL APPROVAL QUEUE
      ========================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        {/* Queue Header */}
        <div className="flex items-center justify-between mb-5">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-blue-50">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                National Approval Queue
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Items awaiting administrative review or verification
              </p>
            </div>

          </div>

          <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
            {APPROVAL_DATA.length} Queues
          </span>

        </div>

        {/* Queue List */}
        <div className="space-y-3">

          {APPROVAL_DATA.map((item) => (
            <div
              key={item.type}
              className="
                border
                border-gray-100
                rounded-xl
                p-4
                hover:bg-gray-50
                transition-colors
              "
            >

              {/* Desktop:
                  Information | Pending | Priority | Review
              */}
              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[minmax(0,1fr)_90px_110px_100px]
                  items-center
                  gap-4
                "
              >

                {/* =============================================
                    QUEUE INFORMATION
                ============================================== */}

                <div className="flex items-start gap-4 min-w-0">

                  <div className="p-2.5 rounded-xl bg-gray-100 shrink-0">
                    <FileCheck className="w-5 h-5 text-gray-600" />
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-semibold text-gray-900 truncate">
                      {item.type}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1 truncate">
                      Submitted by{" "}
                      <span className="font-medium text-gray-700">
                        {item.submitted}
                      </span>
                    </p>

                  </div>

                </div>

                {/* =============================================
                    PENDING
                ============================================== */}

                <div className="text-center lg:text-left">

                  <p className="text-2xl font-bold text-gray-900 leading-none">
                    {item.count}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Pending
                  </p>

                </div>

                {/* =============================================
                    PRIORITY
                ============================================== */}

                <div className="flex justify-center lg:justify-start">

                  <span
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      min-w-[78px]
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      font-bold
                      ${
                        item.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : item.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }
                    `}
                  >
                    {item.priority}
                  </span>

                </div>

                {/* =============================================
                    REVIEW BUTTON
                ============================================== */}

                <div className="flex justify-center lg:justify-start">

                  <button
                    type="button"
                    className="
                      w-[90px]
                      px-4
                      py-2
                      bg-gray-900
                      text-white
                      text-sm
                      font-semibold
                      rounded-xl
                      hover:bg-gray-800
                      transition-colors
                    "
                  >
                    Review
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* =========================================================
          SYSTEM DATA QUALITY
      ========================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-xl bg-green-50">
            <Database className="w-5 h-5 text-green-600" />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              System Data Quality
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Overall completeness and compliance indicators
            </p>

          </div>

        </div>

        {/* Quality Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Data Completeness */}
          <div className="border border-gray-100 rounded-xl p-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Data Completeness
              </span>

              <span className="font-bold text-green-600">
                96%
              </span>

            </div>

            <div className="h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">

              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: "96%" }}
              />

            </div>

          </div>

          {/* Report Compliance */}
          <div className="border border-gray-100 rounded-xl p-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Report Compliance
              </span>

              <span className="font-bold text-blue-600">
                92%
              </span>

            </div>

            <div className="h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">

              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: "92%" }}
              />

            </div>

          </div>

          {/* Verification Rate */}
          <div className="border border-gray-100 rounded-xl p-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Verification Rate
              </span>

              <span className="font-bold text-purple-600">
                98%
              </span>

            </div>

            <div className="h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">

              <div
                className="h-full bg-purple-500 rounded-full"
                style={{ width: "98%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          CRITICAL NOTIFICATIONS
      ========================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        {/* Notification Header */}
        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-xl bg-red-50">
            <Bell className="w-5 h-5 text-red-600" />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              Critical Notifications
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              System alerts requiring administrative attention
            </p>

          </div>

        </div>

        {/* Notifications */}
        <div className="space-y-3">

          {/* Overdue Reports */}
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">

            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />

            <div>

              <p className="text-sm font-semibold text-gray-900">
                Overdue Quarterly Reports
              </p>

              <p className="text-sm text-gray-600 mt-1">
                3 Youth Centres have overdue quarterly reports.
              </p>

            </div>

          </div>

          {/* Volunteer Applications */}
          <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-xl">

            <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />

            <div>

              <p className="text-sm font-semibold text-gray-900">
                Volunteer Applications
              </p>

              <p className="text-sm text-gray-600 mt-1">
                45 volunteer applications are waiting for review.
              </p>

            </div>

          </div>

          {/* System Compliance */}
          <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">

            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />

            <div>

              <p className="text-sm font-semibold text-gray-900">
                System Compliance
              </p>

              <p className="text-sm text-gray-600 mt-1">
                System compliance rate is maintained above 95%.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ApprovalMonitoring;