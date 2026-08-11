import { useState } from "react";
import { QrCode, ShieldCheck, Download, Share2, Sparkles, CheckCircle2, User, Award } from "lucide-react";

export default function YouthDigitalIdCard({
  youthData = {
    yrn: "YRN-THI-2026-9042",
    fullName: "Tshering Pem",
    cid: "11501004512",
    dzongkhag: "Thimphu",
    center: "Thimphu Harmony Youth Centre",
    dob: "2003-04-12",
    age: 22,
    status: "Active Youth Member", // Automatically turns to Alumni at 25 per ToR
    validUntil: "2028-04-12",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  },
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="max-w-sm w-full mx-auto">
      {/* Digital Card Wrapper */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative h-60 w-full rounded-3xl p-6 text-white cursor-pointer transition-all duration-500 transform hover:scale-[1.02] shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 border border-white/20"
      >
        {/* Background Decorative Rings */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

        {!flipped ? (
          /* Card Front */
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-sm border border-white/30">
                  YPS
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none tracking-wider text-blue-100">
                    BHUTAN YOUTH DIGITAL ID
                  </h4>
                  <p className="text-[10px] text-blue-200">Royal Government of Bhutan</p>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Verified YRN</span>
              </div>
            </div>

            {/* Middle Profile & Details */}
            <div className="flex items-center gap-4 my-auto">
              <img
                src={youthData.avatar}
                alt={youthData.fullName}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/40 shadow-md"
              />
              <div>
                <h3 className="text-lg font-extrabold text-white">{youthData.fullName}</h3>
                <p className="text-xs text-blue-200 font-mono">CID: {youthData.cid}</p>
                <p className="text-[11px] text-blue-100 font-medium mt-0.5">{youthData.center}</p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/15 text-[10px]">
              <div>
                <span className="text-blue-300 block">YRN CODE</span>
                <span className="font-mono font-bold tracking-wider text-white text-xs">{youthData.yrn}</span>
              </div>
              <div className="text-right">
                <span className="text-blue-300 block">STATUS (AGE {youthData.age})</span>
                <span className="font-bold text-emerald-300">{youthData.status}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Card Back (QR Code for Instant Check-in) */
          <div className="relative z-10 flex flex-col justify-between h-full text-center">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider">
                Instant Check-in QR
              </span>
              <span className="text-[10px] text-blue-300">Tap to flip</span>
            </div>

            <div className="bg-white p-3 rounded-2xl w-28 h-28 mx-auto shadow-inner flex items-center justify-center">
              <QrCode className="w-24 h-24 text-gray-900" />
            </div>

            <p className="text-[10px] text-blue-100 font-mono">
              Scan at any of 13 Youth Centres for immediate service access
            </p>
          </div>
        )}
      </div>

      <p className="text-center text-[11px] text-gray-500 mt-2">
        Click ID card to toggle QR Code for Youth Centre Check-in
      </p>
    </div>
  );
}
