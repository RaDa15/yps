export default function GeneralSettings() {
    return (
        <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-6">
                General Settings
            </h2>
            <div className="space-y-5">
                <div>
                    <label className="block mb-2 font-medium">
                        Full Name
                    </label>
                    <input
                        className="w-full border rounded-xl p-3"
                        defaultValue="Sonam Dorji"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        className="w-full border rounded-xl p-3"
                        defaultValue="sonam@gmail.com"
                    />
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                    Save Changes
                </button>
            </div>
        </div>
    )
}