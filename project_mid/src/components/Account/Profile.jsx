import { useState, useEffect } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    experience: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProfile((prev) => ({
          ...prev,
          ...parsed,
        }));
      } catch (e) {
        console.error("Error parsing profileData from localStorage", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-rose-700">Profile</h3>
        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className="px-4 py-2 text-sm rounded-lg border border-rose-300 text-rose-700 hover:bg-rose-50"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Gender</label>
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={profile.height}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Goal</label>
            <textarea
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
              rows={2}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Previous experience in the gym
            </label>
            <textarea
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              className="w-full p-2 border border-rose-200 rounded-md"
              rows={2}
            />
          </div>

          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{profile.fullName || "Not set"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{profile.email || "Not set"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-medium">{profile.age || "Not set"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{profile.gender || "Not set"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Height</p>
            <p className="font-medium">
              {profile.height ? `${profile.height} cm` : "Not set"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Weight</p>
            <p className="font-medium">
              {profile.weight ? `${profile.weight} kg` : "Not set"}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Goal</p>
            <p className="font-medium">{profile.goal || "Not set"}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Previous experience in the gym</p>
            <p className="font-medium">{profile.experience || "Not set"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
