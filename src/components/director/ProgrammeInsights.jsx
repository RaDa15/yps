import { useMemo, useState } from "react";
import {
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  FileCheck,
  Search,
  Filter,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CalendarDays,
} from "lucide-react";

const programmes = [
  {
    name: "Youth Leadership Development",
    centre: "Thimphu Youth Centre",
    category: "Leadership",
    participants: 850,
    completion: 92,
    status: "Completed",
    reports: 100,
    trend: 8,
  },
  {
    name: "Digital Skills Training",
    centre: "Paro Youth Centre",
    category: "Skills Development",
    participants: 620,
    completion: 85,
    status: "Completed",
    reports: 96,
    trend: 5,
  },
  {
    name: "Entrepreneurship Programme",
    centre: "Samtse Youth Centre",
    category: "Employment",
    participants: 410,
    completion: 68,
    status: "Needs Review",
    reports: 74,
    trend: -6,
  },
  {
    name: "Community Service Initiative",
    centre: "Punakha Youth Centre",
    category: "Community Service",
    participants: 540,
    completion: 81,
    status: "Ongoing",
    reports: 90,
    trend: 4,
  },
  {
    name: "Youth Health & Wellbeing",
    centre: "Wangdue Phodrang Youth Centre",
    category: "Health & Wellbeing",
    participants: 380,
    completion: 76,
    status: "Ongoing",
    reports: 86,
    trend: 2,
  },
  {
    name: "Green Skills Programme",
    centre: "Chhukha Youth Centre",
    category: "Skills Development",
    participants: 290,
    completion: 72,
    status: "Ongoing",
    reports: 82,
    trend: -2,
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";

    case "Ongoing":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "Needs Review":
      return "bg-orange-50 text-orange-700 border-orange-100";

    default:
      return "bg-gray-50 text-gray-600 border-gray-100";
  }
};

const ProgrammeInsights = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredProgrammes = useMemo(() => {
    return programmes.filter((programme) => {
      const searchMatch =
        programme.name.toLowerCase().includes(search.toLowerCase()) ||
        programme.centre.toLowerCase().includes(search.toLowerCase()) ||
        programme.category.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All Status" ||
        programme.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Programme Insights
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                National programme performance, participation and completion monitoring
              </p>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">

          <CalendarDays className="w-4 h-4 text-blue-600" />

          <span className="text-xs text-gray-500">
            Reporting Period
          </span>

          <span className="text-xs font-bold text-gray-900">
            Current Period
          </span>

        </div>

      </div>


      {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Active Programmes */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +12%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Active Programmes
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            18
          </p>

          <p className="text-xs text-gray-400 mt-1">
            National initiatives
          </p>

        </div>


        {/* Participants */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-emerald-600">
              +8.4%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Programme Participants
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            8,420
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Youth enrolled
          </p>

        </div>


        {/* Completion */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +4.6%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Completion Rate
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            82%
          </p>

          <p className="text-xs text-gray-400 mt-1">
            National average
          </p>

        </div>


        {/* Reporting */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-orange-600">
              3 Pending
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Report Compliance
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            92%
          </p>

          <p className="text-xs text-gray-400 mt-1">
            National submissions
          </p>

        </div>

      </div>


      {/* =====================================================
          QUICK INSIGHTS
      ====================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-white text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>

            <div>

              <p className="text-xs text-emerald-700">
                Strong Performance
              </p>

              <p className="text-sm font-bold text-gray-900 mt-0.5">
                12 programmes
              </p>

            </div>

          </div>

          <p className="text-xs text-gray-600 mt-3">
            Programmes are currently meeting or exceeding their performance targets.
          </p>

        </div>


        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>

            <div>

              <p className="text-xs text-blue-700">
                Ongoing
              </p>

              <p className="text-sm font-bold text-gray-900 mt-0.5">
                4 programmes
              </p>

            </div>

          </div>

          <p className="text-xs text-gray-600 mt-3">
            These programmes are currently active and under implementation.
          </p>

        </div>


        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-white text-orange-600 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>

            <div>

              <p className="text-xs text-orange-700">
                Needs Review
              </p>

              <p className="text-sm font-bold text-gray-900 mt-0.5">
                2 programmes
              </p>

            </div>

          </div>

          <p className="text-xs text-gray-600 mt-3">
            Programmes with lower completion or participation performance.
          </p>

        </div>

      </div>


      {/* =====================================================
          FILTER BAR
      ====================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <div className="flex flex-col lg:flex-row gap-3">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programme, centre or category..."
              className="
                w-full
                pl-9
                pr-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                text-sm
                outline-none
                focus:bg-white
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>


          {/* Status */}
          <div className="relative">

            <Filter className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                appearance-none
                pl-9
                pr-10
                py-2.5
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                text-sm
                outline-none
                cursor-pointer
              "
            >

              <option>All Status</option>
              <option>Completed</option>
              <option>Ongoing</option>
              <option>Needs Review</option>

            </select>

            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

          </div>

        </div>

      </div>


      {/* =====================================================
          PROGRAMME PERFORMANCE TABLE
      ====================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="font-bold text-gray-900">
                Programme Performance
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                National programme implementation and completion status
              </p>

            </div>

            <span className="text-xs text-gray-500">
              {filteredProgrammes.length} programmes
            </span>

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 border-b border-gray-100">

              <tr className="text-xs uppercase tracking-wide text-gray-500">

                <th className="text-left px-6 py-4">
                  Programme
                </th>

                <th className="text-left px-4 py-4">
                  Centre
                </th>

                <th className="text-left px-4 py-4">
                  Participants
                </th>

                <th className="text-left px-4 py-4">
                  Completion
                </th>

                <th className="text-left px-4 py-4">
                  Reports
                </th>

                <th className="text-left px-4 py-4">
                  Trend
                </th>

                <th className="text-left px-6 py-4">
                  Status
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">

              {filteredProgrammes.map((programme) => (

                <tr
                  key={programme.name}
                  className="hover:bg-gray-50 transition"
                >

                  {/* Programme */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <BookOpen className="w-4 h-4" />
                      </div>

                      <div>

                        <p className="font-semibold text-gray-900">
                          {programme.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          {programme.category}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Centre */}
                  <td className="px-4 py-5 text-gray-600">
                    {programme.centre}
                  </td>


                  {/* Participants */}
                  <td className="px-4 py-5">

                    <div className="flex items-center gap-2">

                      <Users className="w-4 h-4 text-gray-400" />

                      <span className="font-semibold text-gray-700">
                        {programme.participants.toLocaleString()}
                      </span>

                    </div>

                  </td>


                  {/* Completion */}
                  <td className="px-4 py-5 min-w-[170px]">

                    <div className="flex items-center gap-3">

                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">

                        <div
                          className={`h-full rounded-full ${
                            programme.completion >= 85
                              ? "bg-emerald-500"
                              : programme.completion >= 75
                              ? "bg-blue-500"
                              : "bg-orange-500"
                          }`}
                          style={{
                            width: `${programme.completion}%`,
                          }}
                        />

                      </div>

                      <span className="text-xs font-bold text-gray-700 w-9">
                        {programme.completion}%
                      </span>

                    </div>

                  </td>


                  {/* Reports */}
                  <td className="px-4 py-5">

                    <span className="font-semibold text-gray-700">
                      {programme.reports}%
                    </span>

                  </td>


                  {/* Trend */}
                  <td className="px-4 py-5">

                    {programme.trend >= 0 ? (

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">

                        <ArrowUpRight className="w-3.5 h-3.5" />

                        +{programme.trend}%

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">

                        <ArrowDownRight className="w-3.5 h-3.5" />

                        {programme.trend}%

                      </span>

                    )}

                  </td>


                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`
                        inline-flex
                        px-2.5
                        py-1.5
                        rounded-lg
                        border
                        text-xs
                        font-semibold
                        ${getStatusStyle(programme.status)}
                      `}
                    >
                      {programme.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {filteredProgrammes.length === 0 && (

          <div className="py-12 text-center">

            <BookOpen className="w-8 h-8 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No programmes found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your search or status filter.
            </p>

          </div>

        )}

      </div>


      {/* =====================================================
          EFFECTIVENESS + APPROVALS
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Programme Effectiveness */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="font-bold text-gray-900">
                Programme Effectiveness
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Performance by programme category
              </p>

            </div>

            <Award className="w-5 h-5 text-purple-600" />

          </div>


          <div className="space-y-5">

            {[
              ["Leadership", 91],
              ["Skills Development", 86],
              ["Community Service", 82],
              ["Employment", 74],
              ["Health & Wellbeing", 79],
            ].map(([category, value]) => (

              <div key={category}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {category}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {value}%
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-purple-600 rounded-full"
                    style={{
                      width: `${value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Approval Monitoring */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">

              <Clock className="w-5 h-5" />

            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Approval Monitoring
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Programme approvals requiring attention
              </p>

            </div>

          </div>


          <div className="space-y-3">

            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50">

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Pending Approval
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Awaiting authorised review
                </p>

              </div>

              <span className="text-xl font-bold text-orange-600">
                7
              </span>

            </div>


            <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50">

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Approved
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Approved this reporting period
                </p>

              </div>

              <span className="text-xl font-bold text-emerald-600">
                24
              </span>

            </div>


            <div className="flex items-center justify-between p-4 rounded-xl bg-red-50">

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Returned
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Requires programme revision
                </p>

              </div>

              <span className="text-xl font-bold text-red-600">
                3
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          REPORT SUBMISSION NOTICE
      ====================================================== */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

        <div className="flex items-start gap-3">

          <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center flex-shrink-0">

            <FileCheck className="w-5 h-5" />

          </div>

          <div>

            <h3 className="text-sm font-bold text-blue-900">
              Programme Reporting Compliance
            </h3>

            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
              Youth Centres are required to submit programme reports regularly.
              Current national submission compliance is <strong>92%</strong>.
              Three centres currently require follow-up for delayed submissions.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProgrammeInsights;