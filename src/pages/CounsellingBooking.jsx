import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  UserRound,
  Search,
  Filter,
  Plus,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MapPin,
  Phone,
  MessageSquare,
  X,
} from "lucide-react";

const COUNSELLING_DATA = [
  {
    id: "CB-001",
    youth: "Karma Wangchuk",
    cid: "10702004567",
    age: 19,
    gender: "Male",
    counsellor: "Ms. Sonam Choden",
    date: "2026-08-08",
    time: "10:00 AM",
    type: "Individual",
    reason: "Career Guidance",
    status: "Confirmed",
    priority: "Normal",
    location: "Counselling Room 1",
    phone: "17XXXXXX",
    notes: "First counselling session.",
  },
  {
    id: "CB-002",
    youth: "Pema Lhamo",
    cid: "11708009124",
    age: 21,
    gender: "Female",
    counsellor: "Mr. Tashi Dorji",
    date: "2026-08-08",
    time: "11:30 AM",
    type: "Individual",
    reason: "Academic Support",
    status: "Pending",
    priority: "Normal",
    location: "Counselling Room 2",
    phone: "17XXXXXX",
    notes: "Requested through youth portal.",
  },
  {
    id: "CB-003",
    youth: "Dechen Wangmo",
    cid: "12003005678",
    age: 20,
    gender: "Female",
    counsellor: "Ms. Sonam Choden",
    date: "2026-08-08",
    time: "02:00 PM",
    type: "Individual",
    reason: "Personal Support",
    status: "Confirmed",
    priority: "High",
    location: "Counselling Room 1",
    phone: "17XXXXXX",
    notes: "Priority appointment.",
  },
  {
    id: "CB-004",
    youth: "Jigme Namgyal",
    cid: "11905002345",
    age: 22,
    gender: "Male",
    counsellor: "Mr. Tashi Dorji",
    date: "2026-08-09",
    time: "09:30 AM",
    type: "Group",
    reason: "Life Skills",
    status: "Confirmed",
    priority: "Normal",
    location: "Youth Centre Hall",
    phone: "17XXXXXX",
    notes: "Group counselling session.",
  },
  {
    id: "CB-005",
    youth: "Sonam Choden",
    cid: "11304007821",
    age: 18,
    gender: "Female",
    counsellor: "Ms. Sonam Choden",
    date: "2026-08-09",
    time: "03:00 PM",
    type: "Individual",
    reason: "Career Guidance",
    status: "Completed",
    priority: "Normal",
    location: "Counselling Room 1",
    phone: "17XXXXXX",
    notes: "Session completed.",
  },
];

const COUNSELLORS = [
  {
    name: "Ms. Sonam Choden",
    specialization: "Career & Personal Counselling",
    availability: "Available",
  },
  {
    name: "Mr. Tashi Dorji",
    specialization: "Academic & Life Skills",
    availability: "Available",
  },
];

const CounsellingBooking = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const filteredBookings = useMemo(() => {
    return COUNSELLING_DATA.filter((booking) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        booking.youth.toLowerCase().includes(searchValue) ||
        booking.cid.includes(search) ||
        booking.counsellor.toLowerCase().includes(searchValue) ||
        booking.reason.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All Status" ||
        booking.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All Priority" ||
        booking.priority === priorityFilter;

      const matchesType =
        typeFilter === "All Types" ||
        booking.type === typeFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesType
      );
    });
  }, [search, statusFilter, priorityFilter, typeFilter]);

  const today = "2026-08-08";

  const todayBookings = COUNSELLING_DATA.filter(
    (booking) => booking.date === today
  ).length;

  const pendingBookings = COUNSELLING_DATA.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const confirmedBookings = COUNSELLING_DATA.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const completedBookings = COUNSELLING_DATA.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const highPriority = COUNSELLING_DATA.filter(
    (booking) => booking.priority === "High"
  ).length;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
            <CalendarDays size={16} />
            Youth Support Services
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Counselling Booking
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage youth counselling appointments, counsellor
            availability and daily sessions.
          </p>
        </div>

        <button
          onClick={() => setShowBookingModal(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 text-white
                     flex items-center justify-center gap-2
                     font-semibold text-sm hover:bg-blue-700 transition"
        >
          <Plus size={17} />
          New Appointment
        </button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <SummaryCard
          icon={CalendarDays}
          label="Today's Appointments"
          value={todayBookings}
          description="Scheduled today"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <SummaryCard
          icon={Clock3}
          label="Pending"
          value={pendingBookings}
          description="Awaiting confirmation"
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <SummaryCard
          icon={CheckCircle2}
          label="Confirmed"
          value={confirmedBookings}
          description="Upcoming sessions"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <SummaryCard
          icon={UserRound}
          label="Completed"
          value={completedBookings}
          description="Sessions completed"
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />

        <SummaryCard
          icon={AlertCircle}
          label="Priority Cases"
          value={highPriority}
          description="Need attention"
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />
      </div>

      {/* COUNSELLOR AVAILABILITY */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Counsellor Availability
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current centre counselling resources.
            </p>
          </div>

          <UserRound size={20} className="text-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COUNSELLORS.map((counsellor) => (
            <div
              key={counsellor.name}
              className="border border-gray-200 rounded-xl p-4
                         flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl bg-blue-50
                             text-blue-600 flex items-center
                             justify-center font-bold"
                >
                  {counsellor.name.charAt(3)}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {counsellor.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {counsellor.specialization}
                  </p>
                </div>
              </div>

              <span
                className="px-3 py-1 rounded-full bg-emerald-50
                           text-emerald-700 text-xs font-semibold"
              >
                {counsellor.availability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2
                         -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search youth, CID, counsellor or reason..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl
                         border border-gray-200 text-sm
                         outline-none focus:border-blue-400
                         focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <Filter size={17} className="text-gray-400" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border
                         border-gray-200 bg-white text-sm"
            >
              <option>All Status</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border
                         border-gray-200 bg-white text-sm"
            >
              <option>All Priority</option>
              <option>Normal</option>
              <option>High</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border
                         border-gray-200 bg-white text-sm"
            >
              <option>All Types</option>
              <option>Individual</option>
              <option>Group</option>
            </select>
          </div>
        </div>
      </div>

      {/* BOOKINGS TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">
            Counselling Appointments
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {filteredBookings.length} appointment records
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr
                className="bg-gray-50 border-b border-gray-200
                           text-xs text-gray-500"
              >
                <th className="text-left px-5 py-4">
                  Youth
                </th>

                <th className="text-left px-5 py-4">
                  Date & Time
                </th>

                <th className="text-left px-5 py-4">
                  Counsellor
                </th>

                <th className="text-left px-5 py-4">
                  Type
                </th>

                <th className="text-left px-5 py-4">
                  Reason
                </th>

                <th className="text-left px-5 py-4">
                  Priority
                </th>

                <th className="text-left px-5 py-4">
                  Status
                </th>

                <th className="text-right px-5 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-gray-100
                             hover:bg-gray-50 transition"
                >
                  {/* YOUTH */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl bg-blue-50
                                   text-blue-600 flex items-center
                                   justify-center font-bold"
                      >
                        {booking.youth.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {booking.youth}
                        </p>

                        <p className="text-xs text-gray-400">
                          CID: {booking.cid}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {booking.date}
                    </p>

                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Clock3 size={12} />
                      {booking.time}
                    </p>
                  </td>

                  {/* COUNSELLOR */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-gray-800">
                      {booking.counsellor}
                    </p>
                  </td>

                  {/* TYPE */}
                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs">
                      {booking.type}
                    </span>
                  </td>

                  {/* REASON */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-gray-700">
                      {booking.reason}
                    </p>
                  </td>

                  {/* PRIORITY */}
                  <td className="px-5 py-4">
                    <PriorityBadge
                      priority={booking.priority}
                    />
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <StatusBadge
                      status={booking.status}
                    />
                  </td>

                  {/* ACTION */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          setSelectedBooking(booking)
                        }
                        className="w-9 h-9 rounded-lg
                                   border border-gray-200
                                   flex items-center justify-center
                                   text-gray-500 hover:text-blue-600
                                   hover:bg-blue-50 transition"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBookings.length === 0 && (
          <div className="py-14 text-center">
            <CalendarDays
              size={40}
              className="mx-auto text-gray-300"
            />

            <p className="font-semibold text-gray-700 mt-3">
              No appointments found
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* VIEW BOOKING MODAL */}
      {selectedBooking && (
        <div
          className="fixed inset-0 bg-black/40 z-[100]
                     flex items-center justify-center p-4"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg
                       shadow-xl overflow-hidden"
          >
            <div className="p-5 border-b flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">
                  Appointment Details
                </h2>

                <p className="text-xs text-gray-500">
                  {selectedBooking.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedBooking(null)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100
                           flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* YOUTH */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-blue-50
                             text-blue-600 flex items-center
                             justify-center font-bold text-xl"
                >
                  {selectedBooking.youth.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {selectedBooking.youth}
                  </h3>

                  <p className="text-sm text-gray-500">
                    CID: {selectedBooking.cid}
                  </p>
                </div>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-3">
                <Detail
                  icon={CalendarDays}
                  label="Date"
                  value={selectedBooking.date}
                />

                <Detail
                  icon={Clock3}
                  label="Time"
                  value={selectedBooking.time}
                />

                <Detail
                  icon={UserRound}
                  label="Counsellor"
                  value={selectedBooking.counsellor}
                />

                <Detail
                  icon={MapPin}
                  label="Location"
                  value={selectedBooking.location}
                />

                <Detail
                  icon={Phone}
                  label="Contact"
                  value={selectedBooking.phone}
                />

                <Detail
                  icon={MessageSquare}
                  label="Session Type"
                  value={selectedBooking.type}
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">
                  Reason
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  {selectedBooking.reason}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">
                  Internal Notes
                </p>

                <p className="text-sm text-gray-700">
                  {selectedBooking.notes}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <PriorityBadge
                  priority={selectedBooking.priority}
                />

                <StatusBadge
                  status={selectedBooking.status}
                />
              </div>
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              {selectedBooking.status === "Pending" && (
                <>
                  <button
                    className="px-4 py-2.5 rounded-xl
                               bg-red-50 text-red-600
                               font-semibold text-sm
                               flex items-center gap-2"
                  >
                    <XCircle size={16} />
                    Reject
                  </button>

                  <button
                    className="px-4 py-2.5 rounded-xl
                               bg-blue-600 text-white
                               font-semibold text-sm
                               flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    Confirm
                  </button>
                </>
              )}

              <button
                onClick={() => setSelectedBooking(null)}
                className="px-5 py-2.5 rounded-xl border
                           border-gray-200 text-gray-700
                           font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEW APPOINTMENT MODAL */}
      {showBookingModal && (
        <NewAppointmentModal
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};

/* =========================
   SUMMARY CARD
========================= */

const SummaryCard = ({
  icon: Icon,
  label,
  value,
  description,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div
        className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor}
                    flex items-center justify-center mb-4`}
      >
        <Icon size={20} />
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

/* =========================
   STATUS BADGE
========================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-700",
    Confirmed: "bg-blue-50 text-blue-700",
    Completed: "bg-emerald-50 text-emerald-700",
    Cancelled: "bg-red-50 text-red-700",
  };

  const icons = {
    Pending: Clock3,
    Confirmed: CheckCircle2,
    Completed: CheckCircle2,
    Cancelled: XCircle,
  };

  const Icon = icons[status] || Clock3;

  return (
    <span
      className={`inline-flex items-center gap-1.5
                  px-3 py-1 rounded-full text-xs
                  font-semibold
                  ${styles[status] || "bg-gray-100 text-gray-600"}`}
    >
      <Icon size={13} />
      {status}
    </span>
  );
};

/* =========================
   PRIORITY BADGE
========================= */

const PriorityBadge = ({ priority }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        priority === "High"
          ? "bg-red-50 text-red-700"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {priority}
    </span>
  );
};

/* =========================
   DETAIL
========================= */

const Detail = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <div className="flex items-center gap-2 text-gray-400 mb-1">
        <Icon size={14} />

        <p className="text-xs">
          {label}
        </p>
      </div>

      <p className="text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
};

/* =========================
   NEW APPOINTMENT MODAL
========================= */

const NewAppointmentModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 z-[110]
                 flex items-center justify-center p-4"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl
                   shadow-xl overflow-hidden"
      >
        <div
          className="p-5 border-b flex items-center
                     justify-between"
        >
          <div>
            <h2 className="font-bold text-lg">
              New Counselling Appointment
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Schedule a counselling session for a youth.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg hover:bg-gray-100
                       flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Youth
            </label>

            <select
              className="w-full px-4 py-2.5 rounded-xl
                         border border-gray-200 bg-white text-sm"
            >
              <option>Select youth</option>
              <option>Karma Wangchuk</option>
              <option>Pema Lhamo</option>
              <option>Dechen Wangmo</option>
              <option>Jigme Namgyal</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Date
              </label>

              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-xl
                           border border-gray-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Time
              </label>

              <input
                type="time"
                className="w-full px-4 py-2.5 rounded-xl
                           border border-gray-200 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Counsellor
            </label>

            <select
              className="w-full px-4 py-2.5 rounded-xl
                         border border-gray-200 bg-white text-sm"
            >
              <option>Select counsellor</option>

              {COUNSELLORS.map((counsellor) => (
                <option key={counsellor.name}>
                  {counsellor.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Session Type
              </label>

              <select
                className="w-full px-4 py-2.5 rounded-xl
                           border border-gray-200 bg-white text-sm"
              >
                <option>Individual</option>
                <option>Group</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Priority
              </label>

              <select
                className="w-full px-4 py-2.5 rounded-xl
                           border border-gray-200 bg-white text-sm"
              >
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Reason
            </label>

            <select
              className="w-full px-4 py-2.5 rounded-xl
                         border border-gray-200 bg-white text-sm"
            >
              <option>Career Guidance</option>
              <option>Academic Support</option>
              <option>Personal Support</option>
              <option>Life Skills</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Notes
            </label>

            <textarea
              rows="3"
              placeholder="Add appointment notes..."
              className="w-full px-4 py-3 rounded-xl
                         border border-gray-200 text-sm
                         resize-none outline-none
                         focus:border-blue-400
                         focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="p-5 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border
                       border-gray-200 text-gray-700
                       font-semibold text-sm"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600
                       text-white font-semibold text-sm
                       flex items-center gap-2
                       hover:bg-blue-700"
          >
            <CalendarDays size={16} />
            Create Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounsellingBooking;
