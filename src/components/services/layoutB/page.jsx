"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdPhone, MdEmail } from "react-icons/md";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  MdBroadcastOnPersonal,
  MdBloodtype,
  MdFavorite,
  MdLocalHospital,
  MdGroups,
  MdInvertColors,
  MdFiberNew,
  MdViewList,
  MdOutlineDevicesOther,
} from "react-icons/md";

const techImg1 = "/images/Services/technology-img/technology-1.jpg";
const techImg2 = "/images/Services/technology-img/technology-2.jpg";
const techImg3 = "/images/Services/technology-img/technology-3.jpg";
const techImg4 = "/images/Services/technology-img/technology-4.jpg";
const techImg5 = "/images/Services/technology-img/technology-5.png";
const techImg6 = "/images/Services/technology-img/technology-6.jpg";
const techImg7 = "/images/Services/technology-img/technology-2.jpg";

const techImages = [
  techImg1,
  techImg2,
  techImg3,
  techImg4,
  techImg5,
  techImg6,
  techImg7,
];

const successStories = [
  {
    name: "Anusha K.",
    type: "Paediatric Speech Therapy",
    image: "/images/kid.jpg", // replace with actual path
    content:
      "My son couldn’t speak clearly until 4. After speech therapy at SP Medifort, he started talking confidently in 3 months. Best child speech therapy in Trivandrum!",
  },
  // Add more objects if needed
];

const icons = [
  MdBroadcastOnPersonal,
  MdBloodtype,
  MdFavorite,
  MdLocalHospital,
  MdGroups,
  MdInvertColors,
  MdFiberNew,
  MdViewList,
  MdOutlineDevicesOther,
];

const LayoutB = ({ data }) => {
  return (
    <div className="font-roboto text-gray-900">
      {/* Breadcrumb */}
      {data?.hero?.breadcrumb && (
        <div className="bg-[#EFDAD9] text-sm px-4 py-2 text-purple-800">
          {data.hero.breadcrumb}
        </div>
      )}
      {/* Hero Section */}
      <section className="relative w-full bg-[#EFDAD9] overflow-hidden">
        {/* Top Content */}
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 pt-12 pb-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left">
            <h1 className="text-[48px] font-medium leading-[110%] text-[#030c3d] mb-4 lg:mb-0">
              {data.hero?.title}
            </h1>
          </div>
          <div className="text-right mt-8 lg:mt-0 max-w-[380px] lg:ml-8">
            <p className="text-[48px] font-bold leading-[110%] text-[#870064] text-right">
              {data.hero?.tagline}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="/images/Services/banner-img/Blood-Centre.webp"
              alt="Blood Vials"
              className="w-full h-[400px] object-cover rounded-t-2xl"
            />
          </div>
        </div>

        {/* Bottom Magenta Bar */}
        <div className="w-full h-[81px] bg-[#870064]"></div>
      </section>

      {/* Overview Section */}
      {data.overview && (
        <section className="bg-[#f7eff9] py-16 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            {/* Left: Text Content */}
            <div className="flex-1 w-full">
              <h2 className="text-[42px] leading-[115%] font-bold text-[#93005d] mb-6">
                {data.overview.heading}
              </h2>
              <p className="text-[20px] leading-[34px] font-normal not-italic tracking-[0px] text-[#1e1e1e] max-w-[700px]">
                {data.overview.description}
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="w-[520px] h-[391px] rounded-2xl overflow-hidden shadow-xl border-[3px] border-[#ecd7ee]">
                <img
                  src="/images/Services/overview-img/Blood-Centre.webp"
                  alt="Blood Centre Overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* // What We Offer Section */}
      {data.whatWeOffer?.length > 0 && (
        <section className="bg-[#870064] py-14 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-start">
              What the Service Includes
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={32}
              speed={1500}
              className="w-full max-w-[1800px] mx-auto !pb-14"
            >
              {Array.from({
                length: Math.ceil(data.whatWeOffer.length / 4),
              }).map((_, slideIndex) => {
                const startIdx = slideIndex * 4;
                const group = data.whatWeOffer.slice(startIdx, startIdx + 4);
                return (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {group.map((item, idx) => {
                        const Icon = icons[(startIdx + idx) % icons.length];
                        return (
                          <div
                            key={idx}
                            className="flex items-center bg-white rounded-2xl shadow-xl py-6 px-5 md:px-6 w-full relative overflow-hidden"
                          >
                            <div className="w-[16px] h-[112px] rounded-l-2xl bg-[#D95DB0] absolute left-0 top-0" />
                            <div className="flex items-center pl-6">
                              <span className="flex items-center justify-center w-12 h-12 bg-[#D95DB0] rounded-md mr-4">
                                <Icon className="text-white text-2xl" />
                              </span>
                              <span className="font-bold text-[26px] leading-[24px] tracking-[0.1px] text-[#1e1831]">
                                {item}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}

      {/* Who Performs */}
      {/* {data.team?.length > 0 && (
        <section className="relative py-16 px-4 md:px-0 bg-white overflow-hidden">
          <img
            src="/decor-top-left.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-40 md:w-72 opacity-10 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          <img
            src="/decor-bottom-right.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-40 md:w-72 opacity-10 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#73004E] text-center mb-14">
              Who Performs the Service?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data.team.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] overflow-hidden shadow-md"
                >
                  <div className="bg-[#93005d] p-5 flex justify-between items-center">
                    <h3 className="text-white text-[20px] md:text-[22px] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <img
                      src={`/who-performs/${idx + 1}.png`}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      draggable={false}
                    />
                  </div>
                  <div className="bg-[#e7e1e5] p-5 min-h-[90px] flex items-center">
                    <p className="text-[#870064] text-[16px] leading-[24px] tracking-[0.2px] font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Who Performs */}
      {data.team?.length > 0 && (
        <section className="py-14 px-4 md:px-0 bg-[#f7eff9]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#93005d] mb-12 text-center">
              Who Performs the Service?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {data.team.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-inner"
                >
                  {/* Top Section */}
                  <div className="bg-[#93005d] h-[120px] px-6 relative flex items-start justify-end">
                    <img
                      src="/images/services/sp-md-fort-logo.png"
                      alt="Icon"
                      className="w-[99.65px] h-[96px] mt-4"
                    />
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-[#CCCCCC] py-6 px-6 min-h-[100px] flex items-center">
                    <p className="text-[#870064] text-[24px] font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Section */}
      {/* Technology Section */}
      <section className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-[36px] font-extrabold text-[#870064] mb-10">
          Technology & Infrastructure
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.technologies.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-square w-full rounded-xl overflow-hidden group shadow-md"
            >
              {/* Image */}
              <img
                src={techImages[idx]}
                alt={item}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(135,0,100,0.65)] z-0" />

              {/* Text */}
              <div className="absolute inset-0 flex items-end p-4 z-10">
                <p className="text-white text-[24px] font-medium leading-snug">
                  {typeof item === "string" ? item : item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Use */}
      {/* When to Use Section */}
      {data.whenToUse?.length > 0 && (
        <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#EFDAD9]">
          <h2 className="text-[48px] leading-[70px] font-bold text-center text-[#44002E] mb-12">
            When Should You Use This Service?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10">
            {data.whenToUse.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[200px]"
              >
                <p className="text-lg font-semibold text-[#41002d]">{item}</p>
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                  <span className="text-xl font-bold text-[#910067]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <img
                    src="/images/services/sp-md-fort-logo-2.png"
                    alt="Icon"
                    className="w-[46px] h-[44px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Choose */}
      {data.whyChoose?.length > 0 && (
        <section className="bg-[#f4eafd] py-12 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-[48px] leading-[70px] font-bold tracking-[-0.4px] text-[#41002d] mb-8">
                Why Choose SP Medifort
                <br />
                Blood Centre
              </h2>

              <ul className="space-y-4">
                {data.whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 min-w-6 text-[#a10072] mt-[2px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base md:text-lg text-black leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="w-full h-full relative">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                {/* Image */}
                <img
                  src="/images/Services/technology-img/technology-2.jpg"
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#870064A8] rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Patient Experience */}
      {data.successStories?.length > 0 && (
        <section className="bg-[#9C3480] py-16 px-4 md:px-24">
          <h2 className="text-white text-4xl font-bold mb-12">
            Patient Experience
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop
            >
              {data.successStories.map((story, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center gap-6">
                    {/* Left: Navigation + Patient Image */}
                    <div className="flex items-center gap-4">
                      {/* Only Left Navigation */}
                      <div className="custom-prev w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md">
                        <svg
                          className="w-4 h-4 text-[#870064]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 16.293a1 1 0 010 1.414L7.707 11l4.586-4.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {/* Patient Image */}
                      {story.image && (
                        <img
                          src={story.image}
                          alt={story.author}
                          className="w-24 h-24 object-cover rounded-full border-4 border-white"
                        />
                      )}
                    </div>

                    {/* Right: Name + Testimonial */}
                    <div className="text-white">
                      <p className="text-xl font-semibold">{story.author}</p>
                      <p className="italic text-lg leading-relaxed mt-1">
                        “{story.content}”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs?.length > 0 && (
        <section className="relative py-16 px-4 md:px-0 bg-[#f8f4fc] overflow-x-clip">
          {/* Decorative graphics, update src with your Figma exports if needed */}
          <img
            src="/faq-bg-top-left.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-28 md:w-44 opacity-60 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          <img
            src="/faq-bg-bottom-right.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-28 md:w-44 opacity-60 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />

          <div className="w-full max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#622085] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-br from-[#f4eafd] via-[#f8f4fc] to-[#eedeef]
                       shadow-lg px-7 py-7 sm:py-8 w-full border-l-[7px] border-[#cfa0f7] transition-shadow duration-200 hover:shadow-2xl"
                >
                  <div className="flex items-start">
                    {/* Optional: an accent icon or FAQ badge on the left, uncomment if needed */}
                    {/* <span className="flex-shrink-0 w-9 h-9 bg-[#c393f6] rounded-xl flex items-center justify-center mr-5 mt-0.5">
                <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6 text-white"><path d="..." /></svg>
              </span> */}
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[#7533a4] mb-2 leading-snug">
                        {faq.question}
                      </h4>
                      <p className="text-base md:text-lg text-[#36214b] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Appointment CTA */}
      {data.appointmentSection && (
        <section className="relative w-full min-h-[350px] flex items-center overflow-hidden px-4 md:px-16 py-14 md:py-28">
          {/* Background image and overlay */}
          <img
            src="/appointment-bg.jpg" // Change to your background image path
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 bg-[#aa41a2] opacity-80"
            style={{ zIndex: 1 }}
          />

          {/* SVG wave overlay (export from Figma) */}
          {/* <img src="/cta-wave.svg" alt="" className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2/3 max-w-[650px] opacity-80 pointer-events-none" style={{zIndex:2}} /> */}
          {/* If using inline, paste SVG <svg ... /> here instead */}

          <div className="relative z-10 w-full max-w-[550px] ml-0 md:ml-[7vw] lg:ml-24">
            {/* Card */}
            <div className="bg-[#e27fd1]/90 rounded-xl px-6 py-6 md:py-8 mb-10 w-full shadow-lg border border-white border-opacity-60 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d1240] mb-3">
                {data.appointmentSection.heading}
              </h2>
              <p className="text-base md:text-lg text-white mb-2 font-medium">
                {data.appointmentSection.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-5 w-full">
              {/* Phone */}
              <a
                href="tel:0000000000"
                className="flex items-center text-lg md:text-xl font-semibold text-white rounded-full border-4 border-white px-6 py-2 bg-transparent hover:bg-[#c15bbc]/80 transition shadow-[0_2px_12px_0_rgba(190,88,168,0.11)]"
              >
                <span className="flex items-center justify-center w-10 h-10 mr-5 bg-white rounded-full text-[#aa41a2] text-2xl">
                  <MdPhone />
                </span>
                0000000000
              </a>
              {/* Email */}
              <a
                href="mailto:care@spmedifort.com"
                className="flex items-center text-lg md:text-xl font-semibold text-white rounded-full border-4 border-white px-6 py-2 bg-transparent hover:bg-[#c15bbc]/80 transition shadow-[0_2px_12px_0_rgba(190,88,168,0.11)]"
              >
                <span className="flex items-center justify-center w-10 h-10 mr-5 bg-white rounded-full text-[#aa41a2] text-2xl">
                  <MdEmail />
                </span>
                care@spmedifort.com
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LayoutB;
