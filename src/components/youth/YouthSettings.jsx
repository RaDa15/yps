import { useEffect, useMemo, useState } from "react";
import {
  Settings,
  Palette,
  Image as ImageIcon,
  Bell,
  Shield,
  RotateCcw,
  Save,
  Upload,
  Check,
  Sun,
  Moon,
  Eye,
} from "lucide-react";

const DEFAULT_SETTINGS = {
  theme: "light",
  backgroundColor: "#f8fafc",
  backgroundImage: "",
  overlayOpacity: 25,

  // Automatically determine text contrast
  textMode: "auto",

  activityNotifications: true,
  certificateNotifications: true,
  achievementNotifications: true,
};

const YouthSettings = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);

  // =========================================================
  // LOAD SETTINGS
  // =========================================================

  useEffect(() => {
    const storedSettings = localStorage.getItem(
      "youthDashboardSettings"
    );

    if (!storedSettings) return;

    try {
      const parsed = JSON.parse(storedSettings);

      setSettings({
        ...DEFAULT_SETTINGS,
        ...parsed,
      });
    } catch (error) {
      console.error(
        "Unable to load youth dashboard settings:",
        error
      );
    }
  }, []);

  // =========================================================
  // UPDATE SETTING
  // =========================================================

  const updateSetting = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));

    setSaved(false);
  };

  // =========================================================
  // COLOR CONTRAST
  // =========================================================

  const getBrightness = (hexColor) => {
    if (!hexColor) return 255;

    let hex = hexColor.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    if (
      Number.isNaN(r) ||
      Number.isNaN(g) ||
      Number.isNaN(b)
    ) {
      return 255;
    }

    // Perceived brightness
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const backgroundBrightness = useMemo(() => {
    return getBrightness(settings.backgroundColor);
  }, [settings.backgroundColor]);

  // =========================================================
  // AUTOMATIC TEXT COLOR
  // =========================================================

  const isDarkBackground =
    backgroundBrightness < 150;

  const textIsLight =
    settings.textMode === "light" ||
    (
      settings.textMode === "auto" &&
      isDarkBackground
    );

  const primaryTextColor = textIsLight
    ? "#ffffff"
    : "#0f172a";

  const secondaryTextColor = textIsLight
    ? "rgba(255,255,255,0.72)"
    : "#64748b";

  const cardBackground = textIsLight
    ? "rgba(15,23,42,0.62)"
    : "rgba(255,255,255,0.90)";

  // =========================================================
  // IMAGE UPLOAD
  // =========================================================

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please choose an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      updateSetting(
        "backgroundImage",
        reader.result
      );
    };

    reader.readAsDataURL(file);
  };

  // =========================================================
  // SAVE
  // =========================================================

  const saveSettings = () => {
    localStorage.setItem(
      "youthDashboardSettings",
      JSON.stringify(settings)
    );

    // Notify YouthLayout and other components
    window.dispatchEvent(
      new Event("youthDashboardSettingsChanged")
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  // =========================================================
  // RESET
  // =========================================================

  const resetSettings = () => {
    const confirmed = window.confirm(
      "Reset all dashboard personalization settings?"
    );

    if (!confirmed) return;

    setSettings(DEFAULT_SETTINGS);

    localStorage.setItem(
      "youthDashboardSettings",
      JSON.stringify(DEFAULT_SETTINGS)
    );

    window.dispatchEvent(
      new Event("youthDashboardSettingsChanged")
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  // =========================================================
  // PREVIEW STYLE
  // =========================================================

  const previewStyle = {
    backgroundColor:
      settings.backgroundColor,

    backgroundImage:
      settings.backgroundImage
        ? `
          linear-gradient(
            rgba(
              15,
              23,
              42,
              ${settings.overlayOpacity / 100}
            ),
            rgba(
              15,
              23,
              42,
              ${settings.overlayOpacity / 100}
            )
          ),
          url("${settings.backgroundImage}")
        `
        : "none",

    backgroundSize: "cover",
    backgroundPosition: "center",
    color: primaryTextColor,
  };

  // =========================================================
  // THEME PRESETS
  // =========================================================

  const themes = [
    {
      id: "light",
      name: "Light",
      color: "#f8fafc",
      preview: "bg-slate-100",
    },
    {
      id: "blue",
      name: "Ocean",
      color: "#eff6ff",
      preview: "bg-blue-100",
    },
    {
      id: "green",
      name: "Nature",
      color: "#ecfdf5",
      preview: "bg-emerald-100",
    },
    {
      id: "dark",
      name: "Dark",
      color: "#0f172a",
      preview: "bg-slate-900",
    },
  ];

  const selectTheme = (theme) => {
    updateSetting("theme", theme.id);
    updateSetting(
      "backgroundColor",
      theme.color
    );
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div>
        <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
          <Settings size={16} />

          Volunteer Preferences
        </div>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personalize your Youth Portal dashboard,
          background, appearance and notification preferences.
        </p>
      </div>

      {/* =====================================================
          PERSONALIZATION
      ===================================================== */}

      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Palette size={19} />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Dashboard Personalization
              </h2>

              <p className="text-xs text-gray-500">
                Customize the appearance of your entire
                volunteer dashboard.
              </p>
            </div>

          </div>

        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-2">

          {/* =================================================
              LEFT SETTINGS
          ================================================= */}

          <div className="space-y-7">

            {/* THEME */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-gray-800">
                Dashboard Theme
              </label>

              <div className="grid grid-cols-2 gap-3">

                {themes.map((theme) => (

                  <button
                    key={theme.id}
                    type="button"
                    onClick={() =>
                      selectTheme(theme)
                    }
                    className={`rounded-xl border-2 p-3 text-left transition ${
                      settings.theme === theme.id
                        ? "border-blue-600 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >

                    <div
                      className={`mb-3 h-14 rounded-lg ${theme.preview}`}
                    />

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-semibold text-gray-700">
                        {theme.name}
                      </span>

                      {settings.theme === theme.id && (
                        <Check
                          size={15}
                          className="text-blue-600"
                        />
                      )}

                    </div>

                  </button>

                ))}

              </div>

            </div>

            {/* BACKGROUND COLOR */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-gray-800">
                Background Color
              </label>

              <div className="flex items-center gap-3">

                <input
                  type="color"
                  value={settings.backgroundColor}
                  onChange={(event) =>
                    updateSetting(
                      "backgroundColor",
                      event.target.value
                    )
                  }
                  className="h-11 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1"
                />

                <input
                  type="text"
                  value={settings.backgroundColor}
                  onChange={(event) =>
                    updateSetting(
                      "backgroundColor",
                      event.target.value
                    )
                  }
                  className="w-36 rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                />

              </div>

            </div>

            {/* TEXT COLOR MODE */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-gray-800">
                Text Contrast
              </label>

              <p className="mb-3 text-xs text-gray-500">
                Automatically change text color so it remains
                readable over your background.
              </p>

              <div className="grid grid-cols-3 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "textMode",
                      "auto"
                    )
                  }
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-xs font-semibold ${
                    settings.textMode === "auto"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <Eye size={15} />
                  Auto
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "textMode",
                      "light"
                    )
                  }
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-xs font-semibold ${
                    settings.textMode === "light"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <Sun size={15} />
                  Light
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "textMode",
                      "dark"
                    )
                  }
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-xs font-semibold ${
                    settings.textMode === "dark"
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <Moon size={15} />
                  Dark
                </button>

              </div>

            </div>

            {/* CUSTOM IMAGE */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-gray-800">
                Custom Dashboard Image
              </label>

              <div className="rounded-xl border-2 border-dashed border-gray-200 p-5 text-center transition hover:border-blue-400">

                <ImageIcon
                  size={28}
                  className="mx-auto mb-2 text-gray-400"
                />

                <p className="text-sm font-medium text-gray-700">
                  Add your own background
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  JPG, PNG or WEBP • Maximum 5MB
                </p>

                <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">

                  <Upload size={15} />

                  Choose Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                </label>

              </div>

              {settings.backgroundImage && (
                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "backgroundImage",
                      ""
                    )
                  }
                  className="mt-2 text-xs font-medium text-red-500 hover:text-red-600"
                >
                  Remove background image
                </button>
              )}

            </div>

            {/* OVERLAY */}

            <div>

              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm font-semibold text-gray-800">
                  Background Overlay
                </label>

                <span className="text-xs font-semibold text-gray-500">
                  {settings.overlayOpacity}%
                </span>

              </div>

              <input
                type="range"
                min="0"
                max="80"
                value={settings.overlayOpacity}
                onChange={(event) =>
                  updateSetting(
                    "overlayOpacity",
                    Number(event.target.value)
                  )
                }
                className="w-full"
              />

              <p className="mt-1 text-xs text-gray-400">
                Helps maintain text readability when using
                a busy background image.
              </p>

            </div>

          </div>

          {/* =================================================
              LIVE PREVIEW
          ================================================= */}

          <div>

            <div className="mb-3 flex items-center justify-between">

              <label className="text-sm font-semibold text-gray-800">
                Live Preview
              </label>

              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                {textIsLight
                  ? "Light Text"
                  : "Dark Text"}
              </span>

            </div>

            <div
              className="relative min-h-[430px] overflow-hidden rounded-2xl border border-gray-200 p-5 shadow-sm"
              style={previewStyle}
            >

              {/* CONTENT */}

              <div className="relative z-10">

                <div className="mb-5 flex items-center justify-between">

                  <div>

                    <p
                      className="text-xs font-medium"
                      style={{
                        color:
                          secondaryTextColor,
                      }}
                    >
                      Youth Portal System
                    </p>

                    <h3
                      className="mt-1 text-xl font-bold"
                      style={{
                        color:
                          primaryTextColor,
                      }}
                    >
                      Welcome back, Volunteer
                    </h3>

                  </div>

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl font-bold backdrop-blur"
                    style={{
                      background:
                        "rgba(255,255,255,0.18)",
                      color: primaryTextColor,
                    }}
                  >
                    Y
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  <div
                    className="rounded-xl p-4 backdrop-blur"
                    style={{
                      background:
                        cardBackground,
                    }}
                  >

                    <p
                      className="text-xs"
                      style={{
                        color:
                          textIsLight
                            ? "#cbd5e1"
                            : "#64748b",
                      }}
                    >
                      Volunteer Hours
                    </p>

                    <p
                      className="mt-2 text-2xl font-bold"
                      style={{
                        color:
                          textIsLight
                            ? "#ffffff"
                            : "#0f172a",
                      }}
                    >
                      248
                    </p>

                  </div>

                  <div
                    className="rounded-xl p-4 backdrop-blur"
                    style={{
                      background:
                        cardBackground,
                    }}
                  >

                    <p
                      className="text-xs"
                      style={{
                        color:
                          textIsLight
                            ? "#cbd5e1"
                            : "#64748b",
                      }}
                    >
                      Activities
                    </p>

                    <p
                      className="mt-2 text-2xl font-bold"
                      style={{
                        color:
                          textIsLight
                            ? "#ffffff"
                            : "#0f172a",
                      }}
                    >
                      32
                    </p>

                  </div>

                </div>

                <div
                  className="mt-3 rounded-xl p-4 backdrop-blur"
                  style={{
                    background:
                      cardBackground,
                  }}
                >

                  <p
                    className="text-xs font-semibold"
                    style={{
                      color:
                        textIsLight
                          ? "#ffffff"
                          : "#334155",
                    }}
                  >
                    Next Milestone
                  </p>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200/60">

                    <div className="h-full w-3/4 rounded-full bg-blue-600" />

                  </div>

                  <p
                    className="mt-2 text-xs"
                    style={{
                      color:
                        textIsLight
                          ? "#cbd5e1"
                          : "#64748b",
                    }}
                  >
                    75% completed
                  </p>

                </div>

              </div>

            </div>

            {/* CONTRAST INFORMATION */}

            <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">

              <div className="flex items-start gap-3">

                <div className="mt-0.5 text-blue-600">
                  <Eye size={16} />
                </div>

                <div>

                  <p className="text-xs font-semibold text-gray-800">
                    Automatic readability
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {textIsLight
                      ? "Your selected background is relatively dark, so the dashboard will use light text."
                      : "Your selected background is relatively light, so the dashboard will use dark text."}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NOTIFICATIONS
      ===================================================== */}

      <section className="rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Bell size={19} />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Notification Preferences
              </h2>

              <p className="text-xs text-gray-500">
                Choose which volunteer updates you want to receive.
              </p>

            </div>

          </div>

        </div>

        <div className="divide-y divide-gray-100">

          <ToggleRow
            title="Activity Notifications"
            description="Get notified about new activities and registrations."
            checked={
              settings.activityNotifications
            }
            onChange={(value) =>
              updateSetting(
                "activityNotifications",
                value
              )
            }
          />

          <ToggleRow
            title="Certificate Notifications"
            description="Receive alerts when certificates become available."
            checked={
              settings.certificateNotifications
            }
            onChange={(value) =>
              updateSetting(
                "certificateNotifications",
                value
              )
            }
          />

          <ToggleRow
            title="Achievement Notifications"
            description="Get updates when you reach milestones or achievements."
            checked={
              settings.achievementNotifications
            }
            onChange={(value) =>
              updateSetting(
                "achievementNotifications",
                value
              )
            }
          />

        </div>

      </section>

      {/* =====================================================
          SECURITY
      ===================================================== */}

      <section className="rounded-2xl border border-gray-200 bg-white">

        <div className="p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Shield size={19} />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Account & Privacy
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your personalization settings are stored
                locally on this device.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={resetSettings}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
        >

          <RotateCcw size={16} />

          Reset

        </button>

        <button
          type="button"
          onClick={saveSettings}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >

          {saved ? (
            <>
              <Check size={16} />
              Saved
            </>
          ) : (
            <>
              <Save size={16} />
              Save Preferences
            </>
          )}

        </button>

      </div>

    </div>
  );
};


// ===========================================================
// TOGGLE
// ===========================================================

const ToggleRow = ({
  title,
  description,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between gap-6 px-6 py-5">

      <div>

        <p className="text-sm font-semibold text-gray-800">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>

      </div>

      <button
        type="button"
        onClick={() =>
          onChange(!checked)
        }
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked
            ? "bg-blue-600"
            : "bg-gray-300"
        }`}
        aria-label={title}
      >

        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
            checked
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
};

export default YouthSettings;
