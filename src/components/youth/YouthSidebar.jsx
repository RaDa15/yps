import {
  LayoutDashboard,
  Compass,
  History,
  Award,
  Trophy,
  Medal,
  User,
  Settings,
  LogOut,
  BookOpen,
  GraduationCap,
  QrCode,
  ChevronRight,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

// ======================================================
// NAVIGATION ITEMS
// ======================================================

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },

  {
    name: "Discover Activities",
    path: "/dashboard/discover",
    icon: Compass,
  },

  {
    name: "Activity History",
    path: "/dashboard/history",
    icon: History,
  },

  {
    name: "Certificates",
    path: "/dashboard/certificates",
    icon: Award,
  },

  {
    name: "Achievements",
    path: "/dashboard/achievements",
    icon: Trophy,
  },

  {
    name: "Leaderboard",
    path: "/dashboard/leaderboard",
    icon: Medal,
  },

  {
    name: "Digital ID",
    path: "/dashboard/digital-id",
    icon: QrCode,
  },

  {
    name: "Programmes",
    path: "/dashboard/programmes",
    icon: BookOpen,
  },

  {
    name: "Scholarships",
    path: "/dashboard/scholarships",
    icon: GraduationCap,
  },

  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },

  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

// ======================================================
// YOUTH SIDEBAR
// ======================================================

const YouthSidebar = () => {
  const navigate = useNavigate();

  // ====================================================
  // LOGOUT
  // ====================================================

  const logout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userRoleName");

    navigate("/login", {
      replace: true,
    });
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
            hover:bg-gray-50
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
              Royal Government of Bhutan
            </p>

          </div>

          {/* LOGO HOVER ARROW */}

          <ChevronRight
            size={16}
            className="
              shrink-0
              text-gray-300
              opacity-0
              -translate-x-1
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
          py-5
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-gray-200
        "
      >

        <div className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end || false}
                className={({ isActive }) =>
                  `
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

                    ${
                      isActive
                        ? `
                          bg-blue-600
                          text-white
                          shadow-md
                          shadow-blue-500/20
                        `
                        : `
                          text-gray-600
                          hover:bg-blue-50
                          hover:text-blue-700
                        `
                    }
                  `
                }
              >

                {({ isActive }) => (
                  <>

                    {/* ==================================
                        LEFT ACTIVE INDICATOR
                    ================================== */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-6
                          w-1
                          -translate-y-1/2
                          rounded-r-full
                          bg-white
                        "
                      />
                    )}


                    {/* ==================================
                        ICON
                    ================================== */}

                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.3 : 2}
                      className={`
                        shrink-0
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:scale-105 group-hover:text-blue-600"
                        }
                      `}
                    />


                    {/* ==================================
                        MENU LABEL
                    ================================== */}

                    <span className="flex-1 truncate">
                      {item.name}
                    </span>


                    {/* ==================================
                        RIGHT ACTIVE INDICATOR
                    ================================== */}

                    {isActive && (
                      <ChevronRight
                        size={15}
                        className="
                          shrink-0
                          opacity-80
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
            size={17}
            className="
              transition-transform
              duration-200
              group-hover:-translate-x-0.5
            "
          />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
};

export default YouthSidebar;