'use client'
import React, { useEffect } from 'react';
import AOS from "aos";

const ContactHero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <section className="bg-[#870064] text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
                {/* Text Block */}
                <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
                    <div className='space-y-10'>
                        <p className="border border-white rounded-full px-4 py-1 text-sm inline-block mb-4">
                            Home &gt; Medical Services
                        </p>
                        <h1 className="text-4xl font-bold mb-1">Contact Us</h1>
                        <p className="text-lg font-medium">– SP Medifort Hospital</p>
                    </div>
                    <p className="text-base mt-4 leading-relaxed">
                        We are here when you need us – for emergencies, appointments, or just a question.
                    </p>
                </div>

                {/* Image Block */}
                <div className="md:w-1/2">
                    <img
                        src="/images/contact/doctor.png"
                        alt="Doctor"
                        className="w-2/3 max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
