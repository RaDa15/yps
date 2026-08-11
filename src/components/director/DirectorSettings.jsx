import { useEffect, useState } from "react";
import {
  User,
  ShieldCheck,
  Bell,
  CalendarClock,
  Settings,
  Lock,
  LayoutDashboard,
  CheckCircle,
  Save,
} from "lucide-react";

const DirectorSettings = () => {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("directorProfileImage") || ""
  );

  const [profile, setProfile] = useState(() => {
    const saved =
      localStorage.getItem("directorProfile");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }

    return {
      name: "Dasho Director",
      role: "HoD / Director",
      department:
        "Department of Education and Youth",
    };
  });

  // =====================================================
  // PROFILE SYNC
  // =====================================================

  useEffect(() => {
    const updateProfile = () => {
      const image =
        localStorage.getItem(
          "directorProfileImage"
        ) || "";

      setProfileImage(image);

      const saved =
        localStorage.getItem("directorProfile");

      if (saved) {
        try {
          setProfile(JSON.parse(saved));
        } catch {
          // ignore invalid data
        }
      }
    };

    window.addEventListener(
      "directorProfileUpdated",
      updateProfile
    );

    window.addEventListener(
      "storage",
      updateProfile
    );

    return () => {
      window.removeEventListener(
        "directorProfileUpdated",
        updateProfile
      );

      window.removeEventListener(
        "storage",
        updateProfile
      );
    };
  }, []);

  return (
    <div className="space-y-6 pb-6">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div>
        <div className="flex items-center gap-3">
          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            "
          >
            <Settings className="w-5 h-5" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Settings
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your profile, access, notifications
              and dashboard preferences
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROFILE SETTINGS
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >
        <div
          className="
            px-6
            py-5
            border-b
            border-gray-100
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
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            "
          >
            <User className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Profile Information
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Your official account and role information
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* PROFILE SUMMARY */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              gap-5
              p-5
              bg-gray-50
              rounded-2xl
            "
          >
            {/* Avatar */}

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-violet-600
                text-white
                flex
                items-center
                justify-center
                text-xl
                font-bold
                shadow-sm
                flex-shrink-0
                overflow-hidden
              "
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Director Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                "D"
              )}
            </div>

            {/* Profile */}

            <div className="flex-1">
              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                "
              >
                {profile.name || "Dasho Director"}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {profile.role || "HoD / Director"}
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-3
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-lg
                    bg-blue-100
                    text-blue-700
                    text-xs
                    font-semibold
                  "
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  National Level Access
                </span>

                <span
                  className="
                    px-3
                    py-1.5
                    rounded-lg
                    bg-gray-200
                    text-gray-700
                    text-xs
                    font-medium
                  "
                >
                  {profile.department ||
                    "Department of Education and Youth"}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Fields */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              mt-6
            "
          >
            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Display Name
              </label>

              <input
                type="text"
                value={
                  profile.name || "Dasho Director"
                }
                readOnly
                className="
                  w-full
                  px-4
                  py-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-700
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Role
              </label>

              <input
                type="text"
                value={
                  profile.role || "HoD / Director"
                }
                readOnly
                className="
                  w-full
                  px-4
                  py-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-700
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Department
              </label>

              <input
                type="text"
                value={
                  profile.department ||
                  "Department of Education and Youth"
                }
                readOnly
                className="
                  w-full
                  px-4
                  py-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-700
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Access Level
              </label>

              <input
                type="text"
                value="National Level Access"
                readOnly
                className="
                  w-full
                  px-4
                  py-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-700
                  outline-none
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ACCESS CONTROL
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >
        <div
          className="
            px-6
            py-5
            border-b
            border-gray-100
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
              bg-purple-50
              text-purple-600
              flex
              items-center
              justify-center
            "
          >
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Access Control
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Review your national dashboard permissions
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "National Dashboard",
              "Youth Analytics",
              "Programme Monitoring",
              "Youth Centre Performance",
              "Volunteer Analytics",
              "Policy Insights",
              "National Reports",
              "Strategic Monitoring",
            ].map((permission) => (
              <div
                key={permission}
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-xl
                  bg-gray-50
                  border
                  border-gray-100
                "
              >
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="
                      w-5
                      h-5
                      text-green-600
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    {permission}
                  </span>
                </div>

                <span
                  className="
                    text-xs
                    font-semibold
                    text-green-600
                    bg-green-50
                    px-2.5
                    py-1
                    rounded-lg
                  "
                >
                  Enabled
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          NOTIFICATION SETTINGS
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-orange-50
              text-orange-600
              flex
              items-center
              justify-center
            "
          >
            <Bell className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Notification Settings
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Choose which national-level alerts you receive
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            [
              "Critical Alerts",
              "Receive alerts requiring immediate attention",
            ],
            [
              "Programme Updates",
              "Receive programme performance and approval updates",
            ],
            [
              "Youth Centre Reports",
              "Receive notifications when reports are submitted or delayed",
            ],
            [
              "Policy Indicators",
              "Receive updates on important youth development indicators",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="
                flex
                items-center
                justify-between
                gap-4
                p-4
                rounded-xl
                bg-gray-50
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-gray-800
                  "
                >
                  {title}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                    mt-1
                  "
                >
                  {description}
                </p>
              </div>

              <div
                className="
                  w-11
                  h-6
                  rounded-full
                  bg-blue-600
                  relative
                  flex-shrink-0
                "
              >
                <div
                  className="
                    absolute
                    top-1
                    right-1
                    w-4
                    h-4
                    rounded-full
                    bg-white
                    shadow-sm
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          REPORT SETTINGS
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-green-50
              text-green-600
              flex
              items-center
              justify-center
            "
          >
            <CalendarClock className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Report Preferences
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Configure your preferred reporting period
            </p>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >
          <div>
            <label
              className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              "
            >
              Default Reporting Period
            </label>

            <select
              className="
                w-full
                px-4
                py-3
                bg-white
                border
                border-gray-200
                rounded-xl
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            >
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annual</option>
            </select>
          </div>

          <div>
            <label
              className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              "
            >
              Default Report Format
            </label>

            <select
              className="
                w-full
                px-4
                py-3
                bg-white
                border
                border-gray-200
                rounded-xl
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            >
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
      </div>

      {/* =====================================================
          DASHBOARD CUSTOMIZATION
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-indigo-50
              text-indigo-600
              flex
              items-center
              justify-center
            "
          >
            <LayoutDashboard className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Dashboard Customization
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Configure how your executive dashboard is displayed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            className="
              flex
              items-center
              justify-between
              p-4
              rounded-xl
              bg-gray-50
              cursor-pointer
            "
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Show Executive Insights
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Display strategic insights on the dashboard
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 accent-blue-600"
            />
          </label>

          <label
            className="
              flex
              items-center
              justify-between
              p-4
              rounded-xl
              bg-gray-50
              cursor-pointer
            "
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Show Performance Alerts
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Display items requiring strategic attention
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 accent-blue-600"
            />
          </label>
        </div>
      </div>

      {/* =====================================================
          SECURITY
      ====================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-red-50
              text-red-600
              flex
              items-center
              justify-center
            "
          >
            <Lock className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Security
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Manage your account security
            </p>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            p-5
            bg-red-50
            rounded-xl
          "
        >
          <div>
            <p
              className="
                text-sm
                font-semibold
                text-gray-800
              "
            >
              Account Password
            </p>

            <p
              className="
                text-xs
                text-gray-500
                mt-1
              "
            >
              Keep your account secure by changing your password regularly.
            </p>
          </div>

          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-3
              rounded-xl
              font-semibold
              text-sm
              transition
              shadow-sm
            "
          >
            <Lock className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>

      {/* =====================================================
          SAVE
      ====================================================== */}

      <div
        className="
          flex
          justify-end
          pb-4
        "
      >
        <button
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            text-sm
            shadow-sm
            transition
          "
        >
          <Save className="w-4 h-4" />
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default DirectorSettings;