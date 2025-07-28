import React from 'react';
import Image from 'next/image';

const teamData = [
    '50+ Specialty Consultants',
    'Critical Care Experts available 24x7',
    'Trained Emergency Response Team',
    'Skilled Nursing Staff with ICU Care Expertise',
    'Diagnostic, Lab & Imaging Technicians',
    'Rehabilitation & Physiotherapy Experts',
];

const MedifortTeam = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                  The SP Medifort Team
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                  Compassionate. Competent. Committed.
                </p>

                <h3 className="text-left font-semibold text-black mb-4 text-xl">Our team includes:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-3 pb-10">
                    {teamData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="border-l-8 flex items-center justify-center gap-3 bg-white border border-[#D95DB0] rounded-md shadow-sm p-4"
                        >
                            <div className="bg-[#D95DB0] rounded-lg mt-1 w-[30%]">
                                <Image
                                    className='w-20 py-3 mx-auto'
                                    width={150}
                                    height={150}
                                    src="/images/story/sp-mdi.png"
                                    alt={item} />
                            </div>
                            <p className="text-2xl font-medium text-left text-[#252B42] w-[70%]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedifortTeam;
