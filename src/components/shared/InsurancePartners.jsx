// components/InsurancePartners.jsx

import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const logos = [
  { src: "/images/Carousel(insurance-company)/car1.jpg" },
  { src: "/images/Carousel(insurance-company)/car1.webp" },
  { src: "/images/Carousel(insurance-company)/car2.webp" },
  { src: "/images/Carousel(insurance-company)/car3.webp" },
];

export default function InsurancePartners() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl font-semibold text-black mb-2">
        Affiliations & Insurance Partners
      </h2>
      <p className="text-black mb-10 max-w-2xl mx-auto">
        We have partnered with more than 40 established insurance providers and TPAs to bill easily and conveniently.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-5 max-w-4xl mx-auto">
        <h3 className="text-lg font-medium text-black mb-6">
          Our Partners Include:
        </h3>

        <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
>
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
  <div className="w-full h-60 relative"> {/* reduce height */}
    <Image
      src={logo.src}
      alt={`Insurance Partner ${index + 1}`}
      layout="fill"
      objectFit="contain"
      className="object-center"
    />
  </div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-10">
        <a
  href="#"
  className="inline-flex items-center gap-3 px-6 py-2 bg-primary text-white rounded-full hover:bg-accent transition"
>
  Check Your Insurance Coverage
  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
    <svg
      className="w-4 h-4 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>

      </div>
    </section>

    
  );
}
