"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Users,
  Quote,
  Compass,
  Clock,
  Lock,
  ChevronLeft,
  ChevronRight,
  QrCode,
  Car,
  Radio,
  Sparkles,
  Smartphone,
  Share2,
  Wifi,
} from "lucide-react";
import { HoaTenantConfig } from "@/types/hoa";

interface SafetyLocationBoardProps {
  tenant: HoaTenantConfig;
  onOpenPortalModal: (defaultTab?: "login" | "register" | "demo") => void;
}

export default function SafetyLocationBoard({
  tenant,
  onOpenPortalModal,
}: SafetyLocationBoardProps) {
  // Section 9: Interactive Gatehouse & Visitor Pass Preview state
  const [passType, setPassType] = useState<"guest" | "delivery" | "contractor">("guest");
  const [guestNameInput, setGuestNameInput] = useState("Alexander & Clara Sterling");

  // Section 10: Interactive Map Pin state
  const [selectedPinId, setSelectedPinId] = useState<string>(
    tenant.location.mapPins[0]?.id || ""
  );
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Section 11: Board / Management role filter
  const [leadershipFilter, setLeadershipFilter] = useState<
    "All" | "Board of Directors" | "Management Team"
  >("All");

  // Section 12: Featured testimonial carousel index
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    setSelectedPinId(tenant.location.mapPins[0]?.id || "");
    setActiveTestimonialIdx(0);
  }, [tenant.id, tenant.location.mapPins]);

  const passTypeConfig = {
    guest: {
      badge: "Resident Guest Pass",
      code: "VG-GST-8492",
      gateShort: "North Main Gate",
      windowShort: "Today · Until 11:59 PM",
      defaultGuest: "Alexander & Clara Sterling",
    },
    delivery: {
      badge: "Express Courier Pass",
      code: "VG-DLV-3109",
      gateShort: "Service Entry Lane",
      windowShort: "Single Entry · 30 Min",
      defaultGuest: "Priority Parcel / Courier",
    },
    contractor: {
      badge: "Commercial Vendor Pass",
      code: "VG-ARC-5920",
      gateShort: "Commercial Gate",
      windowShort: "Mon–Fri · 7:30 AM–6 PM",
      defaultGuest: "Barton Creek Masonry",
    },
  }[passType];

  const WAYPOINT_MEDIA: Record<
    string,
    {
      image: string;
      tagline: string;
      features: string[];
    }
  > = {
    "pin-main-gate": {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      tagline: "Primary 24/7 Security & Visitor Welcome Hub",
      features: ["Staffed Officer Desk", "Visitor QR Fast-Lane", "Package Concierge"],
    },
    "pin-clubhouse": {
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      tagline: "Resort Aquatics & Timber Conservatory",
      features: ["25m Geothermal Pool", "Resident Lounge", "Fitness Conservatory"],
    },
    "pin-courts": {
      image:
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85",
      tagline: "Championship Racquet & Sports Complex",
      features: ["4 USTA Courts", "6 Pickleball Courts", "Covered Basketball"],
    },
    "pin-trailhead": {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      tagline: "142-Acre Protected Creek & Cascades",
      features: ["14 Miles of Trails", "Wildflower Meadows", "Limestone Bluffs"],
    },
    "pin-south-gate": {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      tagline: "Automated Resident LPR & RFID Boulevard",
      features: ["High-Speed LPR", "Encrypted Transponder", "Zero-Wait Clearance"],
    },
  };

  const getWaypointAsset = (pinId: string, category: string) => {
    if (WAYPOINT_MEDIA[pinId]) return WAYPOINT_MEDIA[pinId];
    if (category.toLowerCase().includes("gate")) {
      return {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        tagline: "Secure Monitored Entrance & RFID Clearance",
        features: ["Optical ANPR", "Resident Transponder", "24/7 Monitored"],
      };
    }
    if (category.toLowerCase().includes("club") || category.toLowerCase().includes("pool")) {
      return {
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
        tagline: "Community Gathering & Aquatics Center",
        features: ["Resort Pool", "Social Terrace", "Wellness Center"],
      };
    }
    if (category.toLowerCase().includes("court") || category.toLowerCase().includes("sport")) {
      return {
        image:
          "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85",
        tagline: "Lighted Championship Sports Courts",
        features: ["Lighted Courts", "Online Booking", "Equipment Locker"],
      };
    }
    return {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      tagline: "Scenic Community Nature Trail & Greenbelt",
      features: ["Crushed Granite Trails", "Rest Benches", "Dog Stations"],
    };
  };

  const activePin =
    tenant.location.mapPins.find((p) => p.id === selectedPinId) ||
    tenant.location.mapPins[0]!;

  const activePinIndex = Math.max(
    0,
    tenant.location.mapPins.findIndex((p) => p.id === activePin.id)
  );

  const activeAsset = getWaypointAsset(activePin.id, activePin.category);

  const filteredMembers =
    leadershipFilter === "All"
      ? tenant.boardAndManagement.members
      : tenant.boardAndManagement.members.filter(
          (m) => m.roleType === leadershipFilter
        );

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(tenant.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <>
      {/* SECTION 9: Safety, Gatehouse Command & Mobile App Mockup Showcase */}
      <section
        id="safety"
        className="py-20 lg:py-28 border-b text-stone-100 relative overflow-hidden"
        style={{
          backgroundColor: "#0d1612",
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        {/* Luxury Gatehouse Architectural Photo Background with Multi-Layer Cinematic Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
            alt="Veridian Grove Gatehouse Boulevard"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1612] via-[#0d1612]/95 to-[#0d1612]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1612] via-transparent to-[#0d1612]/70" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12 relative z-10">
          {/* Top Header */}
          <div className="border-b border-white/15 pb-8 text-center">
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>24/7 GATEHOUSE COMMAND & MOBILE ACCESS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12] text-white">
                Seamless Gate Entry in the Palm of Your Hand.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-stone-300 max-w-2xl mx-auto">
                {tenant.safety.subtitle}
              </p>
            </div>
          </div>

          {/* Main 12-Col Showcase: Gatehouse Telemetry & Protocols (Left 7 Cols) | Realistic Smartphone Device Mockup (Right 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Columns: Minimalist 3-Step Clearance Flow */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-amber-300 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  EFFORTLESS GUEST CLEARANCE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Gate clearance in 3 seamless steps.
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                  Skip guard calls and physical gate passes. Pre-authorize visitors, couriers, and contractors in seconds directly through the resident portal.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    step: "01",
                    icon: Smartphone,
                    title: "Generate in 10 Seconds",
                    description:
                      "Choose pass type (Guest, Courier, or Vendor), specify entry date or hours, and add optional vehicle plates.",
                  },
                  {
                    step: "02",
                    icon: Share2,
                    title: "One-Tap Instant Share",
                    description:
                      "Send encrypted dynamic QR pass straight to your guest via SMS or WhatsApp. Easily saved to Apple Wallet or Google Pay.",
                  },
                  {
                    step: "03",
                    icon: Car,
                    title: "Fast-Lane Optical Entry",
                    description:
                      "Visitors scan the digital pass at the kiosk or Optical ANPR cameras verify license plates automatically with zero queue.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 sm:p-5 rounded-2xl bg-white/6 border border-white/10 hover:border-amber-400/30 hover:bg-white/10 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="font-display text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Realistic 3D Titanium Smartphone Device Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[360px] relative">
                {/* Ambient Soft Glow Behind Phone */}
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-[60px] blur-2xl pointer-events-none" />

                {/* Titanium Phone Chassis */}
                <div className="relative rounded-[50px] border-[9px] border-stone-800 bg-stone-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-3 ring-1 ring-white/20 overflow-hidden text-stone-900">
                  {/* Phone Screen Container */}
                  <div className="rounded-[40px] bg-stone-900 overflow-hidden text-white flex flex-col justify-between min-h-[580px] p-4 relative">
                    {/* Dynamic Island / Notch */}
                    <div className="w-24 h-5 bg-black rounded-full mx-auto flex items-center justify-end px-2 gap-1.5 mb-2 shadow-inner">
                      <span className="w-2 h-2 rounded-full bg-stone-900" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>

                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-[11px] font-mono px-2 text-stone-300 pb-2 border-b border-white/10">
                      <span className="font-bold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <Wifi className="w-3 h-3" />
                        <span className="text-[10px] font-bold">5G</span>
                        <div className="w-4 h-2 border border-current rounded-xs p-0.5 flex items-center">
                          <div className="w-full h-full bg-emerald-400" />
                        </div>
                      </div>
                    </div>

                    {/* In-App Header */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
                            style={{ backgroundColor: tenant.theme.accentPrimary }}
                          >
                            VG
                          </div>
                          <div>
                            <span className="text-xs font-bold block leading-none">
                              {tenant.shortName} Access
                            </span>
                            <span className="text-[9px] font-mono text-emerald-400">
                              ● Gatehouse Connected
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-stone-300">
                          Res #408
                        </span>
                      </div>

                      {/* In-App Pass Type Selector */}
                      <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/60 border border-white/10 text-[10px] font-semibold">
                        {[
                          { id: "guest", label: "Guest" },
                          { id: "delivery", label: "Delivery" },
                          { id: "contractor", label: "Vendor" },
                        ].map((t) => {
                          const active = passType === t.id;
                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                setPassType(t.id as "guest" | "delivery" | "contractor");
                                setGuestNameInput(
                                  t.id === "guest"
                                    ? "Alexander & Clara Sterling"
                                    : t.id === "delivery"
                                    ? "Priority Parcel / Floral Courier"
                                    : "Barton Creek Landscape & Masonry"
                                );
                              }}
                              className={`py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                                active
                                  ? "bg-white text-stone-950 font-bold shadow-xs"
                                  : "text-stone-400 hover:text-white"
                              }`}
                            >
                              {t.label}
                            </button>
                          );
                        })}
                      </div>

                      {/* Digital Boarding Pass Ticket Inside Phone */}
                      <div className="p-4 rounded-2xl bg-white text-stone-900 shadow-xl space-y-3 relative overflow-hidden">
                        <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-2.5">
                          <div className="space-y-1">
                            <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {passTypeConfig.badge}
                            </span>
                            <h5 className="font-display text-base font-bold text-stone-950 leading-tight">
                              {guestNameInput || passTypeConfig.defaultGuest}
                            </h5>
                            <p className="text-[10px] font-mono text-stone-500">
                              Pass Code: {passTypeConfig.code}
                            </p>
                          </div>

                          <div className="w-16 h-16 p-1.5 rounded-xl border border-stone-200/80 bg-stone-50 shrink-0 flex items-center justify-center shadow-xs">
                            <QrCode className="w-full h-full text-stone-900" />
                          </div>
                        </div>

                        {/* Clean 2-Column Info Cards */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-0.5">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-stone-500 block font-semibold">
                              Assigned Gate
                            </span>
                            <span className="text-xs font-bold text-stone-900 block truncate">
                              {passTypeConfig.gateShort}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-0.5">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-stone-500 block font-semibold">
                              Access Window
                            </span>
                            <span className="text-xs font-bold text-stone-900 block truncate">
                              {passTypeConfig.windowShort}
                            </span>
                          </div>
                        </div>

                        {/* Ticket Footer / Telemetry Verification */}
                        <div className="pt-2 border-t border-dashed border-stone-200 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Optical ANPR Active
                          </span>
                          <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider">
                            Lane 1 & 2
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Phone App Actions */}
                    <div className="space-y-2 pt-3">
                      <button
                        type="button"
                        onClick={() => onOpenPortalModal("login")}
                        className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Send QR Pass Link to Guest</span>
                      </button>

                      <p className="text-[10px] font-mono text-center text-stone-400">
                        Compatible with Apple Wallet & Google Pay
                      </p>
                    </div>

                    {/* Phone Home Bar */}
                    <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Location and Directions (Interactive Subdivision Map & Landmarks) */}
      <section
        id="location"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-14">
          {/* Header & Address Copy Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                CHAPTER VII · GEOGRAPHY, MASTER PLAN & DIRECTIONS
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                {tenant.location.headline}
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                {tenant.location.subtitle}
              </p>
            </div>

            {/* Official Address & Action Buttons */}
            <div
              className="p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-4"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              <div className="space-y-1">
                <p
                  className="text-[11px] font-mono uppercase tracking-wider"
                  style={{ color: tenant.theme.accentSecondary }}
                >
                  MAIN GATEHOUSE & VISITORS ADDRESS
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  {tenant.fullAddress}
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: tenant.theme.textSecondary }}
                >
                  GPS: {tenant.gpsCoordinates}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border text-xs font-semibold transition-colors hover:bg-black/5 cursor-pointer"
                  style={{
                    backgroundColor: tenant.theme.bgPrimary,
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textPrimary,
                  }}
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    tenant.fullAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Subdivision Master Plan + Photo Inspector Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Columns: Architectural Master Plan Canvas */}
            <div
              className="lg:col-span-7 rounded-2xl overflow-hidden border relative min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-5 sm:p-6 shadow-2xl"
              style={{
                backgroundColor: "#0b1710",
                borderColor: "rgba(255,255,255,0.15)",
              }}
            >
              {/* Topographic Background Texture & Radial Glows */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Architectural Topographic & Waterway SVG Layer */}
              <svg
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                viewBox="0 0 800 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Protected Nature Preserve Zones */}
                <path
                  d="M 20 80 C 120 40, 200 120, 260 220 C 310 300, 240 420, 150 480 C 60 520, 10 420, 20 80 Z"
                  fill="#142c1f"
                  opacity="0.6"
                />
                <path
                  d="M 520 40 C 680 20, 780 100, 790 260 C 800 400, 680 480, 540 470 C 480 340, 500 160, 520 40 Z"
                  fill="#142c1f"
                  opacity="0.5"
                />

                {/* Topographic Contour Lines */}
                <path
                  d="M -30 150 C 140 110, 280 240, 480 180 C 620 140, 720 220, 840 200"
                  stroke="#4e7f63"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  opacity="0.4"
                />
                <path
                  d="M -20 360 C 180 310, 390 440, 600 330 C 700 280, 780 340, 850 310"
                  stroke="#4e7f63"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  opacity="0.4"
                />

                {/* Sycamore Creek Riverway */}
                <path
                  d="M 120 0 C 190 140, 240 240, 200 350 C 170 430, 250 480, 320 520"
                  stroke="#38BDF8"
                  strokeWidth="16"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M 120 0 C 190 140, 240 240, 200 350 C 170 430, 250 480, 320 520"
                  stroke="#7DD3FC"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* Main Veridian Parkway Boulevard Loops */}
                <path
                  d="M 415 0 L 415 110 C 415 190, 350 230, 380 280 C 410 330, 490 360, 495 450 L 495 520"
                  stroke="#D4A373"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                {/* Boulevard Centerline */}
                <path
                  d="M 415 0 L 415 110 C 415 190, 350 230, 380 280 C 410 330, 490 360, 495 450 L 495 520"
                  stroke="#0b1710"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Residential Enclave Roads & Cul-de-Sacs */}
                <path
                  d="M 380 260 C 480 240, 560 200, 670 185"
                  stroke="#F5EBE0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <circle cx="670" cy="185" r="14" stroke="#F5EBE0" strokeWidth="3" fill="#142c1f" opacity="0.6" />

                <path
                  d="M 390 290 C 300 310, 240 330, 180 350"
                  stroke="#F5EBE0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <circle cx="180" cy="350" r="14" stroke="#F5EBE0" strokeWidth="3" fill="#142c1f" opacity="0.6" />

                <path
                  d="M 440 380 C 530 400, 600 420, 660 390"
                  stroke="#F5EBE0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <circle cx="660" cy="390" r="14" stroke="#F5EBE0" strokeWidth="3" fill="#142c1f" opacity="0.6" />

                {/* Master Plan Boundary */}
                <rect
                  x="30"
                  y="20"
                  width="740"
                  height="480"
                  rx="28"
                  stroke="#D4A373"
                  strokeWidth="1.5"
                  strokeDasharray="12 8"
                  opacity="0.4"
                />

                {/* District Text Labels */}
                <text x="50" y="270" fill="#689F80" fontSize="10" fontFamily="monospace" letterSpacing="0.2em" opacity="0.7">
                  SYCAMORE CREEK PRESERVE
                </text>
                <text x="460" y="140" fill="#D4A373" fontSize="10" fontFamily="monospace" letterSpacing="0.2em" opacity="0.7">
                  CANOPY RIDGE ENCLAVE
                </text>
                <text x="360" y="490" fill="#D4A373" fontSize="10" fontFamily="monospace" letterSpacing="0.2em" opacity="0.7">
                  SOUTH MEADOW TRACE
                </text>
                <text x="320" y="220" fill="#F5EBE0" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.15em" opacity="0.8">
                  CENTRAL COMMONS
                </text>
              </svg>

              {/* Top Map Legend & Compass Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-stone-200 flex items-center gap-2 shadow-lg">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">INTERACTIVE SUBDIVISION MASTER PLAN</span>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-950/90 border border-emerald-400/40 text-[11px] font-mono text-emerald-200 shadow-md">
                  142-Acre Protected Preserve · Scale 1:2500
                </span>
              </div>

              {/* Interactive Waypoint Pins Layer */}
              <div className="relative z-10 flex-1 my-6 min-h-[220px]">
                {tenant.location.mapPins.map((pin, idx) => {
                  const isSelected = pin.id === activePin.id;
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => setSelectedPinId(pin.id)}
                      style={{
                        left: `${pin.xPercent}%`,
                        top: `${pin.yPercent}%`,
                      }}
                      className={`-translate-x-1/2 -translate-y-1/2 absolute group flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer shadow-xl ${
                        isSelected
                          ? "bg-amber-400 text-stone-950 scale-110 ring-4 ring-amber-400/40 z-30"
                          : "bg-stone-900/90 text-white border border-white/25 hover:scale-105 hover:bg-stone-800 z-10"
                      }`}
                    >
                      {/* Active Beacon Pulse Ripple */}
                      {isSelected && (
                        <span className="absolute -inset-2.5 rounded-full bg-amber-400/50 animate-ping pointer-events-none" />
                      )}
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isSelected
                            ? "bg-stone-950 text-amber-300"
                            : "bg-amber-500/25 text-amber-300"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="hidden sm:inline whitespace-nowrap">
                        {pin.name.split(" ")[0]} {pin.name.split(" ")[1] || ""}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick-Jump Selector Strip */}
              <div className="relative z-10 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 px-2 shrink-0 font-semibold">
                  WAYPOINTS:
                </span>
                {tenant.location.mapPins.map((pin, idx) => {
                  const isSelected = pin.id === activePin.id;
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => setSelectedPinId(pin.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? "bg-amber-400 text-stone-950 shadow-xs font-bold"
                          : "text-stone-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      0{idx + 1}. {pin.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns: Waypoint Photo & Amenities Inspector */}
            <div
              className="lg:col-span-5 rounded-2xl border overflow-hidden flex flex-col justify-between shadow-2xl transition-all"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              {/* Waypoint Photo Header Window */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden group bg-stone-950">
                <img
                  src={activeAsset.image}
                  alt={activePin.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
                    {activePin.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-400/30 text-[10px] font-mono font-semibold text-emerald-200">
                    ● {activePin.hoursOrDistance}
                  </span>
                </div>

                {/* Bottom Waypoint Title & Index Pill */}
                <div className="absolute bottom-4 inset-x-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-bold font-mono flex items-center justify-center">
                      0{activePinIndex + 1}
                    </span>
                    <span className="text-[11px] font-mono text-stone-300">
                      Waypoint Identification
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {activePin.name}
                  </h3>
                </div>
              </div>

              {/* Waypoint Details Panel */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p
                      className="text-xs font-mono uppercase tracking-wider font-semibold"
                      style={{ color: tenant.theme.accentSecondary }}
                    >
                      {activeAsset.tagline}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {activePin.description}
                    </p>
                  </div>

                  {/* Address Pill */}
                  <div
                    className="p-3 rounded-xl border flex items-center gap-2.5 text-xs font-mono"
                    style={{
                      backgroundColor: tenant.theme.bgPrimary,
                      borderColor: tenant.theme.borderSubtle,
                      color: tenant.theme.textPrimary,
                    }}
                  >
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{activePin.addressOrZone}</span>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {activeAsset.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-2.5 py-1 rounded-md border text-[11px] font-medium"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.textPrimary,
                        }}
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Google Maps External Direction Button */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    activePin.name + " " + tenant.fullAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-xs text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions to {activePin.name.split(" ")[0]} →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Underneath: Arrival Guidelines & Regional Landmarks Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 Columns: Arrival Guidelines & Gatehouse Directions */}
            <div
              className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border space-y-4 shadow-sm"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              <div
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] font-bold"
                style={{ color: tenant.theme.accentSecondary }}
              >
                <Navigation className="w-4 h-4" />
                <span>GATEHOUSE ARRIVAL & TRANSIT GUIDELINES</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div
                  className="p-3.5 rounded-xl border space-y-1"
                  style={{
                    backgroundColor: tenant.theme.bgPrimary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <span className="font-bold font-mono text-[11px] uppercase tracking-wider text-amber-500 block">
                    From the North (Loop 360 / Capital of Texas Hwy):
                  </span>
                  <p style={{ color: tenant.theme.textPrimary }} className="leading-relaxed">
                    {tenant.location.directionsFromNorth}
                  </p>
                </div>

                <div
                  className="p-3.5 rounded-xl border space-y-1"
                  style={{
                    backgroundColor: tenant.theme.bgPrimary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <span className="font-bold font-mono text-[11px] uppercase tracking-wider text-amber-500 block">
                    From the South (Mopac Expressway / Highway 290):
                  </span>
                  <p style={{ color: tenant.theme.textPrimary }} className="leading-relaxed">
                    {tenant.location.directionsFromSouth}
                  </p>
                </div>
              </div>

              <p
                className="text-xs pt-2 border-t italic leading-relaxed"
                style={{
                  borderColor: tenant.theme.borderSubtle,
                  color: tenant.theme.textSecondary,
                }}
              >
                ℹ {tenant.location.transitAndAccessNote}
              </p>
            </div>

            {/* Right 6 Columns: Surrounding Regional Landmarks Matrix */}
            <div
              className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border space-y-4 shadow-sm"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              <div
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] font-bold"
                style={{ color: tenant.theme.accentSecondary }}
              >
                <MapPin className="w-4 h-4" />
                <span>SURROUNDING SCHOOLS, AIRPORT & REGIONAL COMMUTES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tenant.location.nearbyLandmarks.map((lm) => (
                  <div
                    key={lm.name}
                    className="p-3 rounded-xl border flex items-center justify-between gap-3"
                    style={{
                      backgroundColor: tenant.theme.bgPrimary,
                      borderColor: tenant.theme.borderSubtle,
                    }}
                  >
                    <div className="min-w-0">
                      <span
                        className="text-[9px] font-mono uppercase tracking-wider block font-bold"
                        style={{ color: tenant.theme.accentSecondary }}
                      >
                        {lm.category}
                      </span>
                      <h4
                        className="text-xs font-semibold truncate mt-0.5"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        {lm.name}
                      </h4>
                    </div>
                    <div className="text-right shrink-0 font-mono">
                      <span
                        className="block text-xs font-bold"
                        style={{ color: tenant.theme.accentPrimary }}
                      >
                        {lm.driveTime}
                      </span>
                      <span
                        className="block text-[10px]"
                        style={{ color: tenant.theme.textSecondary }}
                      >
                        {lm.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: HOA Board and Management */}
      <section
        id="governance"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgSecondary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                CHAPTER VIII · CIVIC LEADERSHIP & ON-SITE MANAGEMENT
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                HOA Board of Directors & Executive Management Team
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                {tenant.boardAndManagement.governanceStatement}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {(["All", "Board of Directors", "Management Team"] as const).map(
                (role) => {
                  const active = leadershipFilter === role;
                  return (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setLeadershipFilter(role)}
                      className={`px-4 py-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                        active ? "text-white" : "hover:bg-black/5"
                      }`}
                      style={{
                        backgroundColor: active
                          ? tenant.theme.accentPrimary
                          : tenant.theme.bgPrimary,
                        borderColor: active
                          ? tenant.theme.accentPrimary
                          : tenant.theme.borderSubtle,
                        color: active ? "#FFFFFF" : tenant.theme.textPrimary,
                      }}
                    >
                      {role === "All" ? "All Leadership" : role}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Open Meeting Schedule Banner */}
          <div
            className="p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
          >
            <div className="flex items-start sm:items-center gap-3">
              <Clock
                className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0"
                style={{ color: tenant.theme.accentSecondary }}
              />
              <p className="text-xs sm:text-sm" style={{ color: tenant.theme.textPrimary }}>
                <strong>Open Governance Policy:</strong>{" "}
                {tenant.boardAndManagement.meetingSchedule}
              </p>
            </div>
            <span
              className="text-xs font-mono shrink-0 px-3 py-1 rounded border"
              style={{
                borderColor: tenant.theme.borderSubtle,
                color: tenant.theme.accentPrimary,
              }}
            >
              Next Session: {tenant.nextBoardMeeting.split("·")[0]}
            </span>
          </div>

          {/* Board & Management Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl overflow-hidden border flex flex-col justify-between transition-all hover:shadow-md"
                style={{
                  backgroundColor: tenant.theme.bgPrimary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 shrink-0"
                      style={{ borderColor: tenant.theme.accentSecondary }}
                    />
                    <div>
                      <span
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider"
                        style={{
                          backgroundColor: tenant.theme.bgSecondary,
                          color: tenant.theme.accentSecondary,
                        }}
                      >
                        {member.roleType}
                      </span>
                      <h3
                        className="font-display text-xl font-semibold mt-0.5"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: tenant.theme.accentPrimary }}
                      >
                        {member.position}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-[11px] font-mono py-1.5 border-y"
                    style={{
                      borderColor: tenant.theme.borderSubtle,
                      color: tenant.theme.textSecondary,
                    }}
                  >
                    {member.termOrDepartment}
                  </p>

                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: tenant.theme.textSecondary }}
                  >
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-0.5 rounded text-[11px] border"
                        style={{
                          backgroundColor: tenant.theme.bgSecondary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.textPrimary,
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="px-6 py-3.5 border-t flex items-center justify-between text-xs"
                  style={{
                    backgroundColor: `${tenant.theme.bgSecondary}66`,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <span style={{ color: tenant.theme.textSecondary }}>
                    Official Public Desk:
                  </span>
                  <a
                    href={`mailto:${member.publicEmail}`}
                    className="inline-flex items-center gap-1.5 font-mono font-medium hover:underline"
                    style={{ color: tenant.theme.accentPrimary }}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{member.publicEmail}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Resident Testimonials */}
      <section
        id="testimonials"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                CHAPTER IX · HOMEOWNER VOICES & NEIGHBORHOOD PERSPECTIVES
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Why Families Love Calling {tenant.shortName} Home
              </h2>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx(
                    (activeTestimonialIdx - 1 + tenant.testimonials.length) %
                      tenant.testimonials.length
                  )
                }
                className="p-2.5 rounded-md border hover:bg-black/5 cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2" style={{ color: tenant.theme.textSecondary }}>
                0{activeTestimonialIdx + 1} / 0{tenant.testimonials.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx(
                    (activeTestimonialIdx + 1) % tenant.testimonials.length
                  )
                }
                className="p-2.5 rounded-md border hover:bg-black/5 cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3-Column Homeowner Testimonial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tenant.testimonials.map((item, idx) => {
              const isHighlighted = idx === activeTestimonialIdx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`p-7 rounded-xl border flex flex-col justify-between transition-all cursor-pointer ${
                    isHighlighted ? "shadow-md -translate-y-1" : "opacity-85 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: isHighlighted
                      ? tenant.theme.accentSecondary
                      : tenant.theme.borderSubtle,
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold border"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.accentPrimary,
                        }}
                      >
                        {item.highlightTag}
                      </span>
                      <Quote
                        className="w-6 h-6 opacity-35"
                        style={{ color: tenant.theme.accentSecondary }}
                      />
                    </div>

                    <p
                      className="font-display text-xl sm:text-2xl italic leading-relaxed"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      “{item.quote}”
                    </p>
                  </div>

                  <div
                    className="pt-5 mt-6 border-t flex items-center gap-3.5"
                    style={{ borderColor: tenant.theme.borderSubtle }}
                  >
                    <img
                      src={item.avatarUrl}
                      alt={item.residentName}
                      className="w-12 h-12 rounded-full object-cover border"
                      style={{ borderColor: tenant.theme.accentSecondary }}
                    />
                    <div>
                      <h3
                        className="text-sm font-semibold capitalize"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        {item.residentName}
                      </h3>
                      <p
                        className="text-xs font-mono"
                        style={{ color: tenant.theme.textSecondary }}
                      >
                        {item.enclave} · {item.residentSince}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
