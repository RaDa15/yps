import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Users,
  Activity,
  CalendarDays,
  Megaphone,
  Check,
  Trash2,
  Send,
  Filter,
} from "lucide-react";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "activity",
    title: "New Network Activity Submitted",
    message:
      "Thimphu Youth Led Group Network submitted a national-level youth awareness activity for review.",
    time: "15 minutes ago",
    unread: true,
    priority: "High",
  },
  {
    id: 2,
    type: "volunteer",
    title: "Volunteer Milestone Reached",
    message:
      "25 volunteers across Youth Led Group networks have completed more than 50 verified service hours.",
    time: "1 hour ago",
    unread: true,
    priority: "Normal",
  },
  {
    id: 3,
    type: "network",
    title: "Network Performance Update",
    message:
      "Paro Youth Led Group Network participation has decreased by 2.1% compared with the previous month.",
    time: "3 hours ago",
    unread: true,
    priority: "Medium",
  },
  {
    id: 4,
    type: "calendar",
    title: "Upcoming National Activity",
    message:
      "National Youth Led Group Volunteer Orientation is scheduled for 18 August 2026.",
    time: "Yesterday",
    unread: false,
    priority: "Normal",
  },
  {
    id: 5,
    type: "system",
    title: "Monthly Report Available",
    message:
      "The July 2026 consolidated Youth Led Group network report is ready for review.",
    time: "Yesterday",
    unread: false,
    priority: "Normal",
  },
];

const NationalNotifications = () => {
  const [notifications, setNotifications] = useState(
    INITIAL_NOTIFICATIONS
  );

  const [filter, setFilter] = useState("All");

  const [showBroadcast, setShowBroadcast] = useState(false);

  const [broadcastMessage, setBroadcastMessage] = useState("");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const getIcon = (type) => {
    switch (type) {
      case "activity":
        return Activity;

      case "volunteer":
        return Users;

      case "network":
        return AlertTriangle;

      case "calendar":
        return CalendarDays;

      case "system":
        return CheckCircle2;

      default:
        return Bell;
    }
  };

  const getIconStyle = (type) => {
    switch (type) {
      case "activity":
        return "bg-blue-50 text-blue-600";

      case "volunteer":
        return "bg-emerald-50 text-emerald-600";

      case "network":
        return "bg-amber-50 text-amber-600";

      case "calendar":
        return "bg-violet-50 text-violet-600";

      case "system":
        return "bg-slate-100 text-slate-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
            }
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

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "Unread") {
      return notification.unread;
    }

    if (filter === "Activities") {
      return notification.type === "activity";
    }

    if (filter === "Networks") {
      return notification.type === "network";
    }

    if (filter === "Volunteers") {
      return notification.type === "volunteer";
    }

    return true;
  });

  const sendBroadcast = () => {
    if (!broadcastMessage.trim()) return;

    alert(
      "Broadcast message prepared for all Y-PEER network volunteers."
    );

    setBroadcastMessage("");
    setShowBroadcast(false);
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <Bell size={16} />
            National Communication
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Notifications
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Monitor important updates, alerts and activities across
            Youth Led Group networks.
          </p>

        </div>


        <div className="flex items-center gap-2">

          <button
            onClick={markAllAsRead}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-700
              text-sm
              font-semibold
              hover:bg-gray-50
              transition
            "
          >
            <Check size={16} />
            Mark all read
          </button>

          <button
            onClick={() => setShowBroadcast(true)}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            <Megaphone size={16} />
            Broadcast Message
          </button>

        </div>

      </div>


      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs text-gray-500">
                Total Notifications
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {notifications.length}
              </h2>
            </div>

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bell size={20} />
            </div>

          </div>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs text-gray-500">
                Unread
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {unreadCount}
              </h2>
            </div>

            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <AlertTriangle size={20} />
            </div>

          </div>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs text-gray-500">
                Network Updates
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {
                  notifications.filter(
                    (notification) =>
                      notification.type === "network"
                  ).length
                }
              </h2>
            </div>

            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Activity size={20} />
            </div>

          </div>

        </div>

      </div>


      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Filter size={16} />
            Filter Notifications
          </div>


          <div className="flex flex-wrap gap-2">

            {[
              "All",
              "Unread",
              "Activities",
              "Networks",
              "Volunteers",
            ].map((option) => (

              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`
                  px-3
                  py-2
                  rounded-lg
                  text-xs
                  font-semibold
                  transition
                  ${
                    filter === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {option}
              </button>

            ))}

          </div>

        </div>

      </div>


      {/* NOTIFICATION LIST */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <h2 className="text-lg font-bold text-gray-900">
            Recent Notifications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest national and network-level updates.
          </p>

        </div>


        <div>

          {filteredNotifications.length === 0 ? (

            <div className="py-16 text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <Bell size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-700 mt-4">
                No notifications found
              </p>

              <p className="text-xs text-gray-400 mt-1">
                There are no notifications matching the selected filter.
              </p>

            </div>

          ) : (

            filteredNotifications.map((notification) => {

              const Icon = getIcon(notification.type);

              return (
                <div
                  key={notification.id}
                  className={`
                    p-5
                    border-b
                    border-gray-100
                    flex
                    flex-col
                    md:flex-row
                    md:items-start
                    gap-4
                    transition
                    ${
                      notification.unread
                        ? "bg-blue-50/30"
                        : "bg-white"
                    }
                    hover:bg-gray-50
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
                      ${getIconStyle(notification.type)}
                    `}
                  >
                    <Icon size={20} />
                  </div>


                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-sm font-bold text-gray-900">
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}

                      <span
                        className={`
                          px-2
                          py-0.5
                          rounded-full
                          text-[10px]
                          font-bold
                          ${
                            notification.priority === "High"
                              ? "bg-red-50 text-red-700"
                              : notification.priority === "Medium"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-gray-100 text-gray-600"
                          }
                        `}
                      >
                        {notification.priority}
                      </span>

                    </div>


                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {notification.message}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {notification.time}
                    </p>

                  </div>


                  {/* ACTIONS */}
                  <div className="flex items-center gap-2">

                    {notification.unread && (

                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="
                          p-2
                          rounded-lg
                          bg-blue-50
                          text-blue-600
                          hover:bg-blue-100
                          transition
                        "
                        title="Mark as read"
                      >
                        <Check size={15} />
                      </button>

                    )}


                    <button
                      onClick={() =>
                        deleteNotification(notification.id)
                      }
                      className="
                        p-2
                        rounded-lg
                        bg-gray-100
                        text-gray-500
                        hover:bg-red-50
                        hover:text-red-600
                        transition
                      "
                      title="Delete notification"
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>

                </div>
              );
            })

          )}

        </div>

      </div>


      {/* BROADCAST MODAL */}
      {showBroadcast && (

        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">

            {/* MODAL HEADER */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  Broadcast Message
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Send a communication to Y-PEER network volunteers.
                </p>

              </div>

              <button
                onClick={() => setShowBroadcast(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

            </div>


            {/* MODAL BODY */}
            <div className="p-6 space-y-4">

              <div>

                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Target Audience
                </label>

                <select
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                >
                  <option>All Youth Led Group Volunteers</option>
                  <option>All Network Focal Points</option>
                  <option>Specific Youth Led Group Network</option>
                </select>

              </div>


              <div>

                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Message
                </label>

                <textarea
                  rows="5"
                  value={broadcastMessage}
                  onChange={(e) =>
                    setBroadcastMessage(e.target.value)
                  }
                  placeholder="Write your national communication..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    text-sm
                    resize-none
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

              </div>

            </div>


            {/* MODAL FOOTER */}
            <div className="p-6 border-t border-gray-100 flex justify-end gap-2">

              <button
                onClick={() => setShowBroadcast(false)}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  font-semibold
                  text-gray-600
                  hover:bg-gray-50
                "
              >
                Cancel
              </button>

              <button
                onClick={sendBroadcast}
                disabled={!broadcastMessage.trim()}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-blue-600
                  text-white
                  text-sm
                  font-semibold
                  flex
                  items-center
                  gap-2
                  hover:bg-blue-700
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Send size={15} />
                Send Broadcast
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default NationalNotifications;