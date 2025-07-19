'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HealthCheckPackages = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, offset: 100 });
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
    <div className="min-h-screen px-4 md:px-16 py-12 bg-white font-body text-text overflow-x-hidden">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6" data-aos="fade-in">
        <Link href="/" className="hover:text-dark">Home</Link> &gt;{' '}
        <Link href="/medical-services" className="hover:text-dark">Medical Services</Link> &gt;{' '}
        <span className="text-dark font-semibold">Health Check Packages</span>
      </nav>

      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-title font-light text-dark mb-4" data-aos="fade-down">
          Prevention is Better Than Cure
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          At <span className="font-semibold text-dark">SP Medifort</span>, we offer curated health screening packages designed to detect problems early — when they’re easiest to treat.
        </p>
      </section>

      {/* Packages */}
      <section className="mb-24">
        <h2 className="text-2xl font-title font-semibold text-dark mb-10 text-center" data-aos="fade-up">Our Health Check Packages</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 hover:scale-[1.02]"
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={idx * 100}
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-secondary animate-pulse pointer-events-none opacity-10"></div>
              <h3 className="text-xl font-title text-primary font-bold mb-2">{pkg.title}</h3>
              <p className="text-sm text-dark">{pkg.details}</p>
              {pkg.note && (
                <p className="text-sm text-accent italic mt-2">{pkg.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20" data-aos="fade-up">
  <h2 className="text-2xl font-title font-semibold text-dark mb-10 text-center">
    Why Choose Our Packages?
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {benefits.map((item, i) => (
      <div
        key={i}
        className="bg-light rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
        data-aos="zoom-in"
        data-aos-delay={i * 150}
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-primary text-white">
          {/* Icon based on index (can use real icons later) */}
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
      <section
        className="bg-gradient-to-r from-primary to-accent px-8 py-12 rounded-2xl text-white text-center shadow-2xl"
        data-aos="zoom-in-up"
      >
        <p className="text-md font-body mb-6 leading-relaxed">
          <strong className="text-white font-semibold text-lg">Need Help Selecting a Package?</strong><br />
          Call: <a href="tel:+91XXXXXXXXXX" className="underline hover:text-light">+91-XXXXXXXXXX</a> &nbsp;|&nbsp;
          Email: <a href="mailto:healthcheck@spmedifort.com" className="underline hover:text-light">healthcheck@spmedifort.com</a>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/medical-services/health-check-packages#packages">
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
