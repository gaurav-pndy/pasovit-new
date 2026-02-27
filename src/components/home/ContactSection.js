"use client";

import { companyInfo } from "@/data/mock";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
    employees: "",
    transactionalConsent: false,
    marketingConsent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone) return;
    if (!formData.transactionalConsent) return;

    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      transactionalConsent: false,
      marketingConsent: false,
    });
  };

  return (
    <section className="py-16 bg-[#222222]">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Questions about our plans?
            </h2>

            <p className="text-white/60 text-lg mb-10">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Check size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/60">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-white">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                  Contact Us
                </h2>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                  <div>
                    <label className="">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-dark">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="">Number of Employees *</label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                    >
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>201–500</option>
                      <option>500+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="input-dark resize-none"
                  />
                </div>

                {/* SMS CONSENT CHECKBOXES */}
                <div className="space-y-3 text-xs text-white/60 leading-relaxed">
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="transactionalConsent"
                      checked={formData.transactionalConsent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 accent-blue"
                    />
                    <span>
                      I consent to receive transactional messages from Pasovit
                      Technologies Private Limited at the phone number provided.
                      Message & Data rates may apply. Reply HELP for help or
                      STOP to opt-out.
                    </span>
                  </label>

                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                      className="mt-1 accent-blue"
                    />
                    <span>
                      I consent to receive marketing and promotional messages
                      from Pasovit Technologies Private Limited at the phone
                      number provided. Message frequency may vary. Message &
                      Data rates may apply. Reply HELP for help or STOP to
                      opt-out.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue text-white font-semibold rounded-md hover:bg-[#003366] transition-all"
                >
                  Submit
                </button>

                {/* Privacy + Terms */}
                <p className="text-center text-xs text-white/50">
                  <a href="/privacy-policy" className=" hover:underline">
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a href="/terms-and-conditions" className=" hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Shared Dark Input Class */}
      <style jsx>{`
        .input-dark {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        .input-dark::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .input-dark:focus {
          outline: none;
          border-color: var(--blue);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
