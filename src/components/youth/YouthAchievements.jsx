import { useMemo } from "react";
import {
  Trophy,
  Award,
  Star,
  Target,
  Clock3,
  CheckCircle2,
  Lock,
  TrendingUp,
  Medal,
  Sparkles,
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "First Contribution",
    description: "Complete your first approved volunteer activity.",
    category: "Milestone",
    requirement: "1 approved activity",
    progress: 1,
    target: 1,
    status: "Earned",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Community Helper",
    description: "Complete at least 25 hours of verified volunteer service.",
    category: "Service",
    requirement: "25 volunteer hours",
    progress: 25,
    target: 25,
    status: "Earned",
    icon: HeartIcon,
  },
  {
    id: 3,
    title: "Dedicated Volunteer",
    description: "Reach 50 verified volunteer service hours.",
    category: "Service",
    requirement: "50 volunteer hours",
    progress: 48,
    target: 50,
    status: "In Progress",
    icon: Clock3,
  },
  {
    id: 4,
    title: "Youth Leader",
    description: "Complete 10 approved activities.",
    category: "Leadership",
    requirement: "10 activities",
    progress: 8,
    target: 10,
    status: "In Progress",
    icon: Trophy,
  },
  {
    id: 5,
    title: "Community Champion",
    description: "Complete 100 verified volunteer service hours.",
    category: "Service",
    requirement: "100 volunteer hours",
    progress: 48,
    target: 100,
    status: "In Progress",
    icon: Medal,
  },
  {
    id: 6,
    title: "Youth Led Group Ambassador",
    description: "Complete 20 activities and demonstrate consistent engagement.",
    category: "Leadership",
    requirement: "20 activities",
    progress: 8,
    target: 20,
    status: "Locked",
    icon: Star,
  },
];

function HeartIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

const YouthAchievements = () => {
  const earnedCount = ACHIEVEMENTS.filter(
    (item) => item.status === "Earned"
  ).length;

  const progressCount = ACHIEVEMENTS.filter(
    (item) => item.status === "In Progress"
  ).length;

  const overallProgress = useMemo(() => {
    const total = ACHIEVEMENTS.reduce(
      (sum, item) => sum + item.target,
      0
    );

    const progress = ACHIEVEMENTS.reduce(
      (sum, item) => sum + Math.min(item.progress, item.target),
      0
    );

    return Math.round((progress / total) * 100);
  }, []);

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold">
            <Trophy className="w-4 h-4" />
            Recognition & Gamification
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            My Achievements
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Track your milestones, badges and progress as a youth volunteer.
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className="px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-100">

            <p className="text-[11px] text-amber-600 font-medium">
              Achievements Earned
            </p>

            <p className="text-xl font-bold text-amber-700">
              {earnedCount}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          PROFILE ACHIEVEMENT SUMMARY
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Achievement Level */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Trophy className="w-7 h-7" />
            </div>

            <div>

              <p className="text-xs text-gray-500">
                Volunteer Level
              </p>

              <h2 className="text-xl font-bold text-gray-900">
                Rising Leader
              </h2>

              <p className="text-xs text-amber-600 font-medium mt-1">
                Level 4 Volunteer
              </p>

            </div>

          </div>

        </div>


        {/* Earned */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs text-gray-500">
                Milestones Completed
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {earnedCount}
              </h2>

              <p className="text-xs text-emerald-600 mt-1">
                Successfully achieved
              </p>

            </div>

            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>

          </div>

        </div>


        {/* Overall Progress */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs text-gray-500">
                Achievement Progress
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {overallProgress}%
              </h2>

              <p className="text-xs text-blue-600 mt-1">
                Keep progressing
              </p>

            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CURRENT PROGRESS
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <div className="flex items-center gap-2">

              <TrendingUp className="w-5 h-5 text-blue-600" />

              <h2 className="text-lg font-bold text-gray-900">
                Progress to Next Milestone
              </h2>

            </div>

            <p className="text-sm text-gray-500 mt-1">
              You are close to reaching your next volunteer milestone.
            </p>

          </div>

          <div className="text-right">

            <p className="text-2xl font-bold text-blue-600">
              48 / 50
            </p>

            <p className="text-xs text-gray-400">
              verified volunteer hours
            </p>

          </div>

        </div>


        <div className="mt-5">

          <div className="flex items-center justify-between mb-2">

            <span className="text-xs font-semibold text-gray-500">
              Dedicated Volunteer
            </span>

            <span className="text-xs font-bold text-blue-600">
              96%
            </span>

          </div>

          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">

            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: "96%" }}
            />

          </div>

          <p className="text-xs text-gray-400 mt-2">
            Only 2 more verified hours needed to unlock this achievement.
          </p>

        </div>

      </div>


      {/* =====================================================
          ACHIEVEMENT CARDS
      ===================================================== */}

      <div>

        <div className="flex items-center justify-between mb-4">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Milestones & Badges
            </h2>

            <p className="text-sm text-gray-500">
              {earnedCount} earned · {progressCount} in progress
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {ACHIEVEMENTS.map((achievement) => {

            const Icon = achievement.icon;

            const percentage = Math.min(
              100,
              Math.round(
                (achievement.progress / achievement.target) * 100
              )
            );

            const isEarned =
              achievement.status === "Earned";

            const isLocked =
              achievement.status === "Locked";

            return (
              <div
                key={achievement.id}
                className={`
                  bg-white
                  border
                  rounded-2xl
                  p-5
                  transition
                  ${
                    isEarned
                      ? "border-amber-200 hover:shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      ${
                        isEarned
                          ? "bg-amber-50 text-amber-600"
                          : isLocked
                          ? "bg-gray-100 text-gray-400"
                          : "bg-blue-50 text-blue-600"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>


                  {isEarned && (

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      <CheckCircle2 size={11} />
                      Earned
                    </span>

                  )}

                  {isLocked && (

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold">
                      <Lock size={11} />
                      Locked
                    </span>

                  )}

                  {!isEarned && !isLocked && (

                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                      In Progress
                    </span>

                  )}

                </div>


                <h3 className="text-sm font-bold text-gray-900 mt-4">
                  {achievement.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {achievement.description}
                </p>


                <div className="mt-4">

                  <div className="flex items-center justify-between mb-1.5">

                    <span className="text-[10px] text-gray-400">
                      Progress
                    </span>

                    <span className="text-[10px] font-bold text-gray-600">
                      {achievement.progress} / {achievement.target}
                    </span>

                  </div>

                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className={`
                        h-full
                        rounded-full
                        ${
                          isEarned
                            ? "bg-emerald-500"
                            : isLocked
                            ? "bg-gray-300"
                            : "bg-blue-500"
                        }
                      `}
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                </div>


                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">

                  <span className="text-[10px] text-gray-400">
                    {achievement.category}
                  </span>

                  <span className="text-[10px] font-semibold text-gray-500">
                    {achievement.requirement}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          RECOGNITION BANNER
      ===================================================== */}

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
            <Medal className="w-5 h-5" />
          </div>

          <div>

            <h3 className="text-sm font-bold text-gray-900">
              Keep making an impact!
            </h3>

            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Every approved volunteer activity contributes toward
              your milestones, service hours and recognition within
              the Youth Portal System.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default YouthAchievements;