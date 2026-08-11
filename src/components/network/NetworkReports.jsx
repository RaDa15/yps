import { useMemo, useState } from "react";
import {
  Search,
  FileText,
  Download,
  Eye,
  CalendarDays,
  Users,
  Clock3,
  Activity,
  X,
  Printer,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

const NetworkReports = () => {
  const [reports, setReports] = useState([
    {
      id: "RPT-2026-08",
      title: "August 2026 Network Activity Report",
      type: "Monthly",
      period: "August 2026",
      activities: 14,
      volunteers: 86,
      hours: 428,
      status: "Ready",
      generated: "07 Aug 2026",
    },
    {
      id: "RPT-2026-Q3",
      title: "Q3 2026 Network Performance Report",
      type: "Quarterly",
      period: "July - September 2026",
      activities: 37,
      volunteers: 92,
      hours: 1164,
      status: "Draft",
      generated: "05 Aug 2026",
    },
    {
      id: "RPT-2026-H1",
      title: "2026 First Half Network Report",
      type: "Quarterly",
      period: "January - June 2026",
      activities: 61,
      volunteers: 78,
      hours: 1942,
      status: "Ready",
      generated: "02 Jul 2026",
    },
    {
      id: "RPT-2025-ANNUAL",
      title: "Annual Y-PEER Network Report 2025",
      type: "Annual",
      period: "January - December 2025",
      activities: 124,
      volunteers: 115,
      hours: 3840,
      status: "Ready",
      generated: "10 Jan 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const query = search.toLowerCase();

      const matchesSearch =
        report.title.toLowerCase().includes(query) ||
        report.period.toLowerCase().includes(query) ||
        report.id.toLowerCase().includes(query);

      const matchesType =
        typeFilter === "All" ||
        report.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [reports, search, typeFilter]);

  const totalActivities = reports.reduce(
    (sum, report) => sum + report.activities,
    0
  );

  const totalVolunteers = Math.max(
    ...reports.map((report) => report.volunteers)
  );

  const totalHours = reports.reduce(
    (sum, report) => sum + report.hours,
    0
  );

  const readyReports = reports.filter(
    (report) => report.status === "Ready"
  ).length;

  const exportReport = (report, format) => {
    if (format === "print") {
      window.print();
      return;
    }

    const content = [
      `Y-PEER NETWORK REPORT`,
      ``,
      `Report: ${report.title}`,
      `Report ID: ${report.id}`,
      `Type: ${report.type}`,
      `Period: ${report.period}`,
      ``,
      `Activities: ${report.activities}`,
      `Volunteers: ${report.volunteers}`,
      `Volunteer Hours: ${report.hours}`,
      `Status: ${report.status}`,
      `Generated: ${report.generated}`,
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.id}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

        <div>

          <p className="text-sm font-semibold text-blue-600">
            Network Documentation
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
            Network Reports
          </h1>

          <p className="text-sm text-gray-500 mt-2 max-w-3xl">
            Generate, review and export reports covering network
            activities, volunteers, service hours and programme outcomes.
          </p>

        </div>

        <button
          onClick={() =>
            setSelectedReport({
              id: "NEW-REPORT",
              title: "New Network Report",
              type: "Monthly",
              period: "Current Period",
              activities: 0,
              volunteers: 0,
              hours: 0,
              status: "Draft",
              generated: new Date().toLocaleDateString(),
            })
          }
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm"
        >
          <FileText className="w-4 h-4" />
          Create Report
        </button>

      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Reported Activities
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {totalActivities}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Active Volunteers
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {totalVolunteers}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <Clock3 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Service Hours
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {totalHours.toLocaleString()}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Ready Reports
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {readyReports}
          </p>

        </div>

      </div>

      {/* REPORT FILTER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search reports..."
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
              All Report Types
            </option>

            <option value="Monthly">
              Monthly
            </option>

            <option value="Quarterly">
              Quarterly
            </option>

            <option value="Annual">
              Annual
            </option>

          </select>

        </div>

      </div>

      {/* REPORT LIST */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Network Reports
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Monthly, quarterly and annual network documentation.
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          {filteredReports.map((report) => (

            <div
              key={report.id}
              className="p-6 hover:bg-gray-50/60 transition"
            >

              <div className="flex flex-col xl:flex-row xl:items-center gap-5">

                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">

                  <FileText className="w-5 h-5" />

                </div>

                {/* INFO */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="text-sm font-bold text-gray-900">
                      {report.title}
                    </h3>

                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold">
                      {report.type}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        report.status === "Ready"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {report.status}
                    </span>

                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    {report.id} • {report.period}
                  </p>

                  <p className="text-xs text-gray-500 mt-2">
                    Generated {report.generated}
                  </p>

                </div>

                {/* METRICS */}
                <div className="grid grid-cols-3 gap-5 xl:w-[330px]">

                  <div>

                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Activities
                    </p>

                    <p className="text-sm font-extrabold text-gray-900 mt-1">
                      {report.activities}
                    </p>

                  </div>

                  <div>

                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Volunteers
                    </p>

                    <p className="text-sm font-extrabold text-gray-900 mt-1">
                      {report.volunteers}
                    </p>

                  </div>

                  <div>

                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Hours
                    </p>

                    <p className="text-sm font-extrabold text-gray-900 mt-1">
                      {report.hours}
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() =>
                      setSelectedReport(report)
                    }
                    className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center"
                    title="Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      exportReport(report, "download")
                    }
                    className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center"
                    title="Export"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredReports.length === 0 && (
          <div className="py-14 text-center">

            <FileText className="w-10 h-10 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No reports found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing the search or filter.
            </p>

          </div>
        )}

      </div>

      {/* DOCUMENTATION SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-5">
            Volunteer Roster
          </h3>

          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            View the current network volunteer roster including
            volunteer status, participation and contact information.
          </p>

          <button
            onClick={() =>
              alert("Volunteer roster export will be connected to the database.")
            }
            className="mt-5 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            View Roster →
          </button>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <Clock3 className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-5">
            Service Hour Summary
          </h3>

          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Review service hours contributed by volunteers and
            identify high-performing members.
          </p>

          <button
            onClick={() =>
              alert("Service hour summary will be connected to the database.")
            }
            className="mt-5 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            View Summary →
          </button>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-5">
            Activity Outcomes
          </h3>

          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Review completed activities, outcomes, participation
            and supporting documentation.
          </p>

          <button
            onClick={() =>
              alert("Activity outcome documentation will be connected to the database.")
            }
            className="mt-5 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            View Outcomes →
          </button>

        </div>

      </div>

      {/* REPORT PREVIEW MODAL */}
      {selectedReport && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl max-h-[90vh] overflow-y-auto">

            {/* MODAL HEADER */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs font-bold text-blue-600 uppercase">
                  Report Preview
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  {selectedReport.title}
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  {selectedReport.id}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedReport(null)
                }
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            {/* REPORT CONTENT */}
            <div className="p-6 space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="bg-blue-50 rounded-xl p-5">

                  <Activity className="w-5 h-5 text-blue-600" />

                  <p className="text-xs text-gray-500 mt-4">
                    Activities
                  </p>

                  <p className="text-2xl font-extrabold text-gray-900">
                    {selectedReport.activities}
                  </p>

                </div>

                <div className="bg-purple-50 rounded-xl p-5">

                  <Users className="w-5 h-5 text-purple-600" />

                  <p className="text-xs text-gray-500 mt-4">
                    Volunteers
                  </p>

                  <p className="text-2xl font-extrabold text-gray-900">
                    {selectedReport.volunteers}
                  </p>

                </div>

                <div className="bg-orange-50 rounded-xl p-5">

                  <Clock3 className="w-5 h-5 text-orange-600" />

                  <p className="text-xs text-gray-500 mt-4">
                    Service Hours
                  </p>

                  <p className="text-2xl font-extrabold text-gray-900">
                    {selectedReport.hours}
                  </p>

                </div>

              </div>

              <div className="border border-gray-200 rounded-2xl p-5">

                <div className="flex items-center gap-2">

                  <CalendarDays className="w-4 h-4 text-blue-600" />

                  <p className="text-sm font-bold text-gray-900">
                    Reporting Period
                  </p>

                </div>

                <p className="text-sm text-gray-600 mt-2">
                  {selectedReport.period}
                </p>

              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                <h3 className="text-sm font-bold text-gray-900">
                  Network Performance Summary
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  This report consolidates network-level volunteer
                  engagement, activities and service contributions for
                  the selected reporting period. The final production
                  version can include programme outcomes, geographic
                  participation, volunteer retention and supporting
                  documentation.
                </p>

              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap justify-end gap-3">

                <button
                  onClick={() =>
                    exportReport(selectedReport, "print")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>

                <button
                  onClick={() =>
                    exportReport(selectedReport, "download")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm font-bold"
                >
                  <Download className="w-4 h-4" />
                  Export Report
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default NetworkReports;
