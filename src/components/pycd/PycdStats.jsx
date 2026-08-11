import {
  Users,
  HeartHandshake,
  CalendarCheck,
  UserRoundX,
  Activity,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Registered Youth",
    value: "24,850",
    description: "Across 13 Youth Centres",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Active Volunteers",
    value: "3,840",
    description: "National volunteer network",
    icon: HeartHandshake,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Active Programmes",
    value: "245",
    description: "Ongoing national programmes",
    icon: CalendarCheck,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Out-of-School Youth",
    value: "18%",
    description: "Youth requiring interventions",
    icon: UserRoundX,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Service Utilization",
    value: "76%",
    description: "Youth service engagement",
    icon: Activity,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Participation Rate",
    value: "82%",
    description: "Programme participation trend",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const PycdStats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-slate-300
              hover:shadow-lg
            "
          >
            {/* Card Content */}
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {item.description}
                </p>
              </div>

              {/* Icon */}
              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${item.bg}
                  ${item.color}
                  transition-all
                  duration-200
                  group-hover:scale-105
                `}
              >
                <Icon size={22} strokeWidth={2} />
              </div>
            </div>

            {/* Bottom Hover Accent */}
            <div
              className={`
                absolute
                bottom-0
                left-0
                h-0.5
                w-0
                ${item.color.replace("text-", "bg-")}
                transition-all
                duration-300
                group-hover:w-full
              `}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PycdStats;