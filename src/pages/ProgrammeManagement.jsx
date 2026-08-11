import { useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Users,
  Clock3,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Pencil,
  CheckCircle2,
  CircleAlert,
  XCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const PROGRAMMES = [
  {
    id: 1,
    title: "Youth Leadership Development Programme",
    category: "Leadership",
    status: "Active",
    startDate: "05 Aug 2026",
    endDate: "28 Aug 2026",
    participants: 42,
    capacity: 50,
    facilitator: "Youth Centre Team",
    location: "Thimphu Youth Centre",
  },
  {
    id: 2,
    title: "Digital Skills for Youth",
    category: "Digital Skills",
    status: "Upcoming",
    startDate: "15 Aug 2026",
    endDate: "30 Aug 2026",
    participants: 28,
    capacity: 40,
    facilitator: "ICT Training Team",
    location: "Computer Lab",
  },
  {
    id: 3,
    title: "Mental Wellbeing & Life Skills",
    category: "Wellbeing",
    status: "Active",
    startDate: "08 Aug 2026",
    endDate: "22 Aug 2026",
    participants: 35,
    capacity: 40,
    facilitator: "Counselling Team",
    location: "Multipurpose Hall",
  },
  {
    id: 4,
    title: "Community Volunteer Orientation",
    category: "Volunteering",
    status: "Completed",
    startDate: "20 Jul 2026",
    endDate: "25 Jul 2026",
    participants: 31,
    capacity: 35,
    facilitator: "Volunteer Coordinator",
    location: "Youth Centre Hall",
  },
  {
    id: 5,
    title: "Creative Arts & Expression",
    category: "Arts & Culture",
    status: "Active",
    startDate: "10 Aug 2026",
    endDate: "24 Aug 2026",
    participants: 24,
    capacity: 30,
    facilitator: "Arts Facilitator",
    location: "Activity Room",
  },
];

const SUMMARY = [
  {
    label: "Total Programmes",
    value: "34",
    description: "This financial year",
    icon: BookOpen,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    label: "Active Programmes",
    value: "12",
    description: "Currently running",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    label: "Upcoming",
    value: "8",
    description: "Scheduled programmes",
    icon: CalendarDays,
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    label: "Participants",
    value: "486",
    description: "Current participation",
    icon: Users,
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
];

const STATUS_STYLES = {
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Upcoming: "bg-blue-50 text-blue-700 border-blue-200",
  Completed: "bg-gray-100 text-gray-600 border-gray-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
};

const ProgrammeManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredProgrammes = useMemo(() => {
    return PROGRAMMES.filter((programme) => {
      const matchesSearch =
        programme.title.toLowerCase().includes(search.toLowerCase()) ||
        programme.category.toLowerCase().includes(search.toLowerCase()) ||
        programme.facilitator.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || programme.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All" ||
        programme.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [search, statusFilter, categoryFilter]);

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <BookOpen size={16} />
            Programme Management
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Youth Centre Programmes
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Create, monitor and manage programmes and activities conducted
            by your youth centre.
          </p>
        </div>

        <button
          className="
            flex items-center justify-center gap-2
            px-5 py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            text-sm
            shadow-sm
            hover:bg-blue-700
            transition
          "
        >
          <Plus size={18} />
          Create Programme
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {SUMMARY.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-5
                hover:shadow-sm
                transition
              "
            >
              <div
                className={`
                  w-11 h-11
                  rounded-xl
                  ${item.bg}
                  ${item.color}
                  flex items-center justify-center
                  mb-4
                `}
              >
                <Icon size={21} />
              </div>

              <p className="text-xs text-gray-500">
                {item.label}
              </p>

              <div className="flex items-end justify-between mt-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.value}
                </h2>

                <ArrowUpRight
                  size={16}
                  className={item.color}
                />
              </div>

              <p className="text-xs text-gray-400 mt-1">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <button
          className="
            bg-blue-50
            border border-blue-100
            rounded-2xl
            p-5
            text-left
            hover:bg-blue-100
            transition
          "
        >
          <Plus className="text-blue-600 mb-3" size={22} />

          <h3 className="font-semibold text-gray-900">
            Create New Programme
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Set up a new programme or centre activity.
          </p>
        </button>

        <button
          className="
            bg-emerald-50
            border border-emerald-100
            rounded-2xl
            p-5
            text-left
            hover:bg-emerald-100
            transition
          "
        >
          <CalendarDays
            className="text-emerald-600 mb-3"
            size={22}
          />

          <h3 className="font-semibold text-gray-900">
            Programme Calendar
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            View upcoming activities and scheduled events.
          </p>
        </button>

        <button
          className="
            bg-violet-50
            border border-violet-100
            rounded-2xl
            p-5
            text-left
            hover:bg-violet-100
            transition
          "
        >
          <Users
            className="text-violet-600 mb-3"
            size={22}
          />

          <h3 className="font-semibold text-gray-900">
            Participation
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Review youth participation and programme outcomes.
          </p>
        </button>

      </div>

      {/* PROGRAMME TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        {/* TABLE HEADER */}
        <div className="p-6 border-b border-gray-200">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Programme Register
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                All programmes managed by your youth centre.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">

              {/* SEARCH */}
              <div className="relative">
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search programmes..."
                  className="
                    w-full sm:w-64
                    pl-10 pr-4 py-2.5
                    border border-gray-200
                    rounded-xl
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />
              </div>

              {/* STATUS */}
              <div className="relative">
                <Filter
                  size={16}
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="
                    appearance-none
                    pl-9 pr-8 py-2.5
                    border border-gray-200
                    rounded-xl
                    text-sm
                    bg-white
                    outline-none
                  "
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              {/* CATEGORY */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="
                  px-4 py-2.5
                  border border-gray-200
                  rounded-xl
                  text-sm
                  bg-white
                  outline-none
                "
              >
                <option value="All">All Categories</option>
                <option value="Leadership">Leadership</option>
                <option value="Digital Skills">Digital Skills</option>
                <option value="Wellbeing">Wellbeing</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Arts & Culture">Arts & Culture</option>
              </select>

            </div>

          </div>

        </div>

        {/* DESKTOP TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/70">

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500">
                  Programme
                </th>

                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">
                  Schedule
                </th>

                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">
                  Participation
                </th>

                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">
                  Facilitator
                </th>

                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredProgrammes.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-12 text-gray-500"
                  >
                    No programmes found.
                  </td>
                </tr>
              ) : (
                filteredProgrammes.map((programme) => {

                  const percentage = Math.round(
                    (programme.participants / programme.capacity) * 100
                  );

                  return (
                    <tr
                      key={programme.id}
                      className="
                        border-b
                        border-gray-100
                        hover:bg-gray-50
                        transition
                      "
                    >

                      {/* PROGRAMME */}
                      <td className="px-6 py-4">

                        <div className="flex items-start gap-3">

                          <div
                            className="
                              w-10 h-10
                              rounded-xl
                              bg-blue-50
                              text-blue-600
                              flex items-center justify-center
                              shrink-0
                            "
                          >
                            <BookOpen size={18} />
                          </div>

                          <div>

                            <p className="font-semibold text-gray-900">
                              {programme.title}
                            </p>

                            <div className="flex items-center gap-2 mt-1">

                              <span className="text-xs text-gray-500">
                                {programme.category}
                              </span>

                              <span className="text-gray-300">
                                •
                              </span>

                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <MapPin size={11} />
                                {programme.location}
                              </span>

                            </div>

                          </div>

                        </div>

                      </td>

                      {/* SCHEDULE */}
                      <td className="px-4 py-4">

                        <div className="flex items-start gap-2">

                          <CalendarDays
                            size={15}
                            className="text-gray-400 mt-0.5"
                          />

                          <div>

                            <p className="text-sm text-gray-700">
                              {programme.startDate}
                            </p>

                            <p className="text-xs text-gray-400">
                              to {programme.endDate}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* PARTICIPATION */}
                      <td className="px-4 py-4">

                        <div className="w-36">

                          <div className="flex justify-between text-xs mb-1">

                            <span className="text-gray-600">
                              {programme.participants} / {programme.capacity}
                            </span>

                            <span className="font-semibold text-blue-600">
                              {percentage}%
                            </span>

                          </div>

                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                            <div
                              className="h-full bg-blue-600 rounded-full"
                              style={{
                                width: `${Math.min(
                                  percentage,
                                  100
                                )}%`,
                              }}
                            />

                          </div>

                        </div>

                      </td>

                      {/* FACILITATOR */}
                      <td className="px-4 py-4">

                        <div className="flex items-center gap-2">

                          <div
                            className="
                              w-8 h-8
                              rounded-lg
                              bg-gray-100
                              flex items-center justify-center
                              text-gray-500
                            "
                          >
                            <Users size={15} />
                          </div>

                          <span className="text-sm text-gray-700">
                            {programme.facilitator}
                          </span>

                        </div>

                      </td>

                      {/* STATUS */}
                      <td className="px-4 py-4">

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            rounded-full
                            border
                            text-xs
                            font-semibold
                            ${STATUS_STYLES[programme.status]}
                          `}
                        >
                          {programme.status === "Active" && (
                            <CheckCircle2 size={13} />
                          )}

                          {programme.status === "Upcoming" && (
                            <Clock3 size={13} />
                          )}

                          {programme.status === "Completed" && (
                            <CheckCircle2 size={13} />
                          )}

                          {programme.status === "Cancelled" && (
                            <XCircle size={13} />
                          )}

                          {programme.status}
                        </span>

                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-4 text-right">

                        <button
                          className="
                            p-2
                            rounded-lg
                            text-gray-500
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition
                          "
                        >
                          <MoreHorizontal size={19} />
                        </button>

                      </td>

                    </tr>
                  );
                })
              )}

            </tbody>

          </table>

        </div>

        {/* TABLE FOOTER */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredProgrammes.length}
            </span>{" "}
            programmes
          </p>

          <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">
            View Programme Reports →
          </button>

        </div>

      </div>

      {/* INFORMATION NOTICE */}
      <div
        className="
          flex items-start gap-3
          p-5
          rounded-2xl
          bg-amber-50
          border border-amber-200
        "
      >
        <CircleAlert
          size={20}
          className="text-amber-600 mt-0.5"
        />

        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Programme Management Reminder
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Ensure programme schedules, participant records,
            facilitators and outcomes are updated regularly.
            Completed programmes should be submitted for reporting
            and review.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProgrammeManagement;
