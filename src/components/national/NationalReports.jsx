import {
  FileText,
  Download,
  CalendarDays,
  Users,
  Activity,
  Clock,
  BarChart3,
  Eye,
} from "lucide-react";

const REPORTS = [
  {
    title: "Monthly Network Activity Report",
    period: "July 2026",
    type: "Monthly",
    description:
      "Consolidated Y-PEER volunteer activities, participation and contribution hours.",
    status: "Ready",
  },
  {
    title: "Quarterly Volunteer Performance Report",
    period: "Q2 2026",
    type: "Quarterly",
    description:
      "Network-level volunteer participation, retention and performance comparison.",
    status: "Ready",
  },
  {
    title: "Annual Y-PEER Network Report",
    period: "2025–2026",
    type: "Annual",
    description:
      "Annual overview of Y-PEER networks, volunteers, activities and achievements.",
    status: "Ready",
  },
  {
    title: "Volunteer Impact Assessment",
    period: "2026",
    type: "Impact",
    description:
      "Summary of volunteer contribution, service hours and youth engagement outcomes.",
    status: "Ready",
  },
];

const NationalReports = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <FileText size={16} />
            National Reporting
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Reports & Documentation
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Generate and export consolidated Y-PEER network reports.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            bg-blue-600
            text-white
            text-sm
            font-semibold
            hover:bg-blue-700
            transition
          "
        >
          <Download size={16} />
          Export Report
        </button>

      </div>


      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <FileText size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Reports Generated
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            48
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            This reporting year
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
            <Users size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Volunteers Covered
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            1,126
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Across all networks
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Activity size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Activities Reported
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            148
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Nationally consolidated
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Clock size={20} />
          </div>

          <p className="text-xs text-gray-500">
            Volunteer Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1">
            7,420
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Verified contribution hours
          </p>

        </div>

      </div>


      {/* REPORT GENERATOR */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-start gap-3 mb-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <BarChart3 size={20} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Generate Consolidated Report
            </h2>

            <p className="text-sm text-gray-500">
              Select a reporting period and report type.
            </p>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Report Type
            </label>

            <select
              className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-700
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>Network Activity Report</option>
              <option>Volunteer Performance Report</option>
              <option>Impact Assessment Report</option>
              <option>Annual Network Report</option>
            </select>
          </div>


          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              From
            </label>

            <div className="relative">

              <CalendarDays
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="date"
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>
          </div>


          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              To
            </label>

            <div className="relative">

              <CalendarDays
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="date"
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>
          </div>

        </div>


        <div className="flex justify-end mt-5">

          <button
            className="
              flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            <FileText size={16} />
            Generate Report
          </button>

        </div>

      </div>


      {/* AVAILABLE REPORTS */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100">

          <h2 className="text-lg font-bold text-gray-900">
            Available Reports
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Previously generated national network reports.
          </p>

        </div>


        <div className="divide-y divide-gray-100">

          {REPORTS.map((report) => (

            <div
              key={report.title}
              className="
                p-5
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-4
                hover:bg-gray-50
                transition
              "
            >

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FileText size={19} />
                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="font-semibold text-gray-900">
                      {report.title}
                    </h3>

                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      {report.status}
                    </span>

                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    {report.period} • {report.type}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {report.description}
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-2 lg:flex-shrink-0">

                <button
                  className="
                    px-3
                    py-2
                    rounded-lg
                    border
                    border-gray-200
                    text-gray-600
                    hover:bg-gray-100
                    transition
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                  "
                >
                  <Eye size={14} />
                  View
                </button>

                <button
                  className="
                    px-3
                    py-2
                    rounded-lg
                    bg-blue-50
                    text-blue-700
                    hover:bg-blue-100
                    transition
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                  "
                >
                  <Download size={14} />
                  Download
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* DOCUMENTATION NOTICE */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <FileText size={20} />
          </div>

          <div>

            <h3 className="font-bold">
              National Reporting & Documentation
            </h3>

            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Reports generated here consolidate verified volunteer,
              activity and network data submitted through Y-PEER
              networks. Exported reports can be used for national
              coordination, programme review and impact assessment.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NationalReports;