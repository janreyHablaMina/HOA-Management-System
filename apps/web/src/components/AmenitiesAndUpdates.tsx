"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Calendar,
  Bell,
  FileText,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  Sparkles,
  ArrowUpRight,
  Search,
  Maximize2,
  ShieldAlert,
} from "lucide-react";
import {
  HoaTenantConfig,
  AmenityItem,
  AnnouncementItem,
  CommunityEventItem,
} from "@/types/hoa";

interface AmenitiesAndUpdatesProps {
  tenant: HoaTenantConfig;
  onOpenPortalModal: (defaultTab?: "login" | "register" | "demo") => void;
}

export default function AmenitiesAndUpdates({
  tenant,
  onOpenPortalModal,
}: AmenitiesAndUpdatesProps) {
  // Section 5: Amenities state
  const [amenityCategory, setAmenityCategory] = useState<string>("All");
  const [selectedAmenity, setSelectedAmenity] = useState<AmenityItem | null>(null);

  // Section 6: Announcements state
  const [announcementCategory, setAnnouncementCategory] = useState<string>("All");
  const [announcementSearch, setAnnouncementSearch] = useState<string>("");
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<AnnouncementItem | null>(null);

  // Section 7: Events state
  const [eventCategory, setEventCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<CommunityEventItem | null>(null);
  const [rsvpSuccessId, setRsvpSuccessId] = useState<string | null>(null);

  // Section 8: Photo Gallery & Lightbox state
  const [galleryCategory, setGalleryCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered lists
  const amenityCategories = [
    "All",
    "Clubhouse & Social",
    "Aquatics",
    "Courts & Sport",
    "Parks & Trails",
    "Wellness & Youth",
  ];
  const filteredAmenities =
    amenityCategory === "All"
      ? tenant.amenities
      : tenant.amenities.filter((a) => a.category === amenityCategory);

  const announcementCategories = [
    "All",
    "Maintenance Advisory",
    "Board Notice",
    "Community Update",
    "Architectural Review",
  ];
  const filteredAnnouncements = tenant.announcements.filter((ann) => {
    const matchesCategory =
      announcementCategory === "All" || ann.category === announcementCategory;
    const matchesSearch =
      announcementSearch.trim() === "" ||
      ann.title.toLowerCase().includes(announcementSearch.toLowerCase()) ||
      ann.summary.toLowerCase().includes(announcementSearch.toLowerCase()) ||
      ann.referenceCode.toLowerCase().includes(announcementSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const eventCategories = [
    "All",
    "Social & Seasonal",
    "HOA Governance",
    "Wellness & Recreation",
    "Volunteer & Stewardship",
  ];
  const filteredEvents =
    eventCategory === "All"
      ? tenant.events
      : tenant.events.filter((e) => e.category === eventCategory);

  const galleryCategories = [
    "All",
    "Architecture & Streetscapes",
    "Clubhouse & Pools",
    "Parks & Trails",
    "Community Gatherings",
  ];
  const filteredGallery =
    galleryCategory === "All"
      ? tenant.gallery
      : tenant.gallery.filter((g) => g.category === galleryCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredGallery.length
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredGallery.length) % filteredGallery.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const handleDownloadIcs = (evt: CommunityEventItem) => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      `PRODID:-//${tenant.name}//HOA Community Events//EN`,
      "BEGIN:VEVENT",
      `SUMMARY:${evt.title} (${tenant.shortName})`,
      `DESCRIPTION:${evt.summary.replace(/\n/g, " ")}`,
      `LOCATION:${evt.location}, ${tenant.fullAddress}`,
      "DTSTART:20261114T170000Z",
      "DTEND:20261114T200000Z",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${evt.id}-calendar-invite.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* SECTION 5: Amenities and Facilities */}
      <section
        id="amenities"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgSecondary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
          {/* Header & Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                CHAPTER II · RESORT-CALIBER FACILITIES & GROUNDS
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Amenities Crafted for Recreation, Wellness & Gathering
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                Maintained exclusively for homeowners and their accompanied guests, our private parks, clubhouses, pools, and court complexes operate year-round.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {amenityCategories.map((cat) => {
                const active = amenityCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setAmenityCategory(cat)}
                    className={`px-3.5 py-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                      active ? "shadow-xs text-white" : "hover:bg-black/5"
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
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAmenities.map((amenity) => (
              <article
                key={amenity.id}
                className="rounded-xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  backgroundColor: tenant.theme.bgPrimary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div>
                  {/* Image & Status Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={amenity.imageUrl}
                      alt={amenity.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider bg-black/65 text-white backdrop-blur-md border border-white/15">
                        {amenity.category}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-md border ${
                          amenity.status === "Open Now"
                            ? "bg-emerald-950/85 text-emerald-200 border-emerald-400/30"
                            : "bg-amber-950/85 text-amber-200 border-amber-400/30"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {amenity.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-mono text-stone-200 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                        <span className="truncate">{amenity.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <h3
                      className="font-display text-2xl font-semibold leading-snug"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      {amenity.name}
                    </h3>

                    <div
                      className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono py-2 border-y"
                      style={{
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.textSecondary,
                      }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" style={{ color: tenant.theme.accentSecondary }} />
                        {amenity.hours}
                      </span>
                    </div>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {amenity.description}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {amenity.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs flex items-start gap-2"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 mt-0.5 shrink-0"
                            style={{ color: tenant.theme.accentPrimary }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div
                  className="px-6 py-4 border-t flex items-center justify-between gap-3"
                  style={{
                    backgroundColor: `${tenant.theme.bgSecondary}80`,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAmenity(amenity)}
                    className="text-xs font-semibold underline decoration-dotted hover:opacity-80 cursor-pointer"
                    style={{ color: tenant.theme.accentPrimary }}
                  >
                    Rules & Facility Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenPortalModal("login")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: tenant.theme.accentPrimary }}
                  >
                    <span>Reserve / Access</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Latest News and Announcements */}
      <section
        id="announcements"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: tenant.theme.accentSecondary }}
              >
                CHAPTER III · OFFICIAL CIVIC DISPATCH & ADVISORIES
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Latest News, Maintenance Advisories & Board Notices
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                Public operational updates, infrastructure schedules, and governance notices approved for community-wide display.
              </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search
                  className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  style={{ color: tenant.theme.textSecondary }}
                />
                <input
                  type="text"
                  value={announcementSearch}
                  onChange={(e) => setAnnouncementSearch(e.target.value)}
                  placeholder="Search notices or codes..."
                  aria-label="Search announcements"
                  className="pl-9 pr-4 py-2 rounded-md border text-xs w-full sm:w-56 focus:outline-none"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textPrimary,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Announcement Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {announcementCategories.map((cat) => {
              const active = announcementCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setAnnouncementCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                    active ? "text-white" : "hover:bg-black/5"
                  }`}
                  style={{
                    backgroundColor: active
                      ? tenant.theme.accentPrimary
                      : tenant.theme.bgSecondary,
                    borderColor: active
                      ? tenant.theme.accentPrimary
                      : tenant.theme.borderSubtle,
                    color: active ? "#FFFFFF" : tenant.theme.textPrimary,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Announcements Ledger Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredAnnouncements.map((ann) => {
              const isHighPriority = ann.priority === "Important Advisory";
              return (
                <div
                  key={ann.id}
                  className="p-6 sm:p-7 rounded-xl border flex flex-col justify-between transition-all hover:shadow-md"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: isHighPriority
                      ? tenant.theme.accentSecondary
                      : tenant.theme.borderSubtle,
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold border"
                          style={{
                            backgroundColor: tenant.theme.bgPrimary,
                            borderColor: tenant.theme.borderSubtle,
                            color: tenant.theme.accentPrimary,
                          }}
                        >
                          {ann.referenceCode}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium"
                          style={{
                            backgroundColor: isHighPriority
                              ? `${tenant.theme.accentSecondary}25`
                              : `${tenant.theme.accentPrimary}15`,
                            color: isHighPriority
                              ? tenant.theme.accentSecondary
                              : tenant.theme.accentPrimary,
                          }}
                        >
                          {ann.category}
                        </span>
                      </div>
                      <span
                        className="text-xs font-mono"
                        style={{ color: tenant.theme.textSecondary }}
                      >
                        Posted: {ann.date}
                      </span>
                    </div>

                    <h3
                      className="font-display text-2xl font-semibold leading-snug"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      {ann.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {ann.summary}
                    </p>
                  </div>

                  <div
                    className="mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs"
                    style={{ borderColor: tenant.theme.borderSubtle }}
                  >
                    <div className="font-mono" style={{ color: tenant.theme.textSecondary }}>
                      <span className="font-semibold" style={{ color: tenant.theme.textPrimary }}>
                        Effective:
                      </span>{" "}
                      {ann.effectivePeriod}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedAnnouncement(ann)}
                      className="inline-flex items-center gap-1.5 font-semibold px-3 py-1.5 rounded border transition-colors hover:bg-black/5 cursor-pointer"
                      style={{
                        borderColor: tenant.theme.accentPrimary,
                        color: tenant.theme.accentPrimary,
                      }}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Read Full Bulletin</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: Community Life and Events */}
      <section
        id="events"
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
                CHAPTER IV · NEIGHBORHOOD TRADITIONS & CIVIC LIFE
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Community Gatherings, Celebrations & Upcoming Events
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                From twilight jazz concerts and Saturday artisanal markets to trail stewardship mornings and quarterly town halls, life in {tenant.shortName} is rich with connection.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => {
                const active = eventCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setEventCategory(cat)}
                    className={`px-3.5 py-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
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
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="rounded-xl overflow-hidden border flex flex-col sm:flex-row transition-all hover:shadow-lg"
                style={{
                  backgroundColor: tenant.theme.bgPrimary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                {/* Left Image + Editorial Date Badge */}
                <div className="sm:w-52 relative shrink-0 bg-stone-900">
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 rounded-lg overflow-hidden border border-white/25 bg-black/75 backdrop-blur-md text-center px-3 py-2 text-white">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-300">
                      {evt.monthShort}
                    </span>
                    <span className="block font-display text-2xl font-bold leading-none mt-0.5">
                      {evt.dayNumeric}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                        evt.isPublicWelcome
                          ? "bg-emerald-900/90 text-emerald-200 border border-emerald-400/30"
                          : "bg-stone-900/90 text-amber-200 border border-amber-400/30"
                      }`}
                    >
                      {evt.isPublicWelcome ? "Public & Neighbors Welcome" : "Residents & Guests"}
                    </span>
                  </div>
                </div>

                {/* Right Event Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs font-mono"
                      style={{ color: tenant.theme.accentSecondary }}
                    >
                      <span>{evt.category}</span>
                      <span>{evt.time}</span>
                    </div>
                    <h3
                      className="font-display text-2xl font-semibold leading-snug"
                      style={{ color: tenant.theme.textPrimary }}
                    >
                      {evt.title}
                    </h3>
                    <p
                      className="text-xs font-medium flex items-center gap-1.5"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: tenant.theme.accentPrimary }} />
                      <span>{evt.location}</span>
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {evt.summary}
                    </p>
                  </div>

                  <div
                    className="pt-4 border-t flex flex-wrap items-center justify-between gap-2"
                    style={{ borderColor: tenant.theme.borderSubtle }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(evt)}
                      className="text-xs font-semibold underline decoration-dotted cursor-pointer"
                      style={{ color: tenant.theme.accentPrimary }}
                    >
                      View Schedule & RSVP
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDownloadIcs(evt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-colors hover:bg-black/5 cursor-pointer"
                      style={{
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.textPrimary,
                      }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Add to Calendar (.ics)</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Photo Gallery */}
      <section
        id="gallery"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
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
                CHAPTER V · VISUAL ARCHIVE & STREETSCAPES
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Subdivision Photography & Neighborhood Scenery
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                Click any photograph to open the full-resolution interactive lightbox viewer with architectural captions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => {
                const active = galleryCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setLightboxIndex(null);
                      setGalleryCategory(cat);
                    }}
                    className={`px-3.5 py-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                      active ? "text-white" : "hover:bg-black/5"
                    }`}
                    style={{
                      backgroundColor: active
                        ? tenant.theme.accentPrimary
                        : tenant.theme.bgSecondary,
                      borderColor: active
                        ? tenant.theme.accentPrimary
                        : tenant.theme.borderSubtle,
                      color: active ? "#FFFFFF" : tenant.theme.textPrimary,
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
                className="group relative rounded-xl overflow-hidden border aspect-[4/3] bg-stone-900 cursor-pointer shadow-xs hover:shadow-xl transition-all"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-black/60 text-stone-200 backdrop-blur-md border border-white/15">
                    {photo.category}
                  </span>
                  <span className="p-2 rounded-full bg-black/60 text-white border border-white/20 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-mono text-amber-300">{photo.location}</p>
                  <h3 className="font-display text-xl font-medium leading-snug mt-0.5">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {photo.photographerNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL: Amenity Details & Rules */}
      {selectedAmenity && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedAmenity(null)}
        >
          <div
            className="max-w-2xl w-full rounded-xl overflow-hidden border shadow-2xl"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-stone-900">
              <img
                src={selectedAmenity.imageUrl}
                alt={selectedAmenity.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedAmenity(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  {selectedAmenity.category} · {selectedAmenity.status}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-0.5">
                  {selectedAmenity.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono p-3.5 rounded-lg border"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div>
                  <span className="block opacity-70">OPERATING HOURS</span>
                  <span className="font-semibold">{selectedAmenity.hours}</span>
                </div>
                <div>
                  <span className="block opacity-70">CAPACITY / CONFIGURATION</span>
                  <span className="font-semibold">{selectedAmenity.capacity}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
                {selectedAmenity.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: tenant.theme.accentPrimary }}>
                  Approved Facility Etiquette & Access Guidelines
                </h4>
                <ul className="space-y-2">
                  {selectedAmenity.guidelines.map((g) => (
                    <li key={g} className="text-xs sm:text-sm flex items-start gap-2" style={{ color: tenant.theme.textPrimary }}>
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: tenant.theme.accentPrimary }} />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-4 rounded-lg border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <p style={{ color: tenant.theme.textSecondary }}>
                  <strong style={{ color: tenant.theme.textPrimary }}>Reservation Policy:</strong>{" "}
                  {selectedAmenity.reservationNote}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAmenity(null);
                    onOpenPortalModal("login");
                  }}
                  className="shrink-0 px-4 py-2 rounded-md font-semibold text-white cursor-pointer"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  Open Resident Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Full Announcement Bulletin Reader */}
      {selectedAnnouncement && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="max-w-2xl w-full rounded-xl overflow-hidden border shadow-2xl p-6 sm:p-8 space-y-5"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b pb-4"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span
                    className="px-2 py-0.5 rounded font-semibold text-white"
                    style={{ backgroundColor: tenant.theme.accentPrimary }}
                  >
                    {selectedAnnouncement.referenceCode}
                  </span>
                  <span style={{ color: tenant.theme.accentSecondary }}>
                    {selectedAnnouncement.category}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl sm:text-3xl font-semibold mt-2"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  {selectedAnnouncement.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="p-2 rounded-md border hover:bg-black/5 cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-lg border text-xs font-mono"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              <div>
                <span className="opacity-70 block">EFFECTIVE WINDOW</span>
                <span className="font-semibold">{selectedAnnouncement.effectivePeriod}</span>
              </div>
              <div>
                <span className="opacity-70 block">AFFECTED SECTORS</span>
                <span className="font-semibold">{selectedAnnouncement.affectedAreas}</span>
              </div>
            </div>

            <div className="space-y-3">
              {selectedAnnouncement.fullDetails.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-relaxed"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div
              className="pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs"
              style={{
                borderColor: tenant.theme.borderSubtle,
                color: tenant.theme.textSecondary,
              }}
            >
              <span>Issuing Office: {selectedAnnouncement.contactDepartment}</span>
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="px-4 py-2 rounded-md font-semibold text-white cursor-pointer"
                style={{ backgroundColor: tenant.theme.accentPrimary }}
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Event Details & RSVP */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="max-w-xl w-full rounded-xl overflow-hidden border shadow-2xl p-6 sm:p-8 space-y-5"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.accentSecondary }}>
                  {selectedEvent.category} · {selectedEvent.date}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-1" style={{ color: tenant.theme.textPrimary }}>
                  {selectedEvent.title}
                </h3>
                <p className="text-xs font-mono mt-1" style={{ color: tenant.theme.textSecondary }}>
                  {selectedEvent.time} · {selectedEvent.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-2 rounded-md border hover:bg-black/5 cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
              {selectedEvent.summary}
            </p>

            <div
              className="p-4 rounded-lg border space-y-2"
              style={{
                backgroundColor: tenant.theme.bgSecondary,
                borderColor: tenant.theme.borderSubtle,
              }}
            >
              <p className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: tenant.theme.accentPrimary }}>
                Event Schedule & Program
              </p>
              <ul className="space-y-1.5">
                {selectedEvent.agenda.map((item) => (
                  <li key={item} className="text-xs sm:text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: tenant.theme.accentPrimary }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {rsvpSuccessId === selectedEvent.id ? (
              <div className="p-4 rounded-lg bg-emerald-900/15 border border-emerald-600/30 text-emerald-900 text-xs sm:text-sm font-medium flex items-center justify-between">
                <span>✓ Your household interest has been logged with the {selectedEvent.organizer}.</span>
                <button
                  type="button"
                  onClick={() => handleDownloadIcs(selectedEvent)}
                  className="underline font-semibold ml-3 cursor-pointer"
                >
                  Download .ICS
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleDownloadIcs(selectedEvent)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border text-xs font-semibold cursor-pointer"
                  style={{
                    borderColor: tenant.theme.borderSubtle,
                    color: tenant.theme.textPrimary,
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Calendar (.ics)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRsvpSuccessId(selectedEvent.id)}
                  className="px-5 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  Register Household Attendance
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: Interactive Full-Screen Photo Gallery Lightbox */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                {filteredGallery[lightboxIndex].category}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              aria-label="Close gallery lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image + Prev/Next Controls */}
          <div
            className="relative max-w-5xl w-full mx-auto my-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                )
              }
              className="absolute left-2 sm:-left-12 z-10 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="rounded-xl overflow-hidden border border-white/20 bg-stone-950 shadow-2xl max-h-[75vh] flex flex-col">
              <img
                src={filteredGallery[lightboxIndex].imageUrl}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />
              <div className="p-5 bg-stone-900/95 text-white border-t border-white/10">
                <p className="text-xs font-mono text-amber-300">
                  {filteredGallery[lightboxIndex].location}
                </p>
                <h3 className="font-display text-2xl font-medium mt-0.5">
                  {filteredGallery[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {filteredGallery[lightboxIndex].photographerNote}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
              }
              className="absolute right-2 sm:-right-12 z-10 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="max-w-4xl w-full mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredGallery.map((thumb, idx) => (
              <button
                key={thumb.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`h-14 w-20 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  idx === lightboxIndex
                    ? "border-amber-400 scale-105"
                    : "border-transparent opacity-50 hover:opacity-85"
                }`}
              >
                <img
                  src={thumb.imageUrl}
                  alt={thumb.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
