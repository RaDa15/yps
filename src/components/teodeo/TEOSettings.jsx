import { useState } from "react";

import {
  UserCircle,
  Building2,
  MapPin,
  Bell,
  Shield,
  Lock,
  Save,
  Mail,
  Phone,
  CheckCircle,
  KeyRound,
} from "lucide-react";

export default function TEOSettings() {
  const [notifications, setNotifications] = useState({
    "Programme approval alerts": true,
    "Monthly report reminders": true,
    "Volunteer activity updates": true,
    "System announcements": false,
  });

  const [saved, setSaved] = useState(false);

  const notificationItems = [
    "Programme approval alerts",
    "Monthly report reminders",
    "Volunteer activity updates",
    "System announcements",
  ];

  const handleNotificationChange = (item) => {
    setNotifications((previous) => ({
      ...previous,
      [item]: !previous[item],
    }));

    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
          <Shield className="w-4 h-4" />

          Account & System Settings
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          TEO / DEO Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your profile, jurisdiction access and system
          preferences
        </p>
      </div>


      {/* ==================================================
          MAIN GRID
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ==================================================
            PROFILE CARD
        ================================================== */}

        <div className="
          xl:col-span-2
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        ">

          <div className="flex items-center gap-3 mb-6">

            <div className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <UserCircle className="w-6 h-6" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Profile Information
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Your official officer account information
              </p>
            </div>

          </div>


          {/* PROFILE HEADER */}

          <div className="
            bg-gray-50
            rounded-2xl
            p-5
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-4
            mb-6
          ">

            <div className="
              w-16
              h-16
              rounded-2xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              text-xl
              font-bold
              flex-shrink-0
            ">
              TD
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Tshering Dorji
              </h3>

              <p className="text-sm text-gray-500">
                TEO / DEO Officer
              </p>

              <div className="flex items-center gap-2 mt-2 text-xs text-blue-600 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />

                Verified Officer Account
              </div>

            </div>

          </div>


          {/* PROFILE FORM */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* FULL NAME */}

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              ">
                Full Name
              </label>

              <div className="relative">

                <UserCircle className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-gray-400
                " />

                <input
                  type="text"
                  defaultValue="Tshering Dorji"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    pl-10
                    pr-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />

              </div>
            </div>


            {/* EMAIL */}

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              ">
                Email Address
              </label>

              <div className="relative">

                <Mail className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-gray-400
                " />

                <input
                  type="email"
                  defaultValue="tshering.dorji@example.gov.bt"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    pl-10
                    pr-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />

              </div>
            </div>


            {/* PHONE */}

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              ">
                Phone Number
              </label>

              <div className="relative">

                <Phone className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-gray-400
                " />

                <input
                  type="tel"
                  defaultValue="+975 17 123 456"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    pl-10
                    pr-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />

              </div>
            </div>


            {/* ROLE */}

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
              ">
                Role
              </label>

              <div className="
                w-full
                border
                border-gray-200
                bg-gray-50
                rounded-xl
                px-4
                py-3
                text-sm
                text-gray-600
              ">
                TEO / DEO - Jurisdiction Supervisor
              </div>
            </div>

          </div>

        </div>


        {/* ==================================================
            SECURITY CARD
        ================================================== */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        ">

          <div className="flex items-center gap-3 mb-6">

            <div className="
              w-11
              h-11
              rounded-xl
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            ">
              <Lock className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Security
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Account security settings
              </p>
            </div>

          </div>


          <div className="space-y-4">

            <div className="
              flex
              items-center
              justify-between
              p-4
              rounded-xl
              bg-gray-50
            ">

              <div className="flex items-center gap-3">

                <KeyRound className="w-5 h-5 text-gray-500" />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Password
                  </p>

                  <p className="text-xs text-gray-400">
                    Last changed recently
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="
                  text-xs
                  font-bold
                  text-blue-600
                  hover:text-blue-700
                "
              >
                Change
              </button>

            </div>


            <div className="
              flex
              items-center
              justify-between
              p-4
              rounded-xl
              bg-gray-50
            ">

              <div className="flex items-center gap-3">

                <Shield className="w-5 h-5 text-emerald-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Account Status
                  </p>

                  <p className="text-xs text-emerald-600">
                    Active & Verified
                  </p>
                </div>

              </div>

              <CheckCircle className="w-5 h-5 text-emerald-600" />

            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          JURISDICTION SETTINGS
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-6
      ">

        <div className="flex items-center gap-3 mb-6">

          <div className="
            w-11
            h-11
            rounded-xl
            bg-indigo-50
            text-indigo-600
            flex
            items-center
            justify-center
          ">
            <Building2 className="w-5 h-5" />
          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Jurisdiction Access
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Your assigned administrative coverage
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* DZONGKHAG */}

          <div className="
            border
            border-gray-100
            rounded-xl
            p-5
            flex
            items-center
            gap-4
          ">

            <div className="
              w-10
              h-10
              rounded-lg
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <MapPin className="w-5 h-5" />
            </div>

            <div>

              <p className="text-xs text-gray-400">
                Assigned Dzongkhag
              </p>

              <p className="font-bold text-gray-900 mt-1">
                Thimphu
              </p>

            </div>

          </div>


          {/* CENTRES */}

          <div className="
            border
            border-gray-100
            rounded-xl
            p-5
            flex
            items-center
            gap-4
          ">

            <div className="
              w-10
              h-10
              rounded-lg
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            ">
              <Building2 className="w-5 h-5" />
            </div>

            <div>

              <p className="text-xs text-gray-400">
                Youth Centres Managed
              </p>

              <p className="font-bold text-gray-900 mt-1">
                5 Centres
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          NOTIFICATION SETTINGS
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-6
      ">

        <div className="flex items-center gap-3 mb-6">

          <div className="
            w-11
            h-11
            rounded-xl
            bg-orange-50
            text-orange-600
            flex
            items-center
            justify-center
          ">
            <Bell className="w-5 h-5" />
          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Notification Preferences
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Choose which notifications you want to receive
            </p>

          </div>

        </div>


        <div className="divide-y divide-gray-100">

          {notificationItems.map((item) => (

            <div
              key={item}
              className="
                py-4
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div className="flex items-center gap-3">

                <div className="
                  w-8
                  h-8
                  rounded-lg
                  bg-gray-50
                  text-gray-500
                  flex
                  items-center
                  justify-center
                ">
                  <Bell className="w-4 h-4" />
                </div>

                <p className="text-sm font-medium text-gray-700">
                  {item}
                </p>

              </div>


              {/* TOGGLE */}

              <button
                type="button"
                onClick={() => handleNotificationChange(item)}
                aria-label={`Toggle ${item}`}
                className={`
                  relative
                  w-11
                  h-6
                  rounded-full
                  transition
                  flex-shrink-0
                  ${
                    notifications[item]
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }
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
                    ${
                      notifications[item]
                        ? "left-6"
                        : "left-1"
                    }
                  `}
                />

              </button>

            </div>

          ))}

        </div>

      </div>


      {/* ==================================================
          SAVE SECTION
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-5
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
      ">

        <div>

          <p className="text-sm font-semibold text-gray-800">
            Save your settings
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Your notification preferences will be applied to
            future system alerts.
          </p>

        </div>


        <div className="flex items-center gap-3">

          {saved && (
            <span className="
              flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-emerald-600
            ">
              <CheckCircle className="w-4 h-4" />
              Changes saved
            </span>
          )}

          <button
            type="button"
            onClick={handleSave}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-3
              rounded-xl
              text-sm
              font-bold
              flex
              items-center
              justify-center
              gap-2
              transition
            "
          >

            <Save className="w-4 h-4" />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}