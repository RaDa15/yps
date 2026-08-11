import {
  Users,
  Building2,
  BookOpen,
  HeartHandshake,
  UserRoundCheck,
  Activity,
  AlertTriangle,
  MapPin,
  ArrowUpRight,
  FileText,
  ClipboardCheck,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

// ======================================================
// KPI DATA
// ======================================================

const KPI_DATA = [
  {
    label: "Registered Youth",
    value: "8,420",
    change: "+8.4%",
    description: "Across jurisdiction",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Youth Centres",
    value: "5",
    change: "100% Active",
    description: "Under supervision",
    icon: Building2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    label: "Active Volunteers",
    value: "1,126",
    change: "+6.8%",
    description: "Centre & Y-PEER",
    icon: HeartHandshake,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    label: "Ongoing Programmes",
    value: "34",
    change: "12 This Month",
    description: "Currently active",
    icon: BookOpen,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    label: "Out-of-School Youth",
    value: "1,284",
    change: "-4.2%",
    description: "Registered OOS youth",
    icon: UserRoundCheck,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "Service Utilization",
    value: "78.6%",
    change: "+5.1%",
    description: "Jurisdiction average",
    icon: Activity,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

// ======================================================
// CENTRE DATA
// ======================================================

const CENTRE_DATA = [
  {
    name: "Thimphu Youth Centre",
    location: "Thimphu",
    youth: "2,480",
    programmes: 12,
    volunteers: 340,
    completion: "94%",
  },
  {
    name: "Changangkha Youth Centre",
    location: "Thimphu",
    youth: "1,760",
    programmes: 8,
    volunteers: 218,
    completion: "91%",
  },
  {
    name: "Motithang Youth Centre",
    location: "Thimphu",
    youth: "1,420",
    programmes: 6,
    volunteers: 184,
    completion: "88%",
  },
];

// ======================================================
// COMPONENT
// ======================================================

const TeoDeoDashboard = () => {
  return (
    <div className="space-y-6">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-end
        lg:justify-between
        gap-5
      ">

        {/* LEFT */}

        <div>

          <div className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded-full
            bg-blue-50
            text-blue-700
            text-xs
            font-semibold
            mb-3
          ">

            <MapPin className="w-3.5 h-3.5" />

            Thimphu Jurisdiction

          </div>


          <h1 className="
            text-2xl
            md:text-3xl
            font-bold
            text-gray-900
          ">
            TEO / DEO Dashboard
          </h1>


          <p className="
            text-sm
            text-gray-500
            mt-1.5
            max-w-2xl
          ">
            Jurisdiction-level oversight of Youth Centres,
            programmes and youth engagement.
          </p>

        </div>


        {/* ACTIONS */}

        <div className="
          flex
          flex-wrap
          gap-2
        ">

          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-white
              border
              border-gray-200
              text-gray-700
              text-sm
              font-semibold
              hover:bg-gray-50
              transition
            "
          >

            <FileText className="w-4 h-4" />

            Reports

          </button>


          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-sm
              font-semibold
              transition
              shadow-sm
            "
          >

            <ClipboardCheck className="w-4 h-4" />

            Approval Queue

          </button>

        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-6
        gap-5
      ">

        {KPI_DATA.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                shadow-sm
                hover:shadow-md
                transition
              "
            >

              {/* ICON + CHANGE */}

              <div className="
                flex
                items-start
                justify-between
                gap-2
              ">

                <div
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    ${item.iconBg}
                    ${item.iconColor}
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>


                <span className="
                  inline-flex
                  items-center
                  gap-0.5
                  text-[11px]
                  font-semibold
                  text-emerald-600
                  whitespace-nowrap
                ">

                  <ArrowUpRight className="w-3 h-3" />

                  {item.change}

                </span>

              </div>


              {/* VALUE */}

              <p className="
                text-sm
                text-gray-500
                mt-5
              ">
                {item.label}
              </p>


              <h2 className="
                text-2xl
                font-bold
                text-gray-900
                mt-1
              ">
                {item.value}
              </h2>


              <p className="
                text-xs
                text-gray-400
                mt-1
              ">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>


      {/* ==================================================
          CENTRE PERFORMANCE
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
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        ">

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
              <Building2 className="w-5 h-5" />
            </div>


            <div>

              <h2 className="
                font-bold
                text-gray-900
              ">
                Youth Centre Performance
              </h2>

              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                Comparative performance across your jurisdiction
              </p>

            </div>

          </div>


          <button
            className="
              inline-flex
              items-center
              gap-1.5
              text-sm
              font-semibold
              text-blue-600
              hover:text-blue-700
              transition
            "
          >

            View All

            <ArrowUpRight className="w-4 h-4" />

          </button>

        </div>


        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="
            w-full
            min-w-[750px]
          ">

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
                  Centre
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Youth
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Programmes
                </th>

                <th className="
                  text-center
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  text-gray-500
                ">
                  Volunteers
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

              </tr>

            </thead>


            <tbody>

              {CENTRE_DATA.map((centre) => (

                <tr
                  key={centre.name}
                  className="
                    border-b
                    border-gray-100
                    last:border-0
                    hover:bg-gray-50
                    transition
                  "
                >

                  {/* CENTRE */}

                  <td className="px-6 py-4">

                    <div className="
                      flex
                      items-center
                      gap-3
                    ">

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
                        <Building2 className="w-4 h-4" />
                      </div>


                      <div>

                        <p className="
                          text-sm
                          font-semibold
                          text-gray-900
                        ">
                          {centre.name}
                        </p>

                        <p className="
                          text-xs
                          text-gray-400
                          mt-0.5
                        ">
                          {centre.location}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* YOUTH */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <span className="
                      text-sm
                      font-semibold
                      text-gray-800
                    ">
                      {centre.youth}
                    </span>

                  </td>


                  {/* PROGRAMMES */}

                  <td className="
                    px-6
                    py-4
                    text-center
                  ">

                    <span className="
                      inline-flex
                      items-center
                      justify-center
                      min-w-8
                      h-8
                      px-2
                      rounded-lg
                      bg-gray-50
                      text-sm
                      font-semibold
                      text-gray-700
                    ">
                      {centre.programmes}
                    </span>

                  </td>


                  {/* VOLUNTEERS */}

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
                      text-gray-700
                    ">

                      <Users className="
                        w-4
                        h-4
                        text-gray-400
                      "/>

                      {centre.volunteers}

                    </div>

                  </td>


                  {/* COMPLETION */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="
                      flex
                      items-center
                      justify-center
                      gap-2
                    ">

                      <div className="
                        w-20
                        h-1.5
                        bg-gray-100
                        rounded-full
                        overflow-hidden
                      ">

                        <div
                          className="
                            h-full
                            bg-emerald-500
                            rounded-full
                          "
                          style={{
                            width: centre.completion,
                          }}
                        />

                      </div>

                      <span className="
                        text-xs
                        font-bold
                        text-emerald-600
                      ">
                        {centre.completion}
                      </span>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==================================================
          BOTTOM ROW
      ================================================== */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      ">

        {/* PERFORMANCE SNAPSHOT */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          shadow-sm
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-6
          ">

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
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>

              <h2 className="
                font-bold
                text-gray-900
              ">
                Jurisdiction Performance
              </h2>

              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                Key operational indicators
              </p>

            </div>

          </div>


          <div className="space-y-5">

            <PerformanceBar
              label="Programme Completion"
              value={91}
            />

            <PerformanceBar
              label="Centre Reporting"
              value={94}
            />

            <PerformanceBar
              label="Youth Participation"
              value={79}
            />

            <PerformanceBar
              label="Volunteer Engagement"
              value={86}
            />

          </div>

        </div>


        {/* ATTENTION */}

        <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          shadow-sm
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-5
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
              <AlertTriangle className="w-5 h-5" />
            </div>

            <div>

              <h2 className="
                font-bold
                text-gray-900
              ">
                Attention Required
              </h2>

              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                Items requiring TEO / DEO review
              </p>

            </div>

          </div>


          <div className="space-y-3">

            <AttentionItem>
              Pending programme reports from Youth Centres
            </AttentionItem>

            <AttentionItem>
              3 programme approvals require review
            </AttentionItem>

            <AttentionItem>
              Out-of-school youth participation needs monitoring
            </AttentionItem>

          </div>

        </div>

      </div>


      {/* ==================================================
          DATA QUALITY ALERT
      ================================================== */}

      <div className="
        bg-amber-50
        border
        border-amber-200
        rounded-2xl
        p-5
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-4
      ">

        <div className="
          w-10
          h-10
          rounded-xl
          bg-white
          text-amber-600
          flex
          items-center
          justify-center
          shadow-sm
          flex-shrink-0
        ">
          <AlertTriangle className="w-5 h-5" />
        </div>


        <div className="flex-1">

          <h3 className="
            font-bold
            text-gray-900
          ">
            Data Quality Attention Required
          </h3>

          <p className="
            text-sm
            text-gray-600
            mt-1
          ">
            Pending programme reports from Youth Centres may affect
            the accuracy of current jurisdiction-level monitoring.
          </p>

        </div>


        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            bg-white
            border
            border-amber-200
            text-amber-700
            rounded-xl
            text-sm
            font-semibold
            hover:bg-amber-100
            transition
          "
        >
          Review Reports
          <ArrowUpRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};


// ======================================================
// PERFORMANCE BAR
// ======================================================

const PerformanceBar = ({ label, value }) => {
  return (
    <div>

      <div className="
        flex
        items-center
        justify-between
        mb-2
      ">

        <span className="
          text-sm
          font-medium
          text-gray-700
        ">
          {label}
        </span>

        <span className="
          text-sm
          font-bold
          text-gray-900
        ">
          {value}%
        </span>

      </div>


      <div className="
        h-2
        bg-gray-100
        rounded-full
        overflow-hidden
      ">

        <div
          className="
            h-full
            bg-blue-600
            rounded-full
            transition-all
          "
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
};


// ======================================================
// ATTENTION ITEM
// ======================================================

const AttentionItem = ({ children }) => {
  return (
    <div className="
      flex
      items-start
      gap-3
      p-3.5
      bg-gray-50
      rounded-xl
    ">

      <AlertTriangle className="
        w-4
        h-4
        text-orange-500
        mt-0.5
        flex-shrink-0
      "/>

      <p className="
        text-sm
        text-gray-600
      ">
        {children}
      </p>

    </div>
  );
};


export default TeoDeoDashboard;