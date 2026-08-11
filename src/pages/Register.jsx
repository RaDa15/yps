import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserPlus,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight,
  ChevronLeft
} from "lucide-react";

const STAKEHOLDER_ROLES = [
  {
    id: "youth",
    title: "Youth / Volunteer",
    stakeholder: "End User",
    dataScope: "Own profile/activities",
    desc: "Register to access programmes, join volunteer networks, and earn e-certificates.",
  },
  {
    id: "ycm",
    title: "YC Manager",
    stakeholder: "Centre Operator",
    dataScope: "Own YC only",
    desc: "Manage Youth Centre operations, register local youth, and coordinate activities.",
  },
  {
    id: "pycd",
    title: "PYCD Focal",
    stakeholder: "Super Admin",
    dataScope: "All YCs + Networks",
    desc: "System-wide administration, national policy oversight, and programme approval.",
  },
  {
    id: "hod",
    title: "HoD / Director",
    stakeholder: "Strategic Oversight",
    dataScope: "National (All 13 YCs)",
    desc: "Access strategic executive dashboards, policy analytics, and national KPIs.",
  },
  {
    id: "teo",
    title: "TEO / DEO",
    stakeholder: "Jurisdiction Supervisor",
    dataScope: "Thromde / Dzongkhag",
    desc: "Supervise regional Youth Centres, approve local activities, and generate reports.",
  },
  {
    id: "nfp",
    title: "National Focal Point",
    stakeholder: "Network Coordinator",
    dataScope: "All Y-PEER networks",
    desc: "Coordinate national Y-PEER campaigns and youth network initiatives.",
  },
  {
    id: "net",
    title: "Network Focal Point",
    stakeholder: "Network Manager",
    dataScope: "Own network",
    desc: "Manage local Y-PEER volunteer groups and approve activity participation.",
  },
];

const DZONGKHAGS = [
  "Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuentse",
  "Mongar", "Paro", "Pema Gatshel", "Punakha", "Samdrup Jongkhar",
  "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashi Yangtse",
  "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"
];

function Register() {
  const [selectedRole, setSelectedRole] = useState(STAKEHOLDER_ROLES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    cid: "",
    email: "",
    phone: "",
    dzongkhag: "Thimphu",
    centerOrNetwork: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Login</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Official Government Registration</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Create Portal Account
                  </h1>
                  <p className="text-xs text-gray-500">
                    Select your stakeholder role and provide government ID details.
                  </p>
                </div>
              </div>

              {/* Role Selection Grid */}
              <div className="mt-6 mb-8">
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  1. Select Stakeholder Role (7 System Roles) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {STAKEHOLDER_ROLES.map((r) => {
                    const isSelected = selectedRole.id === r.id;
                    return (
                      <div
                        key={r.id}
                        onClick={() => setSelectedRole(r)}
                        className={`p-3.5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/20 shadow-sm"
                            : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-bold text-gray-900">{r.title}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                            {r.stakeholder}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{r.desc}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100/80">
                          <span className="text-[10px] font-semibold text-blue-700">
                            Scope: {r.dataScope}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                  2. Personal & Credentials Details *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jigme Wangchuk"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">CID / NDI ID *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1150100XXXX"
                      value={formData.cid}
                      onChange={(e) => setFormData({ ...formData, cid: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.bt"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+975 17XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Dzongkhag *</label>
                    <select
                      value={formData.dzongkhag}
                      onChange={(e) => setFormData({ ...formData, dzongkhag: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                      {DZONGKHAGS.map((dz) => (
                        <option key={dz} value={dz}>{dz}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Assigned Centre / Network (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thimphu Harmony YC / Y-PEER Bhutan"
                      value={formData.centerOrNetwork}
                      onChange={(e) => setFormData({ ...formData, centerOrNetwork: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Skills / Statement of Interest
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives or area of participation..."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                <Link
                  to="/login"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>Submit Account Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Success Screen */
            <div className="py-12 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Application Submitted!</h2>
              <p className="text-sm text-gray-600 mt-2 mb-6">
                Your account application for <span className="font-bold text-gray-900">{selectedRole.title}</span> has been successfully logged.
              </p>

              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <span>Proceed to NDI Login</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;