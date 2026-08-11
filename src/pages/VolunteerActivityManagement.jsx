import { useState } from "react";
import {
  Plus,
  Search,
  CalendarDays,
  Clock,
  Users,
  CheckCircle2,
  Eye,
  Pencil,
  ClipboardCheck,
  Activity,
  MapPin,
  X,
} from "lucide-react";

const INITIAL_ACTIVITIES = [
  {
    id: 1,
    title: "Youth Centre Clean-Up Drive",
    type: "Community Service",
    date: "08 Aug 2026",
    location: "Thimphu Youth Centre",
    volunteers: 28,
    hours: 84,
    status: "Completed",
    verified: true,
  },
  {
    id: 2,
    title: "Digital Literacy Programme",
    type: "Education",
    date: "10 Aug 2026",
    location: "Thimphu Youth Centre",
    volunteers: 16,
    hours: 48,
    status: "Ongoing",
    verified: false,
  },
  {
    id: 3,
    title: "Mental Wellness Awareness Session",
    type: "Awareness",
    date: "14 Aug 2026",
    location: "Thimphu Youth Centre",
    volunteers: 12,
    hours: 36,
    status: "Upcoming",
    verified: false,
  },
  {
    id: 4,
    title: "Sports & Recreation Day",
    type: "Sports",
    date: "18 Aug 2026",
    location: "Changangkha Ground",
    volunteers: 24,
    hours: 72,
    status: "Upcoming",
    verified: false,
  },
];

const STATUS_STYLES = {
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ongoing: "bg-blue-50 text-blue-700 border-blue-200",
  Upcoming: "bg-amber-50 text-amber-700 border-amber-200",
};

const VolunteerActivityManagement = () => {
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(search.toLowerCase()) ||
      activity.type.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || activity.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalActivities = activities.length;

  const activeVolunteers = activities.reduce(
    (total, activity) => total + activity.volunteers,
    0
  );

  const totalHours = activities.reduce(
    (total, activity) => total + activity.hours,
    0
  );

  const completedActivities = activities.filter(
    (activity) => activity.status === "Completed"
  ).length;

  const verifyActivity = (id) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              verified: true,
              status: "Completed",
            }
          : activity
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
              <Activity size={16} />
              Volunteer Management
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Volunteer Activity Management
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage volunteer activities, participation and service hours
              for your youth centre.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              text-sm
              hover:bg-blue-700
              transition
              shadow-sm
            "
          >
            <Plus size={18} />
            Create Activity
          </button>

        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Activity size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Total Activities
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {totalActivities}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              This reporting period
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Volunteer Participation
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {activeVolunteers}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Recorded participations
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Service Hours
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {totalHours}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Total recorded hours
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <CheckCircle2 size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Completed Activities
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {completedActivities}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Verified activities
            </p>
          </div>

        </div>

        {/* FILTER BAR */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4">

          <div className="flex flex-col md:flex-row gap-3">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search activities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                text-sm
                bg-white
                outline-none
                focus:border-blue-500
              "
            >
              <option value="All">All Status</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>

          </div>

        </div>

        {/* ACTIVITY TABLE */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Volunteer Activities
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Track activities and volunteer participation.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wide">

                  <th className="text-left px-6 py-4">
                    Activity
                  </th>

                  <th className="text-left px-4 py-4">
                    Date
                  </th>

                  <th className="text-left px-4 py-4">
                    Volunteers
                  </th>

                  <th className="text-left px-4 py-4">
                    Service Hours
                  </th>

                  <th className="text-left px-4 py-4">
                    Status
                  </th>

                  <th className="text-right px-6 py-4">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredActivities.map((activity) => (

                  <tr
                    key={activity.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-4">

                      <div>
                        <p className="font-semibold text-gray-900">
                          {activity.title}
                        </p>

                        <div className="flex items-center gap-2 mt-1">

                          <span className="text-xs text-gray-500">
                            {activity.type}
                          </span>

                          <span className="text-gray-300">
                            •
                          </span>

                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <MapPin size={12} />
                            {activity.location}
                          </span>

                        </div>
                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarDays size={15} />
                        {activity.date}
                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Users size={15} className="text-violet-600" />
                        {activity.volunteers}
                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Clock size={15} className="text-emerald-600" />
                        {activity.hours} hrs
                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={`
                          inline-flex
                          items-center
                          px-3
                          py-1
                          rounded-full
                          border
                          text-xs
                          font-semibold
                          ${STATUS_STYLES[activity.status]}
                        `}
                      >
                        {activity.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <button
                          onClick={() => setSelectedActivity(activity)}
                          className="
                            p-2
                            rounded-lg
                            text-gray-500
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition
                          "
                          title="View activity"
                        >
                          <Eye size={17} />
                        </button>

                        {!activity.verified && activity.status === "Ongoing" && (
                          <button
                            onClick={() => verifyActivity(activity.id)}
                            className="
                              p-2
                              rounded-lg
                              text-emerald-600
                              hover:bg-emerald-50
                              transition
                            "
                            title="Verify activity"
                          >
                            <ClipboardCheck size={17} />
                          </button>
                        )}

                        <button
                          className="
                            p-2
                            rounded-lg
                            text-gray-500
                            hover:bg-gray-100
                            hover:text-gray-700
                            transition
                          "
                          title="Edit activity"
                        >
                          <Pencil size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredActivities.length === 0 && (
            <div className="py-12 text-center">

              <Activity
                size={36}
                className="mx-auto text-gray-300"
              />

              <p className="text-sm font-medium text-gray-600 mt-3">
                No activities found
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Try changing your search or filter.
              </p>

            </div>
          )}

        </div>

      </div>

      {/* CREATE ACTIVITY MODAL */}
      {showModal && (
        <CreateActivityModal
          onClose={() => setShowModal(false)}
        />
      )}

      {/* ACTIVITY DETAILS MODAL */}
      {selectedActivity && (
        <ActivityDetailsModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

    </div>
  );
};


/* =========================================================
   CREATE ACTIVITY MODAL
========================================================= */

const CreateActivityModal = ({ onClose }) => {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Create Volunteer Activity
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Add a new activity for volunteers.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Activity Name
            </label>

            <input
              className="w-full mt-2 px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
              placeholder="Enter activity name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Activity Type
            </label>

            <select className="w-full mt-2 px-4 py-3 border rounded-xl text-sm bg-white">
              <option>Community Service</option>
              <option>Education</option>
              <option>Awareness</option>
              <option>Sports</option>
              <option>Environment</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Activity Date
            </label>

            <input
              type="date"
              className="w-full mt-2 px-4 py-3 border rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Expected Volunteers
            </label>

            <input
              type="number"
              className="w-full mt-2 px-4 py-3 border rounded-xl text-sm"
              placeholder="e.g. 20"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Estimated Service Hours
            </label>

            <input
              type="number"
              className="w-full mt-2 px-4 py-3 border rounded-xl text-sm"
              placeholder="e.g. 40"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Location
            </label>

            <input
              className="w-full mt-2 px-4 py-3 border rounded-xl text-sm"
              placeholder="Activity location"
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 px-6 py-5 border-t">

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border text-sm font-medium"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Create Activity
          </button>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   ACTIVITY DETAILS MODAL
========================================================= */

const ActivityDetailsModal = ({ activity, onClose }) => {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Activity Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Volunteer activity information
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6 space-y-4">

          <div>
            <p className="text-xs text-gray-400">
              Activity
            </p>

            <p className="font-semibold text-gray-900">
              {activity.title}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <p className="text-xs text-gray-400">
                Type
              </p>

              <p className="text-sm font-medium">
                {activity.type}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Date
              </p>

              <p className="text-sm font-medium">
                {activity.date}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Volunteers
              </p>

              <p className="text-sm font-medium">
                {activity.volunteers}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Service Hours
              </p>

              <p className="text-sm font-medium">
                {activity.hours} hours
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs text-gray-400">
              Location
            </p>

            <p className="text-sm font-medium">
              {activity.location}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Verification
            </p>

            <p
              className={`text-sm font-semibold ${
                activity.verified
                  ? "text-emerald-600"
                  : "text-amber-600"
              }`}
            >
              {activity.verified
                ? "Verified"
                : "Pending Verification"}
            </p>
          </div>

        </div>

        <div className="px-6 py-5 border-t flex justify-end">

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default VolunteerActivityManagement;
