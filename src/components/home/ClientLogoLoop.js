import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  { name: "EAFO", src: "/logos/EAFO.png" },
  { name: "Health-Direct.info", src: "/logos/HD.png" },
  { name: "Sophos Clinic", src: "/logos/sophos.png" },
  { name: "Ayushma Yoga", src: "/logos/ayushma.png" },
  { name: "FIRMST.tech", src: "/logos/FIRMST.png" },
  { name: "Aviakul", src: "/logos/aviakul.png" },
  { name: "CSO", src: "/logos/CSO.png" },
  { name: "National Aviation Olympiad", src: "/logos/NAO.png" },
];

const ClientLogoLoop = () => {
  return (
    <section className="relative py-6 md:py-10 overflow-hidden bg-dark-gray">
      {/* This keeps LEFT aligned with rest of site */}
      <div className=" px-5 md:px-[7.6923%] lg:px-12 xl:px-16">
        <div className="flex items-center gap-8">
          {/* Left Label */}
          <p className="shrink-0 text-sm md:text-xl text-center uppercase font-semibold tracking-wide leading-relaxed text-white">
            Trusted by <br /> the best
          </p>

          {/* Full-bleed right container */}
          <div className="relative flex-1">
            {/* Break out to the right */}
            <div className="relative w-screen -mr-[10vw] ">
              {/* Fade Overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[25%] bg-linear-to-r from-dark-gray  to-transparent z-10" />

              <Marquee
                speed={40}
                pauseOnHover
                gradient={false}
                className="flex items-center"
              >
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="px-6 flex h-8 md:h-12 items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-auto object-contain "
                      style={{
                        filter: "brightness(0) invert(1)",
                        WebkitFilter: "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoLoop;
