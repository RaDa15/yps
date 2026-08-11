import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  CalendarDays,
  MapPin,
  Clock3,
  CheckCircle2,
  AlertCircle,
  FileText,
  Award,
  ChevronRight,
  X,
  Upload,
  Activity,
} from "lucide-react";

const ACTIVITY_HISTORY = [
  {
    id: 1,
    title: "Community Clean-Up Campaign",
    type: "Community Service",
    date: "2026-07-28",
    location: "Motithang, Thimphu",
    hours: 4,
    status: "Validated",
    outcome: "Successfully completed",
    reportStatus: "Approved",
    organizer: "Thimphu Y-PEER Network",
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    type: "Training",
    date: "2026-07-15",
    location: "Thimphu Youth Centre",
    hours: 7,
    status: "Validated",
    outcome: "Leadership training completed",
    reportStatus: "Approved",
    organizer: "Thimphu Y-PEER Network",
  },
  {
    id: 3,
    title: "School Outreach Programme",
    type: "Outreach",
    date: "2026-07-08",
    location: "Motithang Higher Secondary School",
    hours: 5,
    status: "Pending Report",
    outcome: "Activity completed",
    reportStatus: "Pending",
    organizer: "Thimphu Y-PEER Network",
  },
  {
    id: 4,
    title: "Mental Health Awareness Session",
    type: "Awareness",
    date: "2026-06-22",
    location: "Changlimithang Youth Centre",
    hours: 3,
    status: "Validated",
    outcome: "Peer awareness session completed",
    reportStatus: "Approved",
    organizer: "National Y-PEER Network",
  },
  {
    id: 5,
    title: "Youth Digital Skills Training",
    type: "Training",
    date: "2026-06-10",
    location: "Thimphu Tech Park",
    hours: 6,
    status: "Validated",
    outcome: "Digital skills programme completed",
    reportStatus: "Approved",
    organizer: "Youth Digital Initiative",
  },
  {
    id: 6,
    title: "Community Volunteer Drive",
    type: "Community Service",
    date: "2026-05-24",
    location: "Babena, Thimphu",
    hours: 5,
    status: "Pending Validation",
    outcome: "Volunteer participation recorded",
    reportStatus: "Submitted",
    organizer: "Thimphu Y-PEER Network",
  },
  {
    id: 7,
    title: "Youth Peer Education Programme",
    type: "Awareness",
    date: "2026-05-11",
    location: "Changangkha, Thimphu",
    hours: 4,
    status: "Validated",
    outcome: "Peer education activity completed",
    reportStatus: "Approved",
    organizer: "Thimphu Y-PEER Network",
  },
];

const ActivityHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showReportModal, setShowReportModal] = useState(null);

  const activityTypes = [
    "All",
    "Community Service",
    "Training",
    "Outreach",
    "Awareness",
  ];

  const filteredActivities = useMemo(() => {
    return ACTIVITY_HISTORY.filter((activity) => {
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        activity.title.toLowerCase().includes(search) ||
        activity.type.toLowerCase().includes(search) ||
        activity.location.toLowerCase().includes(search) ||
        activity.organizer.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        activity.status === statusFilter;

      const matchesType =
        typeFilter === "All" ||
        activity.type === typeFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType
      );
    });
  }, [
    searchQuery,
    statusFilter,
    typeFilter,
  ]);

  const validatedActivities =
    ACTIVITY_HISTORY.filter(
      (activity) =>
        activity.status === "Validated"
    );

  const pendingReports =
    ACTIVITY_HISTORY.filter(
      (activity) =>
        activity.status === "Pending Report"
    );

  const pendingValidation =
    ACTIVITY_HISTORY.filter(
      (activity) =>
        activity.status === "Pending Validation"
    );

  const validatedHours =
    validatedActivities.reduce(
      (total, activity) =>
        total + activity.hours,
      0
    );

  const totalHours =
    ACTIVITY_HISTORY.reduce(
      (total, activity) =>
        total + activity.hours,
      0
    );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const getStatusStyle = (status) => {
    if (status === "Validated") {
      return {
        wrapper:
          "bg-emerald-50 text-emerald-700 border-emerald-100",
        icon: CheckCircle2,
      };
    }

    if (status === "Pending Report") {
      return {
        wrapper:
          "bg-amber-50 text-amber-700 border-amber-100",
        icon: FileText,
      };
    }

    return {
      wrapper:
        "bg-blue-50 text-blue-700 border-blue-100",
      icon: AlertCircle,
    };
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div>
        <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
          <Activity size={16} />
          Volunteer Contributions
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Activity History
        </h1>

        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          View your complete volunteer participation history,
          service hours, activity outcomes and validation status.
        </p>
      </div>


      {/* =====================================================
          SUMMARY CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* TOTAL ACTIVITIES */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

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
            <Activity size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Total Activities
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900">
            {ACTIVITY_HISTORY.length}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Participation records
          </p>

        </div>


        {/* VALIDATED */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-emerald-50
            text-emerald-600
            flex
            items-center
            justify-center
          ">
            <CheckCircle2 size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Validated Activities
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900">
            {validatedActivities.length}
          </h2>

          <p className="text-xs text-emerald-600 mt-1">
            Approved contributions
          </p>

        </div>


        {/* HOURS */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-violet-50
            text-violet-600
            flex
            items-center
            justify-center
          ">
            <Clock3 size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Validated Hours
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900">
            {validatedHours}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Official service hours
          </p>

        </div>


        {/* PENDING */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-amber-50
            text-amber-600
            flex
            items-center
            justify-center
          ">
            <AlertCircle size={19} />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Pending Actions
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900">
            {pendingReports.length +
              pendingValidation.length}
          </h2>

          <p className="text-xs text-amber-600 mt-1">
            Requires your attention
          </p>

        </div>

      </div>


      {/* =====================================================
          CONTRIBUTION PROGRESS
      ===================================================== */}

      <div className="
        bg-gradient-to-r
        from-green-600
        to-emerald-600
        rounded-2xl
        p-6
        text-white
      ">

        <div className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-5
        ">

          <div>

            <div className="flex items-center gap-2">

              <Award size={19} />

              <p className="text-sm font-semibold">
                Volunteer Contribution
              </p>

            </div>

            <h2 className="text-3xl font-extrabold mt-2">
              {validatedHours} hours
            </h2>

            <p className="text-xs text-green-100 mt-1">
              Officially validated service contribution
            </p>

          </div>


          <div className="w-full md:w-72">

            <div className="
              flex
              items-center
              justify-between
              text-xs
              text-green-100
              mb-2
            ">

              <span>
                Next milestone
              </span>

              <span>
                {validatedHours}/50 hours
              </span>

            </div>

            <div className="
              h-2
              rounded-full
              bg-white/20
              overflow-hidden
            ">

              <div
                className="
                  h-full
                  bg-white
                  rounded-full
                "
                style={{
                  width: `${Math.min(
                    100,
                    (validatedHours / 50) * 100
                  )}%`,
                }}
              />

            </div>

            <p className="text-[11px] text-green-100 mt-2">
              {Math.max(
                0,
                50 - validatedHours
              )}{" "}
              hours remaining to reach the next milestone.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          PENDING REPORT ALERT
      ===================================================== */}

      {pendingReports.length > 0 && (

        <div className="
          bg-amber-50
          border
          border-amber-200
          rounded-2xl
          p-5
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          ">

            <div className="flex items-start gap-3">

              <div className="
                w-10
                h-10
                rounded-xl
                bg-amber-100
                text-amber-700
                flex
                items-center
                justify-center
                flex-shrink-0
              ">
                <FileText size={18} />
              </div>

              <div>

                <h3 className="text-sm font-bold text-gray-900">
                  Post-activity update required
                </h3>

                <p className="text-xs text-gray-600 mt-1">
                  You have {pendingReports.length} activity
                  requiring a post-activity report.
                </p>

              </div>

            </div>


            <button
              onClick={() =>
                setShowReportModal(
                  pendingReports[0]
                )
              }
              className="
                px-4
                py-2.5
                rounded-xl
                bg-amber-600
                text-white
                text-xs
                font-bold
                hover:bg-amber-700
                transition
              "
            >
              Submit Update
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
      ">

        <div className="
          flex
          flex-col
          lg:flex-row
          gap-3
        ">

          <div className="relative flex-1">

            <Search
              size={17}
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
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search activity history..."
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
                focus:border-green-400
                focus:ring-2
                focus:ring-green-500/10
              "
            />

          </div>


          <div className="flex flex-col sm:flex-row gap-2">

            <div className="relative">

              <Filter
                size={15}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="
                  w-full
                  sm:w-auto
                  pl-9
                  pr-8
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  text-sm
                  text-gray-700
                  outline-none
                "
              >

                <option value="All">
                  All Status
                </option>

                <option value="Validated">
                  Validated
                </option>

                <option value="Pending Report">
                  Pending Report
                </option>

                <option value="Pending Validation">
                  Pending Validation
                </option>

              </select>

            </div>


            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
              className="
                w-full
                sm:w-auto
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                bg-white
                text-sm
                text-gray-700
                outline-none
              "
            >

              {activityTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type === "All"
                    ? "All Types"
                    : type}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>


      {/* =====================================================
          ACTIVITY TABLE
      ===================================================== */}

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        overflow-hidden
      ">

        <div className="
          p-6
          border-b
          border-gray-100
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Participation History
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              {filteredActivities.length} records displayed
            </p>

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>

              <tr className="bg-gray-50 border-b border-gray-100">

                <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                  Activity
                </th>

                <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                  Date
                </th>

                <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                  Location
                </th>

                <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                  Hours
                </th>

                <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                  Status
                </th>

                <th className="px-4 py-3"></th>

              </tr>

            </thead>


            <tbody>

              {filteredActivities.map(
                (activity) => {

                  const statusStyle =
                    getStatusStyle(
                      activity.status
                    );

                  const StatusIcon =
                    statusStyle.icon;

                  return (

                    <tr
                      key={activity.id}
                      className="
                        border-b
                        border-gray-100
                        last:border-0
                        hover:bg-gray-50
                        transition
                      "
                    >

                      {/* ACTIVITY */}

                      <td className="px-6 py-4">

                        <div>

                          <p className="
                            text-sm
                            font-semibold
                            text-gray-900
                          ">
                            {activity.title}
                          </p>

                          <p className="
                            text-xs
                            text-gray-400
                            mt-1
                          ">
                            {activity.type}
                          </p>

                        </div>

                      </td>


                      {/* DATE */}

                      <td className="px-4 py-4">

                        <div className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-gray-600
                        ">

                          <CalendarDays
                            size={14}
                            className="text-green-600"
                          />

                          {formatDate(
                            activity.date
                          )}

                        </div>

                      </td>


                      {/* LOCATION */}

                      <td className="px-4 py-4">

                        <div className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-gray-600
                        ">

                          <MapPin
                            size={14}
                            className="text-red-500"
                          />

                          {activity.location}

                        </div>

                      </td>


                      {/* HOURS */}

                      <td className="px-4 py-4">

                        <div className="
                          flex
                          items-center
                          gap-2
                        ">

                          <Clock3
                            size={14}
                            className="text-violet-600"
                          />

                          <span className="
                            text-sm
                            font-bold
                            text-gray-700
                          ">
                            {activity.hours}
                          </span>

                          <span className="text-xs text-gray-400">
                            hrs
                          </span>

                        </div>

                      </td>


                      {/* STATUS */}

                      <td className="px-4 py-4">

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            px-2.5
                            py-1.5
                            rounded-full
                            border
                            text-[11px]
                            font-bold
                            ${statusStyle.wrapper}
                          `}
                        >

                          <StatusIcon size={13} />

                          {activity.status}

                        </span>

                      </td>


                      {/* ACTION */}

                      <td className="px-4 py-4">

                        <button
                          onClick={() =>
                            setSelectedActivity(
                              activity
                            )
                          }
                          className="
                            w-8
                            h-8
                            rounded-lg
                            bg-gray-100
                            text-gray-500
                            hover:bg-green-600
                            hover:text-white
                            flex
                            items-center
                            justify-center
                            transition
                          "
                        >
                          <ChevronRight size={16} />
                        </button>

                      </td>

                    </tr>

                  );
                }
              )}

              {filteredActivities.length ===
                0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="
                      text-center
                      py-14
                      text-sm
                      text-gray-400
                    "
                  >
                    No activity records found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================================
          CONTRIBUTION BREAKDOWN
      ===================================================== */}

      <div>

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Service Hours Breakdown
        </h2>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-4
        ">

          {activityTypes
            .filter(
              (type) => type !== "All"
            )
            .map((type) => {

              const activities =
                ACTIVITY_HISTORY.filter(
                  (activity) =>
                    activity.type === type
                );

              const hours =
                activities.reduce(
                  (sum, activity) =>
                    sum + activity.hours,
                  0
                );

              return (

                <div
                  key={type}
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                  "
                >

                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <p className="
                      text-xs
                      text-gray-500
                    ">
                      {type}
                    </p>

                    <Clock3
                      size={16}
                      className="text-green-600"
                    />

                  </div>

                  <p className="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    mt-3
                  ">
                    {hours}
                  </p>

                  <p className="
                    text-xs
                    text-gray-400
                    mt-1
                  ">
                    volunteer hours
                  </p>

                </div>

              );

            })}

        </div>

      </div>


      {/* =====================================================
          ACTIVITY DETAILS MODAL
      ===================================================== */}

      {selectedActivity && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setSelectedActivity(null)
          }
        >

          <div
            className="
              bg-white
              rounded-3xl
              w-full
              max-w-xl
              max-h-[90vh]
              overflow-y-auto
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="
              flex
              items-start
              justify-between
              p-6
              border-b
              border-gray-100
            ">

              <div>

                <p className="
                  text-xs
                  font-bold
                  text-green-600
                  uppercase
                  tracking-wide
                ">
                  Activity Record
                </p>

                <h2 className="
                  text-xl
                  font-extrabold
                  text-gray-900
                  mt-1
                ">
                  {selectedActivity.title}
                </h2>

              </div>

              <button
                onClick={() =>
                  setSelectedActivity(null)
                }
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-gray-100
                  text-gray-500
                  hover:bg-gray-200
                  flex
                  items-center
                  justify-center
                "
              >
                <X size={18} />
              </button>

            </div>


            <div className="p-6 space-y-5">

              <div className="
                flex
                items-center
                gap-2
              ">

                {(() => {

                  const style =
                    getStatusStyle(
                      selectedActivity.status
                    );

                  const Icon =
                    style.icon;

                  return (

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        border
                        text-xs
                        font-bold
                        ${style.wrapper}
                      `}
                    >

                      <Icon size={14} />

                      {selectedActivity.status}

                    </span>

                  );

                })()}

              </div>


              <p className="
                text-sm
                text-gray-600
                leading-relaxed
              ">
                {selectedActivity.outcome}
              </p>


              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
              ">

                <div className="bg-gray-50 rounded-xl p-4">

                  <CalendarDays
                    size={17}
                    className="text-green-600"
                  />

                  <p className="
                    text-[11px]
                    text-gray-400
                    mt-2
                  ">
                    Activity Date
                  </p>

                  <p className="
                    text-sm
                    font-semibold
                    text-gray-800
                  ">
                    {formatDate(
                      selectedActivity.date
                    )}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-4">

                  <Clock3
                    size={17}
                    className="text-violet-600"
                  />

                  <p className="
                    text-[11px]
                    text-gray-400
                    mt-2
                  ">
                    Service Hours
                  </p>

                  <p className="
                    text-sm
                    font-semibold
                    text-gray-800
                  ">
                    {selectedActivity.hours} hours
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-4">

                  <MapPin
                    size={17}
                    className="text-red-500"
                  />

                  <p className="
                    text-[11px]
                    text-gray-400
                    mt-2
                  ">
                    Location
                  </p>

                  <p className="
                    text-sm
                    font-semibold
                    text-gray-800
                  ">
                    {selectedActivity.location}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-4">

                  <FileText
                    size={17}
                    className="text-blue-600"
                  />

                  <p className="
                    text-[11px]
                    text-gray-400
                    mt-2
                  ">
                    Report Status
                  </p>

                  <p className="
                    text-sm
                    font-semibold
                    text-gray-800
                  ">
                    {selectedActivity.reportStatus}
                  </p>

                </div>

              </div>


              <div>

                <p className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-400
                ">
                  Organiser
                </p>

                <p className="
                  text-sm
                  font-semibold
                  text-gray-800
                  mt-1
                ">
                  {selectedActivity.organizer}
                </p>

              </div>


              {selectedActivity.status ===
                "Pending Report" && (

                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    setShowReportModal(
                      selectedActivity
                    );
                  }}
                  className="
                    w-full
                    py-3
                    rounded-xl
                    bg-amber-600
                    text-white
                    text-sm
                    font-bold
                    hover:bg-amber-700
                    transition
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <FileText size={16} />
                  Submit Post-Activity Update
                </button>

              )}

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          POST ACTIVITY REPORT MODAL
      ===================================================== */}

      {showReportModal && (

        <div
          className="
            fixed
            inset-0
            z-[60]
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setShowReportModal(null)
          }
        >

          <div
            className="
              bg-white
              rounded-3xl
              w-full
              max-w-lg
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="
              p-6
              border-b
              border-gray-100
              flex
              items-start
              justify-between
            ">

              <div>

                <p className="
                  text-xs
                  font-bold
                  text-amber-600
                  uppercase
                ">
                  Post-Activity Update
                </p>

                <h2 className="
                  text-xl
                  font-extrabold
                  text-gray-900
                  mt-1
                ">
                  {showReportModal.title}
                </h2>

              </div>

              <button
                onClick={() =>
                  setShowReportModal(null)
                }
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >
                <X size={18} />
              </button>

            </div>


            <div className="p-6 space-y-4">

              <div>

                <label className="
                  block
                  text-xs
                  font-bold
                  text-gray-700
                  mb-2
                ">
                  What did you contribute?
                </label>

                <textarea
                  rows="4"
                  placeholder="Describe your participation, responsibilities and contribution..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    text-sm
                    outline-none
                    resize-none
                    focus:border-amber-400
                    focus:ring-2
                    focus:ring-amber-500/10
                  "
                />

              </div>


              <div>

                <label className="
                  block
                  text-xs
                  font-bold
                  text-gray-700
                  mb-2
                ">
                  Upload supporting document
                </label>

                <label className="
                  border-2
                  border-dashed
                  border-gray-200
                  rounded-xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  cursor-pointer
                  hover:border-amber-400
                  transition
                ">

                  <Upload
                    size={22}
                    className="text-gray-400"
                  />

                  <p className="
                    text-sm
                    font-semibold
                    text-gray-700
                    mt-2
                  ">
                    Upload file
                  </p>

                  <p className="
                    text-xs
                    text-gray-400
                    mt-1
                  ">
                    PDF, JPG or PNG
                  </p>

                  <input
                    type="file"
                    className="hidden"
                  />

                </label>

              </div>


              <button
                onClick={() =>
                  setShowReportModal(null)
                }
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-amber-600
                  text-white
                  text-sm
                  font-bold
                  hover:bg-amber-700
                  transition
                "
              >
                Submit Activity Update
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ActivityHistory;
