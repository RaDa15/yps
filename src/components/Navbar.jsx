import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * Single source of truth for the nav. Add or reorder here only.
 * `id` must match the section's id on the homepage.
 */
const NAV_LINKS = [
  { id: "journey", label: "Youth Journey" },
  { id: "impact", label: "Impact" },
  { id: "youth-centres", label: "Youth Centres" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

/** Height of the fixed bar, used to offset scroll targets. */
const HEADER_OFFSET = 88;

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  /**
   * True while the bar sits over the hero image.
   * Drives white text + gradient scrim instead of dark text on glass.
   */
  const onImage = !scrolled && !menuOpen;

  /* ---------------------------------------------------------------
   * Scroll state: drives the scrim -> frosted transition and the
   * reading-progress hairline.
   * ------------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ---------------------------------------------------------------
   * Active section tracking. The negative bottom margin means a
   * section only counts as "active" once it reaches the upper
   * portion of the viewport, which matches how people read.
   * ------------------------------------------------------------- */
  useEffect(() => {
    if (!isHome) {
      setActiveId("");
      return;
    }
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActiveId(best.target.id);
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -55% 0px`,
        threshold: [0.1, 0.35, 0.6],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /* ---------------------------------------------------------------
   * Arriving at "/#section" from another route: scroll once mounted.
   * ------------------------------------------------------------- */
  useEffect(() => {
    if (!isHome || !location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const t = setTimeout(() => {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
        behavior: "auto",
      });
      setActiveId(id);
    }, 0);
    return () => clearTimeout(t);
  }, [isHome, location.hash]);

  /* Close the mobile panel whenever the route changes. */
  useEffect(() => setMenuOpen(false), [location.pathname]);

  /* Escape to close, and lock background scroll while open. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  /* ---------------------------------------------------------------
   * Navigation. Works from any route: scrolls when already home,
   * otherwise routes home and lets the hash effect above finish.
   * ------------------------------------------------------------- */
  const goToSection = useCallback(
    (e, id) => {
      e.preventDefault();
      setMenuOpen(false);
      if (!isHome) {
        navigate(`/#${id}`);
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
        behavior: reduceMotion() ? "auto" : "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
    },
    [isHome, navigate]
  );

  const goHome = useCallback(
    (e) => {
      e.preventDefault();
      setMenuOpen(false);
      if (!isHome) {
        navigate("/");
        return;
      }
      window.scrollTo({
        top: 0,
        behavior: reduceMotion() ? "auto" : "smooth",
      });
      window.history.replaceState(null, "", "/");
    },
    [isHome, navigate]
  );

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "bg-white/40 backdrop-blur-lg backdrop-saturate-150 border-b border-white/50 shadow-sm"
          : "bg-black/10 backdrop-blur-md border-b border-white/10",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-7xl mx-auto px-5 sm:px-6",
          "flex items-center justify-between gap-4",
          "transition-[padding] duration-300",
          scrolled ? "py-3" : "py-5",
        ].join(" ")}
      >
        {/* Logo lockup ------------------------------------------------ */}
        <a
          href="/"
          onClick={goHome}
          aria-label="Youth Portal System — back to top"
          className="group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white text-[13px] font-bold tracking-tight shadow-sm transition-transform duration-300 group-hover:-rotate-6">
            Y
          </span>
          <span className="leading-none">
            <span
              className={[
                "block text-[19px] font-bold tracking-tight transition-colors duration-300",
                onImage ? "text-white" : "text-slate-900",
              ].join(" ")}
            >
              YPS
            </span>
            <span
              className={[
                "mt-0.5 block text-[10px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                onImage ? "text-white/75" : "text-slate-500",
              ].join(" ")}
            >
              Youth Portal System
            </span>
          </span>
        </a>

        {/* Desktop links ---------------------------------------------- */}
        <nav
          aria-label="Section navigation"
          className="hidden md:flex items-center gap-1"
        >
          {NAV_LINKS.map(({ id, label }) => {
            const active = activeId === id;
            return (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(e) => goToSection(e, id)}
                aria-current={active ? "true" : undefined}
                className={[
                  "relative rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors duration-300",
                  "focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  active
                    ? onImage
                      ? "text-white"
                      : "text-blue-700"
                    : onImage
                    ? "text-white/80 hover:text-white"
                    : "text-slate-700 hover:text-slate-950",
                ].join(" ")}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Actions ---------------------------------------------------- */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm outline-none transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:translate-y-px focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Log in
          </Link>

          {/* Hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={[
              "md:hidden grid h-10 w-10 place-items-center rounded-lg outline-none transition-colors duration-300",
              "focus-visible:ring-2 focus-visible:ring-blue-600",
              onImage
                ? "text-white hover:bg-white/20"
                : "text-slate-800 hover:bg-black/5",
            ].join(" ")}
          >
            <span className="relative block h-4 w-5">
              {["top-0", "top-1.5", "top-3"].map((pos, i) => (
                <span
                  key={pos}
                  className={[
                    "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 motion-reduce:transition-none",
                    pos,
                    menuOpen && i === 0 ? "translate-y-1.5 rotate-45" : "",
                    menuOpen && i === 1 ? "opacity-0" : "",
                    menuOpen && i === 2 ? "-translate-y-1.5 -rotate-45" : "",
                  ].join(" ")}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Reading progress ------------------------------------------- */}
      <div
        aria-hidden="true"
        className={[
          "absolute bottom-0 left-0 h-[2px] w-full origin-left bg-blue-600",
          "transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Mobile panel ------------------------------------------------ */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden overflow-hidden border-t border-white/40 bg-white/40 backdrop-blur-lg",
          "transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none",
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation" className="px-5 py-3">
          {NAV_LINKS.map(({ id, label }, i) => {
            const active = activeId === id;
            return (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(e) => goToSection(e, id)}
                aria-current={active ? "true" : undefined}
                className={[
                  "flex items-center justify-between border-b border-slate-900/10 py-3.5 text-[15px] font-medium outline-none last:border-b-0",
                  active ? "text-blue-700" : "text-slate-900",
                ].join(" ")}
                style={{ transitionDelay: menuOpen ? `${i * 30}ms` : "0ms" }}
              >
                {label}
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full bg-blue-600 transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </a>
            );
          })}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-2 flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white sm:hidden shadow-sm"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;