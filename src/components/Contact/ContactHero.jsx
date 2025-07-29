"use client";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AOS from "aos";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="bg-primary text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden mx-20 pt-16">
      <div className="px-4 sm:px-4 md:px-64">
        <Breadcrumb textColor="text-white" borderColor="border-white" />
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-stretch justify-between h-full">
        {/* Text Block */}
        <div className="md:w-2/3 w-full space-y-5 mt-6 md:mt-0 md:pr-10 flex flex-col">
          <div className="">
            {/* <p className="border border-white rounded-full px-4 py-1 text-sm inline-block">
              Home &gt; Medical Services
            </p> */}
            <h1 className="text-[96px] font-medium not-italic mb-4 leading-none">
              Contact Us
            </h1>
            <p className="text-[40px] font-medium not-italic font-roboto">
              – SP Medifort Hospital
            </p>
          </div>
          <p className="text-[36px] font-medium not-italic leading-10">
            We are here when you need us – for emergencies, appointments, or
            just a question.
          </p>
        </div>

        {/* Image Block */}
        <div className="md:w-1/3 w-full flex justify-end">
          <img
            src="/images/contact/doctor.png"
            alt="Doctor"
            className="max-w-[500px] object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
