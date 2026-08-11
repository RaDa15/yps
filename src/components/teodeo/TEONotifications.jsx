import {
  Bell,
  CheckCircle,
  AlertTriangle,
  CalendarDays,
  FileText,
  Users,
  Clock,
  Info,
  Check,
} from "lucide-react";

const notifications = [
  {
    title: "Programme Approval Pending",
    message: "3 programmes from Youth Centres require your review.",
    type: "approval",
    time: "10 minutes ago",
    unread: true,
  },
  {
    title: "Monthly Report Submission",
    message: "Paro Youth Centre submitted monthly activity report.",
    type: "report",
    time: "2 hours ago",
    unread: true,
  },
  {
    title: "Volunteer Activity Update",
    message: "120 volunteer hours were recorded from Thimphu YC.",
    type: "volunteer",
    time: "Today",
    unread: false,
  },
  {
    title: "System Announcement",
    message: "National youth engagement campaign begins next week.",
    type: "system",
    time: "Yesterday",
    unread: false,
  },
  {
    title: "Youth Service Alert",
    message: "New out-of-school youth intervention cases added.",
    type: "alert",
    time: "Yesterday",
    unread: true,
  },
];

// ======================================================
// NOTIFICATION ICON
// ======================================================

const getIcon = (type) => {
  switch (type) {
    case "approval":
      return (
        <CheckCircle className="w-5 h-5 text-orange-600" />
      );

    case "report":
      return (
        <FileText className="w-5 h-5 text-blue-600" />
      );

    case "volunteer":
      return (
        <Users className="w-5 h-5 text-violet-600" />
      );

    case "system":
      return (
        <Info className="w-5 h-5 text-indigo-600" />
      );

    case "alert":
      return (
        <AlertTriangle className="w-5 h-5 text-red-600" />
      );

    default:
      return (
        <Bell className="w-5 h-5 text-gray-500" />
      );
  }
};

// ======================================================
// ICON BACKGROUND
// ======================================================

const getIconBackground = (type) => {
  switch (type) {
    case "approval":
      return "bg-orange-50";

    case "report":
      return "bg-blue-50";

    case "volunteer":
      return "bg-violet-50";

    case "system":
      return "bg-indigo-50";

    case "alert":
      return "bg-red-50";

    default:
      return "bg-gray-50";
  }
};

// ======================================================
// COMPONENT
// ======================================================

export default function TEONotifications() {
  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  return (
    <div className="space-y-6">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <Bell className="w-4 h-4" />
            Notification Center
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Notifications
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Monitor important updates from Youth Centres under
            your jurisdiction
          </p>
        </div>

        <div className="flex items-center gap-2">

          <span className="px-3 py-2 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold">
            {unreadCount} Unread
          </span>

        </div>

      </div>


      {/* ==================================================
          SUMMARY CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* UNREAD */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Unread Notifications
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {unreadCount}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>

          </div>

          <p className="text-xs text-gray-400 mt-3">
            Require your attention
          </p>

        </div>


        {/* PENDING ACTIONS */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pending Actions
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                12
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>

          </div>

          <p className="text-xs text-gray-400 mt-3">
            Approvals and reviews required
          </p>

        </div>


        {/* SYSTEM HEALTH */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                System Health
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                98%
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>

          </div>

          <p className="text-xs text-emerald-600 mt-3 font-medium">
            All major services operational
          </p>

        </div>

      </div>


      {/* ==================================================
          NOTIFICATION LIST
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl">

        {/* LIST HEADER */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 border-b border-gray-100">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Recent Notifications
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Latest updates and alerts from your jurisdiction
              </p>

            </div>

          </div>


          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              gap-2
              px-3
              py-2
              rounded-lg
              text-xs
              font-bold
              text-blue-600
              hover:bg-blue-50
              transition
            "
          >
            <Check className="w-4 h-4" />

            Mark all as read
          </button>

        </div>


        {/* NOTIFICATIONS */}

        <div className="divide-y divide-gray-100">

          {notifications.map((item, index) => (

            <div
              key={`${item.title}-${index}`}
              className={`
                p-5
                sm:p-6
                flex
                items-start
                gap-4
                transition
                hover:bg-gray-50
                ${
                  item.unread
                    ? "bg-blue-50/30"
                    : "bg-white"
                }
              `}
            >

              {/* ICON */}

              <div
                className={`
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  ${getIconBackground(item.type)}
                `}
              >
                {getIcon(item.type)}
              </div>


              {/* CONTENT */}

              <div className="flex-1 min-w-0">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">

                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      {item.unread && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                      )}

                    </div>

                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.message}
                    </p>

                  </div>


                  {/* TIME */}

                  <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">

                    <Clock className="w-3.5 h-3.5" />

                    {item.time}

                  </div>

                </div>


                {/* ACTION */}

                {item.type === "approval" && (
                  <button
                    type="button"
                    className="
                      mt-3
                      text-xs
                      font-bold
                      text-blue-600
                      hover:text-blue-700
                    "
                  >
                    Review programmes →
                  </button>
                )}

                {item.type === "report" && (
                  <button
                    type="button"
                    className="
                      mt-3
                      text-xs
                      font-bold
                      text-blue-600
                      hover:text-blue-700
                    "
                  >
                    View report →
                  </button>
                )}

                {item.type === "volunteer" && (
                  <button
                    type="button"
                    className="
                      mt-3
                      text-xs
                      font-bold
                      text-blue-600
                      hover:text-blue-700
                    "
                  >
                    View activity →
                  </button>
                )}

                {item.type === "alert" && (
                  <button
                    type="button"
                    className="
                      mt-3
                      text-xs
                      font-bold
                      text-blue-600
                      hover:text-blue-700
                    "
                  >
                    Review cases →
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ==================================================
          NOTIFICATION INFORMATION
      ================================================== */}

      <div className="
        bg-blue-50
        border
        border-blue-100
        rounded-2xl
        p-5
        flex
        items-start
        gap-3
      ">

        <div className="
          w-9
          h-9
          rounded-lg
          bg-white
          text-blue-600
          flex
          items-center
          justify-center
          flex-shrink-0
          shadow-sm
        ">
          <Info className="w-4 h-4" />
        </div>

        <div>

          <h3 className="text-sm font-bold text-gray-900">
            Notification Monitoring
          </h3>

          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Notifications keep you informed about programme
            approvals, centre reports, volunteer activities and
            youth service interventions requiring jurisdiction-level
            attention.
          </p>

        </div>

      </div>

    </div>
  );
}