import { Megaphone } from "lucide-react";

const AnnouncementPanel = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">
        Announcements
      </h3>

      <textarea
        placeholder="Write an announcement..."
        className="w-full h-36 border rounded-xl p-4 resize-none"
      />

      <div className="flex justify-end mt-4">

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
          <Megaphone size={18} />
          Publish Announcement
        </button>

      </div>

    </div>
  );
};

export default AnnouncementPanel;