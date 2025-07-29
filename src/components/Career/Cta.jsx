"use client";
import React from "react";
import { MdCall } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const CtaSection = () => {
  return (
    <section className="bg-primary text-white flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-tr-[40px] rounded-br-[40px] mt-20">
      {/* Left Decorative Image */}
      <div className="w-full md:w-[28%] relative min-h-[400px]">
        <img
          src="/images/spimg.svg"
          alt="Background Decoration"
          className="absolute bottom-0 left-[-160px] w-[400px] object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[72%] px-6 md:px-10 py-12 flex flex-col justify-center space-y-8">
        {/* Heading & Text */}
        <div>
          <h2 className="text-[55px] font-semibold">Book an Appointment</h2>
          <p className="text-[24px] font-normal mt-3">
            Whether you're a new patient or returning, booking an appointment is
            just a few clicks away.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-8 py-3 rounded-full border-2 border-white hover:scale-105 transition-all duration-300">
            Book Online
            <span className="w-8 h-8 flex items-center justify-center bg-[#870064] rounded-full">
              <IoArrowForward size={20} />
            </span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-lg">
            <MdCall size={40} />
            <FaPlus size={14} className="-ml-7 -mt-3" />
            <span className="ml-3 font-normal not-italic text-[28px]">
              0471 3100100
            </span>
          </div>
          <div className="hidden md:block text-2xl">|</div>
          <div className="font-normal not-italic text-[28px]">
            Appointment slots: Every day | 8 AM to 7 PM
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
