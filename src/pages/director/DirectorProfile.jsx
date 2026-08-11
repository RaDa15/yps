import { useEffect, useRef, useState } from "react";
import {
  User,
  Camera,
  Save,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ShieldCheck,
  CheckCircle,
  X,
} from "lucide-react";

const DirectorProfile = () => {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("directorProfileImage") || ""
  );

  const [profile, setProfile] = useState(() => {
    const savedProfile =
      localStorage.getItem("directorProfile");

    if (savedProfile) {
      try {
        return JSON.parse(savedProfile);
      } catch {
        // Use default profile
      }
    }

    return {
      name: "Dasho Director",
      role: "HoD / Director",
      email: "director@youth.gov.bt",
      phone: "+975 2 000000",
      department:
        "Department of Education and Youth",
      location: "Thimphu, Bhutan",
    };
  });

  const [saved, setSaved] = useState(false);

  // =====================================================
  // PROFILE IMAGE SYNC
  // =====================================================

  useEffect(() => {
    const updateProfileImage = () => {
      setProfileImage(
        localStorage.getItem("directorProfileImage") || ""
      );
    };

    window.addEventListener(
      "directorProfileUpdated",
      updateProfileImage
    );

    window.addEventListener(
      "storage",
      updateProfileImage
    );

    return () => {
      window.removeEventListener(
        "directorProfileUpdated",
        updateProfileImage
      );

      window.removeEventListener(
        "storage",
        updateProfileImage
      );
    };
  }, []);

  // =====================================================
  // IMAGE SELECT
  // =====================================================

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;

      localStorage.setItem(
        "directorProfileImage",
        imageData
      );

      setProfileImage(imageData);

      window.dispatchEvent(
        new Event("directorProfileUpdated")
      );
    };

    reader.readAsDataURL(file);
  };

  // =====================================================
  // REMOVE IMAGE
  // =====================================================

  const handleRemoveImage = () => {
    localStorage.removeItem("directorProfileImage");

    setProfileImage("");

    window.dispatchEvent(
      new Event("directorProfileUpdated")
    );
  };

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const handleSave = () => {
    localStorage.setItem(
      "directorProfile",
      JSON.stringify(profile)
    );

    if (profileImage) {
      localStorage.setItem(
        "directorProfileImage",
        profileImage
      );
    }

    window.dispatchEvent(
      new Event("directorProfileUpdated")
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 pb-6">
      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div>
        <div className="flex items-center gap-3">
          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            "
          >
            <User className="w-5 h-5" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              My Profile
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your personal information and
              profile image
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          PROFILE CARD
      ================================================= */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >
        <div
          className="
            px-6
            py-5
            border-b
            border-gray-100
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            "
          >
            <User className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Profile Information
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Update your personal account information
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-5
              p-5
              bg-gray-50
              rounded-2xl
            "
          >
            <div
              className="
                relative
                w-24
                h-24
                rounded-2xl
                bg-violet-600
                text-white
                flex
                items-center
                justify-center
                text-2xl
                font-bold
                shadow-sm
                overflow-hidden
                flex-shrink-0
              "
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Director Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                "D"
              )}

              <button
                type="button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="
                  absolute
                  right-1
                  bottom-1
                  w-8
                  h-8
                  rounded-lg
                  bg-white
                  text-blue-600
                  shadow-md
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-50
                  transition
                "
                title="Change profile image"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">
                {profile.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {profile.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-lg
                    bg-blue-100
                    text-blue-700
                    text-xs
                    font-semibold
                  "
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  National Level Access
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-sm
                    font-semibold
                    transition
                  "
                >
                  <Camera className="w-4 h-4" />
                  Change Photo
                </button>

                {profileImage && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-xl
                      bg-white
                      border
                      border-gray-200
                      text-red-600
                      hover:bg-red-50
                      text-sm
                      font-semibold
                      transition
                    "
                  >
                    <X className="w-4 h-4" />
                    Remove
                  </button>
                )}
              </div>

              <p className="text-xs text-gray-400 mt-2">
                JPG, PNG or WEBP. Maximum size 5MB.
              </p>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              mt-6
            "
          >
            {/* NAME */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Display Name
              </label>

              <div className="relative">
                <User
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-10
                    pr-4
                    py-3
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>
            </div>

            {/* ROLE */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Role
              </label>

              <div className="relative">
                <Briefcase
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-10
                    pr-4
                    py-3
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-gray-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-10
                    pr-4
                    py-3
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>
            </div>

            {/* PHONE */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-10
                    pr-4
                    py-3
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>
            </div>

            {/* DEPARTMENT */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Department
              </label>

              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-700
                  outline-none
                  focus:ring-2
                  focus:ring-blue-100
                  focus:border-blue-400
                "
              />
            </div>

            {/* LOCATION */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                "
              >
                Location
              </label>

              <div className="relative">
                <MapPin
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-10
                    pr-4
                    py-3
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    text-sm
                    text-gray-700
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>
            </div>
          </div>

          {/* =================================================
              SAVE
          ================================================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-end
              gap-3
              mt-6
              pt-5
              border-t
              border-gray-100
            "
          >
            {saved && (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-green-600
                  mr-auto
                "
              >
                <CheckCircle className="w-4 h-4" />
                Profile updated successfully
              </div>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                text-sm
                shadow-sm
                transition
              "
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorProfile;