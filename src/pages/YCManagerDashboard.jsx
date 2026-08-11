import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  HeartHandshake,
  Calendar,
  Trophy,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Plus,
  ChevronRight,
  FileBadge,
  RefreshCcw,
  MessageSquare,
  Brain,
  Activity,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Lightbulb
} from "lucide-react";
// import YCManagerLayout from "../../layouts/YCManagerLayout";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const YC_STATS = [
  { label: "Registered Youth", value: "540", change: "+18 this month", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Volunteers", value: "85", change: "Max 2 Groups Each", icon: HeartHandshake, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Active Programmes", value: "12", change: "3 Starting Soon", icon: Calendar, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Achievements Logged", value: "245", change: "4 International", icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
];

const PENDING_ACTIONS = [
  { id: "PA-01", title: "Volunteer Transfer — Tshering Dorji", type: "Member Transfer", priority: "high", time: "2h ago" },
  { id: "PA-02", title: "Programme Report Due — Leadership Camp 2026", type: "Programme Reporting", priority: "medium", time: "1d left" },
  { id: "PA-03", title: "e-Certificate Generation Batch (Q1 2026)", type: "E-Certificate", priority: "medium", time: "3d left" },
  { id: "PA-04", title: "Critical Feedback — Anonymous Youth (Module 11)", type: "Feedback", priority: "high", time: "1h ago" },
];

const YOUTH_GROWTH = [
  { month: "Aug", youth: 390 }, { month: "Sep", youth: 420 }, { month: "Oct", youth: 448 },
  { month: "Nov", youth: 470 }, { month: "Dec", youth: 495 }, { month: "Jan", youth: 515 },
  { month: "Feb", youth: 530 }, { month: "Mar", youth: 540 },
];

const VOLUNTEER_DATA = [
  { month: "Jan", volunteers: 40 }, { month: "Feb", volunteers: 55 }, { month: "Mar", volunteers: 65 },
  { month: "Apr", volunteers: 72 }, { month: "May", volunteers: 80 }, { month: "Jun", youth: 85 },
];

const QUICK_MODULES = [
  { label: "Youth Registration", icon: Users, path: "/youth-registration", color: "text-blue-600", bg: "bg-blue-50", desc: "Module 1" },
  { label: "Member Transfer", icon: RefreshCcw, path: "/member-transfer", color: "text-indigo-600", bg: "bg-indigo-50", desc: "Module 2" },
  { label: "Volunteer Reg.", icon: HeartHandshake, path: "/volunteer-registration", color: "text-emerald-600", bg: "bg-emerald-50", desc: "Module 3" },
  { label: "Activities", icon: Activity, path: "/volunteer-activities", color: "text-teal-600", bg: "bg-teal-50", desc: "Module 4" },
  { label: "e-Certificates", icon: FileBadge, path: "/certificates", color: "text-amber-600", bg: "bg-amber-50", desc: "Module 5" },
  { label: "Programmes", icon: Calendar, path: "/programmes", color: "text-violet-600", bg: "bg-violet-50", desc: "Module 6" },
  { label: "Reporting", icon: TrendingUp, path: "/programme-reports", color: "text-pink-600", bg: "bg-pink-50", desc: "Module 7-8" },
  { label: "Achievements", icon: Trophy, path: "/achievements", color: "text-orange-600", bg: "bg-orange-50", desc: "Module 9" },
  { label: "Initiatives", icon: Lightbulb, path: "/initiatives", color: "text-yellow-600", bg: "bg-yellow-50", desc: "Module 10" },
  { label: "Feedback", icon: MessageSquare, path: "/feedback", color: "text-red-600", bg: "bg-red-50", desc: "Module 11" },
  { label: "Counselling", icon: Brain, path: "/counselling", color: "text-slate-600", bg: "bg-slate-50", desc: "Module 12" },
];

const YCManagerDashboard = () => {
  const [actions, setActions] = useState(PENDING_ACTIONS);

  const handleResolve = (id) => setActions(prev => prev.filter(a => a.id !== id));

  return (
    <YCManagerLayout>
      <div className="space-y-8 font-sans p-6 lg:p-8">

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>YC Manager Scope — Thimphu Harmony Youth Centre</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">YC Manager Dashboard</h1>
              <p className="text-sm text-blue-200 mt-2 leading-relaxed">
                Manage all 12 ToR modules for your Youth Centre — registrations, volunteers, programmes, and more.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link to="/youth-registration" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Register New Youth
                </Link>
                <Link to="/programmes" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition border border-white/20 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> New Programme
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-blue-200 font-semibold">Thimphu Dzongkhag</span>
                </div>
                <p className="text-xl font-extrabold">Sonam Dorji</p>
                <p className="text-xs text-slate-400">YC Manager · AY 2025-2026</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-black shadow-lg">
                SD
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {YC_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Charts + Pending */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Charts */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Youth Registration Growth (AY 2025-2026)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={YOUTH_GROWTH}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: "12px" }}
                  />
                  <Line type="monotone" dataKey="youth" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb", strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-600" />
                Volunteer Participation Trend
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={VOLUNTEER_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: "12px" }} />
                  <Bar dataKey="volunteers" fill="#059669" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pending Actions */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Action Required
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                {actions.length} Items
              </span>
            </div>
            <div className="space-y-3">
              {actions.map((action) => (
                <div key={action.id} className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${action.priority === "high" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                        {action.type}
                      </span>
                      <p className="text-xs font-bold text-gray-900 mt-1 leading-tight">{action.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{action.time}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleResolve(action.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3" /> Resolve
                  </button>
                </div>
              ))}
              {actions.length === 0 && (
                <div className="text-center py-8 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-gray-700">All Clear!</p>
                  <p className="text-[10px] text-gray-400">No pending actions.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 12 ToR Modules Quick Access */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">12 ToR Functional Modules</h3>
            <p className="text-xs text-gray-500">Quick access to all module workflows for your Youth Centre</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {QUICK_MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={i}
                  to={mod.path}
                  className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100/80 transition group flex flex-col items-center text-center gap-2"
                >
                  <div className={`w-11 h-11 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-gray-800 leading-tight">{mod.label}</p>
                  <span className="text-[9px] font-bold text-gray-400">{mod.desc}</span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </YCManagerLayout>
  );
};

export default YCManagerDashboard;