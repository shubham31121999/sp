"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <div className="bg-[#f0dff4] text-sm px-4 py-2 text-purple-800">
          {data.hero.breadcrumb}
        </div>
      )}
      {/* Hero Section */}
      <section className="relative bg-[#eddede] overflow-visible pb-0">
        <div className="w-full px-4 md:px-8 lg:px-16 pt-12 pb-0">
          {/* Headings – Side by Side */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-0">
              {data.hero?.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#93005d] text-right lg:text-right leading-tight max-w-[380px] lg:ml-8">
              {data.hero?.tagline}
            </p>
          </div>

          {/* Banner Image - overlaps bottom bar */}
          <div className="relative w-full flex justify-center -mb-12">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/your-image-path.jpg"
                alt="Banner section visual"
                className="w-full h-52 md:h-72 lg:h-80 object-cover"
              />
              {/* Optional: overlay magenta tint for color matching */}
              <div className="absolute inset-0 bg-[#93005d]/30 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Thick Magenta Bar at Bottom */}
        <div
          className="absolute left-0 right-0 bottom-0 h-14 bg-[#93005d] w-full z-0"
          style={{}}
        />
      </section>
      {/* Overview Section */}
      {data.overview && (
        <section className="bg-[#f7eff9] py-14 md:py-20 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Left: Text Content */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-[#93005d] mb-6 leading-snug">
                {data.overview.heading}
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                {data.overview.description}
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="w-[300px] md:w-[370px] lg:w-[420px] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-[#ecd7ee]">
                <img
                  src="/your-overview-image.jpg"
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
        <section className="bg-[#94006d] py-14 px-4 md:px-0">
          <div className="max-w-[1700px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What the Service Includes
            </h2>

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={32}
              speed={1500}
              className="max-w-[1200px] mx-auto !pb-14"
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
                            <div className="h-full w-3 rounded-l-2xl bg-[#de8ec4] absolute left-0 top-0" />
                            <div className="flex items-center pl-6">
                              <span className="flex items-center justify-center w-12 h-12 bg-[#cc5fad] rounded-md mr-4">
                                <Icon className="text-white text-2xl" />
                              </span>
                              <span className="text-base md:text-lg font-bold text-[#1e1831]">
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
      {data.team?.length > 0 && (
        <section className="relative py-14 px-4 md:px-0 bg-[#f7eff9] overflow-x-clip">
          {/* Top-left decorative background image */}
          <img
            src="/decor-top-left.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-40 md:w-72 opacity-70 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />

          {/* Bottom-right decorative background image */}
          <img
            src="/decor-bottom-right.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-40 md:w-72 opacity-70 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />

          <div className="max-w-[1100px] mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#93005d] mb-12 text-center">
              Who Performs the Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.team.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#fcf6fd] rounded-2xl shadow-xl px-6 md:px-9 py-7 min-h-[120px] border-l-8 border-[#de8ec4] relative group"
                >
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-lg md:text-xl font-semibold text-[#1e1831] leading-snug">
                      {item}
                    </p>
                  </div>
                  {/* Card heading image (right, above text), e.g. avatar or illustrative team icon */}
                  <img
                    src={`/who-performs/${idx + 1}.png`}
                    alt=""
                    className="w-14 h-14 md:w-16 md:h-16 object-contain ml-6 -mt-8 md:-mt-11"
                    style={{ zIndex: 2 }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology */}
      <section className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4c1d95] mb-10">
          Technology & Infrastructure
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.technologies.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#870064b3]"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <p className="text-white text-base font-semibold leading-snug">
                  {item.title}
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
          <h2 className="text-3xl font-bold text-center text-[#44002E] mb-12">
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
                    src={item.image}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
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
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#41002d] leading-snug mb-8">
                Why Choose SP Medifort
                <br />
                Audiology & Speech Therapy?
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
            <div className="w-full h-full">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/path-to-your-image/whychoose.png" // update this path
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />
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
                          className="w-4 h-4 text-[#9C3480]"
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
        <section className="text-center bg-[#f5e8f5] py-12 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            {data.appointmentSection.heading}
          </h2>
          <p className="mb-2 text-gray-700">
            {data.appointmentSection.description}
          </p>
          <p className="font-semibold text-purple-900 mb-6">
            {data.appointmentSection.callToAction}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.appointmentSection.buttons.map((btn, idx) => (
              <button
                key={idx}
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
              >
                {btn}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LayoutB;
