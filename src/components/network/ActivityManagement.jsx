import { useMemo, useState } from "react";
import {
  CalendarDays,
  Plus,
  Search,
  MapPin,
  Users,
  Clock3,
  CheckCircle2,
  CircleAlert,
  Eye,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

const ActivityManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const [activities, setActivities] = useState([
    {
      id: "ACT-001",
      title: "Youth Leadership Workshop",
      category: "Training",
      date: "12 Aug 2026",
      time: "09:00 AM - 04:00 PM",
      location: "Thimphu",
      volunteers: 32,
      capacity: 40,
      status: "Upcoming",
      description:
        "Leadership and peer education training for Y-PEER volunteers.",
    },
    {
      id: "ACT-002",
      title: "Community Outreach Programme",
      category: "Community Service",
      date: "18 Aug 2026",
      time: "09:00 AM - 01:00 PM",
      location: "Changzamtog",
      volunteers: 24,
      capacity: 30,
      status: "Upcoming",
      description:
        "Community awareness and youth engagement activity.",
    },
    {
      id: "ACT-003",
      title: "Peer Education Session",
      category: "Education",
      date: "25 Aug 2026",
      time: "10:00 AM - 02:00 PM",
      location: "Motithang",
      volunteers: 18,
      capacity: 25,
      status: "Upcoming",
      description:
        "Peer-led educational session for young people.",
    },
    {
      id: "ACT-004",
      title: "Mental Health Awareness Campaign",
      category: "Awareness",
      date: "28 Jul 2026",
      time: "10:00 AM - 03:00 PM",
      location: "Paro",
      volunteers: 27,
      capacity: 30,
      status: "Completed",
      description:
        "Youth mental health awareness and support campaign.",
    },
    {
      id: "ACT-005",
      title: "Volunteer Orientation",
      category: "Orientation",
      date: "15 Jul 2026",
      time: "09:30 AM - 12:00 PM",
      location: "Thimphu",
      volunteers: 21,
      capacity: 25,
      status: "Completed",
      description:
        "Orientation session for newly approved volunteers.",
    },
    {
      id: "ACT-006",
      title: "Environmental Clean-up",
      category: "Community Service",
      date: "05 Aug 2026",
      time: "08:00 AM - 12:00 PM",
      location: "Babesa",
      volunteers: 16,
      capacity: 20,
      status: "Pending Review",
      description:
        "Community environmental clean-up activity submitted for review.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    category: "Training",
    date: "",
    time: "",
    location: "",
    capacity: "",
    description: "",
  });

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        activity.title.toLowerCase().includes(query) ||
        activity.category.toLowerCase().includes(query) ||
        activity.location.toLowerCase().includes(query) ||
        activity.id.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        activity.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [activities, searchQuery, statusFilter]);

  const upcomingCount = activities.filter(
    (activity) => activity.status === "Upcoming"
  ).length;

  const completedCount = activities.filter(
    (activity) => activity.status === "Completed"
  ).length;

  const pendingCount = activities.filter(
    (activity) => activity.status === "Pending Review"
  ).length;

  const totalParticipants = activities.reduce(
    (total, activity) => total + activity.volunteers,
    0
  );

  const getStatusStyle = (status) => {
    if (status === "Upcoming") {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }

    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    return "bg-amber-50 text-amber-700 border-amber-200";
  };

  const handleCreateActivity = (event) => {
    event.preventDefault();

    const newActivity = {
      id: `ACT-${String(activities.length + 1).padStart(3, "0")}`,
      title: form.title,
      category: form.category,
      date: form.date,
      time: form.time,
      location: form.location,
      volunteers: 0,
      capacity: Number(form.capacity) || 0,
      status: "Upcoming",
      description: form.description,
    };

    setActivities((current) => [newActivity, ...current]);

    setForm({
      title: "",
      category: "Training",
      date: "",
      time: "",
      location: "",
      capacity: "",
      description: "",
    });

    setShowCreateModal(false);
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            Network Operations
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
            Activity Management
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Create, monitor and manage activities conducted within your
            Youth Led Group network.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          Create Activity
        </button>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <CalendarDays className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Upcoming Activities
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {upcomingCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Completed Activities
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {completedCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <CircleAlert className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Pending Review
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {pendingCount}
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Participation
          </p>

          <p className="text-2xl font-extrabold text-gray-900 mt-1">
            {totalParticipants}
          </p>

        </div>

      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search activities, category, location or ID..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Pending Review">Pending Review</option>
          </select>

        </div>

      </div>

      {/* ACTIVITY LIST */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-100">

          <h2 className="font-bold text-gray-900">
            Network Activities
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {filteredActivities.length} activities displayed
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          {filteredActivities.map((activity) => (

            <div
              key={activity.id}
              className="p-6 hover:bg-gray-50/70 transition"
            >

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

                {/* ACTIVITY INFORMATION */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="w-5 h-5" />
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-sm font-bold text-gray-900">
                        {activity.title}
                      </h3>

                      <span
                        className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusStyle(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>

                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {activity.id} • {activity.category}
                    </p>

                    <p className="text-xs text-gray-500 mt-3 max-w-2xl">
                      {activity.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-3">

                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {activity.date}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock3 className="w-3.5 h-3.5" />
                        {activity.time}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {activity.location}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Users className="w-3.5 h-3.5" />
                        {activity.volunteers}/{activity.capacity}
                      </span>

                    </div>

                  </div>

                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-2 xl:flex-shrink-0">

                  <button
                    onClick={() => setSelectedActivity(activity)}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition"
                    title="View activity"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition"
                    title="Edit activity"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>

                  <button
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition"
                    title="Delete activity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredActivities.length === 0 && (
          <div className="py-14 text-center">

            <CalendarDays className="w-10 h-10 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No activities found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your search or status filter.
            </p>

          </div>
        )}

      </div>

      {/* CREATE ACTIVITY MODAL */}
      {showCreateModal && (

        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">

              <div>
                <p className="text-xs font-bold text-blue-600 uppercase">
                  Network Activity
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  Create New Activity
                </h2>
              </div>

              <button
                onClick={() => setShowCreateModal(false)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <form
              onSubmit={handleCreateActivity}
              className="p-6 space-y-5"
            >

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Activity Name
                </label>

                <input
                  required
                  value={form.title}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      title: event.target.value,
                    })
                  }
                  placeholder="e.g. Youth Leadership Workshop"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Category
                  </label>

                  <select
                    value={form.category}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        category: event.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Training</option>
                    <option>Community Service</option>
                    <option>Education</option>
                    <option>Awareness</option>
                    <option>Orientation</option>
                    <option>Campaign</option>
                  </select>

                </div>

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Volunteer Capacity
                  </label>

                  <input
                    required
                    type="number"
                    min="1"
                    value={form.capacity}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        capacity: event.target.value,
                      })
                    }
                    placeholder="40"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Date
                  </label>

                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        date: event.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Time
                  </label>

                  <input
                    required
                    type="text"
                    value={form.time}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        time: event.target.value,
                      })
                    }
                    placeholder="09:00 AM - 04:00 PM"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Location
                </label>

                <input
                  required
                  value={form.location}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      location: event.target.value,
                    })
                  }
                  placeholder="Activity location"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  value={form.description}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      description: event.target.value,
                    })
                  }
                  placeholder="Describe the purpose and expected outcomes..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition"
                >
                  Create Activity
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* VIEW ACTIVITY MODAL */}
      {selectedActivity && (

        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl">

            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>
                <p className="text-xs font-bold text-blue-600 uppercase">
                  Activity Details
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  {selectedActivity.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedActivity(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <div className="p-6 space-y-5">

              <div className="flex items-center justify-between">

                <span
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold ${getStatusStyle(
                    selectedActivity.status
                  )}`}
                >
                  {selectedActivity.status}
                </span>

                <span className="text-xs font-semibold text-gray-400">
                  {selectedActivity.id}
                </span>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400">
                    Date
                  </p>

                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {selectedActivity.date}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400">
                    Time
                  </p>

                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {selectedActivity.time}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {selectedActivity.location}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400">
                    Participation
                  </p>

                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {selectedActivity.volunteers} /{" "}
                    {selectedActivity.capacity}
                  </p>
                </div>

              </div>

              <div>

                <p className="text-xs font-bold text-gray-500 uppercase">
                  Description
                </p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {selectedActivity.description}
                </p>

              </div>

              <div className="flex justify-end">

                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200 transition"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ActivityManagement;
