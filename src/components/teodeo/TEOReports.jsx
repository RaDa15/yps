import {
  FileText,
  Download,
  Calendar,
  Filter,
  FileSpreadsheet,
  FileDown,
  BarChart3,
} from "lucide-react";

// ======================================================
// REPORT TYPES
// ======================================================

const reportTypes = [
  {
    title: "Monthly Jurisdiction Report",
    description:
      "Youth, programmes, volunteers and service summary",
    icon: Calendar,
  },
  {
    title: "Programme Completion Report",
    description:
      "Programme participation and completion analysis",
    icon: BarChart3,
  },
  {
    title: "Volunteer Contribution Report",
    description:
      "Volunteer activities and service hour summary",
    icon: FileText,
  },
];

// ======================================================
// CENTRE REPORT DATA
// ======================================================

const centreReports = [
  {
    centre: "Thimphu Youth Centre",
    youth: 4200,
    programmes: 24,
    volunteers: 420,
    status: "Submitted",
  },
  {
    centre: "Paro Youth Centre",
    youth: 3150,
    programmes: 18,
    volunteers: 315,
    status: "Submitted",
  },
  {
    centre: "Chukha Youth Centre",
    youth: 2700,
    programmes: 15,
    volunteers: 260,
    status: "Pending",
  },
];

// ======================================================
// COMPONENT
// ======================================================

export default function TEOReports() {
  return (
    <div className="space-y-6">
      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <FileText className="w-4 h-4" />

            <span>Reporting & Data Management</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Reports & Export
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Generate jurisdiction reports and export data for higher
            authorities
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Download className="w-4 h-4" />
          Export-ready reporting
        </div>
      </div>

      {/* ==================================================
          FILTER PANEL
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            "
          >
            <Filter className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Report Filters
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Select the reporting period and scope
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Period */}

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2">
              Reporting Period
            </label>

            <select
              defaultValue="August 2026"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                text-gray-700
                bg-white
                outline-none
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            >
              <option>August 2026</option>
              <option>July 2026</option>
              <option>June 2026</option>
              <option>May 2026</option>
              <option>Q2 2026</option>
              <option>Q1 2026</option>
              <option>Annual 2026</option>
            </select>
          </div>

          {/* Report Scope */}

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2">
              Report Scope
            </label>

            <select
              defaultValue="All Centres"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                text-gray-700
                bg-white
                outline-none
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            >
              <option>All Centres</option>
              <option>Thimphu Youth Centre</option>
              <option>Paro Youth Centre</option>
              <option>Chukha Youth Centre</option>
            </select>
          </div>

          {/* Report Category */}

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2">
              Report Category
            </label>

            <select
              defaultValue="All Categories"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                text-gray-700
                bg-white
                outline-none
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            >
              <option>All Categories</option>
              <option>Youth</option>
              <option>Programmes</option>
              <option>Volunteers</option>
              <option>Services</option>
            </select>
          </div>

          {/* Generate */}

          <div className="flex items-end">
            <button
              type="button"
              onClick={() =>
                window.alert(
                  "Report generation will be connected to the backend."
                )
              }
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
                px-4
                py-3
                font-bold
                text-sm
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <FileText className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================
          REPORT CARDS
      ================================================== */}

      <div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Available Reports
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Generate reports based on the selected reporting scope
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reportTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-6
                  hover:shadow-md
                  transition
                "
              >
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
                    mb-5
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      `${item.title} generation will be connected to the backend.`
                    )
                  }
                  className="
                    mt-5
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-2.5
                    rounded-xl
                    text-sm
                    font-bold
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition
                  "
                >
                  <FileText className="w-4 h-4" />
                  Generate
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================
          EXPORT OPTIONS
      ================================================== */}

      <div
        className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          rounded-2xl
          p-6
          text-white
        "
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h2 className="font-bold text-lg">
              Export Reports
            </h2>

            <p className="text-sm text-blue-100 mt-1">
              Download jurisdiction data in a format suitable for
              official reporting and analysis.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* PDF */}

            <button
              type="button"
              onClick={() =>
                window.alert("PDF export will be connected to the backend.")
              }
              className="
                bg-white
                text-blue-700
                px-5
                py-3
                rounded-xl
                font-bold
                text-sm
                flex
                items-center
                gap-2
                hover:bg-gray-50
                transition
              "
            >
              <FileDown className="w-4 h-4" />
              Export PDF
            </button>

            {/* Excel */}

            <button
              type="button"
              onClick={() =>
                window.alert(
                  "Excel export will be connected to the backend."
                )
              }
              className="
                bg-white
                text-blue-700
                px-5
                py-3
                rounded-xl
                font-bold
                text-sm
                flex
                items-center
                gap-2
                hover:bg-gray-50
                transition
              "
            >
              <FileSpreadsheet className="w-4 h-4" />
              Export Excel
            </button>

            {/* CSV */}

            <button
              type="button"
              onClick={() =>
                window.alert("CSV export will be connected to the backend.")
              }
              className="
                bg-white
                text-blue-700
                px-5
                py-3
                rounded-xl
                font-bold
                text-sm
                flex
                items-center
                gap-2
                hover:bg-gray-50
                transition
              "
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================
          CENTRE REPORT STATUS
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-indigo-50
              text-indigo-600
              flex
              items-center
              justify-center
            "
          >
            <BarChart3 className="w-5 h-5" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Centre Report Submission Status
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Monitor reporting compliance across Youth Centres
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400">
                <th className="text-left pb-4 font-medium">
                  Youth Centre
                </th>

                <th className="text-center pb-4 font-medium">
                  Registered Youth
                </th>

                <th className="text-center pb-4 font-medium">
                  Programmes
                </th>

                <th className="text-center pb-4 font-medium">
                  Volunteers
                </th>

                <th className="text-right pb-4 font-medium">
                  Report Status
                </th>
              </tr>
            </thead>

            <tbody>
              {centreReports.map((item) => (
                <tr
                  key={item.centre}
                  className="
                    border-b
                    border-gray-100
                    last:border-none
                    hover:bg-gray-50
                    transition
                  "
                >
                  <td className="py-4">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.centre}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        Jurisdiction report
                      </p>
                    </div>
                  </td>

                  <td className="text-center font-medium">
                    {item.youth.toLocaleString()}
                  </td>

                  <td className="text-center">
                    {item.programmes}
                  </td>

                  <td className="text-center">
                    {item.volunteers.toLocaleString()}
                  </td>

                  <td className="text-right">
                    <span
                      className={`
                        inline-flex
                        items-center
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        ${
                          item.status === "Submitted"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }
                      `}
                    >
                      <span
                        className={`
                          w-1.5
                          h-1.5
                          rounded-full
                          mr-2
                          ${
                            item.status === "Submitted"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }
                        `}
                      />

                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================================================
          REPORTING SUMMARY
      ================================================== */}

      <div
        className="
          bg-gray-50
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              text-blue-600
              flex
              items-center
              justify-center
              shadow-sm
              flex-shrink-0
            "
          >
            <FileText className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Reporting Overview
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Two of the monitored Youth Centres have submitted their
              reports for the current reporting period. Chukha Youth
              Centre still has a pending report and may require
              follow-up before the jurisdiction report is finalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}