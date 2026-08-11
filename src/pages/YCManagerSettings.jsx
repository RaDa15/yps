import { useState } from "react";
import {
  Settings,
  User,
  Bell,
  ShieldCheck,
  Building2,
  Save,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const YCManagerSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [showPassword, setShowPassword] = useState(false);

  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: "Youth Centre Manager",
    email: "ycmanager@youth.gov.bt",
    phone: "+975 17 000 000",
    centre: "Thimphu Youth Centre",
    location: "Thimphu",
  });

  const [notifications, setNotifications] = useState({
    registration: true,
    transfer: true,
    volunteer: true,
    programme: true,
    counselling: true,
    system: true,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "centre",
      label: "Centre Information",
      icon: Building2,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "security",
      label: "Security",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
          <Settings size={16} />
          System Settings
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your profile, youth centre information,
          notifications and account security.
        </p>
      </div>

      {/* SETTINGS LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* SETTINGS NAVIGATION */}
        <div className="bg-white border border-gray-200 rounded-2xl p-3 h-fit">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon size={18} />

                {tab.label}
              </button>
            );
          })}
        </div>

        {/* SETTINGS CONTENT */}
        <div className="lg:col-span-3">

          {/* ================= PROFILE ================= */}
          {activeTab === "profile" && (
            <div className="bg-white border border-gray-200 rounded-2xl">

              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Profile Information
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your personal account information.
                </p>
              </div>

              <div className="p-6 space-y-6">

                {/* AVATAR */}
                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                    YC
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Youth Centre Manager
                    </h3>

                    <p className="text-sm text-gray-500">
                      Youth Centre Manager
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* NAME */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>

                    <div className="relative mt-2">
                      <User
                        size={17}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            name: e.target.value,
                          })
                        }
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>

                    <div className="relative mt-2">
                      <Mail
                        size={17}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            email: e.target.value,
                          })
                        }
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>

                    <div className="relative mt-2">
                      <Phone
                        size={17}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            phone: e.target.value,
                          })
                        }
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* ROLE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Role
                    </label>

                    <input
                      value="Youth Centre Manager"
                      disabled
                      className="w-full mt-2 border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-500"
                    />
                  </div>

                </div>

              </div>

              <SettingsFooter
                saved={saved}
                onSave={handleSave}
              />

            </div>
          )}

          {/* ================= CENTRE ================= */}
          {activeTab === "centre" && (
            <div className="bg-white border border-gray-200 rounded-2xl">

              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Centre Information
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Information about your assigned youth centre.
                </p>
              </div>

              <div className="p-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* CENTRE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Youth Centre
                    </label>

                    <div className="relative mt-2">
                      <Building2
                        size={17}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        value={profile.centre}
                        disabled
                        className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-600"
                      />
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Dzongkhag / Location
                    </label>

                    <div className="relative mt-2">
                      <MapPin
                        size={17}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        value={profile.location}
                        disabled
                        className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-600"
                      />
                    </div>
                  </div>

                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">

                  <div className="flex gap-3">

                    <Building2 className="text-blue-600" size={20} />

                    <div>
                      <h3 className="font-semibold text-blue-900">
                        Centre Assignment
                      </h3>

                      <p className="text-sm text-blue-700 mt-1">
                        Your account is currently assigned to{" "}
                        <strong>
                          {profile.centre}
                        </strong>.
                        Centre assignment can only be changed by an
                        authorized administrator.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ================= NOTIFICATIONS ================= */}
          {activeTab === "notifications" && (
            <div className="bg-white border border-gray-200 rounded-2xl">

              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Notification Preferences
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Choose which activities you want to receive
                  notifications about.
                </p>
              </div>

              <div className="divide-y">

                <NotificationToggle
                  title="Youth Registrations"
                  description="Receive notifications when new youth registrations are submitted."
                  value={notifications.registration}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      registration: !notifications.registration,
                    })
                  }
                />

                <NotificationToggle
                  title="Member Transfers"
                  description="Receive updates about incoming and outgoing youth transfer requests."
                  value={notifications.transfer}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      transfer: !notifications.transfer,
                    })
                  }
                />

                <NotificationToggle
                  title="Volunteer Applications"
                  description="Get notified when volunteers submit applications."
                  value={notifications.volunteer}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      volunteer: !notifications.volunteer,
                    })
                  }
                />

                <NotificationToggle
                  title="Programme Updates"
                  description="Receive notifications about programme approvals and changes."
                  value={notifications.programme}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      programme: !notifications.programme,
                    })
                  }
                />

                <NotificationToggle
                  title="Counselling"
                  description="Receive updates regarding counselling bookings and appointments."
                  value={notifications.counselling}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      counselling: !notifications.counselling,
                    })
                  }
                />

                <NotificationToggle
                  title="System Notifications"
                  description="Receive important system announcements and maintenance alerts."
                  value={notifications.system}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      system: !notifications.system,
                    })
                  }
                />

              </div>

              <SettingsFooter
                saved={saved}
                onSave={handleSave}
              />

            </div>
          )}

          {/* ================= SECURITY ================= */}
          {activeTab === "security" && (
            <div className="bg-white border border-gray-200 rounded-2xl">

              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Account Security
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Update your password and protect your account.
                </p>
              </div>

              <div className="p-6 space-y-5">

                <PasswordInput
                  label="Current Password"
                  value={security.currentPassword}
                  onChange={(value) =>
                    setSecurity({
                      ...security,
                      currentPassword: value,
                    })
                  }
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />

                <PasswordInput
                  label="New Password"
                  value={security.newPassword}
                  onChange={(value) =>
                    setSecurity({
                      ...security,
                      newPassword: value,
                    })
                  }
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />

                <PasswordInput
                  label="Confirm New Password"
                  value={security.confirmPassword}
                  onChange={(value) =>
                    setSecurity({
                      ...security,
                      confirmPassword: value,
                    })
                  }
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">

                  <h3 className="font-semibold text-sm text-gray-800">
                    Password requirements
                  </h3>

                  <ul className="mt-2 text-xs text-gray-500 space-y-1">
                    <li>• At least 8 characters</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Include at least one number</li>
                    <li>• Avoid easily guessed passwords</li>
                  </ul>

                </div>

              </div>

              <SettingsFooter
                saved={saved}
                onSave={handleSave}
              />

            </div>
          )}

        </div>
      </div>
    </div>
  );
};


/* =========================
   SETTINGS FOOTER
========================= */

const SettingsFooter = ({ saved, onSave }) => {
  return (
    <div className="p-5 border-t border-gray-200 flex justify-end">

      <button
        onClick={onSave}
        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
      >
        {saved ? (
          <>
            <CheckCircle2 size={17} />
            Saved
          </>
        ) : (
          <>
            <Save size={17} />
            Save Changes
          </>
        )}
      </button>

    </div>
  );
};


/* =========================
   NOTIFICATION TOGGLE
========================= */

const NotificationToggle = ({
  title,
  description,
  value,
  onChange,
}) => {
  return (
    <div className="p-5 flex items-center justify-between gap-5">

      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 max-w-xl">
          {description}
        </p>
      </div>

      <button
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full transition ${
          value ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition ${
            value ? "left-6" : "left-1"
          }`}
        />
      </button>

    </div>
  );
};


/* =========================
   PASSWORD INPUT
========================= */

const PasswordInput = ({
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>

      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative mt-2">

        <Lock
          size={17}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

    </div>
  );
};

export default YCManagerSettings;
