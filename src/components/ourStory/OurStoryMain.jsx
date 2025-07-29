"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
const ourStoryMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section className="relative bg-[#6e2452] text-white py-16 h-96 lg:mb-36">
        <div className="absolute inset-0">
          <Image
            width={2000}
            height={1000}
            src="/images/story/mainimage.png"
            alt="Our Team"
            className="w-full h-full object-cover opacity-40 object-top"
          />
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center px-4 md:px-10 lg:top-28">
          <h2 className="block relative text-5xl text-white font-semibold top-24 lg:top-0 lg:mb-24">
            Our Story
          </h2>
          <div
            data-aos="fade-up"
            className="hidden lg:block bg-[#EFDAD9] text-gray-800 p-6 md:p-8 rounded-xl shadow-lg max-w-6xl"
          >
            <p className="text-base leading-relaxed ">
              <strong>SP Medifort Multispeciality Hospital</strong> was
              established with a clear purpose: to redefine healthcare in the
              South of India by delivering world-class medical care that is
              affordable, accessible, and compassionate. Built on the pillars of
              clinical excellence, cutting-edge technology, and a patient-first
              approach, we have grown into a trusted multi-specialty ecosystem
              serving patients across Kerala, India, and beyond. At our core, we
              believe in healing through empathy, innovation, and personal
              connection. Our goal is to empower lives through exceptional
              healthcare.
            </p>
          </div>
        </div>
      </section>
      <div className=" relative z-10 flex flex-col items-center justify-center px-4 md:px-10 lg:top-28">
        <div
          data-aos="fade-up"
          className="lg:hidden block my-5 bg-[#EFDAD9] text-gray-800 p-6 md:p-8 rounded-xl shadow-lg max-w-6xl"
        >
          <p className="text-base leading-relaxed ">
            <strong>SP Medifort Multispeciality Hospital</strong> was
            established with a clear purpose: to redefine healthcare in the
            South of India by delivering world-class medical care that is
            affordable, accessible, and compassionate. Built on the pillars of
            clinical excellence, cutting-edge technology, and a patient-first
            approach, we have grown into a trusted multi-specialty ecosystem
            serving patients across Kerala, India, and beyond. At our core, we
            believe in healing through empathy, innovation, and personal
            connection. Our goal is to empower lives through exceptional
            healthcare.
          </p>
        </div>
      </div>
    </>
  );
};

export default ourStoryMain;
