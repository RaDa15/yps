import React from "react";

const SecuritySettings = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-semibold">
        Security Settings
      </h2>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-medium mb-4">
          Change Password
        </h3>

        <input
          type="password"
          placeholder="Current Password"
          className="border p-3 rounded-lg w-full mb-3"
        />

        <input
          type="password"
          placeholder="New Password"
          className="border p-3 rounded-lg w-full mb-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Update Password
        </button>

      </div>


      {/* Two Factor Authentication */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h3 className="text-lg font-medium">
          Two-Factor Authentication
        </h3>

        <div className="flex justify-between mt-4">
          <p>
            Add an extra layer of security
          </p>

          <input type="checkbox"/>
        </div>

      </div>


      {/* Login Activity */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h3 className="text-lg font-medium mb-4">
          Recent Login Activity
        </h3>

        <p className="text-gray-500">
          No recent activity available.
        </p>

      </div>

    </div>
  );
};

export default SecuritySettings;