import {
  CheckCircle2,
  RefreshCcw,
  Database,
  Wifi,
  Clock,
} from "lucide-react";

const integrations = [
  {
    name: "National Digital Identity (NDI)",
    status: "Connected",
    lastSync: "5 minutes ago",
    icon: Wifi,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    name: "DCRC Census API",
    status: "Connected",
    lastSync: "8 minutes ago",
    icon: Database,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    name: "Background Synchronization",
    status: "Running",
    lastSync: "Continuous",
    icon: RefreshCcw,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    name: "Offline Data Sync",
    status: "Healthy",
    lastSync: "2 minutes ago",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

const IntegrationStatus = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Government Integrations
      </h3>

      <div className="space-y-5">

        {integrations.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="flex justify-between items-center border rounded-xl p-4"
            >

              <div className="flex gap-4 items-center">

                <div
                  className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center`}
                >
                  <Icon className={item.color} />
                </div>

                <div>

                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Last Sync: {item.lastSync}
                  </p>

                </div>

              </div>

              <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle2 size={16} />
                {item.status}
              </span>

            </div>

          );
        })}

      </div>

    </div>
  );
};

export default IntegrationStatus;