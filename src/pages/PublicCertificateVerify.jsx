import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Search,
  Download,
  Share2,
  Calendar,
  Building2,
  User,
  Clock,
  QrCode,
  AlertCircle
} from "lucide-react";

// Mock Verified Certificates Database
const MOCK_CERTIFICATES = {
  "YPS-2026-VOL-8921": {
    certId: "YPS-2026-VOL-8921",
    recipient: "Sonam Tobgay",
    cid: "11501004512",
    year: "2025-2026",
    group: "Thimphu Harmony Volunteer Group",
    role: "Lead Volunteer & Coordinator",
    hoursLogged: 140,
    issueDate: "January 15, 2026",
    issuer: "Programmes & Youth Coordination Division (PYCD)",
    ministry: "Ministry of Education & Skills Development, Royal Government of Bhutan",
    status: "VERIFIED_AUTHENTIC",
    hash: "0x8f2a49b7e31d04c5a",
  },
  "YPS-2026-PROG-3041": {
    certId: "YPS-2026-PROG-3041",
    recipient: "Pema Choden",
    cid: "11204001289",
    year: "2025-2026",
    programme: "National Youth Digital Leadership Summit",
    duration: "5 Days (Full Completion)",
    venue: "Paro Youth Centre",
    issueDate: "February 20, 2026",
    issuer: "Programmes & Youth Coordination Division (PYCD)",
    ministry: "Ministry of Education & Skills Development",
    status: "VERIFIED_AUTHENTIC",
    hash: "0x3c11d9a04f2910ee",
  },
};

const PublicCertificateVerify = () => {
  const { certId: routeCertId } = useParams();
  const [searchCode, setSearchCode] = useState(routeCertId || "YPS-2026-VOL-8921");
  const [searchedCert, setSearchedCert] = useState(
    MOCK_CERTIFICATES[routeCertId || "YPS-2026-VOL-8921"] || MOCK_CERTIFICATES["YPS-2026-VOL-8921"]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    if (MOCK_CERTIFICATES[cleanCode]) {
      setSearchedCert(MOCK_CERTIFICATES[cleanCode]);
    } else {
      setSearchedCert(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 flex flex-col font-sans">
      {/* Header */}
      <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200/80 px-6 md:px-12 flex justify-between items-center sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
            YPS
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 leading-none">
              Youth Portal System
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">e-Certificate QR Verification Gateway</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Government Cryptographic Verification</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-4xl w-full mx-auto p-4 md:p-8 my-auto">
        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 mb-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Verify Official Youth e-Certificate
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Enter the unique Certificate Verification Number (e.g. YPS-2026-VOL-8921) to verify authenticity directly from PYCD records.
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Enter Certificate Code (e.g. YPS-2026-VOL-8921)"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-bold transition shadow-md shadow-blue-500/20 flex items-center gap-2 flex-shrink-0"
            >
              <span>Verify</span>
            </button>
          </form>
        </div>

        {/* Certificate Display Result */}
        {searchedCert ? (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-200/80 relative overflow-hidden">
            {/* Verification Status Ribbon */}
            <div className="bg-emerald-500 text-white py-2 px-8 font-bold text-xs uppercase tracking-widest text-center shadow-sm -mx-6 md:-mx-10 -mt-6 md:-mt-10 mb-8 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>OFFICIALLY VERIFIED & AUTHENTIC — ROYAL GOVERNMENT OF BHUTAN</span>
            </div>

            <div className="border-4 border-double border-blue-900/20 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-blue-50/30 via-white to-amber-50/20 relative">
              {/* Seal Watermark */}
              <Award className="absolute top-8 right-8 w-32 h-32 text-amber-500/10 pointer-events-none" />

              <div className="text-center mb-8">
                <p className="text-xs font-bold text-blue-900 tracking-widest uppercase mb-1">
                  {searchedCert.ministry}
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-serif">
                  CERTIFICATE OF ACHIEVEMENT & RECOGNITION
                </h3>
                <p className="text-xs text-gray-500 mt-1">Issued under the authority of PYCD</p>
              </div>

              <div className="text-center my-8 max-w-2xl mx-auto">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">This is to certify that</p>
                <h4 className="text-3xl font-extrabold text-blue-900 font-serif mb-2">
                  {searchedCert.recipient}
                </h4>
                <p className="text-xs text-gray-600 font-mono">CID: {searchedCert.cid}</p>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed font-sans">
                  has successfully completed active service and contributions under the{" "}
                  <strong className="text-gray-900">{searchedCert.group || searchedCert.programme}</strong>{" "}
                  for the academic/service year <strong className="text-gray-900">{searchedCert.year}</strong>.
                </p>
              </div>

              {/* Certificate Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-200/70 text-xs my-6">
                <div>
                  <span className="text-gray-400 font-medium block">Certificate ID</span>
                  <span className="font-bold text-gray-900 font-mono">{searchedCert.certId}</span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block">Active Hours / Role</span>
                  <span className="font-bold text-blue-700">
                    {searchedCert.hoursLogged ? `${searchedCert.hoursLogged} Hours` : searchedCert.duration}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block">Issue Date</span>
                  <span className="font-bold text-gray-900">{searchedCert.issueDate}</span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block">Verification Hash</span>
                  <span className="font-bold text-gray-600 font-mono truncate">{searchedCert.hash}</span>
                </div>
              </div>

              {/* Footer Signatures */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div>
                  <p className="text-xs font-bold text-gray-900">{searchedCert.issuer}</p>
                  <p className="text-[10px] text-gray-500">Department of Education Programmes</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cryptographically Signed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Authenticated PDF</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">Certificate Not Found</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              No matching record found for "{searchCode}". Please verify the code printed on the e-Certificate QR code.
            </p>
          </div>
        )}
      </main>

      <footer className="py-4 text-center text-xs text-gray-500 border-t border-gray-200/80 bg-white">
        © 2026 Royal Government of Bhutan • Youth Portal System • e-Certificate Verifier Module
      </footer>
    </div>
  );
};

export default PublicCertificateVerify;
