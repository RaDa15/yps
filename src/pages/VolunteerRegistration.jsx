import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Users,
  UserCheck,
  Clock3,
  CheckCircle2,
  XCircle,
  Eye,
  Edit3,
  MoreHorizontal,
  Filter,
  X,
} from "lucide-react";

const INITIAL_VOLUNTEERS = [
  {
    id: "VOL-001",
    name: "Karma Wangchuk",
    cid: "11702003456",
    gender: "Male",
    age: 24,
    phone: "17123456",
    category: "Youth Volunteer",
    programme: "Community Outreach",
    hours: 48,
    status: "Active",
    registeredDate: "02 Aug 2026",
  },
  {
    id: "VOL-002",
    name: "Sonam Choden",
    cid: "11504007891",
    gender: "Female",
    age: 22,
    phone: "17654321",
    category: "Youth Led Group Volunteer",
    programme: "Youth Awareness",
    hours: 36,
    status: "Active",
    registeredDate: "28 Jul 2026",
  },
  {
    id: "VOL-003",
    name: "Tshering Dorji",
    cid: "11801004567",
    gender: "Male",
    age: 26,
    phone: "17345678",
    category: "Community Volunteer",
    programme: "Sports & Recreation",
    hours: 24,
    status: "Pending",
    registeredDate: "06 Aug 2026",
  },
  {
    id: "VOL-004",
    name: "Pema Lhamo",
    cid: "11603006782",
    gender: "Female",
    age: 23,
    phone: "17987654",
    category: "Youth Volunteer",
    programme: "Life Skills",
    hours: 62,
    status: "Active",
    registeredDate: "19 Jul 2026",
  },
];

const VolunteerRegistration = () => {
  const [volunteers, setVolunteers] = useState(INITIAL_VOLUNTEERS);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const [form, setForm] = useState({
    name: "",
    cid: "",
    gender: "",
    age: "",
    phone: "",
    category: "Youth Volunteer",
    programme: "",
  });

  const filteredVolunteers = useMemo(() => {
    return volunteers.filter((volunteer) => {
      const matchesSearch =
        volunteer.name.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.cid.includes(search) ||
        volunteer.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        volunteer.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [volunteers, search, statusFilter]);

  const stats = {
    total: volunteers.length,
    active: volunteers.filter((v) => v.status === "Active").length,
    pending: volunteers.filter((v) => v.status === "Pending").length,
    hours: volunteers.reduce((sum, v) => sum + v.hours, 0),
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const newVolunteer = {
      id: `VOL-${String(volunteers.length + 1).padStart(3, "0")}`,
      name: form.name,
      cid: form.cid,
      gender: form.gender,
      age: Number(form.age),
      phone: form.phone,
      category: form.category,
      programme: form.programme || "General Volunteer",
      hours: 0,
      status: "Pending",
      registeredDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setVolunteers((prev) => [newVolunteer, ...prev]);

    setForm({
      name: "",
      cid: "",
      gender: "",
      age: "",
      phone: "",
      category: "Youth Volunteer",
      programme: "",
    });

    setShowModal(false);
  };

  const updateStatus = (id, status) => {
    setVolunteers((prev) =>
      prev.map((volunteer) =>
        volunteer.id === id
          ? { ...volunteer, status }
          : volunteer
      )
    );

    setSelectedVolunteer(null);
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <p className="text-sm text-blue-600 font-medium">
            Volunteer Management
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Volunteer Registration
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Register, review and manage volunteers assigned to your
            Youth Centre.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2
          px-5 py-3 rounded-xl
          bg-blue-600 text-white
          hover:bg-blue-700
          shadow-sm transition"
        >
          <Plus size={18} />
          Register Volunteer
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <StatCard
          icon={<Users size={20} />}
          label="Total Volunteers"
          value={stats.total}
          description="Registered at centre"
          iconClass="bg-blue-50 text-blue-600"
        />

        <StatCard
          icon={<UserCheck size={20} />}
          label="Active Volunteers"
          value={stats.active}
          description="Currently active"
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          icon={<Clock3 size={20} />}
          label="Pending Applications"
          value={stats.pending}
          description="Awaiting review"
          iconClass="bg-amber-50 text-amber-600"
        />

        <StatCard
          icon={<CheckCircle2 size={20} />}
          label="Service Hours"
          value={stats.hours}
          description="Total recorded hours"
          iconClass="bg-violet-50 text-violet-600"
        />

      </div>

      {/* TABLE CARD */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* TOOLBAR */}
        <div className="p-5 border-b border-gray-200">

          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            <div className="relative flex-1 max-w-xl">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by name, CID or volunteer ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-10 pr-4 py-3
                  border border-gray-200
                  rounded-xl
                  text-sm
                  outline-none
                  focus:ring-2
                  focus:ring-blue-100
                  focus:border-blue-500
                "
              />

            </div>

            <div className="flex items-center gap-2">

              <Filter size={17} className="text-gray-400" />

              {["All", "Active", "Pending", "Rejected"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition
                    ${
                      statusFilter === status
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {status}
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="bg-gray-50">

              <tr className="border-b border-gray-200">

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Volunteer
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Category
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Programme
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Service Hours
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredVolunteers.length > 0 ? (
                filteredVolunteers.map((volunteer) => (

                  <tr
                    key={volunteer.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >

                    {/* VOLUNTEER */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="
                          w-10 h-10
                          rounded-xl
                          bg-blue-50
                          text-blue-600
                          flex items-center justify-center
                          font-semibold
                        ">
                          {volunteer.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {volunteer.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            {volunteer.id} · CID {volunteer.cid}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* CATEGORY */}
                    <td className="px-6 py-4">

                      <span className="text-sm text-gray-700">
                        {volunteer.category}
                      </span>

                    </td>

                    {/* PROGRAMME */}
                    <td className="px-6 py-4">

                      <span className="text-sm text-gray-600">
                        {volunteer.programme}
                      </span>

                    </td>

                    {/* HOURS */}
                    <td className="px-6 py-4">

                      <span className="font-semibold text-gray-900">
                        {volunteer.hours}
                      </span>

                      <span className="text-xs text-gray-400 ml-1">
                        hrs
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">

                      <StatusBadge status={volunteer.status} />

                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <button
                          onClick={() => setSelectedVolunteer(volunteer)}
                          className="
                            p-2 rounded-lg
                            text-gray-500
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition
                          "
                          title="View volunteer"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          className="
                            p-2 rounded-lg
                            text-gray-500
                            hover:bg-gray-100
                            transition
                          "
                          title="Edit volunteer"
                        >
                          <Edit3 size={17} />
                        </button>

                        <button
                          className="
                            p-2 rounded-lg
                            text-gray-500
                            hover:bg-gray-100
                            transition
                          "
                          title="More options"
                        >
                          <MoreHorizontal size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))
              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-12 text-gray-500"
                  >
                    No volunteers found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredVolunteers.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">
              {volunteers.length}
            </span>{" "}
            volunteers
          </p>

        </div>

      </div>

      {/* REGISTER MODAL */}
      {showModal && (
        <div className="
          fixed inset-0
          z-50
          bg-black/40
          flex items-center justify-center
          p-4
        ">

          <div className="
            bg-white
            rounded-2xl
            w-full max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            shadow-xl
          ">

            <div className="
              flex items-center justify-between
              px-6 py-5
              border-b border-gray-200
            ">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Register New Volunteer
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Add a volunteer to the Youth Centre.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>

            </div>

            <form
              onSubmit={handleRegister}
              className="p-6 space-y-5"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <InputField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                />

                <InputField
                  label="CID Number"
                  name="cid"
                  value={form.cid}
                  onChange={handleInputChange}
                  placeholder="Enter CID number"
                  required
                />

                <SelectField
                  label="Gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleInputChange}
                  options={["Male", "Female", "Other"]}
                  required
                />

                <InputField
                  label="Age"
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleInputChange}
                  placeholder="Enter age"
                  required
                />

                <InputField
                  label="Contact Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  placeholder="17xxxxxx"
                  required
                />

                <SelectField
                  label="Volunteer Category"
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                  options={[
                    "Youth Volunteer",
                    "Youth Led Group Volunteer",
                    "Community Volunteer",
                    "Event Volunteer",
                  ]}
                />

              </div>

              <InputField
                label="Preferred Programme / Activity"
                name="programme"
                value={form.programme}
                onChange={handleInputChange}
                placeholder="e.g. Community Outreach"
              />

              <div className="flex justify-end gap-3 pt-3 border-t">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="
                    px-5 py-2.5
                    rounded-xl
                    border border-gray-200
                    text-gray-600
                    hover:bg-gray-50
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    px-5 py-2.5
                    rounded-xl
                    bg-blue-600
                    text-white
                    font-medium
                    hover:bg-blue-700
                  "
                >
                  Submit Registration
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* VIEW MODAL */}
      {selectedVolunteer && (

        <div className="
          fixed inset-0
          z-50
          bg-black/40
          flex items-center justify-center
          p-4
        ">

          <div className="
            bg-white
            rounded-2xl
            w-full max-w-lg
            shadow-xl
          ">

            <div className="
              flex justify-between
              items-center
              px-6 py-5
              border-b
            ">

              <div>
                <p className="text-xs text-blue-600 font-semibold">
                  {selectedVolunteer.id}
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {selectedVolunteer.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedVolunteer(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={20} />
              </button>

            </div>

            <div className="p-6 space-y-4">

              <InfoRow label="CID" value={selectedVolunteer.cid} />
              <InfoRow label="Gender" value={selectedVolunteer.gender} />
              <InfoRow label="Age" value={selectedVolunteer.age} />
              <InfoRow label="Contact" value={selectedVolunteer.phone} />
              <InfoRow label="Category" value={selectedVolunteer.category} />
              <InfoRow label="Programme" value={selectedVolunteer.programme} />
              <InfoRow label="Service Hours" value={`${selectedVolunteer.hours} hrs`} />
              <InfoRow label="Registered" value={selectedVolunteer.registeredDate} />

              <div className="pt-3">
                <StatusBadge status={selectedVolunteer.status} />
              </div>

              {selectedVolunteer.status === "Pending" && (

                <div className="flex gap-3 pt-4 border-t">

                  <button
                    onClick={() =>
                      updateStatus(selectedVolunteer.id, "Active")
                    }
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      py-3
                      rounded-xl
                      bg-emerald-600
                      text-white
                      hover:bg-emerald-700
                    "
                  >
                    <CheckCircle2 size={18} />
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(selectedVolunteer.id, "Rejected")
                    }
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      py-3
                      rounded-xl
                      bg-red-50
                      text-red-600
                      hover:bg-red-100
                    "
                  >
                    <XCircle size={18} />
                    Reject
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};


/* =========================
   SMALL COMPONENTS
========================= */

const StatCard = ({
  icon,
  label,
  value,
  description,
  iconClass,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className={`
        w-10 h-10
        rounded-xl
        flex items-center justify-center
        mb-4
        ${iconClass}
      `}>
        {icon}
      </div>

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>

    </div>
  );
};


const StatusBadge = ({ status }) => {

  const styles = {
    Active: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span className={`
      inline-flex
      px-3 py-1
      rounded-full
      text-xs
      font-semibold
      ${styles[status] || "bg-gray-100 text-gray-600"}
    `}>
      {status}
    </span>
  );
};


const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          px-4 py-2.5
          border border-gray-200
          rounded-xl
          text-sm
          outline-none
          focus:ring-2
          focus:ring-blue-100
          focus:border-blue-500
        "
      />

    </div>
  );
};


const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          px-4 py-2.5
          border border-gray-200
          rounded-xl
          text-sm
          bg-white
          outline-none
          focus:ring-2
          focus:ring-blue-100
          focus:border-blue-500
        "
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>

    </div>
  );
};


const InfoRow = ({ label, value }) => {
  return (
    <div className="flex justify-between gap-4 text-sm">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-medium text-gray-900 text-right">
        {value}
      </span>

    </div>
  );
};


export default VolunteerRegistration;
