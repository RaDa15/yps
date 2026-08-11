import {
  Target,
  TrendingUp,
  GraduationCap,
  BriefcaseBusiness,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";

// ======================================================
// POLICY KPI DATA
// ======================================================

const policyKPIs = [
  {
    title: "Policy KPIs",
    value: "86%",
    description: "Overall achievement",
    change: "+8.4%",
    trend: "up",
    icon: Target,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Education Transition",
    value: "78%",
    description: "Youth continuing education",
    change: "+5.6%",
    trend: "up",
    icon: GraduationCap,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Employment Outcome",
    value: "64%",
    description: "Employment transition",
    change: "+7.2%",
    trend: "up",
    icon: BriefcaseBusiness,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Youth Progress",
    value: "+15%",
    description: "Yearly improvement",
    change: "+3.8%",
    trend: "up",
    icon: TrendingUp,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

// ======================================================
// POLICY PRIORITIES
// ======================================================

const policyPriorities = [
  {
    title: "Education & Skills",
    description:
      "Monitoring access to education, digital skills and vocational training opportunities.",
    progress: 82,
    icon: GraduationCap,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Employment",
    description:
      "Tracking youth employment readiness, entrepreneurship and employment outcomes.",
    progress: 64,
    icon: BriefcaseBusiness,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Youth Participation",
    description:
      "Measuring youth engagement across programmes, volunteering and community activities.",
    progress: 88,
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

// ======================================================
// TRANSITION OUTCOMES
// ======================================================

const transitionOutcomes = [
  {
    label: "Entered Higher Education",
    value: 42,
  },
  {
    label: "Completed Vocational Training",
    value: 28,
  },
  {
    label: "Employment Placement",
    value: 30,
  },
];

// ======================================================
// COMPONENT
// ======================================================

const PolicyInsights = () => {
  return (
    <div className="space-y-6 pb-8">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <Target className="w-5 h-5" />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Policy Insights
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Strategic youth development indicators and policy performance
              </p>

            </div>

          </div>

        </div>


        {/* STATUS */}

        <div
          className="
            flex
            items-center
            gap-2
            px-3
            py-2
            bg-emerald-50
            border
            border-emerald-100
            rounded-xl
            text-xs
            font-semibold
            text-emerald-700
            w-fit
          "
        >
          <ShieldCheck className="w-4 h-4" />

          Policy Monitoring Active
        </div>

      </div>


      {/* ==================================================
          KPI CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {policyKPIs.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                hover:shadow-md
                transition
              "
            >

              <div className="flex items-start justify-between">

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


                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-semibold
                    text-emerald-600
                    bg-emerald-50
                    px-2
                    py-1
                    rounded-lg
                  "
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />

                  {item.change}
                </div>

              </div>


              <p className="text-sm text-gray-500 mt-5">
                {item.title}
              </p>


              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {item.value}
              </h2>


              <p className="text-xs text-gray-400 mt-1">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>


      {/* ==================================================
          NATIONAL POLICY PRIORITIES
      ================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <Target className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                National Youth Development Priorities
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Current progress against strategic policy areas
              </p>

            </div>

          </div>


          <BarChart3 className="hidden sm:block w-5 h-5 text-gray-400" />

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {policyPriorities.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50/70
                  p-5
                  hover:bg-white
                  hover:shadow-sm
                  transition
                "
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`
                      w-10
                      h-10
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


                  <span className="text-xl font-bold text-gray-900">
                    {item.progress}%
                  </span>

                </div>


                <h3 className="font-semibold text-gray-900 mt-4">
                  {item.title}
                </h3>


                <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[42px]">
                  {item.description}
                </p>


                <div className="mt-5">

                  <div className="flex justify-between text-xs mb-2">

                    <span className="text-gray-400">
                      Progress
                    </span>

                    <span className="font-semibold text-gray-700">
                      {item.progress}%
                    </span>

                  </div>


                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-blue-600 rounded-full transition-all"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>


      {/* ==================================================
          TRANSITION + POLICY CHALLENGES
      ================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        {/* TRANSITION OUTCOMES */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-6">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-emerald-50
                text-emerald-600
                flex
                items-center
                justify-center
              "
            >
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Youth Transition Outcomes
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Current youth transition pathways
              </p>

            </div>

          </div>


          <div className="space-y-6">

            {transitionOutcomes.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between items-center mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    {item.value}%
                  </span>

                </div>


                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{
                      width: `${item.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>


          <div className="mt-6 pt-5 border-t border-gray-100">

            <div className="flex items-center gap-2 text-xs text-gray-400">

              <TrendingUp className="w-4 h-4" />

              Education remains the strongest transition pathway.

            </div>

          </div>

        </div>


        {/* POLICY CHALLENGES */}

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
          "
        >

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-orange-50
                  text-orange-600
                  flex
                  items-center
                  justify-center
                "
              >
                <AlertTriangle className="w-5 h-5" />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  Policy Challenges
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Areas requiring strategic attention
                </p>

              </div>

            </div>


            <span
              className="
                text-xs
                font-semibold
                text-orange-700
                bg-orange-50
                px-2.5
                py-1
                rounded-lg
              "
            >
              3 Areas
            </span>

          </div>


          <div className="space-y-3">

            <div
              className="
                flex
                gap-3
                p-4
                rounded-xl
                bg-orange-50/60
                border
                border-orange-100
              "
            >

              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Out-of-school youth
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Increase reported in selected Dzongkhags.
                </p>

              </div>

            </div>


            <div
              className="
                flex
                gap-3
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-100
              "
            >

              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Rural vocational participation
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Participation remains below national targets.
                </p>

              </div>

            </div>


            <div
              className="
                flex
                gap-3
                p-4
                rounded-xl
                bg-gray-50
                border
                border-gray-100
              "
            >

              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  Youth employment pathways
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Stronger transition pathways are required.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          STRATEGIC RECOMMENDATIONS
      ================================================== */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-yellow-50
              text-yellow-600
              flex
              items-center
              justify-center
            "
          >
            <Lightbulb className="w-5 h-5" />
          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Strategic Recommendations
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Priority actions based on current policy indicators
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


          {/* Recommendation 1 */}

          <div
            className="
              p-5
              rounded-xl
              bg-gray-50
              border
              border-gray-100
              hover:bg-white
              hover:shadow-sm
              transition
            "
          >

            <div className="flex items-center gap-2">

              <CheckCircle className="w-5 h-5 text-emerald-600" />

              <span className="text-xs font-semibold text-emerald-700">
                PRIORITY 01
              </span>

            </div>


            <h3 className="font-semibold text-gray-900 mt-3">
              Expand vocational programmes
            </h3>


            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Expand vocational opportunities in regions showing lower
              employment transition outcomes.
            </p>

          </div>


          {/* Recommendation 2 */}

          <div
            className="
              p-5
              rounded-xl
              bg-gray-50
              border
              border-gray-100
              hover:bg-white
              hover:shadow-sm
              transition
            "
          >

            <div className="flex items-center gap-2">

              <CheckCircle className="w-5 h-5 text-emerald-600" />

              <span className="text-xs font-semibold text-emerald-700">
                PRIORITY 02
              </span>

            </div>


            <h3 className="font-semibold text-gray-900 mt-3">
              Target out-of-school youth
            </h3>


            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Increase targeted interventions and re-engagement programmes
              for out-of-school youth.
            </p>

          </div>


          {/* Recommendation 3 */}

          <div
            className="
              p-5
              rounded-xl
              bg-gray-50
              border
              border-gray-100
              hover:bg-white
              hover:shadow-sm
              transition
            "
          >

            <div className="flex items-center gap-2">

              <CheckCircle className="w-5 h-5 text-emerald-600" />

              <span className="text-xs font-semibold text-emerald-700">
                PRIORITY 03
              </span>

            </div>


            <h3 className="font-semibold text-gray-900 mt-3">
              Strengthen evidence collection
            </h3>


            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Improve Youth Centre reporting and evidence collection to
              strengthen national policy decisions.
            </p>

          </div>

        </div>

      </div>


      {/* ==================================================
          EXECUTIVE INSIGHT
      ================================================== */}

      <div
        className="
          bg-gradient-to-r
          from-blue-50
          to-indigo-50
          border
          border-blue-100
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-start gap-4">

          <div
            className="
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
            "
          >
            <TrendingUp className="w-5 h-5" />
          </div>


          <div>

            <h3 className="font-bold text-gray-900">
              Executive Policy Insight
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">

              Overall policy achievement currently stands at 86%.
              Youth participation remains strong at 88%, while education
              and skills development continues to show positive progress.
              The primary areas requiring strategic attention are youth
              employment transition, rural vocational participation and
              out-of-school youth engagement.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PolicyInsights;