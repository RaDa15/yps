import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeftRight,
  CheckCircle2,
  Clock3,
  XCircle,
  Search,
  Eye,
  MoreHorizontal,
  UserRound,
  Building2,
  AlertCircle,
  FileCheck2,
} from "lucide-react";

const INITIAL_TRANSFERS = [
  {
    id: "TRF-2026-001",
    youthId: "YPS-2026-00321",
    youthName: "Karma Wangchuk",
    age: 21,
    gender: "Male",
    fromCentre: "Changangkha Youth Centre",
    toCentre: "Thimphu Youth Centre",
    requestDate: "07 Aug 2026",
    reason: "Relocation",
    direction: "Incoming",
    status: "Pending",
  },
  {
    id: "TRF-2026-002",
    youthId: "YPS-2026-00342",
    youthName: "Sonam Choden",
    age: 19,
    gender: "Female",
    fromCentre: "Motithang Youth Centre",
    toCentre: "Thimphu Youth Centre",
    requestDate: "06 Aug 2026",
    reason: "Change of residence",
    direction: "Incoming",
    status: "Pending",
  },
  {
    id: "TRF-2026-003",
    youthId: "YPS-2026-00287",
    youthName: "Jigme Dorji",
    age: 23,
    gender: "Male",
    fromCentre: "Thimphu Youth Centre",
    toCentre: "Changangkha Youth Centre",
    requestDate: "05 Aug 2026",
    reason: "Closer to residence",
    direction: "Outgoing",
    status: "Pending",
  },
  {
    id: "TRF-2026-004",
    youthId: "YPS-2026-00244",
    youthName: "Pema Yangchen",
    age: 20,
    gender: "Female",
    fromCentre: "Thimphu Youth Centre",
    toCentre: "Motithang Youth Centre",
    requestDate: "04 Aug 2026",
    reason: "Programme access",
    direction: "Outgoing",
    status: "Accepted",
  },
  {
    id: "TRF-2026-005",
    youthId: "YPS-2026-00191",
    youthName: "Dechen Wangmo",
    age: 22,
    gender: "Female",
    fromCentre: "Changangkha Youth Centre",
    toCentre: "Thimphu Youth Centre",
    requestDate: "02 Aug 2026",
    reason: "Relocation",
    direction: "Incoming",
    status: "Rejected",
  },
];

const MemberTransfer = () => {
  const [transfers, setTransfers] = useState(INITIAL_TRANSFERS);
  const [activeTab, setActiveTab] = useState("Incoming");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const currentCentre = "Thimphu Youth Centre";

  const filteredTransfers = useMemo(() => {
    return transfers.filter((transfer) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        transfer.youthName.toLowerCase().includes(searchText) ||
        transfer.youthId.toLowerCase().includes(searchText) ||
        transfer.id.toLowerCase().includes(searchText);

      const matchesTab =
        activeTab === "All" || transfer.direction === activeTab;

      const matchesStatus =
        statusFilter === "All" ||
        transfer.status === statusFilter;

      return matchesSearch && matchesTab && matchesStatus;
    });
  }, [transfers, activeTab, search, statusFilter]);

  const updateTransferStatus = (id, newStatus) => {
    setTransfers((current) =>
      current.map((transfer) => {
        if (transfer.id !== id) {
          return transfer;
        }

        return {
          ...transfer,
          status: newStatus,
        };
      })
    );

    setShowDetails(false);
  };

  const incomingPending = transfers.filter(
    (item) =>
      item.direction === "Incoming" &&
      item.status === "Pending"
  ).length;

  const outgoingPending = transfers.filter(
    (item) =>
      item.direction === "Outgoing" &&
      item.status === "Pending"
  ).length;

  const accepted = transfers.filter(
    (item) => item.status === "Accepted"
  ).length;

  const rejected = transfers.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
          <ArrowLeftRight size={16} />
          Youth Management
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Member Transfer
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Review incoming and outgoing youth transfer requests
          for your centre.
        </p>
      </div>

      {/* CURRENT CENTRE */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            <Building2 size={21} />
          </div>

          <div>
            <p className="text-xs text-blue-600 font-semibold uppercase">
              Your Centre
            </p>

            <h2 className="text-lg font-bold text-gray-900">
              {currentCentre}
            </h2>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <SummaryCard
          title="Incoming Pending"
          value={incomingPending}
          description="Requires your review"
          icon={ArrowLeftRight}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <SummaryCard
          title="Outgoing Pending"
          value={outgoingPending}
          description="Waiting for destination"
          icon={Clock3}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <SummaryCard
          title="Accepted"
          value={accepted}
          description="Successfully processed"
          icon={CheckCircle2}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <SummaryCard
          title="Rejected"
          value={rejected}
          description="Transfer requests"
          icon={XCircle}
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />

      </div>

      {/* TRANSFER TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

        {/* TOP */}
        <div className="p-5 border-b border-gray-200">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Transfer Requests
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Review requests involving your youth centre.
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full xl:w-80">

              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search youth or transfer ID..."
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
                "
              />

            </div>

          </div>

          {/* TABS + FILTER */}
          <div className="flex flex-wrap items-center gap-3 mt-5">

            {["Incoming", "Outgoing", "All"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                  transition
                  ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }
                `}
              >
                {tab}
              </button>
            ))}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                ml-auto
                px-3
                py-2
                rounded-lg
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-600
                outline-none
              "
            >
              <option value="All">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Accepted">
                Accepted
              </option>

              <option value="Rejected">
                Rejected
              </option>
            </select>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Youth
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Transfer
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Reason
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Requested
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredTransfers.map((transfer) => (

                <tr
                  key={transfer.id}
                  className="border-b border-gray-100 hover:bg-blue-50/30 transition"
                >

                  {/* YOUTH */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <UserRound size={18} />
                      </div>

                      <div>

                        <p className="font-semibold text-gray-900">
                          {transfer.youthName}
                        </p>

                        <p className="text-xs text-gray-400">
                          {transfer.youthId}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* TRANSFER */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2 text-sm">

                      <span className="text-gray-600">
                        {transfer.fromCentre.replace(
                          " Youth Centre",
                          ""
                        )}
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-blue-500"
                      />

                      <span className="font-medium text-gray-900">
                        {transfer.toCentre.replace(
                          " Youth Centre",
                          ""
                        )}
                      </span>

                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {transfer.id}
                    </p>

                  </td>

                  {/* REASON */}
                  <td className="px-5 py-4">

                    <span className="text-sm text-gray-700">
                      {transfer.reason}
                    </span>

                  </td>

                  {/* DATE */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {transfer.requestDate}
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <StatusBadge status={transfer.status} />
                  </td>

                  {/* ACTION */}
                  <td className="px-5 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => {
                          setSelectedTransfer(transfer);
                          setShowDetails(true);
                        }}
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
                        "
                      >
                        <Eye size={16} />
                      </button>

                      <button
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
                        "
                      >
                        <MoreHorizontal size={16} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {filteredTransfers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="py-12 text-center text-gray-500"
                  >
                    No transfer requests found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* INFORMATION */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">

        <div className="flex gap-3">

          <AlertCircle
            size={20}
            className="text-amber-600 mt-0.5"
          />

          <div>

            <h3 className="font-semibold text-gray-900">
              Transfer approval workflow
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Incoming transfers require your approval before
              the youth is added to your centre. Outgoing
              transfers require approval from the destination
              centre before the youth is moved.
            </p>

          </div>

        </div>

      </div>

      {/* DETAILS MODAL */}
      {showDetails && selectedTransfer && (
        <TransferModal
          transfer={selectedTransfer}
          onClose={() => setShowDetails(false)}
          onAccept={() =>
            updateTransferStatus(
              selectedTransfer.id,
              "Accepted"
            )
          }
          onReject={() =>
            updateTransferStatus(
              selectedTransfer.id,
              "Rejected"
            )
          }
        />
      )}

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
}) => (
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

    <p className="text-xs text-gray-500 font-medium">
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

/* =========================
   STATUS
========================= */

const StatusBadge = ({ status }) => {

  const styles = {
    Pending: "bg-amber-50 text-amber-700",
    Accepted: "bg-emerald-50 text-emerald-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex
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

/* =========================
   TRANSFER MODAL
========================= */

const TransferModal = ({
  transfer,
  onClose,
  onAccept,
  onReject,
}) => {

  const isPending = transfer.status === "Pending";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">

          <div>

            <p className="text-xs text-blue-600 font-semibold">
              TRANSFER REQUEST
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-1">
              {transfer.youthName}
            </h2>

            <p className="text-sm text-gray-500">
              {transfer.id}
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>

        </div>

        {/* BODY */}
        <div className="p-6 space-y-6">

          {/* YOUTH */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <UserRound size={24} />
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                {transfer.youthName}
              </h3>

              <p className="text-sm text-gray-500">
                {transfer.gender} · {transfer.age} years
              </p>

              <p className="text-xs text-gray-400">
                {transfer.youthId}
              </p>

            </div>

          </div>

          {/* TRANSFER PATH */}
          <div className="bg-gray-50 rounded-xl p-5">

            <p className="text-xs text-gray-400 uppercase font-semibold mb-3">
              Transfer Route
            </p>

            <div className="flex items-center gap-3">

              <div className="flex-1">
                <p className="text-xs text-gray-400">
                  From
                </p>

                <p className="font-semibold text-gray-900">
                  {transfer.fromCentre}
                </p>
              </div>

              <ArrowRight
                className="text-blue-600"
                size={22}
              />

              <div className="flex-1 text-right">
                <p className="text-xs text-gray-400">
                  To
                </p>

                <p className="font-semibold text-gray-900">
                  {transfer.toCentre}
                </p>
              </div>

            </div>

          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-4">

            <InfoItem
              label="Reason"
              value={transfer.reason}
            />

            <InfoItem
              label="Request Date"
              value={transfer.requestDate}
            />

            <InfoItem
              label="Direction"
              value={transfer.direction}
            />

            <InfoItem
              label="Current Status"
              value={transfer.status}
            />

          </div>

          {/* ACCEPT INFO */}
          {transfer.direction === "Incoming" &&
            isPending && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">

                <div className="flex gap-3">

                  <FileCheck2
                    className="text-emerald-600"
                    size={20}
                  />

                  <div>

                    <p className="font-semibold text-gray-900">
                      Accepting this transfer
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      The youth will be added to your
                      centre after the transfer is accepted.
                    </p>

                  </div>

                </div>

              </div>
            )}

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              font-medium
              text-gray-600
            "
          >
            Close
          </button>

          {isPending && (
            <>
              <button
                onClick={onReject}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-red-50
                  text-red-600
                  text-sm
                  font-semibold
                  hover:bg-red-100
                "
              >
                Reject
              </button>

              <button
                onClick={onAccept}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-blue-600
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-blue-700
                "
              >
                Accept Transfer
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400">
      {label}
    </p>

    <p className="text-sm font-semibold text-gray-800 mt-1">
      {value}
    </p>
  </div>
);

export default MemberTransfer;