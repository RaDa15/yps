import { useState } from "react";
import {
  Award,
  Search,
  Plus,
  Eye,
  Download,
  CheckCircle2,
  Clock3,
  XCircle,
  User,
  CalendarDays,
  FileCheck2,
  X,
} from "lucide-react";

const INITIAL_CERTIFICATES = [
  {
    id: "CERT-2026-001",
    youth: "Sonam Wangchuk",
    cid: "10102003045",
    programme: "Youth Leadership Programme",
    type: "Programme Completion",
    issueDate: "05 Aug 2026",
    status: "Issued",
  },
  {
    id: "CERT-2026-002",
    youth: "Pema Dorji",
    cid: "10203004056",
    programme: "Volunteer Service Programme",
    type: "Volunteer Service",
    issueDate: "03 Aug 2026",
    status: "Issued",
  },
  {
    id: "CERT-2026-003",
    youth: "Karma Choden",
    cid: "10304005067",
    programme: "Digital Literacy Programme",
    type: "Programme Completion",
    issueDate: "-",
    status: "Pending",
  },
  {
    id: "CERT-2026-004",
    youth: "Tshering Norbu",
    cid: "10405006078",
    programme: "Community Service Drive",
    type: "Volunteer Service",
    issueDate: "-",
    status: "Pending",
  },
];

const STATUS_STYLES = {
  Issued: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Revoked: "bg-red-50 text-red-700 border-red-200",
};

const ECertificateGeneration = () => {
  const [certificates, setCertificates] = useState(INITIAL_CERTIFICATES);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = certificates.filter((certificate) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      certificate.id.toLowerCase().includes(searchValue) ||
      certificate.youth.toLowerCase().includes(searchValue) ||
      certificate.cid.includes(searchValue) ||
      certificate.programme.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" ||
      certificate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalCertificates = certificates.length;

  const issuedCertificates = certificates.filter(
    (certificate) => certificate.status === "Issued"
  ).length;

  const pendingCertificates = certificates.filter(
    (certificate) => certificate.status === "Pending"
  ).length;

  const revokedCertificates = certificates.filter(
    (certificate) => certificate.status === "Revoked"
  ).length;

  const issueCertificate = (id) => {
    setCertificates((current) =>
      current.map((certificate) =>
        certificate.id === id
          ? {
              ...certificate,
              issueDate: "08 Aug 2026",
              status: "Issued",
            }
          : certificate
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-1">
              <Award size={16} />
              Certification Management
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              e-Certificate Generation
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Generate, issue and manage digital certificates for youth
              and volunteers.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
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
              text-sm
              font-semibold
              hover:bg-blue-700
              transition
              shadow-sm
            "
          >
            <Plus size={18} />
            Generate Certificate
          </button>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Award size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Total Certificates
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {totalCertificates}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Centre records
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle2 size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Issued
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {issuedCertificates}
            </h2>

            <p className="text-xs text-emerald-600 mt-1 font-medium">
              Successfully issued
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Clock3 size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Pending
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {pendingCertificates}
            </h2>

            <p className="text-xs text-amber-600 mt-1 font-medium">
              Awaiting issuance
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <XCircle size={20} />
            </div>

            <p className="text-xs text-gray-500">
              Revoked
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {revokedCertificates}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Invalidated certificates
            </p>

          </div>

        </div>

        {/* SEARCH + FILTER */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4">

          <div className="flex flex-col md:flex-row gap-3">

            <div className="relative flex-1">

              <Search
                size={18}
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
                placeholder="Search certificate, youth, CID or programme..."
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                bg-white
                text-sm
                outline-none
                focus:border-blue-500
              "
            >
              <option value="All">All Status</option>
              <option value="Issued">Issued</option>
              <option value="Pending">Pending</option>
              <option value="Revoked">Revoked</option>
            </select>

          </div>

        </div>

        {/* CERTIFICATE TABLE */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

          <div className="px-6 py-5 border-b border-gray-200">

            <h2 className="text-lg font-bold text-gray-900">
              Certificate Records
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage certificates generated by your youth centre.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>

                <tr className="border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wide">

                  <th className="text-left px-6 py-4">
                    Certificate
                  </th>

                  <th className="text-left px-4 py-4">
                    Recipient
                  </th>

                  <th className="text-left px-4 py-4">
                    Programme
                  </th>

                  <th className="text-left px-4 py-4">
                    Issue Date
                  </th>

                  <th className="text-left px-4 py-4">
                    Status
                  </th>

                  <th className="text-right px-6 py-4">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredCertificates.map((certificate) => (

                  <tr
                    key={certificate.id}
                    className="
                      border-b
                      border-gray-100
                      hover:bg-gray-50
                      transition
                    "
                  >

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

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
                          <Award size={19} />
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {certificate.id}
                          </p>

                          <p className="text-xs text-gray-400">
                            {certificate.type}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2">

                        <div className="
                          w-8
                          h-8
                          rounded-lg
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                        ">
                          <User size={15} className="text-gray-500" />
                        </div>

                        <div>

                          <p className="text-sm font-medium text-gray-900">
                            {certificate.youth}
                          </p>

                          <p className="text-xs text-gray-400">
                            CID: {certificate.cid}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <p className="text-sm text-gray-700">
                        {certificate.programme}
                      </p>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <CalendarDays size={15} />

                        {certificate.issueDate}

                      </div>

                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={`
                          inline-flex
                          items-center
                          px-3
                          py-1
                          rounded-full
                          border
                          text-xs
                          font-semibold
                          ${STATUS_STYLES[certificate.status]}
                        `}
                      >
                        {certificate.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <button
                          onClick={() =>
                            setSelectedCertificate(certificate)
                          }
                          className="
                            p-2
                            rounded-lg
                            text-gray-500
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition
                          "
                          title="View certificate"
                        >
                          <Eye size={17} />
                        </button>

                        {certificate.status === "Pending" && (
                          <button
                            onClick={() =>
                              issueCertificate(certificate.id)
                            }
                            className="
                              p-2
                              rounded-lg
                              text-emerald-600
                              hover:bg-emerald-50
                              transition
                            "
                            title="Issue certificate"
                          >
                            <FileCheck2 size={17} />
                          </button>
                        )}

                        {certificate.status === "Issued" && (
                          <button
                            className="
                              p-2
                              rounded-lg
                              text-blue-600
                              hover:bg-blue-50
                              transition
                            "
                            title="Download certificate"
                          >
                            <Download size={17} />
                          </button>
                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredCertificates.length === 0 && (
            <div className="py-12 text-center">

              <Award
                size={38}
                className="mx-auto text-gray-300"
              />

              <p className="text-sm font-medium text-gray-600 mt-3">
                No certificates found
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Try changing your search or filter.
              </p>

            </div>
          )}

        </div>

      </div>

      {/* CREATE CERTIFICATE MODAL */}
      {showCreateModal && (
        <CreateCertificateModal
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {/* CERTIFICATE DETAILS MODAL */}
      {selectedCertificate && (
        <CertificateDetailsModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

    </div>
  );
};


/* =========================================================
   CREATE CERTIFICATE MODAL
========================================================= */

const CreateCertificateModal = ({ onClose }) => {

  return (
    <div className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/40
      p-4
    ">

      <div className="
        bg-white
        w-full
        max-w-2xl
        rounded-2xl
        shadow-xl
      ">

        <div className="
          flex
          items-center
          justify-between
          px-6
          py-5
          border-b
        ">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Generate e-Certificate
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create a digital certificate for a youth or volunteer.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2">

            <label className="text-sm font-medium text-gray-700">
              Recipient
            </label>

            <select className="
              w-full
              mt-2
              px-4
              py-3
              border
              rounded-xl
              text-sm
              bg-white
            ">
              <option>Select youth or volunteer</option>
              <option>Sonam Wangchuk</option>
              <option>Pema Dorji</option>
              <option>Karma Choden</option>
              <option>Tshering Norbu</option>
            </select>

          </div>

          <div>

            <label className="text-sm font-medium text-gray-700">
              Certificate Type
            </label>

            <select className="
              w-full
              mt-2
              px-4
              py-3
              border
              rounded-xl
              text-sm
              bg-white
            ">
              <option>Programme Completion</option>
              <option>Volunteer Service</option>
              <option>Participation</option>
              <option>Achievement</option>
            </select>

          </div>

          <div>

            <label className="text-sm font-medium text-gray-700">
              Issue Date
            </label>

            <input
              type="date"
              className="
                w-full
                mt-2
                px-4
                py-3
                border
                rounded-xl
                text-sm
              "
            />

          </div>

          <div className="md:col-span-2">

            <label className="text-sm font-medium text-gray-700">
              Programme / Activity
            </label>

            <input
              className="
                w-full
                mt-2
                px-4
                py-3
                border
                rounded-xl
                text-sm
                outline-none
                focus:border-blue-500
              "
              placeholder="Enter programme or activity"
            />

          </div>

          <div className="md:col-span-2">

            <label className="text-sm font-medium text-gray-700">
              Certificate Remarks
            </label>

            <textarea
              rows="3"
              className="
                w-full
                mt-2
                px-4
                py-3
                border
                rounded-xl
                text-sm
                outline-none
                resize-none
                focus:border-blue-500
              "
              placeholder="Optional remarks..."
            />

          </div>

        </div>

        <div className="
          flex
          justify-end
          gap-3
          px-6
          py-5
          border-t
        ">

          <button
            onClick={onClose}
            className="
              px-5
              py-2.5
              rounded-xl
              border
              text-sm
              font-medium
            "
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-semibold
              hover:bg-blue-700
            "
          >
            Generate Certificate
          </button>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   CERTIFICATE DETAILS MODAL
========================================================= */

const CertificateDetailsModal = ({
  certificate,
  onClose,
}) => {

  return (
    <div className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/40
      p-4
    ">

      <div className="
        bg-white
        w-full
        max-w-lg
        rounded-2xl
        shadow-xl
      ">

        <div className="
          flex
          items-center
          justify-between
          px-6
          py-5
          border-b
        ">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Certificate Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Digital certificate record
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6 space-y-5">

          <div className="
            flex
            items-center
            gap-4
            p-4
            rounded-xl
            bg-blue-50
            border
            border-blue-100
          ">

            <div className="
              w-12
              h-12
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
            ">
              <Award size={22} />
            </div>

            <div>

              <p className="font-bold text-gray-900">
                {certificate.id}
              </p>

              <p className="text-xs text-gray-500">
                {certificate.type}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <p className="text-xs text-gray-400">
                Recipient
              </p>

              <p className="text-sm font-semibold text-gray-900">
                {certificate.youth}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                CID
              </p>

              <p className="text-sm font-semibold text-gray-900">
                {certificate.cid}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Programme
              </p>

              <p className="text-sm font-medium text-gray-700">
                {certificate.programme}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Issue Date
              </p>

              <p className="text-sm font-medium text-gray-700">
                {certificate.issueDate}
              </p>
            </div>

          </div>

          <div>

            <p className="text-xs text-gray-400 mb-1">
              Status
            </p>

            <span
              className={`
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                border
                text-xs
                font-semibold
                ${STATUS_STYLES[certificate.status]}
              `}
            >
              {certificate.status}
            </span>

          </div>

        </div>

        <div className="
          px-6
          py-5
          border-t
          flex
          justify-end
          gap-3
        ">

          {certificate.status === "Issued" && (
            <button
              className="
                px-5
                py-2.5
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                hover:bg-blue-700
              "
            >
              <Download size={16} />
              Download
            </button>
          )}

          <button
            onClick={onClose}
            className="
              px-5
              py-2.5
              rounded-xl
              border
              text-sm
              font-medium
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ECertificateGeneration;
