export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Notification Settings
        </h2>
        <p className="text-gray-500 mt-2">
          Choose how you'd like to receive updates from the Bhutan Youth Portal.
        </p>
      </div>

      {/* Email Notifications */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Email Notifications
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Receive scholarship, application and portal updates via email.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* SMS */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              SMS Notifications
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Receive important reminders directly to your mobile phone.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Push */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Push Notifications
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Receive instant alerts while using the portal.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Scholarship Alerts */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Scholarship Alerts
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Notify me whenever new scholarships are available.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Event Updates */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Events & Programmes
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Stay updated about youth events, training and volunteer programmes.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">
              Monthly Newsletter
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Receive the latest news, success stories and opportunities.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
          Save Preferences
        </button>
      </div>
    </div>
  );
}