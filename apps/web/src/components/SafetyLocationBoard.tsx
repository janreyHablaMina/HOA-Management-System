"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Phone,
  AlertTriangle,
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
  const [activePolicyIdx, setActivePolicyIdx] = useState(0);

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
    setActivePolicyIdx(0);
  }, [tenant.id, tenant.location.mapPins]);

  const activePolicy =
    tenant.safety.policies[activePolicyIdx] || tenant.safety.policies[0]!;

  const passTypeConfig = {
    guest: {
      badge: "RESIDENT GUEST e-PASS",
      code: "VG-GST-8492",
      gate: "North Main Gatehouse (All Lanes)",
      window: "Valid Today · 6:00 AM – 11:59 PM",
      defaultGuest: "Alexander & Clara Sterling",
      vehicleNote: " Optical LPR & QR Mobile Scan Enabled",
    },
    delivery: {
      badge: "EXPRESS COURIER PASS",
      code: "VG-DLV-3109",
      gate: "North Gatehouse · Service Lane",
      window: "Single Entry · 30-Minute Dropoff Window",
      defaultGuest: "Priority Parcel / Floral Courier",
      vehicleNote: " Direct Residence Dropoff Authorized",
    },
    contractor: {
      badge: "COMMERCIAL VENDOR PASS",
      code: "VG-ARC-5920",
      gate: "North Gatehouse · Commercial Check-In",
      window: "Mon–Fri · 7:30 AM – 6:00 PM Only",
      defaultGuest: "Barton Creek Landscape & Masonry",
      vehicleNote: " Commercial Decals & Quiet Hours Enforced",
    },
  }[passType];

  const activePin =
    tenant.location.mapPins.find((p) => p.id === selectedPinId) ||
    tenant.location.mapPins[0]!;

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
          {/* Top Header & Live Telemetry Badge */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/15 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>24/7 GATEHOUSE COMMAND & MOBILE ACCESS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12] text-white">
                Seamless Gate Entry in the Palm of Your Hand.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-stone-300">
                {tenant.safety.subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 backdrop-blur-md self-start lg:self-end">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 block font-bold">
                  LIVE GATEHOUSE TELEMETRY
                </span>
                <span className="text-xs font-semibold text-white">
                  {tenant.safety.patrolStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Main 12-Col Showcase: Gatehouse Telemetry & Protocols (Left 7 Cols) | Realistic Smartphone Device Mockup (Right 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Columns: Live Gate Lanes & Interactive Protocol Switcher */}
            <div className="lg:col-span-7 space-y-8">
              {/* Live Gatehouse Entry Lanes Status */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    <span>Live Gatehouse Entry Lanes & Optical LPR</span>
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    Encrypted RFID · 99.8% Uptime
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {[
                    {
                      gateName: "North Main Gatehouse",
                      mode: "24/7 Officer Staffed",
                      lanes: "Visitor & Resident Lanes",
                      wait: "< 1 min wait",
                      status: "Open · Normal Flow",
                    },
                    {
                      gateName: "South Parkway Gate",
                      mode: "Optical LPR + QR",
                      lanes: "Residents & Pre-Registered",
                      wait: "Zero wait",
                      status: "Open · Clear",
                    },
                    {
                      gateName: "West Ridge Enclave",
                      mode: "Resident LPR Only",
                      lanes: "RFID & Plate Reader",
                      wait: "Zero wait",
                      status: "Open · Clear",
                    },
                  ].map((gate) => (
                    <div
                      key={gate.gateName}
                      className="p-4 rounded-2xl bg-white/6 border border-white/15 hover:bg-white/10 transition-all space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {gate.status}
                          </span>
                          <Car className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                        <h4 className="font-display text-base font-bold text-white leading-snug">
                          {gate.gateName}
                        </h4>
                        <p className="text-xs text-stone-300">{gate.lanes}</p>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-300">
                        <span>{gate.mode}</span>
                        <span className="text-stone-400">{gate.wait}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Streamlined Community Security Protocol Switcher */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/6 border border-white/15 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block">
                        COMMUNITY ACCESS & TRAFFIC PROTOCOLS
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                        {activePolicy.title}
                      </h3>
                    </div>

                    {/* Policy Selector Pills */}
                    <div className="inline-flex rounded-xl p-1 bg-black/40 border border-white/15 gap-1 self-start">
                      {tenant.safety.policies.map((pol, idx) => {
                        const active = idx === activePolicyIdx;
                        return (
                          <button
                            key={pol.code}
                            type="button"
                            onClick={() => setActivePolicyIdx(idx)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                              active
                                ? "bg-amber-400 text-stone-950 shadow-xs"
                                : "text-stone-300 hover:text-white"
                            }`}
                          >
                            {pol.code}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed">
                    {activePolicy.summary}
                  </p>

                  <ul className="space-y-2.5">
                    {activePolicy.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-xs sm:text-sm text-stone-200 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-stone-400">
                    Enforced 24/7 by Staffed Gatehouse & Courtesy Patrol
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenPortalModal("login")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:underline cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Open Resident Access Portal →</span>
                  </button>
                </div>
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
                        <div className="flex items-start justify-between gap-2 border-b border-stone-200 pb-2.5">
                          <div>
                            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                              {passTypeConfig.badge}
                            </span>
                            <h5 className="font-display text-base font-bold mt-1 text-stone-950 leading-tight">
                              {guestNameInput || passTypeConfig.defaultGuest}
                            </h5>
                            <p className="text-[10px] font-mono text-stone-500">
                              Pass Code: {passTypeConfig.code}
                            </p>
                          </div>

                          <div className="w-16 h-16 p-1.5 rounded-xl border border-stone-200 bg-stone-50 shrink-0 flex items-center justify-center shadow-xs">
                            <QrCode className="w-full h-full text-stone-900" />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-[11px] font-mono">
                          <div className="flex justify-between text-stone-600">
                            <span>Gate:</span>
                            <span className="font-bold text-stone-900">{passTypeConfig.gate.split("(")[0]}</span>
                          </div>
                          <div className="flex justify-between text-stone-600">
                            <span>Window:</span>
                            <span className="font-bold text-stone-900">{passTypeConfig.window}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono text-emerald-800">
                          <span>✓ Fast-Lane Optical LPR</span>
                          <span className="font-bold">ACTIVE</span>
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

          {/* Compact 4-Column Emergency & Security Direct Dispatch Bar */}
          <div className="pt-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-stone-400 block">
              24/7 EMERGENCY & SECURITY DIRECT DISPATCH LINES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tenant.safety.contacts.map((contact) => (
                <a
                  key={contact.role}
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 ${
                    contact.isEmergency
                      ? "bg-red-950/55 border-red-400/40 hover:bg-red-950/75"
                      : "bg-white/6 border-white/15 hover:bg-white/12"
                  }`}
                >
                  <div className="space-y-0.5 min-w-0">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block ${
                        contact.isEmergency ? "text-red-300 font-bold" : "text-amber-300"
                      }`}
                    >
                      {contact.availability}
                    </span>
                    <h4 className="font-semibold text-xs sm:text-sm text-white truncate">
                      {contact.role}
                    </h4>
                    <span className="font-mono text-base font-bold text-white block pt-0.5">
                      {contact.phone}
                    </span>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      contact.isEmergency
                        ? "bg-red-500/25 text-red-200"
                        : "bg-white/10 text-amber-300"
                    }`}
                  >
                    {contact.isEmergency ? (
                      <AlertTriangle className="w-5 h-5" />
                    ) : (
                      <Phone className="w-4 h-4" />
                    )}
                  </div>
                </a>
              ))}
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

          {/* Interactive Subdivision Master Map + Pin Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 8 Columns: Interactive Illustrated Subdivision Map */}
            <div
              className="lg:col-span-8 rounded-xl overflow-hidden border relative min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-5 sm:p-6"
              style={{
                backgroundColor: "#192921",
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              {/* Architectural Topographic SVG Map Layer */}
              <svg
                className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
                viewBox="0 0 800 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Topographic contour lines & greenbelt creek */}
                <path
                  d="M-50 120 C 180 90, 320 220, 540 160 C 680 120, 750 200, 860 180"
                  stroke="#689F80"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <path
                  d="M-40 340 C 190 290, 410 420, 620 310 C 720 260, 780 320, 850 290"
                  stroke="#689F80"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                {/* Sycamore Creek / Waterway */}
                <path
                  d="M 80 0 C 160 140, 210 260, 180 360 C 160 430, 240 480, 310 510"
                  stroke="#3B7A9E"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeOpacity="0.45"
                />
                {/* Main Parkway Loop */}
                <path
                  d="M 415 0 L 415 110 C 415 190, 360 230, 385 280 C 410 330, 490 360, 495 450 L 495 500"
                  stroke="#D4A373"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Enclave Side Roads */}
                <path
                  d="M 385 250 C 480 230, 560 190, 660 175"
                  stroke="#E4DFD5"
                  strokeWidth="3.5"
                  strokeOpacity="0.6"
                />
                <path
                  d="M 390 270 C 300 290, 240 320, 180 340"
                  stroke="#E4DFD5"
                  strokeWidth="3.5"
                  strokeOpacity="0.6"
                />
                {/* Subdivision Perimeter Boundary */}
                <rect
                  x="40"
                  y="30"
                  width="720"
                  height="440"
                  rx="24"
                  stroke="#D4A373"
                  strokeWidth="1.5"
                  strokeDasharray="10 6"
                  strokeOpacity="0.55"
                />
              </svg>

              {/* Top Map Legend Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="px-3.5 py-1.5 rounded-md bg-black/65 backdrop-blur-md border border-white/15 text-xs font-mono text-stone-200 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>INTERACTIVE SUBDIVISION MASTER PLAN · CLICK ANY PIN</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-emerald-950/85 border border-emerald-400/30 text-[11px] font-mono text-emerald-200">
                  Scale: 142-Acre Protected Greenbelt
                </span>
              </div>

              {/* Interactive Map Pins */}
              <div className="relative z-10 flex-1 my-4">
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
                      className={`-translate-x-1/2 -translate-y-1/2 absolute group flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer shadow-lg ${
                        isSelected
                          ? "bg-amber-400 text-stone-950 scale-110 ring-4 ring-amber-400/30 z-20"
                          : "bg-stone-900/90 text-white border border-white/25 hover:scale-105 hover:bg-stone-800 z-10"
                      }`}
                    >
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
                        {pin.name.split("&")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Selected Pin Detail Overlay */}
              <div className="relative z-10 p-4 sm:p-5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                    <span>SELECTED WAYPOINT: {activePin.category.toUpperCase()}</span>
                    <span>·</span>
                    <span>{activePin.hoursOrDistance}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">
                    {activePin.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300">
                    {activePin.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="inline-block px-3 py-1.5 rounded bg-white/10 border border-white/15 text-xs font-mono text-stone-200">
                    {activePin.addressOrZone}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Waypoint Directory & Turn-by-Turn Directions */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div
                className="p-6 rounded-xl border space-y-4"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <h3
                  className="text-xs font-mono uppercase tracking-[0.15em] font-semibold"
                  style={{ color: tenant.theme.accentPrimary }}
                >
                  SUBDIVISION WAYPOINTS ({tenant.location.mapPins.length})
                </h3>
                <div className="space-y-2">
                  {tenant.location.mapPins.map((pin, index) => {
                    const isSelected = pin.id === activePin.id;
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => setSelectedPinId(pin.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                          isSelected ? "shadow-xs" : "opacity-80 hover:opacity-100"
                        }`}
                        style={{
                          backgroundColor: isSelected
                            ? tenant.theme.bgPrimary
                            : "transparent",
                          borderColor: isSelected
                            ? tenant.theme.accentSecondary
                            : tenant.theme.borderSubtle,
                        }}
                      >
                        <div>
                          <p
                            className="text-xs font-semibold"
                            style={{ color: tenant.theme.textPrimary }}
                          >
                            0{index + 1}. {pin.name}
                          </p>
                          <p
                            className="text-[11px] font-mono mt-0.5"
                            style={{ color: tenant.theme.textSecondary }}
                          >
                            {pin.addressOrZone}
                          </p>
                        </div>
                        <MapPin
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{
                            color: isSelected
                              ? tenant.theme.accentSecondary
                              : tenant.theme.textSecondary,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Driving Directions Card */}
              <div
                className="p-6 rounded-xl border space-y-3"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold"
                  style={{ color: tenant.theme.accentSecondary }}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Arrival & Gatehouse Directions</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: tenant.theme.textPrimary }}>
                  <strong>From the North:</strong> {tenant.location.directionsFromNorth}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: tenant.theme.textPrimary }}>
                  <strong>From the South:</strong> {tenant.location.directionsFromSouth}
                </p>
                <p
                  className="text-[11px] pt-2 border-t italic"
                  style={{
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textSecondary,
                  }}
                >
                  {tenant.location.transitAndAccessNote}
                </p>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks & Proximity Matrix */}
          <div className="space-y-4">
            <h3
              className="text-xs font-mono uppercase tracking-[0.15em]"
              style={{ color: tenant.theme.textSecondary }}
            >
              SURROUNDING SCHOOLS, HEALTHCARE, SHOPPING & REGIONAL LANDMARKS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tenant.location.nearbyLandmarks.map((lm) => (
                <div
                  key={lm.name}
                  className="p-4 rounded-xl border flex items-center justify-between gap-4"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider"
                      style={{ color: tenant.theme.accentSecondary }}
                    >
                      {lm.category}
                    </span>
                    <h4
                      className="text-sm font-semibold mt-0.5"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      {lm.name}
                    </h4>
                  </div>
                  <div className="text-right shrink-0 font-mono">
                    <span
                      className="block text-sm font-bold"
                      style={{ color: tenant.theme.accentPrimary }}
                    >
                      {lm.driveTime}
                    </span>
                    <span
                      className="block text-[11px]"
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
