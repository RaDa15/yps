import { useMemo, useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
  Eye,
  X,
  CalendarDays,
  MapPin,
  Users,
  FileCheck2,
  ClipboardCheck,
  Timer,
  AlertCircle,
} from "lucide-react";

const ApprovalQueue = () => {
  const [items, setItems] = useState([
    {
      id: "ACT-001",
      type: "Activity",
      title: "Youth Leadership Workshop",
      submittedBy: "Tashi Wangchuk",
      date: "08 Aug 2026",
      location: "Thimphu Youth Centre",
      participants: 32,
      submitted: "06 Aug 2026",
      status: "Pending",
      description:
        "A youth leadership and peer education workshop for members of the Y-PEER network.",
    },
    {
      id: "ACT-002",
      type: "Activity",
      title: "Community Health Awareness",
      submittedBy: "Pema Choden",
      date: "12 Aug 2026",
      location: "Paro",
      participants: 25,
      submitted: "05 Aug 2026",
      status: "Pending",
      description:
        "Community awareness programme focusing on healthy lifestyle and youth wellbeing.",
    },
    {
      id: "POST-001",
      type: "Post Activity",
      title: "Clean Bhutan Campaign",
      submittedBy: "Sonam Dorji",
      date: "01 Aug 2026",
      location: "Punakha",
      participants: 41,
      submitted: "03 Aug 2026",
      status: "Pending",
      description:
        "Post-activity report submitted following the network clean-up campaign.",
    },
    {
      id: "HRS-001",
      type: "Service Hours",
      title: "Volunteer Service Hours",
      submittedBy: "Karma Wangmo",
      date: "30 Jul 2026",
      location: "Thimphu",
      participants: 1,
      submitted: "02 Aug 2026",
      status: "Pending",
      hours: 18,
      description:
        "Volunteer has submitted 18 service hours for validation.",
    },
    {
      id: "POST-002",
      type: "Post Activity",
      title: "Peer Education Session",
      submittedBy: "Tshering Norbu",
      date: "27 Jul 2026",
      location: "Wangdue",
      participants: 18,
      submitted: "29 Jul 2026",
      status: "Approved",
      description:
        "Completed peer education session with supporting documentation.",
    },
    {
      id: "HRS-002",
      type: "Service Hours",
      title: "Community Volunteer Work",
      submittedBy: "Karma Dorji",
      date: "24 Jul 2026",
      location: "Thimphu",
      participants: 1,
      submitted: "25 Jul 2026",
      status: "Rejected",
      hours: 8,
      description:
        "Submitted service hours did not have sufficient supporting evidence.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Pending");

  const [selectedItem, setSelectedItem] = useState(null);
  const [actionItem, setActionItem] = useState(null);
  const [actionType, setActionType] = useState(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const query = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.submittedBy.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query);

      const matchesType =
        typeFilter === "All" || item.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [items, search, typeFilter, statusFilter]);

  const pending = items.filter(
    (item) => item.status === "Pending"
  ).length;

  const approved = items.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejected = items.filter(
    (item) => item.status === "Rejected"
  ).length;

  const activityCount = items.filter(
    (item) => item.type === "Activity" && item.status === "Pending"
  ).length;

  const postActivityCount = items.filter(
    (item) => item.type === "Post Activity" && item.status === "Pending"
  ).length;

  const serviceHourCount = items.filter(
    (item) => item.type === "Service Hours" && item.status === "Pending"
  ).length;

  const updateStatus = () => {
    if (!actionItem || !actionType) return;

    const newStatus =
      actionType === "approve"
        ? "Approved"
        : "Rejected";

    setItems((current) =>
      current.map((item) =>
        item.id === actionItem.id
          ? {
              ...item,
              status: newStatus,
            }
          : item
      )
    );

    setActionItem(null);
    setActionType(null);
  };

  const statusStyle = (status) => {
    if (status === "Approved") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    if (status === "Rejected") {
      return "bg-red-50 text-red-700 border-red-200";
    }

    return "bg-amber-50 text-amber-700 border-amber-200";
  };

  const typeStyle = (type) => {
    if (type === "Activity") {
      return "bg-blue-50 text-blue-700";
    }

    if (type === "Post Activity") {
      return "bg-purple-50 text-purple-700";
    }

    return "bg-orange-50 text-orange-700";
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>

        <p className="text-sm font-semibold text-blue-600">
          Network Operations
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Approval Queue
        </h1>

        <p className="text-sm text-gray-500 mt-2 max-w-3xl">
          Review and validate network activities, post-activity
          submissions and volunteer service hours.
        </p>

      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock3 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Pending Approvals
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {pending}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Activity Requests
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {activityCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <FileCheck2 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Post-Activity Reports
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {postActivityCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <Timer className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Service Hours
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {serviceHourCount}
          </p>

        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">

        <div className="flex flex-col xl:flex-row gap-4">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search approval requests..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <select
            value={typeFilter}
            onChange={(event) =>
              setTypeFilter(event.target.value)
            }
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
          >

            <option value="All">
              All Request Types
            </option>

            <option value="Activity">
              Activities
            </option>

            <option value="Post Activity">
              Post-Activity Reports
            </option>

            <option value="Service Hours">
              Service Hours
            </option>

          </select>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
          >

            <option value="Pending">
              Pending
            </option>

            <option value="Approved">
              Approved
            </option>

            <option value="Rejected">
              Rejected
            </option>

            <option value="All">
              All Status
            </option>

          </select>

        </div>

      </div>

      {/* QUEUE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">

          <div>

            <h2 className="font-bold text-gray-900">
              Approval Requests
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Requests requiring network focal point review.
            </p>

          </div>

          <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
            {pending} Pending
          </span>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-gray-50 border-b border-gray-100">

              <tr>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Request
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Type
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Submitted By
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Action
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredItems.map((item) => (

                <tr
                  key={item.id}
                  className="hover:bg-gray-50/70 transition"
                >

                  {/* REQUEST */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">

                        {item.type === "Activity" && (
                          <CalendarDays className="w-4 h-4" />
                        )}

                        {item.type === "Post Activity" && (
                          <FileCheck2 className="w-4 h-4" />
                        )}

                        {item.type === "Service Hours" && (
                          <Timer className="w-4 h-4" />
                        )}

                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {item.title}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {item.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* TYPE */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${typeStyle(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>

                  </td>

                  {/* SUBMITTED BY */}
                  <td className="px-6 py-5">

                    <p className="text-sm font-semibold text-gray-800">
                      {item.submittedBy}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.location}
                    </p>

                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5">

                    <p className="text-sm text-gray-600">
                      {item.date}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      Submitted {item.submitted}
                    </p>

                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold ${statusStyle(
                        item.status
                      )}`}
                    >

                      {item.status === "Pending" && (
                        <Clock3 className="w-3.5 h-3.5" />
                      )}

                      {item.status === "Approved" && (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      )}

                      {item.status === "Rejected" && (
                        <XCircle className="w-3.5 h-3.5" />
                      )}

                      {item.status}

                    </span>

                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          setSelectedItem(item)
                        }
                        className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {item.status === "Pending" && (
                        <>
                          <button
                            onClick={() => {
                              setActionItem(item);
                              setActionType("approve");
                            }}
                            className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center"
                            title="Approve"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              setActionItem(item);
                              setActionType("reject");
                            }}
                            className="w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center"
                            title="Reject"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredItems.length === 0 && (
          <div className="py-14 text-center">

            <AlertCircle className="w-10 h-10 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No approval requests found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your filters.
            </p>

          </div>
        )}

      </div>

      {/* DETAILS MODAL */}
      {selectedItem && (

        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="p-6 border-b border-gray-100 flex justify-between items-center">

              <div>

                <p className="text-xs font-bold text-blue-600 uppercase">
                  Approval Request
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  {selectedItem.title}
                </h2>

              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <div className="p-6 space-y-6">

              <div className="flex justify-between items-center">

                <span
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold ${statusStyle(
                    selectedItem.status
                  )}`}
                >
                  {selectedItem.status}
                </span>

                <span className="text-xs font-semibold text-gray-400">
                  {selectedItem.id}
                </span>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">

                    <Users className="w-4 h-4" />

                    <span className="text-xs">
                      Submitted By
                    </span>

                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedItem.submittedBy}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">

                    <CalendarDays className="w-4 h-4" />

                    <span className="text-xs">
                      Activity Date
                    </span>

                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedItem.date}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">

                    <MapPin className="w-4 h-4" />

                    <span className="text-xs">
                      Location
                    </span>

                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedItem.location}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">

                    {selectedItem.type === "Service Hours" ? (
                      <Timer className="w-4 h-4" />
                    ) : (
                      <Users className="w-4 h-4" />
                    )}

                    <span className="text-xs">
                      {selectedItem.type === "Service Hours"
                        ? "Service Hours"
                        : "Participants"}
                    </span>

                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">

                    {selectedItem.type === "Service Hours"
                      ? `${selectedItem.hours} hours`
                      : `${selectedItem.participants} participants`}

                  </p>

                </div>

              </div>

              <div>

                <p className="text-xs font-bold text-gray-500 uppercase">
                  Description
                </p>

                <div className="mt-2 bg-gray-50 border border-gray-100 rounded-xl p-4">

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedItem.description}
                  </p>

                </div>

              </div>

              {selectedItem.status === "Pending" && (

                <div className="flex justify-end gap-3">

                  <button
                    onClick={() => {
                      setActionItem(selectedItem);
                      setActionType("reject");
                      setSelectedItem(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 text-sm font-bold"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => {
                      setActionItem(selectedItem);
                      setActionType("approve");
                      setSelectedItem(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold"
                  >
                    Approve
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      )}

      {/* CONFIRM MODAL */}
      {actionItem && (

        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl">

            <div className="flex items-center gap-3">

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  actionType === "approve"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-600"
                }`}
              >

                {actionType === "approve" ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}

              </div>

              <div>

                <h3 className="text-lg font-extrabold text-gray-900">
                  {actionType === "approve"
                    ? "Approve Request?"
                    : "Reject Request?"}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {actionItem.title}
                </p>

              </div>

            </div>

            <p className="text-sm text-gray-600 mt-5 leading-relaxed">

              {actionType === "approve"
                ? "This request will be approved and recorded in the network's activity records."
                : "This request will be marked as rejected and the submitter can be notified."}

            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => {
                  setActionItem(null);
                  setActionType(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={updateStatus}
                className={`px-5 py-2.5 rounded-xl text-white text-sm font-bold ${
                  actionType === "approve"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {actionType === "approve"
                  ? "Approve"
                  : "Reject"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ApprovalQueue;