import { useState } from "react";

import SettingsSidebar from "../components/settings/SettingsSidebar";

import GeneralSettings from "../components/settings/GeneralSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
// import PrivacySettings from "../components/settings/PrivacySettings";
// import AccessibilitySettings from "../components/settings/AccessibilitySettings";
// import ConnectedAccounts from "../components/settings/ConnectedAccounts";
// import AboutSettings from "../components/settings/AboutSettings";

export default function Settings() {

    const [tab, setTab] = useState("general");

    const renderContent = () => {

        switch (tab) {

            case "general":
                return <GeneralSettings />;

            case "security":
                return <SecuritySettings />;

            case "notifications":
                return <NotificationSettings />;

            case "appearance":
                return <AppearanceSettings />;

            // case "privacy":
            // return <PrivacySettings />;

            // case "accessibility":
            //     return <AccessibilitySettings />;

            // case "accounts":
            //     return <ConnectedAccounts />;

            // case "about":
            //     return <AboutSettings />;

            default:
                return <GeneralSettings />;
        }
    };

    return (

        <div>

            {/* Settings Flyout Sidebar */}

            <aside
                className="
                    absolute
                    left-72
                    top-20
                    w-64
                    h-full
                    bg-white
                    border-r
                    border-gray-200
                    shadow-sm
                "
            >

                <SettingsSidebar
                    tab={tab}
                    setTab={setTab}
                />

            </aside>

            {/* Main Content */}

            <main
                className="
                    ml-[34rem]
                    p-10
                "
            >

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Settings
                </h1>

                <p className="text-gray-500 mb-8">
                    Manage your account preferences and portal settings.
                </p>

                {renderContent()}

            </main>

        </div>

    );

}