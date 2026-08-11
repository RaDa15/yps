import {
  CalendarDays,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  BarChart3,
  ClipboardCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";

// ======================================================
// DEMO DATA
// ======================================================

const programmes = [
  {
    name: "Youth Leadership Training",
    centre: "Thimphu Youth Centre",
    participants: 120,
    completion: "95%",
    status: "Completed",
    approval: "Approved",
  },
  {
    name: "Digital Skills Workshop",
    centre: "Paro Youth Centre",
    participants: 85,
    completion: "78%",
    status: "Ongoing",
    approval: "Approved",
  },
  {
    name: "Community Volunteer Campaign",
    centre: "Chukha Youth Centre",
    participants: 150,
    completion: "40%",
    status: "Ongoing",
    approval: "Pending Review",
  },
  {
    name: "Mental Health Awareness Programme",
    centre: "Punakha Youth Centre",
    participants: 90,
    completion: "100%",
    status: "Completed",
    approval: "Approved",
  },
];

const approvalQueue = [
  {
    title: "Environmental Awareness Campaign",
    centre: "Wangdue Youth Centre",
    date: "07 Aug 2026",
  },
  {
    title: "Career Guidance Programme",
    centre: "Sarpang Youth Centre",
    date: "06 Aug 2026",
  },
  {
    title: "Youth Sports Initiative",
    centre: "Bumthang Youth Centre",
    date: "05 Aug 2026",
  },
];

// ======================================================
// COMPONENT
// ======================================================

export default function ProgrammeMonitoring() {
  return (
    <div className="space-y-6">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <CalendarDays className="w-5 h-5" />
            </div>

            <div>

              <h1 className="
                text-2xl
                font-bold
                text-gray-900
              ">
                Programme Monitoring
              </h1>

              <p className="
                text-sm
                text-gray-500
                mt-1
              ">
                Monitor programmes and activities across all Youth Centres
                in your jurisdiction
              </p>

            </div>

          </div>

        </div>

        {/* HEADER ACTION */}

        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-sm
            font-semibold
            rounded-xl
            transition
            shadow-sm
          "
        >
          <CalendarDays className="w-4 h-4" />
          Create Programme
        </button>

      </div>


      {/* ==================================================
          SUMMARY CARDS
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      ">

        {/* Total Programmes */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
          shadow-sm
          hover:shadow-md
          transition
        ">

          <div className="flex items-start justify-between">

            <div className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <CalendarDays className="w-5 h-5" />
            </div>

            <span className="
              flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-emerald-600
            ">
              <ArrowUpRight className="w-3.5 h-3.5" />
              12%
            </span>

          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Programmes
          </p>

          <h2 className="
            text-3xl
            font-bold
            text-gray-900
            mt-1
          ">
            24
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Programmes under monitoring
          </p>

        </div>


        {/* Active Programmes */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
          shadow-sm
          hover:shadow-md
          transition
        ">

          <div className="
            w-11
            h-11
            rounded-xl
            bg-emerald-50
            text-emerald-600
            flex
            items-center
            justify-center
          ">
            <BarChart3 className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Active Programmes
          </p>

          <h2 className="
            text-3xl
            font-bold
            text-gray-900
            mt-1
          ">
            18
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Currently ongoing
          </p>

        </div>


        {/* Participants */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
          shadow-sm
          hover:shadow-md
          transition
        ">

          <div className="
            w-11
            h-11
            rounded-xl
            bg-purple-50
            text-purple-600
            flex
            items-center
            justify-center
          ">
            <Users className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Participants
          </p>

          <h2 className="
            text-3xl
            font-bold
            text-gray-900
            mt-1
          ">
            2,480
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Youth participation
          </p>

        </div>


        {/* Pending Approvals */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
          shadow-sm
          hover:shadow-md
          transition
        ">

          <div className="
            w-11
            h-11
            rounded-xl
            bg-orange-50
            text-orange-600
            flex
            items-center
            justify-center
          ">
            <ClipboardCheck className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Pending Approval
          </p>

          <h2 className="
            text-3xl
            font-bold
            text-gray-900
            mt-1
          ">
            3
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Require your review
          </p>

        </div>

      </div>


      {/* ==================================================
          PROGRAMME TABLE
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        overflow-hidden
      ">

        {/* TABLE HEADER */}

        <div className="
          p-6
          border-b
          border-gray-100
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        ">

          <div>

            <h2 className="
              font-bold
              text-gray-900
            ">
              Youth Centre Programme Status
            </h2>

            <p className="
              text-xs
              text-gray-500
              mt-1
            ">
              Current programme progress and approval status
            </p>

          </div>

          <button
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-500
              hover:text-blue-600
              transition
            "
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>


        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>

              <tr className="
                bg-gray-50
                border-b
                border-gray-100
              ">

                <th className="
                  text-left
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Programme
                </th>

                <th className="
                  text-left
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Youth Centre
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Participants
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Completion
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Status
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Approval
                </th>

              </tr>

            </thead>


            <tbody>

              {programmes.map((item) => (

                <tr
                  key={item.name}
                  className="
                    border-b
                    border-gray-100
                    last:border-0
                    hover:bg-gray-50
                    transition
                  "
                >

                  {/* Programme */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-9
                        h-9
                        rounded-lg
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      ">
                        <CalendarDays className="w-4 h-4" />
                      </div>

                      <div>

                        <p className="
                          text-sm
                          font-semibold
                          text-gray-900
                        ">
                          {item.name}
                        </p>

                        <p className="
                          text-xs
                          text-gray-400
                          mt-0.5
                        ">
                          National youth programme
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Centre */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <Building2 className="
                        w-4
                        h-4
                        text-gray-400
                      " />

                      <span className="
                        text-sm
                        text-gray-600
                      ">
                        {item.centre}
                      </span>

                    </div>

                  </td>


                  {/* Participants */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <div className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      font-semibold
                      text-gray-800
                    ">

                      <Users className="
                        w-4
                        h-4
                        text-gray-400
                      "/>

                      {item.participants}

                    </div>

                  </td>


                  {/* Completion */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <div className="
                      inline-flex
                      items-center
                      gap-2
                    ">

                      <div className="
                        w-16
                        h-1.5
                        bg-gray-100
                        rounded-full
                        overflow-hidden
                      ">

                        <div
                          className="
                            h-full
                            bg-blue-600
                            rounded-full
                          "
                          style={{
                            width: item.completion,
                          }}
                        />

                      </div>

                      <span className="
                        text-xs
                        font-semibold
                        text-gray-700
                      ">
                        {item.completion}
                      </span>

                    </div>

                  </td>


                  {/* Status */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          item.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-blue-50 text-blue-700"
                        }
                      `}
                    >

                      {item.status === "Completed" ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}

                      {item.status}

                    </span>

                  </td>


                  {/* Approval */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          item.approval === "Approved"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
                        }
                      `}
                    >

                      {item.approval === "Approved" ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5" />
                      )}

                      {item.approval}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==================================================
          APPROVAL QUEUE
      ================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        overflow-hidden
      ">

        {/* HEADER */}

        <div className="
          p-6
          border-b
          border-gray-100
          flex
          items-center
          gap-3
        ">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-orange-50
            text-orange-600
            flex
            items-center
            justify-center
          ">
            <AlertCircle className="w-5 h-5" />
          </div>

          <div>

            <h2 className="
              font-bold
              text-gray-900
            ">
              Programme Approval Queue
            </h2>

            <p className="
              text-xs
              text-gray-500
              mt-1
            ">
              Programmes awaiting your review and approval
            </p>

          </div>

        </div>


        {/* QUEUE */}

        <div className="divide-y divide-gray-100">

          {approvalQueue.map((item) => (

            <div
              key={item.title}
              className="
                p-5
                sm:p-6
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
                hover:bg-gray-50
                transition
              "
            >

              {/* INFO */}

              <div className="flex items-start gap-4">

                <div className="
                  w-10
                  h-10
                  rounded-xl
                  bg-orange-50
                  text-orange-600
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                ">
                  <CalendarDays className="w-5 h-5" />
                </div>

                <div>

                  <h3 className="
                    text-sm
                    font-semibold
                    text-gray-900
                  ">
                    {item.title}
                  </h3>

                  <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-4
                    gap-y-1
                    mt-1.5
                  ">

                    <span className="
                      text-xs
                      text-gray-500
                    ">
                      {item.centre}
                    </span>

                    <span className="
                      text-xs
                      text-gray-400
                    ">
                      Submitted: {item.date}
                    </span>

                  </div>

                </div>

              </div>


              {/* ACTIONS */}

              <div className="
                flex
                gap-2
                w-full
                lg:w-auto
              ">

                <button
                  className="
                    flex-1
                    lg:flex-none
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    rounded-xl
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    transition
                  "
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </button>

                <button
                  className="
                    flex-1
                    lg:flex-none
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-gray-100
                    hover:bg-gray-200
                    text-gray-700
                    rounded-xl
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    transition
                  "
                >
                  Review
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ==================================================
          MONITORING INSIGHT
      ================================================== */}

      <div className="
        bg-gradient-to-r
        from-blue-50
        to-indigo-50
        border
        border-blue-100
        rounded-2xl
        p-6
      ">

        <div className="
          flex
          items-start
          gap-4
        ">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-white
            text-blue-600
            flex
            items-center
            justify-center
            shadow-sm
            flex-shrink-0
          ">
            <BarChart3 className="w-5 h-5" />
          </div>

          <div>

            <h3 className="
              font-bold
              text-gray-900
            ">
              Programme Monitoring Insight
            </h3>

            <p className="
              text-sm
              text-gray-600
              mt-2
              leading-relaxed
            ">
              Most programmes are progressing well, with completed
              programmes showing strong participation and completion rates.
              Three programmes are currently awaiting approval and require
              review before implementation.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}