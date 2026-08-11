import { useState } from "react";
import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PYCDHeader = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  // =========================
  // NOTIFICATIONS
  // =========================

  const handleNotifications = () => {
    navigate("/pycd-dashboard/notifications");
  };

  // =========================
  // SETTINGS
  // =========================

  const handleSettings = () => {
    navigate("/pycd-dashboard/settings");
  };

  // =========================
  // PROFILE
  // =========================

  const handleProfile = () => {
    setShowProfile(false);
    navigate("/profile");
  };

  return (
    <header
      className="
        w-full
        h-20
        min-h-20
        bg-white
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-6
        lg:px-10
        box-border
      "
    >
      {/* =========================
          LEFT SECTION
      ========================== */}

      <div className="min-w-0">
        <h2
          className="
            font-bold
            text-gray-800
            text-base
            sm:text-lg
            leading-tight
            truncate
          "
        >
          PYCD National Dashboard
        </h2>

        <p
          className="
            text-xs
            text-gray-500
            mt-0.5
            hidden
            sm:block
            leading-tight
          "
        >
          Programme and Youth Coordination Division
        </p>
      </div>

      {/* =========================
          RIGHT SECTION
      ========================== */}

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* =========================
            SEARCH
        ========================== */}

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
            onChange={(e) => setSearch(e.target.value)}
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

        {/* =========================
            MOBILE SEARCH
        ========================== */}

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

        {/* =========================
            NOTIFICATION
        ========================== */}

        <button
          type="button"
          onClick={handleNotifications}
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

          {/* Unread indicator */}

          <span
            className="
              absolute
              top-2
              right-2
              w-2
              h-2
              bg-red-500
              rounded-full
              border-2
              border-white
            "
          />
        </button>

        {/* =========================
            DIVIDER
        ========================== */}

        <div
          className="
            hidden
            sm:block
            h-8
            w-px
            bg-gray-200
          "
        />

        {/* =========================
            PROFILE
        ========================== */}

        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
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
            {/* Avatar */}

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
              "
            >
              P
            </div>

            {/* User Information */}

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
                PYCD Focal
              </p>

              <p
                className="
                  text-[11px]
                  text-gray-500
                  mt-0.5
                  leading-tight
                "
              >
                National Access
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

          {/* =========================
              PROFILE DROPDOWN
          ========================== */}

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
              {/* =========================
                  PROFILE HEADER
              ========================== */}

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
                      overflow-hidden
                    "
                  >
                    P
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-bold
                        text-gray-900
                      "
                    >
                      PYCD Focal
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      National Access
                    </p>
                  </div>
                </div>
              </div>

              {/* =========================
                  MY PROFILE
              ========================== */}

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
                  hover:bg-gray-50
                  hover:text-gray-900
                  transition
                "
              >
                <User size={17} />

                <span>
                  My Profile
                </span>
              </button>

              {/* =========================
                  SETTINGS
              ========================== */}

              <button
                type="button"
                onClick={() => {
                  setShowProfile(false);
                  handleSettings();
                }}
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

              {/* =========================
                  DIVIDER
              ========================== */}

              <div className="my-2 border-t border-gray-100" />

              {/* =========================
                  LOGOUT
              ========================== */}

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

export default PYCDHeader;