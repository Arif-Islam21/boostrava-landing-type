import { AdMethodsSection } from "../../components/landing/AdMethodsSection";
import { AdSizesSection } from "../../components/landing/AdSizesSection";
import { BenefitsSection } from "../../components/landing/BenefitsSection";
import { CaseStudiesSection } from "../../components/landing/CaseStudiesSection";
import { HeroSection } from "../../components/landing/HeroSection";
import { OverviewSection } from "../../components/landing/OverviewSection";
import { ReportingSection } from "../../components/landing/ReportingSection";
import { SupportSection } from "../../components/landing/SupportSection";
import { TargetingSection } from "../../components/landing/TargetingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <AdMethodsSection />
      <AdSizesSection />
      <OverviewSection />
      <TargetingSection />
      <ReportingSection />
      <SupportSection />
      <CaseStudiesSection />
      <BenefitsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
