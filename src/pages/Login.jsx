import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  UserRound,
  Building2,
  UsersRound,
  Globe2,
  MapPinned,
  Landmark,
  Search,
  ArrowRight,
  ChevronRight,
  Lock,
  HelpCircle,
  CheckCircle2,
  X,
} from "lucide-react";

/* =========================================================
   ROLE DATA
========================================================= */

const ROLES_DATA = [
  {
    id: "hod",
    code: "HOD",
    title: "HoD / Director",
    stakeholder: "Strategic Oversight",
    description:
      "Access national youth development KPIs, policy dashboards and executive reports.",
    dataScope: "National • All 13 YCs",
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    path: "/director-dashboard",
    category: "Executive & Governance",
    icon: Landmark,
  },

  {
    id: "pycd",
    code: "PYCD",
    title: "PYCD Focal",
    stakeholder: "Super Admin",
    description:
      "Manage national youth data, system configuration, programmes and volunteer oversight.",
    dataScope: "All YCs + Networks",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
    path: "/pycd-dashboard",
    category: "Executive & Governance",
    icon: ShieldCheck,
  },

  {
    id: "teo",
    code: "TEO",
    title: "TEO / DEO",
    stakeholder: "Jurisdiction Supervisor",
    description:
      "Approve activities, monitor Youth Centre information and access jurisdiction reports.",
    dataScope: "Thromde / Dzongkhag",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    path: "/teo-deo-dashboard",
    category: "Executive & Governance",
    icon: MapPinned,
  },

  {
    id: "ycm",
    code: "YCM",
    title: "Youth Centre Manager",
    stakeholder: "Centre Operator",
    description:
      "Manage youth registrations, programmes, volunteers and Youth Centre reporting.",
    dataScope: "Own Youth Centre",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    path: "/yc-manager-dashboard",
    category: "Centre & Network Operations",
    icon: Building2,
  },

  {
    id: "nfp",
    code: "NFP",
    title: "National Focal Point",
    stakeholder: "Network Coordinator",
    description:
      "Coordinate Y-PEER networks and create and monitor national network activities.",
    dataScope: "All Y-PEER Networks",
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    path: "/national-focal-dashboard",
    category: "Centre & Network Operations",
    icon: Globe2,
  },

  {
    id: "net",
    code: "NET",
    title: "Network Focal Point",
    stakeholder: "Network Manager",
    description:
      "Manage your Y-PEER network, approve volunteers and coordinate group activities.",
    dataScope: "Own Network",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    path: "/network-focal-dashboard",
    category: "Centre & Network Operations",
    icon: UsersRound,
  },

  {
    id: "youth",
    code: "YTH",
    title: "Youth / Volunteer",
    stakeholder: "End User",
    description:
      "Manage your youth profile, join programmes, participate in volunteering and access certificates.",
    dataScope: "Own Profile & Activities",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    path: "/dashboard",
    category: "Youth & End Users",
    icon: UserRound,
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const CATEGORIES = [
  "All",
  "Youth",
  "Centre & Network",
  "Executive",
];

/* =========================================================
   LOGIN
========================================================= */

const Login = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(ROLES_DATA[6]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cid, setCid] = useState("");
  const [showRoleGuide, setShowRoleGuide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredRoles = useMemo(() => {
    return ROLES_DATA.filter((role) => {
      let categoryMatch = true;

      if (activeCategory === "Youth") {
        categoryMatch = role.category === "Youth & End Users";
      }

      if (activeCategory === "Centre & Network") {
        categoryMatch =
          role.category === "Centre & Network Operations";
      }

      if (activeCategory === "Executive") {
        categoryMatch =
          role.category === "Executive & Governance";
      }

      const search = searchQuery.toLowerCase().trim();

      const searchMatch =
        search === "" ||
        role.title.toLowerCase().includes(search) ||
        role.stakeholder.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  /* =========================================================
     LOGIN
  ========================================================= */

  const handleLogin = () => {
    if (isLoading) return;

    setIsLoading(true);

    localStorage.setItem(
      "userRole",
      selectedRole.id
    );

    localStorage.setItem(
      "userRoleName",
      selectedRole.title
    );

    localStorage.setItem(
      "authenticated",
      "true"
    );

    setTimeout(() => {
      navigate(selectedRole.path);
    }, 500);
  };

  /* =========================================================
     SELECT ROLE
  ========================================================= */

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50 flex flex-col">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="h-[64px] flex-shrink-0 bg-white border-b border-slate-200 px-5 md:px-8 lg:px-12 flex items-center justify-between">

        {/* BRAND */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">
            YPS
          </div>

          <div>

            <h1 className="text-sm font-extrabold text-slate-900 leading-none">
              Youth Portal System
            </h1>

            <p className="text-[10px] text-slate-500 mt-1">
              Royal Government of Bhutan
            </p>

          </div>

        </Link>

        {/* HEADER RIGHT */}

        <div className="flex items-center gap-2 sm:gap-4">

          <button
            onClick={() => setShowRoleGuide(true)}
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition"
          >
            <HelpCircle className="w-4 h-4" />
            Help
          </button>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition"
          >
            Register
          </Link>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="flex-1 min-h-0 flex items-center justify-center px-4 py-4 md:px-6 lg:px-8">

        <div className="w-full max-w-6xl h-full max-h-[680px] flex flex-col">

          {/* =================================================
              INTRO
          ================================================= */}

          <div className="text-center flex-shrink-0 mb-4">

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold mb-2">

              <ShieldCheck className="w-3.5 h-3.5" />

              Secure Government Portal

            </div>

            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              Welcome to Youth Portal
            </h2>

            <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              Secure access to Bhutan's youth services,
              programmes and volunteering.
            </p>

          </div>

          {/* =================================================
              MAIN LOGIN CARD
          ================================================= */}

          <div className="flex-1 min-h-0 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">

            <div className="h-full grid grid-cols-1 lg:grid-cols-5">

              {/* =================================================
                  LEFT — NDI
              ================================================= */}

              <section className="lg:col-span-2 p-5 md:p-6 lg:p-7 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200">

                {/* NDI BADGE */}

                <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">

                  <ShieldCheck className="w-3.5 h-3.5" />

                  NDI Verified

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-4">
                  Sign in securely
                </h3>

                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Use Bhutan National Digital Identity to
                  securely access your selected portal.
                </p>

                {/* SELECTED PORTAL */}

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200">

                  <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
                    Selected Portal
                  </p>

                  <div className="flex items-center gap-2.5 mt-2">

                    <div
                      className={`w-9 h-9 rounded-lg ${selectedRole.color} text-white flex items-center justify-center`}
                    >
                      <selectedRole.icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-bold text-slate-900 truncate">
                        {selectedRole.title}
                      </p>

                      <p className="text-[10px] text-slate-500 truncate">
                        {selectedRole.stakeholder}
                      </p>

                    </div>

                  </div>

                </div>

                {/* DESCRIPTION */}

                <div className="mt-3">

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {selectedRole.description}
                  </p>

                </div>

                {/* CID */}

                <div className="mt-4">

                  <label
                    htmlFor="cid"
                    className="block text-[11px] font-bold text-slate-700 mb-1.5"
                  >
                    Citizenship ID (CID)
                  </label>

                  <input
                    id="cid"
                    type="text"
                    value={cid}
                    onChange={(e) => setCid(e.target.value)}
                    placeholder="Enter your CID"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>

                {/* LOGIN */}

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-xs transition shadow-sm"
                >

                  {isLoading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Continue with NDI
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}

                </button>

                {/* SECURITY */}

                <div className="mt-auto pt-4">

                  <div className="flex gap-2 pt-3 border-t border-slate-100">

                    <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />

                    <p className="text-[10px] text-slate-400 leading-relaxed">
                      Your identity is protected by Bhutan
                      National Digital Identity authentication.
                    </p>

                  </div>

                </div>

              </section>

              {/* =================================================
                  RIGHT — ROLE SELECTOR
              ================================================= */}

              <section className="lg:col-span-3 min-h-0 p-5 md:p-6 lg:p-7 flex flex-col">

                {/* HEADER */}

                <div className="flex items-center justify-between flex-shrink-0">

                  <div>

                    <div className="flex items-center gap-2">

                      <UsersRound className="w-4.5 h-4.5 text-blue-600" />

                      <h3 className="text-base font-bold text-slate-900">
                        Choose your portal
                      </h3>

                    </div>

                    <p className="text-[10px] text-slate-500 mt-1">
                      Select the portal that matches your role.
                    </p>

                  </div>

                  <span className="text-[10px] font-bold text-slate-400">
                    7 Portals
                  </span>

                </div>

                {/* SEARCH */}

                <div className="relative mt-3 flex-shrink-0">

                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />

                  <input
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    placeholder="Search portal..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>

                {/* CATEGORY FILTER */}

                <div className="flex gap-1.5 mt-2.5 overflow-x-auto flex-shrink-0">

                  {CATEGORIES.map((category) => (

                    <button
                      key={category}
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className={`whitespace-nowrap px-2.5 py-1.5 rounded-md text-[9px] font-bold transition ${
                        activeCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      {category}
                    </button>

                  ))}

                </div>

                {/* ROLE LIST */}

                <div className="flex-1 min-h-0 overflow-y-auto mt-3 pr-1 space-y-1.5">

                  {filteredRoles.map((role) => {

                    const Icon = role.icon;

                    const isSelected =
                      selectedRole.id === role.id;

                    return (

                      <button
                        key={role.id}
                        onClick={() =>
                          handleSelectRole(role)
                        }
                        className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                          isSelected
                            ? `${role.lightColor} ${role.borderColor} ring-2 ring-blue-500/10`
                            : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                      >

                        <div className="flex items-center gap-2.5">

                          {/* ICON */}

                          <div
                            className={`w-8.5 h-8.5 min-w-[34px] rounded-lg ${role.color} text-white flex items-center justify-center`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          {/* TEXT */}

                          <div className="flex-1 min-w-0">

                            <div className="flex items-center gap-1.5">

                              <h4 className="text-[11px] font-bold text-slate-900 truncate">
                                {role.title}
                              </h4>

                              <span className="hidden sm:inline text-[8px] font-bold px-1 py-0.5 rounded bg-white/80 border border-slate-200 text-slate-400">
                                {role.code}
                              </span>

                            </div>

                            <p className="text-[9px] text-slate-500 truncate mt-0.5">
                              {role.stakeholder}
                            </p>

                          </div>

                          {/* RIGHT */}

                          {isSelected ? (

                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />

                          ) : (

                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />

                          )}

                        </div>

                        {/* SELECTED DETAILS */}

                        {isSelected && (

                          <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center justify-between gap-2">

                            <p className="text-[9px] text-slate-500 line-clamp-1">
                              {role.description}
                            </p>

                            <span
                              className={`flex-shrink-0 text-[8px] font-bold px-1.5 py-1 rounded-full ${role.lightColor} ${role.textColor}`}
                            >
                              {role.dataScope}
                            </span>

                          </div>

                        )}

                      </button>

                    );
                  })}

                  {filteredRoles.length === 0 && (

                    <div className="h-full flex items-center justify-center">

                      <div className="text-center">

                        <Search className="w-6 h-6 text-slate-300 mx-auto mb-2" />

                        <p className="text-xs font-semibold text-slate-600">
                          No portals found
                        </p>

                      </div>

                    </div>

                  )}

                </div>

                {/* FOOTER */}

                <div className="mt-3 flex-shrink-0 bg-slate-900 rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-3">

                  <div className="min-w-0">

                    <p className="text-[8px] uppercase tracking-wider font-bold text-slate-400">
                      Selected
                    </p>

                    <p className="text-[11px] font-bold text-white truncate">
                      {selectedRole.title}
                    </p>

                  </div>

                  <button
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white px-3 py-1.5 rounded-md text-[9px] font-bold flex items-center gap-1"
                  >
                    Continue
                    <ChevronRight className="w-3 h-3" />
                  </button>

                </div>

              </section>

            </div>

          </div>

          {/* =================================================
              TRUST ITEMS
          ================================================= */}

          <div className="flex items-center justify-center gap-4 mt-3 text-[9px] text-slate-400 flex-shrink-0">

            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              NDI Authentication
            </span>

            <span>•</span>

            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              Secure Access
            </span>

            <span>•</span>

            <span className="flex items-center gap-1">
              <UsersRound className="w-3 h-3" />
              RBAC
            </span>

          </div>

        </div>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="h-[40px] flex-shrink-0 bg-white border-t border-slate-200 px-5 md:px-8 flex items-center justify-center">

        <p className="text-[9px] text-slate-400 text-center">
          © 2026 Royal Government of Bhutan • Youth Portal System
          &nbsp;•&nbsp; Secure Role-Based Access
        </p>

      </footer>

      {/* =====================================================
          ROLE GUIDE MODAL
      ===================================================== */}

      {showRoleGuide && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          <button
            onClick={() => setShowRoleGuide(false)}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-xl max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* MODAL HEADER */}

            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">

              <div>

                <h3 className="text-base font-bold text-slate-900">
                  Portal Role Guide
                </h3>

                <p className="text-[10px] text-slate-500 mt-0.5">
                  Choose the portal that matches your responsibilities.
                </p>

              </div>

              <button
                onClick={() => setShowRoleGuide(false)}
                className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>

            </div>

            {/* MODAL CONTENT */}

            <div className="p-4 overflow-y-auto max-h-[65vh] space-y-1.5">

              {ROLES_DATA.map((role) => {

                const Icon = role.icon;

                return (

                  <button
                    key={role.id}
                    onClick={() => {
                      setSelectedRole(role);
                      setShowRoleGuide(false);
                    }}
                    className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition"
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`w-8 h-8 rounded-lg ${role.color} text-white flex items-center justify-center`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>

                        <p className="text-xs font-bold text-slate-900">
                          {role.title}
                        </p>

                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {role.description}
                        </p>

                      </div>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Login;