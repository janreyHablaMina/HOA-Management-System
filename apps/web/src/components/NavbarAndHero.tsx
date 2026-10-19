"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  X,
  Lock,
  Sparkles,
  Building2,
  Compass,
  Award,
  Layers,
  Clock,
  CheckCircle2,
  Sliders,
  ArrowUpRight,
} from "lucide-react";
import { HoaTenantConfig } from "@/types/hoa";

interface NavbarAndHeroProps {
  tenant: HoaTenantConfig;
  allTenants?: HoaTenantConfig[];
  onSelectTenant?: (id: string) => void;
  onOpenPortalModal: (defaultTab?: "login" | "register" | "demo") => void;
  onOpenCmsDrawer?: () => void;
}

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setCount(target);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          const duration = 1200;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function NavbarAndHero({
  tenant,
  allTenants,
  onSelectTenant,
  onOpenPortalModal,
  onOpenCmsDrawer,
}: NavbarAndHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeAboutTab, setActiveAboutTab] = useState<"mission" | "history" | "architecture">(
    "mission"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveSceneIndex(0);
  }, [tenant.id]);

  useEffect(() => {
    if (tenant.hero.scenes.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % tenant.hero.scenes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [tenant.hero.scenes.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentScene = tenant.hero.scenes[activeSceneIndex] || tenant.hero.scenes[0]!;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Announcements", href: "#announcements" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Safety", href: "#safety" },
    { label: "Location", href: "#location" },
    { label: "Governance", href: "#governance" },
    { label: "Documents", href: "#documents" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* SECTION 1: Header and Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          scrolled ? "shadow-sm backdrop-blur-md" : "backdrop-blur-sm"
        }`}
        style={{
          backgroundColor: scrolled
            ? `${tenant.theme.bgPrimary}F2`
            : `${tenant.theme.bgPrimary}E6`,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Subdivision Crest Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label={`${tenant.name} Home`}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0"
              style={{
                backgroundColor: tenant.theme.accentPrimary,
                borderColor: tenant.theme.accentSecondary,
                color: "#FAF8F5",
              }}
            >
              {/* Architectural Crest SVG */}
              <svg
                viewBox="0 0 36 36"
                fill="none"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3L4 11V25L18 33L32 25V11L18 3Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeOpacity="0.85"
                />
                <path
                  d="M18 8L10 14V24H26V14L18 8Z"
                  stroke="#D4A373"
                  strokeWidth="1.5"
                />
                <path
                  d="M18 8V24M14 24V18H22V24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-none"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  {tenant.name}
                </span>
              </div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.14em] mt-1"
                style={{ color: tenant.theme.textSecondary }}
              >
                Est. {tenant.establishedYear} · {tenant.locationCityState}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav
            aria-label="Main Subdivision Navigation"
            className="hidden xl:flex items-center gap-1"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors hover:bg-black/5"
                style={{ color: tenant.theme.textPrimary }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Prominent Resident Portal CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenPortalModal("login")}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide text-white shadow-xs transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 cursor-pointer"
              style={{ backgroundColor: tenant.theme.accentPrimary }}
            >
              <Lock className="w-3.5 h-3.5 text-amber-300" />
              <span>Resident Portal</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-md border transition-colors"
              style={{
                borderColor: tenant.theme.borderSubtle,
                color: tenant.theme.textPrimary,
              }}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="xl:hidden border-t px-4 sm:px-8 py-6 space-y-5 shadow-xl"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium border transition-colors hover:bg-black/5 flex items-center justify-between"
                  style={{
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textPrimary,
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </div>

            <div
              className="pt-4 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <div className="text-xs space-y-1" style={{ color: tenant.theme.textSecondary }}>
                <p className="font-semibold" style={{ color: tenant.theme.textPrimary }}>
                  {tenant.fullAddress}
                </p>
                <p>24/7 Main Gatehouse: {tenant.gatehousePhone}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortalModal("demo");
                  }}
                  className="px-4 py-2.5 rounded-md text-xs font-semibold border cursor-pointer"
                  style={{
                    borderColor: tenant.theme.accentPrimary,
                    color: tenant.theme.accentPrimary,
                  }}
                >
                  Preview Resident Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortalModal("login");
                  }}
                  className="px-4 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  Resident Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 2: Hero / Full-Width Immersive Image Slider */}
      <section
        id="hero"
        className="relative overflow-hidden border-b h-[calc(100vh-5rem)] min-h-[620px] max-h-[920px] flex items-center justify-center"
        style={{
          backgroundColor: "#121A15",
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        {/* Full-Bleed Background Images with crossfade & Ken-Burns subtle zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {tenant.hero.scenes.map((scene, idx) => {
            const isActive = idx === activeSceneIndex;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <img
                  src={scene.imageUrl}
                  alt={scene.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Cinematic Vignette & Gradient Overlays for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Center Editorial Hero Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 py-8 text-white">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-200 bg-black/40 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{currentScene.label}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08] text-white drop-shadow-md">
              {tenant.hero.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed max-w-2xl font-light drop-shadow-sm">
              {tenant.hero.description}
            </p>

            {/* Calls to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#amenities"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Amenities & Grounds</span>
                <ChevronRight className="w-4 h-4 text-stone-950" />
              </a>

              <button
                type="button"
                onClick={() => onOpenPortalModal("login")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold text-white bg-black/50 hover:bg-black/70 border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>Resident Portal Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Prev & Next Arrows (Floating on edges) */}
        <button
          type="button"
          onClick={() =>
            setActiveSceneIndex((prev) =>
              (prev - 1 + tenant.hero.scenes.length) % tenant.hero.scenes.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
          aria-label="Previous scene"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveSceneIndex((prev) =>
              (prev + 1) % tenant.hero.scenes.length
            )
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
          aria-label="Next scene"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Slide Indicator Glass Pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15">
          <div className="flex items-center gap-1.5">
            {tenant.hero.scenes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSceneIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeSceneIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/35 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono text-stone-300 border-l border-white/20 pl-3">
            0{activeSceneIndex + 1} / 0{tenant.hero.scenes.length}
          </span>
        </div>
      </section>

      {/* SECTION 4: Community Statistics (Architectural Metric Strip) */}
      <section
        aria-label="Community Statistics"
        className="border-b transition-colors"
        style={{
          backgroundColor: tenant.theme.bgSecondary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderColor: tenant.theme.borderSubtle }}
          >
            {tenant.stats.map((stat) => (
              <div
                key={stat.id}
                className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest"
                  style={{ color: tenant.theme.textSecondary }}
                >
                  <span>{stat.label}</span>
                  <span
                    className="px-2 py-0.5 rounded border text-[10px]"
                    style={{ borderColor: tenant.theme.borderSubtle }}
                  >
                    {stat.code}
                  </span>
                </div>
                <div
                  className="font-display text-4xl sm:text-5xl font-semibold tracking-tight my-3"
                  style={{ color: tenant.theme.accentPrimary }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: About the Subdivision (Overview, History, Mission, Vision, Core Values) */}
      <section
        id="about"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-16">
          {/* Editorial Split: Narrative + Interactive Mission/History/Architecture Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                {tenant.about.eyebrow}
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                {tenant.about.headline}
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: tenant.theme.textPrimary }}
              >
                {tenant.about.leadParagraph}
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                {tenant.about.secondaryParagraph}
              </p>

              {/* Interactive Tab Switcher: Mission & Vision | Architectural Pattern Book | History Timeline */}
              <div className="pt-4">
                <div
                  className="inline-flex flex-wrap rounded-lg p-1 border gap-1"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  {[
                    { id: "mission", label: "Mission & Vision" },
                    { id: "history", label: "Subdivision History & Milestones" },
                    { id: "architecture", label: "Architectural Standards" },
                  ].map((tab) => {
                    const active = activeAboutTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() =>
                          setActiveAboutTab(tab.id as "mission" | "history" | "architecture")
                        }
                        className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          active ? "shadow-xs text-white" : "hover:bg-black/5"
                        }`}
                        style={{
                          backgroundColor: active ? tenant.theme.accentPrimary : "transparent",
                          color: active ? "#FFFFFF" : tenant.theme.textPrimary,
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Tab Panel Content */}
                <div
                  className="mt-5 p-6 sm:p-8 rounded-xl border"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  {activeAboutTab === "mission" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
                          style={{ color: tenant.theme.accentSecondary }}
                        >
                          <Compass className="w-4 h-4" />
                          <span>Our Community Mission</span>
                        </div>
                        <h3
                          className="font-display text-xl font-semibold"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Stewardship & Everyday Excellence
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
                          {tenant.about.mission}
                        </p>
                      </div>

                      <div
                        className="space-y-2 md:border-l md:pl-6"
                        style={{ borderColor: tenant.theme.borderSubtle }}
                      >
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
                          style={{ color: tenant.theme.accentSecondary }}
                        >
                          <Award className="w-4 h-4" />
                          <span>Our Long-Range Vision</span>
                        </div>
                        <h3
                          className="font-display text-xl font-semibold"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Enduring Generational Value
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
                          {tenant.about.vision}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeAboutTab === "history" && (
                    <div className="space-y-4">
                      <p className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.accentSecondary }}>
                        CHRONOLOGICAL CHARTER & DEVELOPMENT MILESTONES
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tenant.about.milestones.map((m) => (
                          <div
                            key={m.year}
                            className="p-4 rounded-lg border bg-white/70"
                            style={{ borderColor: tenant.theme.borderSubtle }}
                          >
                            <span
                              className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-semibold text-white"
                              style={{ backgroundColor: tenant.theme.accentPrimary }}
                            >
                              {m.year}
                            </span>
                            <h4
                              className="font-semibold text-sm mt-2"
                              style={{ color: tenant.theme.textPrimary }}
                            >
                              {m.title}
                            </h4>
                            <p
                              className="text-xs leading-relaxed mt-1"
                              style={{ color: tenant.theme.textSecondary }}
                            >
                              {m.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeAboutTab === "architecture" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.accentSecondary }}>
                          ARCHITECTURAL PATTERN BOOK & ECOLOGICAL COVENANTS
                        </span>
                        <a
                          href="#documents"
                          className="text-xs font-semibold underline"
                          style={{ color: tenant.theme.accentPrimary }}
                        >
                          Download Pattern Book →
                        </a>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textPrimary }}>
                        {tenant.about.architecturalNote}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {[
                          "100% Underground Fiber & Utilities",
                          "Certified Dark-Sky Street Illumination",
                          "Minimum 35% Protected Open Space",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs font-medium p-2.5 rounded border bg-white/60"
                            style={{
                              borderColor: tenant.theme.borderSubtle,
                              color: tenant.theme.textPrimary,
                            }}
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: tenant.theme.accentPrimary }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Architectural Imagery Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="rounded-xl overflow-hidden border shadow-md"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <img
                  src={tenant.about.featuredImageUrl}
                  alt={`${tenant.name} architectural streetscape`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div
                  className="p-4 flex items-center justify-between text-xs border-t"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textSecondary,
                  }}
                >
                  <span>Master-Planned Residential Enclave</span>
                  <span className="font-mono">35% Dedicated Greenbelt</span>
                </div>
              </div>

              <div
                className="p-5 rounded-xl border flex items-center gap-4"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <img
                  src={tenant.about.secondaryImageUrl}
                  alt="Community gathering terrace"
                  className="w-24 h-20 rounded-lg object-cover shrink-0 border"
                  style={{ borderColor: tenant.theme.borderSubtle }}
                />
                <div>
                  <p
                    className="text-[11px] font-mono uppercase tracking-wider"
                    style={{ color: tenant.theme.accentSecondary }}
                  >
                    Resident-Led Stewardship
                  </p>
                  <p
                    className="text-sm font-semibold mt-0.5"
                    style={{ color: tenant.theme.textPrimary }}
                  >
                    100% Funded 30-Year Capital Reserve Study
                  </p>
                  <p className="text-xs mt-1" style={{ color: tenant.theme.textSecondary }}>
                    Audited annually with full financial disclosures accessible to all homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values 4-Card Architectural Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b pb-4"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-[0.15em]"
                  style={{ color: tenant.theme.accentSecondary }}
                >
                  GUIDING PILLARS
                </p>
                <h3
                  className="font-display text-2xl sm:text-3xl font-semibold mt-1"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  Community Core Values & Charter Principles
                </h3>
              </div>
              <p className="text-xs font-mono" style={{ color: tenant.theme.textSecondary }}>
                CC&R PREAMBLE · ARTICLES I–IV
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tenant.about.coreValues.map((val) => (
                <div
                  key={val.principleCode}
                  className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded border"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.accentSecondary,
                        }}
                      >
                        {val.principleCode}
                      </span>
                      <Layers
                        className="w-4 h-4 opacity-60"
                        style={{ color: tenant.theme.accentPrimary }}
                      />
                    </div>
                    <h4
                      className="font-display text-xl font-semibold"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      {val.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {val.description}
                    </p>
                  </div>

                  <div
                    className="mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-mono"
                    style={{
                      borderColor: tenant.theme.borderSubtle,
                      color: tenant.theme.accentPrimary,
                    }}
                  >
                    <span>Protected by Covenant</span>
                    <span>✓ Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
