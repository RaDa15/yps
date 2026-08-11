import {
  Users,
  Building2,
  CalendarCheck,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import { directorMetrics } from "../../data/directorMetrics";

const stats = [
  {
    title: "Registered Youth",
    value: directorMetrics.registeredYouth,
    description: "Youth registered nationwide",
    change: "+12.4%",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },

  {
    title: "Youth Centres",
    value: directorMetrics.youthCentres,
    description: "Operational centres",
    change: "Nationwide",
    icon: Building2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },

  {
    title: "Active Programmes",
    value: directorMetrics.activeProgrammes,
    description: "National programmes",
    change: "Active",
    icon: CalendarCheck,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },

  {
    title: "National Volunteers",
    value: directorMetrics.nationalVolunteers,
    description: "Active volunteers",
    change: "+18.7%",
    icon: HeartHandshake,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const DirectorStats = () => {
  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-5
    ">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              transition-all
              duration-200
              hover:shadow-md
              hover:-translate-y-0.5
            "
          >

            {/* TOP ROW */}

            <div className="
              flex
              items-start
              justify-between
            ">

              {/* ICON */}

              <div
                className={`
                  w-11
                  h-11
                  rounded-xl
                  ${item.iconBg}
                  ${item.iconColor}
                  flex
                  items-center
                  justify-center
                `}
              >
                <Icon className="w-5 h-5" />
              </div>


              {/* CHANGE */}

              <div className="
                flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-emerald-600
                bg-emerald-50
                px-2.5
                py-1.5
                rounded-lg
              ">

                {item.change.includes("%") && (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                )}

                {item.change}

              </div>

            </div>


            {/* TITLE */}

            <p className="
              text-sm
              text-gray-500
              mt-5
            ">
              {item.title}
            </p>


            {/* VALUE */}

            <h2 className="
              text-3xl
              font-bold
              text-gray-900
              mt-1
              tracking-tight
            ">
              {item.value}
            </h2>


            {/* DESCRIPTION */}

            <p className="
              text-xs
              text-gray-400
              mt-1
            ">
              {item.description}
            </p>

          </div>
        );
      })}

    </div>
  );
};

export default DirectorStats;