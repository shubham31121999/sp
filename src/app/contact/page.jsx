'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="font-body text-text bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 px-8 text-center" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-title font-light mb-4">Contact Us</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          We are here when you need us – for emergencies, appointments, or just a question.
        </p>
      </section>

      {/* Hospital Location & Group Info */}
      <section className="py-24 px-6 md:px-12 bg-light" data-aos="fade-up">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

    {/* Location Details */}
    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition flex flex-col justify-between" data-aos="fade-right">
      <div>
        <h2 className="text-3xl font-title text-dark mb-6">Hospital Location</h2>
        <p className="font-semibold text-primary text-lg mb-2">SP Medifort Hospital (Flagship Campus)</p>
        <p className="mb-1">(A UNIT OF SP HITECH VENDURE)</p>
        <p className="mb-1">Eanchakkal, Thiruvananthapuram – 695008</p>
        <p className="mb-4">Kerala, India</p>
        <a
          href="https://www.google.com/maps?q=SP+Medifort+Hospital,+Eanchakkal,+Thiruvananthapuram"
          target="_blank"
          className="text-accent underline cursor-pointer inline-block"
        >
          📍 View on Google Maps
        </a>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-3 bg-light p-4 rounded-xl shadow-sm hover:shadow-md transition" data-aos="zoom-in">
          <span className="text-2xl">🅿️</span>
          <p>Ample multi-level covered parking available</p>
        </div>
        <div className="flex items-start gap-3 bg-light p-4 rounded-xl shadow-sm hover:shadow-md transition" data-aos="zoom-in">
          <span className="text-2xl">🚖</span>
          <p>Easily accessible from city centre, airport & railway station</p>
        </div>
      </div>
    </div>

    {/* Group of Hospitals */}
    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition" data-aos="fade-up">
      <h2 className="text-3xl font-title text-dark mb-6">Our Group of Hospitals</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-light p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <span className="text-2xl">🏥</span>
          <div>
            <p className="text-base">SP Fort Hospital – <strong>0471 2450540</strong></p>
            <a href="#" className="text-accent underline text-sm">[Map]</a>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-light p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <span className="text-2xl">🏥</span>
          <div>
            <p className="text-base">SP Health Plus – <strong>0471 2450850</strong></p>
            <a href="#" className="text-accent underline text-sm">[Map]</a>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-light p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <span className="text-2xl">🏥</span>
          <div>
            <p className="text-base">SP Well Fort – <strong>0471 4567890</strong></p>
            <a href="#" className="text-accent underline text-sm">[Map]</a>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-accent underline mr-4">[View All Locations]</a>
          <a href="#" className="text-accent underline">[Contact Main Office]</a>
        </div>
      </div>
    </div>

    {/* Embedded Google Map */}
    <div
  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition p-6 flex flex-col gap-4"
  data-aos="fade-left"
>
  <h2 className="text-3xl font-title text-dark">📍 Map Location</h2>
  <hr className="border-t-2 border-light" />

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.728452030244!2d76.93326487505967!3d8.48534789769811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befb5cd6ae2b%3A0xd9c9ce020d0c479d!2sEanchakkal%2C%20Thiruvananthapuram%2C%20Kerala%20695008!5e0!3m2!1sen!2sin!4v1690123412637!5m2!1sen!2sin"
    width="100%"
    height="100%"
    className="h-[400px] w-full border-0 rounded-xl"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  </div>
</section>


      {/* Appointment & Emergency Cards */}
      <section className="py-20 px-8 bg-white" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Appointment */}
          <div className="bg-light rounded-3xl p-10 shadow-md hover:shadow-xl transition" data-aos="fade-up">
            <h2 className="text-3xl font-title text-dark mb-4">Book an Appointment</h2>
            <p className="mb-2 text-lg">📞 <strong>0471 3100100</strong></p>
            <p className="mb-1">For in-person and virtual consultations</p>
            <p className="mb-4">Timing: Every day | 8 AM to 7 PM</p>
            <button className="px-8 py-3 bg-secondary text-white text-sm rounded-full hover:bg-primary transition">
              Book Appointment Now
            </button>
          </div>

          {/* Emergency */}
          <div className="bg-light rounded-3xl p-10 shadow-md hover:shadow-xl transition" data-aos="fade-up">
            <h2 className="text-3xl font-title text-dark mb-4">Emergency Contact Numbers</h2>
            <p className="mb-2">🚑 Emergency Services (Ambulance & ER): <strong>0471 3100101</strong></p>
            <p>🏠 Home Care: <strong>+91 8943067890</strong></p>
            <p className="mt-2">Emergency services operate <strong>round-the-clock</strong>.</p>
          </div>
        </div>
      </section>

      {/* Query Form */}
      <section className="py-20 px-8 bg-light" data-aos="fade-up">
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-4xl font-title text-dark mb-10 text-center">Post a Query</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="text" placeholder="Contact Number" className="border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Email ID" className="border p-4 rounded-lg col-span-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="text" placeholder="Department or Service Required" className="border p-4 rounded-lg col-span-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea placeholder="Message" rows="5" className="border p-4 rounded-lg col-span-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            <button type="submit" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-dark transition col-span-2">
              Submit Your Query
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page;
