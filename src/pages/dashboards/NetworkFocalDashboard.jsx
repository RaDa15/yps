import { useState } from "react";
import {
  Users,
  CheckCircle2,
  Clock,
  Award,
  ShieldCheck,
  Plus,
  ChevronRight,
  UserCheck,
  XCircle,
  Activity,
  Calendar,
  TrendingUp,
  MessageSquare,
  MapPin,
  HeartHandshake
} from "lucide-react";
import { Link } from "react-router-dom";
import YCManagerLayout from "../../layouts/YCManagerLayout";

const PENDING_VOLUNTEER_APPLICATIONS = [
  { id: "VOL-901", name: "Jigme Thinley", cid: "11501008899", age: 19, group: "Y-PEER Thimphu Group A", hoursEligible: true, status: "Pending Review" },
  { id: "VOL-902", name: "Dechen Lhamo", cid: "11204003344", age: 21, group: "Y-PEER Thimphu Group A", hoursEligible: true, status: "Pending Review" },
  { id: "VOL-903", name: "Karma Wangchuk", cid: "11501009981", age: 17, group: "Y-PEER Thimphu Group B", hoursEligible: false, status: "Under-age (min 18)" },
];

const GROUP_ACTIVITIES = [
  { id: "GA-001", title: "Y-PEER Community Health Drive", date: "March 20, 2026", venue: "Thimphu Harmony YC", volunteers: 22, status: "Upcoming" },
  { id: "GA-002", title: "Peer Education Session – Digital Safety", date: "March 14, 2026", venue: "Motithang YC Annex", volunteers: 18, status: "Completed" },
  { id: "GA-003", title: "Y-PEER Campus Awareness Programme", date: "April 3, 2026", venue: "CST Phuentsholing", volunteers: 35, status: "Upcoming" },
];

const GROUP_STATS = [
  { label: "Group Volunteers", value: "72", note: "Active Members", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Pending Applications", value: "3", note: "Requires Review", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Group Activities (YTD)", value: "28", note: "All Completed/Planned", icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Volunteer Hours", value: "1,840", note: "AY 2025-2026", icon: Award, color: "text-violet-600", bg: "bg-violet-50" },
];

export default function NetworkFocalDashboard() {
  const [apps, setApps] = useState(PENDING_VOLUNTEER_APPLICATIONS.filter(a => a.hoursEligible));
  const handleApprove = (id) => setApps((prev) => prev.filter((a) => a.id !== id));
  const handleReject = (id) => setApps((prev) => prev.filter((a) => a.id !== id));

  return (
    <YCManagerLayout>
      <div className="space-y-8 font-sans p-6 lg:p-8">

        {/* Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Network Focal Point Scope — Y-PEER Group Manager</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">Y-PEER Group Management Portal</h1>
              <p className="text-sm text-emerald-200 mt-2 max-w-xl leading-relaxed">
                Approve local group volunteers (max 2 active groups per volunteer), log activity participation hours, and manage Y-PEER group events.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Group Activity
                </button>
                <Link to="/volunteer-activities" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition border border-white/20 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> All Activities
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-right">
              <p className="text-xs text-emerald-300 font-semibold">Network Focal Point</p>
              <p className="text-lg font-extrabold">Y-PEER Thimphu Group A</p>
              <p className="text-xs text-slate-400 mt-0.5">Coordinator: Pema Choden</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUP_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500">{stat.label}</span>
                  <div className={`w-9 h-9 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className={`text-xs font-semibold mt-1 ${stat.color}`}>{stat.note}</p>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Volunteer Applications */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                  Pending Group Volunteer Applications
                </h3>
                <p className="text-xs text-gray-500">ToR Module 3 — Max 2 active groups per volunteer enforced</p>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">{apps.length} Pending</span>
            </div>

            <div className="space-y-4">
              {apps.map((app) => (
                <div key={app.id} className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">{app.group}</span>
                      <span className="text-[10px] font-mono text-gray-400">{app.id}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{app.name} (Age {app.age})</h4>
                    <p className="text-xs text-gray-500 mt-0.5">CID: {app.cid}</p>
                    <span className="text-[10px] font-bold text-emerald-600 mt-1 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Age Eligible · Max 2 Groups OK
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(app.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(app.id)}
                      className="bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-xl text-xs font-bold transition border border-red-200 flex items-center gap-1.5"
                    >
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                  </div>
                </div>
              ))}

              {apps.length === 0 && (
                <div className="text-center py-10 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-gray-900">All Volunteer Applications Processed</h4>
                  <p className="text-xs text-gray-500 mt-0.5">No pending group membership requests.</p>
                </div>
              )}
            </div>
          </div>

          {/* Group Activity Schedule */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" /> Group Activity Schedule
            </h4>
            <div className="space-y-3">
              {GROUP_ACTIVITIES.map((act) => (
                <div key={act.id} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h5 className="text-xs font-bold text-gray-900 leading-tight">{act.title}</h5>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${act.status === "Completed" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                      {act.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {act.venue}
                  </p>
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium mt-1.5">
                    <span>{act.date}</span>
                    <span className="text-emerald-600 font-bold">{act.volunteers} Volunteers</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" /> Schedule New Activity
            </button>
          </div>
        </div>

      </div>
    </YCManagerLayout>
  );
}
