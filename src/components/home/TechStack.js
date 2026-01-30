"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaDigitalOcean, FaDocker, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiGeminiLine } from "react-icons/ri";
import {
  SiAnthropic,
  SiExpress,
  SiHostinger,
  SiLangchain,
  SiMake,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPerplexity,
  SiSupabase,
  SiTensorflow,
  SiVercel,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const logos = [
  <SiVercel key="vercel" aria-label="Vercel" />,
  <FaDocker key="docker" aria-label="Docker" />,
  <FaGithub key="github" aria-label="GitHub" />,
  <FaReact key="react" aria-label="React" />,
  <SiMongodb key="mongodb" aria-label="MongoDB" />,
  <SiSupabase key="supabase" aria-label="Supabase" />,
  <SiNextdotjs key="nextjs" aria-label="NextJS" />,
  <SiNodedotjs key="nodejs" aria-label="NodeJS" />,
  <SiExpress key="express" aria-label="Express" />,
  <SiN8N key="n8n" aria-label="n8n" />,
  <SiMake key="make" aria-label="Make" />,
  <SiLangchain key="langchain" aria-label="Langchain" />,
  <SiTensorflow key="tensorflow" aria-label="Tensorflow" />,
  <RiGeminiLine key="gemini" aria-label="Gemini" />,
  <Image
    src={"/tech-stack/chatgpt.svg"}
    width={42}
    height={42}
    aria-label="ChatGPT"
    alt="ChatGPT"
  />,

  <SiAnthropic key="anthropic" aria-label="Anthropic" />,
  <SiPerplexity key="perplexity" aria-label="Perplexity" />,
  <Image
    src={"/tech-stack/openrouter.svg"}
    width={42}
    height={42}
    aria-label="OpenRouter"
    alt="OpenRouter"
  />,
  <Image
    src={"/tech-stack/tavily.svg"}
    width={42}
    height={42}
    aria-label="tavily"
    alt="tavily"
  />,
  <Image
    src={"/tech-stack/replicate.svg"}
    width={42}
    height={42}
    aria-label="Replicate"
    alt="Replicate"
  />,
  <Image
    src={"/tech-stack/fal.svg"}
    width={42}
    height={42}
    aria-label="Fal"
    alt="Fal"
  />,

  <FaDigitalOcean key="digitalocean" aria-label="Digital Ocean" />,
  <SiHostinger key="hostinger" aria-label="Hostinger" />,
  <TbBrandAzure key="azure" aria-label="Azure" />,
];

const TechStack = () => {
  return (
    <section
      className="w-full  py-10 bg-[#222222] text-white"
      aria-label="Partner logos carousel"
    >
      <p className="text-2xl  font-semibold mb-6 text-center ">
        Technologies we use:
      </p>
      <div className="mx-auto ">
        {/* Top Row */}
        <div className="">
          <Marquee speed={30} gradient={false}>
            {logos.map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center mx-2 md:mx-6  text-5xl rounded-xl h-16 w-16   transition-all"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
