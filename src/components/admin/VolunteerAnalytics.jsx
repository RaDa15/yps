import {
  Award,
  Users,
  Clock3,
  HeartHandshake,
} from "lucide-react";

const cards = [
  {
    title: "Registered Volunteers",
    value: "4,200",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Active Volunteers",
    value: "3,150",
    icon: Award,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Volunteer Hours",
    value: "52,460",
    icon: Clock3,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Projects",
    value: "178",
    icon: HeartHandshake,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const categories = [
  {
    category: "Environmental",
    percent: 90,
  },
  {
    category: "Education",
    percent: 82,
  },
  {
    category: "Health",
    percent: 70,
  },
  {
    category: "Community Service",
    percent: 95,
  },
];

const VolunteerAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">

        {cards.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-4"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">
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

      {/* Categories */}

      <div className="bg-white rounded-xl border shadow-sm p-5">

        <h3 className="font-semibold text-lg mb-5">
          Volunteer Categories
        </h3>

        <div className="space-y-5">

          {categories.map((item, index) => (

            <div key={index}>

              <div className="flex justify-between mb-2">

                <span>{item.category}</span>

                <span>{item.percent}%</span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">

                <div
                  className="bg-emerald-600 h-3 rounded-full"
                  style={{
                    width: `${item.percent}%`,
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

export default VolunteerAnalytics;