import { CalendarCheck, UserCheck, Heart } from "lucide-react";

const data = [
  { label: "Sessions", value: "1,250", icon: CalendarCheck },
  { label: "Completed", value: "1,140", icon: UserCheck },
  { label: "Counsellors", value: "24", icon: Heart },
];

const CounsellingOverview = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Counselling Services
      </h3>

      <div className="space-y-4">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex justify-between items-center">

              <div className="flex gap-3 items-center">
                <Icon className="text-blue-600" />
                <span>{item.label}</span>
              </div>

              <span className="font-bold">{item.value}</span>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CounsellingOverview;