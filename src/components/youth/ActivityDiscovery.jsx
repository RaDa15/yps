import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  ChevronRight,
  CheckCircle2,
  X,
  SlidersHorizontal,
  Bookmark,
} from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "Youth Community Cleanup",
    organizer: "Thimphu Youth Centre",
    type: "Community Service",
    date: "2026-08-15",
    time: "08:30 AM - 12:30 PM",
    location: "Thimphu",
    hours: 4,
    capacity: 50,
    registered: 36,
    description:
      "Join fellow youth volunteers for a community cleanup initiative focused on maintaining public spaces.",
    requirements: [
      "Age 15-30",
      "Comfortable outdoor clothing",
      "Bring water bottle",
    ],
    registeredByUser: true,
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    organizer: "National Youth Development",
    type: "Leadership",
    date: "2026-08-22",
    time: "09:00 AM - 04:00 PM",
    location: "Paro",
    hours: 7,
    capacity: 40,
    registered: 28,
    description:
      "A practical leadership workshop designed to develop communication, teamwork and decision-making skills.",
    requirements: [
      "Age 16-30",
      "Interest in youth leadership",
    ],
    registeredByUser: false,
  },
  {
    id: 3,
    title: "Digital Literacy Camp",
    organizer: "Youth Centre Network",
    type: "Education",
    date: "2026-08-25",
    time: "10:00 AM - 03:00 PM",
    location: "Punakha",
    hours: 5,
    capacity: 35,
    registered: 19,
    description:
      "Support young participants in developing essential digital literacy and online safety skills.",
    requirements: [
      "Basic computer knowledge",
      "Age 16-30",
    ],
    registeredByUser: false,
  },
  {
    id: 4,
    title: "Blood Donation Awareness Drive",
    organizer: "Bhutan Youth Volunteers",
    type: "Health",
    date: "2026-09-03",
    time: "09:00 AM - 01:00 PM",
    location: "Thimphu",
    hours: 4,
    capacity: 60,
    registered: 42,
    description:
      "Assist with a national awareness campaign promoting voluntary blood donation among young people.",
    requirements: [
      "Age 18-30",
      "Interest in health awareness",
    ],
    registeredByUser: false,
  },
  {
    id: 5,
    title: "Environmental Awareness Campaign",
    organizer: "Green Youth Bhutan",
    type: "Environment",
    date: "2026-09-10",
    time: "08:00 AM - 02:00 PM",
    location: "Bumthang",
    hours: 6,
    capacity: 45,
    registered: 31,
    description:
      "Participate in an environmental awareness campaign and community education programme.",
    requirements: [
      "Age 15-30",
      "Interest in environmental activities",
    ],
    registeredByUser: false,
  },
];

const ACTIVITY_TYPES = [
  "All Types",
  "Community Service",
  "Leadership",
  "Education",
  "Health",
  "Environment",
];

const LOCATIONS = [
  "All Locations",
  "Thimphu",
  "Paro",
  "Punakha",
  "Bumthang",
];

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ActivityDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [dateFilter, setDateFilter] = useState("All Dates");
  const [availabilityOnly, setAvailabilityOnly] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activities, setActivities] = useState(ACTIVITIES);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        activity.title.toLowerCase().includes(search) ||
        activity.organizer.toLowerCase().includes(search) ||
        activity.location.toLowerCase().includes(search) ||
        activity.type.toLowerCase().includes(search);

      const matchesType =
        typeFilter === "All Types" ||
        activity.type === typeFilter;

      const matchesLocation =
        locationFilter === "All Locations" ||
        activity.location === locationFilter;

      const today = new Date("2026-08-08");
      const activityDate = new Date(activity.date);

      let matchesDate = true;

      if (dateFilter === "This Week") {
        const weekEnd = new Date(today);
        weekEnd.setDate(today.getDate() + 7);

        matchesDate =
          activityDate >= today &&
          activityDate <= weekEnd;
      }

      if (dateFilter === "This Month") {
        matchesDate =
          activityDate.getMonth() === today.getMonth() &&
          activityDate.getFullYear() === today.getFullYear();
      }

      const available =
        activity.registered < activity.capacity;

      const matchesAvailability =
        !availabilityOnly || available;

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesDate &&
        matchesAvailability
      );
    });
  }, [
    activities,
    searchQuery,
    typeFilter,
    locationFilter,
    dateFilter,
    availabilityOnly,
  ]);

  const handleRegister = (activityId) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === activityId
          ? {
              ...activity,
              registered: activity.registered + 1,
              registeredByUser: true,
            }
          : activity
      )
    );

    setSelectedActivity((current) =>
      current
        ? {
            ...current,
            registered: current.registered + 1,
            registeredByUser: true,
          }
        : current
    );
  };

  const handleCancelRegistration = (activityId) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === activityId
          ? {
              ...activity,
              registered: Math.max(0, activity.registered - 1),
              registeredByUser: false,
            }
          : activity
      )
    );

    setSelectedActivity((current) =>
      current
        ? {
            ...current,
            registered: Math.max(0, current.registered - 1),
            registeredByUser: false,
          }
        : current
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("All Types");
    setLocationFilter("All Locations");
    setDateFilter("All Dates");
    setAvailabilityOnly(false);
  };

  return (
    <div className="space-y-6">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-2 text-blue-600">
            <Bookmark size={16} />

            <span className="text-sm font-semibold">
              Volunteer Activities
            </span>
          </div>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Discover Activities
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Find volunteer opportunities that match your interests,
            location and availability.
          </p>

        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

          <p className="text-xs text-blue-600">
            Available Opportunities
          </p>

          <p className="text-xl font-bold text-blue-700">
            {filteredActivities.length}
          </p>

        </div>

      </div>


      {/* =========================
          SEARCH + FILTERS
      ========================= */}

      <div className="rounded-2xl border border-gray-200 bg-white p-4">

        <div className="flex items-center gap-2 mb-4">

          <SlidersHorizontal
            size={17}
            className="text-gray-500"
          />

          <h2 className="text-sm font-bold text-gray-900">
            Find an Activity
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">

          {/* Search */}

          <div className="relative xl:col-span-2">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search activities..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10"
            />

          </div>


          {/* Type */}

          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value)
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400"
          >

            {ACTIVITY_TYPES.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}

          </select>


          {/* Location */}

          <select
            value={locationFilter}
            onChange={(e) =>
              setLocationFilter(e.target.value)
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400"
          >

            {LOCATIONS.map((location) => (
              <option
                key={location}
                value={location}
              >
                {location}
              </option>
            ))}

          </select>


          {/* Date */}

          <select
            value={dateFilter}
            onChange={(e) =>
              setDateFilter(e.target.value)
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400"
          >

            <option value="All Dates">
              All Dates
            </option>

            <option value="This Week">
              This Week
            </option>

            <option value="This Month">
              This Month
            </option>

          </select>

        </div>


        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              checked={availabilityOnly}
              onChange={(e) =>
                setAvailabilityOnly(e.target.checked)
              }
              className="h-4 w-4 rounded border-gray-300 text-blue-600"
            />

            Show only activities with available seats

          </label>


          <button
            onClick={clearFilters}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            <Filter size={14} />

            Clear Filters
          </button>

        </div>

      </div>


      {/* =========================
          ACTIVITY LIST
      ========================= */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Available Activities
            </h2>

            <p className="text-sm text-gray-500">
              Browse and register for upcoming opportunities.
            </p>

          </div>

          <span className="text-xs font-semibold text-gray-400">
            {filteredActivities.length} results
          </span>

        </div>


        {filteredActivities.length > 0 ? (

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

            {filteredActivities.map((activity) => {

              const available =
                activity.registered < activity.capacity;

              const remaining =
                activity.capacity - activity.registered;

              return (
                <div
                  key={activity.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >

                  {/* Top */}

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                        {activity.type}
                      </span>

                      <h3 className="mt-3 text-base font-bold text-gray-900">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Organized by {activity.organizer}
                      </p>

                    </div>

                    {activity.registeredByUser && (
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                        <CheckCircle2 size={12} />
                        Registered
                      </span>
                    )}

                  </div>


                  {/* Details */}

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="flex items-center gap-2">

                      <CalendarDays
                        size={15}
                        className="text-blue-500"
                      />

                      <span className="text-xs text-gray-600">
                        {formatDate(activity.date)}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock3
                        size={15}
                        className="text-purple-500"
                      />

                      <span className="text-xs text-gray-600">
                        {activity.hours} volunteer hours
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <MapPin
                        size={15}
                        className="text-red-500"
                      />

                      <span className="text-xs text-gray-600">
                        {activity.location}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Users
                        size={15}
                        className="text-green-500"
                      />

                      <span className="text-xs text-gray-600">
                        {remaining} seats available
                      </span>

                    </div>

                  </div>


                  {/* Capacity */}

                  <div className="mt-5">

                    <div className="mb-1 flex justify-between">

                      <span className="text-[11px] text-gray-400">
                        Registration
                      </span>

                      <span className="text-[11px] font-semibold text-gray-500">
                        {activity.registered}/{activity.capacity}
                      </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">

                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{
                          width: `${Math.min(
                            100,
                            (activity.registered /
                              activity.capacity) *
                              100
                          )}%`,
                        }}
                      />

                    </div>

                  </div>


                  {/* Actions */}

                  <div className="mt-5 flex items-center gap-2">

                    <button
                      onClick={() =>
                        setSelectedActivity(activity)
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                    >

                      View Details

                      <ChevronRight size={14} />

                    </button>


                    {activity.registeredByUser ? (

                      <button
                        onClick={() =>
                          handleCancelRegistration(activity.id)
                        }
                        className="rounded-xl bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                      >
                        Cancel
                      </button>

                    ) : (

                      <button
                        disabled={!available}
                        onClick={() =>
                          handleRegister(activity.id)
                        }
                        className={`rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition ${
                          available
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "cursor-not-allowed bg-gray-300"
                        }`}
                      >
                        {available
                          ? "Register"
                          : "Full"}
                      </button>

                    )}

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <Search size={24} />
            </div>

            <h3 className="mt-4 text-sm font-bold text-gray-900">
              No activities found
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
            >
              Reset Filters
            </button>

          </div>

        )}

      </div>


      {/* =========================
          ACTIVITY DETAILS MODAL
      ========================= */}

      {selectedActivity && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            {/* Modal Header */}

            <div className="flex items-start justify-between border-b border-gray-100 p-6">

              <div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {selectedActivity.type}
                </span>

                <h2 className="mt-3 text-xl font-bold text-gray-900">
                  {selectedActivity.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Organized by {selectedActivity.organizer}
                </p>

              </div>

              <button
                onClick={() => setSelectedActivity(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200"
              >
                <X size={18} />
              </button>

            </div>


            {/* Modal Content */}

            <div className="space-y-6 p-6">

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="rounded-xl bg-gray-50 p-4">

                  <CalendarDays
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Date
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {formatDate(selectedActivity.date)}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4">

                  <Clock3
                    size={18}
                    className="text-purple-600"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Time
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {selectedActivity.time}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4">

                  <MapPin
                    size={18}
                    className="text-red-600"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Location
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {selectedActivity.location}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4">

                  <Users
                    size={18}
                    className="text-green-600"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Availability
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {selectedActivity.capacity -
                      selectedActivity.registered}{" "}
                    seats remaining
                  </p>

                </div>

              </div>


              <div>

                <h3 className="text-sm font-bold text-gray-900">
                  About this activity
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {selectedActivity.description}
                </p>

              </div>


              <div>

                <h3 className="text-sm font-bold text-gray-900">
                  Volunteer Requirements
                </h3>

                <ul className="mt-3 space-y-2">

                  {selectedActivity.requirements.map(
                    (requirement) => (
                      <li
                        key={requirement}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >

                        <CheckCircle2
                          size={15}
                          className="text-green-500"
                        />

                        {requirement}

                      </li>
                    )
                  )}

                </ul>

              </div>


              <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">

                <div>

                  <p className="text-xs text-blue-600">
                    Volunteer Contribution
                  </p>

                  <p className="text-lg font-bold text-blue-800">
                    {selectedActivity.hours} hours
                  </p>

                </div>

                <Clock3
                  size={25}
                  className="text-blue-500"
                />

              </div>

            </div>


            {/* Modal Footer */}

            <div className="flex gap-3 border-t border-gray-100 p-6">

              <button
                onClick={() => setSelectedActivity(null)}
                className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>


              {selectedActivity.registeredByUser ? (

                <button
                  onClick={() =>
                    handleCancelRegistration(
                      selectedActivity.id
                    )
                  }
                  className="flex-1 rounded-xl bg-red-50 py-3 text-sm font-semibold text-red-600 hover:bg-red-100"
                >
                  Cancel Registration
                </button>

              ) : (

                <button
                  disabled={
                    selectedActivity.registered >=
                    selectedActivity.capacity
                  }
                  onClick={() =>
                    handleRegister(selectedActivity.id)
                  }
                  className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Register for Activity
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ActivityDiscovery;
