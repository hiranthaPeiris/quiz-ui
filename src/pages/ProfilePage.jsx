import React, { useState } from "react";

const initialProfile = {
  profileImage: "https://i.pravatar.cc/120?img=3",
  registrationNumber: "REG2025001",
  username: "john_doe",
  email: "john@example.com",
  mobile: "123-456-7890",
  vehicleClass: "Class B"
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    username: profile.username,
    email: profile.email,
    mobile: profile.mobile
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...profile, ...form });
    setEditMode(false);
    alert("Profile updated!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-400 mr-6"
          />
          <div>
            <div className="text-gray-700 dark:text-gray-200"><span className="font-semibold">Registration No:</span> {profile.registrationNumber}</div>
            <div className="text-gray-700 dark:text-gray-200"><span className="font-semibold">Vehicle Class:</span> {profile.vehicleClass}</div>
          </div>
        </div>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Username:
              <input
                type="text"
                name="username"
                value={editMode ? form.username : profile.username}
                onChange={handleChange}
                disabled={!editMode}
                className="ml-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 disabled:bg-gray-100 dark:disabled:bg-gray-900"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Email:
              <input
                type="email"
                name="email"
                value={editMode ? form.email : profile.email}
                onChange={handleChange}
                disabled={!editMode}
                className="ml-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 disabled:bg-gray-100 dark:disabled:bg-gray-900"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Mobile:
              <input
                type="text"
                name="mobile"
                value={editMode ? form.mobile : profile.mobile}
                onChange={handleChange}
                disabled={!editMode}
                className="ml-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100 disabled:bg-gray-100 dark:disabled:bg-gray-900"
              />
            </label>
          </div>
          <div className="flex gap-2">
            {editMode ? (
              <>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => { setEditMode(false); setForm({ ...profile }); }}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;