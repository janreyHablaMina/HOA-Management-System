"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Lock,
  ShieldCheck,
  ArrowUpRight,
  X,
  CreditCard,
  QrCode,
  FileCheck,
  MessageSquare,
  Building2,
} from "lucide-react";
import { HoaTenantConfig, CommunityDocument } from "@/types/hoa";

interface DocsFaqContactFooterProps {
  tenant: HoaTenantConfig;
  onOpenPortalModal: (defaultTab?: "login" | "register" | "demo") => void;
  onOpenCmsDrawer: () => void;
}

export default function DocsFaqContactFooter({
  tenant,
  onOpenPortalModal,
  onOpenCmsDrawer,
}: DocsFaqContactFooterProps) {
  // Section 13: Documents state
  const [docCategory, setDocCategory] = useState<string>("All");
  const [docSearch, setDocSearch] = useState<string>("");
  const [previewDoc, setPreviewDoc] = useState<CommunityDocument | null>(null);

  // Section 14: FAQ Accordion state
  const [faqCategory, setFaqCategory] = useState<string>("All");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    tenant.faqs[0]?.id || "faq-01",
    tenant.faqs[1]?.id || "faq-02",
  ]);

  // Section 15: Contact Inquiry Form state
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    lotOrRole: "Current Homeowner",
    topic: "General Community Inquiry",
    message: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // Section 17: Legal Modals (Privacy Policy / Terms of Use)
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const docCategories = [
    "All",
    "Governing Documents",
    "Architectural Guidelines",
    "Policies & Rules",
    "Forms & Disclosures",
  ];

  const filteredDocs = tenant.documents.filter((doc) => {
    const matchesCat = docCategory === "All" || doc.category === docCategory;
    const matchesSearch =
      docSearch.trim() === "" ||
      doc.title.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.code.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.summary.toLowerCase().includes(docSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const faqCategories = [
    "All",
    "General & Office",
    "Assessments & Dues",
    "Amenities & Access",
    "Architectural (ARC)",
    "Safety & Visitors",
  ];

  const filteredFaqs =
    faqCategory === "All"
      ? tenant.faqs
      : tenant.faqs.filter((f) => f.category === faqCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDownloadDocument = (doc: CommunityDocument) => {
    const lines = [
      "====================================================================",
      `${tenant.name.toUpperCase()} — OFFICIAL PUBLIC DOCUMENT SUMMARY`,
      "====================================================================",
      `Document Code : ${doc.code}`,
      `Title         : ${doc.title}`,
      `Category      : ${doc.category}`,
      `Version       : ${doc.version}`,
      `Last Updated  : ${doc.updatedDate}`,
      ` HOA Office   : ${tenant.fullAddress} | ${tenant.officePhone}`,
      "--------------------------------------------------------------------",
      "EXECUTIVE SUMMARY:",
      doc.summary,
      "",
      "KEY RECORDED CLAUSES & PUBLIC EXTRACTS:",
      ...doc.keySections.flatMap((s) => [
        `\n[${s.heading}]`,
        s.content,
      ]),
      "",
      "--------------------------------------------------------------------",
      "NOTICE: This public document extract is approved for general distribution.",
      "Signed archival records, line-item budgets, and lot-specific records are",
      "housed inside the encrypted Resident Portal.",
      "====================================================================",
    ].join("\r\n");

    const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.code}-${tenant.slug}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError("Please complete your name, email address, and inquiry message.");
      return;
    }
    setFormError(null);
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setSubmittedTicket(`HOA-2026-${randomNum}`);
  };

  return (
    <>
      {/* SECTION 13: Community Guidelines and Documents */}
      <section
        id="documents"
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
                CHAPTER X · PUBLIC COVENANTS, GUIDELINES & ARCHIVE
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Community Guidelines, Bylaws & Downloadable Documents
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                Access approved public governing charters, architectural pattern books, community rules, and buyer resale disclosure guides.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50"
                style={{ color: tenant.theme.textSecondary }}
              />
              <input
                type="text"
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                placeholder="Search CC&Rs, ARC, Bylaws..."
                aria-label="Search community documents"
                className="w-full pl-10 pr-4 py-2.5 rounded-md border text-xs focus:outline-none"
                style={{
                  backgroundColor: tenant.theme.bgPrimary,
                  borderColor: tenant.theme.borderSubtle,
                  color: tenant.theme.textPrimary,
                }}
              />
            </div>
          </div>

          {/* Filter Pills + Privacy Boundary Notice */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {docCategories.map((cat) => {
                const active = docCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setDocCategory(cat)}
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

            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border text-xs"
              style={{
                backgroundColor: tenant.theme.bgPrimary,
                borderColor: tenant.theme.borderSubtle,
                color: tenant.theme.textSecondary,
              }}
            >
              <Lock className="w-3.5 h-3.5 shrink-0" style={{ color: tenant.theme.accentSecondary }} />
              <span>
                Confidential financial ledgers & executive minutes require{" "}
                <button
                  type="button"
                  onClick={() => onOpenPortalModal("login")}
                  className="font-semibold underline cursor-pointer"
                  style={{ color: tenant.theme.accentPrimary }}
                >
                  Resident Portal Login
                </button>
              </span>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-xl border flex flex-col justify-between transition-all hover:shadow-md"
                style={{
                  backgroundColor: tenant.theme.bgPrimary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold border"
                      style={{
                        backgroundColor: tenant.theme.bgSecondary,
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.accentPrimary,
                      }}
                    >
                      {doc.code}
                    </span>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: tenant.theme.textSecondary }}
                    >
                      {doc.fileSize}
                    </span>
                  </div>

                  <span
                    className="inline-block text-[11px] font-mono uppercase tracking-wider"
                    style={{ color: tenant.theme.accentSecondary }}
                  >
                    {doc.category} · {doc.version}
                  </span>

                  <h3
                    className="font-display text-xl font-semibold leading-snug"
                    style={{ color: tenant.theme.textPrimary }}
                  >
                    {doc.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: tenant.theme.textSecondary }}
                  >
                    {doc.summary}
                  </p>
                </div>

                <div
                  className="pt-4 mt-5 border-t space-y-3"
                  style={{ borderColor: tenant.theme.borderSubtle }}
                >
                  <div
                    className="flex items-center justify-between text-[11px] font-mono"
                    style={{ color: tenant.theme.textSecondary }}
                  >
                    <span>Updated: {doc.updatedDate}</span>
                    <span>Public Record</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewDoc(doc)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border text-xs font-semibold transition-colors hover:bg-black/5 cursor-pointer"
                      style={{
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.textPrimary,
                      }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Clauses</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDownloadDocument(doc)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: tenant.theme.accentPrimary }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: Frequently Asked Questions */}
      <section
        id="faq"
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
                CHAPTER XI · HOMEOWNER & PROSPECTIVE BUYER KNOWLEDGE BASE
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]"
                style={{ color: tenant.theme.textPrimary }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: tenant.theme.textSecondary }}
              >
                Answers to common inquiries regarding HOA office hours, assessment payments, new resident onboarding, architectural modifications, and guest access.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {faqCategories.map((cat) => {
                const active = faqCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFaqCategory(cat)}
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

          {/* Accordion List */}
          <div className="max-w-4xl space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border overflow-hidden transition-all"
                  style={{
                    backgroundColor: isOpen
                      ? tenant.theme.bgSecondary
                      : tenant.theme.bgPrimary,
                    borderColor: isOpen
                      ? tenant.theme.accentSecondary
                      : tenant.theme.borderSubtle,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span
                        className="text-[11px] font-mono uppercase tracking-wider"
                        style={{ color: tenant.theme.accentSecondary }}
                      >
                        {faq.category}
                      </span>
                      <h3
                        className="font-display text-xl sm:text-2xl font-semibold"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className="p-2 rounded-full border shrink-0 mt-1"
                      style={{
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.accentPrimary,
                      }}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 sm:px-6 pb-6 pt-2 border-t space-y-3"
                      style={{ borderColor: tenant.theme.borderSubtle }}
                    >
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: tenant.theme.textSecondary }}
                      >
                        {faq.answer}
                      </p>
                      {faq.relatedDocCode && (
                        <div className="pt-1 flex items-center gap-2 text-xs font-mono">
                          <span style={{ color: tenant.theme.textSecondary }}>
                            Reference Document:
                          </span>
                          <a
                            href="#documents"
                            className="font-semibold underline"
                            style={{ color: tenant.theme.accentPrimary }}
                          >
                            {faq.relatedDocCode}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 16: Resident Portal Call to Action */}
      <section
        id="portal-cta"
        className="py-20 lg:py-24 border-b text-white relative overflow-hidden"
        style={{
          backgroundColor: tenant.theme.accentPrimary,
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(#FFFFFF 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono uppercase tracking-wider text-amber-300">
                <Lock className="w-3.5 h-3.5" />
                <span>AUTHENTICATED HOMEOWNER DIGITAL SERVICES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                Manage Assessments, Gate Passes & ARC Applications in the Resident Portal.
              </h2>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-2xl">
                To protect homeowner privacy, personal account balances, electronic voting ballots, private board minutes, and vehicle transponder records are strictly isolated behind our encrypted Resident Portal.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenPortalModal("login")}
                  className="px-6 py-3.5 rounded-md bg-white text-stone-950 text-sm font-semibold shadow-md hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Sign In to Resident Portal
                </button>
                <button
                  type="button"
                  onClick={() => onOpenPortalModal("register")}
                  className="px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-colors cursor-pointer"
                >
                  New Homeowner Registration
                </button>
                <button
                  type="button"
                  onClick={() => onOpenPortalModal("demo")}
                  className="text-xs font-mono text-amber-300 underline hover:text-amber-200 cursor-pointer"
                >
                  Preview Interactive Demo Dashboard →
                </button>
              </div>
            </div>

            {/* Right 5 Columns: 4 Portal Capabilities Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: CreditCard,
                  title: "Dues & Auto-Draft",
                  desc: "View real-time ledger balances, enroll in fee-free ACH auto-draft, or download tax statements.",
                },
                {
                  icon: QrCode,
                  title: "Visitor QR e-Passes",
                  desc: "Text instant gatehouse QR passes to guests, contractors, and family members.",
                },
                {
                  icon: FileCheck,
                  title: "Digital ARC Submittals",
                  desc: "Upload exterior modification drawings and track Architectural Review progress.",
                },
                {
                  icon: MessageSquare,
                  title: "Work Orders & Minutes",
                  desc: "Submit common-area maintenance tickets and read audited HOA financial packets.",
                },
              ].map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-black/25 border border-white/15 backdrop-blur-xs space-y-2"
                  >
                    <IconComponent className="w-5 h-5 text-amber-300" />
                    <h3 className="font-semibold text-base text-white">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Contact Us (Office Directory & Interactive Inquiry Form) */}
      <section
        id="contact"
        className="py-20 lg:py-28 border-b"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: HOA Office Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p
                  className="text-xs font-mono uppercase tracking-[0.15em]"
                  style={{ color: tenant.theme.accentSecondary }}
                >
                  CHAPTER XII · CONNECT WITH THE ASSOCIATION
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.12]"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  Contact the On-Site HOA Administration Office
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: tenant.theme.textSecondary }}
                >
                  Whether you are a current homeowner, a prospective buyer, or a title agent requesting a resale certificate, our on-site concierge team is here to assist.
                </p>
              </div>

              <div
                className="p-6 rounded-xl border space-y-5"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: tenant.theme.accentSecondary }}
                  />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.textSecondary }}>
                      On-Site HOA Executive Office
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: tenant.theme.textPrimary }}>
                      {tenant.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: tenant.theme.accentSecondary }}
                  />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.textSecondary }}>
                      Telephone Directory
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: tenant.theme.textPrimary }}>
                      HOA Office: <span className="font-mono">{tenant.officePhone}</span>
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: tenant.theme.textSecondary }}>
                      24/7 Main Gatehouse: <span className="font-mono">{tenant.gatehousePhone}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: tenant.theme.accentSecondary }}
                  />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.textSecondary }}>
                      Official Electronic Mail
                    </p>
                    <p className="text-sm font-mono font-medium mt-0.5" style={{ color: tenant.theme.accentPrimary }}>
                      {tenant.publicEmail}
                    </p>
                    <p className="text-xs font-mono mt-0.5" style={{ color: tenant.theme.textSecondary }}>
                      ARC Desk: {tenant.arcEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: tenant.theme.accentSecondary }}
                  />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: tenant.theme.textSecondary }}>
                      Walk-In Concierge Hours
                    </p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: tenant.theme.textPrimary }}>
                      {tenant.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social & Community Channels */}
              <div className="space-y-2.5">
                <p
                  className="text-xs font-mono uppercase tracking-wider"
                  style={{ color: tenant.theme.textSecondary }}
                >
                  OFFICIAL COMMUNITY CHANNELS
                </p>
                <div className="flex flex-wrap gap-2">
                  {tenant.socials.map((soc) => (
                    <a
                      key={soc.platform}
                      href={soc.url}
                      className="px-3.5 py-2 rounded-md border text-xs font-medium flex items-center gap-2 hover:bg-black/5 transition-colors"
                      style={{
                        backgroundColor: tenant.theme.bgSecondary,
                        borderColor: tenant.theme.borderSubtle,
                        color: tenant.theme.textPrimary,
                      }}
                    >
                      <span className="font-semibold">{soc.platform}:</span>
                      <span className="font-mono opacity-80">{soc.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div
                className="p-7 sm:p-10 rounded-xl border shadow-xs"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                {submittedTicket ? (
                  <div className="py-8 text-center space-y-5">
                    <div
                      className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white"
                      style={{ backgroundColor: tenant.theme.accentPrimary }}
                    >
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.accentPrimary,
                        }}
                      >
                        DISPATCH REFERENCE: #{submittedTicket}
                      </span>
                      <h3
                        className="font-display text-3xl font-semibold pt-2"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        Thank You, {formState.fullName}
                      </h3>
                      <p
                        className="text-sm max-w-md mx-auto leading-relaxed"
                        style={{ color: tenant.theme.textSecondary }}
                      >
                        Your inquiry regarding <strong>{formState.topic}</strong> has been routed to the {tenant.shortName} Concierge Desk. A confirmation copy has been sent to{" "}
                        <span className="font-mono">{formState.email}</span>.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedTicket(null);
                        setFormState({
                          ...formState,
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                      style={{ backgroundColor: tenant.theme.accentPrimary }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="border-b pb-4" style={{ borderColor: tenant.theme.borderSubtle }}>
                      <h3
                        className="font-display text-2xl font-semibold"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        Send a Direct Message or Disclosure Inquiry
                      </h3>
                      <p className="text-xs mt-1" style={{ color: tenant.theme.textSecondary }}>
                        Responses are typically issued within 1 business day by our on-site management team.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3.5 rounded-lg bg-red-900/10 border border-red-600/30 text-red-800 text-xs font-medium">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="inquiry-name"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) =>
                            setFormState({ ...formState, fullName: e.target.value })
                          }
                          placeholder="e.g., Jonathan Sterling"
                          className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                          style={{
                            backgroundColor: tenant.theme.bgPrimary,
                            borderColor: tenant.theme.borderSubtle,
                            color: tenant.theme.textPrimary,
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-email"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Email Address *
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                          style={{
                            backgroundColor: tenant.theme.bgPrimary,
                            borderColor: tenant.theme.borderSubtle,
                            color: tenant.theme.textPrimary,
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="inquiry-phone"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Phone Number
                        </label>
                        <input
                          id="inquiry-phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          placeholder="(512) 555-0100"
                          className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                          style={{
                            backgroundColor: tenant.theme.bgPrimary,
                            borderColor: tenant.theme.borderSubtle,
                            color: tenant.theme.textPrimary,
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-role"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: tenant.theme.textPrimary }}
                        >
                          Your Role / Affiliation
                        </label>
                        <select
                          id="inquiry-role"
                          value={formState.lotOrRole}
                          onChange={(e) =>
                            setFormState({ ...formState, lotOrRole: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                          style={{
                            backgroundColor: tenant.theme.bgPrimary,
                            borderColor: tenant.theme.borderSubtle,
                            color: tenant.theme.textPrimary,
                          }}
                        >
                          <option>Current Homeowner</option>
                          <option>New Buyer / Under Contract</option>
                          <option>Prospective Homebuyer</option>
                          <option>Real Estate / Title Professional</option>
                          <option>Vendor / Municipal Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-topic"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        Inquiry Department / Routing *
                      </label>
                      <select
                        id="inquiry-topic"
                        value={formState.topic}
                        onChange={(e) =>
                          setFormState({ ...formState, topic: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.textPrimary,
                        }}
                      >
                        <option>General Community Inquiry</option>
                        <option>Resale Certificate / Title Estoppel Request</option>
                        <option>Architectural Review (ARC) Pre-Submittal Question</option>
                        <option>Clubhouse & Facility Reservation Question</option>
                        <option>Common Area Landscaping / Maintenance Advisory</option>
                        <option>Gatehouse & Visitor Access Assistance</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-message"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: tenant.theme.textPrimary }}
                      >
                        Message or Property Address *
                      </label>
                      <textarea
                        id="inquiry-message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Please share how our HOA administration or concierge team can assist you..."
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm focus:outline-none"
                        style={{
                          backgroundColor: tenant.theme.bgPrimary,
                          borderColor: tenant.theme.borderSubtle,
                          color: tenant.theme.textPrimary,
                        }}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <p className="text-[11px]" style={{ color: tenant.theme.textSecondary }}>
                        Protected by HOA Privacy Guidelines. Never submit bank account numbers via public forms.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white shadow-xs transition-opacity hover:opacity-95 cursor-pointer shrink-0"
                        style={{ backgroundColor: tenant.theme.accentPrimary }}
                      >
                        <Send className="w-4 h-4" />
                        <span>Transmit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: Footer */}
      <footer
        className="text-stone-300 pt-16 pb-12"
        style={{ backgroundColor: tenant.theme.bgDark }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border text-white"
                  style={{
                    backgroundColor: tenant.theme.accentPrimary,
                    borderColor: tenant.theme.accentSecondary,
                  }}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display text-xl font-semibold text-white block leading-none">
                    {tenant.name}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    Official Homeowners Association
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {tenant.tagline}. Professionally managed on-site for the stewardship of our common grounds, architectural heritage, and resident wellbeing.
              </p>
              <div className="text-xs font-mono text-stone-400 space-y-1 pt-1">
                <p>{tenant.fullAddress}</p>
                <p>24/7 Gatehouse: {tenant.gatehousePhone}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Subdivision
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="hover:text-white transition-colors">About & History</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities & Pools</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events Calendar</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Interactive Map</a></li>
              </ul>
            </div>

            {/* Governance & Documents */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Governance & Policies
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#announcements" className="hover:text-white transition-colors">News & Maintenance Notices</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">Board of Directors & Staff</a></li>
                <li><a href="#documents" className="hover:text-white transition-colors">CC&Rs & Architectural Book</a></li>
                <li><a href="#safety" className="hover:text-white transition-colors">Gatehouse & Safety Rules</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* Resident Portal & Multi-Tenant SaaS Info */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Resident Digital Access
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Access your private homeowner assessment ledger, register gatehouse visitors, or submit ARC plans online.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onOpenPortalModal("login")}
                  className="w-full py-2.5 px-4 rounded-md text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: tenant.theme.accentSecondary }}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Launch Resident Portal</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCmsDrawer}
                  className="w-full py-2 px-4 rounded-md text-xs font-mono bg-white/8 hover:bg-white/15 text-stone-200 border border-white/15 cursor-pointer"
                >
                  Multi-Tenant SaaS Branding Config
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <p>
              © 2026 {tenant.name} Homeowners Association, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => setLegalModal("privacy")}
                className="hover:text-white underline decoration-dotted cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal("terms")}
                className="hover:text-white underline decoration-dotted cursor-pointer"
              >
                Terms of Use
              </button>
              <a href="#contact" className="hover:text-white">
                Contact Concierge
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL: Document Clause Reader */}
      {previewDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="max-w-2xl w-full rounded-xl overflow-hidden border shadow-2xl p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-start justify-between gap-4 border-b pb-4"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <div>
                <span
                  className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold text-white"
                  style={{ backgroundColor: tenant.theme.accentPrimary }}
                >
                  {previewDoc.code} · {previewDoc.version}
                </span>
                <h3
                  className="font-display text-2xl sm:text-3xl font-semibold mt-2"
                  style={{ color: tenant.theme.textPrimary }}
                >
                  {previewDoc.title}
                </h3>
                <p className="text-xs font-mono mt-1" style={{ color: tenant.theme.textSecondary }}>
                  Last Updated: {previewDoc.updatedDate} · {previewDoc.fileSize}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                className="p-2 rounded-md border hover:bg-black/5 cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
              {previewDoc.summary}
            </p>

            <div className="space-y-4">
              {previewDoc.keySections.map((sec) => (
                <div
                  key={sec.heading}
                  className="p-4 rounded-lg border space-y-1.5"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <h4
                    className="text-xs font-mono uppercase tracking-wider font-semibold"
                    style={{ color: tenant.theme.accentPrimary }}
                  >
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: tenant.theme.textPrimary }}>
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="pt-4 border-t flex items-center justify-between gap-3"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 rounded-md border text-xs font-semibold cursor-pointer"
                style={{
                  borderColor: tenant.theme.borderSubtle,
                  color: tenant.theme.textPrimary,
                }}
              >
                Close Reader
              </button>
              <button
                type="button"
                onClick={() => handleDownloadDocument(previewDoc)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                style={{ backgroundColor: tenant.theme.accentPrimary }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Document Extract</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Privacy Policy & Terms of Use */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="max-w-xl w-full rounded-xl border shadow-2xl p-6 sm:p-8 space-y-4"
            style={{
              backgroundColor: tenant.theme.bgPrimary,
              borderColor: tenant.theme.borderSubtle,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: tenant.theme.borderSubtle }}>
              <h3 className="font-display text-2xl font-semibold" style={{ color: tenant.theme.textPrimary }}>
                {legalModal === "privacy"
                  ? `${tenant.shortName} Privacy & Data Protection Policy`
                  : `${tenant.shortName} Public Website Terms of Use`}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded border cursor-pointer"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
              {legalModal === "privacy" ? (
                <>
                  <p>
                    <strong>1. Separation of Public & Resident Data:</strong> This public website displays only general community information approved by the Board of Directors. Confidential homeowner records, assessment balances, gatehouse LPR logs, and private contact directories are strictly segregated inside the authenticated Resident Portal.
                  </p>
                  <p>
                    <strong>2. Inquiry Form Data:</strong> Information submitted through the public Contact Us inquiry form is used solely by on-site HOA management to respond to your request and is never sold or shared with third-party marketers.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Informational Accuracy:</strong> Public summaries of Governing Documents (CC&Rs, Bylaws, and Architectural Pattern Books) are provided for convenience. Certified recorded instruments filed with the County Clerk govern in all legal and closing matters.
                  </p>
                  <p>
                    <strong>2. Amenity & Gate Access:</strong> All subdivision parks, pools, clubhouses, and private roadways are private property maintained by {tenant.name} HOA for registered residents and their accompanied guests.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-md text-xs font-semibold text-white cursor-pointer"
                style={{ backgroundColor: tenant.theme.accentPrimary }}
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
