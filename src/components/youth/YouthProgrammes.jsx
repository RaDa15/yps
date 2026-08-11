import {
  CalendarDays,
  MapPin,
  Users,
  Search,
  Filter,
  Clock3,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  X,
} from "lucide-react";

import { useMemo, useState } from "react";

const PROGRAMMES = [
  {
    id: 1,
    title: "Youth Leadership Development Programme",
    category: "Leadership",
    description:
      "Build leadership, communication and decision-making skills through practical workshops and youth-led activities.",
    date: "15 August 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Thimphu Youth Centre",
    participants: 32,
    capacity: 50,
    status: "Open",
    featured: true,
  },
  {
    id: 2,
    title: "Community Volunteer Service Programme",
    category: "Volunteering",
    description:
      "Participate in community service activities and contribute your time and skills to local communities.",
    date: "22 August 2026",
    time: "8:30 AM - 3:30 PM",
    location: "Thimphu",
    participants: 41,
    capacity: 60,
    status: "Open",
    featured: false,
  },
  {
    id: 3,
    title: "Digital Skills for Youth",
    category: "Skills Development",
    description:
      "Learn practical digital skills including productivity tools, online collaboration and digital safety.",
    date: "28 August 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Youth Innovation Lab",
    participants: 28,
    capacity: 30,
    status: "Almost Full",
    featured: true,
  },
  {
    id: 4,
    title: "Environmental Awareness Campaign",
    category: "Environment",
    description:
      "Join youth volunteers in environmental awareness, conservation and community clean-up activities.",
    date: "5 September 2026",
    time: "8:00 AM - 2:00 PM",
    location: "Paro",
    participants: 22,
    capacity: 50,
    status: "Open",
    featured: false,
  },
  {
    id: 5,
    title: "Youth Mental Wellbeing Workshop",
    category: "Wellbeing",
    description:
      "An interactive programme focused on emotional wellbeing, resilience and healthy lifestyle practices.",
    date: "12 September 2026",
    time: "9:30 AM - 1:00 PM",
    location: "Mongar Youth Centre",
    participants: 35,
    capacity: 40,
    status: "Open",
    featured: false,
  },
  {
    id: 6,
    title: "National Youth Volunteer Summit",
    category: "Leadership",
    description:
      "Connect with youth volunteers from across Bhutan and participate in leadership and networking sessions.",
    date: "20 September 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Thimphu",
    participants: 180,
    capacity: 200,
    status: "Open",
    featured: true,
  },
];

const CATEGORIES = [
  "All",
  "Leadership",
  "Volunteering",
  "Skills Development",
  "Environment",
  "Wellbeing",
];

const YouthProgrammes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [registered, setRegistered] = useState([]);

  const filteredProgrammes = useMemo(() => {
    return PROGRAMMES.filter((programme) => {
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        programme.title.toLowerCase().includes(search) ||
        programme.description.toLowerCase().includes(search) ||
        programme.location.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" || programme.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  const handleRegister = (id) => {
    if (!registered.includes(id)) {
      setRegistered((prev) => [...prev, id]);
    }
  };

  const isRegistered = (id) => registered.includes(id);

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-600">
            <CalendarDays size={16} />
            Youth Programmes
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Programmes & Opportunities
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Discover programmes, workshops and opportunities that match your
            interests and help you build your experience.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-xs font-medium text-blue-600">
            Available Programmes
          </p>

          <p className="text-xl font-bold text-blue-700">
            {PROGRAMMES.length}
          </p>
        </div>

      </div>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <div className="rounded-2xl border border-gray-200 bg-white p-4">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes..."
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                py-3
                pl-10
                pr-4
                text-sm
                outline-none
                transition
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-500/10
              "
            />

          </div>

          {/* Category */}

          <div className="relative">

            <Filter
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                py-3
                pl-9
                pr-8
                text-sm
                text-gray-700
                outline-none
                focus:border-blue-400
              "
            >
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      {/* =====================================================
          PROGRAMME LIST
      ===================================================== */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Available Programmes
            </h2>

            <p className="text-sm text-gray-500">
              {filteredProgrammes.length} programme
              {filteredProgrammes.length !== 1 ? "s" : ""} found
            </p>
          </div>

        </div>

        {filteredProgrammes.length === 0 ? (

          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">

            <CalendarDays
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-base font-semibold text-gray-900">
              No programmes found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or category filter.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

            {filteredProgrammes.map((programme) => {

              const percentage =
                (programme.participants / programme.capacity) * 100;

              return (

                <div
                  key={programme.id}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    transition
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >

                  {/* Top */}

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        {programme.featured && (
                          <span
                            className="
                              mb-3
                              inline-flex
                              items-center
                              gap-1
                              rounded-full
                              bg-amber-50
                              px-2.5
                              py-1
                              text-[11px]
                              font-semibold
                              text-amber-700
                            "
                          >
                            <Bookmark size={11} />
                            Featured
                          </span>
                        )}

                        <h3 className="text-lg font-bold text-gray-900">
                          {programme.title}
                        </h3>

                      </div>

                      <span
                        className={`
                          shrink-0
                          rounded-full
                          px-2.5
                          py-1
                          text-[11px]
                          font-semibold
                          ${
                            programme.status === "Almost Full"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-emerald-50 text-emerald-700"
                          }
                        `}
                      >
                        {programme.status}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {programme.description}
                    </p>

                    {/* Details */}

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarDays
                          size={16}
                          className="text-blue-500"
                        />
                        {programme.date}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock3
                          size={16}
                          className="text-violet-500"
                        />
                        {programme.time}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin
                          size={16}
                          className="text-rose-500"
                        />
                        {programme.location}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users
                          size={16}
                          className="text-emerald-500"
                        />
                        {programme.participants}/{programme.capacity} registered
                      </div>

                    </div>

                    {/* Capacity */}

                    <div className="mt-5">

                      <div className="mb-1.5 flex items-center justify-between">

                        <span className="text-xs font-medium text-gray-500">
                          Registration capacity
                        </span>

                        <span className="text-xs font-semibold text-gray-700">
                          {Math.round(percentage)}%
                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">

                        <div
                          className="h-full rounded-full bg-blue-500 transition-all"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                  {/* Footer */}

                  <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-6 py-4">

                    <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {programme.category}
                    </span>

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => setSelectedProgramme(programme)}
                        className="
                          rounded-xl
                          border
                          border-gray-200
                          bg-white
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-gray-700
                          transition
                          hover:border-blue-300
                          hover:text-blue-600
                        "
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => handleRegister(programme.id)}
                        disabled={isRegistered(programme.id)}
                        className={`
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          transition
                          ${
                            isRegistered(programme.id)
                              ? "cursor-default bg-emerald-100 text-emerald-700"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }
                        `}
                      >

                        {isRegistered(programme.id) ? (
                          <>
                            <CheckCircle2 size={14} />
                            Registered
                          </>
                        ) : (
                          <>
                            Register
                            <ArrowRight size={14} />
                          </>
                        )}

                      </button>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </div>

      {/* =====================================================
          DETAILS MODAL
      ===================================================== */}

      {selectedProgramme && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            p-4
          "
          onClick={() => setSelectedProgramme(null)}
        >

          <div
            className="
              w-full
              max-w-xl
              rounded-2xl
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-start justify-between border-b border-gray-100 p-6">

              <div>

                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {selectedProgramme.category}
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  {selectedProgramme.title}
                </h2>

              </div>

              <button
                onClick={() => setSelectedProgramme(null)}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={18} />
              </button>

            </div>

            <div className="space-y-5 p-6">

              <p className="text-sm leading-6 text-gray-600">
                {selectedProgramme.description}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-gray-50 p-4">
                  <CalendarDays size={17} className="text-blue-600" />
                  <p className="mt-2 text-xs text-gray-400">
                    Date
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedProgramme.date}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <Clock3 size={17} className="text-violet-600" />
                  <p className="mt-2 text-xs text-gray-400">
                    Time
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedProgramme.time}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <MapPin size={17} className="text-rose-600" />
                  <p className="mt-2 text-xs text-gray-400">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedProgramme.location}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <Users size={17} className="text-emerald-600" />
                  <p className="mt-2 text-xs text-gray-400">
                    Participants
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedProgramme.participants} /{" "}
                    {selectedProgramme.capacity}
                  </p>
                </div>

              </div>

              <button
                onClick={() => {
                  handleRegister(selectedProgramme.id);
                  setSelectedProgramme(null);
                }}
                disabled={isRegistered(selectedProgramme.id)}
                className={`
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  py-3
                  text-sm
                  font-semibold
                  ${
                    isRegistered(selectedProgramme.id)
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                `}
              >
                {isRegistered(selectedProgramme.id) ? (
                  <>
                    <CheckCircle2 size={17} />
                    You are registered
                  </>
                ) : (
                  <>
                    Register for Programme
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default YouthProgrammes;
