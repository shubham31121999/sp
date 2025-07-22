'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const careerHighlights = [
  {
    title: 'Commitment to Clinical Excellence',
    description:
      'A passion for exceptional patient outcomes and continuous improvement drives us. Our teams uphold evidence-based care, cutting-edge research, and best practices in every procedure.',
  },
  {
    title: 'Interdisciplinary Collaboration',
    description:
      'Departments work in harmony. Physicians, nurses, therapists, and technologists collaborate seamlessly ensuring better treatment decisions and professional bonding.',
  },
  {
    title: 'Career Growth & Development',
    description:
      'We invest in your future. From in-house training modules to certifications and leadership tracks, we help you grow technically and personally.',
  },
  {
    title: 'World-Class Infrastructure',
    description:
      'Our OTs, ICU setups, robotic systems, and diagnostic labs empower staff with the tools needed to perform at their best.',
  },
  {
    title: 'Inclusive & Empowering Culture',
    description:
      'Diversity is our strength. Whether you’re fresh out of college or a seasoned expert — your voice matters here.',
  },
];

const benefits = [
  {
    title: 'Health & Wellness',
    points: [
      'Comprehensive health insurance',
      'Mental wellness programs',
      'Free annual checkups',
      'Fitness centre access'
    ]
  },
  {
    title: 'Financial Support',
    points: [
      'Competitive pay',
      'EPF & Gratuity',
      'Loan assistance & planning'
    ]
  },
  {
    title: 'Work-Life Harmony',
    points: [
      'Flexible scheduling',
      'Paid time off & holidays',
      'Employee assistance programs'
    ]
  },
  {
    title: 'Recognition & Development',
    points: [
      'Star performer awards',
      'Mentorship programs',
      'Fast-track leadership pathway'
    ]
  },
];

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-body text-text bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-title text-primary mb-6">
            Join Our Team – SP Medifort Hospital
          </h1>
          <p className="text-lg text-dark max-w-3xl mx-auto mb-6">
            A place to grow, serve, and excel. Your purpose-driven healthcare career starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-primary transition-all">
              Explore Current Openings
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-light" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-title text-dark mb-10 text-center">
            Why Build Your Career with SP Medifort?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {careerHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-md transition-all duration-300 border border-light group hover:bg-primary hover:border-primary hover:shadow-xl"
                data-aos="zoom-in"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-white transition-all">
                  {item.title}
                </h3>
                <p className="text-sm text-dark group-hover:text-white transition-all">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits as Cards */}
      <section className="py-24 bg-primary text-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-title mb-12 text-center">Employee Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white text-dark p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-semibold text-primary mb-4 text-xl">{benefit.title}</h3>
                <div className="grid gap-2">
                  {benefit.points.map((point, i) => (
                    <div
                      key={i}
                      className="bg-light rounded-xl px-4 py-2 hover:bg-secondary hover:text-white transition-all"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Apply */}
      <section className="py-24 bg-white text-center" data-aos="zoom-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-title text-dark mb-6">Ready to Apply?</h2>
          <p className="mb-6">Submit your application and become part of a mission that puts patients first.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all">
              Apply Now
            </button>
            <button className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all">
              Submit Resume
            </button>
          </div>
          <p className="mt-6 text-sm text-dark">
            Email: <a href="mailto:careers@spmedifort.com" className="underline">careers@spmedifort.com</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
