import {
  LayoutDashboard,
  UserPlus,
  ArrowLeftRight,
  UserRoundPlus,
  HeartHandshake,
  Award,
  BookOpen,
  ClipboardList,
  Trophy,
  MessageSquare,
  CalendarHeart,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

// ======================================================
// NAVIGATION ITEMS
// ======================================================

const menuItems = [
  {
    name: "Dashboard",
    path: "/yc-manager-dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "Youth Registration",
    path: "/yc-manager-dashboard/youth-registration",
    icon: UserPlus,
  },
  {
    name: "Member Transfer",
    path: "/yc-manager-dashboard/member-transfer",
    icon: ArrowLeftRight,
  },
  {
    name: "Volunteer Registration",
    path: "/yc-manager-dashboard/volunteer-registration",
    icon: UserRoundPlus,
  },
  {
    name: "Volunteer Activities",
    path: "/yc-manager-dashboard/volunteer-activities",
    icon: HeartHandshake,
  },
  {
    name: "e-Certificate",
    path: "/yc-manager-dashboard/certificates",
    icon: Award,
  },
  {
    name: "Programme Management",
    path: "/yc-manager-dashboard/programmes",
    icon: BookOpen,
  },
  {
    name: "Programme Reporting",
    path: "/yc-manager-dashboard/programme-reports",
    icon: ClipboardList,
  },
  {
    name: "Achievement Tracking",
    path: "/yc-manager-dashboard/achievements",
    icon: Trophy,
  },
  {
    name: "Feedback Management",
    path: "/yc-manager-dashboard/feedback",
    icon: MessageSquare,
  },
  {
    name: "Counselling",
    path: "/yc-manager-dashboard/counselling",
    icon: CalendarHeart,
  },
  {
    name: "Settings",
    path: "/yc-manager-dashboard/settings",
    icon: Settings,
  },
];

// ======================================================
// YC MANAGER SIDEBAR
// ======================================================

const YCManagerSidebar = () => {
  const navigate = useNavigate();

  // ====================================================
  // LOGOUT
  // ====================================================

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        h-screen
        w-72
        flex-col
        border-r
        border-gray-200
        bg-white
      "
    >
      {/* ==================================================
          LOGO / BRAND
      ================================================== */}

      <div
        className="
          h-20
          shrink-0
          border-b
          border-gray-200
          px-5
        "
      >
        <NavLink
          to="/login"
          aria-label="Go to login"
          title="Go to Login"
          className="
            group
            flex
            h-full
            w-full
            items-center
            gap-3
            rounded-xl
            transition-all
            duration-200
          "
        >
          {/* YPS LOGO */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-sm
              font-extrabold
              text-white
              shadow-sm
              transition-all
              duration-200
              group-hover:bg-blue-700
              group-hover:shadow-md
              group-active:scale-95
            "
          >
            YPS
          </div>

          {/* BRAND */}

          <div className="min-w-0 flex-1">
            <h1
              className="
                truncate
                text-sm
                font-extrabold
                leading-tight
                text-gray-900
                transition-colors
                duration-200
                group-hover:text-blue-600
              "
            >
              Youth Portal System
            </h1>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                leading-tight
                text-gray-500
              "
            >
              Youth Centre Manager
            </p>
          </div>

          {/* LOGO HOVER ARROW */}

          <ChevronRight
            size={16}
            className="
              shrink-0
              -translate-x-1
              text-gray-300
              opacity-0
              transition-all
              duration-200
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          />
        </NavLink>
      </div>

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <nav
        className="
          flex-1
          overflow-y-auto
          px-4
          py-6
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-gray-200
        "
      >
        <div className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end || false}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                "
              >
                {({ isActive }) => (
                  <>
                    {/* ==================================================
                        ACTIVE BACKGROUND
                    ================================================== */}

                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-xl
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? "bg-blue-600 shadow-sm"
                            : "bg-transparent group-hover:bg-blue-50"
                        }
                      `}
                    />

                    {/* ==================================================
                        LEFT ACTIVE INDICATOR
                        
                        This is NOT a border.
                        It only appears for the active menu item.
                    ================================================== */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          z-10
                          h-6
                          w-1
                          -translate-y-1/2
                          rounded-r-full
                          bg-white
                        "
                      />
                    )}

                    {/* ==================================================
                        ICON
                    ================================================== */}

                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.3 : 2}
                      className={`
                        relative
                        z-10
                        shrink-0
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:scale-105 group-hover:text-blue-700"
                        }
                      `}
                    />

                    {/* ==================================================
                        LABEL
                    ================================================== */}

                    <span
                      className={`
                        relative
                        z-10
                        flex-1
                        truncate
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:text-blue-700"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                    {/* ==================================================
                        RIGHT ACTIVE INDICATOR
                    ================================================== */}

                    {isActive && (
                      <ChevronRight
                        size={15}
                        strokeWidth={2.3}
                        className="
                          relative
                          z-10
                          shrink-0
                          text-white
                          opacity-80
                          transition-all
                          duration-200
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* ==================================================
          LOGOUT
      ================================================== */}

      <div
        className="
          shrink-0
          border-t
          border-gray-200
          bg-white
          p-4
        "
      >
        <button
          type="button"
          onClick={logout}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-50
            py-3
            text-sm
            font-semibold
            text-red-600
            transition-all
            duration-200
            hover:bg-red-600
            hover:text-white
            active:scale-[0.98]
          "
        >
          <LogOut
            size={18}
            strokeWidth={2}
            className="
              transition-transform
              duration-200
              group-hover:-translate-x-0.5
            "
          />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default YCManagerSidebar;