import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  MapPinned,
  Phone,
  Clock,
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
  ArrowUpRight,
  Building2,
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

const ALL_CENTRES = [
  {
    dzongkhag: "Thimphu",
    name: "Thimphu Youth Innovation Hub",
    description:
      "A creative space for collaboration, digital skills and innovation projects for the capital's youth.",
    tags: ["Technology", "Innovation", "Fast Internet"],
    phone: "+975-2-324891",
    hours: "Mon–Sat, 8AM–6PM",
    members: 480,
    color: "blue",
    icons: [Cpu, Wifi],
    featured: true,
  },
  {
    dzongkhag: "Paro",
    name: "Paro Makerspace",
    description:
      "Combining traditional Bhutanese creativity with modern design thinking and immersive VR labs.",
    tags: ["Design Studio", "VR Lab", "Crafts"],
    phone: "+975-8-271432",
    hours: "Mon–Fri, 9AM–5PM",
    members: 210,
    color: "emerald",
    icons: [Palette, BookOpen],
    featured: true,
  },
  {
    dzongkhag: "Punakha",
    name: "Punakha Youth Centre",
    description:
      "Supporting youth through learning, sports and vibrant community development activities.",
    tags: ["Training", "Sports", "Community"],
    phone: "+975-2-584123",
    hours: "Mon–Sat, 8AM–5PM",
    members: 175,
    color: "amber",
    icons: [Dumbbell, Users],
    featured: true,
  },
  {
    dzongkhag: "Haa",
    name: "Haa Youth Hub",
    description:
      "A rural youth hub championing skills development, cultural preservation and wellness.",
    tags: ["Skills", "Culture", "Wellness"],
    phone: "+975-8-376541",
    hours: "Mon–Fri, 9AM–4PM",
    members: 88,
    color: "purple",
    icons: [BookOpen, Palette],
    featured: true,
  },
  {
    dzongkhag: "Wangdue Phodrang",
    name: "Wangdue Youth Centre",
    description:
      "Empowering rural youth with vocational training and digital literacy programmes.",
    tags: ["Vocational", "Digital Skills", "Arts"],
    phone: "+975-2-481207",
    hours: "Mon–Sat, 8AM–5PM",
    members: 130,
    color: "blue",
    icons: [Cpu, Globe],
    featured: false,
  },
  {
    dzongkhag: "Bumthang",
    name: "Bumthang Cultural Youth Centre",
    description:
      "Connecting youth with Bhutan's rich cultural heritage through arts and modern programmes.",
    tags: ["Culture", "Heritage", "Arts"],
    phone: "+975-3-631482",
    hours: "Mon–Fri, 9AM–5PM",
    members: 112,
    color: "emerald",
    icons: [Palette, Star],
    featured: false,
  },
  {
    dzongkhag: "Trongsa",
    name: "Trongsa Youth Hub",
    description:
      "A multipurpose centre for leadership training, skill-building and youth sports.",
    tags: ["Leadership", "Skills", "Sports"],
    phone: "+975-3-521337",
    hours: "Mon–Sat, 8AM–5PM",
    members: 95,
    color: "amber",
    icons: [Zap, Dumbbell],
    featured: false,
  },
  {
    dzongkhag: "Chukha",
    name: "Chukha Youth Centre",
    description:
      "Supporting youth near the border with technology and entrepreneurship opportunities.",
    tags: ["Entrepreneurship", "Tech", "Community"],
    phone: "+975-8-221094",
    hours: "Mon–Fri, 9AM–5PM",
    members: 142,
    color: "purple",
    icons: [Cpu, Globe],
    featured: false,
  },
  {
    dzongkhag: "Dagana",
    name: "Dagana Youth Hub",
    description:
      "A community hub focused on wellness, traditional arts and vocational training.",
    tags: ["Wellness", "Arts", "Vocational"],
    phone: "+975-7-411220",
    hours: "Mon–Fri, 9AM–5PM",
    members: 78,
    color: "blue",
    icons: [BookOpen, Palette],
    featured: false,
  },
  {
    dzongkhag: "Sarpang",
    name: "Sarpang Youth Hub",
    description:
      "Offering digital literacy and entrepreneurship support to southern Bhutan youth.",
    tags: ["Digital Literacy", "Entrepreneurship", "Sports"],
    phone: "+975-6-365089",
    hours: "Mon–Sat, 8AM–5PM",
    members: 160,
    color: "emerald",
    icons: [Cpu, Users],
    featured: false,
  },
  {
    dzongkhag: "Mongar",
    name: "Mongar Youth Centre",
    description:
      "Bridging eastern Bhutan youth with modern skills, digital tools and wellness resources.",
    tags: ["Digital Skills", "Wellness", "Community"],
    phone: "+975-4-641389",
    hours: "Mon–Fri, 9AM–5PM",
    members: 103,
    color: "amber",
    icons: [Globe, BookOpen],
    featured: false,
  },
  {
    dzongkhag: "Trashigang",
    name: "Trashigang Youth Hub",
    description:
      "The gateway hub for eastern Bhutan — focusing on innovation, culture and youth leadership.",
    tags: ["Innovation", "Culture", "Leadership"],
    phone: "+975-4-521094",
    hours: "Mon–Sat, 8AM–5PM",
    members: 134,
    color: "purple",
    icons: [Zap, Star],
    featured: false,
  },
];

const FEATURED = ALL_CENTRES.filter((c) => c.featured);
const ACTIVE_COUNT = ALL_CENTRES.length;
const PLANNED_COUNT = ALL_DZONGKHAGS.filter((d) => !d.available).length;

/* ================================================================
   ACCENT TOKENS — same four families used in Impact.jsx
   (blue / emerald / amber / purple, -50 surface + -600 icon)
================================================================= */

const COLORS = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-100",
    border: "border-blue-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    ring: "ring-emerald-100",
    border: "border-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-100",
    border: "border-amber-200",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    badge: "border-purple-200 bg-purple-50 text-purple-700",
    dot: "bg-purple-500",
    ring: "ring-purple-100",
    border: "border-purple-200",
  },
};

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=88.7%2C26.7%2C92.2%2C28.3&layer=mapnik";

/* ================================================================
   MODAL — all active centres
================================================================= */

const AllCentresModal = ({ onClose }) => {
  const [modalQuery, setModalQuery] = useState("");

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

  const q = modalQuery.trim().toLowerCase();

  const filtered = q
    ? ALL_CENTRES.filter(
        (c) =>
          c.dzongkhag.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      )
    : ALL_CENTRES;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="All youth centres"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="
          relative
          z-10
          flex
          max-h-[88vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-xl
        "
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div
          className="
            flex
            flex-shrink-0
            items-start
            justify-between
            gap-4
            border-b
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            via-white
            to-indigo-50
            p-4
            md:p-5
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-white
                shadow-sm
              "
            >
              <MapPinned className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Centre Directory
              </p>

              <h3 className="mt-0.5 text-sm font-bold text-gray-900 md:text-base">
                All {ACTIVE_COUNT} active youth centres
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Open across {ACTIVE_COUNT} Dzongkhags, with {PLANNED_COUNT} more
                planned.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close directory"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-400
              shadow-sm
              transition-colors
              hover:border-blue-200
              hover:text-blue-600
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Filter */}
        <div className="flex-shrink-0 border-b border-gray-100 px-4 py-3 md:px-5">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={modalQuery}
              onChange={(e) => setModalQuery(e.target.value)}
              placeholder="Filter by Dzongkhag, name or focus area"
              autoFocus
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-slate-50
                py-2.5
                pl-10
                pr-9
                text-sm
                text-gray-800
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-blue-300
                focus:bg-white
              "
            />

            {modalQuery && (
              <button
                onClick={() => setModalQuery("")}
                aria-label="Clear filter"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <p className="mt-2 text-[10px] text-gray-400 md:text-xs">
            Showing {filtered.length} of {ACTIVE_COUNT} centres
          </p>
        </div>

        {/* Cards */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5">
          {filtered.length === 0 ? (
            <div className="py-14 text-center">
              <p className="text-sm font-bold text-gray-800">
                No centres match that filter
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Try a Dzongkhag name such as Mongar, or a focus area such as
                Sports.
              </p>
              <button
                onClick={() => setModalQuery("")}
                className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
              {filtered.map((centre, index) => {
                const c = COLORS[centre.color] || COLORS.blue;
                const Icon1 = centre.icons[0];
                const Icon2 = centre.icons[1];

                return (
                  <motion.div
                    key={centre.dzongkhag}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
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
                    {/* Icons */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          ${c.bg}
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        `}
                      >
                        <Icon1 size={20} className={c.text} />
                      </div>

                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.bg} opacity-60`}
                      >
                        <Icon2 size={15} className={c.text} />
                      </div>
                    </div>

                    {/* Dzongkhag */}
                    <span
                      className={`mt-4 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${c.badge}`}
                    >
                      {centre.dzongkhag}
                    </span>

                    {/* Name */}
                    <h4 className="mt-2 text-xs font-bold leading-snug text-gray-800 md:text-sm">
                      {centre.name}
                    </h4>

                    {/* Description */}
                    <p className="mt-1 text-[10px] leading-relaxed text-gray-400 md:text-xs">
                      {centre.description}
                    </p>

                    {/* Tags */}
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

                    {/* Details */}
                    <div className="mt-3 space-y-1 border-t border-gray-100 pt-3">
                      <p className="flex items-center gap-2 text-[10px] text-gray-500 md:text-xs">
                        <Users className={`h-3 w-3 ${c.text}`} />
                        {centre.members} members
                      </p>
                      <p className="flex items-center gap-2 text-[10px] text-gray-500 md:text-xs">
                        <Phone className={`h-3 w-3 ${c.text}`} />
                        {centre.phone}
                      </p>
                      <p className="flex items-center gap-2 text-[10px] text-gray-500 md:text-xs">
                        <Clock className={`h-3 w-3 ${c.text}`} />
                        {centre.hours}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="mt-3 flex items-center gap-1.5">
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full ${c.dot}`}
                      />
                      <span className="text-[10px] font-bold text-gray-500">
                        Open now
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-shrink-0 items-center justify-between gap-4 border-t border-gray-100 bg-slate-50 px-4 py-3 md:px-5">
          <p className="text-[10px] text-gray-500 md:text-xs">
            {ACTIVE_COUNT} centres open · {PLANNED_COUNT} planned across Bhutan
          </p>

          <button
            onClick={onClose}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700"
          >
            Close
          </button>
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
  const [expanded, setExpanded] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

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
      const featured = FEATURED.find((f) => f.dzongkhag === match.dzongkhag);
      setSearchResult({
        found: match.available,
        dzongkhag: match.dzongkhag,
        featured,
      });
      if (featured) setExpanded(featured.dzongkhag);
    } else {
      setSearchResult({ found: false, dzongkhag: null, featured: null });
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSearchResult(null);
    setExpanded(null);
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

        {/* Main container */}

        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">

          {/* ================================
              SECTION HEADER
          ================================= */}

          <motion.div
            className="mx-auto mb-7 max-w-3xl text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
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
              <MapPin className="h-3.5 w-3.5" />

              <span>{ACTIVE_COUNT} Active Centres Across Bhutan</span>
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
              Find a Youth Centre
            </h2>

            {/* Description */}

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
              Search your Dzongkhag to see whether a youth centre is open near
              you, and what it offers.
            </p>
          </motion.div>

          {/* ================================
              SEARCH
          ================================= */}

          <motion.div
            className="mx-auto mb-4 max-w-xl"
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

                        {searchResult.featured && (
                          <p className="mt-1 text-[10px] leading-relaxed text-gray-500 md:text-xs">
                            {searchResult.featured.name}
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

          {/* ================================
              MAP + FEATURED CENTRES
          ================================= */}

          <div className="grid grid-cols-1 items-start gap-3 md:gap-4 lg:grid-cols-2">

            {/* MAP */}

            <motion.div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
              "
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 md:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <MapPinned className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      National Map
                    </p>

                    <h3 className="mt-0.5 text-sm font-bold text-gray-900 md:text-base">
                      Youth centres across Bhutan
                    </h3>
                  </div>
                </div>

                <a
                  href="https://www.openstreetmap.org/#map=8/27.5/90.4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 items-center gap-1 text-[10px] font-bold text-gray-500 transition-colors hover:text-blue-600 md:text-xs"
                >
                  Open full map
                  <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 transition-colors group-hover:text-blue-500" />
                </a>
              </div>

              <div className="relative h-[320px] md:h-[360px]">
                <iframe
                  title="Bhutan youth centres map"
                  src={MAP_EMBED_URL}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                />

                <div className="absolute bottom-3 left-3 rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 md:text-xs">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{ACTIVE_COUNT} open</span>
                    <span className="text-gray-200">|</span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span>{PLANNED_COUNT} planned</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 p-4 md:p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Quick search
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
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
              </div>
            </motion.div>

            {/* FEATURED CARDS */}

            <div>
              <motion.div
                className="mb-3 flex items-end justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Featured
                  </p>

                  <h3 className="mt-0.5 text-sm font-bold text-gray-900 md:text-base">
                    Centres to know
                  </h3>
                </div>

                <span className="text-[10px] text-gray-400 md:text-xs">
                  {FEATURED.length} of {ACTIVE_COUNT}
                </span>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {FEATURED.map((centre, index) => {
                  const c = COLORS[centre.color];
                  const isHighlighted =
                    searchResult?.found &&
                    searchResult.dzongkhag === centre.dzongkhag;
                  const isExpanded = expanded === centre.dzongkhag;
                  const Icon1 = centre.icons[0];
                  const Icon2 = centre.icons[1];

                  return (
                    <motion.button
                      key={centre.dzongkhag}
                      type="button"
                      layout
                      onClick={() =>
                        setExpanded(isExpanded ? null : centre.dzongkhag)
                      }
                      aria-expanded={isExpanded}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className={`
                        group
                        rounded-2xl
                        border
                        bg-white
                        p-4
                        text-left
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-md
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400
                        md:p-5
                        ${
                          isHighlighted
                            ? `${c.border} shadow-md ring-4 ${c.ring}`
                            : "border-gray-200"
                        }
                      `}
                    >
                      {/* Icons */}
                      <div className="flex items-start justify-between">
                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            ${c.bg}
                            transition-transform
                            duration-300
                            group-hover:scale-105
                          `}
                        >
                          <Icon1 size={20} className={c.text} />
                        </div>

                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.bg} opacity-60`}
                        >
                          <Icon2 size={15} className={c.text} />
                        </div>
                      </div>

                      {/* Dzongkhag */}
                      <span
                        className={`mt-4 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${c.badge}`}
                      >
                        {centre.dzongkhag}
                      </span>

                      {/* Name */}
                      <h4 className="mt-2 text-xs font-bold leading-snug text-gray-800 md:text-sm">
                        {centre.name}
                      </h4>

                      {/* Description */}
                      <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-gray-400 md:text-xs">
                        {centre.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {centre.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gray-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                        <span className="flex items-center gap-1 text-[10px] text-gray-400 md:text-xs">
                          <Users className="h-3 w-3" />
                          {centre.members}
                        </span>

                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-gray-500 transition-colors group-hover:text-blue-600 md:text-xs">
                          {isExpanded ? "Less" : "More"}
                          <ChevronRight
                            className={`h-3.5 w-3.5 text-gray-300 transition-all group-hover:text-blue-500 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 space-y-1 border-t border-gray-100 pt-3">
                              <p className="flex items-center gap-2 text-[10px] text-gray-500 md:text-xs">
                                <Phone className={`h-3 w-3 ${c.text}`} />
                                {centre.phone}
                              </p>

                              <p className="flex items-center gap-2 text-[10px] text-gray-500 md:text-xs">
                                <Clock className={`h-3 w-3 ${c.text}`} />
                                {centre.hours}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================
              DIRECTORY BAND
          ================================= */}

          <motion.div
            className="
              mt-4
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              via-white
              to-indigo-50
              p-4
              md:p-5
            "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              {/* Left */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    shadow-sm
                  "
                >
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Full Directory
                  </p>

                  <h3 className="mt-0.5 text-sm font-bold text-gray-900 md:text-base">
                    Browse every centre, contact and opening time
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    Includes Mongar, Trashigang and {ACTIVE_COUNT - 2} more
                    centres open today.
                  </p>
                </div>
              </div>

              {/* Right */}

              <button
                onClick={() => setShowModal(true)}
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-md
                  md:text-sm
                "
              >
                View all {ACTIVE_COUNT} centres
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}

      <AnimatePresence>
        {showModal && <AllCentresModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default YouthCentres;