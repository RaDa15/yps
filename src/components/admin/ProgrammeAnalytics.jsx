import {
  CalendarCheck,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

const programmes = [
  {
    title: "Active Programmes",
    value: "120",
    icon: CalendarCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Completed",
    value: "530",
    icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Participants",
    value: "18,920",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Upcoming",
    value: "45",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

const completion = [
  {
    name: "Leadership",
    progress: 92,
  },
  {
    name: "Digital Skills",
    progress: 85,
  },
  {
    name: "Entrepreneurship",
    progress: 73,
  },
  {
    name: "Volunteer Camp",
    progress: 96,
  },
];

const ProgrammeAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4">
        {programmes.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center`}
                >
                  <Icon className={item.color} />
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="bg-white border rounded-xl shadow-sm p-5">

        <h3 className="font-semibold text-lg mb-5">
          Programme Completion Rate
        </h3>

        <div className="space-y-5">
          {completion.map((item, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">

                <span>{item.name}</span>

                <span className="font-semibold">
                  {item.progress}%
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">

                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />

              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ProgrammeAnalytics;