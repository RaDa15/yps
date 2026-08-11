import { motion } from "framer-motion";

import {
  UserPlus,
  Fingerprint,
  QrCode,
  Compass,
  Users,
  Award,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

/* =========================================================
   JOURNEY STEPS
========================================================= */

const steps = [
  {
    number: "01",
    title: "Create Profile",
    description:
      "Register and build your personal profile.",
    icon: UserPlus,
    badgeColor:
      "bg-emerald-600 text-white",
    iconBg:
      "bg-emerald-50 text-emerald-600 border-emerald-200",
    gradientBorder:
      "from-emerald-500/30 to-teal-500/10",
  },

  {
    number: "02",
    title: "Verify Identity",
    description:
      "Verify your identity securely with National ID.",
    icon: Fingerprint,
    badgeColor:
      "bg-amber-500 text-white",
    iconBg:
      "bg-amber-50 text-amber-600 border-amber-200",
    gradientBorder:
      "from-amber-500/30 to-yellow-500/10",
  },

  {
    number: "03",
    title: "Get Youth ID",
    description:
      "Receive your unique Youth ID and digital badge.",
    icon: QrCode,
    badgeColor:
      "bg-green-600 text-white",
    iconBg:
      "bg-green-50 text-green-600 border-green-200",
    gradientBorder:
      "from-green-500/30 to-emerald-500/10",
  },

  {
    number: "04",
    title: "Explore Programmes",
    description:
      "Discover opportunities and programmes that inspire you.",
    icon: Compass,
    badgeColor:
      "bg-blue-600 text-white",
    iconBg:
      "bg-blue-50 text-blue-600 border-blue-200",
    gradientBorder:
      "from-blue-500/30 to-cyan-500/10",
  },

  {
    number: "05",
    title: "Join & Participate",
    description:
      "Join programmes and take part in activities.",
    icon: Users,
    badgeColor:
      "bg-orange-500 text-white",
    iconBg:
      "bg-orange-50 text-orange-600 border-orange-200",
    gradientBorder:
      "from-orange-500/30 to-amber-500/10",
  },

  {
    number: "06",
    title: "Earn & Achieve",
    description:
      "Earn certificates, badges and celebrate milestones.",
    icon: Award,
    badgeColor:
      "bg-purple-600 text-white",
    iconBg:
      "bg-purple-50 text-purple-600 border-purple-200",
    gradientBorder:
      "from-purple-500/30 to-indigo-500/10",
  },

  {
    number: "07",
    title: "Give Back",
    description:
      "Volunteer, mentor and make a positive impact.",
    icon: HeartHandshake,
    badgeColor:
      "bg-teal-600 text-white",
    iconBg:
      "bg-teal-50 text-teal-700 border-teal-200",
    gradientBorder:
      "from-teal-500/30 to-emerald-500/10",
  },
];


/* =========================================================
   JOURNEY SECTION
========================================================= */

const Journey = () => {
  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        py-14
        md:py-20
      "
    >

      {/* ===================================================
          BACKGROUND DECORATIVE GLOW
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-emerald-200/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-blue-200/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-100/20
          blur-3xl
        "
      />


      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="mb-12 text-center md:mb-14"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          {/* Badge */}

          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-3.5
              py-1.5
              text-xs
              font-semibold
              text-blue-700
            "
          >
            <Sparkles size={14} />

            <span>
              Step-by-Step Path
            </span>
          </div>


          {/* Heading */}

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-blue-900
              md:text-5xl
            "
          >
            Your Journey, Your Impact
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-base
              font-medium
              text-gray-600
            "
          >
            7 Simple Steps to Grow, Connect & Contribute
          </p>

        </motion.div>


        {/* =================================================
            CHRONOLOGICAL STEPS
        ================================================= */}

        <div className="relative">

          {/* =================================================
              HORIZONTAL CONNECTING LINE
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-6
              right-6
              top-5
              hidden
              h-1
              -translate-y-1/2
              rounded-full
              bg-gradient-to-r
              from-emerald-400
              via-blue-500
              to-purple-500
              opacity-25
              lg:block
            "
          />


          {/* =================================================
              STEPS TRACK
          ================================================= */}

          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-4
              lg:grid
              lg:grid-cols-7
              lg:gap-3
              lg:overflow-visible
              lg:pb-0
            "
          >

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  className="
                    w-[220px]
                    shrink-0
                    snap-start
                    lg:w-auto
                  "
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >

                  {/* =================================================
                      NUMBER NODE
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      justify-center
                    "
                  >

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        text-xs
                        font-bold
                        shadow-sm
                        ring-4
                        ring-white
                        ${step.badgeColor}
                      `}
                    >
                      {step.number}
                    </div>

                  </div>


                  {/* =================================================
                      STEP CARD
                  ================================================= */}

                  <div
                    className={`
                      group
                      relative
                      mt-4
                      h-full
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white/90
                      bg-gradient-to-br
                      p-4
                      shadow-md
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      ${step.gradientBorder}
                    `}
                  >

                    {/* Icon */}

                    <div
                      className={`
                        inline-flex
                        rounded-xl
                        border
                        p-2.5
                        transition-transform
                        duration-300
                        group-hover:scale-105
                        ${step.iconBg}
                      `}
                    >
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                      />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-3
                        text-base
                        font-bold
                        leading-snug
                        text-gray-900
                        transition-colors
                        group-hover:text-blue-700
                      "
                    >
                      {step.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-1.5
                        text-xs
                        leading-relaxed
                        text-gray-600
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>


          {/* =================================================
              MOBILE SCROLL HINT
          ================================================= */}

          <p
            className="
              mt-2
              text-center
              text-xs
              text-gray-400
              lg:hidden
            "
          >
            Swipe to see all 7 steps →
          </p>

        </div>


        {/* =================================================
            FOOTER CAPTION
        ================================================= */}

        <motion.div
          className="
            mt-14
            border-t
            border-gray-200/60
            pt-6
            text-center
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <p
            className="
              font-serif
              text-lg
              italic
              tracking-wide
              text-blue-900
            "
          >
            "Grow Together. Lead Tomorrow."
          </p>


          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <span
              className="
                h-0.5
                w-10
                rounded-full
                bg-amber-400
              "
            />

            <span className="text-xs text-amber-500">
              ❖
            </span>

            <span
              className="
                h-0.5
                w-10
                rounded-full
                bg-amber-400
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Journey;
