import { useMemo, useState } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  FileCheck,
  AlertTriangle,
  Award,
  Search,
  Filter,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock3,
  XCircle,
  MapPin,
} from "lucide-react";

const centres = [
  {
    name: "Thimphu Youth Centre",
    dzongkhag: "Thimphu",
    region: "Western",
    youth: 1850,
    programmes: 42,
    volunteers: 320,
    participation: 92,
    score: 95,
    reporting: 98,
    trend: 8,
  },
  {
    name: "Paro Youth Centre",
    dzongkhag: "Paro",
    region: "Western",
    youth: 1420,
    programmes: 35,
    volunteers: 260,
    participation: 88,
    score: 91,
    reporting: 95,
    trend: 5,
  },
  {
    name: "Samtse Youth Centre",
    dzongkhag: "Samtse",
    region: "Southern",
    youth: 980,
    programmes: 21,
    volunteers: 140,
    participation: 65,
    score: 72,
    reporting: 76,
    trend: -4,
  },
  {
    name: "Punakha Youth Centre",
    dzongkhag: "Punakha",
    region: "Western",
    youth: 890,
    programmes: 28,
    volunteers: 175,
    participation: 84,
    score: 87,
    reporting: 92,
    trend: 6,
  },
  {
    name: "Wangdue Phodrang Youth Centre",
    dzongkhag: "Wangdue Phodrang",
    region: "Western",
    youth: 760,
    programmes: 24,
    volunteers: 150,
    participation: 81,
    score: 84,
    reporting: 90,
    trend: 3,
  },
  {
    name: "Chhukha Youth Centre",
    dzongkhag: "Chhukha",
    region: "Southern",
    youth: 840,
    programmes: 26,
    volunteers: 180,
    participation: 79,
    score: 82,
    reporting: 88,
    trend: 2,
  },
];

const getPerformance = (score) => {
  if (score >= 90) {
    return {
      label: "Excellent",
      className: "bg-emerald-50 text-emerald-700 border-emerald-100",
      icon: CheckCircle2,
    };
  }

  if (score >= 80) {
    return {
      label: "Good",
      className: "bg-blue-50 text-blue-700 border-blue-100",
      icon: CheckCircle2,
    };
  }

  if (score >= 70) {
    return {
      label: "Needs Attention",
      className: "bg-orange-50 text-orange-700 border-orange-100",
      icon: Clock3,
    };
  }

  return {
    label: "Critical",
    className: "bg-red-50 text-red-700 border-red-100",
    icon: XCircle,
  };
};

const YouthCentrePerformance = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");

  const filteredCentres = useMemo(() => {
    return centres
      .filter((centre) => {
        const matchesSearch =
          centre.name.toLowerCase().includes(search.toLowerCase()) ||
          centre.dzongkhag.toLowerCase().includes(search.toLowerCase());

        const matchesRegion =
          region === "All Regions" || centre.region === region;

        return matchesSearch && matchesRegion;
      })
      .sort((a, b) => b.score - a.score);
  }, [search, region]);

  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Youth Centre Performance
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Comparative national performance monitoring of Youth Centres
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>National Coverage</span>
          <span className="font-bold text-gray-900">13 Centres</span>
        </div>

      </div>


      {/* =====================================================
          KPI SUMMARY
      ====================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Centres */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              100%
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Youth Centres
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            13
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Operational nationwide
          </p>

        </div>


        {/* Youth */}
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
            Youth Coverage
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            24,540
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Registered youth
          </p>

        </div>


        {/* Score */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +4.2%
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Average Score
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            84%
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Centre performance index
          </p>

        </div>


        {/* Reporting */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>

            <span className="text-xs font-semibold text-orange-600">
              3 Delayed
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Reporting Compliance
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-1">
            92%
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Quarterly submissions
          </p>

        </div>

      </div>


      {/* =====================================================
          FILTER BAR
      ====================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <div className="flex flex-col lg:flex-row lg:items-center gap-3">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Youth Centre or Dzongkhag..."
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
                focus:ring-2
                focus:ring-blue-100
                focus:border-blue-400
              "
            />

          </div>


          {/* Region */}
          <div className="relative">

            <Filter className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
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
                focus:ring-2
                focus:ring-blue-100
              "
            >
              <option>All Regions</option>
              <option>Western</option>
              <option>Central</option>
              <option>Southern</option>
              <option>Eastern</option>
            </select>

            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

          </div>

        </div>

      </div>


      {/* =====================================================
          PERFORMANCE TABLE
      ====================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <div>
              <h2 className="font-bold text-gray-900">
                Youth Centre Comparison
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Ranked by overall centre performance score
              </p>
            </div>

            <span className="text-xs text-gray-500">
              Showing {filteredCentres.length} centres
            </span>

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 border-b border-gray-100">

              <tr className="text-gray-500 text-xs uppercase tracking-wide">

                <th className="text-left px-6 py-4">
                  Centre
                </th>

                <th className="text-left px-4 py-4">
                  Youth
                </th>

                <th className="text-left px-4 py-4">
                  Programmes
                </th>

                <th className="text-left px-4 py-4">
                  Participation
                </th>

                <th className="text-left px-4 py-4">
                  Reporting
                </th>

                <th className="text-left px-4 py-4">
                  Performance
                </th>

                <th className="text-left px-6 py-4">
                  Status
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">

              {filteredCentres.map((centre, index) => {

                const performance = getPerformance(centre.score);
                const StatusIcon = performance.icon;

                return (

                  <tr
                    key={centre.name}
                    className="hover:bg-gray-50 transition"
                  >

                    {/* Centre */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="
                          w-9
                          h-9
                          rounded-xl
                          bg-blue-50
                          text-blue-600
                          flex
                          items-center
                          justify-center
                          text-xs
                          font-bold
                        ">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {centre.name}
                          </p>

                          <p className="text-xs text-gray-400 mt-0.5">
                            {centre.dzongkhag} · {centre.region}
                          </p>

                        </div>

                      </div>

                    </td>


                    {/* Youth */}
                    <td className="px-4 py-5 font-medium text-gray-700">
                      {centre.youth.toLocaleString()}
                    </td>


                    {/* Programmes */}
                    <td className="px-4 py-5 text-gray-600">
                      {centre.programmes}
                    </td>


                    {/* Participation */}
                    <td className="px-4 py-5 min-w-[150px]">

                      <div className="flex items-center gap-3">

                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">

                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{
                              width: `${centre.participation}%`,
                            }}
                          />

                        </div>

                        <span className="text-xs font-semibold text-gray-700 w-9">
                          {centre.participation}%
                        </span>

                      </div>

                    </td>


                    {/* Reporting */}
                    <td className="px-4 py-5">

                      <span className="font-semibold text-gray-700">
                        {centre.reporting}%
                      </span>

                    </td>


                    {/* Score */}
                    <td className="px-4 py-5">

                      <div className="flex items-center gap-2">

                        <span className="font-bold text-gray-900">
                          {centre.score}%
                        </span>

                        {centre.trend >= 0 ? (
                          <span className="text-emerald-600 flex items-center text-xs">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                            {centre.trend}%
                          </span>
                        ) : (
                          <span className="text-red-600 flex items-center text-xs">
                            <ArrowDownRight className="w-3.5 h-3.5" />
                            {Math.abs(centre.trend)}%
                          </span>
                        )}

                      </div>

                    </td>


                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
                          px-2.5
                          py-1.5
                          rounded-lg
                          border
                          text-xs
                          font-semibold
                          ${performance.className}
                        `}
                      >

                        <StatusIcon className="w-3.5 h-3.5" />

                        {performance.label}

                      </span>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>


        {filteredCentres.length === 0 && (

          <div className="py-12 text-center">

            <Building2 className="w-8 h-8 mx-auto text-gray-300" />

            <p className="mt-3 text-sm font-semibold text-gray-600">
              No Youth Centres found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your search or region filter.
            </p>

          </div>

        )}

      </div>


      {/* =====================================================
          REGIONAL PERFORMANCE
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Regional */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="font-bold text-gray-900">
                TEO / DEO Performance
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Regional performance comparison
              </p>

            </div>

            <TrendingUp className="w-5 h-5 text-blue-600" />

          </div>


          <div className="space-y-5">

            {[
              ["Western Region", 88],
              ["Central Region", 82],
              ["Southern Region", 74],
              ["Eastern Region", 79],
            ].map(([name, value]) => (

              <div key={name}>

                <div className="flex items-center justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {name}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {value}%
                  </span>

                </div>

                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${value}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Attention */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">

              <AlertTriangle className="w-5 h-5" />

            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Attention Required
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Issues requiring national follow-up
              </p>

            </div>

          </div>


          <div className="space-y-3">

            <div className="flex gap-3 p-3 rounded-xl bg-orange-50">

              <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Samtse Youth Centre
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Participation rate below national benchmark.
                </p>

              </div>

            </div>


            <div className="flex gap-3 p-3 rounded-xl bg-red-50">

              <Clock3 className="w-4 h-4 text-red-600 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Reporting Delays
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  3 Youth Centres have delayed quarterly reports.
                </p>

              </div>

            </div>


            <div className="flex gap-3 p-3 rounded-xl bg-blue-50">

              <Users className="w-4 h-4 text-blue-600 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Volunteer Engagement
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Declining engagement detected in selected regions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default YouthCentrePerformance;