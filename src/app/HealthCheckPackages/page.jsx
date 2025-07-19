'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Breadcrumb from '@/components/shared/Breadcrumb';
const HealthCheckPackages = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, offset: 120 });
  }, []);

  const packages = [
    {
      title: 'Basic Health Check',
      details: 'CBC, Blood Sugar, Lipid Profile, ECG, Chest X-ray',
      note: 'Ideal for individuals below 40 years',
    },
    {
      title: 'Executive Health Check (Men/Women)',
      details: 'Full body screening, liver/kidney panel, USG',
      note: 'Includes Gynaecology or Prostate screening',
    },
    {
      title: 'Cardiac Risk Package',
      details: 'ECG, 2D Echo, TMT, Cholesterol, HbA1C',
      note: 'For those with family history or lifestyle risks',
    },
    {
      title: 'Diabetic Wellness Package',
      details: 'FBS, PPBS, HbA1C, Eye & Foot Screening, Creatinine',
    },
    {
      title: 'Senior Citizen Screening',
      details: 'Bone Density, Vision, Thyroid, Cancer Markers, Vitamin B12/D3',
    },
  ];

  const benefits = [
    'Affordable and customizable',
    'Reports within 24 hours',
    'Follow-up consultation included',
    'Insurance claim assistance',
  ];

  return (
    <div className="w-full bg-white font-body text-text overflow-x-hidden overflow-y-hidden">
      {/* Breadcrumb */}
      {/* Hero Section */}
<section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden bg-white">

  {/* Background effects */}
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-secondary opacity-20 rounded-full blur-3xl animate-pulse z-0" />
  <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-primary opacity-10 rounded-full blur-2xl animate-spin-slow z-0" />

  {/* Hero Content Grid */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

    {/* Left Content */}
    <div className="text-center md:text-left">

      {/* ✅ Breadcrumb on top */}
      <div className="mb-6" data-aos="fade-in">
        <Breadcrumb />
      </div>

      <h1 className="text-4xl md:text-5xl font-title font-light text-dark leading-tight mb-6" data-aos="fade-right">
        Prevention is <span className="font-semibold text-primary">Better Than Cure</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="200">
        At <span className="font-semibold text-dark">SP Medifort</span>, we offer curated health screening packages designed to detect problems early — when they’re easiest to treat.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400">
        <a href="#packages">
          <button className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-dark transition-all shadow-lg">
            Explore Packages
          </button>
        </a>
        <a href="/appointment">
          <button className="bg-secondary text-white font-semibold px-6 py-2 rounded-full hover:bg-accent transition-all shadow-lg animate-pulse">
            Book Now
          </button>
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full h-auto" data-aos="zoom-in-left" data-aos-delay="100">
      <img
        src="/images/cardiac.jpg"
        alt="Health Check Illustration"
        className="w-full max-w-md mx-auto md:mx-0"
      />
    </div>
  </div>
</section>



      {/* Packages */}
      <section id="packages" className="px-6 md:px-16 py-20">
        <h2 className="text-2xl font-title font-semibold text-dark mb-10 text-center" data-aos="fade-up">Our Health Check Packages</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-light border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-xl font-title text-primary font-bold mb-2">{pkg.title}</h3>
              <p className="text-sm text-dark">{pkg.details}</p>
              {pkg.note && <p className="text-sm text-accent italic mt-2">{pkg.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-16 py-20 bg-white" data-aos="fade-up">
        <h2 className="text-2xl font-title font-semibold text-dark mb-10 text-center">
          Why Choose Our Packages?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl">
                  {i === 0 && '💰'}
                  {i === 1 && '⏱️'}
                  {i === 2 && '🩺'}
                  {i === 3 && '📝'}
                </span>
              </div>
              <p className="text-sm text-dark font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-primary to-accent text-white text-center rounded-t-3xl shadow-inner" data-aos="zoom-in-up">
        <p className="text-md md:text-lg font-body mb-6 leading-relaxed">
          <strong className="text-white font-semibold text-lg">Need Help Selecting a Package?</strong><br />
          Call: <a href="tel:+91XXXXXXXXXX" className="underline hover:text-light">+91-XXXXXXXXXX</a> &nbsp;|&nbsp;
          Email: <a href="mailto:healthcheck@spmedifort.com" className="underline hover:text-light">healthcheck@spmedifort.com</a>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#packages">
            <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full hover:bg-light hover:text-dark transition-all shadow-md">
              Explore Packages
            </button>
          </Link>
          <Link href="/appointment">
            <button className="bg-dark text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-dark transition-all shadow-md animate-pulse">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthCheckPackages;
