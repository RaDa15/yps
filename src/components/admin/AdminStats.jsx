import {
  Users,
  Building2,
  HeartHandshake,
  CalendarCheck,
  Award,
  MessageCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Youth",
    value: "12,540",
    description: "Registered youth members",
    icon: Users,
  },
  {
    title: "Youth Centres",
    value: "13",
    description: "Across Bhutan",
    icon: Building2,
  },
  {
    title: "Active Volunteers",
    value: "3,420",
    description: "Registered volunteers",
    icon: HeartHandshake,
  },
  {
    title: "Programmes",
    value: "245",
    description: "Active programmes",
    icon: CalendarCheck,
  },
  {
    title: "Certificates",
    value: "8,920",
    description: "Generated certificates",
    icon: Award,
  },
  {
    title: "Counselling",
    value: "1,240",
    description: "Sessions completed",
    icon: MessageCircle,
  },
];

const AdminStats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
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
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {stat.description}
                </p>
              </div>

              {/* Icon */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-50
                  text-slate-600
                  transition-colors
                  duration-200
                  group-hover:bg-blue-50
                  group-hover:text-blue-600
                "
              >
                <Icon size={22} strokeWidth={2} />
              </div>
            </div>

            {/* Bottom Accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-0.5
                w-0
                bg-blue-600
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </div>
        );
      })}
    </div>
  );
};

export default AdminStats;