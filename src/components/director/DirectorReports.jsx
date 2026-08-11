import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  FileSpreadsheet,
  Clock,
  BarChart3,
  CheckCircle,
  Search,
  Eye,
  FileDown,
  X,
} from "lucide-react";

// ======================================================
// REPORT DATA
// ======================================================

const reports = [
  {
    title: "Annual Youth Development Report 2026",
    type: "Annual",
    source: "PYCD",
    status: "Available",
    date: "31 July 2026",
    size: "4.8 MB",
  },
  {
    title: "Quarterly Youth Centre Performance Report",
    type: "Quarterly",
    source: "Youth Centres",
    status: "Available",
    date: "30 June 2026",
    size: "3.2 MB",
  },
  {
    title: "Volunteer Contribution Summary",
    type: "Monthly",
    source: "TEO / DEO",
    status: "Available",
    date: "31 July 2026",
    size: "1.8 MB",
  },
  {
    title: "Programme Outcome Assessment",
    type: "Quarterly",
    source: "PYCD",
    status: "Pending",
    date: "Expected 15 August 2026",
    size: "-",
  },
];

// ======================================================
// COMPONENT
// ======================================================

const DirectorReports = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // ====================================================
  // FILTER REPORTS
  // ====================================================

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.source.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" || report.type === typeFilter;

    return matchesSearch && matchesType;
  });

  // ====================================================
  // SUMMARY
  // ====================================================

  const availableReports = reports.filter(
    (report) => report.status === "Available"
  ).length;

  const pendingReports = reports.filter(
    (report) => report.status === "Pending"
  ).length;

  return (
    <div className="space-y-6 pb-8">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <FileText className="w-5 h-5" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                National Reports
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Review, generate and download national youth development reports
              </p>

            </div>

          </div>

        </div>


        {/* GENERATE REPORT */}

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-xl
            text-sm
            font-semibold
            shadow-sm
            transition
          "
        >
          <BarChart3 className="w-4 h-4" />

          Generate Report
        </button>

      </div>


      {/* ==================================================
          SUMMARY CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* Total */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
          "
        >

          <div className="flex items-center justify-between">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <FileText className="w-5 h-5" />
            </div>

          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {reports.length}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            National reports
          </p>

        </div>


        {/* Available */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            "
          >
            <CheckCircle className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Available
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {availableReports}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Ready for review
          </p>

        </div>


        {/* Pending */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-orange-50
              text-orange-600
              flex
              items-center
              justify-center
            "
          >
            <Clock className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {pendingReports}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Awaiting submission
          </p>

        </div>


        {/* Reporting Compliance */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-purple-50
              text-purple-600
              flex
              items-center
              justify-center
            "
          >
            <BarChart3 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Reporting Compliance
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            92%
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            National submission rate
          </p>

        </div>

      </div>


      {/* ==================================================
          REPORT MANAGEMENT
      ================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >

        {/* ==================================================
            TOOLBAR
        ================================================== */}

        <div
          className="
            p-5
            border-b
            border-gray-100
            flex
            flex-col
            lg:flex-row
            gap-4
            lg:items-center
            lg:justify-between
          "
        >

          <div>

            <h2 className="font-bold text-gray-900">
              Report Repository
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              National reports submitted by programme and field offices
            </p>

          </div>


          <div className="flex flex-col sm:flex-row gap-2">

            {/* SEARCH */}

            <div
              className="
                flex
                items-center
                w-full
                sm:w-64
                bg-gray-50
                border
                border-gray-200
                rounded-xl
                px-3
                py-2
                focus-within:border-blue-400
                focus-within:ring-2
                focus-within:ring-blue-100
              "
            >

              <Search className="w-4 h-4 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reports..."
                className="
                  w-full
                  ml-2
                  bg-transparent
                  outline-none
                  text-sm
                  text-gray-700
                  placeholder:text-gray-400
                "
              />

            </div>


            {/* FILTER */}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-gray-200
                text-sm
                font-medium
                text-gray-600
                hover:bg-gray-50
                transition
              "
            >

              <Filter className="w-4 h-4" />

              Filter

            </button>

          </div>

        </div>


        {/* ==================================================
            FILTER PANEL
        ================================================== */}

        {showFilters && (

          <div
            className="
              px-5
              py-4
              bg-gray-50
              border-b
              border-gray-100
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-3
            "
          >

            <span className="text-xs font-semibold text-gray-500">
              Report Type
            </span>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="
                px-3
                py-2
                bg-white
                border
                border-gray-200
                rounded-lg
                text-sm
                outline-none
                focus:border-blue-400
              "
            >

              <option>All</option>
              <option>Annual</option>
              <option>Quarterly</option>
              <option>Monthly</option>

            </select>

            {typeFilter !== "All" && (

              <button
                onClick={() => setTypeFilter("All")}
                className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  text-gray-500
                  hover:text-gray-900
                "
              >
                <X className="w-3.5 h-3.5" />

                Clear
              </button>

            )}

          </div>

        )}


        {/* ==================================================
            REPORT LIST
        ================================================== */}

        <div className="divide-y divide-gray-100">

          {filteredReports.length === 0 ? (

            <div className="py-16 text-center">

              <FileText className="w-10 h-10 text-gray-300 mx-auto" />

              <p className="text-sm font-medium text-gray-600 mt-3">
                No reports found
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Try changing your search or filter.
              </p>

            </div>

          ) : (

            filteredReports.map((report) => (

              <div
                key={report.title}
                className="
                  p-5
                  hover:bg-gray-50/70
                  transition
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    gap-4
                    xl:justify-between
                  "
                >

                  {/* REPORT INFO */}

                  <div className="flex items-start gap-4 min-w-0">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      "
                    >

                      {report.type === "Annual" ? (
                        <FileSpreadsheet className="w-5 h-5" />
                      ) : (
                        <FileText className="w-5 h-5" />
                      )}

                    </div>


                    <div className="min-w-0">

                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-gray-900
                        "
                      >
                        {report.title}
                      </h3>


                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-2
                          mt-2
                          text-xs
                          text-gray-500
                        "
                      >

                        <span
                          className="
                            px-2
                            py-1
                            bg-gray-100
                            rounded-md
                            font-medium
                          "
                        >
                          {report.type}
                        </span>

                        <span>
                          •
                        </span>

                        <span>
                          {report.source}
                        </span>

                        <span>
                          •
                        </span>

                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {report.date}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* STATUS + ACTIONS */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      xl:justify-end
                    "
                  >

                    <span
                      className={`
                        text-xs
                        px-3
                        py-1.5
                        rounded-full
                        font-semibold
                        ${
                          report.status === "Available"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
                        }
                      `}
                    >
                      {report.status}
                    </span>


                    {/* VIEW */}

                    <button
                      disabled={report.status !== "Available"}
                      className={`
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        text-xs
                        font-semibold
                        transition
                        ${
                          report.status === "Available"
                            ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            : "text-gray-300 cursor-not-allowed"
                        }
                      `}
                    >

                      <Eye className="w-4 h-4" />

                      View

                    </button>


                    {/* DOWNLOAD */}

                    <button
                      disabled={report.status !== "Available"}
                      className={`
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        text-xs
                        font-semibold
                        transition
                        ${
                          report.status === "Available"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-100 text-gray-300 cursor-not-allowed"
                        }
                      `}
                    >

                      <Download className="w-4 h-4" />

                      Download

                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>


      {/* ==================================================
          EXPORT OPTIONS
      ================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-center gap-3 mb-5">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            "
          >
            <FileDown className="w-5 h-5" />
          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Export Data
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Export national reporting data for further analysis
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


          {/* PDF */}

          <button
            className="
              flex
              items-center
              gap-3
              p-4
              rounded-xl
              border
              border-gray-200
              hover:border-blue-200
              hover:bg-blue-50/50
              transition
              text-left
            "
          >

            <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">

              <FileText className="w-4 h-4" />

            </div>

            <div>

              <p className="text-sm font-semibold text-gray-800">
                PDF Report
              </p>

              <p className="text-xs text-gray-400 mt-0.5">
                Executive-ready format
              </p>

            </div>

          </button>


          {/* EXCEL */}

          <button
            className="
              flex
              items-center
              gap-3
              p-4
              rounded-xl
              border
              border-gray-200
              hover:border-emerald-200
              hover:bg-emerald-50/50
              transition
              text-left
            "
          >

            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">

              <FileSpreadsheet className="w-4 h-4" />

            </div>

            <div>

              <p className="text-sm font-semibold text-gray-800">
                Excel Data
              </p>

              <p className="text-xs text-gray-400 mt-0.5">
                Detailed dataset
              </p>

            </div>

          </button>


          {/* SUMMARY */}

          <button
            className="
              flex
              items-center
              gap-3
              p-4
              rounded-xl
              border
              border-gray-200
              hover:border-purple-200
              hover:bg-purple-50/50
              transition
              text-left
            "
          >

            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">

              <BarChart3 className="w-4 h-4" />

            </div>

            <div>

              <p className="text-sm font-semibold text-gray-800">
                Executive Summary
              </p>

              <p className="text-xs text-gray-400 mt-0.5">
                Key national indicators
              </p>

            </div>

          </button>

        </div>

      </div>


      {/* ==================================================
          FOOTNOTE
      ================================================== */}

      <div className="flex items-center gap-2 text-xs text-gray-400 px-1">

        <Clock className="w-3.5 h-3.5" />

        Reports are updated based on submissions from PYCD, TEO/DEO and Youth Centres.

      </div>

    </div>
  );
};

export default DirectorReports;