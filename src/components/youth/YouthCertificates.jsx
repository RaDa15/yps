import { useState } from "react";
import {
  Award,
  Download,
  Eye,
  FileBadge,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  CalendarDays,
  X,
} from "lucide-react";

const CERTIFICATES = [
  {
    id: 1,
    year: "2026",
    title: "Youth Volunteer Certificate",
    type: "Annual Volunteer Certificate",
    hours: 126,
    activities: 18,
    issuedDate: "15 July 2026",
    certificateId: "YPS-VOL-2026-00128",
    status: "Issued",
  },
  {
    id: 2,
    year: "2025",
    title: "Youth Volunteer Certificate",
    type: "Annual Volunteer Certificate",
    hours: 98,
    activities: 14,
    issuedDate: "20 December 2025",
    certificateId: "YPS-VOL-2025-00491",
    status: "Issued",
  },
  {
    id: 3,
    year: "2024",
    title: "Volunteer Participation Certificate",
    type: "Volunteer Participation",
    hours: 64,
    activities: 9,
    issuedDate: "18 December 2024",
    certificateId: "YPS-VOL-2024-00217",
    status: "Issued",
  },
];

const YouthCertificates = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [previewCertificate, setPreviewCertificate] = useState(null);

  const filteredCertificates =
    selectedYear === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter(
          (certificate) => certificate.year === selectedYear
        );

  const totalHours = CERTIFICATES.reduce(
    (total, certificate) => total + certificate.hours,
    0
  );

  const totalActivities = CERTIFICATES.reduce(
    (total, certificate) => total + certificate.activities,
    0
  );

  const handleDownload = (certificate) => {
    alert(
      `Certificate ${certificate.certificateId} will be downloaded.`
    );
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
            <FileBadge size={17} />
            Recognition & Certificates
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            My Certificates
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            View, generate and download your volunteer certificates.
          </p>

        </div>

        <button
          onClick={() => {
            const currentYear = new Date().getFullYear().toString();

            const existing = CERTIFICATES.find(
              (certificate) => certificate.year === currentYear
            );

            if (existing) {
              setPreviewCertificate(existing);
            } else {
              alert(
                "Your current-year certificate is not yet eligible for generation."
              );
            }
          }}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            bg-green-600
            hover:bg-green-700
            text-white
            text-sm
            font-semibold
            transition
            shadow-sm
          "
        >
          <Award size={17} />
          Generate Certificate
        </button>

      </div>


      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Certificates */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <Award size={20} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Certificates Earned
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {CERTIFICATES.length}
          </h2>

          <p className="text-xs text-green-600 mt-1 font-medium">
            Across 3 years
          </p>

        </div>


        {/* Volunteer Hours */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Clock3 size={20} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Certified Hours
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {totalHours}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Total validated hours
          </p>

        </div>


        {/* Activities */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <CalendarDays size={20} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Activities
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {totalActivities}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Included in certificates
          </p>

        </div>


        {/* Verification */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Verification
          </p>

          <h2 className="text-lg font-bold text-emerald-600">
            Verified
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Digitally verifiable certificates
          </p>

        </div>

      </div>


      {/* =====================================================
          FILTER
      ===================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <div>

            <h2 className="text-sm font-bold text-gray-900">
              Certificate History
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Select a year to view your certificates.
            </p>

          </div>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
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
              focus:ring-2
              focus:ring-green-500/20
              focus:border-green-400
            "
          >
            <option value="All">
              All Years
            </option>

            <option value="2026">
              2026
            </option>

            <option value="2025">
              2025
            </option>

            <option value="2024">
              2024
            </option>

          </select>

        </div>

      </div>


      {/* =====================================================
          CERTIFICATE CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {filteredCertificates.map((certificate) => (

          <div
            key={certificate.id}
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              hover:border-green-300
              hover:shadow-md
              transition
            "
          >

            <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-green-50
                    text-green-600
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Award size={24} />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-gray-900">
                    {certificate.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {certificate.type}
                  </p>

                </div>

              </div>


              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  px-2.5
                  py-1
                  rounded-full
                  bg-emerald-50
                  text-emerald-700
                  text-[11px]
                  font-semibold
                "
              >
                <CheckCircle2 size={12} />
                {certificate.status}
              </span>

            </div>


            {/* Certificate details */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">

              <div className="bg-gray-50 rounded-xl p-3">

                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Year
                </p>

                <p className="text-sm font-bold text-gray-900 mt-1">
                  {certificate.year}
                </p>

              </div>


              <div className="bg-gray-50 rounded-xl p-3">

                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Hours
                </p>

                <p className="text-sm font-bold text-gray-900 mt-1">
                  {certificate.hours}
                </p>

              </div>


              <div className="bg-gray-50 rounded-xl p-3">

                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Activities
                </p>

                <p className="text-sm font-bold text-gray-900 mt-1">
                  {certificate.activities}
                </p>

              </div>


              <div className="bg-gray-50 rounded-xl p-3">

                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Issued
                </p>

                <p className="text-xs font-bold text-gray-900 mt-1">
                  {certificate.issuedDate}
                </p>

              </div>

            </div>


            {/* Certificate ID */}

            <div className="mt-4 p-3 rounded-xl border border-gray-100 bg-gray-50">

              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                Certificate Verification ID
              </p>

              <p className="text-xs font-mono font-semibold text-gray-700 mt-1">
                {certificate.certificateId}
              </p>

            </div>


            {/* Actions */}

            <div className="flex flex-col sm:flex-row gap-2 mt-4">

              <button
                onClick={() => setPreviewCertificate(certificate)}
                className="
                  flex-1
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-gray-100
                  hover:bg-gray-200
                  text-gray-700
                  text-sm
                  font-semibold
                  transition
                "
              >
                <Eye size={16} />
                Preview
              </button>


              <button
                onClick={() => handleDownload(certificate)}
                className="
                  flex-1
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  text-sm
                  font-semibold
                  transition
                "
              >
                <Download size={16} />
                Download
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          EMPTY STATE
      ===================================================== */}

      {filteredCertificates.length === 0 && (

        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">

          <Award
            size={40}
            className="mx-auto text-gray-300"
          />

          <h3 className="text-sm font-bold text-gray-900 mt-4">
            No certificates found
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            There are no certificates available for the selected year.
          </p>

        </div>

      )}


      {/* =====================================================
          INFORMATION CARD
      ===================================================== */}

      <div className="bg-green-50 border border-green-100 rounded-2xl p-5">

        <div className="flex items-start gap-3">

          <div className="w-9 h-9 rounded-xl bg-green-600 text-white flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={18} />
          </div>

          <div>

            <p className="text-sm font-semibold text-gray-900">
              Your certificates are digitally verifiable
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Every certificate contains a unique verification ID.
              Organizations can verify your volunteer contribution
              directly through the Youth Portal System.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          PREVIEW MODAL
      ===================================================== */}

      {previewCertificate && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setPreviewCertificate(null)}
        >

          <div
            className="
              bg-white
              rounded-2xl
              shadow-2xl
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  Certificate Preview
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  {previewCertificate.certificateId}
                </p>

              </div>

              <button
                onClick={() => setPreviewCertificate(null)}
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-gray-100
                  hover:bg-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  transition
                "
              >
                <X size={18} />
              </button>

            </div>


            {/* Certificate */}

            <div className="p-6">

              <div
                className="
                  border-4
                  border-green-600
                  rounded-xl
                  p-8
                  bg-gradient-to-br
                  from-white
                  via-green-50/30
                  to-white
                  text-center
                "
              >

                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto">
                  <Award size={32} />
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-5">
                  Royal Government of Bhutan
                </p>

                <h1 className="text-2xl font-bold text-gray-900 mt-3">
                  Youth Portal System
                </h1>

                <p className="text-xs text-green-600 uppercase tracking-widest font-semibold mt-2">
                  Certificate of Volunteer Service
                </p>

                <div className="w-24 h-px bg-green-300 mx-auto my-6" />

                <p className="text-sm text-gray-500">
                  This certificate is proudly presented to
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-3">
                  Tshering Pem
                </h2>

                <p className="text-sm text-gray-500 max-w-md mx-auto mt-3 leading-relaxed">
                  In recognition of dedicated volunteer service,
                  active participation and valuable contribution to
                  youth development initiatives.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mt-7">

                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold">
                      Volunteer Hours
                    </p>

                    <p className="text-lg font-bold text-green-600 mt-1">
                      {previewCertificate.hours}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold">
                      Activities
                    </p>

                    <p className="text-lg font-bold text-green-600 mt-1">
                      {previewCertificate.activities}
                    </p>
                  </div>

                </div>

                <div className="mt-7 pt-5 border-t border-gray-200">

                  <p className="text-[10px] text-gray-400">
                    Certificate ID
                  </p>

                  <p className="font-mono text-xs font-semibold text-gray-700 mt-1">
                    {previewCertificate.certificateId}
                  </p>

                </div>

              </div>


              <button
                onClick={() => handleDownload(previewCertificate)}
                className="
                  w-full
                  mt-4
                  py-3
                  rounded-xl
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition
                "
              >
                <Download size={17} />
                Download Certificate
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default YouthCertificates;
