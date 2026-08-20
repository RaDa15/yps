import { useMemo, useState } from "react";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  Clock3,
  Eye,
  CheckCircle2,
  XCircle,
  X,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const VolunteerApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: "VAP-001",
      name: "Tashi Wangchuk",
      youthId: "YTH-2026-00124",
      cid: "1150200XXXX",
      gender: "Male",
      age: 21,
      location: "Thimphu",
      phone: "17XXXXXX",
      email: "tashi@example.com",
      appliedDate: "05 Aug 2026",
      status: "Pending",
      motivation:
        "I want to contribute to youth development and participate in community-based activities through Y-PEER.",
    },
    {
      id: "VAP-002",
      name: "Pema Choden",
      youthId: "YTH-2026-00125",
      cid: "1150300XXXX",
      gender: "Female",
      age: 22,
      location: "Paro",
      phone: "17XXXXXX",
      email: "pema@example.com",
      appliedDate: "04 Aug 2026",
      status: "Pending",
      motivation:
        "I am interested in peer education, volunteer activities and youth leadership programmes.",
    },
    {
      id: "VAP-003",
      name: "Sonam Dorji",
      youthId: "YTH-2026-00126",
      cid: "1150400XXXX",
      gender: "Male",
      age: 20,
      location: "Punakha",
      phone: "17XXXXXX",
      email: "sonam@example.com",
      appliedDate: "03 Aug 2026",
      status: "Pending",
      motivation:
        "I would like to develop my leadership skills while supporting activities in my community.",
    },
    {
      id: "VAP-004",
      name: "Karma Wangmo",
      youthId: "YTH-2026-00127",
      cid: "1150500XXXX",
      gender: "Female",
      age: 23,
      location: "Thimphu",
      phone: "17XXXXXX",
      email: "karma@example.com",
      appliedDate: "28 Jul 2026",
      status: "Approved",
      motivation:
        "I am passionate about youth empowerment and community service.",
    },
    {
      id: "VAP-005",
      name: "Tshering Norbu",
      youthId: "YTH-2026-00128",
      cid: "1150600XXXX",
      gender: "Male",
      age: 24,
      location: "Wangdue",
      phone: "17XXXXXX",
      email: "tshering@example.com",
      appliedDate: "25 Jul 2026",
      status: "Rejected",
      motivation:
        "I wanted to join the network to participate in volunteer programmes.",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [actionApplication, setActionApplication] = useState(null);
  const [actionType, setActionType] = useState(null);

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        application.name.toLowerCase().includes(query) ||
        application.youthId.toLowerCase().includes(query) ||
        application.location.toLowerCase().includes(query) ||
        application.id.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        application.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, searchQuery, statusFilter]);

  const pendingCount = applications.filter(
    (application) => application.status === "Pending"
  ).length;

  const approvedCount = applications.filter(
    (application) => application.status === "Approved"
  ).length;

  const rejectedCount = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  const handleAction = () => {
    if (!actionApplication || !actionType) return;

    const newStatus =
      actionType === "approve" ? "Approved" : "Rejected";

    setApplications((current) =>
      current.map((application) =>
        application.id === actionApplication.id
          ? {
              ...application,
              status: newStatus,
            }
          : application
      )
    );

    setActionApplication(null);
    setActionType(null);
  };

  const getStatusStyle = (status) => {
    if (status === "Approved") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    if (status === "Rejected") {
      return "bg-red-50 text-red-700 border-red-200";
    }

    return "bg-amber-50 text-amber-700 border-amber-200";
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>

        <p className="text-sm font-semibold text-blue-600">
          Network Operations
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Volunteer Applications
        </h1>

        <p className="text-sm text-gray-500 mt-2 max-w-3xl">
          Review and manage volunteer applications submitted to your
          Youth Led Group network.
        </p>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Applications
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {applications.length}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock3 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Pending Review
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {pendingCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Approved
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {approvedCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <UserX className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Rejected
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {rejectedCount}
          </p>

        </div>

      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search by name, Youth ID, location or application ID..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

      </div>

      {/* APPLICATION TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Applications
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Review applicants before approving them into the network.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="bg-gray-50 border-b border-gray-100">

              <tr>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Applicant
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Location
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Applied
                </th>

                <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-[11px] font-bold text-gray-500 uppercase">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredApplications.map((application) => (

                <tr
                  key={application.id}
                  className="hover:bg-gray-50/70 transition"
                >

                  {/* APPLICANT */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                        {application.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {application.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          {application.youthId}
                        </p>

                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {application.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-sm text-gray-600">

                      <MapPin className="w-4 h-4 text-gray-400" />

                      {application.location}

                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {application.gender} • {application.age} years
                    </p>

                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-sm text-gray-600">

                      <CalendarDays className="w-4 h-4 text-gray-400" />

                      {application.appliedDate}

                    </div>

                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold ${getStatusStyle(
                        application.status
                      )}`}
                    >

                      {application.status === "Approved" && (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      )}

                      {application.status === "Rejected" && (
                        <XCircle className="w-3.5 h-3.5" />
                      )}

                      {application.status === "Pending" && (
                        <Clock3 className="w-3.5 h-3.5" />
                      )}

                      {application.status}

                    </span>

                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5">

                    <div className="flex items-center justify-end gap-2">

                      <button
                        onClick={() =>
                          setSelectedApplication(application)
                        }
                        className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition"
                        title="View application"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {application.status === "Pending" && (
                        <>
                          <button
                            onClick={() => {
                              setActionApplication(application);
                              setActionType("approve");
                            }}
                            className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center transition"
                            title="Approve"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              setActionApplication(application);
                              setActionType("reject");
                            }}
                            className="w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition"
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

        {filteredApplications.length === 0 && (
          <div className="py-14 text-center">

            <Users className="w-10 h-10 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No applications found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your search or status filter.
            </p>

          </div>
        )}

      </div>

      {/* APPLICATION DETAILS MODAL */}
      {selectedApplication && (

        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs font-bold text-blue-600 uppercase">
                  Volunteer Application
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  {selectedApplication.name}
                </h2>

              </div>

              <button
                onClick={() => setSelectedApplication(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <div className="p-6 space-y-6">

              {/* STATUS */}
              <div className="flex items-center justify-between">

                <span
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold ${getStatusStyle(
                    selectedApplication.status
                  )}`}
                >
                  {selectedApplication.status}
                </span>

                <span className="text-xs text-gray-400 font-semibold">
                  {selectedApplication.id}
                </span>

              </div>

              {/* PROFILE */}
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-lg font-extrabold">
                    {selectedApplication.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-gray-900">
                      {selectedApplication.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {selectedApplication.youthId}
                    </p>

                  </div>

                </div>

              </div>

              {/* INFORMATION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs">
                      Citizenship ID
                    </span>
                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedApplication.cid}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">
                      Age / Gender
                    </span>
                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedApplication.age} years •{" "}
                    {selectedApplication.gender}
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
                    {selectedApplication.location}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs">
                      Contact
                    </span>
                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedApplication.phone}
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-4 md:col-span-2">

                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">
                      Email
                    </span>
                  </div>

                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {selectedApplication.email}
                  </p>

                </div>

              </div>

              {/* MOTIVATION */}
              <div>

                <p className="text-xs font-bold text-gray-500 uppercase">
                  Motivation
                </p>

                <div className="mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100">

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedApplication.motivation}
                  </p>

                </div>

              </div>

              {/* ACTIONS */}
              {selectedApplication.status === "Pending" && (

                <div className="flex justify-end gap-3">

                  <button
                    onClick={() => {
                      setActionApplication(selectedApplication);
                      setActionType("reject");
                      setSelectedApplication(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 text-sm font-bold transition"
                  >
                    Reject Application
                  </button>

                  <button
                    onClick={() => {
                      setActionApplication(selectedApplication);
                      setActionType("approve");
                      setSelectedApplication(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition"
                  >
                    Approve Volunteer
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      )}

      {/* CONFIRMATION MODAL */}
      {actionApplication && (

        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-6">

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
                    ? "Approve Volunteer?"
                    : "Reject Application?"}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {actionApplication.name}
                </p>

              </div>

            </div>

            <p className="text-sm text-gray-600 leading-relaxed mt-5">

              {actionType === "approve"
                ? "This volunteer will become an approved member of your Y-PEER network."
                : "This application will be marked as rejected. The applicant can be notified about the decision."}

            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => {
                  setActionApplication(null);
                  setActionType(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleAction}
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

export default VolunteerApplications;
