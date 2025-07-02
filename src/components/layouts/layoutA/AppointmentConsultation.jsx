'use client';
import React from 'react';
import Image from 'next/image';

export default function AppointmentConsultation({ appointmentSection }) {
  if (!appointmentSection) return null;

  const { heading, helpline, support, form } = appointmentSection;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 bg-secondary"
      style={{ backgroundImage: "url('/images/bg-cardiac.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Heading and Pills */}
        <div className="space-y-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg text-white px-4">{heading}</h2>

          <div className="space-y-6 py-6">
            {/* Helpline Box */}
            <div className="flex bg-white text-[#3a003f] rounded-r-full shadow-lg pl-6 pr-4 py-4 items-center justify-between w-2/3 max-w-[600px] ">
              <div className="text-left">
                <p className="font-semibold text-lg">{helpline.label}</p>
                <p className="text-2xl font-bold">{helpline.number}</p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 bg-[#e9d1e1] rounded-full flex items-center justify-center">
                <Image
                  src={helpline.icon || '/icons/phone.svg'}
                  alt="Helpline"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            {/* Support Box */}
            <div className="flex bg-white text-[#3a003f] rounded-r-full shadow-lg pl-6 pr-4 py-4 items-center justify-between w-2/3 max-w-[600px]">
              <div className="text-left">
                <p className="font-semibold text-lg">{support.label}</p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 bg-[#e9d1e1] rounded-full flex items-center justify-center">
                <Image
                  src={support.icon || '/icons/support.svg'}
                  alt="Support"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-[#3a003f] mx-4">
          <h3 className="text-2xl font-bold mb-6 text-center">{form.heading}</h3>
          <form className="space-y-4">
            {form.fields.map((field, index) => (
              <div key={index}>
                <label className="block font-semibold mb-1">{field}:</label>
                <input
                  type="text"
                  placeholder={field}
                  className="w-full rounded-md bg-[#c076a540] px-4 py-2 border-none focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full mt-4 bg-[#870064] text-white font-semibold py-3 rounded-full hover:bg-[#690050] transition"
            >
              {form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
