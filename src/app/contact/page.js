"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import Background from "@/components/home/Background";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    employees: "",
    message: "",
    transactionalConsent: false,
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.phone) {
      alert("Phone number is required.");
      return;
    }

    if (!form.transactionalConsent) {
      alert("Transactional consent is required.");
      return;
    }

    console.log(form);
  };

  return (
    <Background>
      <section className="relative py-24 ">
        <div className="max-w-6xl mx-auto px-5 md:px-[7.6923%]">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-gray leading-tight">
              Contact Us
            </h1>
          </div>

          {/* Glass Card */}
          <div className=" p-4 sm:p-6 md:p-10 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Name *"
                  name="name"
                  required
                  onChange={handleChange}
                />
                <Input
                  label="Company Name *"
                  name="company"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email *"
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                />
                <Input
                  label="Phone *"
                  name="phone"
                  type="tel"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Website"
                  name="website"
                  type="url"
                  onChange={handleChange}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Number of Employees *
                  </label>
                  <select
                    name="employees"
                    required
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                  >
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                />
              </div>

              {/* Consent Section */}
              <div className="space-y-4 text-sm text-gray-600">
                <ConsentCheckbox
                  required
                  name="transactionalConsent"
                  onChange={handleChange}
                >
                  I consent to receive transactional messages from{" "}
                  <strong>Pasovit Technologies Private Limited</strong> at the
                  phone number provided. Message & Data rates may apply. Reply
                  HELP for help or STOP to opt-out.
                </ConsentCheckbox>

                <ConsentCheckbox
                  name="marketingConsent"
                  onChange={handleChange}
                >
                  I consent to receive marketing and promotional messages from{" "}
                  <strong>Pasovit Technologies Private Limited</strong> at the
                  phone number provided. Message frequency may vary. Message &
                  Data rates may apply. Reply HELP for help or STOP to opt-out.
                </ConsentCheckbox>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue hover:bg-[#003366] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue/20"
              >
                Submit
              </button>

              {/* Legal Links */}
              <div className="text-center  text-gray-500">
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-blue transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </form>

            {/* Contact Details Card */}
            <div className="mt-10">
              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5 p-4 md:p-6 transition-all duration-300 hover:shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold uppercase text-[#222222] mb-10 text-center">
                  Contact Details
                </h3>

                {/* Row 1: Email + Phone */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16 mb-10">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue/20 transition">
                      <Mail className="w-6 h-6 text-blue" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:contact@pasovit.com"
                        className="text-[#222222]  text-lg font-semibold hover:text-blue transition-colors"
                      >
                        contact@pasovit.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue/20 transition">
                      <Phone className="w-6 h-6 text-blue" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+918778931001"
                        className="text-[#222222] font-semibold hover:text-blue transition-colors text-lg"
                      >
                        +91 8778931001
                      </a>
                    </div>
                  </div>
                </div>

                {/* Row 2: Address */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue/20 transition mb-4">
                    <MapPin className="w-6 h-6 text-blue" />
                  </div>

                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Address
                  </p>

                  <p className="text-[#222222] text-lg font-semibold leading-relaxed max-w-xl">
                    715A, 7th Floor, Spencer Plaza Suite No, 718,
                    <br />
                    Anna Salai, Chennai,
                    <br />
                    Tamil Nadu 600002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}

/* Reusable Input */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
      />
    </div>
  );
}

/* Consent Checkbox */
function ConsentCheckbox({ children, required, ...props }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        required={required}
        {...props}
        className="mt-1 accent-blue"
      />
      <span>{children}</span>
    </label>
  );
}
