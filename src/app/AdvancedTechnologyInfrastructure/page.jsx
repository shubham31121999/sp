'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMicroscope, FaHeartbeat, FaXRay, FaSyringe, FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '@/components/shared/Breadcrumb';
const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-body text-text bg-white">
      {/* Breadcrumb */}
      <section className="bg-white py-4 px-6 text-sm text-dark" data-aos="fade-in-up">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb/>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-title text-primary mb-6">
            Welcome to the Technology Behind Better Healing
          </h1>
          <p className="text-dark text-md leading-relaxed">
            SP Medifort is built on the belief that compassionate care and cutting-edge technology should go hand in hand. Across our departments, patients benefit from precision diagnostics, robotic surgery systems, AI-powered monitoring, and seamless imaging; all under one roof.
          </p>
        </div>
      </section>

      {/* Diagnostic Excellence Section */}
      <section className="bg-light py-16 px-6" data-aos="slide-right">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-title text-primary mb-8 text-center">Diagnostic Excellence</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["1.5 Tesla MRI", "128-Slice CT Scan", "Digital X-ray Suite", "4D Ultrasound"].map((tech, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl border hover:border-primary transition-all text-center hover:bg-primary/10" data-aos="zoom-in" data-aos-delay={i * 100}>
                <FaMicroscope className="text-3xl text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-semibold text-md text-dark group-hover:text-primary">{tech}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Advancements Section */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-title text-primary mb-8 text-center">Surgical Advancements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["Versius Robotic Surgery System", "Zeiss Kinevo Robotic Neuro Microscope", "Robotic Navigation for Neurosurgery", "Fully equipped Laparoscopic OT"].map((item, i) => (
              <div key={i} className="relative bg-primary text-white p-6 rounded-xl overflow-hidden shadow-lg hover:bg-accent transition-all duration-300 group" data-aos="flip-up" data-aos-delay={i * 100}>
                <FaSyringe className="text-3xl absolute right-4 top-4 opacity-20 group-hover:scale-125 transition-transform" />
                <h3 className="text-md font-semibold z-10 relative">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Care & Support */}
      <section className="bg-light py-16 px-6" data-aos="slide-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-title text-primary mb-8 text-center">Critical Care & Support</h2>
          <div className="space-y-6">
            {["24*7 Remote ICU Monitoring", "Dedicated Specialty ICUs", "30 Emergency Beds with Burns Unit", "Bone Bank"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all border hover:border-primary hover:bg-light" data-aos="slide-in-right" data-aos-delay={i * 100}>
                <FaHeartbeat className="text-2xl text-accent" />
                <p className="text-sm font-medium text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interventional & Imaging Suites */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-title text-primary mb-8 text-center">Interventional & Imaging Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["3D Cath Lab (GE Allia)", "AI-based surgical planning tools", "Fully Motorized Patient-Friendly X-ray", "PACS Integrated Reporting System"].map((item, i) => (
              <div key={i} className="bg-light p-4 rounded-xl shadow-md hover:shadow-xl transition-all border-4 hover:border-primary hover:bg-white text-center" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex justify-center mb-3 text-3xl text-primary">
                {i % 2 === 0 ? <FaXRay /> : <FaMicroscope />}
              </div>
              <h4 className="text-sm text-black font-semibold">{item}</h4>
            </div>

            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-light" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-title text-primary mb-6">How It Helps You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Faster, safer, more accurate diagnoses", "Less invasive surgeries, quicker recovery", "Fewer complications and better outcomes", "Transparent tracking & digital reporting", "Enhanced ICU and emergency responsiveness"].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 border hover:border-primary hover:bg-primary/10" data-aos="fade-up" data-aos-delay={index * 100}>
                <p className="text-sm text-dark font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary text-white py-20 px-6 overflow-hidden" data-aos="zoom-in">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full opacity-30 z-0"></div>
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="flex flex-col items-center gap-4">
            <FaCalendarAlt className="text-4xl mb-2 text-white/80 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-title font-semibold">Book a Test or Consultation</h2>
            <p className="text-sm md:text-base text-white/90">MRI, CT, or X-ray appointments available at your convenience.</p>
            <a href="#" className="mt-4 inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-light hover:text-dark transition duration-300 shadow-md">
              Schedule Your Scan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;