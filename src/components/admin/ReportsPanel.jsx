import {
  FileText,
  FileSpreadsheet,
  Download,
} from "lucide-react";

const reports = [
  "Youth Registration Report",
  "Programme Participation Report",
  "Volunteer Activity Report",
  "Certificate Report",
  "Youth Centre Performance Report",
];

const ReportsPanel = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Generate Reports
      </h3>

      <div className="space-y-4">

        {reports.map((report, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-xl p-4"
          >
            <span>{report}</span>

            <div className="flex gap-2">

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600">
                <FileText size={16} />
                PDF
              </button>

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 text-green-600">
                <FileSpreadsheet size={16} />
                Excel
              </button>

            </div>

          </div>
        ))}

        <button className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
          <Download size={18} />
          Export All Reports
        </button>

      </div>

    </div>
  );
};

export default ReportsPanel;