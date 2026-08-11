import { useState } from "react";

import {
  Quote,
  Star,
  CheckCircle2,
  MapPin,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Sonam Tobgay",
    role: "STEM Overseas Scholar",
    dzongkhag: "Thimphu",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "Full STEM Scholarship Recipient",
    quote:
      "The Youth Portal System made discovering and applying for international STEM scholarships effortless. Having all my documents and verified digital identity in one place gave me the confidence to apply!",
    likes: 42,
    verified: true,
  },

  {
    id: 2,
    name: "Pema Choden",
    role: "Digital Literacy Master Coach",
    dzongkhag: "Paro",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "Trained 250+ Rural Youth",
    quote:
      "Through YPS workshops, I upgraded my digital skills and became a certified peer coach. Now I help young students across Paro navigate digital tools safely and creatively.",
    likes: 38,
    verified: true,
  },

  {
    id: 3,
    name: "Tashi Dorji",
    role: "National Youth Volunteer Leader",
    dzongkhag: "Punakha",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "180+ Volunteer Hours Tracked",
    quote:
      "Tracking community service hours used to be informal. YPS generates verifiable e-certificates for every project, which played a huge role when I applied for higher education.",
    likes: 56,
    verified: true,
  },

  {
    id: 4,
    name: "Dechen Wangmo",
    role: "Green Eco-Tech Founder",
    dzongkhag: "Chukha",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "Youth Innovation Fund Winner",
    quote:
      "The Digital Innovation section matched me with mentors and seed funding for my eco-recycling start-up. The mentorship network on this platform is truly transformative.",
    likes: 64,
    verified: true,
  },

  {
    id: 5,
    name: "Karma Tshering",
    role: "Career Apprentice",
    dzongkhag: "Sarpang",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "Secured Industry Apprenticeship",
    quote:
      "The personalized match finder recommended training opportunities aligned directly with my skills. Within two months, I landed an IT apprenticeship in Gelephu Mindful City!",
    likes: 29,
    verified: true,
  },

  {
    id: 6,
    name: "Tshering Yuden",
    role: "Youth Advocate & Writer",
    dzongkhag: "Trashigang",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    achievement: "Regional Youth Forum Lead",
    quote:
      "Connecting with youth centers in eastern Bhutan became so convenient. YPS bridges geographic distances and gives voice to young people everywhere.",
    likes: 47,
    verified: true,
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

const TestimonialCard = ({
  item,
  onLike,
  isClone = false,
}) => {
  return (
    <article
      className="
        group/card
        relative
        flex
        h-[255px]
        w-[340px]
        flex-shrink-0
        flex-col
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-lg
      "
    >
      {/* =================================================
          QUOTE ICON
      ================================================= */}

      <div className="absolute right-5 top-5">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">

          <Quote className="h-4 w-4 text-blue-500" />

        </div>

      </div>

      {/* =================================================
          RATING
      ================================================= */}

      <div className="flex gap-0.5">

        {[...Array(item.rating)].map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* =================================================
          QUOTE
      ================================================= */}

      <p className="mt-3 line-clamp-4 text-[13px] leading-relaxed text-gray-600">
        “{item.quote}”
      </p>

      {/* =================================================
          ACHIEVEMENT
      ================================================= */}

      <div className="mt-auto">

        <div className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1.5 text-[10px] font-semibold text-blue-700">

          <Award className="h-3.5 w-3.5 flex-shrink-0" />

          <span className="truncate">
            {item.achievement}
          </span>

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">

          {/* USER */}

          <div className="flex min-w-0 items-center gap-2.5">

            <div className="relative flex-shrink-0">

              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                className="
                  h-9
                  w-9
                  rounded-full
                  object-cover
                  ring-2
                  ring-blue-50
                "
              />

              {item.verified && (

                <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-0.5">

                  <CheckCircle2 className="h-3 w-3 text-blue-600" />

                </span>

              )}

            </div>

            <div className="min-w-0">

              <h3 className="truncate text-xs font-bold text-gray-900">
                {item.name}
              </h3>

              <p className="truncate text-[10px] font-medium text-blue-600">
                {item.role}
              </p>

              <p className="mt-0.5 flex items-center gap-1 text-[9px] text-gray-400">

                <MapPin className="h-2.5 w-2.5" />

                {item.dzongkhag} Dzongkhag

              </p>

            </div>

          </div>

          {/* LIKE */}

          {!isClone ? (

            <button
              type="button"
              onClick={() => onLike(item.id)}
              aria-label={`Like ${item.name}'s story`}
              className="
                flex
                flex-shrink-0
                items-center
                gap-1
                rounded-lg
                px-2
                py-1.5
                text-[10px]
                font-semibold
                text-gray-400
                transition
                hover:bg-red-50
                hover:text-red-500
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-red-400
              "
            >

              <Heart className="h-3.5 w-3.5 fill-red-50 text-red-400" />

              {item.likes}

            </button>

          ) : (

            <div
              aria-hidden="true"
              className="flex items-center gap-1 px-2 py-1.5 text-[10px] text-gray-300"
            >

              <Heart className="h-3.5 w-3.5" />

              {item.likes}

            </div>

          )}

        </div>

      </div>

    </article>
  );
};

/* =========================================================
   TICKER ROW
========================================================= */

const TickerRow = ({
  items,
  direction = "left",
  duration = 45,
  onLike,
}) => {

  /*
    Duplicate the cards so that the animation can
    continuously move without a visible gap.
  */

  const duplicatedItems = [...items, ...items];

  return (

    <div className="group/ticker relative overflow-hidden">

      <div
        className="
          yps-ticker
          flex
          w-max
          gap-3
          py-1
          group-hover/ticker:[animation-play-state:paused]
        "
        style={{
          animation:
            direction === "left"
              ? `yps-ticker-left ${duration}s linear infinite`
              : `yps-ticker-right ${duration}s linear infinite`,
        }}
      >

        {duplicatedItems.map((item, index) => (

          <TestimonialCard
            key={`${item.id}-${index}`}
            item={item}
            onLike={onLike}
            isClone={index >= items.length}
          />

        ))}

      </div>

    </div>

  );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const TestimonialsSection = () => {

  const [testimonials, setTestimonials] =
    useState(INITIAL_TESTIMONIALS);

  /* =======================================================
     LIKE
  ======================================================= */

  const handleLike = (id) => {

    setTestimonials((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              likes: item.likes + 1,
            }
          : item
      )
    );

  };

  /* =======================================================
     SPLIT ROWS
  ======================================================= */

  const middle = Math.ceil(
    testimonials.length / 2
  );

  const rowOne = testimonials.slice(
    0,
    middle
  );

  const rowTwo = testimonials.slice(
    middle
  );

  return (

    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-14
        md:py-16
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-80
          w-80
          rounded-full
          bg-blue-400/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-indigo-400/10
          blur-3xl
        "
      />

      {/* =================================================
          KEYFRAMES
      ================================================= */}

      <style>
        {`
          @keyframes yps-ticker-left {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 6px));
            }
          }

          @keyframes yps-ticker-right {
            from {
              transform: translateX(calc(-50% - 6px));
            }

            to {
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .yps-ticker {
              animation: none !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="relative z-10">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto mb-9 max-w-3xl px-5 text-center">

          {/* LABEL */}

          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700">

            <Sparkles className="h-3.5 w-3.5" />

            Youth Voices & Testimonials

          </div>

          {/* TITLE */}

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">

            Real Stories,

            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">

              {" "}
              Empowered Futures

            </span>

          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">

            Discover how Bhutanese youth are building skills,
            participating in programmes and creating positive
            change through the Youth Portal System.

          </p>

        </div>

        {/* =================================================
            TESTIMONIAL TICKER
        ================================================= */}

        {testimonials.length > 0 ? (

          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >

            {/* ROW ONE */}

            <TickerRow
              items={rowOne}
              direction="left"
              duration={50}
              onLike={handleLike}
            />

            {/* ROW TWO */}

            <div className="mt-3">

              <TickerRow
                items={rowTwo}
                direction="right"
                duration={56}
                onLike={handleLike}
              />

            </div>

          </div>

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">

              <Quote className="h-5 w-5 text-blue-500" />

            </div>

            <h3 className="mt-4 text-base font-bold text-gray-800">
              No stories available
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Youth stories will appear here once they are published.
            </p>

          </div>

        )}

      </div>

    </section>

  );
};

export default TestimonialsSection;