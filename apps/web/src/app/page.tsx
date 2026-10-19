"use client";

import React, { useState, useMemo } from "react";
import { HOA_TENANTS, getTenantById } from "@/data/tenants";
import NavbarAndHero from "@/components/NavbarAndHero";
import AmenitiesAndUpdates from "@/components/AmenitiesAndUpdates";
import SafetyLocationBoard from "@/components/SafetyLocationBoard";
import DocsFaqContactFooter from "@/components/DocsFaqContactFooter";
import {
  ResidentPortalModal,
  MultiTenantCmsDrawer,
} from "@/components/PortalAndCmsModals";

export default function Home() {
  const [selectedTenantId, setSelectedTenantId] =
    useState<string>("veridian-grove");
  const [customBranding, setCustomBranding] = useState<{
    name?: string;
    tagline?: string;
    accentPrimary?: string;
    accentSecondary?: string;
  }>({});

  const [portalModalState, setPortalModalState] = useState<{
    isOpen: boolean;
    defaultTab: "login" | "register" | "demo";
  }>({
    isOpen: false,
    defaultTab: "login",
  });

  const [cmsDrawerOpen, setCmsDrawerOpen] = useState(false);

  const activeTenant = useMemo(() => {
    const base = getTenantById(selectedTenantId);
    return {
      ...base,
      name: customBranding.name ?? base.name,
      tagline: customBranding.tagline ?? base.tagline,
      theme: {
        ...base.theme,
        accentPrimary:
          customBranding.accentPrimary ?? base.theme.accentPrimary,
        accentSecondary:
          customBranding.accentSecondary ?? base.theme.accentSecondary,
      },
    };
  }, [selectedTenantId, customBranding]);

  const handleSelectTenant = (id: string) => {
    setSelectedTenantId(id);
    setCustomBranding({});
  };

  const handleOpenPortalModal = (
    defaultTab: "login" | "register" | "demo" = "login"
  ) => {
    setPortalModalState({ isOpen: true, defaultTab });
  };

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{
        backgroundColor: activeTenant.theme.bgPrimary,
        color: activeTenant.theme.textPrimary,
      }}
    >
      {/* Sections 1, 2, 4, 3: Header, Hero Banner, Community Statistics, About Subdivision */}
      <NavbarAndHero
        tenant={activeTenant}
        allTenants={HOA_TENANTS}
        onSelectTenant={handleSelectTenant}
        onOpenPortalModal={handleOpenPortalModal}
        onOpenCmsDrawer={() => setCmsDrawerOpen(true)}
      />

      {/* Sections 5, 6, 7, 8: Amenities, News & Announcements, Community Events, Photo Gallery */}
      <main className="flex-1">
        <AmenitiesAndUpdates
          tenant={activeTenant}
          onOpenPortalModal={handleOpenPortalModal}
        />

        {/* Sections 9, 10, 11, 12: Safety & Security, Location & Map, Board & Management, Testimonials */}
        <SafetyLocationBoard
          tenant={activeTenant}
          onOpenPortalModal={handleOpenPortalModal}
        />

        {/* Sections 13, 14, 16, 15, 17: Guidelines & Documents, FAQ, Resident Portal CTA, Contact Us, Footer */}
        <DocsFaqContactFooter
          tenant={activeTenant}
          onOpenPortalModal={handleOpenPortalModal}
          onOpenCmsDrawer={() => setCmsDrawerOpen(true)}
        />
      </main>

      {/* Interactive Resident Portal Gateway Modal */}
      <ResidentPortalModal
        isOpen={portalModalState.isOpen}
        defaultTab={portalModalState.defaultTab}
        tenant={activeTenant}
        onClose={() =>
          setPortalModalState((prev) => ({ ...prev, isOpen: false }))
        }
      />

      {/* Interactive Multi-Tenant SaaS Branding & CMS Studio Drawer */}
      <MultiTenantCmsDrawer
        isOpen={cmsDrawerOpen}
        tenant={activeTenant}
        allTenants={HOA_TENANTS}
        onSelectTenant={handleSelectTenant}
        onUpdateCustomBranding={(updates) =>
          setCustomBranding((prev) => ({ ...prev, ...updates }))
        }
        onResetBranding={() => setCustomBranding({})}
        onClose={() => setCmsDrawerOpen(false)}
      />
    </div>
  );
}
