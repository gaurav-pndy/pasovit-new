"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { companyInfo } from "@/data/mock";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const offset = 120;

    const attemptScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;

      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    // Already on home → just scroll
    if (pathname === "/") {
      attemptScroll();
      return;
    }

    // On another page → go home with intent
    router.push(`/#${id}`);
  };
  return (
    <footer className="relative mt-16 max-w-348 mx-auto rounded-t-4xl md:rounded-4xl md:mb-1 bg-[#222222]">
      <div className="mx-auto max-w-7xl px-4 py-10 pb-0">
        {/* Main Footer Content */}
        <div className="relative   ">
          <div className="max-w-350 mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-2">
                  <img
                    src="/logo-white.png"
                    alt="Pasovit logo"
                    className="h-10"
                  />
                </Link>
                <p className="text-white/80 text-2xl italic  mb-6">
                  Ship Faster,
                  <br />
                  Scale Smarter
                </p>
                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-blue text-white rounded-lg hover:bg-[#003366] transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-blue text-white rounded-lg hover:bg-[#003366] transition-colors duration-300"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-blue text-white rounded-lg hover:bg-[#003366] transition-colors duration-300"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-blue text-white rounded-lg hover:bg-[#003366] transition-colors duration-300"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-white font-semibold mb-5">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Launch Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Scale Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Enterprise Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Project Based
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Case Studies Column */}
              {/* <div>
                <h4 className="text-white font-semibold mb-5">Case Studies</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/case-studies/fintech-dashboard"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      FinVault Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies/agency-crm"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      AgencyFlow CRM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies/healthcare-portal"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      MedConnect
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      View All
                    </Link>
                  </li>
                </ul>
              </div> */}

              {/* Quick Links Column */}
              <div>
                <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("pricing")}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Services
                    </button>
                  </li>
                  {/* <li>
                    <Link
                      href="/case-studies"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      Case Studies
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-white font-semibold mb-5">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2"
                    >
                      <Mail size={14} />
                      {companyInfo.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-white/60 text-sm flex items-start gap-2">
                      <MapPin size={14} className="shrink-0 mt-1" />
                      <span className="leading-relaxed">
                        {companyInfo.address}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          className=" flex flex-col items-center justify-between gap-2  py-4 pb-6 px-10 md:px-12 shape 
  bg-white small-text text-dark md:flex-row "
        >
          <span>
            © {new Date().getFullYear()} PASOVIT. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/terms-and-conditions"
              className="hover:text-green transition-colors"
            >
              T&amp;C
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-green transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
