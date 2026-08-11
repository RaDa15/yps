import DirectorStats from "./DirectorStats";

import {
  TrendingUp,
  ClipboardCheck,
  AlertTriangle,
  BarChart3,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Building2,
  CalendarCheck,
  Clock,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const DirectorHome = () => {
  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            National Overview
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Executive Dashboard
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            National youth development overview and strategic performance
            monitoring.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Data updated today
        </div>

      </div>


      {/* =====================================================
          KPI SUMMARY
      ====================================================== */}
      <DirectorStats />


      {/* =====================================================
          PERFORMANCE OVERVIEW
      ====================================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Youth Engagement */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Youth Engagement Trend
                </h2>

                <p className="text-xs text-gray-500 mt-0.5">
                  National participation performance
                </p>
              </div>

            </div>

            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" />
              18%
            </span>

          </div>


          {/* Main Metric */}
          <div className="mt-6">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-xs text-gray-500">
                  Participation Growth
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  +18%
                </h3>
              </div>

              <p className="text-xs text-gray-400">
                vs previous period
              </p>

            </div>


            {/* Progress */}
            <div className="mt-5">

              <div className="flex justify-between text-xs mb-2">

                <span className="text-gray-500">
                  Current performance
                </span>

                <span className="font-semibold text-gray-700">
                  82%
                </span>

              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: "82%" }}
                />

              </div>

            </div>

          </div>


          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Users className="w-4 h-4 text-gray-400" />

              <span className="text-xs text-gray-500">
                Youth participation
              </span>

            </div>

            <button
              type="button"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View Analytics
              <ChevronRight className="w-3 h-3" />
            </button>

          </div>

        </div>


        {/* Programme Effectiveness */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  Programme Effectiveness
                </h2>

                <p className="text-xs text-gray-500 mt-0.5">
                  National programme performance
                </p>

              </div>

            </div>

            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
              78%
            </span>

          </div>


          {/* Completion */}
          <div className="mt-6">

            <div className="flex items-end justify-between">

              <div>

                <p className="text-xs text-gray-500">
                  Programme Completion
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  78%
                </h3>

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-400">
                  Target
                </p>

                <p className="text-sm font-bold text-gray-700">
                  85%
                </p>

              </div>

            </div>


            <div className="mt-5">

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                <div
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: "78%" }}
                />

              </div>

            </div>

          </div>


          {/* Supporting Stats */}
          <div className="grid grid-cols-2 gap-3 mt-6">

            <div className="bg-gray-50 rounded-xl p-3">

              <div className="flex items-center gap-2">

                <CalendarCheck className="w-4 h-4 text-gray-400" />

                <span className="text-xs text-gray-500">
                  Active Programmes
                </span>

              </div>

              <p className="text-lg font-bold text-gray-900 mt-1">
                62
              </p>

            </div>


            <div className="bg-gray-50 rounded-xl p-3">

              <div className="flex items-center gap-2">

                <Building2 className="w-4 h-4 text-gray-400" />

                <span className="text-xs text-gray-500">
                  Participating Centres
                </span>

              </div>

              <p className="text-lg font-bold text-gray-900 mt-1">
                13
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          APPROVAL & COMPLIANCE
      ====================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Approval & Compliance Monitoring
              </h2>

              <p className="text-xs text-gray-500 mt-0.5">
                National workflow and reporting compliance
              </p>

            </div>

          </div>

          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            Requires attention
          </span>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Volunteer */}
          <div className="rounded-xl border border-gray-100 p-4">

            <div className="flex items-center justify-between">

              <p className="text-sm text-gray-500">
                Volunteer Approval
              </p>

              <Clock className="w-4 h-4 text-orange-500" />

            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              245
            </h3>

            <p className="text-xs text-orange-600 font-semibold mt-1">
              Pending review
            </p>

          </div>


          {/* Programme */}
          <div className="rounded-xl border border-gray-100 p-4">

            <div className="flex items-center justify-between">

              <p className="text-sm text-gray-500">
                Programme Approval
              </p>

              <ClipboardCheck className="w-4 h-4 text-blue-500" />

            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              35
            </h3>

            <p className="text-xs text-blue-600 font-semibold mt-1">
              Awaiting approval
            </p>

          </div>


          {/* Reports */}
          <div className="rounded-xl border border-red-100 bg-red-50/40 p-4">

            <div className="flex items-center justify-between">

              <p className="text-sm text-gray-500">
                Missing Reports
              </p>

              <AlertTriangle className="w-4 h-4 text-red-500" />

            </div>

            <h3 className="text-2xl font-bold text-red-600 mt-3">
              12
            </h3>

            <p className="text-xs text-red-600 font-semibold mt-1">
              Requires follow-up
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          REPORTS + STRATEGIC ATTENTION
      ====================================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* National Reports */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  National Reports
                </h2>

                <p className="text-xs text-gray-500 mt-0.5">
                  Executive reporting and performance insights
                </p>

              </div>

            </div>

            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              18 Reports
            </span>

          </div>


          <div className="space-y-3 mt-5">

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Monthly Performance Report
                </p>

                <p className="text-xs text-gray-400 mt-0.5">
                  July 2026
                </p>
              </div>

              <CheckCircle2 className="w-5 h-5 text-green-500" />

            </div>


            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Youth Development Report
                </p>

                <p className="text-xs text-gray-400 mt-0.5">
                  Q2 2026
                </p>
              </div>

              <CheckCircle2 className="w-5 h-5 text-green-500" />

            </div>

          </div>


          <button
            type="button"
            className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View all reports
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>


        {/* Strategic Attention */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  National Attention Required
                </h2>

                <p className="text-xs text-gray-500 mt-0.5">
                  Strategic issues requiring director-level attention
                </p>

              </div>

            </div>

            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
              3 Items
            </span>

          </div>


          <div className="space-y-3 mt-5">

            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/60 border border-orange-100">

              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Pending Youth Centre Reports
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  12 reports require follow-up.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 border border-red-100">

              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Increasing Out-of-School Youth Cases
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Trend requires closer monitoring.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">

              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Volunteer Approval Backlog
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  245 applications are awaiting review.
                </p>
              </div>

            </div>

          </div>


          <button
            type="button"
            className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            Review attention items
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};

export default DirectorHome;
