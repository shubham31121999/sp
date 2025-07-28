'use client';
import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaPlus } from 'react-icons/fa';

const specialties = [
  {
    title: 'Cardiac Sciences',
    description:
      'SP Medifort’s Cardiology Department is one of the most comprehensive heart care centers in South Kerala. From emergency cardiac support to preventive heart screenings and interventional procedures, we provide personalized cardiology in Thiruvananthapuram backed by innovation, empathy, and outcomes.',
    image: '/images/cardiac.jpg',
    procedures: ['Coronary Angiography', 'CABG (Bypass Surgery)', ],
    slug: 'cardiac-sciences',
  },
  {
    title: 'Neurosciences',
    description:
      'Our Neurosciences department offers expert diagnosis and treatment for neurological disorders such as stroke, epilepsy, and brain tumors. With state of the art neuroimaging and advanced neurosurgical capabilities, we deliver holistic and compassionate neurological care.',
    image: '/images/dep/nephrology.webp',
    procedures: ['Stroke Management', 'Brain Tumor Surgery', ],
    slug: 'neurosciences',
  },
  {
    title: 'Gastroenterology',
    description:
      'The Gastroenterology division at SP Medifort focuses on digestive health using both non-invasive and minimally invasive approaches. We specialize in endoscopic procedures, liver care, and managing complex gastrointestinal disorders.',
    image: '/images/dep/Gastroenterology.webp',
    procedures: ['Endoscopy (EGD)', 'Colonoscopy', ],
    slug: 'gastroenterology',
  },
  {
    title: 'Orthopaedics',
    description:
      'Our Orthopaedics department is dedicated to advanced joint, bone, and spine care. We offer comprehensive orthopedic services including trauma management, joint replacements, sports injuries, and minimally invasive spine procedures.',
    image: '/images/Services/spine-disorder.png',
    procedures: ['Joint Replacement', 'Arthroscopy', ],
    slug: 'orthopaedics',
  },
  {
  title: 'Critical Care',
  description:
    'The Critical Care Unit at SP Medifort is equipped to handle life threatening conditions with round the clock monitoring, advanced life support systems, and a dedicated team of intensivists. We provide multi specialty critical care for trauma, sepsis, respiratory failure, post surgical recovery, and more ensuring rapid, coordinated, and compassionate interventions.',
  image: '/images/dep/CriticalCare.webp',
  procedures: ['Mechanical Ventilation', 'ICU Monitoring & Support', ],
  slug: 'critical-care',
}

];


const categories = ['Cardiac Sciences', , 'Neurosciences', 'Gastroenterology', 'Orthopaedics', 'Critical Care'];
import { FaSearch } from 'react-icons/fa';


const SpecialtiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = specialties[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % specialties.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + specialties.length) % specialties.length);

  return (
    <section className="bg-pink-50 py-12 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-2">Specialty & Centers of Excellence</h2>
        <p className="text-md text-gray-600 mb-6">Excellence in 50+ Clinical Services</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="bg-[#86005c] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#6a004a] transition"
            >
              {cat}
            </button>
          ))}
          <button className="bg-[#86005c] text-white px-3 py-1.5 rounded-full text-sm font-medium">
            <FaPlus />
          </button>
        </div>

        {/* Slider Content */}
        <div className="relative bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-[#86005c] mb-2">{current.title}</h3>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              {current.description}{' '}
              {/* <a href={`/departments/${current.slug}`} className="text-primary underline ml-1">
                Read More
              </a> */}
              <a href={`#`} className="text-primary underline ml-1">
                Read More
              </a>
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {current.procedures.map((proc, i) => (
                <span
                  key={i}
                  className="border border-primary text-primary text-sm px-4 py-1 rounded-full hover:bg-primary hover:text-white transition"
                >
                  {proc}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-6 py-2 rounded-full flex items-center gap-2  text-sm shadow hover:bg-accent transition">
                FIND DOCTOR
                <FaArrowRight />
              </button>
              <button className="bg-white border border-primary text-primary px-6 py-2 rounded-full flex items-center gap-2  text-sm hover:bg-primary hover:text-white transition">
                EXPLORE MORE
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-[-20px] md:left-[-30px] top-1/2 transform -translate-y-1/2 bg-white border border-primary text-primary p-2 rounded-full shadow hover:bg-primary hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-[-20px] md:right-[-30px] top-1/2 transform -translate-y-1/2 bg-white border border-primary text-primary p-2 rounded-full shadow hover:bg-primary hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button className="bg-[#86005c] text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-[#6a004a] transition">
            View All Specialties
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default SpecialtiesSlider;
