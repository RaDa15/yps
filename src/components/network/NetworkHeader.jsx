import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Building2,
  FileText,
  Wifi,
  AlertTriangle,
  CalendarDays,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NetworkHeader = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState("");

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // =====================================================
  // NETWORK ADMINISTRATOR NOTIFICATIONS
  // =====================================================

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Youth Centre Report Submitted",
      message:
        "Thimphu Youth Centre has submitted its monthly network report.",
      time: "15 minutes ago",
      type: "report",
      unread: true,
    },
    {
      id: 2,
      title: "Centre Connectivity Issue",
      message:
        "Internet connectivity has been reported as unstable at Samtse Youth Centre.",
      time: "1 hour ago",
      type: "network",
      unread: true,
    },
    {
      id: 3,
      title: "Youth Centre Maintenance",
      message:
        "Gelephu Youth Centre has scheduled facility maintenance for tomorrow.",
      time: "3 hours ago",
      type: "maintenance",
      unread: true,
    },
    {
      id: 4,
      title: "Centre Performance Update",
      message:
        "9 Youth Centres have completed their monthly activity reporting.",
      time: "Today",
      type: "performance",
      unread: true,
    },
    {
      id: 5,
      title: "Network Announcement",
      message:
        "The national Youth Centre coordination meeting is scheduled for next week.",
      time: "Yesterday",
      type: "announcement",
      unread: false,
    },
  ]);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login", {
      replace: true,
    });
  };

  // =====================================================
  // NOTIFICATIONS
  // =====================================================

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setShowProfile(false);
  };

  // =====================================================
  // SETTINGS
  // =====================================================

  const handleSettings = () => {
    setShowProfile(false);
    setShowNotifications(false);

    navigate("/network-dashboard/settings");
  };

  // =====================================================
  // PROFILE
  // =====================================================

  const handleProfile = () => {
    setShowProfile(false);
    setShowNotifications(false);

    navigate("/profile");
  };

  // =====================================================
  // MARK ALL AS READ
  // =====================================================

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  // =====================================================
  // MARK SINGLE NOTIFICATION AS READ
  // =====================================================

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
            }
          : notification
      )
    );
  };

  // =====================================================
  // UNREAD COUNT
  // =====================================================

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  // =====================================================
  // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =====================================================
  // NOTIFICATION ICON
  // =====================================================

  const getNotificationIcon = (type) => {
    switch (type) {
      case "report":
        return (
          <FileText
            size={18}
            className="text-blue-600"
          />
        );

      case "network":
        return (
          <Wifi
            size={18}
            className="text-orange-600"
          />
        );

      case "maintenance":
        return (
          <Building2
            size={18}
            className="text-purple-600"
          />
        );

      case "performance":
        return (
          <CheckCircle
            size={18}
            className="text-green-600"
          />
        );

      case "announcement":
        return (
          <CalendarDays
            size={18}
            className="text-gray-500"
          />
        );

      default:
        return (
          <AlertTriangle
            size={18}
            className="text-gray-500"
          />
        );
    }
  };

  return (
    <header
      className="
        h-20
        w-full
        bg-white
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        shrink-0
        relative
        z-40
      "
    >

      {/* =================================================
          LEFT SECTION
      ================================================= */}

      <div className="min-w-0">
        <h2
          className="
            font-bold
            text-gray-800
            text-base
            sm:text-lg
            truncate
          "
        >
          Youth Centre Network Dashboard
        </h2>

        <p
          className="
            text-xs
            text-gray-500
            mt-0.5
            hidden
            sm:block
          "
        >
          National Youth Centre Network Management
        </p>
      </div>

      {/* =================================================
          RIGHT SECTION
      ================================================= */}

      <div className="flex items-center gap-2 sm:gap-4">

        {/* =================================================
            SEARCH
        ================================================= */}

        <div
          className="
            hidden
            md:flex
            items-center
            w-48
            lg:w-64
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            px-3
            py-2
            transition
            focus-within:border-blue-400
            focus-within:ring-2
            focus-within:ring-blue-100
          "
        >
          <Search
            size={17}
            className="text-gray-400 flex-shrink-0"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search..."
            className="
              bg-transparent
              outline-none
              text-sm
              text-gray-700
              ml-2
              w-full
              placeholder:text-gray-400
            "
          />
        </div>

        {/* =================================================
            MOBILE SEARCH
        ================================================= */}

        <button
          type="button"
          className="
            md:hidden
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            text-gray-500
            hover:bg-gray-100
            transition
          "
          title="Search"
        >
          <Search size={19} />
        </button>

        {/* =================================================
            NOTIFICATIONS
        ================================================= */}

        <div
          ref={notificationRef}
          className="relative"
        >
          <button
            type="button"
            onClick={toggleNotifications}
            className="
              relative
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-gray-500
              hover:bg-blue-50
              hover:text-blue-600
              transition
            "
            title="Notifications"
          >
            <Bell size={20} />

            {/* UNREAD COUNT */}

            {unreadCount > 0 && (
              <span
                className="
                  absolute
                  -top-0.5
                  -right-0.5
                  min-w-[18px]
                  h-[18px]
                  px-1
                  rounded-full
                  bg-red-500
                  text-white
                  text-[10px]
                  font-bold
                  flex
                  items-center
                  justify-center
                  border-2
                  border-white
                "
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* =================================================
              NOTIFICATION DROPDOWN
          ================================================= */}

          {showNotifications && (
            <div
              className="
                absolute
                right-0
                top-12
                w-[370px]
                max-w-[calc(100vw-2rem)]
                bg-white
                border
                border-gray-200
                rounded-2xl
                shadow-xl
                overflow-hidden
                z-50
              "
            >

              {/* =================================================
                  NOTIFICATION HEADER
              ================================================= */}

              <div
                className="
                  px-4
                  py-3
                  border-b
                  border-gray-100
                  flex
                  items-center
                  justify-between
                "
              >

                <div>
                  <h3
                    className="
                      text-sm
                      font-bold
                      text-gray-900
                    "
                  >
                    Notifications
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-0.5
                    "
                  >
                    {unreadCount} unread notification
                    {unreadCount !== 1
                      ? "s"
                      : ""}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="
                    text-xs
                    font-semibold
                    text-blue-600
                    hover:text-blue-700
                  "
                >
                  Mark all as read
                </button>

              </div>

              {/* =================================================
                  NOTIFICATION LIST
              ================================================= */}

              <div className="max-h-[400px] overflow-y-auto">

                {notifications.map((notification) => (
                  <button
                    key={notification.id}
                    type="button"
                    onClick={() =>
                      markAsRead(notification.id)
                    }
                    className={`
                      w-full
                      text-left
                      px-4
                      py-3
                      flex
                      gap-3
                      border-b
                      border-gray-50
                      transition
                      ${
                        notification.unread
                          ? "bg-blue-50/50 hover:bg-blue-50"
                          : "bg-white hover:bg-gray-50"
                      }
                    `}
                  >

                    {/* ICON */}

                    <div
                      className="
                        w-9
                        h-9
                        shrink-0
                        rounded-xl
                        bg-gray-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {getNotificationIcon(
                        notification.type
                      )}
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 min-w-0">

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-2
                        "
                      >

                        <p
                          className={`
                            text-sm
                            ${
                              notification.unread
                                ? "font-bold text-gray-900"
                                : "font-semibold text-gray-700"
                            }
                          `}
                        >
                          {notification.title}
                        </p>

                        {/* UNREAD DOT */}

                        {notification.unread && (
                          <span
                            className="
                              w-2
                              h-2
                              shrink-0
                              rounded-full
                              bg-blue-600
                              mt-1.5
                            "
                          />
                        )}

                      </div>

                      <p
                        className="
                          text-xs
                          text-gray-500
                          mt-1
                          leading-relaxed
                        "
                      >
                        {notification.message}
                      </p>

                      <p
                        className="
                          text-[10px]
                          text-gray-400
                          mt-1.5
                        "
                      >
                        {notification.time}
                      </p>

                    </div>

                  </button>
                ))}

              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div
                className="
                  border-t
                  border-gray-100
                  p-2
                "
              >
                <button
                  type="button"
                  onClick={() => {
                    setShowNotifications(false);

                    navigate(
                      "/network-dashboard/notifications"
                    );
                  }}
                  className="
                    w-full
                    py-2.5
                    rounded-xl
                    text-xs
                    font-bold
                    text-blue-600
                    hover:bg-blue-50
                    transition
                  "
                >
                  View All Notifications
                </button>
              </div>

            </div>
          )}
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            hidden
            sm:block
            h-8
            w-px
            bg-gray-200
          "
        />

        {/* =================================================
            PROFILE
        ================================================= */}

        <div
          ref={profileRef}
          className="relative"
        >

          <button
            type="button"
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotifications(false);
            }}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              p-1.5
              hover:bg-gray-50
              transition
            "
          >

            {/* AVATAR */}

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-sm
                shadow-sm
              "
            >
              N
            </div>

            {/* USER INFORMATION */}

            <div
              className="
                hidden
                lg:block
                text-left
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  text-gray-900
                  leading-tight
                "
              >
                Network Administrator
              </p>

              <p
                className="
                  text-[11px]
                  text-gray-500
                  mt-0.5
                "
              >
                Network Access
              </p>

            </div>

            <ChevronDown
              size={15}
              className="
                hidden
                lg:block
                text-gray-400
              "
            />

          </button>

          {/* =================================================
              PROFILE DROPDOWN
          ================================================= */}

          {showProfile && (
            <div
              className="
                absolute
                right-0
                top-12
                w-64
                bg-white
                border
                border-gray-200
                rounded-2xl
                shadow-xl
                p-2
                z-50
              "
            >

              {/* PROFILE HEADER */}

              <div
                className="
                  px-3
                  py-3
                  border-b
                  border-gray-100
                  mb-2
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    N
                  </div>

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                        text-gray-900
                      "
                    >
                      Network Administrator
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      Network Access
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  MY PROFILE
              ================================================= */}

              <button
                type="button"
                onClick={handleProfile}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-xl
                  text-sm
                  text-gray-600
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                <User size={17} />

                <span>
                  My Profile
                </span>
              </button>

              {/* =================================================
                  SETTINGS
              ================================================= */}

              <button
                type="button"
                onClick={handleSettings}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-xl
                  text-sm
                  text-gray-600
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                <Settings size={17} />

                <span>
                  System Settings
                </span>
              </button>

              {/* DIVIDER */}

              <div className="my-2 border-t border-gray-100" />

              {/* =================================================
                  LOGOUT
              ================================================= */}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-xl
                  text-sm
                  text-red-600
                  hover:bg-red-50
                  transition
                "
              >
                <LogOut size={17} />

                <span>
                  Logout
                </span>
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default NetworkHeader;
