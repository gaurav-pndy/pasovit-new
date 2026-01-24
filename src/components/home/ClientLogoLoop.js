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
  // { name: "Pasovit", src: "/logos/pasovit.png" },
];

const ClientLogoLoop = () => {
  return (
    <section className="relative py-8">
      <div className="max-w-screen relative ">
        <p className="text-2xl uppercase font-semibold mb-8 text-center">
          Trusted by the Best:
        </p>

        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={80}
          className="flex items-center "
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="px-8 flex  h-12 items-center justify-center "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoLoop;
