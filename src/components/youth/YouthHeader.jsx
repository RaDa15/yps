import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  CheckCircle,
  AlertTriangle,
  CalendarDays,
  Award,
  HeartHandshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// =====================================================
// YOUTH NOTIFICATIONS
// =====================================================

const notificationsData = [
  {
    id: 1,
    title: "Programme Registration Confirmed",
    message:
      "You have successfully registered for a youth programme.",
    time: "10 minutes ago",
    type: "programme",
    unread: true,
  },
  {
    id: 2,
    title: "Volunteer Activity Approved",
    message:
      "Your volunteer activity has been approved.",
    time: "2 hours ago",
    type: "volunteer",
    unread: true,
  },
  {
    id: 3,
    title: "Certificate Generated",
    message:
      "Your volunteer participation certificate is ready.",
    time: "Today",
    type: "certificate",
    unread: true,
  },
  {
    id: 4,
    title: "New Programme Available",
    message:
      "A new youth programme is now available for registration.",
    time: "Yesterday",
    type: "system",
    unread: false,
  },
];

// =====================================================
// COMPONENT
// =====================================================

const YouthHeader = () => {
  const navigate = useNavigate();

  // =====================================================
  // STATE
  // =====================================================

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] =
    useState(false);

  const [search, setSearch] = useState("");

  const [notifications, setNotifications] =
    useState(notificationsData);

  // =====================================================
  // PROFILE IMAGE
  // =====================================================

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("youthProfileImage") || ""
  );

  // =====================================================
  // REFS
  // =====================================================

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // =====================================================
  // USER DATA
  // =====================================================

  const [user, setUser] = useState(() => {
    try {
      const storedUser =
        localStorage.getItem("user");

      return storedUser
        ? JSON.parse(storedUser)
        : {};
    } catch (error) {
      console.error(
        "Unable to read user data:",
        error
      );

      return {};
    }
  });

  // =====================================================
  // PROFILE IMAGE SYNC
  // =====================================================

  useEffect(() => {
    const updateProfileImage = () => {
      setProfileImage(
        localStorage.getItem(
          "youthProfileImage"
        ) || ""
      );
    };

    // Same-tab update
    window.addEventListener(
      "youthProfileUpdated",
      updateProfileImage
    );

    // Other-tab update
    window.addEventListener(
      "storage",
      updateProfileImage
    );

    return () => {
      window.removeEventListener(
        "youthProfileUpdated",
        updateProfileImage
      );

      window.removeEventListener(
        "storage",
        updateProfileImage
      );
    };
  }, []);

  // =====================================================
  // USER DATA SYNC
  // =====================================================

  useEffect(() => {
    const updateUser = () => {
      try {
        const storedUser =
          localStorage.getItem("user");

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error(
          "Unable to update user data:",
          error
        );
      }
    };

    window.addEventListener(
      "youthUserUpdated",
      updateUser
    );

    window.addEventListener(
      "storage",
      updateUser
    );

    return () => {
      window.removeEventListener(
        "youthUserUpdated",
        updateUser
      );

      window.removeEventListener(
        "storage",
        updateUser
      );
    };
  }, []);

  // =====================================================
  // USER NAME
  // =====================================================

  const userName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    "Youth Member";

  // =====================================================
  // FIRST NAME
  // =====================================================

  const firstName =
    user?.firstName ||
    userName.split(" ")[0] ||
    "Youth";

  // =====================================================
  // EMAIL
  // =====================================================

  const userEmail =
    user?.email ||
    user?.emailAddress ||
    "Youth Member";

  // =====================================================
  // INITIALS
  // =====================================================

  const getInitials = (name) => {
    if (!name) {
      return "Y";
    }

    const words = name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (words.length === 1) {
      return words[0]
        .substring(0, 2)
        .toUpperCase();
    }

    return (
      words[0].charAt(0) +
      words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  // =====================================================
  // AVATAR
  // =====================================================

  const renderAvatar = () => {
    if (profileImage) {
      return (
        <img
          src={profileImage}
          alt={userName}
          className="
            w-full
            h-full
            object-cover
          "
        />
      );
    }

    return getInitials(userName);
  };

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
  // SETTINGS
  // =====================================================

  const handleSettings = () => {
    setShowProfile(false);
    setShowNotifications(false);

    navigate("/youth/settings");
  };

  // =====================================================
  // PROFILE
  // =====================================================

  const handleProfile = () => {
    setShowProfile(false);
    setShowNotifications(false);

    navigate("/youth/profile");
  };

  // =====================================================
  // NOTIFICATIONS
  // =====================================================

  const toggleNotifications = () => {
    setShowNotifications(
      (previous) => !previous
    );

    setShowProfile(false);
  };

  // =====================================================
  // MARK ALL AS READ
  // =====================================================

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  // =====================================================
  // MARK SINGLE AS READ
  // =====================================================

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: false,
            }
          : item
      )
    );
  };

  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = (event) => {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      return;
    }

    navigate(
      `/youth/search?q=${encodeURIComponent(value)}`
    );
  };

  // =====================================================
  // CLOSE DROPDOWNS
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target
        )
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          event.target
        )
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
      case "programme":
        return (
          <CalendarDays
            size={17}
            className="text-blue-600"
          />
        );

      case "volunteer":
        return (
          <HeartHandshake
            size={17}
            className="text-violet-600"
          />
        );

      case "certificate":
        return (
          <Award
            size={17}
            className="text-amber-600"
          />
        );

      case "achievement":
        return (
          <CheckCircle
            size={17}
            className="text-green-600"
          />
        );

      default:
        return (
          <AlertTriangle
            size={17}
            className="text-gray-500"
          />
        );
    }
  };

  // =====================================================
  // UNREAD COUNT
  // =====================================================

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <header
      className="
        sticky
        top-0
        z-40
        w-full
        h-[76px]
        shrink-0
        bg-white
        border-b
        border-gray-200
      "
    >
      <div
        className="
          h-full
          w-full
          flex
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            LEFT SECTION
        ================================================= */}

        <div className="min-w-0 flex-1">

          <h2
            className="
              font-bold
              text-gray-800
              text-base
              sm:text-lg
              truncate
              leading-tight
            "
          >
            Welcome back, {firstName}!
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
            Youth & Volunteer Portal
          </p>

        </div>

        {/* =================================================
            RIGHT SECTION
        ================================================= */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4
            shrink-0
          "
        >

          {/* =================================================
              SEARCH
          ================================================= */}

          <form
            onSubmit={handleSearch}
            className="
              hidden
              md:flex
              items-center
              h-10
              w-48
              lg:w-64
              bg-gray-50
              border
              border-gray-200
              rounded-xl
              px-3
              transition
              focus-within:border-blue-400
              focus-within:ring-2
              focus-within:ring-blue-100
            "
          >
            <Search
              size={17}
              className="
                text-gray-400
                shrink-0
              "
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
          </form>

          {/* =================================================
              MOBILE SEARCH
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              const value = window.prompt(
                "What would you like to search?"
              );

              if (value?.trim()) {
                navigate(
                  `/youth/search?q=${encodeURIComponent(
                    value.trim()
                  )}`
                );
              }
            }}
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
                transition-all
                duration-200
              "
              title="Notifications"
            >
              <Bell size={20} />

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
                NOTIFICATION PANEL
            ================================================= */}

            {showNotifications && (
              <div
                className="
                  absolute
                  right-0
                  top-12
                  w-[360px]
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

                {/* HEADER */}

                <div
                  className="
    h-20
    w-full
    flex
    items-center
    justify-between
    px-6
    bg-white
    border-b
    border-gray-200
    shrink-0
    relative
    z-40
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

                {/* NOTIFICATION LIST */}

                <div
                  className="
                    max-h-[380px]
                    overflow-y-auto
                  "
                >
                  {notifications.length === 0 ? (
                    <div
                      className="
                        px-6
                        py-10
                        text-center
                      "
                    >
                      <Bell
                        size={28}
                        className="
                          mx-auto
                          text-gray-300
                        "
                      />

                      <p
                        className="
                          mt-2
                          text-sm
                          font-semibold
                          text-gray-600
                        "
                      >
                        No notifications
                      </p>
                    </div>
                  ) : (
                    notifications.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          markAsRead(item.id)
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
                            item.unread
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
                            item.type
                          )}
                        </div>

                        {/* CONTENT */}

                        <div
                          className="
                            min-w-0
                            flex-1
                          "
                        >

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
                                  item.unread
                                    ? "font-bold text-gray-900"
                                    : "font-semibold text-gray-700"
                                }
                              `}
                            >
                              {item.title}
                            </p>

                            {item.unread && (
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
                            {item.message}
                          </p>

                          <p
                            className="
                              text-[10px]
                              text-gray-400
                              mt-1.5
                            "
                          >
                            {item.time}
                          </p>

                        </div>
                      </button>
                    ))
                  )}
                </div>

                {/* FOOTER */}

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
                        "/youth/notifications"
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
                setShowProfile(
                  (prev) => !prev
                );

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
                  overflow-hidden
                  shrink-0
                "
              >
                {renderAvatar()}
              </div>

              {/* USER INFO */}

              <div
                className="
                  hidden
                  lg:block
                  text-left
                  min-w-0
                "
              >

                <p
                  className="
                    max-w-[130px]
                    truncate
                    text-sm
                    font-semibold
                    text-gray-900
                    leading-tight
                  "
                >
                  {userName}
                </p>

                <p
                  className="
                    text-[11px]
                    text-gray-500
                    mt-0.5
                  "
                >
                  Youth Member
                </p>

              </div>

              <ChevronDown
                size={15}
                className="
                  hidden
                  lg:block
                  text-gray-400
                  shrink-0
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

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

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
                        overflow-hidden
                        shrink-0
                      "
                    >
                      {renderAvatar()}
                    </div>

                    <div className="min-w-0">

                      <p
                        className="
                          text-sm
                          font-bold
                          text-gray-900
                          truncate
                        "
                      >
                        {userName}
                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-500
                          truncate
                        "
                      >
                        {userEmail}
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
                    Settings
                  </span>
                </button>

                {/* DIVIDER */}

                <div
                  className="
                    my-2
                    border-t
                    border-gray-100
                  "
                />

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
      </div>
    </header>
  );
};

export default YouthHeader;