import { useMemo, useState } from "react";
import {
  Search,
  UserPlus,
  Filter,
  Eye,
  Edit3,
  MoreHorizontal,
  Users,
  CheckCircle2,
  Clock3,
  UserRoundX,
} from "lucide-react";

const YOUTH_DATA = [
  {
    id: "YPS-2026-00124",
    name: "Tashi Dorji",
    gender: "Male",
    age: 21,
    phone: "17XXXXXX",
    centre: "Thimphu Youth Centre",
    status: "Active",
    registered: "06 Aug 2026",
  },
  {
    id: "YPS-2026-00125",
    name: "Sonam Choden",
    gender: "Female",
    age: 19,
    phone: "17XXXXXX",
    centre: "Thimphu Youth Centre",
    status: "Active",
    registered: "06 Aug 2026",
  },
  {
    id: "YPS-2026-00126",
    name: "Karma Wangchuk",
    gender: "Male",
    age: 23,
    phone: "77XXXXXX",
    centre: "Changangkha Youth Centre",
    status: "Pending",
    registered: "05 Aug 2026",
  },
  {
    id: "YPS-2026-00127",
    name: "Pema Yangchen",
    gender: "Female",
    age: 20,
    phone: "17XXXXXX",
    centre: "Motithang Youth Centre",
    status: "Active",
    registered: "05 Aug 2026",
  },
  {
    id: "YPS-2026-00128",
    name: "Jigme Namgyel",
    gender: "Male",
    age: 18,
    phone: "16XXXXXX",
    centre: "Thimphu Youth Centre",
    status: "Inactive",
    registered: "04 Aug 2026",
  },
  {
    id: "YPS-2026-00129",
    name: "Dechen Wangmo",
    gender: "Female",
    age: 22,
    phone: "17XXXXXX",
    centre: "Changangkha Youth Centre",
    status: "Active",
    registered: "03 Aug 2026",
  },
];

const YouthRegistration = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [centreFilter, setCentreFilter] = useState("All");

  const filteredYouth = useMemo(() => {
    return YOUTH_DATA.filter((youth) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        youth.name.toLowerCase().includes(searchText) ||
        youth.id.toLowerCase().includes(searchText) ||
        youth.phone.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || youth.status === statusFilter;

      const matchesCentre =
        centreFilter === "All" || youth.centre === centreFilter;

      return matchesSearch && matchesStatus && matchesCentre;
    });
  }, [search, statusFilter, centreFilter]);

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <Users size={16} />
            Youth Management
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Youth Registration
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Register, review and manage youth members within your centre.
          </p>
        </div>

        <button
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
          <UserPlus size={18} />
          Register New Youth
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Registered"
          value="2,480"
          description="Youth in your centre"
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <SummaryCard
          title="Active Youth"
          value="2,214"
          description="Currently active"
          icon={CheckCircle2}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <SummaryCard
          title="Pending Review"
          value="42"
          description="Awaiting approval"
          icon={Clock3}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <SummaryCard
          title="Inactive"
          value="224"
          description="Requires follow-up"
          icon={UserRoundX}
          iconBg="bg-gray-100"
          iconColor="text-gray-600"
        />
      </div>

      {/* TABLE CARD */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* TABLE HEADER */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Registered Youth
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                View and manage youth registered under your centre.
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full xl:w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, ID or phone..."
                className="
                  w-full
                  pl-10
                  pr-4
                  py-2.5
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  text-sm
                  outline-none
                  focus:bg-white
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  transition
                "
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter size={16} />
              Filters
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                px-3
                py-2
                rounded-lg
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-700
                outline-none
                focus:border-blue-500
              "
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>

            <select
              value={centreFilter}
              onChange={(e) => setCentreFilter(e.target.value)}
              className="
                px-3
                py-2
                rounded-lg
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-700
                outline-none
                focus:border-blue-500
              "
            >
              <option value="All">All Centres</option>
              <option value="Thimphu Youth Centre">
                Thimphu Youth Centre
              </option>
              <option value="Changangkha Youth Centre">
                Changangkha Youth Centre
              </option>
              <option value="Motithang Youth Centre">
                Motithang Youth Centre
              </option>
            </select>

            <span className="text-xs text-gray-400 ml-auto">
              {filteredYouth.length} records
            </span>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Youth
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Gender / Age
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Centre
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Registered
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredYouth.map((youth) => (
                <tr
                  key={youth.id}
                  className="border-b border-gray-100 hover:bg-blue-50/30 transition"
                >
                  {/* YOUTH */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        {youth.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900">
                          {youth.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          {youth.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* GENDER / AGE */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-gray-700">
                      {youth.gender}
                    </p>

                    <p className="text-xs text-gray-400">
                      {youth.age} years
                    </p>
                  </td>

                  {/* CENTRE */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-gray-700">
                      {youth.centre}
                    </p>

                    <p className="text-xs text-gray-400">
                      {youth.phone}
                    </p>
                  </td>

                  {/* DATE */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {youth.registered}
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <StatusBadge status={youth.status} />
                  </td>

                  {/* ACTION */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="View"
                        className="
                          w-9
                          h-9
                          rounded-lg
                          border
                          border-gray-200
                          flex
                          items-center
                          justify-center
                          text-gray-500
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                        "
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        title="Edit"
                        className="
                          w-9
                          h-9
                          rounded-lg
                          border
                          border-gray-200
                          flex
                          items-center
                          justify-center
                          text-gray-500
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                        "
                      >
                        <Edit3 size={16} />
                      </button>

                      <button
                        title="More"
                        className="
                          w-9
                          h-9
                          rounded-lg
                          border
                          border-gray-200
                          flex
                          items-center
                          justify-center
                          text-gray-500
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                        "
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredYouth.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center"
                  >
                    <div className="text-gray-400">
                      <Users
                        size={36}
                        className="mx-auto mb-3 opacity-50"
                      />

                      <p className="font-medium text-gray-600">
                        No youth records found
                      </p>

                      <p className="text-sm mt-1">
                        Try changing your search or filters.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing {filteredYouth.length} of {YOUTH_DATA.length} records
          </p>

          <div className="flex gap-2">
            <button
              disabled
              className="
                px-3
                py-2
                rounded-lg
                border
                border-gray-200
                bg-white
                text-xs
                text-gray-400
              "
            >
              Previous
            </button>

            <button
              className="
                px-3
                py-2
                rounded-lg
                bg-blue-600
                text-white
                text-xs
                font-medium
              "
            >
              1
            </button>

            <button
              className="
                px-3
                py-2
                rounded-lg
                border
                border-gray-200
                bg-white
                text-xs
                text-gray-600
                hover:bg-blue-50
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   SUMMARY CARD
========================= */

const SummaryCard = ({
  title,
  value,
  description,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div
        className={`
          w-11
          h-11
          rounded-xl
          ${iconBg}
          ${iconColor}
          flex
          items-center
          justify-center
          mb-4
        `}
      >
        <Icon size={20} />
      </div>

      <p className="text-xs font-medium text-gray-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h3>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
};

/* =========================
   STATUS BADGE
========================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Inactive: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-2.5
        py-1
        rounded-full
        text-xs
        font-semibold
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
};

export default YouthRegistration;