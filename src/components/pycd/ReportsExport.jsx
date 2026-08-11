import {
  FileText,
  Download,
  Calendar,
  Filter,
  FileSpreadsheet,
  FileDown,
  Clock,
  Send,
  BarChart3,
} from "lucide-react";

const REPORTS = [
  {
    name: "National Youth Development Report",
    type: "Annual",
    generated: "2026",
    owner: "PYCD",
    status: "Ready",
  },
  {
    name: "Youth Centre Performance Report",
    type: "Quarterly",
    generated: "Q2 2026",
    owner: "PYCD",
    status: "Ready",
  },
  {
    name: "Volunteer Contribution Report",
    type: "Monthly",
    generated: "July 2026",
    owner: "PYCD",
    status: "Ready",
  },
  {
    name: "Programme Impact Assessment",
    type: "Quarterly",
    generated: "Q2 2026",
    owner: "PYCD",
    status: "Review",
  },
];

const ReportsExport = () => {
  return (
    <div className="space-y-6">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div>
        <h2 className="text-xl font-bold text-gray-900">
          National Reports & Export Centre
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Generate executive reports and export national youth development
          insights
        </p>
      </div>

      {/* =========================================================
          REPORT SUMMARY
      ========================================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Generated Reports */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="p-2.5 w-fit rounded-xl bg-blue-50">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Generated Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            156
          </h2>

        </div>

        {/* Scheduled Reports */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="p-2.5 w-fit rounded-xl bg-purple-50">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Scheduled Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            24
          </h2>

        </div>

        {/* Distributed Reports */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="p-2.5 w-fit rounded-xl bg-green-50">
            <Send className="w-5 h-5 text-green-600" />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Distributed Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            89
          </h2>

        </div>

        {/* Executive Reports */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="p-2.5 w-fit rounded-xl bg-orange-50">
            <BarChart3 className="w-5 h-5 text-orange-600" />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Executive Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            18
          </h2>

        </div>

      </div>

      {/* =========================================================
          CUSTOM REPORT FILTERS
      ========================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-xl bg-blue-50">
            <Filter className="w-5 h-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Custom Report Filters
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Select criteria to generate a customised national report
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Dzongkhag */}
          <select
            className="
              border
              border-gray-200
              rounded-xl
              p-3
              text-sm
              text-gray-700
              bg-white
              outline-none
              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-500
            "
            defaultValue="all"
          >
            <option value="all">
              All Dzongkhag
            </option>

            <option value="thimphu">
              Thimphu
            </option>

            <option value="paro">
              Paro
            </option>

            <option value="sarpang">
              Sarpang
            </option>
          </select>

          {/* Youth Centre */}
          <select
            className="
              border
              border-gray-200
              rounded-xl
              p-3
              text-sm
              text-gray-700
              bg-white
              outline-none
              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-500
            "
            defaultValue="all"
          >
            <option value="all">
              All Youth Centres
            </option>

            <option>
              Thimphu Youth Centre
            </option>

            <option>
              Paro Youth Centre
            </option>

            <option>
              Chukha Youth Centre
            </option>

            <option>
              Sarpang Youth Centre
            </option>
          </select>

          {/* Programme Type */}
          <select
            className="
              border
              border-gray-200
              rounded-xl
              p-3
              text-sm
              text-gray-700
              bg-white
              outline-none
              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-500
            "
            defaultValue="all"
          >
            <option value="all">
              Programme Type
            </option>

            <option>
              Volunteer
            </option>

            <option>
              Training
            </option>

            <option>
              Education
            </option>
          </select>

          {/* Demographic */}
          <select
            className="
              border
              border-gray-200
              rounded-xl
              p-3
              text-sm
              text-gray-700
              bg-white
              outline-none
              focus:ring-2
              focus:ring-blue-100
              focus:border-blue-500
            "
            defaultValue="all"
          >
            <option value="all">
              Demographic
            </option>

            <option>
              Age
            </option>

            <option>
              Gender
            </option>

            <option>
              Education
            </option>
          </select>

          {/* Generate */}
          <button
            type="button"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              rounded-xl
              font-bold
              text-sm
              px-4
              py-3
              transition-colors
            "
          >
            Generate Report
          </button>

        </div>

      </div>

      {/* =========================================================
          AVAILABLE REPORTS
      ========================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-5">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-green-50">
              <FileText className="w-5 h-5 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Available Reports
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Download or export generated national reports
              </p>
            </div>

          </div>

          <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
            {REPORTS.length} Reports
          </span>

        </div>

        <div className="space-y-3">

          {REPORTS.map((report) => (
            <div
              key={report.name}
              className="
                border
                border-gray-100
                rounded-xl
                p-4
                hover:bg-gray-50
                transition-colors
              "
            >

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_160px_250px] items-center gap-4">

                {/* Report Information */}
                <div className="flex items-start gap-3 min-w-0">

                  <div className="p-2.5 rounded-xl bg-gray-100 shrink-0">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-semibold text-gray-900 truncate">
                      {report.name}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {report.type} • {report.generated}
                    </p>

                  </div>

                </div>

                {/* Owner & Status */}
                <div className="flex items-center gap-3">

                  <div>
                    <p className="text-xs text-gray-400">
                      Owner
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      {report.owner}
                    </p>
                  </div>

                  <span
                    className={`
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-bold
                      ${
                        report.status === "Ready"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }
                    `}
                  >
                    {report.status}
                  </span>

                </div>

                {/* Export Actions */}
                <div className="flex flex-wrap lg:justify-end gap-2">

                  {/* PDF */}
                  <button
                    type="button"
                    disabled={report.status !== "Ready"}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      px-3
                      py-2
                      bg-red-50
                      text-red-600
                      rounded-lg
                      text-xs
                      font-bold
                      hover:bg-red-100
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      transition-colors
                    "
                  >
                    <FileDown size={14} />
                    PDF
                  </button>

                  {/* Excel */}
                  <button
                    type="button"
                    disabled={report.status !== "Ready"}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      px-3
                      py-2
                      bg-green-50
                      text-green-700
                      rounded-lg
                      text-xs
                      font-bold
                      hover:bg-green-100
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      transition-colors
                    "
                  >
                    <FileSpreadsheet size={14} />
                    Excel
                  </button>

                  {/* CSV */}
                  <button
                    type="button"
                    disabled={report.status !== "Ready"}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      px-3
                      py-2
                      bg-blue-50
                      text-blue-700
                      rounded-lg
                      text-xs
                      font-bold
                      hover:bg-blue-100
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      transition-colors
                    "
                  >
                    <Download size={14} />
                    CSV
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* =========================================================
          AUTOMATED REPORT SCHEDULING
      ========================================================= */}

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6">

        <div className="flex items-center gap-3">

          <div className="p-2.5 rounded-xl bg-white">
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Automated Report Scheduling
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Automatically prepare and distribute recurring reports
            </p>
          </div>

        </div>

        <p className="text-sm text-gray-600 mt-4 max-w-3xl">
          Schedule monthly, quarterly and annual reports to be automatically
          generated and distributed to Ministry stakeholders.
        </p>

        <button
          type="button"
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            rounded-xl
            text-sm
            font-bold
            transition-colors
          "
        >
          <Calendar className="w-4 h-4" />
          Create Schedule
        </button>

      </div>

    </div>
  );
};

export default ReportsExport;