import React from "react";

import Hero from "@/components/services/Hero";
import Pricing from "@/components/services/Pricing";
import FlexibleOptions from "@/components/services/FlexibleOptions";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import Guarantees from "@/components/services/Guarantees";
import ContactSection from "@/components/services/ContactSection";

export const metadata = {
  title: "Services | Pasovit Technologies",
  description:
    "Explore Pasovit Technologies' web development, UI/UX design, and scalable software services built to grow modern businesses.",
  keywords: [
    "web development services",
    "UI/UX design",
    "custom software",
    "React development",
    "Pasovit services",
  ],
  url: "https://pasovit.com/services",
  alternates: {
    canonical: "https://pasovit.com/services",
  },
};

const ServicesPage = () => {
  return (
    <div className="pt-16 md:pt-24">
      <Hero />

      <Pricing />

      <FlexibleOptions />

      <WhatWeBuild />

      <Guarantees />

      <ContactSection />
    </div>
  );
};

export default ServicesPage;
