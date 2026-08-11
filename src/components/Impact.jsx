import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarCheck,
  LayoutDashboard,
  Users,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Eye,
  Radio,
} from "lucide-react";

/* =========================================================
   IMPACT STATISTICS
========================================================= */

const stats = [
  {
    label: "Active Youth",
    value: 12400,
    suffix: "+",
    description: "Registered on the platform",
    icon: Users,
    textColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Programmes",
    value: 340,
    suffix: "+",
    description: "Opportunities delivered",
    icon: CalendarCheck,
    textColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Certificates Issued",
    value: 8900,
    suffix: "+",
    description: "Digital achievements verified",
    icon: BadgeCheck,
    textColor: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Youth Centres",
    value: 13,
    suffix: "",
    description: "Connected across Bhutan",
    icon: LayoutDashboard,
    textColor: "text-purple-600",
    bg: "bg-purple-50",
  },
];

/* =========================================================
   ANIMATED NUMBER
========================================================= */

const AnimatedNumber = ({
  value,
  duration = 1500,
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      /* Ease-out animation */
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * value
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <>
      {displayValue.toLocaleString()}
      {suffix}
    </>
  );
};

/* =========================================================
   IMPACT COMPONENT
========================================================= */

const Impact = () => {
  /*
    Temporary visitor number.

    This is currently frontend/demo data.
    Later this can come from your backend/API.
  */
  const [todayVisits, setTodayVisits] = useState(1284);

  /*
    Simulate a small increase in visitors.

    REMOVE THIS when connecting to the real backend.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setTodayVisits((current) => {
        const increase =
          Math.floor(Math.random() * 3) + 1;

        return current + increase;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="impact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        pt-8
        pb-10
        md:pt-10
        md:pb-12
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-indigo-400/10
          blur-3xl
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="mx-auto mb-7 max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
        >

          {/* Badge */}

          <div
            className="
              mb-2
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-3
              py-1.5
              text-xs
              font-bold
              text-blue-700
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            <span>National Youth Impact</span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-blue-950
              md:text-4xl
            "
          >
            Youth Portal Impact
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-500
              md:text-base
            "
          >
            Connecting Bhutanese youth with opportunities,
            programmes, achievements and digital services
            through one unified platform.
          </p>

        </motion.div>


        {/* =================================================
            IMPACT STATISTICS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:grid-cols-4
            md:gap-4
          "
        >

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-md
                  md:p-5
                "
              >

                {/* Icon + Arrow */}

                <div className="flex items-start justify-between">

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      ${stat.bg}
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon
                      size={20}
                      className={stat.textColor}
                    />
                  </div>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      text-gray-300
                      transition-colors
                      group-hover:text-blue-500
                    "
                  />

                </div>

                {/* Animated Value */}

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-gray-900
                    md:text-3xl
                  "
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                {/* Label */}

                <p
                  className="
                    mt-0.5
                    text-xs
                    font-bold
                    text-gray-800
                    md:text-sm
                  "
                >
                  {stat.label}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-relaxed
                    text-gray-400
                    md:text-xs
                  "
                >
                  {stat.description}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* =================================================
            LIVE WEBSITE VISITS
        ================================================= */}

        <motion.div
          className="
            mt-4
            overflow-hidden
            rounded-2xl
            border
            border-emerald-100
            bg-white
            shadow-sm
          "
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
        >

          <div
            className="
              flex
              flex-col
              gap-4
              p-4
              md:flex-row
              md:items-center
              md:justify-between
              md:p-5
            "
          >

            {/* LEFT */}

            <div className="flex items-center gap-3">

              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-50
                "
              >

                {/* Pulsing live indicator */}

                <span
                  className="
                    absolute
                    right-1
                    top-1
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                    ring-4
                    ring-emerald-100
                    animate-pulse
                  "
                />

                <Eye
                  className="h-5 w-5 text-emerald-600"
                />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-emerald-600
                    "
                  >
                    Website Activity
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      bg-emerald-50
                      px-2
                      py-0.5
                      text-[9px]
                      font-bold
                      text-emerald-700
                    "
                  >
                    <Radio className="h-2.5 w-2.5" />
                    LIVE
                  </span>

                </div>

                <h3
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-gray-900
                    md:text-base
                  "
                >
                  Visitors today
                </h3>

                <p
                  className="
                    mt-0.5
                    text-xs
                    text-gray-400
                  "
                >
                  People visiting the Youth Portal today
                </p>

              </div>

            </div>


            {/* RIGHT — VISITOR COUNT */}

            <div
              className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-gray-100
                bg-gray-50
                px-4
                py-3
              "
            >

              <div className="text-right">

                <p
                  className="
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-gray-900
                    md:text-3xl
                  "
                >
                  <AnimatedNumber
                    value={todayVisits}
                    duration={1000}
                  />
                </p>

                <p
                  className="
                    text-[9px]
                    font-medium
                    text-gray-400
                  "
                >
                  visits today
                </p>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-1
                  rounded-lg
                  bg-emerald-50
                  px-2
                  py-1.5
                  text-[10px]
                  font-bold
                  text-emerald-700
                "
              >
                <TrendingUp className="h-3 w-3" />
                +12.4%
              </div>

            </div>

          </div>

          {/* Activity bar */}

          <div className="h-1 w-full bg-gray-100">

            <motion.div
              className="h-full bg-emerald-500"
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "72%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Impact;
