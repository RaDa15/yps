import { useMemo, useState } from "react";
import {
  Award,
  Search,
  Plus,
  Filter,
  Eye,
  Edit3,
  CheckCircle2,
  Clock3,
  Users,
  Trophy,
  Medal,
  Star,
  Download,
  X,
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: "ACH-001",
    youth: "Karma Wangchuk",
    cid: "10702004567",
    category: "Academic",
    achievement: "Outstanding Academic Performance",
    level: "National",
    date: "2026-07-18",
    status: "Verified",
    points: 100,
  },
  {
    id: "ACH-002",
    youth: "Sonam Choden",
    cid: "11304007821",
    category: "Volunteerism",
    achievement: "Youth Volunteer Excellence Award",
    level: "Centre",
    date: "2026-07-25",
    status: "Verified",
    points: 150,
  },
  {
    id: "ACH-003",
    youth: "Tashi Dorji",
    cid: "11506003452",
    category: "Leadership",
    achievement: "Youth Leadership Recognition",
    level: "Dzongkhag",
    date: "2026-08-01",
    status: "Pending",
    points: 120,
  },
  {
    id: "ACH-004",
    youth: "Pema Lhamo",
    cid: "11708009124",
    category: "Sports",
    achievement: "Inter-Centre Sports Champion",
    level: "Centre",
    date: "2026-07-29",
    status: "Verified",
    points: 80,
  },
  {
    id: "ACH-005",
    youth: "Jigme Namgyal",
    cid: "11905002345",
    category: "Arts & Culture",
    achievement: "Traditional Arts Contribution",
    level: "National",
    date: "2026-06-20",
    status: "Verified",
    points: 130,
  },
  {
    id: "ACH-006",
    youth: "Dechen Wangmo",
    cid: "12003005678",
    category: "Community Service",
    achievement: "Community Service Recognition",
    level: "Centre",
    date: "2026-08-03",
    status: "Pending",
    points: 100,
  },
];

const CATEGORIES = [
  "All Categories",
  "Academic",
  "Volunteerism",
  "Leadership",
  "Sports",
  "Arts & Culture",
  "Community Service",
];

const AchievementTracking = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter((item) => {
      const matchesSearch =
        item.youth.toLowerCase().includes(search.toLowerCase()) ||
        item.cid.includes(search) ||
        item.achievement.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" || item.category === category;

      const matchesStatus =
        status === "All Status" || item.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const totalAchievements = ACHIEVEMENTS.length;

  const verifiedAchievements = ACHIEVEMENTS.filter(
    (item) => item.status === "Verified"
  ).length;

  const pendingAchievements = ACHIEVEMENTS.filter(
    (item) => item.status === "Pending"
  ).length;

  const totalPoints = ACHIEVEMENTS.reduce(
    (total, item) => total + item.points,
    0
  );

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <Award size={16} />
            Youth Development
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Achievement Tracking
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Record, verify and monitor achievements of youth members.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white
                       text-gray-700 font-medium text-sm flex items-center gap-2
                       hover:bg-gray-50 transition"
          >
            <Download size={17} />
            Export
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 text-white
                       font-semibold text-sm flex items-center gap-2
                       hover:bg-blue-700 transition shadow-sm"
          >
            <Plus size={18} />
            Record Achievement
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SummaryCard
          icon={Trophy}
          label="Total Achievements"
          value={totalAchievements}
          description="Recorded this year"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <SummaryCard
          icon={CheckCircle2}
          label="Verified"
          value={verifiedAchievements}
          description="Approved achievements"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <SummaryCard
          icon={Clock3}
          label="Pending Verification"
          value={pendingAchievements}
          description="Require review"
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <SummaryCard
          icon={Star}
          label="Achievement Points"
          value={totalPoints}
          description="Total youth points"
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />
      </div>

      {/* ACHIEVEMENT HIGHLIGHT */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Medal size={20} />
              <span className="text-sm font-medium text-blue-100">
                Youth Recognition
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold">
              Celebrate youth achievements
            </h2>

            <p className="text-sm text-blue-100 mt-1 max-w-2xl">
              Track academic, leadership, volunteer, sports, cultural and
              community achievements to build a complete youth development
              record.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
              <p className="text-2xl font-bold">{totalAchievements}</p>
              <p className="text-xs text-blue-100">Records</p>
            </div>

            <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
              <p className="text-2xl font-bold">{totalPoints}</p>
              <p className="text-xs text-blue-100">Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search youth, CID or achievement..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border
                         border-gray-200 text-sm outline-none
                         focus:ring-2 focus:ring-blue-100
                         focus:border-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={17} className="text-gray-400" />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200
                         text-sm bg-white outline-none"
            >
              {CATEGORIES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200
                         text-sm bg-white outline-none"
            >
              <option>All Status</option>
              <option>Verified</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-900">
                Achievement Records
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {filteredAchievements.length} records displayed
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              Youth Records
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500">
                <th className="text-left px-5 py-4 font-semibold">
                  Youth
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Achievement
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Category
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Level
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Date
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Points
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Status
                </th>

                <th className="text-right px-5 py-4 font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAchievements.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl bg-blue-50
                                   text-blue-600 flex items-center
                                   justify-center font-bold"
                      >
                        {item.youth.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-gray-900">
                          {item.youth}
                        </p>

                        <p className="text-xs text-gray-400">
                          CID: {item.cid}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-gray-800">
                      {item.achievement}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.level}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.date}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-bold text-violet-600">
                      +{item.points}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={item.status} />
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setSelectedAchievement(item)}
                        className="w-9 h-9 rounded-lg border border-gray-200
                                   flex items-center justify-center
                                   text-gray-500 hover:text-blue-600
                                   hover:bg-blue-50 transition"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="w-9 h-9 rounded-lg border border-gray-200
                                   flex items-center justify-center
                                   text-gray-500 hover:text-blue-600
                                   hover:bg-blue-50 transition"
                        title="Edit"
                      >
                        <Edit3 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAchievements.length === 0 && (
          <div className="py-14 text-center">
            <Award className="mx-auto text-gray-300" size={40} />

            <p className="font-semibold text-gray-700 mt-3">
              No achievements found
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* VIEW MODAL */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-5 border-b">
              <div>
                <h2 className="font-bold text-lg">
                  Achievement Details
                </h2>

                <p className="text-xs text-gray-500">
                  {selectedAchievement.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedAchievement(null)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100
                           flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Award size={26} />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {selectedAchievement.youth}
                  </h3>

                  <p className="text-sm text-gray-500">
                    CID: {selectedAchievement.cid}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Detail
                  label="Achievement"
                  value={selectedAchievement.achievement}
                />

                <Detail
                  label="Category"
                  value={selectedAchievement.category}
                />

                <Detail
                  label="Recognition Level"
                  value={selectedAchievement.level}
                />

                <Detail
                  label="Achievement Points"
                  value={`+${selectedAchievement.points}`}
                />

                <Detail
                  label="Date"
                  value={selectedAchievement.date}
                />

                <Detail
                  label="Status"
                  value={selectedAchievement.status}
                />
              </div>
            </div>

            <div className="p-5 border-t flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-5 py-2.5 rounded-xl bg-blue-600
                           text-white font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD ACHIEVEMENT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl">
            <div className="flex items-center justify-between p-5 border-b">
              <div>
                <h2 className="font-bold text-lg">
                  Record Achievement
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Add a new youth achievement record.
                </p>
              </div>

              <button
                onClick={() => setShowAddModal(false)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100
                           flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <FormField label="Youth Member">
                <input
                  placeholder="Search youth member..."
                  className="form-input"
                />
              </FormField>

              <FormField label="Achievement Title">
                <input
                  placeholder="Enter achievement title"
                  className="form-input"
                />
              </FormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Category">
                  <select className="form-input">
                    {CATEGORIES.slice(1).map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Recognition Level">
                  <select className="form-input">
                    <option>Centre</option>
                    <option>Dzongkhag</option>
                    <option>National</option>
                    <option>International</option>
                  </select>
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Achievement Date">
                  <input type="date" className="form-input" />
                </FormField>

                <FormField label="Points">
                  <input
                    type="number"
                    placeholder="100"
                    className="form-input"
                  />
                </FormField>
              </div>

              <FormField label="Description">
                <textarea
                  rows="3"
                  placeholder="Add achievement details..."
                  className="form-input resize-none"
                />
              </FormField>
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200
                           text-gray-700 font-semibold text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2.5 rounded-xl bg-blue-600
                           text-white font-semibold text-sm
                           hover:bg-blue-700"
              >
                Save Achievement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================
   COMPONENTS
========================= */

const SummaryCard = ({
  icon: Icon,
  label,
  value,
  description,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div
        className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor}
                    flex items-center justify-center mb-4`}
      >
        <Icon size={20} />
      </div>

      <p className="text-xs text-gray-500">{label}</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const verified = status === "Verified";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full
        text-xs font-semibold ${
          verified
            ? "bg-emerald-50 text-emerald-700"
            : "bg-amber-50 text-amber-700"
        }`}
    >
      {verified ? (
        <CheckCircle2 size={13} />
      ) : (
        <Clock3 size={13} />
      )}

      {status}
    </span>
  );
};

const Detail = ({ label, value }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-semibold text-gray-800 mt-1">
        {value}
      </p>
    </div>
  );
};

const FormField = ({ label, children }) => {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
        {label}
      </label>

      {children}
    </div>
  );
};

export default AchievementTracking;
