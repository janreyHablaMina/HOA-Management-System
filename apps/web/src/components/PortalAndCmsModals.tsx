"use client";

import React, { useState } from "react";
import {
  X,
  Lock,
  ShieldCheck,
  QrCode,
  CreditCard,
  FileCheck,
  CheckCircle2,
  Sliders,
  Building2,
  RotateCcw,
  KeyRound,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";
import { HoaTenantConfig } from "@/types/hoa";

interface PortalModalProps {
  isOpen: boolean;
  defaultTab: "login" | "register" | "demo";
  tenant: HoaTenantConfig;
  onClose: () => void;
}

export function ResidentPortalModal({
  isOpen,
  defaultTab,
  tenant,
  onClose,
}: PortalModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "demo">(
    defaultTab
  );
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  // Registration state
  const [regName, setRegName] = useState("");
  const [regLot, setRegLot] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regSubmitted, setRegSubmitted] = useState(false);

  // Demo Guest Pass Generator state
  const [guestName, setGuestName] = useState("Sarah Jenkins (Interior Designer)");
  const [generatedPassCode, setGeneratedPassCode] = useState("VG-PASS-8941");

  React.useEffect(() => {
    setActiveTab(defaultTab);
    setLoginMessage(null);
    setRegSubmitted(false);
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginMessage(
      "Authentication verified in demo mode. Switching to your authenticated Homeowner Dashboard preview..."
    );
    setTimeout(() => {
      setLoginMessage(null);
      setActiveTab("demo");
    }, 900);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSubmitted(true);
  };

  const handleGenerateGuestPass = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `PASS-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedPassCode(code);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full rounded-xl overflow-hidden border shadow-2xl max-h-[90vh] flex flex-col"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Portal Header */}
        <div
          className="p-5 sm:p-6 text-white flex items-center justify-between gap-4"
          style={{ backgroundColor: tenant.theme.bgDark }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: tenant.theme.accentPrimary,
                borderColor: tenant.theme.accentSecondary,
              }}
            >
              <Lock className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 block">
                ENCRYPTED HOMEOWNER GATEWAY
              </span>
              <h2 className="font-display text-2xl font-semibold">
                {tenant.name} — Resident Portal
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            aria-label="Close Resident Portal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          className="px-6 pt-3 border-b flex flex-wrap gap-2"
          style={{
            backgroundColor: tenant.theme.bgSecondary,
            borderColor: tenant.theme.borderSubtle,
          }}
        >
          {[
            { id: "login", label: "Homeowner Sign In", icon: KeyRound },
            { id: "register", label: "New Resident Onboarding", icon: UserPlus },
            {
              id: "demo",
              label: "Interactive Portal Preview",
              icon: LayoutDashboard,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(tab.id as "login" | "register" | "demo")
                }
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
                  active ? "opacity-100" : "border-transparent opacity-65 hover:opacity-100"
                }`}
                style={{
                  borderColor: active ? tenant.theme.accentPrimary : "transparent",
                  color: tenant.theme.textPrimary,
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === "login" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <form
                onSubmit={handleLoginSubmit}
                className="md:col-span-7 space-y-4"
              >
                <div>
                  <h3
                    className="font-display text-2xl font-semibold"
                    style={{ color: tenant.theme.textPrimary }}
                  >
                    Sign In with Your Homeowner Credentials
                  </h3>
                  <p
                    className="text-xs mt-1"
                    style={{ color: tenant.theme.textSecondary }}
                  >
                    Access assessment ledgers, gatehouse LPR vehicles, and private board packets.
                  </p>
                </div>

                {loginMessage && (
                  <div className="p-3 rounded-lg bg-emerald-900/15 border border-emerald-600/30 text-emerald-900 text-xs font-medium">
                    {loginMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Registered Email or Lot Account ID
                  </label>
                  <input
                    type="text"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="homeowner@veridiangrove.org or Lot #104"
                    className="w-full px-3.5 py-2.5 rounded-md border text-sm"
                    style={{
                      backgroundColor: tenant.theme.bgSecondary,
                      borderColor: tenant.theme.borderSubtle,
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 rounded-md border text-sm"
                    style={{
                      backgroundColor: tenant.theme.bgSecondary,
                      borderColor: tenant.theme.borderSubtle,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("demo")}
                    className="text-xs font-semibold underline cursor-pointer"
                    style={{ color: tenant.theme.accentSecondary }}
                  >
                    Or launch instant Demo View →
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                    style={{ backgroundColor: tenant.theme.accentPrimary }}
                  >
                    Sign In to Portal
                  </button>
                </div>
              </form>

              <div
                className="md:col-span-5 p-5 rounded-xl border space-y-3"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
                  style={{ color: tenant.theme.accentPrimary }}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Data Privacy Guarantee</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
                  In compliance with HOA governance standards, confidential resident directories, lot balances, and internal security logs are never exposed on the public website.
                </p>
                <p className="text-xs font-mono pt-1" style={{ color: tenant.theme.textPrimary }}>
                  Need onboarding help? Call {tenant.officePhone}
                </p>
              </div>
            </div>
          )}

          {activeTab === "register" && (
            <div>
              {regSubmitted ? (
                <div className="p-6 rounded-xl border text-center space-y-3"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <CheckCircle2
                    className="w-10 h-10 mx-auto"
                    style={{ color: tenant.theme.accentPrimary }}
                  />
                  <h3 className="font-display text-2xl font-semibold">
                    Homeowner Verification Request Received
                  </h3>
                  <p className="text-xs sm:text-sm max-w-md mx-auto" style={{ color: tenant.theme.textSecondary }}>
                    Thank you, <strong>{regName}</strong>. Our Resident Services desk will verify your closing settlement record for <strong>{regLot}</strong> and email your encrypted activation link to <span className="font-mono">{regEmail}</span> within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      New Homeowner Portal & LPR Transponder Registration
                    </h3>
                    <p className="text-xs mt-1" style={{ color: tenant.theme.textSecondary }}>
                      Recently closed on a residence in {tenant.name}? Request your household login credentials and gatehouse keycards below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Deeded Homeowner Name(s) *
                      </label>
                      <input
                        type="text"
                        required
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="e.g., Michael & Elena Vance"
                        className="w-full px-3.5 py-2 rounded-md border text-sm"
                        style={{
                          backgroundColor: tenant.theme.bgSecondary,
                          borderColor: tenant.theme.borderSubtle,
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Subdivision Street Address or Lot # *
                      </label>
                      <input
                        type="text"
                        required
                        value={regLot}
                        onChange={(e) => setRegLot(e.target.value)}
                        placeholder="e.g., 1418 Overlook Ridge / Lot 42"
                        className="w-full px-3.5 py-2 rounded-md border text-sm"
                        style={{
                          backgroundColor: tenant.theme.bgSecondary,
                          borderColor: tenant.theme.borderSubtle,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Primary Homeowner Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="owner@domain.com"
                      className="w-full px-3.5 py-2 rounded-md border text-sm"
                      style={{
                        backgroundColor: tenant.theme.bgSecondary,
                        borderColor: tenant.theme.borderSubtle,
                      }}
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
                      style={{ backgroundColor: tenant.theme.accentPrimary }}
                    >
                      Submit Verification Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === "demo" && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3"
                style={{ borderColor: tenant.theme.borderSubtle }}
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: tenant.theme.accentSecondary }}>
                    AUTHENTICATED SESSION PREVIEW · LOT #118 (OVERLOOK RIDGE)
                  </span>
                  <h3 className="font-display text-2xl font-semibold">
                    Welcome Back, Whitaker Household
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-900/15 text-emerald-800 border border-emerald-600/30 font-semibold">
                  Account in Good Standing
                </span>
              </div>

              {/* 3 Demo Portal Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="p-4 rounded-xl border space-y-1.5"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono" style={{ color: tenant.theme.textSecondary }}>
                    <span>ASSESSMENT BALANCE</span>
                    <CreditCard className="w-4 h-4" style={{ color: tenant.theme.accentPrimary }} />
                  </div>
                  <p className="font-mono text-2xl font-bold" style={{ color: tenant.theme.accentPrimary }}>
                    $0.00
                  </p>
                  <p className="text-[11px]" style={{ color: tenant.theme.textSecondary }}>
                    Q4 Paid via ACH Auto-Draft · Next due Jan 1, 2027
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border space-y-1.5"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono" style={{ color: tenant.theme.textSecondary }}>
                    <span>ACTIVE LPR VEHICLES</span>
                    <ShieldCheck className="w-4 h-4" style={{ color: tenant.theme.accentPrimary }} />
                  </div>
                  <p className="font-mono text-2xl font-bold" style={{ color: tenant.theme.textPrimary }}>
                    3 Registered
                  </p>
                  <p className="text-[11px]" style={{ color: tenant.theme.textSecondary }}>
                    North, South & West Ridge Gates Enabled
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border space-y-1.5"
                  style={{
                    backgroundColor: tenant.theme.bgSecondary,
                    borderColor: tenant.theme.borderSubtle,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono" style={{ color: tenant.theme.textSecondary }}>
                    <span>ARC APPLICATION</span>
                    <FileCheck className="w-4 h-4" style={{ color: tenant.theme.accentSecondary }} />
                  </div>
                  <p className="font-mono text-lg font-bold text-emerald-700">
                    Approved (#ARC-409)
                  </p>
                  <p className="text-[11px]" style={{ color: tenant.theme.textSecondary }}>
                    Rear Pergola & Native Landscape Plan
                  </p>
                </div>
              </div>

              {/* Interactive Visitor e-Pass Generator inside Demo */}
              <form
                onSubmit={handleGenerateGuestPass}
                className="p-5 rounded-xl border space-y-4"
                style={{
                  backgroundColor: tenant.theme.bgSecondary,
                  borderColor: tenant.theme.borderSubtle,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4" style={{ color: tenant.theme.accentPrimary }} />
                    <h4 className="text-sm font-semibold">
                      Instant Gatehouse Visitor e-Pass Generator
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white border" style={{ borderColor: tenant.theme.borderSubtle }}>
                    Active Pass: {generatedPassCode}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter visitor or contractor name..."
                    className="flex-1 px-3.5 py-2 rounded-md border text-xs bg-white"
                    style={{ borderColor: tenant.theme.borderSubtle }}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md text-xs font-semibold text-white cursor-pointer shrink-0"
                    style={{ backgroundColor: tenant.theme.accentPrimary }}
                  >
                    Generate New Gate Pass Code
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface CmsDrawerProps {
  isOpen: boolean;
  tenant: HoaTenantConfig;
  allTenants: HoaTenantConfig[];
  onSelectTenant: (id: string) => void;
  onUpdateCustomBranding: (updates: {
    name?: string;
    tagline?: string;
    accentPrimary?: string;
    accentSecondary?: string;
  }) => void;
  onResetBranding: () => void;
  onClose: () => void;
}

export function MultiTenantCmsDrawer({
  isOpen,
  tenant,
  allTenants,
  onSelectTenant,
  onUpdateCustomBranding,
  onResetBranding,
  onClose,
}: CmsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full border-l shadow-2xl p-6 overflow-y-auto flex flex-col justify-between space-y-6"
        style={{
          backgroundColor: tenant.theme.bgPrimary,
          borderColor: tenant.theme.borderSubtle,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-3 border-b pb-4"
            style={{ borderColor: tenant.theme.borderSubtle }}
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: tenant.theme.accentSecondary }}>
                MULTI-TENANT SAAS ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl font-semibold mt-0.5">
                HOA Tenant & Branding Studio
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-md border hover:bg-black/5 cursor-pointer"
              style={{ borderColor: tenant.theme.borderSubtle }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs leading-relaxed" style={{ color: tenant.theme.textSecondary }}>
            This website is architected as a multi-tenant HOA SaaS platform. Switch between three complete subdivision tenants or customize the active community&apos;s branding and color tokens live below.
          </p>

          {/* 1. Select Pre-Configured HOA Tenant */}
          <div className="space-y-2.5">
            <label className="block text-xs font-mono uppercase tracking-wider font-semibold">
              1. Switch Active HOA Subdivision Tenant
            </label>
            <div className="space-y-2">
              {allTenants.map((t) => {
                const isSelected = t.id === tenant.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onSelectTenant(t.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected ? "shadow-xs" : "opacity-75 hover:opacity-100"
                    }`}
                    style={{
                      backgroundColor: isSelected
                        ? tenant.theme.bgSecondary
                        : "transparent",
                      borderColor: isSelected
                        ? tenant.theme.accentPrimary
                        : tenant.theme.borderSubtle,
                    }}
                  >
                    <div>
                      <p className="text-xs font-semibold">{t.name}</p>
                      <p className="text-[11px] font-mono opacity-75">
                        {t.locationCityState} · {t.theme.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: t.theme.accentPrimary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: t.theme.accentSecondary }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Live White-Label Branding Overrides */}
          <div
            className="p-4 rounded-xl border space-y-4"
            style={{
              backgroundColor: tenant.theme.bgSecondary,
              borderColor: tenant.theme.borderSubtle,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                2. Live Subdivision White-Label Editor
              </span>
              <button
                type="button"
                onClick={onResetBranding}
                className="inline-flex items-center gap-1 text-[11px] font-semibold underline cursor-pointer"
                style={{ color: tenant.theme.accentPrimary }}
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Subdivision Name Override
              </label>
              <input
                type="text"
                value={tenant.name}
                onChange={(e) =>
                  onUpdateCustomBranding({ name: e.target.value })
                }
                className="w-full px-3 py-2 rounded border text-xs bg-white"
                style={{ borderColor: tenant.theme.borderSubtle }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Community Tagline Override
              </label>
              <input
                type="text"
                value={tenant.tagline}
                onChange={(e) =>
                  onUpdateCustomBranding({ tagline: e.target.value })
                }
                className="w-full px-3 py-2 rounded border text-xs bg-white"
                style={{ borderColor: tenant.theme.borderSubtle }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Primary Brand Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tenant.theme.accentPrimary}
                    onChange={(e) =>
                      onUpdateCustomBranding({ accentPrimary: e.target.value })
                    }
                    className="w-8 h-8 rounded cursor-pointer border-0"
                  />
                  <span className="text-xs font-mono">
                    {tenant.theme.accentPrimary}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Secondary Accent
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tenant.theme.accentSecondary}
                    onChange={(e) =>
                      onUpdateCustomBranding({
                        accentSecondary: e.target.value,
                      })
                    }
                    className="w-8 h-8 rounded cursor-pointer border-0"
                  />
                  <span className="text-xs font-mono">
                    {tenant.theme.accentSecondary}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t flex justify-end" style={{ borderColor: tenant.theme.borderSubtle }}>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-md text-xs font-semibold text-white cursor-pointer"
            style={{ backgroundColor: tenant.theme.accentPrimary }}
          >
            Done Customizing
          </button>
        </div>
      </div>
    </div>
  );
}
