import {
  LayoutDashboard,
  Globe2,
  Users,
  Building2,
  BookOpen,
  HandHeart,
  Target,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

// ======================================================
// MENU ITEMS
// ======================================================

const menuItems = [
  {
    name: "Dashboard",
    path: "/director-dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "National Overview",
    path: "/director-dashboard/overview",
    icon: Globe2,
  },

  {
    name: "Youth Analytics",
    path: "/director-dashboard/youth-analytics",
    icon: Users,
  },

  {
    name: "Youth Centre Performance",
    path: "/director-dashboard/centres",
    icon: Building2,
  },

  {
    name: "Programme Insights",
    path: "/director-dashboard/programmes",
    icon: BookOpen,
  },

  {
    name: "Volunteer Impact",
    path: "/director-dashboard/volunteers",
    icon: HandHeart,
  },

  {
    name: "Policy Insights",
    path: "/director-dashboard/policy",
    icon: Target,
  },

  {
    name: "Reports",
    path: "/director-dashboard/reports",
    icon: FileText,
  },

  {
    name: "Settings",
    path: "/director-dashboard/settings",
    icon: Settings,
  },
];

// ======================================================
// DIRECTOR SIDEBAR
// ======================================================

const DirectorSidebar = () => {
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
        h-screen
        w-72
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
      "
    >

      {/* ==================================================
          LOGO / BRAND
      ================================================== */}

      <div
        className="
          h-20
          px-5
          border-b
          border-gray-200
          flex
          items-center
        "
      >

        <NavLink
          to="/login"
          title="Go to Login"
          className="
            group
            w-full
            flex
            items-center
            gap-3
            rounded-xl
            px-2
            py-2
            transition-all
            duration-200
            hover:bg-gray-50
          "
        >

          {/* LOGO */}

          <div
            className="
              w-11
              h-11
              shrink-0
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-extrabold
              text-sm
              shadow-sm
              transition-all
              duration-200
              group-hover:scale-105
              group-hover:shadow-md
            "
          >
            YPS
          </div>


          {/* BRAND TEXT */}

          <div className="flex-1 min-w-0">

            <p
              className="
                text-sm
                font-extrabold
                text-gray-900
                truncate
                group-hover:text-blue-600
                transition-colors
              "
            >
              Youth Portal System
            </p>

            <p className="text-xs text-gray-500 mt-0.5">
              Director Portal
            </p>

          </div>


          {/* ARROW */}

          <ChevronRight
            size={16}
            className="
              text-gray-300
              opacity-0
              -translate-x-1
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all
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
          px-4
          py-6
          space-y-1.5
          overflow-y-auto
          scrollbar-thin
        "
      >

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.name === "Dashboard"}
              className={({ isActive }) =>
                `
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? `
                        bg-blue-600
                        text-white
                        shadow-sm
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

                  {/* ACTIVE INDICATOR */}

                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        -translate-y-1/2
                        w-1
                        h-6
                        bg-white
                        rounded-r-full
                      "
                    />
                  )}


                  {/* ICON */}

                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2.3 : 2}
                    className="
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    "
                  />


                  {/* MENU NAME */}

                  <span className="flex-1 truncate">
                    {item.name}
                  </span>


                  {/* ACTIVE ARROW */}

                  {isActive && (
                    <ChevronRight
                      size={15}
                      className="opacity-80"
                    />
                  )}

                </>
              )}

            </NavLink>
          );

        })}

      </nav>


      {/* ==================================================
          LOGOUT
      ================================================== */}

      <div
        className="
          p-4
          border-t
          border-gray-200
        "
      >

        <button
          type="button"
          onClick={logout}
          className="
            group
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-red-50
            text-red-600
            hover:bg-red-600
            hover:text-white
            py-3
            rounded-xl
            transition-all
            duration-200
            font-semibold
            text-sm
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

          Logout

        </button>

      </div>

    </aside>
  );
};

export default DirectorSidebar;