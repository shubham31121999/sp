'use client'
import Image from 'next/image';
import React from 'react'
const Infrastructure = () => {
    const features = [
        "500,000+ sq. ft. hospital campus",
        "475+ beds, including 170 Level-D ICU beds",
        "10 Modular Operating Theatres",
        "30-bed Emergency Wing with dedicated Burns Unit",
        "South Asia’s 1st 3D Hybrid Cath Lab (GE Allia) with AI",
        "South Kerala’s 1st Robotic Zeiss Kinevo Neuro Microscope",
        "Fully motorized X-ray suite",
        "Multi-level covered parking for 650+ vehicles",
        // "Patient-friendly lounges",
        "In-house pharmacy-in-house pharmacy",
        "Dedicated physiotherapy zone",
        "Advanced lab & radiology facilities",
        "Infection-controlled, efficiency-driven architecture",
    ];

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                 <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                  Infrastructure & Facilities
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                   A Healing Environment Built for the Future
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
                    {features.map((item, index) => (
                        <div
                            key={index}
                             data-aos="fade-up"
                             data-aos-delay={index * 100}
                            className="flex justify-center items-center gap-2 shadow-lg bg-[#FDEBF4] border border-[#870064] p-3 rounded-xl"
                        >
                            <div className="text-[#870064] mt-1 w-[30%]">
                                <Image 
                                className='w-20 mx-auto py-3'
                                width={150}
                                height={150} 
                                src="/images/story/splogoicon.png" 
                                alt={item} />
                            </div>
                            <p className="text-xl font-bold text-left text-[#000] w-[70%]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Infrastructure