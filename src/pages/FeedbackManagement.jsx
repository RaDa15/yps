import { useMemo, useState } from "react";
import {
  MessageSquare,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Star,
  Users,
  X,
  Send,
  Download,
} from "lucide-react";

const FEEDBACK_DATA = [
  {
    id: "FDB-001",
    youth: "Karma Wangchuk",
    cid: "10702004567",
    type: "Programme",
    subject: "Digital Skills Training",
    rating: 5,
    feedback:
      "The programme was very useful and the trainers explained everything clearly.",
    date: "2026-08-02",
    status: "Reviewed",
    priority: "Normal",
  },
  {
    id: "FDB-002",
    youth: "Sonam Choden",
    cid: "11304007821",
    type: "Youth Centre",
    subject: "Centre Facilities",
    rating: 4,
    feedback:
      "The centre facilities are good, but more computers would be helpful.",
    date: "2026-08-03",
    status: "Pending",
    priority: "Normal",
  },
  {
    id: "FDB-003",
    youth: "Tashi Dorji",
    cid: "11506003452",
    type: "Counselling",
    subject: "Counselling Service",
    rating: 3,
    feedback:
      "The counselling service was helpful, but appointment availability could be improved.",
    date: "2026-08-04",
    status: "Pending",
    priority: "High",
  },
  {
    id: "FDB-004",
    youth: "Pema Lhamo",
    cid: "11708009124",
    type: "Programme",
    subject: "Sports Activity",
    rating: 5,
    feedback:
      "Very engaging activity. I would like to see more activities like this.",
    date: "2026-07-29",
    status: "Reviewed",
    priority: "Normal",
  },
  {
    id: "FDB-005",
    youth: "Jigme Namgyal",
    cid: "11905002345",
    type: "Youth Centre",
    subject: "Opening Hours",
    rating: 2,
    feedback:
      "The centre should remain open for longer during weekends.",
    date: "2026-07-27",
    status: "Escalated",
    priority: "High",
  },
  {
    id: "FDB-006",
    youth: "Dechen Wangmo",
    cid: "12003005678",
    type: "Volunteer Service",
    subject: "Volunteer Coordination",
    rating: 4,
    feedback:
      "The volunteer coordination was good and communication was clear.",
    date: "2026-08-01",
    status: "Reviewed",
    priority: "Normal",
  },
];

const FeedbackManagement = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showResponseModal, setShowResponseModal] = useState(false);

  const filteredFeedback = useMemo(() => {
    return FEEDBACK_DATA.filter((item) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        item.youth.toLowerCase().includes(searchValue) ||
        item.cid.includes(search) ||
        item.subject.toLowerCase().includes(searchValue) ||
        item.feedback.toLowerCase().includes(searchValue);

      const matchesType =
        typeFilter === "All Types" || item.type === typeFilter;

      const matchesStatus =
        statusFilter === "All Status" || item.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All Priority" ||
        item.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [search, typeFilter, statusFilter, priorityFilter]);

  const totalFeedback = FEEDBACK_DATA.length;

  const pendingFeedback = FEEDBACK_DATA.filter(
    (item) => item.status === "Pending"
  ).length;

  const reviewedFeedback = FEEDBACK_DATA.filter(
    (item) => item.status === "Reviewed"
  ).length;

  const escalatedFeedback = FEEDBACK_DATA.filter(
    (item) => item.status === "Escalated"
  ).length;

  const averageRating =
    FEEDBACK_DATA.reduce((sum, item) => sum + item.rating, 0) /
    FEEDBACK_DATA.length;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <MessageSquare size={16} />
            Youth Engagement
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Feedback Management
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Review youth feedback, monitor satisfaction and respond to
            concerns raised through the Youth Centre.
          </p>
        </div>

        <button
          className="px-4 py-2.5 rounded-xl border border-gray-200
                     bg-white text-gray-700 font-semibold text-sm
                     flex items-center gap-2 hover:bg-gray-50 transition"
        >
          <Download size={17} />
          Export Feedback
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <SummaryCard
          icon={MessageSquare}
          label="Total Feedback"
          value={totalFeedback}
          description="All submissions"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <SummaryCard
          icon={Clock3}
          label="Pending Review"
          value={pendingFeedback}
          description="Require attention"
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <SummaryCard
          icon={CheckCircle2}
          label="Reviewed"
          value={reviewedFeedback}
          description="Completed reviews"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <SummaryCard
          icon={AlertCircle}
          label="Escalated"
          value={escalatedFeedback}
          description="Need management action"
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />

        <SummaryCard
          icon={Star}
          label="Average Rating"
          value={`${averageRating.toFixed(1)}/5`}
          description="Youth satisfaction"
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />
      </div>

      {/* SATISFACTION BANNER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Youth Satisfaction
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Overall satisfaction based on submitted feedback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={21}
                  className={
                    star <= Math.round(averageRating)
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="text-xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-5 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{
              width: `${(averageRating / 5) * 100}%`,
            }}
          />
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>Needs improvement</span>
          <span>Excellent</span>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search youth, subject or feedback..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border
                         border-gray-200 text-sm outline-none
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Filter size={17} className="text-gray-400" />

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200
                         bg-white text-sm outline-none"
            >
              <option>All Types</option>
              <option>Programme</option>
              <option>Youth Centre</option>
              <option>Counselling</option>
              <option>Volunteer Service</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200
                         bg-white text-sm outline-none"
            >
              <option>All Status</option>
              <option>Pending</option>
              <option>Reviewed</option>
              <option>Escalated</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200
                         bg-white text-sm outline-none"
            >
              <option>All Priority</option>
              <option>Normal</option>
              <option>High</option>
            </select>
          </div>
        </div>
      </div>

      {/* FEEDBACK TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-900">
              Feedback Submissions
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              {filteredFeedback.length} feedback records displayed
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <Users size={16} />
            Youth Responses
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500">
                <th className="text-left px-5 py-4 font-semibold">
                  Youth
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Feedback
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Type
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Rating
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Date
                </th>

                <th className="text-left px-5 py-4 font-semibold">
                  Priority
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
              {filteredFeedback.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  {/* YOUTH */}
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
                        <p className="text-sm font-semibold text-gray-900">
                          {item.youth}
                        </p>

                        <p className="text-xs text-gray-400">
                          CID: {item.cid}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* FEEDBACK */}
                  <td className="px-5 py-4 max-w-[300px]">
                    <p className="text-sm font-semibold text-gray-800">
                      {item.subject}
                    </p>

                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {item.feedback}
                    </p>
                  </td>

                  {/* TYPE */}
                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs">
                      {item.type}
                    </span>
                  </td>

                  {/* RATING */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <Star
                        size={15}
                        className="text-amber-400 fill-amber-400"
                      />

                      <span className="text-sm font-semibold">
                        {item.rating}
                      </span>
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.date}
                  </td>

                  {/* PRIORITY */}
                  <td className="px-5 py-4">
                    <PriorityBadge priority={item.priority} />
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <StatusBadge status={item.status} />
                  </td>

                  {/* ACTION */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setSelectedFeedback(item)}
                        className="w-9 h-9 rounded-lg border border-gray-200
                                   flex items-center justify-center
                                   text-gray-500 hover:text-blue-600
                                   hover:bg-blue-50 transition"
                        title="View feedback"
                      >
                        <Eye size={16} />
                      </button>

                      {(item.status === "Pending" ||
                        item.status === "Escalated") && (
                        <button
                          onClick={() => {
                            setSelectedFeedback(item);
                            setShowResponseModal(true);
                          }}
                          className="w-9 h-9 rounded-lg border border-gray-200
                                     flex items-center justify-center
                                     text-gray-500 hover:text-blue-600
                                     hover:bg-blue-50 transition"
                          title="Respond"
                        >
                          <Send size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredFeedback.length === 0 && (
          <div className="py-14 text-center">
            <MessageSquare
              size={40}
              className="mx-auto text-gray-300"
            />

            <p className="font-semibold text-gray-700 mt-3">
              No feedback found
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* VIEW FEEDBACK MODAL */}
      {selectedFeedback && !showResponseModal && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-5 border-b">
              <div>
                <h2 className="font-bold text-lg">
                  Feedback Details
                </h2>

                <p className="text-xs text-gray-500">
                  {selectedFeedback.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedFeedback(null)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100
                           flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-blue-50
                             text-blue-600 flex items-center justify-center
                             font-bold text-xl"
                >
                  {selectedFeedback.youth.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {selectedFeedback.youth}
                  </h3>

                  <p className="text-sm text-gray-500">
                    CID: {selectedFeedback.cid}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Detail
                  label="Feedback Type"
                  value={selectedFeedback.type}
                />

                <Detail
                  label="Subject"
                  value={selectedFeedback.subject}
                />

                <Detail
                  label="Date"
                  value={selectedFeedback.date}
                />

                <Detail
                  label="Priority"
                  value={selectedFeedback.priority}
                />
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">
                  Rating
                </p>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= selectedFeedback.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-2">
                  Feedback
                </p>

                <p className="text-sm text-gray-700 leading-6">
                  {selectedFeedback.feedback}
                </p>
              </div>

              <StatusBadge status={selectedFeedback.status} />
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              {(selectedFeedback.status === "Pending" ||
                selectedFeedback.status === "Escalated") && (
                <button
                  onClick={() => setShowResponseModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600
                             text-white font-semibold text-sm
                             flex items-center gap-2"
                >
                  <Send size={16} />
                  Respond
                </button>
              )}

              <button
                onClick={() => setSelectedFeedback(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-200
                           text-gray-700 font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESPONSE MODAL */}
      {showResponseModal && selectedFeedback && (
        <div className="fixed inset-0 bg-black/40 z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-5 border-b">
              <div>
                <h2 className="font-bold text-lg">
                  Respond to Feedback
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  {selectedFeedback.youth} · {selectedFeedback.id}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowResponseModal(false);
                  setSelectedFeedback(null);
                }}
                className="w-9 h-9 rounded-lg hover:bg-gray-100
                           flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">
                  Original Feedback
                </p>

                <p className="text-sm text-gray-700">
                  {selectedFeedback.feedback}
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Response
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your response to the youth..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200
                             text-sm outline-none resize-none
                             focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Response Channel
                </label>

                <select
                  className="w-full px-4 py-2.5 rounded-xl border
                             border-gray-200 text-sm bg-white"
                >
                  <option>In-App Notification</option>
                  <option>Email</option>
                  <option>SMS</option>
                </select>
              </div>
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowResponseModal(false);
                  setSelectedFeedback(null);
                }}
                className="px-5 py-2.5 rounded-xl border border-gray-200
                           text-gray-700 font-semibold text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowResponseModal(false);
                  setSelectedFeedback(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-600
                           text-white font-semibold text-sm
                           flex items-center gap-2 hover:bg-blue-700"
              >
                <Send size={16} />
                Send Response
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================
   SUMMARY CARD
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

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
};

/* =========================
   STATUS BADGE
========================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-700",
    Reviewed: "bg-emerald-50 text-emerald-700",
    Escalated: "bg-red-50 text-red-700",
  };

  const icons = {
    Pending: Clock3,
    Reviewed: CheckCircle2,
    Escalated: AlertCircle,
  };

  const Icon = icons[status] || Clock3;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1
                  rounded-full text-xs font-semibold
                  ${styles[status] || "bg-gray-100 text-gray-600"}`}
    >
      <Icon size={13} />
      {status}
    </span>
  );
};

/* =========================
   PRIORITY BADGE
========================= */

const PriorityBadge = ({ priority }) => {
  const high = priority === "High";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        high
          ? "bg-red-50 text-red-700"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {priority}
    </span>
  );
};

/* =========================
   DETAIL
========================= */

const Detail = ({ label, value }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-400">
        {label}
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1">
        {value}
      </p>
    </div>
  );
};

export default FeedbackManagement;
