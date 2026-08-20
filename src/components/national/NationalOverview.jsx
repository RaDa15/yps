import {
  Network,
  MapPin,
  Users,
  Activity,
  Clock3,
  TrendingUp,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

// ======================================================
// NATIONAL Youth Led Group NETWORK DATA
// ======================================================

const NATIONAL_NETWORKS = [
  {
    id: 1,
    name: "Thimphu Youth Led Group Network",
    location: "Thimphu",
    focalPoint: "Sonam Dorji",
    volunteers: 186,
    activities: 24,
    hours: 1284,
    participation: 91,
    status: "Active",
    trend: "+12.4%",
  },
  {
    id: 2,
    name: "Paro Youth Led Group Network",
    location: "Paro",
    focalPoint: "Karma Wangchuk",
    volunteers: 142,
    activities: 18,
    hours: 962,
    participation: 87,
    status: "Active",
    trend: "+8.7%",
  },
  {
    id: 3,
    name: "Punakha Youth Led Group Network",
    location: "Punakha",
    focalPoint: "Tshering Dorji",
    volunteers: 118,
    activities: 15,
    hours: 746,
    participation: 83,
    status: "Active",
    trend: "+6.2%",
  },
  {
    id: 4,
    name: "Phuentsholing Youth Led Group Network",
    location: "Chukha",
    focalPoint: "Pema Choden",
    volunteers: 96,
    activities: 12,
    hours: 618,
    participation: 79,
    status: "Active",
    trend: "+4.8%",
  },
  {
    id: 5,
    name: "Mongar Youth Led Group Network",
    location: "Mongar",
    focalPoint: "Kinley Wangmo",
    volunteers: 84,
    activities: 10,
    hours: 524,
    participation: 76,
    status: "Active",
    trend: "+3.9%",
  },
  {
    id: 6,
    name: "Bumthang Youth Led Group Network",
    location: "Bumthang",
    focalPoint: "Choki Lhamo",
    volunteers: 72,
    activities: 8,
    hours: 418,
    participation: 73,
    status: "Active",
    trend: "+2.6%",
  },
  {
    id: 7,
    name: "Samdrup Jongkhar Youth Led Group Network",
    location: "Samdrup Jongkhar",
    focalPoint: "Jigme Dorji",
    volunteers: 68,
    activities: 7,
    hours: 392,
    participation: 69,
    status: "Needs Attention",
    trend: "-1.8%",
  },
  {
    id: 8,
    name: "Gelephu Youth Led Group Network",
    location: "Sarpang",
    focalPoint: "Tashi Wangdi",
    volunteers: 61,
    activities: 6,
    hours: 344,
    participation: 66,
    status: "Active",
    trend: "+1.4%",
  },
];

// ======================================================
// COMPONENT
// ======================================================

const NationalOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // ======================================================
  // FILTER NETWORKS
  // ======================================================

  const filteredNetworks = NATIONAL_NETWORKS.filter((network) => {
    const search = searchQuery.toLowerCase();

    const matchesSearch =
      network.name.toLowerCase().includes(search) ||
      network.location.toLowerCase().includes(search) ||
      network.focalPoint.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      network.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="space-y-6">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-teal-600 text-sm font-medium">
            <Network size={15} />
            National Coordination
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Network Overview
          </h1>

          <p className="text-sm text-gray-500 mt-1 max-w-2xl">
            Monitor Youth Led Group networks, volunteer participation and
            network-level activities across Bhutan.
          </p>

        </div>

        <button
          className="
            px-4
            py-2.5
            rounded-xl
            bg-teal-600
            text-white
            text-sm
            font-semibold
            flex
            items-center
            gap-2
            hover:bg-teal-700
            transition
          "
        >
          <Network size={16} />
          Manage Networks
        </button>

      </div>


      {/* ==================================================
          SUMMARY CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* TOTAL NETWORKS */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-teal-50
              text-teal-600
              flex
              items-center
              justify-center
            ">
              <Network size={19} />
            </div>

            <TrendingUp
              size={16}
              className="text-emerald-600"
            />

          </div>

          <p className="text-xs text-gray-500 mt-4">
            Total Networks
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            13
          </h2>

          <p className="text-xs text-emerald-600 mt-1 font-medium">
            All registered networks
          </p>

        </div>


        {/* TOTAL VOLUNTEERS */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-blue-50
            text-blue-600
            flex
            items-center
            justify-center
          ">
            <Users size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Total Volunteers
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            1,126
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Across all networks
          </p>

        </div>


        {/* ACTIVE ACTIVITIES */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-violet-50
            text-violet-600
            flex
            items-center
            justify-center
          ">
            <Activity size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Active Activities
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            69
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            This month
          </p>

        </div>


        {/* VOLUNTEER HOURS */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-amber-50
            text-amber-600
            flex
            items-center
            justify-center
          ">
            <Clock3 size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Volunteer Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            8,742
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Programme year
          </p>

        </div>

      </div>


      {/* ==================================================
          FILTER BAR
      ================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col md:flex-row gap-3">

          {/* SEARCH */}

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
              placeholder="Search network, location or focal point..."
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
                focus:ring-teal-500/20
                focus:border-teal-400
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
              onChange={(e) =>
                setStatusFilter(e.target.value)
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
                focus:ring-2
                focus:ring-teal-500/20
              "
            >

              <option value="All">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Needs Attention">
                Needs Attention
              </option>

            </select>

          </div>

        </div>

      </div>


      {/* ==================================================
          NETWORK TABLE
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        overflow-hidden
      ">

        {/* TABLE HEADER */}

        <div className="
          p-6
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-2
        ">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Registered Youth Led Group Networks
            </h2>

            <p className="text-sm text-gray-500">
              {filteredNetworks.length} networks displayed
            </p>

          </div>

        </div>


        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>

              <tr className="
                border-t
                border-b
                border-gray-100
                bg-gray-50/70
              ">

                <th className="
                  text-left
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Network
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Focal Point
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Volunteers
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Activities
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Volunteer Hours
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Participation
                </th>

                <th className="
                  text-left
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-gray-400
                ">
                  Status
                </th>

                <th className="px-4 py-3"></th>

              </tr>

            </thead>


            <tbody>

              {filteredNetworks.map((network) => (

                <tr
                  key={network.id}
                  className="
                    border-b
                    border-gray-100
                    last:border-0
                    hover:bg-gray-50
                    transition
                  "
                >

                  {/* NETWORK */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-10
                        h-10
                        rounded-xl
                        bg-teal-50
                        text-teal-600
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      ">
                        <Network size={18} />
                      </div>

                      <div>

                        <p className="
                          text-sm
                          font-semibold
                          text-gray-900
                        ">
                          {network.name}
                        </p>

                        <p className="
                          text-xs
                          text-gray-400
                          flex
                          items-center
                          gap-1
                          mt-1
                        ">
                          <MapPin size={11} />
                          {network.location}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* FOCAL POINT */}

                  <td className="px-4 py-4">

                    <p className="text-sm text-gray-700">
                      {network.focalPoint}
                    </p>

                  </td>


                  {/* VOLUNTEERS */}

                  <td className="px-4 py-4">

                    <div className="flex items-center gap-2">

                      <Users
                        size={15}
                        className="text-blue-500"
                      />

                      <span className="
                        text-sm
                        font-semibold
                        text-gray-700
                      ">
                        {network.volunteers}
                      </span>

                    </div>

                  </td>


                  {/* ACTIVITIES */}

                  <td className="px-4 py-4">

                    <div className="flex items-center gap-2">

                      <Activity
                        size={15}
                        className="text-violet-500"
                      />

                      <span className="
                        text-sm
                        font-semibold
                        text-gray-700
                      ">
                        {network.activities}
                      </span>

                    </div>

                  </td>


                  {/* HOURS */}

                  <td className="px-4 py-4">

                    <span className="
                      text-sm
                      font-semibold
                      text-gray-700
                    ">
                      {network.hours.toLocaleString()}
                    </span>

                  </td>


                  {/* PARTICIPATION */}

                  <td className="px-4 py-4">

                    <div className="flex items-center gap-2">

                      <div className="
                        w-20
                        h-1.5
                        rounded-full
                        bg-gray-100
                        overflow-hidden
                      ">

                        <div
                          className="
                            h-full
                            bg-teal-500
                            rounded-full
                          "
                          style={{
                            width: `${network.participation}%`,
                          }}
                        />

                      </div>

                      <span className="
                        text-xs
                        font-semibold
                        text-gray-700
                      ">
                        {network.participation}%
                      </span>

                    </div>

                  </td>


                  {/* STATUS */}

                  <td className="px-4 py-4">

                    {network.status === "Active" ? (

                      <span className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1
                        rounded-full
                        bg-emerald-50
                        text-emerald-700
                        text-xs
                        font-semibold
                      ">

                        <CheckCircle2 size={13} />

                        Active

                      </span>

                    ) : (

                      <span className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1
                        rounded-full
                        bg-amber-50
                        text-amber-700
                        text-xs
                        font-semibold
                      ">

                        <AlertTriangle size={13} />

                        Needs Attention

                      </span>

                    )}

                  </td>


                  {/* ACTION */}

                  <td className="px-4 py-4">

                    <button
                      className="
                        w-8
                        h-8
                        rounded-lg
                        bg-gray-100
                        text-gray-500
                        hover:bg-teal-600
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition
                      "
                      title="View Network"
                    >

                      <ChevronRight size={16} />

                    </button>

                  </td>

                </tr>

              ))}


              {/* EMPTY STATE */}

              {filteredNetworks.length === 0 && (

                <tr>

                  <td
                    colSpan="8"
                    className="
                      text-center
                      py-12
                      text-sm
                      text-gray-400
                    "
                  >
                    No networks found matching your search.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==================================================
          FOOTER INFORMATION
      ================================================== */}

      <div className="
        bg-teal-50
        border
        border-teal-100
        rounded-2xl
        p-4
        flex
        items-center
        gap-3
      ">

        <div className="
          w-9
          h-9
          rounded-xl
          bg-teal-600
          text-white
          flex
          items-center
          justify-center
          flex-shrink-0
        ">
          <Network size={18} />
        </div>

        <div>

          <p className="
            text-sm
            font-semibold
            text-gray-900
          ">
            Network monitoring is active
          </p>

          <p className="
            text-xs
            text-gray-500
          ">
            Network statistics are synchronized with the
            national Youth Led Group coordination system.
          </p>

        </div>

      </div>

    </div>
  );
};

export default NationalOverview;
