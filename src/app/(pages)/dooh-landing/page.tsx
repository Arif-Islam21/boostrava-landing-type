"use client";

import EvaluationSection from "@/app/components/dooh/EvaluationSection";
import HeroSection from "@/app/components/dooh/HeroSection";
import PricingSection from "@/app/components/dooh/PricingSection";
import ServicesSection from "@/app/components/dooh/ServicesSection";
import WhyDoohSection from "@/app/components/dooh/WhyDoohSection";
import React from "react";

const DoohLanding = () => {
  return (
    <div>
      <HeroSection />
      <WhyDoohSection />
      <EvaluationSection />
      <ServicesSection />
      <PricingSection />
    </div>
  );
};

export default DoohLanding;
