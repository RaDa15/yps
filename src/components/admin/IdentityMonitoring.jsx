import {
  BadgeCheck,
  QrCode,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "YDI Cards Issued",
    value: "22,850",
    icon: BadgeCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "NDI Verified",
    value: "21,940",
    icon: UserCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "QR Check-ins Today",
    value: "1,246",
    icon: QrCode,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Verification Success",
    value: "96%",
    icon: ShieldCheck,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

const IdentityMonitoring = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Youth Digital Identity
      </h3>

      <div className="grid grid-cols-2 gap-5">

        {cards.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="border rounded-xl p-4"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
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

    </div>
  );
};

export default IdentityMonitoring;