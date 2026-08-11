import {
    User,
    ShieldCheck,
    Bell,
    Palette,
    Lock,
    Accessibility,
    Link,
    Info

} from "lucide-react";

const menus = [
    {
        id: "general",
        name: "General",
        icon: User
    },

    {
        id: "security",
        name: "Security",
        icon: ShieldCheck
    },

    {
        id: "notifications",
        name: "Notifications",
        icon: Bell
    },

    {
        id: "appearance",
        name: "Appearance",
        icon: Palette
    },

    {
        id: "privacy",
        name: "Privacy",
        icon: Lock
    },

    {
        id: "accessibility",
        name: "Accessibility",
        icon: Accessibility
    },

    {
        id: "accounts",
        name: "Connected Accounts",
        icon: Link
    },

    {
        id: "about",
        name: "About",
        icon: Info
    }
];

export default function SettingsSidebar({
    tab,
    setTab
}) {

    return (
        <div className="bg-white rounded-2xl shadow p-4">
            {
                menus.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setTab(item.id)}
                            className={` w-full flex items-center gap-3 px-4 py-6.5 rounded-xl mb-2 transition
                            ${tab === item.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </button>
                    )
                })
            }
        </div>
    )
}