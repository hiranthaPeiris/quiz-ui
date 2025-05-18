import React, { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically save settings to backend or localStorage
    alert("Settings saved!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Settings</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Username:
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="ml-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="darkMode"
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="mr-2 accent-blue-600"
            />
            <label htmlFor="darkMode" className="text-gray-700 dark:text-gray-200">
              Enable Dark Mode
            </label>
          </div>
          <div className="mb-6 flex items-center">
            <input
              id="notifications"
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="mr-2 accent-blue-600"
            />
            <label htmlFor="notifications" className="text-gray-700 dark:text-gray-200">
              Enable Notifications
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;