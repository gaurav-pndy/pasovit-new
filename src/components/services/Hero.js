import React from "react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24  bg-white border-b border-black/10">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="max-w-4xl">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Services & Pricing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-[#222222] mb-6">
            Simple plans for serious teams
          </h1>
          <p className="text-lg md:text-xl text-[#555555] max-w-2xl leading-relaxed">
            Choose the plan that fits your needs. All plans include our core
            guarantees and access to our component library.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
