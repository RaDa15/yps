import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Info,
  Clock3,
  Send,
  Search,
  Filter,
  Mail,
  Users,
  CalendarDays,
} from "lucide-react";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "approval",
    title: "Volunteer application pending",
    message:
      "A new volunteer application from Tshering Dorji is waiting for your review.",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "activity",
    title: "Activity submission received",
    message:
      "The Youth Leadership Workshop activity report has been submitted for validation.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "info",
    title: "National activity announcement",
    message:
      "A new national Y-PEER activity has been announced for all network focal points.",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "success",
    title: "Service hours approved",
    message:
      "Service hours submitted by 8 volunteers have been successfully validated.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    type: "warning",
    title: "Upcoming activity reminder",
    message:
      "The Community Health Awareness Programme is scheduled for tomorrow.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    type: "info",
    title: "Network report reminder",
    message:
      "Your monthly network activity report is due in 5 days.",
    time: "2 days ago",
    unread: false,
  },
];

const NetworkNotifications = () => {
  const [notifications, setNotifications] = useState(
    INITIAL_NOTIFICATIONS
  );

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const getIcon = (type) => {
    switch (type) {
      case "approval":
        return (
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
        );

      case "activity":
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <CalendarDays className="w-5 h-5" />
          </div>
        );

      case "success":
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        );

      case "warning":
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock3 className="w-5 h-5" />
          </div>
        );

      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Info className="w-5 h-5" />
          </div>
        );
    }
  };

  const filteredNotifications = notifications.filter(
    (notification) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "unread" && notification.unread);

      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        notification.message
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    }
  );

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <p className="text-sm font-semibold text-emerald-600">
            Network Communication
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
            Notifications
          </h1>

          <p className="text-sm text-gray-500 mt-2 max-w-2xl">
            Stay updated on volunteer applications, activities,
            approvals, reports and important Y-PEER network announcements.
          </p>

        </div>

        <button
          onClick={markAllAsRead}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold transition"
        >
          <CheckCircle2 className="w-4 h-4" />
          Mark All as Read
        </button>

      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Total Notifications
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {notifications.length}
          </p>

        </div>

        <div className="bg-white border border-orange-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Unread
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {unreadCount}
          </p>

        </div>

        <div className="bg-white border border-emerald-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Communication Status
          </p>

          <p className="text-sm font-extrabold text-emerald-700 mt-2">
            All Systems Operational
          </p>

        </div>

      </div>

      {/* NOTIFICATION PANEL */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* TOOLBAR */}
        <div className="p-5 border-b border-gray-100">

          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

            {/* SEARCH */}
            <div className="relative flex-1 max-w-xl">

              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

            </div>

            {/* FILTER */}
            <div className="flex items-center gap-2">

              <Filter className="w-4 h-4 text-gray-400" />

              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                  filter === "all"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("unread")}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                  filter === "unread"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Unread
              </button>

            </div>

          </div>

        </div>

        {/* NOTIFICATION LIST */}
        <div className="divide-y divide-gray-100">

          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (

              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-5 flex gap-4 cursor-pointer transition hover:bg-gray-50 ${
                  notification.unread
                    ? "bg-emerald-50/30"
                    : "bg-white"
                }`}
              >

                {getIcon(notification.type)}

                <div className="flex-1 min-w-0">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <div className="flex items-center gap-2">

                        <h3 className="text-sm font-bold text-gray-900">
                          {notification.title}
                        </h3>

                        {notification.unread && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        )}

                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed mt-1.5">
                        {notification.message}
                      </p>

                    </div>

                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {notification.time}
                    </span>

                  </div>

                  {notification.type === "approval" && (
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        window.location.href =
                          "/network-focal-dashboard/approvals";
                      }}
                      className="mt-3 text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Review Application →
                    </button>
                  )}

                  {notification.type === "activity" && (
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        window.location.href =
                          "/network-focal-dashboard/activities";
                      }}
                      className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      View Activity →
                    </button>
                  )}

                </div>

              </div>

            ))
          ) : (

            <div className="py-16 text-center">

              <div className="w-14 h-14 rounded-2xl bg-gray-100 mx-auto flex items-center justify-center text-gray-400">
                <Bell className="w-6 h-6" />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mt-4">
                No notifications found
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Try changing your search or filter.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* COMMUNICATION CARD */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div className="flex items-start gap-4">

            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-extrabold text-lg">
                Network Communication
              </h2>

              <p className="text-sm text-emerald-50 mt-1 max-w-2xl">
                Send important announcements and updates directly
                to your network volunteers.
              </p>

            </div>

          </div>

          <button
            onClick={() =>
              (window.location.href =
                "/network-focal-dashboard/management")
            }
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 text-xs font-extrabold transition"
          >
            <Send className="w-4 h-4" />
            Send Broadcast
          </button>

        </div>

      </section>

    </div>
  );
};

export default NetworkNotifications;
