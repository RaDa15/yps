import { useEffect, useState } from "react";
import {
  Settings,
  ShieldCheck,
  Bell,
  Database,
  Lock,
  Save,
  Globe,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* =========================================================
   DEFAULT SETTINGS
========================================================= */

const DEFAULT_SETTINGS = {
  maintenanceMode: false,

  notifications: true,
  autoReports: true,

  offlineSync: true,
  ndiVerification: true,
  dcrcVerification: true,

  auditLogging: true,
  strictApproval: true,
};

/* =========================================================
   SETTING TOGGLE COMPONENT
========================================================= */

const SettingToggle = ({
  label,
  description,
  settingKey,
  settings,
  updateSetting,
}) => {
  const enabled = settings[settingKey];

  return (
    <div className="flex items-center justify-between gap-6 py-4 border-b border-gray-100 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900">
          {label}
        </p>

        <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => updateSetting(settingKey)}
        aria-label={`${enabled ? "Disable" : "Enable"} ${label}`}
        aria-pressed={enabled}
        className={`relative w-12 h-6 rounded-full transition-all duration-200 flex-shrink-0 ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
            enabled ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const SystemSettings = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const [savedSettings, setSavedSettings] =
    useState(DEFAULT_SETTINGS);

  const [saved, setSaved] = useState(false);

  const [lastSaved, setLastSaved] = useState(null);

  /* =======================================================
     LOAD SAVED SETTINGS
  ======================================================= */

  useEffect(() => {
    try {
      const storedSettings =
        localStorage.getItem("pycdSystemSettings");

      const storedTime =
        localStorage.getItem("pycdSystemSettingsSavedAt");

      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings);

        const mergedSettings = {
          ...DEFAULT_SETTINGS,
          ...parsedSettings,
        };

        setSettings(mergedSettings);
        setSavedSettings(mergedSettings);
      }

      if (storedTime) {
        setLastSaved(storedTime);
      }
    } catch (error) {
      console.error(
        "Unable to load system settings:",
        error
      );
    }
  }, []);

  /* =======================================================
     UPDATE SETTING
  ======================================================= */

  const updateSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    setSaved(false);
  };

  /* =======================================================
     CHECK FOR UNSAVED CHANGES
  ======================================================= */

  const hasChanges =
    JSON.stringify(settings) !==
    JSON.stringify(savedSettings);

  /* =======================================================
     SAVE SETTINGS
  ======================================================= */

  const saveSettings = () => {
    try {
      const timestamp = new Date().toISOString();

      localStorage.setItem(
        "pycdSystemSettings",
        JSON.stringify(settings)
      );

      localStorage.setItem(
        "pycdSystemSettingsSavedAt",
        timestamp
      );

      setSavedSettings(settings);
      setLastSaved(timestamp);
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Unable to save system settings:",
        error
      );
    }
  };

  /* =======================================================
     RESET SETTINGS
  ======================================================= */

  const resetSettings = () => {
    const confirmed = window.confirm(
      "Reset all system settings to their default configuration?"
    );

    if (!confirmed) return;

    setSettings(DEFAULT_SETTINGS);
    setSaved(false);
  };

  /* =======================================================
     FORMAT LAST SAVED TIME
  ======================================================= */

  const formatLastSaved = () => {
    if (!lastSaved) {
      return "Not saved yet";
    }

    try {
      return new Date(lastSaved).toLocaleString();
    } catch {
      return "Not available";
    }
  };

  return (
    <div className="space-y-6">

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                System Settings
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Configure national Youth Portal System behaviour and security
              </p>

            </div>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="flex flex-col sm:flex-row gap-2">

          <button
            type="button"
            onClick={resetSettings}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
          >
            <RotateCcw className="w-4 h-4" />

            Reset Defaults
          </button>


          <button
            type="button"
            onClick={saveSettings}
            disabled={!hasChanges}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              hasChanges
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Save className="w-4 h-4" />

            {hasChanges
              ? "Save Changes"
              : "Saved"}
          </button>

        </div>

      </div>


      {/* ===================================================
          SAVE STATUS
      =================================================== */}

      {saved && (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2">

          <CheckCircle2 className="w-4 h-4" />

          System settings saved successfully.

        </div>
      )}


      {/* ===================================================
          UNSAVED CHANGES
      =================================================== */}

      {hasChanges && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">

          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />

          <div>

            <p className="text-sm font-semibold text-amber-900">
              Unsaved changes
            </p>

            <p className="text-xs text-amber-700 mt-0.5">
              You have modified system settings. Save your changes
              before leaving this page.
            </p>

          </div>

        </div>
      )}


      {/* ===================================================
          SYSTEM STATUS
      =================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              System Status
            </h2>

            <p className="text-xs text-gray-500">
              Current national platform status
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* PLATFORM */}

          <div className="bg-emerald-50 rounded-xl p-4">

            <p className="text-xs text-gray-500">
              Platform
            </p>

            <div className="flex items-center gap-2 mt-1">

              <CheckCircle2 className="w-4 h-4 text-emerald-600" />

              <p className="text-sm font-bold text-emerald-700">
                {settings.maintenanceMode
                  ? "Maintenance Mode"
                  : "Operational"}
              </p>

            </div>

          </div>


          {/* YOUTH CENTRES */}

          <div className="bg-blue-50 rounded-xl p-4">

            <p className="text-xs text-gray-500">
              Youth Centres
            </p>

            <p className="text-sm font-bold text-blue-700 mt-1">
              13 / 13 Online
            </p>

          </div>


          {/* SYNC */}

          <div className="bg-purple-50 rounded-xl p-4">

            <p className="text-xs text-gray-500">
              Data Synchronization
            </p>

            <p className="text-sm font-bold text-purple-700 mt-1">
              {settings.offlineSync
                ? "Enabled"
                : "Disabled"}
            </p>

          </div>

        </div>

      </div>


      {/* ===================================================
          MAINTENANCE MODE WARNING
      =================================================== */}

      {settings.maintenanceMode && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">

          <div className="flex items-start gap-3">

            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />

            <div>

              <h3 className="text-sm font-bold text-red-900">
                Maintenance Mode Enabled
              </h3>

              <p className="text-xs text-red-700 mt-1 leading-relaxed">
                The system is configured for maintenance mode.
                In a production environment, this setting should
                restrict access for non-authorised users.
              </p>

            </div>

          </div>

        </div>
      )}


      {/* ===================================================
          GENERAL CONFIGURATION
      =================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-2">

          <Bell className="w-5 h-5 text-blue-600" />

          <h2 className="text-lg font-bold text-gray-900">
            General Configuration
          </h2>

        </div>

        <p className="text-xs text-gray-500 mb-3">
          Configure platform-wide operational behaviour.
        </p>


        <SettingToggle
          label="System Notifications"
          description="Enable real-time notifications for PYCD, Youth Centres and authorised stakeholders."
          settingKey="notifications"
          settings={settings}
          updateSetting={updateSetting}
        />


        <SettingToggle
          label="Automated Report Distribution"
          description="Allow scheduled national reports to be generated and distributed automatically."
          settingKey="autoReports"
          settings={settings}
          updateSetting={updateSetting}
        />


        <SettingToggle
          label="Maintenance Mode"
          description="Temporarily restrict system access during scheduled maintenance."
          settingKey="maintenanceMode"
          settings={settings}
          updateSetting={updateSetting}
        />

      </div>


      {/* ===================================================
          DATA & INTEGRATION
      =================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-2">

          <Database className="w-5 h-5 text-blue-600" />

          <h2 className="text-lg font-bold text-gray-900">
            Data & Integration
          </h2>

        </div>

        <p className="text-xs text-gray-500 mb-3">
          Manage national data synchronization and identity integrations.
        </p>


        <SettingToggle
          label="Offline Data Synchronization"
          description="Allow Youth Centre PWA clients to synchronize data when connectivity is restored."
          settingKey="offlineSync"
          settings={settings}
          updateSetting={updateSetting}
        />


        <SettingToggle
          label="NDI Identity Verification"
          description="Enable National Digital Identity verification for supported workflows."
          settingKey="ndiVerification"
          settings={settings}
          updateSetting={updateSetting}
        />


        <SettingToggle
          label="DCRC Census Verification"
          description="Enable DCRC data verification for youth registration and identity validation."
          settingKey="dcrcVerification"
          settings={settings}
          updateSetting={updateSetting}
        />

      </div>


      {/* ===================================================
          SECURITY
      =================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-2">

          <Lock className="w-5 h-5 text-blue-600" />

          <h2 className="text-lg font-bold text-gray-900">
            Security & Governance
          </h2>

        </div>

        <p className="text-xs text-gray-500 mb-3">
          National-level security and accountability controls.
        </p>


        <SettingToggle
          label="Audit Logging"
          description="Record administrative actions, approvals, configuration changes and system events."
          settingKey="auditLogging"
          settings={settings}
          updateSetting={updateSetting}
        />


        <SettingToggle
          label="Strict Approval Workflow"
          description="Require authorised approval before national programme and activity records become active."
          settingKey="strictApproval"
          settings={settings}
          updateSetting={updateSetting}
        />

      </div>


      {/* ===================================================
          CURRENT CONFIGURATION
      =================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex items-center gap-3 mb-5">

          <ShieldCheck className="w-5 h-5 text-blue-600" />

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Configuration Summary
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Current system configuration state
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {Object.entries(settings).map(
            ([key, value]) => (

              <div
                key={key}
                className="border border-gray-100 rounded-xl p-4"
              >

                <p className="text-xs text-gray-500 capitalize">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .trim()}
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <span
                    className={`w-2 h-2 rounded-full ${
                      value
                        ? "bg-emerald-500"
                        : "bg-gray-300"
                    }`}
                  />

                  <span
                    className={`text-sm font-bold ${
                      value
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }`}
                  >
                    {value
                      ? "Enabled"
                      : "Disabled"}
                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </div>


      {/* ===================================================
          LAST SAVED
      =================================================== */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3">

        <Clock className="w-4 h-4 text-gray-500" />

        <p className="text-xs text-gray-500">

          Last saved:

          <span className="font-semibold text-gray-700 ml-1">
            {formatLastSaved()}
          </span>

        </p>

      </div>


      {/* ===================================================
          SECURITY NOTICE
      =================================================== */}

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

        <div className="flex items-start gap-3">

          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />

          <div>

            <h3 className="text-sm font-bold text-blue-900">
              PYCD Administrative Controls
            </h3>

            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
              System configuration changes are national-level
              administrative actions and should be recorded through
              the system audit trail. In the production system,
              these settings should be persisted through the
              backend rather than browser storage.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SystemSettings;