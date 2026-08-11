import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Users,
  Building2,
  CalendarDays,
  Check,
  Trash2,
} from "lucide-react";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "warning",
    title: "Pending Programme Approvals",
    message:
      "5 programmes from Youth Centres are waiting for national review.",
    time: "10 minutes ago",
    unread: true,
    icon: CalendarDays,
  },
  {
    id: 2,
    type: "success",
    title: "Youth Registration Update",
    message:
      "248 new youth registrations were completed across all Youth Centres.",
    time: "1 hour ago",
    unread: true,
    icon: Users,
  },
  {
    id: 3,
    type: "info",
    title: "Youth Centre Report Available",
    message:
      "The latest monthly performance report has been submitted by Thimphu YC.",
    time: "3 hours ago",
    unread: true,
    icon: Building2,
  },
  {
    id: 4,
    type: "warning",
    title: "Data Quality Alert",
    message:
      "3 Youth Centres have incomplete demographic records.",
    time: "Yesterday",
    unread: false,
    icon: AlertTriangle,
  },
  {
    id: 5,
    type: "success",
    title: "Volunteer Activity Approved",
    message:
      "12 volunteer activities were approved by the relevant authorities.",
    time: "Yesterday",
    unread: false,
    icon: CheckCircle2,
  },
];

const TYPE_STYLES = {
  warning: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
  success: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  info: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(
    INITIAL_NOTIFICATIONS
  );

  /* =========================================================
     MARK SINGLE NOTIFICATION AS READ
  ========================================================= */

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: false,
            }
          : item
      )
    );
  };

  /* =========================================================
     MARK ALL AS READ
  ========================================================= */

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  /* =========================================================
     DELETE NOTIFICATION
  ========================================================= */

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* =========================================================
     COUNTERS
  ========================================================= */

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Notifications
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                System-wide notifications and critical updates
              </p>

            </div>

          </div>

        </div>

        <button
          type="button"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            bg-blue-600
            text-white
            text-sm
            font-semibold
            hover:bg-blue-700
            disabled:bg-gray-200
            disabled:text-gray-400
            disabled:cursor-not-allowed
            transition
          "
        >
          <Check className="w-4 h-4" />
          Mark All as Read
        </button>

      </div>

      {/* =====================================================
          SUMMARY CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Total Notifications */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Total Notifications
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {notifications.length}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            System notifications
          </p>

        </div>

        {/* Unread */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Unread
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {unreadCount}
          </h2>

          <p className="text-xs text-amber-600 font-semibold mt-1">
            {unreadCount > 0
              ? "Requires attention"
              : "All notifications read"}
          </p>

        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            System Status
          </p>

          <h2 className="text-lg font-bold text-emerald-600 mt-2">
            All Systems Operational
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            No critical system outage detected
          </p>

        </div>

      </div>

      {/* =====================================================
          NOTIFICATION LIST
      ===================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        {/* List Header */}
        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>

              <h2 className="text-lg font-bold text-gray-900">
                Recent Notifications
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Updates requiring attention from the PYCD Focal Point
              </p>

            </div>

            {unreadCount > 0 && (
              <span className="inline-flex w-fit px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                {unreadCount} Unread
              </span>
            )}

          </div>

        </div>

        {/* Notification Items */}
        <div className="divide-y divide-gray-100">

          {notifications.map((notification) => {
            const Icon = notification.icon;

            const style =
              TYPE_STYLES[notification.type] ||
              TYPE_STYLES.info;

            return (
              <div
                key={notification.id}
                className={`
                  p-5
                  transition-colors
                  ${
                    notification.unread
                      ? "bg-blue-50/30"
                      : "bg-white"
                  }
                  hover:bg-gray-50
                `}
              >

                <div className="flex flex-col lg:flex-row lg:items-center gap-4">

                  {/* =========================================
                      NOTIFICATION CONTENT
                  ========================================== */}

                  <div className="flex items-start gap-4 flex-1 min-w-0">

                    {/* Icon */}
                    <div
                      className={`
                        w-11
                        h-11
                        rounded-xl
                        ${style.bg}
                        ${style.text}
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">

                      <div className="flex items-center gap-2">

                        <h3 className="text-sm font-bold text-gray-900">
                          {notification.title}
                        </h3>

                        {notification.unread && (
                          <span
                            className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"
                            title="Unread"
                          />
                        )}

                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        {notification.message}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>

                    </div>

                  </div>

                  {/* =========================================
                      ACTIONS
                  ========================================== */}

                  <div className="flex items-center gap-2 lg:flex-shrink-0">

                    {notification.unread && (
                      <button
                        type="button"
                        onClick={() =>
                          markAsRead(notification.id)
                        }
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          px-3
                          py-2
                          rounded-lg
                          bg-blue-50
                          text-blue-600
                          hover:bg-blue-100
                          text-xs
                          font-semibold
                          transition
                        "
                      >
                        <Check className="w-3.5 h-3.5" />
                        Mark Read
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        deleteNotification(notification.id)
                      }
                      className="
                        p-2
                        rounded-lg
                        text-gray-400
                        hover:bg-red-50
                        hover:text-red-600
                        transition
                      "
                      title="Delete notification"
                      aria-label={`Delete ${notification.title}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

          {/* =================================================
              EMPTY STATE
          ================================================== */}

          {notifications.length === 0 && (
            <div className="py-16 px-6 text-center">

              <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center">
                <Bell className="w-7 h-7 text-gray-400" />
              </div>

              <p className="text-sm font-semibold text-gray-600 mt-4">
                No notifications
              </p>

              <p className="text-xs text-gray-400 mt-1">
                You're all caught up.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Notifications;