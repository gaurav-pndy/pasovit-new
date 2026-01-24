"use client";

import { useState, useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { theme: "light", layout: "month_view" });
    })();
  }, []);

  return (
    <section
      id="contact-us"
      className="max-w-350 mx-auto px-5 md:px-[7.6923%] py-16 "
    >
      {/* Left copy */}

      {/* Cal.com embed on desktop */}
      <div className=" overflow-hidden rounded-xl   h-full">
        <Cal
          namespace="discovery-call"
          calLink="pasovit/discovery-call"
          style={{ width: "100%", height: "100%", overflow: "auto" }}
          config={{ layout: "month_view" }}
        />

        {/* Contact details + optional laser connector */}
      </div>
    </section>
  );
};

export default CalEmbed;
