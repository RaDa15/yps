import {
  Search,
  Filter,
  GraduationCap,
  MapPin,
  CalendarDays,
  Banknote,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { useMemo, useState } from "react";

const SCHOLARSHIPS = [
  {
    id: 1,
    title: "Bhutan Government Scholarship",
    provider: "Royal Government of Bhutan",
    location: "Bhutan",
    level: "Undergraduate",
    field: "General",
    amount: "Full Tuition",
    deadline: "30 September 2026",
    status: "Open",
    description:
      "Financial support for eligible Bhutanese youth pursuing undergraduate studies.",
  },

  {
    id: 2,
    title: "Youth Development Scholarship",
    provider: "Youth Development Fund",
    location: "Bhutan",
    level: "Undergraduate",
    field: "Youth Development",
    amount: "Nu. 150,000",
    deadline: "15 October 2026",
    status: "Open",
    description:
      "Scholarship opportunity supporting young people pursuing higher education and youth development.",
  },

  {
    id: 3,
    title: "STEM Excellence Scholarship",
    provider: "Education Partner Programme",
    location: "Bhutan",
    level: "Undergraduate",
    field: "STEM",
    amount: "Nu. 200,000",
    deadline: "25 October 2026",
    status: "Open",
    description:
      "Support for students pursuing science, technology, engineering and mathematics.",
  },

  {
    id: 4,
    title: "International Study Scholarship",
    provider: "International Education Programme",
    location: "International",
    level: "Postgraduate",
    field: "General",
    amount: "Partial Funding",
    deadline: "10 November 2026",
    status: "Open",
    description:
      "Funding opportunity for eligible Bhutanese students planning postgraduate studies overseas.",
  },

  {
    id: 5,
    title: "Leadership & Community Scholarship",
    provider: "Youth Leadership Initiative",
    location: "Bhutan",
    level: "Undergraduate",
    field: "Leadership",
    amount: "Nu. 100,000",
    deadline: "20 November 2026",
    status: "Open",
    description:
      "For youth demonstrating leadership, volunteering and community contribution.",
  },

  {
    id: 6,
    title: "Innovation Scholarship",
    provider: "Innovation & Entrepreneurship Programme",
    location: "Bhutan",
    level: "Undergraduate",
    field: "Innovation",
    amount: "Nu. 175,000",
    deadline: "5 December 2026",
    status: "Open",
    description:
      "Designed for young innovators working on technology, entrepreneurship and social impact.",
  },
];

const YouthScholarships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");
  const [fieldFilter, setFieldFilter] = useState("All");

  const filteredScholarships = useMemo(() => {
    const search = searchQuery.trim().toLowerCase();

    return SCHOLARSHIPS.filter((scholarship) => {
      const matchesSearch =
        search === "" ||
        scholarship.title.toLowerCase().includes(search) ||
        scholarship.provider.toLowerCase().includes(search) ||
        scholarship.location.toLowerCase().includes(search) ||
        scholarship.field.toLowerCase().includes(search);

      const matchesLevel =
        levelFilter === "All" ||
        scholarship.level === levelFilter;

      const matchesField =
        fieldFilter === "All" ||
        scholarship.field === fieldFilter;

      return matchesSearch && matchesLevel && matchesField;
    });
  }, [searchQuery, levelFilter, fieldFilter]);

  return (
    <div className="space-y-6">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
          <GraduationCap size={17} />

          Youth Opportunities
        </div>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Scholarships
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-gray-500">
          Discover scholarship opportunities and financial support
          available to Bhutanese youth for education and personal
          development.
        </p>
      </div>


      {/* ==================================================
          SUMMARY
      ================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <GraduationCap size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Available Scholarships
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            {SCHOLARSHIPS.length}
          </h2>

        </div>


        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Currently Open
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            {SCHOLARSHIPS.filter(
              (scholarship) => scholarship.status === "Open"
            ).length}
          </h2>

        </div>


        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Banknote size={20} />
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Funding Opportunities
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            Education Support
          </h2>

        </div>

      </div>


      {/* ==================================================
          FILTERS
      ================================================== */}

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
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search scholarships..."
              className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>


          {/* Level */}

          <div className="relative">

            <Filter
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={levelFilter}
              onChange={(event) =>
                setLevelFilter(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-8 text-sm text-gray-700 outline-none lg:w-52"
            >

              <option value="All">
                All Levels
              </option>

              <option value="Undergraduate">
                Undergraduate
              </option>

              <option value="Postgraduate">
                Postgraduate
              </option>

            </select>

          </div>


          {/* Field */}

          <select
            value={fieldFilter}
            onChange={(event) =>
              setFieldFilter(event.target.value)
            }
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none lg:w-52"
          >

            <option value="All">
              All Fields
            </option>

            <option value="General">
              General
            </option>

            <option value="Youth Development">
              Youth Development
            </option>

            <option value="STEM">
              STEM
            </option>

            <option value="Leadership">
              Leadership
            </option>

            <option value="Innovation">
              Innovation
            </option>

          </select>

        </div>

      </div>


      {/* ==================================================
          RESULTS
      ================================================== */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Scholarship Opportunities
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {filteredScholarships.length} opportunities available
          </p>
        </div>

      </div>


      {/* ==================================================
          SCHOLARSHIP CARDS
      ================================================== */}

      {filteredScholarships.length > 0 ? (

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          {filteredScholarships.map((scholarship) => (

            <div
              key={scholarship.id}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              {/* Card Header */}

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-3">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <GraduationCap size={23} />
                  </div>

                  <div>

                    <h3 className="text-base font-bold text-gray-900">
                      {scholarship.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {scholarship.provider}
                    </p>

                  </div>

                </div>


                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={12} />

                  {scholarship.status}
                </span>

              </div>


              {/* Description */}

              <p className="mt-5 text-sm leading-6 text-gray-600">
                {scholarship.description}
              </p>


              {/* Details */}

              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-gray-50 p-3">

                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={14} />

                    <span className="text-[11px]">
                      Location
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-semibold text-gray-800">
                    {scholarship.location}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-3">

                  <div className="flex items-center gap-2 text-gray-400">
                    <GraduationCap size={14} />

                    <span className="text-[11px]">
                      Level
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-semibold text-gray-800">
                    {scholarship.level}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-3">

                  <div className="flex items-center gap-2 text-gray-400">
                    <Banknote size={14} />

                    <span className="text-[11px]">
                      Funding
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-semibold text-gray-800">
                    {scholarship.amount}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-3">

                  <div className="flex items-center gap-2 text-gray-400">
                    <CalendarDays size={14} />

                    <span className="text-[11px]">
                      Deadline
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-semibold text-gray-800">
                    {scholarship.deadline}
                  </p>

                </div>

              </div>


              {/* Action */}

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >

                View Scholarship

                <ArrowUpRight size={16} />

              </button>

            </div>

          ))}

        </div>

      ) : (

        /* ==================================================
            EMPTY STATE
        ================================================== */

        <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
            <GraduationCap size={25} />
          </div>

          <h3 className="mt-4 text-base font-bold text-gray-900">
            No scholarships found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
            Try changing your search or filter criteria to find
            available scholarship opportunities.
          </p>

        </div>

      )}

    </div>
  );
};

export default YouthScholarships;
