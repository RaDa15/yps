import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Filter,
  Search,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";

const REPORT_DATA = [
  {
    id: 1,
    programme: "Youth Leadership Development",
    centre: "Thimphu Youth Centre",
    category: "Leadership",
    participants: 86,
    target: 100,
    status: "Completed",
    startDate: "2026-07-05",
    endDate: "2026-07-20",
    outcome: "Completed successfully",
  },
  {
    id: 2,
    programme: "Digital Skills for Youth",
    centre: "Thimphu Youth Centre",
    category: "Skills Development",
    participants: 72,
    target: 80,
    status: "Ongoing",
    startDate: "2026-08-01",
    endDate: "2026-08-25",
    outcome: "Progress on track",
  },
  {
    id: 3,
    programme: "Mental Health Awareness Session",
    centre: "Thimphu Youth Centre",
    category: "Wellbeing",
    participants: 54,
    target: 60,
    status: "Completed",
    startDate: "2026-07-15",
    endDate: "2026-07-15",
    outcome: "Good participation",
  },
  {
    id: 4,
    programme: "Volunteer Orientation Programme",
    centre: "Thimphu Youth Centre",
    category: "Volunteer",
    participants: 38,
    target: 50,
    status: "Pending Report",
    startDate: "2026-08-03",
    endDate: "2026-08-10",
    outcome: "Report pending",
  },
  {
    id: 5,
    programme: "Sports & Recreation Week",
    centre: "Thimphu Youth Centre",
    category: "Sports",
    participants: 124,
    target: 150,
    status: "Completed",
    startDate: "2026-06-10",
    endDate: "2026-06-17",
    outcome: "High engagement",
  },
];

const ProgrammeReporting = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredReports = useMemo(() => {
    return REPORT_DATA.filter((report) => {
      const matchesSearch =
        report.programme.toLowerCase().includes(search.toLowerCase()) ||
        report.centre.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || report.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All" || report.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [search, statusFilter, categoryFilter]);

  const totalParticipants = REPORT_DATA.reduce(
    (sum, report) => sum + report.participants,
    0
  );

  const completedReports = REPORT_DATA.filter(
    (report) => report.status === "Completed"
  ).length;

  const ongoingReports = REPORT_DATA.filter(
    (report) => report.status === "Ongoing"
  ).length;

  const pendingReports = REPORT_DATA.filter(
    (report) => report.status === "Pending Report"
  ).length;

  const completionRate = Math.round(
    (completedReports / REPORT_DATA.length) * 100
  );

  const categories = [
    "All",
    ...new Set(REPORT_DATA.map((report) => report.category)),
  ];

  const exportReport = () => {
    const headers = [
      "Programme",
      "Centre",
      "Category",
      "Participants",
      "Target",
      "Status",
      "Start Date",
      "End Date",
      "Outcome",
    ];

    const rows = REPORT_DATA.map((report) => [
      report.programme,
      report.centre,
      report.category,
      report.participants,
      report.target,
      report.status,
      report.startDate,
      report.endDate,
      report.outcome,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "programme-report.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  const statusStyle = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-700 border-emerald-100";
    }

    if (status === "Ongoing") {
      return "bg-blue-50 text-blue-700 border-blue-100";
    }

    return "bg-amber-50 text-amber-700 border-amber-100";
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <FileText size={16} />
            Programme Management
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Programme Reporting
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Review programme participation, outcomes and centre-level
            performance.
          </p>
        </div>

        <button
          onClick={exportReport}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          <Download size={17} />
          Export Report
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <BarChart3 size={20} />
          </div>

          <p className="text-xs text-gray-500">Total Programmes</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            {REPORT_DATA.length}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Reported this period
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
            <Users size={20} />
          </div>

          <p className="text-xs text-gray-500">Participants</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            {totalParticipants}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Youth participation
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <CheckCircle2 size={20} />
          </div>

          <p className="text-xs text-gray-500">Completion Rate</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            {completionRate}%
          </h2>

          <div className="flex items-center gap-1 text-xs text-emerald-600 mt-2">
            <TrendingUp size={13} />
            Programme completion
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <Clock3 size={20} />
          </div>

          <p className="text-xs text-gray-500">Pending Reports</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            {pendingReports}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Requires follow-up
          </p>
        </div>
      </div>

      {/* PERFORMANCE OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Programme Performance
              </h2>

              <p className="text-sm text-gray-500">
                Current reporting status
              </p>
            </div>

            <BarChart3 className="text-blue-600" size={20} />
          </div>

          <div className="space-y-5">
            {REPORT_DATA.map((report) => {
              const percentage = Math.min(
                Math.round((report.participants / report.target) * 100),
                100
              );

              return (
                <div key={report.id}>
                  <div className="flex justify-between gap-4 mb-2">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {report.programme}
                    </p>

                    <span className="text-xs font-semibold text-gray-500">
                      {percentage}%
                    </span>
                  </div>

                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Report Status
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Reporting progress
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-600" size={20} />
                <span className="text-sm text-gray-600">
                  Completed
                </span>
              </div>

              <span className="font-bold text-gray-900">
                {completedReports}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock3 className="text-blue-600" size={20} />
                <span className="text-sm text-gray-600">
                  Ongoing
                </span>
              </div>

              <span className="font-bold text-gray-900">
                {ongoingReports}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <XCircle className="text-amber-600" size={20} />
                <span className="text-sm text-gray-600">
                  Pending Report
                </span>
              </div>

              <span className="font-bold text-gray-900">
                {pendingReports}
              </span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">
                Overall reporting
              </span>

              <span className="font-semibold text-gray-900">
                {completionRate}%
              </span>
            </div>

            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search programme or centre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending Report">
                Pending Report
              </option>
            </select>
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* REPORT TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Programme Reports
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Detailed programme reporting records
              </p>
            </div>

            <CalendarDays className="text-blue-600" size={20} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
                <th className="text-left px-6 py-4">
                  Programme
                </th>

                <th className="text-left px-6 py-4">
                  Category
                </th>

                <th className="text-left px-6 py-4">
                  Participants
                </th>

                <th className="text-left px-6 py-4">
                  Period
                </th>

                <th className="text-left px-6 py-4">
                  Status
                </th>

                <th className="text-left px-6 py-4">
                  Outcome
                </th>

                <th className="text-right px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {report.programme}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {report.centre}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.category}
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {report.participants}
                      </p>

                      <p className="text-xs text-gray-400">
                        Target: {report.target}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-xs text-gray-500">
                      <div>{report.startDate}</div>
                      <div>{report.endDate}</div>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full border text-xs font-semibold ${statusStyle(
                          report.status
                        )}`}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.outcome}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                        onClick={() =>
                          alert(
                            `Viewing report: ${report.programme}`
                          )
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-12 text-gray-400"
                  >
                    No programme reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeReporting;