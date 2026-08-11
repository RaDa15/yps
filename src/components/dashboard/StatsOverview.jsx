import {
  Trophy,
  HeartHandshake,
  BookOpen,
  TrendingUp
} from "lucide-react";

function StatsOverview() {
  const stats = [
    {
      title: "Achievements",
      value: "12",
      unit: "Badges",
      description: "Milestones completed",
      icon: Trophy,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },

    {
      title: "Volunteer Hours",
      value: "142",
      unit: "Hours",
      description: "Community contribution",
      icon: HeartHandshake,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },

    {
      title: "Programmes Joined",
      value: "8",
      unit: "Programmes",
      description: "Learning activities",
      icon: BookOpen,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },

    {
      title: "Impact Score",
      value: "860",
      unit: "Points",
      description: "Youth contribution level",
      icon: TrendingUp,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
      {
        stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className=" bg-white rounded-3xl p-8 min-h-[220px]
              w-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              {/* Icon Section */}
              <div className=" flex justify-between items-start">
                <div
                  className={` w-14 h-14 rounded-2xl flex items-center justify-center
                  ${item.iconBg}${item.iconColor}`}>
                  <Icon size={28} />
                </div>
                <button className=" text-gray-300 hover:text-gray-600 text-xl">
                  ⋮
                </button>
              </div>

              {/* Text Section */}
              <div>
                <div className=" flex items-baseline gap-2">
                  <h2 className=" text-4xl font-bold text-gray-900">
                    {item.value}
                  </h2>
                  <span className=" text-sm font-medium text-gray-500">
                    {item.unit}
                  </span>
                </div>
                <h3 className=" mt-3 text-base font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className=" mt-1 text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default StatsOverview;