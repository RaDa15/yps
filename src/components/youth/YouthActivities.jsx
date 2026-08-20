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
  ClipboardList,
} from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "Youth Leadership Workshop",
    type: "Workshop",
    date: "12 Aug 2026",
    time: "09:00 AM - 03:00 PM",
    location: "Thimphu Youth Centre",
    organizer: "Thimphu Youth Led Group Network",
    capacity: 40,
    registered: 32,
    requirements: "Open to registered youth volunteers",
    description:
      "A practical leadership workshop focused on communication, teamwork, decision-making and youth leadership skills.",
    status: "Available",
  },
  {
    id: 2,
    title: "Community Clean-Up Campaign",
    type: "Community Service",
    date: "16 Aug 2026",
    time: "07:00 AM - 11:00 AM",
    location: "Motithang, Thimphu",
    organizer: "Thimphu Youth Centre",
    capacity: 100,
    registered: 68,
    requirements: "Youth volunteers aged 15-30",
    description:
      "Join other youth volunteers in a community clean-up campaign promoting environmental responsibility and civic participation.",
    status: "Available",
  },
  {
    id: 3,
    title: "Digital Literacy Programme",
    type: "Training",
    date: "22 Aug 2026",
    time: "10:00 AM - 01:00 PM",
    location: "Changlimithang Youth Centre",
    organizer: "Youth Digital Initiative",
    capacity: 30,
    registered: 24,
    requirements: "Basic computer knowledge",
    description:
      "Learn essential digital skills including online safety, productivity tools and responsible digital citizenship.",
    status: "Available",
  },
  {
    id: 4,
    title: "Mental Health Awareness Campaign",
    type: "Awareness",
    date: "25 Aug 2026",
    time: "09:30 AM - 12:00 PM",
    location: "Clock Tower Square",
    organizer: "Youth Wellness Network",
    capacity: 60,
    registered: 60,
    requirements: "Open to all registered volunteers",
    description:
      "A youth-led awareness campaign promoting mental wellbeing, peer support and healthy coping strategies.",
    status: "Full",
  },
  {
    id: 5,
    title: "Youth Sports Festival",
    type: "Sports",
    date: "29 Aug 2026",
    time: "08:00 AM - 04:00 PM",
    location: "Changlimithang Stadium",
    organizer: "Bhutan Youth Sports Network",
    capacity: 120,
    registered: 76,
    requirements: "Open to youth volunteers",
    description:
      "A youth sports festival promoting teamwork, healthy lifestyles and community engagement through sports.",
    status: "Available",
  },
  {
    id: 6,
    title: "Environmental Conservation Day",
    type: "Environment",
    date: "05 Sep 2026",
    time: "07:30 AM - 01:00 PM",
    location: "Dochula",
    organizer: "Green Youth Bhutan",
    capacity: 50,
    registered: 18,
    requirements: "Comfortable outdoor clothing required",
    description:
      "Participate in conservation activities focused on environmental protection and sustainable community practices.",
    status: "Available",
  },
];

const ACTIVITY_TYPES = [
  "All Types",
  "Workshop",
  "Community Service",
  "Training",
  "Awareness",
  "Sports",
  "Environment",
];

const YouthActivities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [dateFilter, setDateFilter] = useState("All Dates");
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [registeredActivities, setRegisteredActivities] = useState([1, 3]);

  const locations = [
    "All Locations",
    ...new Set(ACTIVITIES.map((activity) => activity.location)),
  ];

  const filteredActivities = useMemo(() => {
    return ACTIVITIES.filter((activity) => {
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        activity.title.toLowerCase().includes(search) ||
        activity.organizer.toLowerCase().includes(search) ||
        activity.location.toLowerCase().includes(search) ||
        activity.type.toLowerCase().includes(search);

      const matchesType =
        typeFilter === "All Types" || activity.type === typeFilter;

      const matchesLocation =
        locationFilter === "All Locations" ||
        activity.location === locationFilter;

      let matchesDate = true;

      if (dateFilter === "This Month") {
        matchesDate = activity.date.includes("Aug");
      }

      if (dateFilter === "Next Month") {
        matchesDate = activity.date.includes("Sep");
      }

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesDate
      );
    });
  }, [
    searchQuery,
    typeFilter,
    locationFilter,
    dateFilter,
  ]);

  const handleRegister = (activity) => {
    if (activity.status === "Full") {
      return;
    }

    setRegisteredActivities((current) => {
      if (current.includes(activity.id)) {
        return current;
      }

      return [...current, activity.id];
    });

    setSelectedActivity(null);
  };

  const isRegistered = (activityId) => {
    return registeredActivities.includes(activityId);
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
            <ClipboardList size={16} />
            Volunteer Opportunities
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Discover Activities
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Find volunteering opportunities and register for activities
            that match your interests.
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className="px-4 py-2.5 rounded-xl bg-green-50 border border-green-100">

            <p className="text-[10px] font-semibold uppercase text-green-600">
              Registered
            </p>

            <p className="text-lg font-bold text-green-700">
              {registeredActivities.length}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col xl:flex-row gap-3">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              size={17}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search activities, organisers or locations..."
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
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-500/10
              "
            />

          </div>


          {/* Type */}

          <div className="relative">

            <Filter
              size={15}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
              className="
                pl-9
                pr-8
                py-2.5
                rounded-xl
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-700
                outline-none
                focus:border-blue-400
              "
            >

              {ACTIVITY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}

            </select>

          </div>


          {/* Date */}

          <select
            value={dateFilter}
            onChange={(e) =>
              setDateFilter(e.target.value)
            }
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              text-gray-700
              outline-none
            "
          >

            <option>All Dates</option>
            <option>This Month</option>
            <option>Next Month</option>

          </select>


          {/* Location */}

          <select
            value={locationFilter}
            onChange={(e) =>
              setLocationFilter(e.target.value)
            }
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              text-gray-700
              outline-none
              max-w-[220px]
            "
          >

            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}

          </select>

        </div>

      </div>


      {/* =====================================================
          RESULT SUMMARY
      ===================================================== */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-bold text-gray-900">
            Available Activities
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {filteredActivities.length} opportunities found
          </p>

        </div>

      </div>


      {/* =====================================================
          ACTIVITY GRID
      ===================================================== */}

      {filteredActivities.length > 0 ? (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {filteredActivities.map((activity) => {

            const registered = isRegistered(activity.id);

            const spotsLeft =
              activity.capacity - activity.registered;

            const percentage =
              (activity.registered / activity.capacity) * 100;

            return (

              <div
                key={activity.id}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  hover:border-blue-200
                  hover:shadow-lg
                  hover:shadow-blue-500/5
                  transition
                "
              >

                {/* Top */}

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex gap-3">

                      <div
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-blue-50
                          text-blue-600
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                      >
                        <CalendarDays size={20} />
                      </div>

                      <div>

                        <h3 className="text-base font-bold text-gray-900">
                          {activity.title}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          {activity.organizer}
                        </p>

                      </div>

                    </div>


                    <span
                      className={`
                        text-[10px]
                        font-bold
                        px-2.5
                        py-1
                        rounded-full
                        whitespace-nowrap
                        ${
                          activity.status === "Full"
                            ? "bg-red-50 text-red-600"
                            : registered
                            ? "bg-green-50 text-green-700"
                            : "bg-blue-50 text-blue-700"
                        }
                      `}
                    >
                      {registered
                        ? "Registered"
                        : activity.status}
                    </span>

                  </div>


                  {/* Description */}

                  <p className="text-xs text-gray-500 leading-relaxed mt-4">
                    {activity.description}
                  </p>


                  {/* Information */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">

                    <div className="flex items-center gap-2 text-xs text-gray-600">

                      <CalendarDays
                        size={14}
                        className="text-blue-500"
                      />

                      {activity.date}

                    </div>


                    <div className="flex items-center gap-2 text-xs text-gray-600">

                      <Clock3
                        size={14}
                        className="text-violet-500"
                      />

                      {activity.time}

                    </div>


                    <div className="flex items-center gap-2 text-xs text-gray-600">

                      <MapPin
                        size={14}
                        className="text-green-500"
                      />

                      {activity.location}

                    </div>


                    <div className="flex items-center gap-2 text-xs text-gray-600">

                      <Users
                        size={14}
                        className="text-amber-500"
                      />

                      {activity.registered} / {activity.capacity}

                    </div>

                  </div>


                  {/* Tags */}

                  <div className="flex flex-wrap gap-2 mt-4">

                    <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-[10px] font-semibold">
                      {activity.type}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-semibold">
                      {activity.requirements}
                    </span>

                  </div>


                  {/* Capacity */}

                  <div className="mt-5">

                    <div className="flex items-center justify-between mb-1.5">

                      <span className="text-[10px] font-semibold text-gray-500">
                        Registration capacity
                      </span>

                      <span className="text-[10px] font-bold text-gray-700">
                        {spotsLeft > 0
                          ? `${spotsLeft} spots left`
                          : "No spots left"}
                      </span>

                    </div>


                    <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">

                      <div
                        className={`
                          h-full
                          rounded-full
                          ${
                            percentage >= 90
                              ? "bg-red-500"
                              : percentage >= 70
                              ? "bg-amber-500"
                              : "bg-green-500"
                          }
                        `}
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>


                {/* Footer */}

                <div className="border-t border-gray-100 p-4 flex items-center justify-between gap-3">

                  <button
                    onClick={() =>
                      setSelectedActivity(activity)
                    }
                    className="
                      text-xs
                      font-semibold
                      text-gray-600
                      hover:text-blue-600
                      flex
                      items-center
                      gap-1
                    "
                  >
                    View Details
                    <ChevronRight size={14} />
                  </button>


                  {registered ? (

                    <button
                      disabled
                      className="
                        px-4
                        py-2
                        rounded-xl
                        bg-green-50
                        text-green-700
                        text-xs
                        font-bold
                        flex
                        items-center
                        gap-1.5
                      "
                    >
                      <CheckCircle2 size={14} />
                      Registered
                    </button>

                  ) : (

                    <button
                      onClick={() =>
                        handleRegister(activity)
                      }
                      disabled={activity.status === "Full"}
                      className={`
                        px-4
                        py-2
                        rounded-xl
                        text-xs
                        font-bold
                        flex
                        items-center
                        gap-1.5
                        transition
                        ${
                          activity.status === "Full"
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }
                      `}
                    >
                      {activity.status === "Full"
                        ? "Fully Booked"
                        : "Register Now"}

                      {activity.status !== "Full" && (
                        <ChevronRight size={14} />
                      )}

                    </button>

                  )}

                </div>

              </div>

            );
          })}

        </div>

      ) : (

        <div className="bg-white border border-gray-200 rounded-2xl py-16 text-center">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center">
            <Search size={24} />
          </div>

          <h3 className="text-base font-bold text-gray-900 mt-4">
            No activities found
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Try changing your search or filters.
          </p>

          <button
            onClick={() => {
              setSearchQuery("");
              setTypeFilter("All Types");
              setDateFilter("All Dates");
              setLocationFilter("All Locations");
            }}
            className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Clear all filters
          </button>

        </div>

      )}


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">

        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
          <ClipboardList size={17} />
        </div>

        <div>

          <p className="text-sm font-semibold text-gray-900">
            About activity registration
          </p>

          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Register only for activities you can attend. Your
            participation and service hours will be recorded after
            the activity is completed and validated by the responsible
            coordinator.
          </p>

        </div>

      </div>


      {/* =====================================================
          DETAILS MODAL
      ===================================================== */}

      {selectedActivity && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Overlay */}

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          />


          {/* Modal */}

          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Header */}

            <div className="p-6 border-b border-gray-100 flex items-start justify-between">

              <div className="flex gap-3">

                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CalendarDays size={21} />
                </div>

                <div>

                  <h2 className="text-lg font-bold text-gray-900">
                    {selectedActivity.title}
                  </h2>

                  <p className="text-xs text-gray-500 mt-1">
                    {selectedActivity.organizer}
                  </p>

                </div>

              </div>


              <button
                onClick={() =>
                  setSelectedActivity(null)
                }
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-gray-100
                  text-gray-500
                  hover:bg-gray-200
                  flex
                  items-center
                  justify-center
                "
              >
                <X size={16} />
              </button>

            </div>


            {/* Body */}

            <div className="p-6 space-y-5">

              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedActivity.description}
              </p>


              <div className="grid grid-cols-2 gap-3">

                <div className="bg-gray-50 rounded-xl p-3">

                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Date
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {selectedActivity.date}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-3">

                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Time
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {selectedActivity.time}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-3">

                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Location
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {selectedActivity.location}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-3">

                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Capacity
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {selectedActivity.registered} /{" "}
                    {selectedActivity.capacity}
                  </p>

                </div>

              </div>


              <div>

                <p className="text-xs font-bold text-gray-700">
                  Requirements
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {selectedActivity.requirements}
                </p>

              </div>

            </div>


            {/* Footer */}

            <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">

              <button
                onClick={() =>
                  setSelectedActivity(null)
                }
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-white
                  border
                  border-gray-200
                  text-gray-600
                  text-xs
                  font-semibold
                "
              >
                Close
              </button>


              {isRegistered(selectedActivity.id) ? (

                <button
                  disabled
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-green-50
                    text-green-700
                    text-xs
                    font-bold
                    flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle2 size={14} />
                  Already Registered
                </button>

              ) : (

                <button
                  onClick={() =>
                    handleRegister(selectedActivity)
                  }
                  disabled={
                    selectedActivity.status === "Full"
                  }
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-xs
                    font-bold
                    transition
                  "
                >
                  {selectedActivity.status === "Full"
                    ? "Fully Booked"
                    : "Register for Activity"}
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default YouthActivities;