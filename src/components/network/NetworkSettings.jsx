import { useState } from "react";
import {
  User,
  Network,
  Bell,
  ShieldCheck,
  Lock,
  Save,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";

const NetworkSettings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Kinley Norbu",
    email: "kinley.norbu@example.com",
    phone: "+975 17XXXXXX",
    designation: "Network Focal Point",
  });

  const [network, setNetwork] = useState({
    name: "Y-PEER Bhutan Network",
    code: "YPEER-BTN-001",
    location: "Thimphu",
    description:
      "Youth Peer Education Network focused on youth leadership, volunteer engagement and community development.",
  });

  const [notifications, setNotifications] = useState({
    volunteerApplications: true,
    activitySubmissions: true,
    serviceHourValidation: true,
    networkActivities: true,
    nationalAnnouncements: true,
    emailNotifications: true,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const menuItems = [
    {
      id: "profile",
      label: "Profile Information",
      icon: User,
    },
    {
      id: "network",
      label: "Network Settings",
      icon: Network,
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
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <p className="text-sm font-semibold text-emerald-600">
          Account Configuration
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-2 max-w-2xl">
          Manage your Network Focal Point profile, network information,
          notification preferences and account security.
        </p>
      </div>

      {/* SETTINGS LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* SIDEBAR */}
        <aside className="lg:col-span-3">

          <div className="bg-white border border-gray-200 rounded-2xl p-2">

            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />

                  <span>{item.label}</span>
                </button>
              );
            })}

          </div>

          {/* ROLE CARD */}
          <div className="mt-4 bg-gray-900 rounded-2xl p-5 text-white">

            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Network className="w-5 h-5" />
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Current Role
            </p>

            <p className="font-bold mt-1">
              Network Focal Point
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Network-level access and volunteer management
            </p>

          </div>

        </aside>

        {/* CONTENT */}
        <main className="lg:col-span-9">

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

            {/* PROFILE */}
            {activeSection === "profile" && (
              <div>

                <div className="p-6 border-b border-gray-100">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>

                    <div>
                      <h2 className="font-extrabold text-gray-900">
                        Profile Information
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        Update your Network Focal Point account information.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="p-6 space-y-5">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Full Name
                      </label>

                      <input
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            name: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Designation
                      </label>

                      <input
                        value={profile.designation}
                        disabled
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            email: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Phone Number
                      </label>

                      <input
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            phone: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                  </div>

                  <div className="flex justify-end pt-3">

                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>

                  </div>

                </div>

              </div>
            )}

            {/* NETWORK */}
            {activeSection === "network" && (
              <div>

                <div className="p-6 border-b border-gray-100">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Network className="w-5 h-5" />
                    </div>

                    <div>
                      <h2 className="font-extrabold text-gray-900">
                        Network Settings
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        View and manage your assigned Y-PEER network.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="p-6 space-y-5">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Network Name
                      </label>

                      <input
                        value={network.name}
                        onChange={(e) =>
                          setNetwork({
                            ...network,
                            name: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Network Code
                      </label>

                      <input
                        value={network.code}
                        disabled
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700">
                        Primary Location
                      </label>

                      <input
                        value={network.location}
                        onChange={(e) =>
                          setNetwork({
                            ...network,
                            location: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700">
                      Network Description
                    </label>

                    <textarea
                      rows="4"
                      value={network.description}
                      onChange={(e) =>
                        setNetwork({
                          ...network,
                          description: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">

                    <p className="text-xs font-bold text-amber-800">
                      Network Access
                    </p>

                    <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                      Network information and administrative configuration
                      may require approval from the National Focal Point or
                      PYCD administrator.
                    </p>

                  </div>

                  <div className="flex justify-end">

                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>

                  </div>

                </div>

              </div>
            )}

            {/* NOTIFICATIONS */}
            {activeSection === "notifications" && (
              <div>

                <div className="p-6 border-b border-gray-100">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Bell className="w-5 h-5" />
                    </div>

                    <div>
                      <h2 className="font-extrabold text-gray-900">
                        Notification Preferences
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        Choose which network events you want to receive.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="divide-y divide-gray-100">

                  {[
                    [
                      "volunteerApplications",
                      "Volunteer Applications",
                      "Receive alerts when volunteers submit applications.",
                    ],
                    [
                      "activitySubmissions",
                      "Activity Submissions",
                      "Receive alerts when network activities are submitted.",
                    ],
                    [
                      "serviceHourValidation",
                      "Service Hour Validation",
                      "Receive notifications when service hours require validation.",
                    ],
                    [
                      "networkActivities",
                      "Network Activities",
                      "Receive updates about upcoming network activities.",
                    ],
                    [
                      "nationalAnnouncements",
                      "National Announcements",
                      "Receive announcements from the National Focal Point.",
                    ],
                    [
                      "emailNotifications",
                      "Email Notifications",
                      "Receive important notifications through email.",
                    ],
                  ].map(([key, title, description]) => (

                    <div
                      key={key}
                      className="p-5 flex items-center justify-between gap-5"
                    >

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {title}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          {description}
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          setNotifications({
                            ...notifications,
                            [key]: !notifications[key],
                          })
                        }
                        className={`relative w-11 h-6 rounded-full transition ${
                          notifications[key]
                            ? "bg-emerald-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition ${
                            notifications[key]
                              ? "left-6"
                              : "left-1"
                          }`}
                        />
                      </button>

                    </div>

                  ))}

                </div>

                <div className="p-6 flex justify-end">

                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                  >
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </button>

                </div>

              </div>
            )}

            {/* SECURITY */}
            {activeSection === "security" && (
              <div>

                <div className="p-6 border-b border-gray-100">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <div>
                      <h2 className="font-extrabold text-gray-900">
                        Account Security
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        Manage your password and account security.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="p-6 space-y-5">

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">

                    <div className="flex gap-3">

                      <Lock className="w-5 h-5 text-blue-600 mt-0.5" />

                      <div>

                        <p className="text-xs font-bold text-blue-800">
                          NDI Authentication
                        </p>

                        <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                          Your identity is authenticated through Bhutan
                          National Digital Identity. Password changes may
                          not be required for NDI-managed accounts.
                        </p>

                      </div>

                    </div>

                  </div>

                  <div>

                    <label className="text-xs font-bold text-gray-700">
                      Current Password
                    </label>

                    <div className="relative">

                      <input
                        type={showPassword ? "text" : "password"}
                        value={security.currentPassword}
                        onChange={(e) =>
                          setSecurity({
                            ...security,
                            currentPassword: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-3 top-5 text-gray-400 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>

                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>

                      <label className="text-xs font-bold text-gray-700">
                        New Password
                      </label>

                      <input
                        type="password"
                        value={security.newPassword}
                        onChange={(e) =>
                          setSecurity({
                            ...security,
                            newPassword: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />

                    </div>

                    <div>

                      <label className="text-xs font-bold text-gray-700">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        value={security.confirmPassword}
                        onChange={(e) =>
                          setSecurity({
                            ...security,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />

                    </div>

                  </div>

                  <div className="flex justify-end">

                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                    >
                      <Save className="w-4 h-4" />
                      Update Security
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* SUCCESS MESSAGE */}
          {saved && (
            <div className="mt-4 flex items-center gap-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">

              <CheckCircle2 className="w-5 h-5" />

              Settings saved successfully.

            </div>
          )}

        </main>

      </div>

    </div>
  );
};

export default NetworkSettings;
