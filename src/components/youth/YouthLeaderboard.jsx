import { useMemo, useState } from "react";
import {
  Trophy,
  Medal,
  Crown,
  TrendingUp,
  Clock3,
  Activity,
  Users,
  Award,
  ChevronUp,
  ChevronDown,
  Star,
  Search,
} from "lucide-react";

const LEADERBOARD_DATA = [
  {
    rank: 1,
    name: "Sonam Dorji",
    network: "Thimphu Y-PEER Network",
    hours: 128,
    activities: 24,
    points: 2480,
    badges: 12,
    trend: "up",
  },
  {
    rank: 2,
    name: "Karma Wangmo",
    network: "Paro Y-PEER Network",
    hours: 116,
    activities: 21,
    points: 2290,
    badges: 10,
    trend: "up",
  },
  {
    rank: 3,
    name: "Tshering Dorji",
    network: "Punakha Y-PEER Network",
    hours: 104,
    activities: 19,
    points: 2140,
    badges: 9,
    trend: "same",
  },
  {
    rank: 4,
    name: "Pema Choden",
    network: "Phuentsholing Y-PEER Network",
    hours: 96,
    activities: 18,
    points: 1985,
    badges: 8,
    trend: "up",
  },
  {
    rank: 5,
    name: "Kinley Wangmo",
    network: "Mongar Y-PEER Network",
    hours: 88,
    activities: 16,
    points: 1810,
    badges: 7,
    trend: "down",
  },
  {
    rank: 6,
    name: "Choki Lhamo",
    network: "Bumthang Y-PEER Network",
    hours: 82,
    activities: 15,
    points: 1690,
    badges: 7,
    trend: "up",
  },
  {
    rank: 7,
    name: "Jigme Dorji",
    network: "Samdrup Jongkhar Y-PEER Network",
    hours: 76,
    activities: 13,
    points: 1580,
    badges: 6,
    trend: "same",
  },
  {
    rank: 8,
    name: "Tashi Wangdi",
    network: "Gelephu Y-PEER Network",
    hours: 71,
    activities: 12,
    points: 1460,
    badges: 5,
    trend: "up",
  },
  {
    rank: 9,
    name: "Pema Choden",
    network: "Thimphu Y-PEER Network",
    hours: 64,
    activities: 11,
    points: 1320,
    badges: 5,
    trend: "up",
  },
  {
    rank: 10,
    name: "Dechen Wangmo",
    network: "Paro Y-PEER Network",
    hours: 59,
    activities: 10,
    points: 1240,
    badges: 4,
    trend: "down",
  },
];

const CURRENT_USER = {
  name: "Tshering Pem",
  network: "Thimphu Y-PEER Network",
  rank: 18,
  hours: 48,
  activities: 8,
  points: 980,
  badges: 4,
};

const FILTERS = [
  "National",
  "My Network",
  "Monthly",
];

const YouthLeaderboard = () => {
  const [activeFilter, setActiveFilter] = useState("National");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeaderboard = useMemo(() => {
    let data = [...LEADERBOARD_DATA];

    if (activeFilter === "My Network") {
      data = data.filter(
        (person) =>
          person.network === CURRENT_USER.network
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      data = data.filter(
        (person) =>
          person.name.toLowerCase().includes(query) ||
          person.network.toLowerCase().includes(query)
      );
    }

    return data;
  }, [activeFilter, searchQuery]);

  const getRankStyle = (rank) => {
    if (rank === 1) {
      return "bg-amber-50 text-amber-600";
    }

    if (rank === 2) {
      return "bg-slate-100 text-slate-600";
    }

    if (rank === 3) {
      return "bg-orange-50 text-orange-600";
    }

    return "bg-gray-100 text-gray-500";
  };

  const TrendIcon = ({ trend }) => {
    if (trend === "up") {
      return (
        <ChevronUp
          size={14}
          className="text-emerald-600"
        />
      );
    }

    if (trend === "down") {
      return (
        <ChevronDown
          size={14}
          className="text-red-500"
        />
      );
    }

    return (
      <span className="text-gray-400 text-xs">
        —
      </span>
    );
  };

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
            Volunteer Leaderboard
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            See how your volunteer contribution compares with
            other youth volunteers.
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className="px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-100">

            <p className="text-[11px] text-amber-600 font-medium">
              My National Rank
            </p>

            <p className="text-xl font-bold text-amber-700">
              #{CURRENT_USER.rank}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          MY PERFORMANCE
      ===================================================== */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">

              <Crown className="w-7 h-7 text-amber-300" />

            </div>

            <div>

              <p className="text-xs text-blue-100">
                Your current position
              </p>

              <h2 className="text-xl font-bold">
                #{CURRENT_USER.rank} Nationally
              </h2>

              <p className="text-xs text-blue-100 mt-1">
                {CURRENT_USER.network}
              </p>

            </div>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">

            <div>

              <p className="text-[11px] text-blue-100">
                Points
              </p>

              <p className="text-lg font-bold">
                {CURRENT_USER.points.toLocaleString()}
              </p>

            </div>

            <div>

              <p className="text-[11px] text-blue-100">
                Hours
              </p>

              <p className="text-lg font-bold">
                {CURRENT_USER.hours}
              </p>

            </div>

            <div>

              <p className="text-[11px] text-blue-100">
                Activities
              </p>

              <p className="text-lg font-bold">
                {CURRENT_USER.activities}
              </p>

            </div>

            <div>

              <p className="text-[11px] text-blue-100">
                Badges
              </p>

              <p className="text-lg font-bold">
                {CURRENT_USER.badges}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Trophy size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            National Rank
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            #{CURRENT_USER.rank}
          </h2>

          <p className="text-xs text-emerald-600 mt-1">
            +3 positions this month
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Star size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Contribution Points
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {CURRENT_USER.points.toLocaleString()}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Total points earned
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Clock3 size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Volunteer Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {CURRENT_USER.hours}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Verified service hours
          </p>

        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <Award size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Badges Earned
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {CURRENT_USER.badges}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Recognition badges
          </p>

        </div>

      </div>


      {/* =====================================================
          FILTER + SEARCH
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col lg:flex-row lg:items-center gap-3">

          <div className="flex flex-wrap gap-1.5 p-1 bg-gray-100 rounded-xl">

            {FILTERS.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4
                  py-2
                  rounded-lg
                  text-xs
                  font-semibold
                  transition
                  ${
                    activeFilter === filter
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>


          <div className="relative flex-1">

            <Search
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search volunteer or network..."
              className="
                w-full
                pl-9
                pr-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-500/20
                focus:border-blue-400
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          TOP THREE
      ===================================================== */}

      {activeFilter === "National" && !searchQuery && (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {LEADERBOARD_DATA.slice(0, 3).map((person) => {

            const isFirst = person.rank === 1;
            const isSecond = person.rank === 2;
            const isThird = person.rank === 3;

            return (

              <div
                key={person.rank}
                className={`
                  bg-white
                  border
                  rounded-2xl
                  p-6
                  text-center
                  ${
                    isFirst
                      ? "border-amber-200 shadow-sm"
                      : "border-gray-200"
                  }
                `}
              >

                <div className="flex justify-center">

                  <div
                    className={`
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ${
                        isFirst
                          ? "bg-amber-50 text-amber-600"
                          : isSecond
                          ? "bg-slate-100 text-slate-600"
                          : "bg-orange-50 text-orange-600"
                      }
                    `}
                  >

                    {isFirst ? (
                      <Crown className="w-7 h-7" />
                    ) : (
                      <Medal className="w-7 h-7" />
                    )}

                  </div>

                </div>


                <div className="mt-4">

                  <p className="text-xs text-gray-400">
                    Rank #{person.rank}
                  </p>

                  <h3 className="text-base font-bold text-gray-900 mt-1">
                    {person.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {person.network}
                  </p>

                </div>


                <div className="grid grid-cols-3 gap-2 mt-5">

                  <div className="bg-gray-50 rounded-xl p-2">

                    <p className="text-sm font-bold text-gray-900">
                      {person.points.toLocaleString()}
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Points
                    </p>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-2">

                    <p className="text-sm font-bold text-gray-900">
                      {person.hours}
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Hours
                    </p>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-2">

                    <p className="text-sm font-bold text-gray-900">
                      {person.activities}
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Activities
                    </p>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      )}


      {/* =====================================================
          LEADERBOARD TABLE
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Volunteer Rankings
            </h2>

            <p className="text-sm text-gray-500">
              Rankings based on verified contribution points.
            </p>

          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">

            <Users size={14} />

            {filteredLeaderboard.length} volunteers shown

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>

              <tr className="border-t border-b border-gray-100 bg-gray-50/70">

                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400">
                  Rank
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Volunteer
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Network
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Points
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Hours
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Activities
                </th>

                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">
                  Badges
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-gray-400">
                  Trend
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredLeaderboard.map((person) => {

                const isCurrentUser =
                  person.name === CURRENT_USER.name;

                return (

                  <tr
                    key={`${person.rank}-${person.name}`}
                    className={`
                      border-b
                      border-gray-100
                      last:border-0
                      transition
                      ${
                        isCurrentUser
                          ? "bg-blue-50/50"
                          : "hover:bg-gray-50"
                      }
                    `}
                  >

                    <td className="px-6 py-4">

                      <div
                        className={`
                          w-9
                          h-9
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          text-sm
                          font-bold
                          ${getRankStyle(person.rank)}
                        `}
                      >
                        #{person.rank}
                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                          {person.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-gray-900">
                            {person.name}
                          </p>

                          {isCurrentUser && (

                            <span className="text-[10px] font-bold text-blue-600">
                              You
                            </span>

                          )}

                        </div>

                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <span className="text-xs text-gray-600">
                        {person.network}
                      </span>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex items-center gap-1.5">

                        <Star
                          size={14}
                          className="text-amber-500"
                        />

                        <span className="text-sm font-bold text-gray-800">
                          {person.points.toLocaleString()}
                        </span>

                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex items-center gap-1.5">

                        <Clock3
                          size={14}
                          className="text-emerald-500"
                        />

                        <span className="text-sm font-semibold text-gray-700">
                          {person.hours}h
                        </span>

                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex items-center gap-1.5">

                        <Activity
                          size={14}
                          className="text-violet-500"
                        />

                        <span className="text-sm font-semibold text-gray-700">
                          {person.activities}
                        </span>

                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex items-center gap-1.5">

                        <Award
                          size={14}
                          className="text-blue-500"
                        />

                        <span className="text-sm font-semibold text-gray-700">
                          {person.badges}
                        </span>

                      </div>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex justify-center">

                        <TrendIcon trend={person.trend} />

                      </div>

                    </td>

                  </tr>

                );
              })}


              {filteredLeaderboard.length === 0 && (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-12 text-sm text-gray-400"
                  >
                    No volunteers found matching your search.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================================
          RANKING INFO
      ===================================================== */}

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0">

            <TrendingUp className="w-5 h-5" />

          </div>

          <div>

            <h3 className="text-sm font-bold text-gray-900">
              Keep climbing the leaderboard!
            </h3>

            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Participate in more approved activities, complete your
              post-activity updates and contribute verified service
              hours to increase your contribution points and improve
              your ranking.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default YouthLeaderboard;