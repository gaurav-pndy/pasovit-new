import Background from "@/components/home/Background";
import Hero from "@/components/home/Hero";
import PainPoints from "@/components/home/PainPoints";
import Process from "@/components/home/Process";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import ServicesPreview from "@/components/home/ServicesPreview";
import FlexibleOptions from "@/components/home/FlexibleOptions";
import Guarantees from "@/components/home/Guarantees";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import ContactSection from "@/components/home/ContactSection";
import TechStack from "@/components/home/TechStack";
import ClientLogoLoop from "@/components/home/ClientLogoLoop";
import CalEmbed from "@/components/home/CalEmbed";
import PricingTable from "@/components/home/PricingTable";

export default function HomePage() {
  return (
    <>
      <Background>
        <Hero />
        <ClientLogoLoop />
        <PainPoints />
        <Process />
        <WhatWeBuild />
        {/* <ServicesPreview /> */}
        <PricingTable />
        <FlexibleOptions />
        <Guarantees />
        {/* <CaseStudiesPreview /> */}
        <TechStack />
        <CalEmbed />
        <ContactSection />
      </Background>
    </>
  );
}
