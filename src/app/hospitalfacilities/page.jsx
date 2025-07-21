'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Image from 'next/image';

const supportFacilities = [
  {
    title: 'Information Technology',
    description:
      'Ensuring EMR systems, data security, seamless connectivity, and technology uptime across all clinical and administrative workflows.',
    image: '/images/facilities/it.jpg',
  },
  {
    title: 'Guest Relations & Helpdesk',
    description:
      'Your first point of contact — helping with appointments, information, feedback resolution, and guiding patient experiences.',
    image: '/images/facilities/guest-relations.jpg',
  },
  {
    title: 'Insurance & TPA Desk',
    description:
      'Facilitating cashless hospitalization, insurance verification, document submission, and real-time coordination with TPAs.',
    image: '/images/facilities/insurance.jpg',
  },
  {
    title: 'Biomedical Engineering',
    description:
      'Managing and maintaining medical equipment — from ventilators to imaging devices — ensuring safety and uninterrupted care.',
    image: '/images/facilities/biomedical.jpg',
  },
  {
    title: 'Facility & Engineering Services',
    description:
      'Providing utility support, medical gas pipeline maintenance, HVAC systems, fire safety, and overall infrastructure management.',
    image: '/images/facilities/engineering.jpg',
  },
  {
    title: 'Food & Beverage Services',
    description:
      'Offering dietitian-supervised, hygienic meals tailored to medical conditions while maintaining FSSAI and safety standards.',
    image: '/images/facilities/food.jpg',
  },
  {
    title: 'Housekeeping & Sanitation',
    description:
      'Sterilization, waste disposal, and infection control through professional cleaning across wards, ICUs, OTs, and public areas.',
    image: '/images/facilities/housekeeping.jpg',
  },
  {
    title: 'Security Services',
    description:
      'Trained staff ensuring patient safety, surveillance monitoring, access control, and emergency incident readiness across campus.',
    image: '/images/facilities/security.jpg',
  },
];

const FacilitiesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-gradient-to-br from-[#edf2f7] to-[#d0e3f0]">
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/banners/hospital-facilities.jpg"
          alt="Hospital Facilities Hero"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Hospital Facilities at SP Medifort Hospital</h1>
          <p className="text-md md:text-lg max-w-2xl">Driven by Care, Powered by Precision — The Silent Strength Behind Seamless Healing.</p>
        </div>
      </div>

      <div className="px-4 md:px-20 py-16">
        <Breadcrumb paths={["Home", "Hospital Facilities"]} />

        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-dark mb-3">Overview</h2>
          <p className="text-lg text-theme-muted max-w-3xl mx-auto">
            At SP Medifort Hospital, delivering world-class healthcare goes beyond clinical expertise — it includes the robust support system working silently behind the scenes.
          </p>
          <p className="text-lg text-theme-muted max-w-3xl mx-auto mt-4">
            Our non-clinical departments serve as the backbone of hospital excellence — working 24x7 to create an environment where healing can truly thrive.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-theme-dark text-center mb-6">Our Key Support Facilities</h3>

          <div className="overflow-x-auto whitespace-nowrap pb-4 flex justify-center gap-2">
            {supportFacilities.map((facility, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all min-w-fit ${selectedIndex === index ? 'bg-theme-accent text-white' : 'bg-white text-theme-dark border'}`}
                onClick={() => setSelectedIndex(index)}
              >
                {facility.title}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden transition-transform animate-fade-up">
              <div className="relative w-full h-64">
                <Image
                  src={supportFacilities[selectedIndex].image}
                  alt={supportFacilities[selectedIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-theme-dark mb-2">
                  {supportFacilities[selectedIndex].title}
                </h4>
                <p className="text-theme-muted text-sm">
                  {supportFacilities[selectedIndex].description}
                </p>

                <div className="mt-6 sm:mt-4 md:mt-10">
                  <a
                    href="/appointments"
                    className="inline-flex items-center gap-4 bg-primary text-white px-6 py-3 rounded-full font-roboto font-bold text-[18px] md:text-[20px] leading-tight hover:bg-accent/80 transition duration-300"
                  >
                    Book an Appointment
                    <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-up delay-300">
          <h2 className="text-2xl font-bold mb-3 text-theme-dark">Our Commitment</h2>
          <p className="text-theme-muted text-lg">
            “We are more than a hospital — we are a finely tuned ecosystem where every detail is designed for your safety, dignity, and healing.”
          </p>
        </div>

        <div className="mt-12 text-center animate-fade-up delay-400">
          <h3 className="text-xl font-semibold mb-2 text-theme-dark">Need Assistance with Hospital Facilities?</h3>
          <p className="text-theme-muted">Reach Us: Admin & Services Office, Ground Floor</p>
          <p className="text-theme-muted">Call: +91-XXXXXXXXXX</p>
          <p className="text-theme-muted">Hours: Mon–Sat, 9 AM – 6 PM</p>
          <div className="mt-4 space-x-4">
            <a
              href="https://wa.me/919999999999"
              className="inline-block px-6 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/appointments"
              className="inline-block px-6 py-2 rounded-md bg-theme-accent text-white font-medium hover:bg-theme-accent-dark transition"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;
