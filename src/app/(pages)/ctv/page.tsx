"use client";

import AdMethodsSection from "@/app/components/ctv/AdMethodsSection";
import BenefitsSection from "@/app/components/ctv/BenefitsSection";
import CaseStudySection from "@/app/components/ctv/CaseStudySection";
import HeroSection from "@/app/components/ctv/HeroSection";
import OverviewSection from "@/app/components/ctv/OverviewSection";
import ReportingSection from "@/app/components/ctv/ReportingSection";
import SupportSection from "@/app/components/ctv/SupportSection";
import TargetingSection from "@/app/components/ctv/TargetingSection";
import WhatIsCTVSection from "@/app/components/ctv/WhatIsCTVSection";

const CtvLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AdMethodsSection />
      <WhatIsCTVSection />
      <OverviewSection />
      <TargetingSection />
      <ReportingSection />
      <SupportSection />
      <CaseStudySection />
      <BenefitsSection />
    </div>
  );
};

export default CtvLanding;
