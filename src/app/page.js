'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
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

    </>
  );
}
