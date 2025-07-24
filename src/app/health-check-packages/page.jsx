'use client';

import React from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { FaCheckCircle } from 'react-icons/fa';

const packages = [
  {
    title: 'Basic Health Check',
    description: 'CBC, Blood Sugar, Lipid Profile, ECG, Chest X-ray\nIdeal for individuals below 40 years',
  },
  {
    title: 'Executive Health Check (Men/Women)',
    description:
      'Includes full body screening, every 1-2 years\nAdditional gynae or prostate screening as per gender',
  },
  {
    title: 'Cardiac Risk Package',
    description:
      'CBC, E2D Echo, TMT, Cholesterol, HbA1c\nFor those with family history or lifestyle risk',
  },
  {
    title: 'Diabetic Wellness Package',
    description:
      'FBS, PPBS, HbA1C, Eye & Foot Screening, Creatinine',
  },
  {
    title: 'Senior Citizen Screening',
    description:
      'Bone Density, Vision, Thyroid, Cancer Markers, Vitamin B12/D3',
  },
];

const usps = [
  'Affordable and customisable',
  'Reports within 24 hours',
  'Follow-up consultation included',
  'Insurance claim support',
];

export default function HealthCheckPackages() {
  return (
    <section className="bg-[#FFF6F9] text-[#711C5D]">
      <div >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-start bg-secondary   ">
          {/* Left Column: Breadcrumb + Text */}
          <div className='mt-10 max-w-7xl mx-auto px-4'>
            <Breadcrumb />
            <h1 className="text-4xl font-bold mt-4 mb-2 text-white">Prevention is Better Than Cure</h1>
            <p className="max-w-xl mb-4 text-black">
              At SP Medifort, we offer curated health screening packages designed to detect problems early, when they’re easiest to treat.
            </p>
          </div>

          {/* Right Column: Images */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="/images/hospital-1.jpg" alt="Lobby 1" className="rounded-xl shadow w-full h-auto" />
            <img src="/images/hospital-2.jpg" alt="Lobby 2" className="rounded-xl shadow w-full h-auto" />
          </div>
        </div>

        {/* Packages Grid */}
        <div className='max-w-7xl mx-auto px-4'>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 ">
          
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="border-2 border-[#9C3D80] rounded-xl p-4 bg-white shadow-md relative"
            >
              <div className="absolute -top-6 left-4 bg-[#9C3D80] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 mt-4">{pkg.title}</h3>
              <p className="text-sm whitespace-pre-line">{pkg.description}</p>
              
            </div>
          ))}
          </div>
        </div>

        {/* USP Strip */}
        <div className="bg-[#FAD9EC] text-center  p-6 ">
          <div className='max-w-9xl mx-auto px-4'>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Packages?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {usps.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white border border-[#9C3D80] text-[#9C3D80] px-4 py-4 rounded-lg text-xl font-medium shadow"
              >
                <FaCheckCircle className="text-[#9C3D80]" /> {item}
              </span>
            ))}
          </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-[#9C3D80] text-white p-6 rounded-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
              <p className="text-sm mb-2">
                Our Patient Relations Team is available to help you choose the right service or guide you through any step.
              </p>
              <ul className="text-sm space-y-1">
                <li>📞 <a href="tel:0000000000" className="underline">0000000000</a></li>
                <li>📩 <a href="mailto:care@spmedifort.com" className="underline">care@spmedifort.com</a></li>
              </ul>
            </div>
            <img
              src="/images/hospital-cta.jpg"
              alt="Support"
              className="w-full h-32 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
