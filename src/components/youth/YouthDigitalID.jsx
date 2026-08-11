import {
  QrCode,
  Download,
  Printer,
  ShieldCheck,
  User,
  MapPin,
  CalendarDays,
  RefreshCw,
  CheckCircle2,
  Info,
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const YouthDigitalID = () => {
  const [qrVersion, setQrVersion] = useState(1);

  /*
   * IMPORTANT:
   * In the real backend, this value should come from
   * the authenticated user's account.
   *
   * Do NOT put CID, phone number, address, etc. inside
   * the QR code.
   */
  const volunteer = {
    id: "YPS-2026-00124",
    name: "Tshering Pem",
    network: "Thimphu Y-PEER Network",
    location: "Thimphu",
    role: "Youth Volunteer",
    memberSince: "2025",
    status: "Active",
  };

  /*
   * Temporary frontend QR value.
   *
   * Later this should be a secure token generated
   * by your backend.
   */
  const qrValue = `YPS-VOLUNTEER:${volunteer.id}:V${qrVersion}`;

  const regenerateQR = () => {
    setQrVersion((previous) => previous + 1);
  };

  const downloadQR = () => {
    const svg = document.getElementById("yps-volunteer-qr");

    if (!svg) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    const blob = new Blob(
      [
        `<?xml version="1.0" standalone="no"?>\r\n${source}`,
      ],
      {
        type: "image/svg+xml;charset=utf-8",
      }
    );

    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");

    downloadLink.href = url;
    downloadLink.download = `${volunteer.id}-digital-id.svg`;

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(url);
  };

  const printQR = () => {
    const printWindow = window.open(
      "",
      "_blank",
      "width=700,height=800"
    );

    if (!printWindow) return;

    const svg = document.getElementById("yps-volunteer-qr");

    if (!svg) return;

    const svgMarkup = new XMLSerializer().serializeToString(svg);

    printWindow.document.write(`
      <!DOCTYPE html>

      <html>

      <head>

        <title>Youth Digital ID</title>

        <style>

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 40px;
            font-family: Arial, sans-serif;
            background: #f8fafc;
          }

          .card {
            width: 420px;
            margin: 0 auto;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 24px;
            padding: 32px;
            text-align: center;
          }

          .logo {
            width: 52px;
            height: 52px;
            margin: 0 auto 12px;
            border-radius: 14px;
            background: #2563eb;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
          }

          h1 {
            margin: 0;
            font-size: 20px;
          }

          .subtitle {
            color: #6b7280;
            font-size: 12px;
            margin-top: 5px;
          }

          .qr {
            margin: 28px auto;
          }

          .name {
            font-size: 18px;
            font-weight: 700;
            margin-top: 15px;
          }

          .id {
            color: #2563eb;
            font-size: 13px;
            font-weight: 600;
            margin-top: 5px;
          }

          .details {
            margin-top: 20px;
            text-align: left;
            background: #f8fafc;
            border-radius: 14px;
            padding: 16px;
            font-size: 13px;
            line-height: 1.8;
          }

          .footer {
            margin-top: 20px;
            color: #6b7280;
            font-size: 11px;
          }

          @media print {

            body {
              background: white;
              padding: 0;
            }

            .card {
              border: none;
            }

          }

        </style>

      </head>

      <body>

        <div class="card">

          <div class="logo">
            YPS
          </div>

          <h1>
            Youth Digital ID
          </h1>

          <div class="subtitle">
            Royal Government of Bhutan
          </div>

          <div class="qr">
            ${svgMarkup}
          </div>

          <div class="name">
            ${volunteer.name}
          </div>

          <div class="id">
            ${volunteer.id}
          </div>

          <div class="details">

            <strong>Role:</strong>
            ${volunteer.role}
            <br />

            <strong>Network:</strong>
            ${volunteer.network}
            <br />

            <strong>Location:</strong>
            ${volunteer.location}
            <br />

            <strong>Member Since:</strong>
            ${volunteer.memberSince}

          </div>

          <div class="footer">
            Scan this QR code for event check-in.
          </div>

        </div>

        <script>

          window.onload = function () {
            window.print();
          };

        </script>

      </body>

      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <div className="flex items-center gap-2 text-blue-600">

          <QrCode size={17} />

          <span className="text-sm font-semibold">
            Volunteer Digital Identity
          </span>

        </div>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Youth Digital ID
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Use your personal QR code for quick and secure
          identification and event check-in.
        </p>

      </div>


      {/* MAIN GRID */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">


        {/* DIGITAL ID CARD */}

        <div className="xl:col-span-2">

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

            {/* CARD HEADER */}

            <div className="border-b border-gray-100 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                    Youth Portal System
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Youth Volunteer Digital ID
                  </h2>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <QrCode size={25} />
                </div>

              </div>

            </div>


            {/* CARD BODY */}

            <div className="p-6">

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">


                {/* QR */}

                <div className="flex flex-col items-center justify-center">

                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                    <QRCodeSVG
                      id="yps-volunteer-qr"
                      value={qrValue}
                      size={230}
                      level="H"
                      includeMargin
                    />

                  </div>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Scan this QR code at participating
                    youth activities.
                  </p>

                </div>


                {/* USER INFORMATION */}

                <div>

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                      TD
                    </div>

                    <div>

                      <h3 className="text-lg font-bold text-gray-900">
                        {volunteer.name}
                      </h3>

                      <p className="text-sm font-semibold text-blue-600">
                        {volunteer.id}
                      </p>

                    </div>

                  </div>


                  <div className="mt-6 space-y-4">


                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                        <User size={17} />
                      </div>

                      <div>

                        <p className="text-[11px] text-gray-400">
                          Role
                        </p>

                        <p className="text-sm font-semibold text-gray-800">
                          {volunteer.role}
                        </p>

                      </div>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                        <MapPin size={17} />
                      </div>

                      <div>

                        <p className="text-[11px] text-gray-400">
                          Network
                        </p>

                        <p className="text-sm font-semibold text-gray-800">
                          {volunteer.network}
                        </p>

                      </div>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                        <CalendarDays size={17} />
                      </div>

                      <div>

                        <p className="text-[11px] text-gray-400">
                          Member Since
                        </p>

                        <p className="text-sm font-semibold text-gray-800">
                          {volunteer.memberSince}
                        </p>

                      </div>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <CheckCircle2 size={17} />
                      </div>

                      <div>

                        <p className="text-[11px] text-gray-400">
                          Status
                        </p>

                        <p className="text-sm font-semibold text-green-600">
                          {volunteer.status}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* ACTIONS */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <button
                  onClick={downloadQR}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >

                  <Download size={17} />

                  Download QR

                </button>


                <button
                  onClick={printQR}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >

                  <Printer size={17} />

                  Print ID

                </button>


                <button
                  onClick={regenerateQR}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >

                  <RefreshCw size={17} />

                  Refresh QR

                </button>

              </div>

            </div>

          </div>

        </div>


        {/* INFORMATION PANEL */}

        <div className="space-y-4">


          {/* STATUS */}

          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">

                <ShieldCheck size={20} />

              </div>

              <div>

                <p className="text-sm font-bold text-gray-900">
                  Digital ID Active
                </p>

                <p className="text-xs text-green-700">
                  Ready for event check-in
                </p>

              </div>

            </div>

          </div>


          {/* HOW IT WORKS */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5">

            <div className="flex items-center gap-2">

              <Info
                size={17}
                className="text-blue-600"
              />

              <h3 className="text-sm font-bold text-gray-900">
                How it works
              </h3>

            </div>


            <div className="mt-4 space-y-4">

              <div className="flex gap-3">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  1
                </div>

                <p className="text-xs leading-5 text-gray-500">
                  Download or save your QR code on your
                  phone.
                </p>

              </div>


              <div className="flex gap-3">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  2
                </div>

                <p className="text-xs leading-5 text-gray-500">
                  Present your QR code when arriving at
                  an event.
                </p>

              </div>


              <div className="flex gap-3">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  3
                </div>

                <p className="text-xs leading-5 text-gray-500">
                  Event staff scan the code to identify
                  your volunteer account.
                </p>

              </div>


              <div className="flex gap-3">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  4
                </div>

                <p className="text-xs leading-5 text-gray-500">
                  If registered, your attendance can be
                  recorded instantly.
                </p>

              </div>

            </div>

          </div>


          {/* SECURITY */}

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <div className="flex gap-3">

              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-amber-600"
              />

              <div>

                <h3 className="text-sm font-bold text-gray-900">
                  Keep your QR private
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Your QR code is used to identify your
                  volunteer account. Do not share it publicly
                  or with people you do not trust.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER */}

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">

        <div className="flex items-start gap-3">

          <QrCode
            size={19}
            className="mt-0.5 text-blue-600"
          />

          <div>

            <p className="text-sm font-semibold text-gray-900">
              Fast event check-in
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Once connected to the event registration
              system, your QR code can automatically identify
              your account and verify your registration.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default YouthDigitalID;