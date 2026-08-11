import { useEffect, useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Edit3,
  Award,
  Clock3,
  Trophy,
  Users,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Camera,
  Palette,
  ImagePlus,
  X,
} from "lucide-react";

const DEFAULT_PROFILE = {
  name: "Tshering Pem",
  email: "tshering@example.com",
  phone: "+975 17XXXXXX",
  location: "Thimphu, Bhutan",
  dateOfBirth: "15 July 2002",
  gender: "Prefer not to say",
  membershipId: "YPS-2026-00124",
  joinedDate: "12 January 2025",
  education: "Bachelor's Degree",
  occupation: "Youth Volunteer",
  bio: "Active youth volunteer contributing to community development, youth engagement and volunteer activities.",
  profileImage: "",
  coverColor: "#2563eb",
};

const COVER_COLORS = [
  "#2563eb",
  "#4f46e5",
  "#7c3aed",
  "#0891b2",
  "#0f766e",
  "#059669",
  "#16a34a",
  "#ca8a04",
  "#ea580c",
  "#dc2626",
  "#db2777",
  "#475569",
];

const YouthProfile = () => {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);

  const fileInputRef = useRef(null);

  /* =====================================================
     LOAD PROFILE
  ===================================================== */

  useEffect(() => {
    const savedProfile = localStorage.getItem("youthProfile");

    if (savedProfile) {
      try {
        setProfile({
          ...DEFAULT_PROFILE,
          ...JSON.parse(savedProfile),
        });
      } catch {
        setProfile(DEFAULT_PROFILE);
      }
    }
  }, []);

  /* =====================================================
     PROFILE INITIALS
  ===================================================== */

  const getInitials = (name) => {
    if (!name) return "YU";

    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  /* =====================================================
     FIELD CHANGE
  ===================================================== */

  const handleChange = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  /* =====================================================
     SAVE PROFILE
  ===================================================== */

  const handleSave = () => {
    localStorage.setItem("youthProfile", JSON.stringify(profile));
    setIsEditing(false);
  };

  /* =====================================================
     PROFILE IMAGE
  ===================================================== */

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfile((current) => ({
        ...current,
        profileImage: reader.result,
      }));
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  const removeProfileImage = () => {
    setProfile((current) => ({
      ...current,
      profileImage: "",
    }));
  };

  /* =====================================================
     INPUT STYLES
  ===================================================== */

  const inputClass = `
    mt-2
    w-full
    rounded-xl
    border
    border-gray-200
    bg-white
    px-4
    py-3
    text-sm
    text-gray-800
    outline-none
    transition
    focus:border-blue-400
    focus:ring-2
    focus:ring-blue-500/20
  `;

  return (
    <div className="space-y-6">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
            <User size={16} />
            Volunteer Account
          </div>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information, volunteer identity
            and contribution details.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">

          <button
            type="button"
            onClick={() => setShowAppearance(!showAppearance)}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-gray-700
              transition
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            <Palette size={16} />
            Customize
          </button>

          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <Edit3 size={16} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-gray-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="
                  rounded-xl
                  bg-blue-600
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  hover:bg-blue-700
                "
              >
                Save Changes
              </button>

            </div>
          )}

        </div>

      </div>

      {/* =================================================
          APPEARANCE PANEL
      ================================================= */}

      {showAppearance && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="flex items-center gap-2">
                <Palette size={18} className="text-blue-600" />

                <h3 className="text-sm font-bold text-gray-900">
                  Profile Appearance
                </h3>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Customize your profile cover color and photo.
              </p>

            </div>

            {/* COLOR PICKER */}

            <div>

              <p className="mb-2 text-xs font-semibold text-gray-500">
                Cover Color
              </p>

              <div className="flex flex-wrap gap-2">

                {COVER_COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() =>
                      handleChange("coverColor", color)
                    }
                    className={`
                      h-8
                      w-8
                      rounded-full
                      border-2
                      transition
                      hover:scale-110
                      ${
                        profile.coverColor === color
                          ? "border-gray-900 ring-2 ring-gray-300"
                          : "border-white"
                      }
                    `}
                    style={{ backgroundColor: color }}
                    title="Choose cover color"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =================================================
          PROFILE HERO
      ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* COVER ONLY */}

        <div
          className="relative h-32 transition-colors duration-300"
          style={{
            backgroundColor: profile.coverColor,
          }}
        >

          {/* subtle pattern */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-10
            "
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

        </div>

        {/* WHITE INFORMATION AREA */}

        <div className="relative bg-white px-6 pb-6">

          <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            {/* =================================================
                PROFILE IMAGE
            ================================================= */}

            <div className="relative shrink-0">

              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="
                    h-28
                    w-28
                    rounded-3xl
                    border-4
                    border-white
                    bg-gray-100
                    object-cover
                    shadow-lg
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-3xl
                    border-4
                    border-white
                    text-3xl
                    font-bold
                    text-white
                    shadow-lg
                  "
                  style={{
                    backgroundColor: profile.coverColor,
                  }}
                >
                  {getInitials(profile.name)}
                </div>
              )}

              {/* CAMERA BUTTON */}

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="
                  absolute
                  bottom-1
                  right-1
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-white
                  bg-blue-600
                  text-white
                  shadow-md
                  transition
                  hover:bg-blue-700
                "
                title="Change profile photo"
              >
                <Camera size={15} />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageUpload}
                className="hidden"
              />

            </div>

            {/* =================================================
                NAME + INFO
            ================================================= */}

            <div className="min-w-0 flex-1 sm:pb-1 sm:pl-2">

              <div className="flex flex-wrap items-center gap-2">

                <h2 className="text-2xl font-bold text-gray-900">
                  {profile.name}
                </h2>

                <span className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-emerald-50
                  px-2.5
                  py-1
                  text-xs
                  font-semibold
                  text-emerald-700
                ">
                  <CheckCircle2 size={13} />
                  Active Volunteer
                </span>

              </div>

              <p className="mt-1 text-sm text-gray-500">
                {profile.occupation}
              </p>

              <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">

                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {profile.location}
                </span>

                <span className="flex items-center gap-1">
                  <CalendarDays size={13} />
                  Joined {profile.joinedDate}
                </span>

              </div>

            </div>

            {/* =================================================
                MEMBERSHIP ID
            ================================================= */}

            <div className="
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
            ">

              <p className="
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-gray-400
              ">
                Membership ID
              </p>

              <p className="mt-1 text-sm font-bold text-gray-900">
                {profile.membershipId}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          PHOTO CONTROLS
      ================================================= */}

      {profile.profileImage && (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ImagePlus size={17} />
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-900">
                Profile photo added
              </p>

              <p className="text-[11px] text-gray-400">
                Your photo will appear across your profile.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={removeProfileImage}
            className="
              inline-flex
              items-center
              gap-1
              rounded-lg
              px-3
              py-2
              text-xs
              font-semibold
              text-red-600
              hover:bg-red-50
            "
          >
            <X size={14} />
            Remove
          </button>

        </div>
      )}

      {/* =================================================
          CONTRIBUTION STATS
      ================================================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Clock3 size={19} />
            </div>

            <span className="text-xs font-semibold text-emerald-600">
              +18%
            </span>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Volunteer Hours
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            248
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Total validated hours
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Award size={19} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Certificates
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            6
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Certificates earned
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Trophy size={19} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Achievements
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            12
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Milestones reached
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Users size={19} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Network Rank
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            #18
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Among active volunteers
          </p>
        </div>

      </div>

      {/* =================================================
          PERSONAL INFORMATION
      ================================================= */}

      <div className="rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="text-lg font-bold text-gray-900">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your basic personal and contact information.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">

          {/* NAME */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Full Name
            </label>

            {isEditing ? (
              <input
                value={profile.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <User size={16} className="text-gray-400" />
                {profile.name}
              </div>
            )}
          </div>

          {/* EMAIL */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Email Address
            </label>

            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <Mail size={16} className="text-gray-400" />
                {profile.email}
              </div>
            )}
          </div>

          {/* PHONE */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Phone Number
            </label>

            {isEditing ? (
              <input
                value={profile.phone}
                onChange={(e) =>
                  handleChange("phone", e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <Phone size={16} className="text-gray-400" />
                {profile.phone}
              </div>
            )}
          </div>

          {/* LOCATION */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Location
            </label>

            {isEditing ? (
              <input
                value={profile.location}
                onChange={(e) =>
                  handleChange("location", e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <MapPin size={16} className="text-gray-400" />
                {profile.location}
              </div>
            )}
          </div>

          {/* DOB */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Date of Birth
            </label>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
              <CalendarDays size={16} className="text-gray-400" />
              {profile.dateOfBirth}
            </div>
          </div>

          {/* EDUCATION */}

          <div>
            <label className="text-xs font-semibold text-gray-500">
              Education
            </label>

            {isEditing ? (
              <input
                value={profile.education}
                onChange={(e) =>
                  handleChange("education", e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <GraduationCap
                  size={16}
                  className="text-gray-400"
                />
                {profile.education}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* =================================================
          VOLUNTEER STATUS
      ================================================= */}

      <div className="rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="text-lg font-bold text-gray-900">
            Volunteer Status
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your current participation status.
          </p>

        </div>

        <div className="space-y-5 p-6">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Membership
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Network
            </span>

            <span className="text-sm font-semibold text-gray-900">
              Thimphu Y-PEER
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Volunteer Role
            </span>

            <span className="text-sm font-semibold text-gray-900">
              Youth Volunteer
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Member Since
            </span>

            <span className="text-sm font-semibold text-gray-900">
              Jan 2025
            </span>
          </div>

          <div className="border-t border-gray-100 pt-5">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck size={18} />
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-900">
                  Verified Volunteer
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your volunteer identity has been verified
                  through the Youth Portal System.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          ABOUT ME
      ================================================= */}

      <div className="rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="text-lg font-bold text-gray-900">
            About Me
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Tell programme administrators about your interests
            and volunteer contribution.
          </p>

        </div>

        <div className="p-6">

          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) =>
                handleChange("bio", e.target.value)
              }
              rows={4}
              className={`${inputClass} resize-none`}
            />
          ) : (
            <p className="max-w-4xl text-sm leading-7 text-gray-600">
              {profile.bio}
            </p>
          )}

        </div>

      </div>

      {/* =================================================
          ROLES & RESPONSIBILITIES
      ================================================= */}

      <div className="rounded-2xl border border-gray-200 bg-white">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="text-lg font-bold text-gray-900">
            Roles & Responsibilities
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your current and previous volunteer responsibilities.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">

          <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Youth Volunteer
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Active member of the Thimphu Y-PEER Network.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Briefcase size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Community Volunteer
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Participates in community and youth development activities.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          SECURITY NOTICE
      ================================================= */}

      <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ShieldCheck size={18} />
        </div>

        <div>

          <p className="text-sm font-semibold text-gray-900">
            Your information is protected
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Personal information is managed securely within the
            Youth Portal System. Some identity information may
            only be changed through the appropriate verification
            process.
          </p>

        </div>

      </div>

    </div>
  );
};

export default YouthProfile;