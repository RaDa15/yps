import { useMemo, useState } from "react";
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
  Search,
  Filter,
  ChevronRight,
  XCircle,
} from "lucide-react";

const initialActivities = [
  {
    id: 1,
    title: "Youth Leadership Workshop",
    network: "Youth Led Group Thimphu",
    location: "Thimphu",
    date: "2026-08-10",
    participants: 42,
    volunteers: 8,
    status: "Approved",
    type: "Training",
  },
  {
    id: 2,
    title: "Community Health Awareness",
    network: "Youth Led Group Paro",
    location: "Paro",
    date: "2026-08-12",
    participants: 65,
    volunteers: 12,
    status: "Pending",
    type: "Community",
  },
  {
    id: 3,
    title: "Environmental Cleanup Campaign",
    network: "Youth Led Group Punakha",
    location: "Punakha",
    date: "2026-08-15",
    participants: 78,
    volunteers: 16,
    status: "Approved",
    type: "Campaign",
  },
  {
    id: 4,
    title: "Peer Education Session",
    network: "Youth Led Group Chukha",
    location: "Chukha",
    date: "2026-08-18",
    participants: 31,
    volunteers: 6,
    status: "Pending",
    type: "Education",
  },
  {
    id: 5,
    title: "Youth Volunteer Orientation",
    network: "Youth Led Group Wangdue",
    location: "Wangdue",
    date: "2026-08-21",
    participants: 38,
    volunteers: 7,
    status: "Approved",
    type: "Orientation",
  },
];

const ActivityMonitoring = () => {
  const [activities, setActivities] = useState(initialActivities);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const searchMatch =
        activity.title.toLowerCase().includes(search.toLowerCase()) ||
        activity.network.toLowerCase().includes(search.toLowerCase()) ||
        activity.location.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" ||
        activity.status === statusFilter;

      const typeMatch =
        typeFilter === "All" ||
        activity.type === typeFilter;

      return searchMatch && statusMatch && typeMatch;
    });
  }, [activities, search, statusFilter, typeFilter]);

  const totalActivities = activities.length;

  const approvedActivities = activities.filter(
    (item) => item.status === "Approved"
  ).length;

  const pendingActivities = activities.filter(
    (item) => item.status === "Pending"
  ).length;

  const totalParticipants = activities.reduce(
    (sum, item) => sum + item.participants,
    0
  );

  const approveActivity = (id) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id
          ? { ...activity, status: "Approved" }
          : activity
      )
    );

    setSelectedActivity(null);
  };

  const rejectActivity = (id) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id
          ? { ...activity, status: "Rejected" }
          : activity
      )
    );

    setSelectedActivity(null);
  };

  const statusClass = (status) => {
    if (status === "Approved") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    if (status === "Pending") {
      return "bg-amber-50 text-amber-700 border-amber-200";
    }

    return "bg-red-50 text-red-700 border-red-200";
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
            <Activity size={17} />
            National Activity Monitoring
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Activity Monitoring
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Monitor Youth Led Group activities, participation and approval
            status across all networks.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5">
          <CalendarDays size={17} className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-700">
            August 2026
          </span>
        </div>

      </div>


      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <StatCard
          title="Total Activities"
          value={totalActivities}
          icon={Activity}
          iconClass="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="Approved"
          value={approvedActivities}
          icon={CheckCircle2}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Pending Approval"
          value={pendingActivities}
          icon={Clock3}
          iconClass="bg-amber-50 text-amber-600"
        />

        <StatCard
          title="Participants"
          value={totalParticipants}
          icon={Users}
          iconClass="bg-violet-50 text-violet-600"
        />

      </div>


      {/* FILTER BAR */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <div className="relative md:col-span-1">

            <Search
              size={17}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search activities or networks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-10
                pr-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>


          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>


          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option value="All">All Activity Types</option>
            <option value="Training">Training</option>
            <option value="Community">Community</option>
            <option value="Campaign">Campaign</option>
            <option value="Education">Education</option>
            <option value="Orientation">Orientation</option>
          </select>

        </div>

      </div>


      {/* ACTIVITY TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-100">

          <div className="flex items-center gap-2">
            <Filter size={18} className="text-blue-600" />

            <h2 className="font-bold text-gray-900">
              Network Activities
            </h2>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            Review and monitor activities submitted by Y-PEER networks.
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Activity
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Network
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Date
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Participants
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Volunteers
                </th>

                <th className="text-left px-6 py-3 text-xs font-bold text-gray-500">
                  Status
                </th>

                <th className="text-right px-6 py-3 text-xs font-bold text-gray-500">
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

                    <div className="font-semibold text-sm text-gray-900">
                      {activity.title}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {activity.type}
                    </div>

                  </td>


                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin size={14} className="text-gray-400" />
                      {activity.network}
                    </div>

                    <div className="text-xs text-gray-400 ml-5">
                      {activity.location}
                    </div>

                  </td>


                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(activity.date)}
                  </td>


                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {activity.participants}
                  </td>


                  <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.volunteers}
                  </td>


                  <td className="px-6 py-4">

                    <span
                      className={`
                        inline-flex
                        px-2.5
                        py-1
                        rounded-full
                        border
                        text-xs
                        font-bold
                        ${statusClass(activity.status)}
                      `}
                    >
                      {activity.status}
                    </span>

                  </td>


                  <td className="px-6 py-4 text-right">

                    <button
                      onClick={() => setSelectedActivity(activity)}
                      className="
                        inline-flex
                        items-center
                        gap-1
                        px-3
                        py-2
                        rounded-lg
                        bg-blue-50
                        text-blue-700
                        text-xs
                        font-semibold
                        hover:bg-blue-600
                        hover:text-white
                        transition
                      "
                    >
                      View
                      <ChevronRight size={14} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {filteredActivities.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">
            No activities found matching your filters.
          </div>
        )}

      </div>


      {/* DETAIL MODAL */}
      {selectedActivity && (

        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl">

            <div className="p-6 border-b border-gray-100 flex items-start justify-between">

              <div>

                <p className="text-xs font-semibold text-blue-600">
                  Activity Details
                </p>

                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {selectedActivity.title}
                </h2>

              </div>

              <button
                onClick={() => setSelectedActivity(null)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <XCircle size={20} className="text-gray-400" />
              </button>

            </div>


            <div className="p-6 space-y-4">

              <DetailRow
                label="Network"
                value={selectedActivity.network}
              />

              <DetailRow
                label="Location"
                value={selectedActivity.location}
              />

              <DetailRow
                label="Activity Type"
                value={selectedActivity.type}
              />

              <DetailRow
                label="Date"
                value={formatDate(selectedActivity.date)}
              />

              <DetailRow
                label="Participants"
                value={selectedActivity.participants}
              />

              <DetailRow
                label="Volunteers"
                value={selectedActivity.volunteers}
              />

              <div>
                <p className="text-xs text-gray-500">
                  Current Status
                </p>

                <span
                  className={`
                    inline-flex mt-1
                    px-2.5 py-1
                    rounded-full border
                    text-xs font-bold
                    ${statusClass(selectedActivity.status)}
                  `}
                >
                  {selectedActivity.status}
                </span>
              </div>

            </div>


            {selectedActivity.status === "Pending" && (

              <div className="p-6 border-t border-gray-100 flex gap-3">

                <button
                  onClick={() => approveActivity(selectedActivity.id)}
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    py-2.5
                    rounded-xl
                    text-sm
                    font-semibold
                  "
                >
                  <CheckCircle2 size={16} />
                  Approve
                </button>

                <button
                  onClick={() => rejectActivity(selectedActivity.id)}
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-red-50
                    hover:bg-red-600
                    text-red-600
                    hover:text-white
                    border
                    border-red-200
                    py-2.5
                    rounded-xl
                    text-sm
                    font-semibold
                  "
                >
                  <XCircle size={16} />
                  Reject
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
};


/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  title,
  value,
  icon: Icon,
  iconClass,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold text-gray-500">
            {title}
          </p>

          <p className="text-2xl font-bold text-gray-900 mt-2">
            {value}
          </p>

        </div>

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconClass}`}
        >
          <Icon size={20} />
        </div>

      </div>

    </div>
  );
};


/* =========================================================
   DETAIL ROW
========================================================= */

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">

      <span className="text-xs text-gray-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-gray-900 text-right">
        {value}
      </span>

    </div>
  );
};


/* =========================================================
   DATE FORMAT
========================================================= */

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-BT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default ActivityMonitoring;
