const logs = [
  "Admin created a new Youth Centre Manager",
  "Programme approved for Thimphu Youth Centre",
  "1,240 youth synced with NDI",
  "Certificate batch generated",
  "Volunteer activity approved",
];

const AuditLogs = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Recent Audit Logs
      </h3>

      <div className="space-y-4">

        {logs.map((log, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-4"
          >
            <p>{log}</p>
            <span className="text-sm text-gray-500">
              Today
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AuditLogs;