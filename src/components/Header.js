"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { companyInfo } from "@/data/mock";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`relative flex items-center justify-between w-full max-w-225 px-4 md:px-6 py-3 transition-all duration-500 rounded-lg ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/50"
            : "bg-white/60 backdrop-blur-lg border border-white/30"
        }`}
      >
        {/* Left Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive("/") ? "text-blue" : "text-[#555555] hover:text-blue"
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection("pricing")}
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive("/services")
                ? "text-blue"
                : "text-[#555555] hover:text-blue"
            }`}
          >
            Services
          </button>
        </div>

        {/* Center Logo */}
        <Link
          href="/"
          className="md:absolute left-1/2 md:-translate-x-1/2 flex items-center"
        >
          <img src="/logo.svg" alt="Pasovit logo" className="h-6" />
        </Link>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* <Link
            href="/case-studies"
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive("/case-studies")
                ? "text-blue"
                : "text-[#555555] hover:text-blue"
            }`}
          >
            Case Studies
          </Link> */}
          <button
            onClick={() => scrollToSection("contact-us")}
            className="inline-flex items-center justify-center px-5 py-2 bg-blue text-white text-sm font-medium transition-all duration-300 hover:bg-[#003366] rounded-md cursor-pointer!"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#222222] p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/50 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-75 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium py-2 transition-colors duration-300 ${
              isActive("/") ? "text-blue" : "text-[#555555]"
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => {
              scrollToSection("pricing");
              setIsMobileMenuOpen(false);
            }}
            className={`text-base font-medium text-left py-2 transition-colors duration-300 ${
              isActive("/services") ? "text-blue" : "text-[#555555]"
            }`}
          >
            Services
          </button>
          {/* <Link
            href="/case-studies"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium py-2 transition-colors duration-300 ${
              isActive("/case-studies") ? "text-blue" : "text-[#555555]"
            }`}
          >
            Case Studies
          </Link> */}
          <button
            onClick={() => {
              scrollToSection("contact-us");
              setIsMobileMenuOpen(false);
            }}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-medium rounded-md mt-2"
          >
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
