'use client';
import { useRef } from 'react';
import OurTeamB from '@/components/layouts/layoutB/OurTeamB';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import SpecialtiesSlider from '@/components/shared/SpecialtiesSlider';
import { FaSearch } from 'react-icons/fa';
import {
  FaMicroscope,
  FaCogs,
  FaXRay,
  FaParking,
  FaProcedures,
  FaFireAlt
} from 'react-icons/fa';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { GiHospitalCross } from 'react-icons/gi';
const doctors = [
  {
    name: 'Dr. Arun Kumar R',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/arun-kumar.png',
  },
  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/aathithya.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/alex-thomas.png',
  },
  {
    name: 'Dr. Arun Kumar R',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/arun-kumar.png',
  },
  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/aathithya.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/alex-thomas.png',
  },
];
export default function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const [active, setActive] = useState('second-opinion');

  const buttons = [
    { key: 'second-opinion', label: 'Second Opinion', icon: '🩺' },
    { key: 'health-checkup', label: 'Get Health Checkup', icon: '📋' },
    { key: 'virtual-consult', label: 'Book A Virtual Consultation', icon: '💻' },
    { key: 'homecare', label: 'Homecare', icon: '🏡' },
  ];

  const slides = [
    {
      image: '/images/slider-1.jpg',
      title: 'Experience Healthcare in a New Light',
      description: `At SP Medifort, we've created an advanced hospital setup in South Kerala with 475 beds, 10 high-tech operation theatres, and 170 ICU beds—designed to offer the kind of care that makes a real difference.`,
    },
    {
      image: '/images/slider-2.jpg',
      title: 'Driven by Innovation, Guided by Compassion',
      description: `Combining cutting-edge technology with human touch to create better patient outcomes every day.`,
    },
    {
      image: '/images/slider-3.jpg',
      title: 'Your Health, Our Priority',
      description: `Our team of expert doctors and support staff work around the clock to ensure holistic, trusted care.`,
    },
  ];
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const whyChooseCards = [
  {
    icon: <FaMicroscope size={28} className="text-[#6E2452]" />,
    text: 'Fully Robotic Zeiss Kinevo Neuro Microscope in South Kerala',
  },
  {
    icon: <FaCogs size={28} className="text-[#6E2452]" />,
    text: '3D Hybrid Cath Lab (GE Allia) with AI in South Asia',
  },
  {
    icon: <FaXRay size={28} className="text-[#6E2452]" />,
    text: 'Fully Motorized X-ray Suite in the region',
  },
  {
    icon: <FaParking size={28} className="text-[#6E2452]" />,
    text: 'Multi-level 650-car covered parking',
  },
  {
    icon: <FaProcedures size={28} className="text-[#6E2452]" />,
    text: 'ICU beds with remote monitoring 24x7 & Level-D isolation',
  },
  {
    icon: <FaFireAlt size={28} className="text-[#6E2452]" />,
    text: 'Bed emergency wing with independent Burns Unit',
  },
];
const team = {
    title: 'Your Ambassadors of Care',
    subTitle: 'Meet the experts committed to your recovery...',
    doctors: [
      {
        name: 'Dr. John Doe',
        designation: 'Cardiologist',
        position: 'Senior Consultant',
        image: '/images/doctors/john-doe.jpg',
      },
      {
        name: 'Dr. Jane Smith',
        designation: 'Neurosurgeon',
        position: 'Head of Department',
        image: '/images/doctors/jane-smith.jpg',
      },
      {
        name: 'Dr. Rahul Patel',
        designation: 'Orthopaedic Surgeon',
        position: 'Consultant',
        image: '/images/doctors/rahul-patel.jpg',
      },
       
    ],
    description:
      'Our team brings decades of surgical excellence, international experience, and compassionate care to every patient.',
    cta: {
      label: 'See All Doctors',
      href: '/doctors',
    },
  };


  return (
    <>
      {/* 🔹 Background Video Section */}
      <section className="relative w-full min-h-screen flex items-end justify-center text-white overflow-hidden pb-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Genesys-Vide-2.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-[80dvh] bg-gradient-to-b from-[#6E2452] to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-5xl px-4">
          {/* Search */}
          <div className="w-full max-w-3xl mx-auto mb-4 rounded-full flex items-center px-4 py-3 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search For Doctors & Specialities..."
              className="flex-1 bg-transparent text-[#6E2452] placeholder-[#6E2452] font-semibold text-sm md:text-base focus:outline-none"
            />
            <button className="text-white bg-[#6E2452] p-2 rounded-full hover:bg-[#5a1d44] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>

          {/* Buttons */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {buttons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActive(btn.key)}
                className={`flex-1 flex items-center gap-3 justify-center px-4 py-3 font-semibold text-sm md:text-base transition 
                  ${active === btn.key
                    ? 'bg-[#6E2452] text-white'
                    : 'text-[#6E2452] hover:bg-gray-50'}
                `}
              >
                <span className="text-xl">{btn.icon}</span> {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Image Slider Section */}
      <section className="relative w-full h-[80vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6E2452]/90 via-[#6E2452]/70 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 max-w-4xl h-full mx-auto px-6 flex flex-col justify-center text-white space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm md:text-lg max-w-2xl">{slide.description}</p>
                <button className="bg-white text-[#6E2452] px-6 py-2 rounded-full font-semibold w-max shadow hover:bg-gray-100 flex items-center gap-2">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
<section className="relative  overflow-hidden w-full py-12">
  <div className="max-w-8xl mx-auto    grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
    
    {/* ⬅️ Text Content */}
    <div className="p-6 md:p-10 relative">
      {/* Optional Watermark Icon */}
      <div className="absolute right-0 bottom-0 opacity-10 w-28 h-28 md:w-40 md:h-40 bg-[url('/images/watermark.svg')] bg-no-repeat bg-contain pointer-events-none"></div>

      <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-4">
        Why SP Medifort Is Among the Best Hospitals in Thiruvananthapuram
      </h2>

      <p className="text-gray-700 mb-4">
        SP Medifort is a well-known multispeciality hospital in Thiruvananthapuram. We offer treatment in more than 30 different medical fields. The hospital combines advanced infrastructure, modern tools like robotic surgery and AI-based diagnostics, and a team of experienced doctors. Everything is designed to help patients get quality care with empathy.
      </p>

      

      <button className="bg-[#6E2452] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#5a1d44] transition">
        Know More About Us
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* ➡️ Image Block with Background Accent */}
    <div className="relative w-full h-[200px] md:h-[300px]">
  {/* 🟣 Background Shape — sticks to RIGHT, rounded on LEFT */}
  <div
    className="absolute right-0 top-0 
               w-[60%] md:w-[55%] 
               h-[240px] md:h-[360px] 
               bg-[#6E2452] 
               rounded-tl-[80px] rounded-bl-[80px] md:rounded-tl-[120px] md:rounded-bl-[120px] 
               z-0"
  />

  {/* 🖼️ Foreground Image — slightly narrower, overlays from left */}
  <div
    className="relative left-0 top-10
               w-[100%] md:w-[100%] 
               h-[180px] md:h-[280px] 
               rounded-tl-[80px] rounded-bl-[80px] md:rounded-tl-[120px] md:rounded-bl-[120px] 
               overflow-hidden z-10 shadow-xl"
  >
    <img
      src="/images/hero-section.png"
      alt="SP Medifort Lobby"
      className="w-full h-full object-fill"
    />
  </div>
</div>

  </div>
</section>
<SpecialtiesSlider />
    <section className="w-full bg-[#8B1C68] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative z-10">

        {/* Left: Alphabet Filter */}
        <div className="w-full md:w-1/2">
          <h3 className="text-[#8B1C68] font-semibold text-lg md:text-xl mb-4">
            Find Diseases & Conditions By Alphabet
          </h3>
          <div className="flex flex-wrap gap-2">
            {alphabets.map((char) => (
              <button
                key={char}
                className={`w-8 h-8 rounded-full border-2 border-[#8B1C68] text-[#8B1C68] text-sm font-semibold flex items-center justify-center hover:bg-[#8B1C68] hover:text-white transition ${
                  char === 'A' ? 'bg-[#8B1C68] text-white' : ''
                }`}
              >
                {char}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-40 mx-4"></div>

        {/* Right: Search */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-[#8B1C68] font-semibold text-lg md:text-xl">
            Search Diseases and Conditions
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-[#8B1C68] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
            />
            <button className="absolute right-3 top-2.5 text-[#8B1C68]">
              <FaSearch />
            </button>
          </div>
          <p className="text-sm text-gray-700">
            Quickly find the information you need. Search our database to explore detailed information on various diseases and conditions, including symptoms, causes, and treatment options.
          </p>
        </div>
      </div>
    </section>
    {/* 🌟 Why Choose SP Medifort Section */}
<section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-[#222] mb-2">Why Choose SP Medifort?</h2>
    <p className="text-[#6E2452] font-medium mb-8">South Kerala’s 1st JCI Accredited hospital</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {whyChooseCards.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-3"
        >
          {item.icon}
          <p className="text-md text-bold text-black">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    
     <OurTeamB team={team} />
    </>
  );
}
