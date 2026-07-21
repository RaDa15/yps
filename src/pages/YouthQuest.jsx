import {
  Award,
  Trophy,
  Star,
  Flame,
  Target,
  Gift,
  Medal,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

export default function YouthQuest() {
  const stats = [
    {
      title: "Total XP",
      value: "2,450",
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      title: "Badges",
      value: "12",
      icon: Award,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Volunteer Hours",
      value: "86",
      icon: Trophy,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Current Streak",
      value: "18 Days",
      icon: Flame,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  const badges = [
    { title: "Volunteer Hero", earned: true },
    { title: "Community Builder", earned: true },
    { title: "Leadership Star", earned: true },
    { title: "Green Champion", earned: false },
    { title: "Digital Ambassador", earned: false },
    { title: "National Youth Icon", earned: false },
  ];

  const challenges = [
    {
      title: "Attend 2 Youth Programs",
      progress: 60,
      xp: 200,
    },
    {
      title: "Volunteer 10 Hours",
      progress: 80,
      xp: 300,
    },
    {
      title: "Complete Digital Skills Course",
      progress: 40,
      xp: 500,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Karma Wangchuk", xp: 3250 },
    { rank: 2, name: "Pema Choden", xp: 2890 },
    { rank: 3, name: "Sonam Dorji", xp: 2450 },
    { rank: 4, name: "Kinley", xp: 2200 },
    { rank: 5, name: "Tshering", xp: 2010 },
  ];

  const activities = [
    {
      title: "Volunteer Training Completed",
      xp: "+50 XP",
    },
    {
      title: "Clean Bhutan Campaign",
      xp: "+200 XP",
    },
    {
      title: "Completed Profile",
      xp: "+100 XP",
    },
    {
      title: "Daily Login",
      xp: "+25 XP",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white p-10 shadow-lg">

        <h1 className="text-4xl font-bold mb-2">
          Youth Quest
        </h1>

        <p className="text-blue-100 mb-6">
          Keep participating, earn XP and unlock exclusive rewards.
        </p>

        <div className="mb-3 flex justify-between">
          <span>Level 8 Explorer</span>
          <span>2,450 / 3,000 XP</span>
        </div>

        <div className="w-full h-4 bg-blue-300 rounded-full overflow-hidden">

          <div
            className="bg-yellow-400 h-full rounded-full"
            style={{ width: "72%" }}
          ></div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}
              >
                <Icon className={item.color} size={28} />
              </div>

              <h2 className="text-3xl font-bold">{item.value}</h2>

              <p className="text-gray-500 mt-1">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-8">

        {/* Left */}

        <div className="lg:col-span-2 space-y-8">

          {/* Badges */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Achievement Badges
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-6 text-center transition hover:-translate-y-1 ${
                    badge.earned
                      ? "border-blue-100"
                      : "border-gray-200 opacity-60"
                  }`}
                >
                  <Award
                    size={40}
                    className={
                      badge.earned
                        ? "text-yellow-500 mx-auto"
                        : "text-gray-400 mx-auto"
                    }
                  />

                  <h3 className="font-semibold mt-4">
                    {badge.title}
                  </h3>

                  <p
                    className={`text-sm mt-2 ${
                      badge.earned
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {badge.earned ? "Unlocked" : "Locked"}
                  </p>

                </div>
              ))}
            </div>

          </div>

          {/* Challenges */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Current Challenges
            </h2>

            <div className="space-y-6">

              {challenges.map((challenge, index) => (

                <div key={index}>

                  <div className="flex justify-between mb-2">

                    <span className="font-medium">
                      {challenge.title}
                    </span>

                    <span className="text-blue-600 font-semibold">
                      +{challenge.xp} XP
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{
                        width: `${challenge.progress}%`,
                      }}
                    ></div>

                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {challenge.progress}% Complete
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Activity */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              {activities.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between border-b pb-4"
                >
                  <div className="flex gap-3">

                    <CalendarCheck className="text-blue-600" />

                    <span>{item.title}</span>

                  </div>

                  <span className="font-semibold text-green-600">
                    {item.xp}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-8">

          {/* Leaderboard */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Leaderboard
            </h2>

            <div className="space-y-4">

              {leaderboard.map((user) => (

                <div
                  key={user.rank}
                  className={`flex justify-between p-3 rounded-xl ${
                    user.rank === 3
                      ? "bg-blue-50 border border-blue-200"
                      : ""
                  }`}
                >
                  <div className="flex gap-3">

                    <Medal className="text-yellow-500" />

                    <div>

                      <p className="font-medium">
                        {user.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        Rank #{user.rank}
                      </p>

                    </div>

                  </div>

                  <span className="font-bold text-blue-700">
                    {user.xp}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Rewards */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Rewards
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Gift className="text-yellow-500" />
                Bronze Explorer
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="text-green-600" />
                Silver Leader
              </div>

              <div className="flex items-center gap-3 opacity-50">
                <Award />
                Gold Ambassador
              </div>

              <div className="flex items-center gap-3 opacity-50">
                <Trophy />
                Platinum Legend
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}