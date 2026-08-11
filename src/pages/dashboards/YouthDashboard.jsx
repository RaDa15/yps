import {
  Clock3,
  Award,
  Trophy,
  CalendarDays,
  Compass,
  History,
  Medal,
  ArrowRight,
  TrendingUp,
  BookOpen,
  GraduationCap,
  User,
  Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const YouthDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      {/* =========================
          HEADER
      ========================= */}

      <div>
        <p className="text-sm font-medium text-blue-600">
          Youth Volunteer Portal
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Welcome back, Tshering 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track your volunteer activities, achievements and contribution.
        </p>
      </div>


      {/* =========================
          STAT CARDS
      ========================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Volunteer Hours */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Clock3 size={20} />
            </div>

            <TrendingUp
              size={17}
              className="text-green-500"
            />

          </div>

          <p className="mt-4 text-xs text-gray-500">
            Volunteer Hours
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            128
          </h2>

          <p className="mt-1 text-xs text-green-600">
            +18 hours this month
          </p>
        </div>


        {/* Milestones */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <Trophy size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Milestones
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            7
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            2 more to next level
          </p>

        </div>


        {/* Certificates */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Award size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Certificates
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            4
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Available to download
          </p>

        </div>


        {/* Ranking */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
            <Medal size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Network Ranking
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            #12
          </h2>

          <p className="mt-1 text-xs text-green-600">
            Top 15%
          </p>

        </div>

      </div>


      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <section>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500">
            Access your most frequently used volunteer services.
          </p>
        </div>


        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

          {/* Discover */}
          <button
            onClick={() => navigate("/dashboard/discover")}
            className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Compass size={20} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />

            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Discover Activities
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Find and register for upcoming volunteer activities.
            </p>

          </button>


          {/* History */}
          <button
            onClick={() => navigate("/dashboard/history")}
            className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <History size={20} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-violet-600"
              />

            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Activity History
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Review your participation and service hours.
            </p>

          </button>


          {/* Certificates */}
          <button
            onClick={() => navigate("/dashboard/certificates")}
            className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Award size={20} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-amber-600"
              />

            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Certificates
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Generate and download your volunteer certificates.
            </p>

          </button>


          {/* Leaderboard */}
          <button
            onClick={() => navigate("/dashboard/leaderboard")}
            className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Medal size={20} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-600"
              />

            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Leaderboard
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              View your volunteer ranking and recognition.
            </p>

          </button>

        </div>

      </section>


      {/* =========================
          PROGRAMMES / SCHOLARSHIPS
      ========================= */}

      <section>

        <div className="mb-4">

          <h2 className="text-lg font-bold text-gray-900">
            Opportunities
          </h2>

          <p className="text-sm text-gray-500">
            Explore programmes and scholarship opportunities available to you.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Programmes */}
          <button
            onClick={() => navigate("/dashboard/programmes")}
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />

            </div>

            <h3 className="mt-5 text-base font-bold text-gray-900">
              Youth Programmes
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Discover government and youth development programmes,
              training opportunities and upcoming initiatives.
            </p>

          </button>


          {/* Scholarships */}
          <button
            onClick={() => navigate("/dashboard/scholarships")}
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <GraduationCap size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-purple-600"
              />

            </div>

            <h3 className="mt-5 text-base font-bold text-gray-900">
              Scholarships
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Browse available scholarships, check eligibility and
              track your applications.
            </p>

          </button>

        </div>

      </section>


      {/* =========================
          ACHIEVEMENT PROGRESS
      ========================= */}

      <section className="rounded-2xl border border-gray-200 bg-white p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Achievement Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Keep volunteering to reach your next milestone.
            </p>

          </div>

          <button
            onClick={() => navigate("/dashboard/achievements")}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View All
            <ArrowRight size={15} />
          </button>

        </div>


        <div className="mt-6">

          <div className="flex items-center justify-between">

            <span className="text-sm font-semibold text-gray-700">
              Community Champion
            </span>

            <span className="text-xs font-semibold text-gray-500">
              128 / 150 hours
            </span>

          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">

            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: "85%" }}
            />

          </div>

          <p className="mt-2 text-xs text-gray-400">
            22 more volunteer hours to unlock the next milestone.
          </p>

        </div>

      </section>


      {/* =========================
          UPCOMING ACTIVITIES
      ========================= */}

      <section className="rounded-2xl border border-gray-200 bg-white p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Upcoming Activities
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your registered volunteer activities.
            </p>

          </div>

          <button
            onClick={() => navigate("/dashboard/discover")}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Browse Activities
            <ArrowRight size={15} />
          </button>

        </div>


        <div className="mt-5 space-y-3">

          {/* Activity 1 */}
          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <CalendarDays size={18} />
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-900">
                  Youth Community Cleanup
                </p>

                <p className="text-xs text-gray-500">
                  August 15, 2026 • Thimphu
                </p>

              </div>

            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Registered
            </span>

          </div>


          {/* Activity 2 */}
          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <CalendarDays size={18} />
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-900">
                  Youth Leadership Workshop
                </p>

                <p className="text-xs text-gray-500">
                  August 22, 2026 • Paro
                </p>

              </div>

            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Registered
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          PERSONAL AREA
      ========================= */}

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Profile */}
        <button
          onClick={() => navigate("/dashboard/profile")}
          className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >

          <div className="flex items-center justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <User size={20} />
            </div>

            <ArrowRight
              size={18}
              className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />

          </div>

          <h3 className="mt-4 font-bold text-gray-900">
            My Profile
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Manage your personal information and volunteer details.
          </p>

        </button>


        {/* Settings */}
        <button
          onClick={() => navigate("/dashboard/settings")}
          className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md"
        >

          <div className="flex items-center justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
              <Settings size={20} />
            </div>

            <ArrowRight
              size={18}
              className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-gray-600"
            />

          </div>

          <h3 className="mt-4 font-bold text-gray-900">
            Personalize Dashboard
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Customize your dashboard background, appearance and profile preferences.
          </p>

        </button>

      </section>

    </div>
  );
};

export default YouthDashboard;