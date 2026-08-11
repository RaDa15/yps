import { useState } from "react";
import {
  User,
  Bell,
  ShieldCheck,
  Lock,
  Save,
  Globe2,
  Mail,
  Smartphone,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NationalSettings = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    networkUpdates: true,
    activityApprovals: true,
    volunteerUpdates: true,
    monthlyReports: false,
    email: true,
  });

  const [profile, setProfile] = useState({
    name: "Pema Choden",
    role: "National Focal Point",
    email: "national.focal@yps.gov.bt",
    phone: "+975 17XXXXXX",
    organization: "Y-PEER Bhutan",
  });

  const handleProfileChange = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleNotification = (field) => {
    setNotifications((current) => ({
      ...current,
      [field]: !current[field],
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "nationalFocalProfile",
      JSON.stringify(profile)
    );

    localStorage.setItem(
      "nationalFocalNotifications",
      JSON.stringify(notifications)
    );

    alert("National Focal Point settings saved successfully.");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <User size={16} />
          Account Settings
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your National Focal Point profile, notifications and
          security preferences.
        </p>
      </div>


      {/* PROFILE */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100 flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <User size={20} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Profile Information
            </h2>

            <p className="text-sm text-gray-500">
              Your National Focal Point account information.
            </p>
          </div>

        </div>


        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* NAME */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Full Name
            </label>

            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                handleProfileChange("name", e.target.value)
              }
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
            />
          </div>


          {/* ROLE */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Role
            </label>

            <input
              type="text"
              value={profile.role}
              disabled
              className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                text-sm
                text-gray-500
              "
            />
          </div>


          {/* EMAIL */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  handleProfileChange("email", e.target.value)
                }
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>
          </div>


          {/* PHONE */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Phone Number
            </label>

            <div className="relative">

              <Smartphone
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="text"
                value={profile.phone}
                onChange={(e) =>
                  handleProfileChange("phone", e.target.value)
                }
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>
          </div>


          {/* ORGANIZATION */}
          <div className="md:col-span-2">

            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Organization / Network
            </label>

            <div className="relative">

              <Globe2
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="text"
                value={profile.organization}
                onChange={(e) =>
                  handleProfileChange(
                    "organization",
                    e.target.value
                  )
                }
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

        </div>

      </div>


      {/* NOTIFICATION SETTINGS */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100 flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <Bell size={20} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Notification Preferences
            </h2>

            <p className="text-sm text-gray-500">
              Choose which national-level updates you want to receive.
            </p>
          </div>

        </div>


        <div className="divide-y divide-gray-100">

          {/* NETWORK UPDATES */}
          <SettingToggle
            title="Network Updates"
            description="Receive updates about Y-PEER network activities and performance."
            enabled={notifications.networkUpdates}
            onChange={() => toggleNotification("networkUpdates")}
          />


          {/* APPROVALS */}
          <SettingToggle
            title="Activity Approvals"
            description="Notify when network activities require national approval."
            enabled={notifications.activityApprovals}
            onChange={() => toggleNotification("activityApprovals")}
          />


          {/* VOLUNTEERS */}
          <SettingToggle
            title="Volunteer Updates"
            description="Receive important volunteer registration and achievement updates."
            enabled={notifications.volunteerUpdates}
            onChange={() => toggleNotification("volunteerUpdates")}
          />


          {/* REPORTS */}
          <SettingToggle
            title="Monthly Reports"
            description="Receive notifications when monthly network reports are available."
            enabled={notifications.monthlyReports}
            onChange={() => toggleNotification("monthlyReports")}
          />


          {/* EMAIL */}
          <SettingToggle
            title="Email Notifications"
            description="Receive important system notifications through email."
            enabled={notifications.email}
            onChange={() => toggleNotification("email")}
          />

        </div>

      </div>


      {/* SECURITY */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100 flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Security
            </h2>

            <p className="text-sm text-gray-500">
              Manage authentication and account security.
            </p>
          </div>

        </div>


        <div className="p-6 space-y-4">

          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-emerald-600">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  NDI Authentication
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  National Digital Identity authentication is enabled.
                </p>
              </div>

            </div>

            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              Active
            </span>

          </div>


          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-blue-600">
                <Lock size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Role-Based Access
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Access is restricted to national Y-PEER functions.
                </p>
              </div>

            </div>

            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              Enabled
            </span>

          </div>

        </div>

      </div>


      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row justify-between gap-3">

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            bg-red-50
            text-red-600
            border
            border-red-100
            text-sm
            font-semibold
            hover:bg-red-600
            hover:text-white
            transition
          "
        >
          <LogOut size={16} />
          Sign Out
        </button>


        <button
          onClick={handleSave}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-5
            py-2.5
            rounded-xl
            bg-blue-600
            text-white
            text-sm
            font-semibold
            hover:bg-blue-700
            transition
            shadow-sm
          "
        >
          <Save size={16} />
          Save Changes
        </button>

      </div>


      {/* SECURITY NOTICE */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={20} />
          </div>

          <div>

            <h3 className="font-bold">
              National Focal Point Access
            </h3>

            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Your account has national-level access for Y-PEER
              network coordination, monitoring, reporting and
              communication. Sensitive system settings remain
              restricted to authorized administrators.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   REUSABLE TOGGLE
========================================================= */

const SettingToggle = ({
  title,
  description,
  enabled,
  onChange,
}) => {
  return (
    <div className="p-5 flex items-center justify-between gap-5">

      <div>
        <p className="text-sm font-semibold text-gray-900">
          {title}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {description}
        </p>
      </div>


      <button
        type="button"
        onClick={onChange}
        className={`
          relative
          w-11
          h-6
          rounded-full
          transition
          flex-shrink-0
          ${enabled ? "bg-blue-600" : "bg-gray-300"}
        `}
      >

        <span
          className={`
            absolute
            top-1
            w-4
            h-4
            bg-white
            rounded-full
            shadow
            transition
            ${enabled ? "left-6" : "left-1"}
          `}
        />

      </button>

    </div>
  );
};

export default NationalSettings;
