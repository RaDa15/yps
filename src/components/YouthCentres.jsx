import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Users,
  X,
  Wifi,
  Cpu,
  Palette,
  Dumbbell,
  BookOpen,
  Globe,
  Star,
  Zap,
} from "lucide-react";

/* ================================================================
   DATA
   All counts below are derived from these two arrays,
   so the UI can never drift out of sync with the data.
================================================================= */

const ALL_DZONGKHAGS = [
  { dzongkhag: "Thimphu",          available: true  },
  { dzongkhag: "Paro",             available: true  },
  { dzongkhag: "Punakha",          available: true  },
  { dzongkhag: "Haa",              available: true  },
  { dzongkhag: "Wangdue Phodrang", available: true  },
  { dzongkhag: "Bumthang",         available: true  },
  { dzongkhag: "Trongsa",          available: true  },
  { dzongkhag: "Chukha",           available: true  },
  { dzongkhag: "Dagana",           available: true  },
  { dzongkhag: "Sarpang",          available: true  },
  { dzongkhag: "Mongar",           available: true  },
  { dzongkhag: "Trashigang",       available: true  },
  { dzongkhag: "Gasa",             available: false },
  { dzongkhag: "Lhuntse",          available: false },
  { dzongkhag: "Pemagatshel",      available: false },
  { dzongkhag: "Samdrup Jongkhar", available: false },
  { dzongkhag: "Trashiyangtse",    available: false },
  { dzongkhag: "Zhemgang",         available: false },
  { dzongkhag: "Tsirang",          available: false },
  { dzongkhag: "Samtse",           available: false },
];

/* Card order runs west -> east, so the numbering on the carousel
   encodes real geography instead of decorating the cards.
   `image` files live in /public/images/centres/ - if one is missing
   the card falls back to its accent gradient, so nothing breaks. */

const ALL_CENTRES = [
  {
    dzongkhag: "Thimphu",
    name: "Thimphu Youth Innovation Hub",
    region: "Capital hub",
    tagline: "Flagship centre & NDI pilot site",
    description:
      "A creative space for collaboration, digital skills and innovation projects for the capital's youth.",
    tags: ["Technology", "Innovation", "Fast Internet"],
    phone: "+975-2-324891",
    hours: "Mon–Sat, 8AM–6PM",
    members: 480,
    color: "blue",
    icons: [Cpu, Wifi],
    image: `${import.meta.env.BASE_URL}images/centres/thimphu.jpg`,
  },
  {
    dzongkhag: "Paro",
    name: "Paro Makerspace",
    region: "Western hub",
    tagline: "Arts & heritage focus",
    description:
      "Combining traditional Bhutanese creativity with modern design thinking and immersive VR labs.",
    tags: ["Design Studio", "VR Lab", "Crafts"],
    phone: "+975-8-271432",
    hours: "Mon–Fri, 9AM–5PM",
    members: 210,
    color: "emerald",
    icons: [Palette, BookOpen],
    image: `${import.meta.env.BASE_URL}images/centres/paro.jpg`,
  },
  {
    dzongkhag: "Punakha",
    name: "Punakha Youth Centre",
    region: "Central hub",
    tagline: "Volunteering & farming projects",
    description:
      "Supporting youth through learning, sports and vibrant community development activities.",
    tags: ["Training", "Sports", "Community"],
    phone: "+975-2-584123",
    hours: "Mon–Sat, 8AM–5PM",
    members: 175,
    color: "amber",
    icons: [Dumbbell, Users],
    image: `${import.meta.env.BASE_URL}images/centres/punakha.jpg`,
  },
  {
    dzongkhag: "Wangdue Phodrang",
    name: "Wangdue Youth Centre",
    region: "Central hub",
    tagline: "Sports & wellness track",
    description:
      "Empowering rural youth with vocational training and digital literacy programmes.",
    tags: ["Vocational", "Digital Skills", "Arts"],
    phone: "+975-2-481207",
    hours: "Mon–Sat, 8AM–5PM",
    members: 130,
    color: "blue",
    icons: [Cpu, Globe],
    image: `${import.meta.env.BASE_URL}images/centres/wangdue.jpg`,
  },
  {
    dzongkhag: "Bumthang",
    name: "Bumthang Cultural Youth Centre",
    region: "Central hub",
    tagline: "Cultural heritage programmes",
    description:
      "Connecting youth with Bhutan's rich cultural heritage through arts and modern programmes.",
    tags: ["Culture", "Heritage", "Arts"],
    phone: "+975-3-631482",
    hours: "Mon–Fri, 9AM–5PM",
    members: 112,
    color: "emerald",
    icons: [Palette, Star],
    image:`${import.meta.env.BASE_URL}images/centres/bumthang.jpg`,
  },
  {
    dzongkhag: "Haa",
    name: "Haa Youth Hub",
    region: "Western hub",
    tagline: "Rural skills & wellness",
    description:
      "A rural youth hub championing skills development, cultural preservation and wellness.",
    tags: ["Skills", "Culture", "Wellness"],
    phone: "+975-8-376541",
    hours: "Mon–Fri, 9AM–4PM",
    members: 88,
    color: "purple",
    icons: [BookOpen, Palette],
    image:`${import.meta.env.BASE_URL}images/centres/haa.jpg`,
  },
  {
    dzongkhag: "Trongsa",
    name: "Trongsa Youth Hub",
    region: "Central hub",
    tagline: "Leadership & youth sports",
    description:
      "A multipurpose centre for leadership training, skill-building and youth sports.",
    tags: ["Leadership", "Skills", "Sports"],
    phone: "+975-3-521337",
    hours: "Mon–Sat, 8AM–5PM",
    members: 95,
    color: "amber",
    icons: [Zap, Dumbbell],
    image:`${import.meta.env.BASE_URL}images/centres/trongsa.jpg`,
  },
  {
    dzongkhag: "Chukha",
    name: "Chukha Youth Centre",
    region: "Southern hub",
    tagline: "Enterprise & trade skills",
    description:
      "Supporting youth near the border with technology and entrepreneurship opportunities.",
    tags: ["Entrepreneurship", "Tech", "Community"],
    phone: "+975-8-221094",
    hours: "Mon–Fri, 9AM–5PM",
    members: 142,
    color: "purple",
    icons: [Cpu, Globe],
    image: `${import.meta.env.BASE_URL}images/centres/chhukha.jpg`,
  },
  {
    dzongkhag: "Dagana",
    name: "Dagana Youth Hub",
    region: "Southern hub",
    tagline: "Traditional arts & training",
    description:
      "A community hub focused on wellness, traditional arts and vocational training.",
    tags: ["Wellness", "Arts", "Vocational"],
    phone: "+975-7-411220",
    hours: "Mon–Fri, 9AM–5PM",
    members: 78,
    color: "blue",
    icons: [BookOpen, Palette],
    image: `${import.meta.env.BASE_URL}images/centres/dagana.jpg`,
  },
  {
    dzongkhag: "Sarpang",
    name: "Sarpang Youth Hub",
    region: "Southern hub",
    tagline: "Digital literacy & start-ups",
    description:
      "Offering digital literacy and entrepreneurship support to southern Bhutan youth.",
    tags: ["Digital Literacy", "Entrepreneurship", "Sports"],
    phone: "+975-6-365089",
    hours: "Mon–Sat, 8AM–5PM",
    members: 160,
    color: "emerald",
    icons: [Cpu, Users],
    image: `${import.meta.env.BASE_URL}images/centres/sarpang.jpg`,
  },
  {
    dzongkhag: "Mongar",
    name: "Mongar Youth Centre",
    region: "Eastern hub",
    tagline: "Digital skills & wellness",
    description:
      "Bridging eastern Bhutan youth with modern skills, digital tools and wellness resources.",
    tags: ["Digital Skills", "Wellness", "Community"],
    phone: "+975-4-641389",
    hours: "Mon–Fri, 9AM–5PM",
    members: 103,
    color: "amber",
    icons: [Globe, BookOpen],
    image: `${import.meta.env.BASE_URL}images/centres/mongar.jpg`,
  },
  {
    dzongkhag: "Trashigang",
    name: "Trashigang Youth Hub",
    region: "Eastern hub",
    tagline: "Innovation & youth leadership",
    description:
      "The gateway hub for eastern Bhutan — focusing on innovation, culture and youth leadership.",
    tags: ["Innovation", "Culture", "Leadership"],
    phone: "+975-4-521094",
    hours: "Mon–Sat, 8AM–5PM",
    members: 134,
    color: "purple",
    icons: [Zap, Star],
    image: `${import.meta.env.BASE_URL}images/centres/trashigang.jpg`,
  },
];

const ACTIVE_COUNT = ALL_CENTRES.length;
const PLANNED_COUNT = ALL_DZONGKHAGS.filter((d) => !d.available).length;

/* ================================================================
   ACCENT TOKENS — same four families used in Impact.jsx
   (blue / emerald / amber / purple, -50 surface + -600 icon)
   `photo` is the fallback wash shown when a card has no image yet.
================================================================= */

const COLORS = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-100",
    photo: "bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-900",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    ring: "ring-emerald-100",
    photo: "bg-gradient-to-br from-emerald-500 via-emerald-700 to-teal-900",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-100",
    photo: "bg-gradient-to-br from-amber-400 via-orange-600 to-amber-900",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    badge: "border-purple-200 bg-purple-50 text-purple-700",
    dot: "bg-purple-500",
    ring: "ring-purple-100",
    photo: "bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-900",
  },
};

const pad = (n) => String(n).padStart(2, "0");

/* ================================================================
   CENTRE DETAIL — opens when a carousel card is selected
================================================================= */

const CentreDetailModal = ({ centre, onClose }) => {
  const c = COLORS[centre.color] || COLORS.blue;
  const Icon1 = centre.icons[0];
  const Icon2 = centre.icons[1];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={centre.name}
    >
      <motion.div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ duration: 0.25 }}
      >
        {/* Photo band */}
        <div className="relative h-36">
          <div className={`absolute inset-0 ${c.photo}`} />
          <img
            src={centre.image}
            alt=""
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close centre details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-gray-500 shadow-sm backdrop-blur-sm transition-colors hover:text-blue-600"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              {centre.region}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-tight text-white">
              {centre.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-center gap-2">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${c.bg}`}>
              <Icon1 size={18} className={c.text} />
            </div>
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${c.bg} opacity-60`}>
              <Icon2 size={16} className={c.text} />
            </div>

            <span
              className={`ml-auto rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${c.badge}`}
            >
              {centre.dzongkhag}
            </span>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-gray-500 md:text-sm">
            {centre.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1">
            {centre.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-4">
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Users className={`h-3.5 w-3.5 ${c.text}`} />
              {centre.members} members
            </p>
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Phone className={`h-3.5 w-3.5 ${c.text}`} />
              {centre.phone}
            </p>
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className={`h-3.5 w-3.5 ${c.text}`} />
              {centre.hours}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <span className={`inline-block h-1.5 w-1.5 rounded-full ${c.dot}`} />
            <span className="text-[10px] font-bold text-gray-500">Open now</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ================================================================
   MAIN SECTION
================================================================= */

const YouthCentres = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [detail, setDetail] = useState(null);

  const inputRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [rail, setRail] = useState({
    ratio: 0,
    thumb: 0.35,
    atStart: true,
    atEnd: false,
  });

  /* ---- carousel scroll state ---- */

  const readRail = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;

    setRail({
      ratio: max > 0 ? el.scrollLeft / max : 0,
      thumb: el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1,
      atStart: el.scrollLeft <= 4,
      atEnd: max <= 0 || el.scrollLeft >= max - 4,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    readRail();
    el.addEventListener("scroll", readRail, { passive: true });
    window.addEventListener("resize", readRail);

    return () => {
      el.removeEventListener("scroll", readRail);
      window.removeEventListener("resize", readRail);
    };
  }, [readRail]);

  const behavior = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

  /* Advance by a full row of visible cards, not one card at a time */
  const step = (direction) => {
    const el = trackRef.current;
    const card = cardRefs.current[0];
    if (!el || !card) return;

    const stride = card.offsetWidth + 14;
    const perView = Math.max(1, Math.round(el.clientWidth / stride));

    el.scrollBy({ left: direction * stride * perView, behavior: behavior() });
  };

  const scrollToCentre = (dzongkhag) => {
    const el = trackRef.current;
    const index = ALL_CENTRES.findIndex((c) => c.dzongkhag === dzongkhag);
    const card = cardRefs.current[index];
    if (!el || !card) return;

    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 4, behavior: behavior() });
  };

  /* ---- search ---- */

  const handleSearch = (val) => {
    setQuery(val);

    if (!val.trim()) {
      setSearchResult(null);
      return;
    }

    const match = ALL_DZONGKHAGS.find((d) =>
      d.dzongkhag.toLowerCase().includes(val.toLowerCase())
    );

    if (match) {
      const centre = ALL_CENTRES.find((c) => c.dzongkhag === match.dzongkhag);
      setSearchResult({
        found: match.available,
        dzongkhag: match.dzongkhag,
        centre,
      });
      if (centre) scrollToCentre(centre.dzongkhag);
    } else {
      setSearchResult({ found: false, dzongkhag: null, centre: null });
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSearchResult(null);
    inputRef.current?.focus();
  };

  return (
    <>
      <section
        id="youth-centres"
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
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        {/* Header + search stay inside the container */}

        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">

          {/* ================================
              SECTION HEADER
          ================================= */}

          <motion.div
            className="mx-auto mb-6 max-w-3xl text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
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
              <MapPin className="h-3.5 w-3.5" />
              <span>{ACTIVE_COUNT} Active Centres Across Bhutan</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-4xl">
              Find a Youth Centre
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
              Search your Dzongkhag to see whether a youth centre is open near
              you, and what it offers.
            </p>
          </motion.div>

          {/* ================================
              SEARCH
          ================================= */}

          <motion.div
            className="mx-auto mb-5 max-w-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Search by Dzongkhag"
                placeholder="Search a Dzongkhag — Thimphu, Paro, Gasa…"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  py-3
                  pl-11
                  pr-11
                  text-sm
                  text-gray-800
                  shadow-sm
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-blue-300
                  focus:shadow-md
                "
              />

              {query && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Quick search chips */}
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {["Thimphu", "Paro", "Punakha", "Haa", "Gasa", "Mongar", "Trashigang"].map(
                (d) => (
                  <button
                    key={d}
                    onClick={() => handleSearch(d)}
                    className={`
                      rounded-full
                      border
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      transition-colors
                      md:text-xs
                      ${
                        query === d
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-200 bg-white text-gray-500 hover:border-blue-200 hover:text-blue-700"
                      }
                    `}
                  >
                    {d}
                  </button>
                )
              )}
            </div>

            <AnimatePresence mode="wait">
              {searchResult && (
                <motion.div
                  key={searchResult.found ? "found" : "not"}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    mt-3
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    p-4
                    ${
                      searchResult.found
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-amber-200 bg-amber-50"
                    }
                  `}
                >
                  {searchResult.found ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  )}

                  <div>
                    {searchResult.found ? (
                      <>
                        <p className="text-xs font-bold text-gray-800 md:text-sm">
                          A youth centre is open in {searchResult.dzongkhag}
                        </p>

                        {searchResult.centre && (
                          <p className="mt-1 text-[10px] leading-relaxed text-gray-500 md:text-xs">
                            {searchResult.centre.name} — card{" "}
                            {pad(
                              ALL_CENTRES.findIndex(
                                (c) => c.dzongkhag === searchResult.dzongkhag
                              ) + 1
                            )}{" "}
                            in the carousel below
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="text-xs font-bold text-gray-800 md:text-sm">
                          {searchResult.dzongkhag
                            ? `No centre in ${searchResult.dzongkhag} yet`
                            : "That Dzongkhag isn't in the list"}
                        </p>

                        <p className="mt-1 text-[10px] leading-relaxed text-gray-500 md:text-xs">
                          {searchResult.dzongkhag
                            ? `${PLANNED_COUNT} more centres are planned — check back soon.`
                            : "Try Thimphu, Paro, Punakha or Gasa."}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ================================
            CAROUSEL — one row, four columns on desktop
        ================================= */}

        <motion.div
          className="relative z-10 mx-auto max-w-6xl px-5 md:px-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Rail wrapper — the arrows sit on the left and right edges */}
          <div className="relative">

            {/* Previous */}
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={rail.atStart}
              aria-label="Previous centres"
              className="
                absolute
                left-0
                top-1/2
                z-20
                flex
                h-9
                w-9
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-gray-600
                shadow-md
                transition-all
                hover:border-blue-200
                hover:text-blue-600
                disabled:cursor-not-allowed
                disabled:opacity-0
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                md:h-11
                md:w-11
              "
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => step(1)}
              disabled={rail.atEnd}
              aria-label="Next centres"
              className="
                absolute
                right-0
                top-1/2
                z-20
                flex
                h-9
                w-9
                -translate-y-1/2
                translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-gray-600
                shadow-md
                transition-all
                hover:border-blue-200
                hover:text-blue-600
                disabled:cursor-not-allowed
                disabled:opacity-0
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                md:h-11
                md:w-11
              "
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <div
              ref={trackRef}
              role="region"
              aria-label="Youth centres carousel"
              tabIndex={0}
              className="
                flex
                snap-x
                snap-mandatory
                gap-3.5
                overflow-x-auto
                scroll-smooth
                pb-1
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                focus:outline-none
                focus-visible:rounded-3xl
                focus-visible:ring-2
                focus-visible:ring-blue-400
              "
            >
            {ALL_CENTRES.map((centre, index) => {
              const c = COLORS[centre.color] || COLORS.blue;
              const isHighlighted =
                searchResult?.found && searchResult.dzongkhag === centre.dzongkhag;

              return (
                <button
                  key={centre.dzongkhag}
                  type="button"
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => setDetail(centre)}
                  aria-label={`${centre.name}, ${centre.region}`}
                  className={`
                    group
                    relative
                    aspect-[3/4]
                    w-[70%]
                    shrink-0
                    snap-start
                    overflow-hidden
                    rounded-3xl
                    text-left
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                    sm:w-[calc((100%-0.875rem)/2)]
                    md:w-[calc((100%-1.75rem)/3)]
                    lg:w-[calc((100%-2.625rem)/4)]
                    ${isHighlighted ? `ring-4 ${c.ring} shadow-lg` : ""}
                  `}
                >
                  {/* Fallback wash, then the photo on top of it */}
                  <div className={`absolute inset-0 ${c.photo}`} />

                  <img
                    src={centre.image}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                      motion-reduce:transition-none
                      motion-reduce:group-hover:scale-100
                    "
                  />

                  {/* Legibility scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                  {/* Open-now pip */}
                  <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/100 px-2 py-0.5 backdrop-blur-sm">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-black">Open</span>
                  </span>

                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-mono text-[10px] tracking-[0.14em] text-white/70">
                      {pad(index + 1)} · {centre.region}
                    </p>

                    <h3 className="mt-1 text-base font-bold tracking-tight text-white md:text-lg">
                      {centre.dzongkhag}
                    </h3>

                    <p className="mt-0.5 text-[11px] leading-snug text-white/75 md:text-xs">
                      {centre.tagline}
                    </p>

                    <span
                      className="
                        mt-2
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        font-bold
                        text-white/0
                        transition-colors
                        duration-300
                        group-hover:text-white
                        group-focus-visible:text-white
                      "
                    >
                      View centre
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </button>
              );
            })}
            </div>
          </div>

          {/* Progress rail */}
          <div className="mt-4 flex items-center justify-center">
            <div className="relative h-1.5 w-full max-w-md overflow-hidden rounded-full bg-gray-200">
              <div
                className="absolute top-0 h-full rounded-full bg-blue-600 transition-[left] duration-150"
                style={{
                  width: `${Math.min(rail.thumb * 100, 100)}%`,
                  left: `${rail.ratio * (100 - Math.min(rail.thumb * 100, 100))}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Centre detail */}

      <AnimatePresence>
        {detail && (
          <CentreDetailModal centre={detail} onClose={() => setDetail(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default YouthCentres;