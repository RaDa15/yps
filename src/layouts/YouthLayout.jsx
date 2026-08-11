import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import YouthSidebar from "../components/youth/YouthSidebar";
import YouthHeader from "../components/youth/YouthHeader";

const DEFAULT_SETTINGS = {
  theme: "light",
  backgroundColor: "#f8fafc",
  backgroundImage: "",
  overlayOpacity: 20,
  compactMode: false,
};

const THEME_CONFIG = {
  light: {
    background: "#f8fafc",
    textPrimary: "#111827",
    textSecondary: "#6b7280",
    card: "rgba(255,255,255,0.94)",
    border: "rgba(229,231,235,0.9)",
  },

  blue: {
    background: "#eff6ff",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    card: "rgba(255,255,255,0.94)",
    border: "rgba(191,219,254,0.9)",
  },

  green: {
    background: "#ecfdf5",
    textPrimary: "#064e3b",
    textSecondary: "#4b635b",
    card: "rgba(255,255,255,0.94)",
    border: "rgba(167,243,208,0.9)",
  },
};

/* -----------------------------------------
   HEX → RGB
----------------------------------------- */

const hexToRgb = (hex) => {
  if (!hex) return null;

  const clean = hex.replace("#", "");

  if (clean.length !== 6) return null;

  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  return { r, g, b };
};

/* -----------------------------------------
   Calculate brightness
----------------------------------------- */

const getBrightness = (hex) => {
  const rgb = hexToRgb(hex);

  if (!rgb) return 255;

  return (
    (rgb.r * 299 +
      rgb.g * 587 +
      rgb.b * 114) /
    1000
  );
};

/* -----------------------------------------
   Youth Layout
----------------------------------------- */

const YouthLayout = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  /* -----------------------------------------
     Load settings
  ----------------------------------------- */

  useEffect(() => {
    const loadSettings = () => {
      try {
        const stored = localStorage.getItem(
          "youthDashboardSettings"
        );

        if (stored) {
          const parsed = JSON.parse(stored);

          setSettings({
            ...DEFAULT_SETTINGS,
            ...parsed,
          });
        }
      } catch (error) {
        console.error(
          "Unable to load Youth Dashboard settings:",
          error
        );
      }
    };

    loadSettings();

    /*
      Listen for changes made by YouthSettings.
      This allows the dashboard to update without
      requiring the user to manually refresh.
    */

    window.addEventListener(
      "youthDashboardSettingsChanged",
      loadSettings
    );

    return () => {
      window.removeEventListener(
        "youthDashboardSettingsChanged",
        loadSettings
      );
    };
  }, []);

  /* -----------------------------------------
     Determine background
  ----------------------------------------- */

  const backgroundColor = useMemo(() => {
    if (
      settings.backgroundColor &&
      settings.backgroundColor !== "#f8fafc"
    ) {
      return settings.backgroundColor;
    }

    return (
      THEME_CONFIG[settings.theme]?.background ||
      DEFAULT_SETTINGS.backgroundColor
    );
  }, [
    settings.backgroundColor,
    settings.theme,
  ]);

  /* -----------------------------------------
     Determine whether background is dark
  ----------------------------------------- */

  const isDarkBackground = useMemo(() => {
    return getBrightness(backgroundColor) < 145;
  }, [backgroundColor]);

  /* -----------------------------------------
     Text colors
  ----------------------------------------- */

  const textPrimary = isDarkBackground
    ? "#ffffff"
    : THEME_CONFIG[settings.theme]?.textPrimary ||
      "#111827";

  const textSecondary = isDarkBackground
    ? "rgba(255,255,255,0.75)"
    : THEME_CONFIG[settings.theme]?.textSecondary ||
      "#6b7280";

  const cardBackground = isDarkBackground
    ? "rgba(15,23,42,0.72)"
    : THEME_CONFIG[settings.theme]?.card ||
      "rgba(255,255,255,0.94)";

  const borderColor = isDarkBackground
    ? "rgba(255,255,255,0.15)"
    : THEME_CONFIG[settings.theme]?.border ||
      "rgba(229,231,235,0.9)";

  /* -----------------------------------------
     Background image overlay
  ----------------------------------------- */

  const overlay = settings.backgroundImage
    ? `linear-gradient(
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
      ),`
    : "";

  /* -----------------------------------------
     Dashboard CSS variables
  ----------------------------------------- */

  const dashboardStyle = {
    "--youth-bg": backgroundColor,
    "--youth-text-primary": textPrimary,
    "--youth-text-secondary": textSecondary,
    "--youth-card-bg": cardBackground,
    "--youth-border": borderColor,
    "--youth-accent":
      settings.theme === "green"
        ? "#059669"
        : "#2563eb",

    backgroundColor,

    backgroundImage: settings.backgroundImage
      ? `${overlay} url(${settings.backgroundImage})`
      : "none",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",

    color: textPrimary,

    minHeight: "100vh",
  };

  return (
    <div
      className={`min-h-screen ${
        settings.compactMode
          ? "youth-compact-mode"
          : ""
      }`}
      style={dashboardStyle}
    >
      {/* Sidebar */}
      <YouthSidebar />

      {/* Main area */}
      <div className="ml-72 min-h-screen">
        {/* Header */}
        <YouthHeader />

        {/* Page content */}
        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default YouthLayout;
