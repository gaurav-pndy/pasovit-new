"use client";

import { companyInfo } from "@/data/mock";
import { Check, Mail, MapPin, Send, User } from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="relative p-12 md:p-16 bg-[#222222] overflow-hidden rounded-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Questions about our plans?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Fill out the form and our team will get back to you within 24
                hours to discuss your specific needs and find the right fit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail size={20} />
                  <span>{companyInfo.email}</span>
                </div>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={20} className="shrink-0 mt-1" />
                  <span>{companyInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#555555]">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]"
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#f8f9fa] border border-black/10 text-[#222222] placeholder-[#888888] focus:outline-none focus:border-blue transition-colors duration-300 rounded-md"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#f8f9fa] border border-black/10 text-[#222222] placeholder-[#888888] focus:outline-none focus:border-blue transition-colors duration-300 rounded-md"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#f8f9fa] border border-black/10 text-[#222222] placeholder-[#888888] focus:outline-none focus:border-blue transition-colors duration-300 rounded-md"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[#f8f9fa] border border-black/10 text-[#222222] placeholder-[#888888] focus:outline-none focus:border-blue transition-colors duration-300 rounded-md resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue text-white font-medium text-lg transition-all duration-400 hover:bg-[#003366] rounded-md"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
