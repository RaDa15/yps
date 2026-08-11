import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const dzongkhag = [
  { name: "Thimphu", youth: 5200 },
  { name: "Paro", youth: 3600 },
  { name: "Punakha", youth: 2800 },
  { name: "Haa", youth: 1100 },
  { name: "Samtse", youth: 3000 },
  { name: "Trongsa", youth: 900 },
];

const gender = [
  {
    name: "Male",
    value: 52,
  },
  {
    name: "Female",
    value: 48,
  },
];

const growth = [
  {
    month: "Jan",
    users: 1200,
  },
  {
    month: "Feb",
    users: 1700,
  },
  {
    month: "Mar",
    users: 2500,
  },
  {
    month: "Apr",
    users: 3300,
  },
  {
    month: "May",
    users: 4200,
  },
  {
    month: "Jun",
    users: 5200,
  },
];

const COLORS = [
  "#2563eb",
  "#10b981",
];

const YouthAnalytics = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">

      {/* Dzongkhag */}
      <div className="bg-white rounded-2xl shadow-sm border p-5">

        <h3 className="font-semibold text-lg mb-5">
          Youth by Dzongkhag
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={dzongkhag}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="youth" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Gender */}
      <div className="bg-white rounded-2xl shadow-sm border p-5">

        <h3 className="font-semibold text-lg mb-5">
          Gender Distribution
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={gender}
              dataKey="value"
              outerRadius={90}
              label
            >
              {gender.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Growth */}
      <div className="bg-white rounded-2xl shadow-sm border p-5">

        <h3 className="font-semibold text-lg mb-5">
          Registration Growth
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={growth}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default YouthAnalytics;