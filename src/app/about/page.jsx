"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight, HeartPulse, ShieldCheck, Award, UserCheck, Hospital, Users } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
const Section = ({ title, children }) => (
  <section className="space-y-6" data-aos="fade-up">
    <h2 className="text-3xl font-title font-bold text-dark border-b-4 border-primary inline-block pb-2">{title}</h2>
    <div>{children}</div>
  </section>
);

const Card = ({ title, content, icon: Icon }) => (
  <div className="bg-white rounded-2xl border border-primary shadow-md hover:shadow-xl transition-all p-6 space-y-3 group" data-aos="zoom-in">
    {Icon && <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />}
    <h3 className="text-xl font-semibold text-dark font-title">{title}</h3>
    <p className="text-text text-sm font-body whitespace-pre-line">{content}</p>
  </div>
);

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="px-4 md:px-16 py-10 bg-light text-dark font-body space-y-20">
      {/* Breadcrumb */}
      

      {/* Page Header with Image */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg" data-aos="fade-up">
        <Breadcrumb />
        <img
          src="/banner/about-hero.jpg"
          alt="SP Medifort Hospital"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-title font-bold text-white mb-4 tracking-tight leading-tight drop-shadow">
            About Us – SP Medifort Hospital
          </h1>
          <p className="text-xl text-white max-w-3xl leading-relaxed">
            Where Innovation Meets Compassion — A Legacy of Excellence in Patient-Centred Care.
          </p>
          <div className="mt-6 w-20 h-1 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <Section title="Our Story">
        <div className="grid md:grid-cols-2 gap-8">
          <Card icon={HeartPulse} title="A Vision of Healing" content={`Established to redefine healthcare in South India, SP Medifort Hospital blends world-class care, affordability, and empathy. Today, we serve thousands across Kerala, India, and beyond.`} />
          <Card icon={ShieldCheck} title="Our Purpose" content={`Empower lives through exceptional healthcare.`} />
        </div>
      </Section>

      <Section title="Mission & Vision">
        <div className="grid md:grid-cols-2 gap-8">
          <Card icon={UserCheck} title="Mission" content={`To deliver compassionate, evidence-based, and ethical care to every patient — every time.`} />
          <Card icon={Award} title="Vision" content={`To be South India's most trusted healthcare institution by advancing clinical excellence and personalized patient experiences.`} />
        </div>
      </Section>

      <Section title="Core Values">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Compassion", content: "We treat every patient like family." },
            { title: "Excellence", content: "We strive for clinical brilliance in everything we do." },
            { title: "Innovation", content: "We invest in the future of medicine." },
            { title: "Integrity", content: "We uphold transparency, ethics, and trust." },
            { title: "Respect", content: "We honour every individual’s dignity, culture, and beliefs." },
          ].map((val, i) => <Card key={i} icon={HeartPulse} {...val} />)}
        </div>
      </Section>

      <Section title="Leadership Team">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Dr. S P Asokan – Chairman & Managing Director",
            "S P Subramonian – Joint Chairman & Managing Director",
            "Dr. Aathithya S P – Executive Director",
            "Advaith Asokan Bala – Executive Director",
            "Dr. Athulya Asokan Bhagya – Executive Director",
          ].map((name, i) => <Card key={i} icon={Users} title={name} content="Click to view profile" />)}
        </div>
      </Section>

      <Section title="Infrastructure & Facilities">
        <Card icon={Hospital} title="A Healing Environment Built for the Future" content={`475+ beds | 10 Modular OTs | 3D Hybrid Cath Lab | Robotic Neuro Microscope | AI Systems | 128-slice CT | Spacious lounges & parking`} />
      </Section>

      <Section title="Our Team">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "50+ Specialty Consultants",
            "Critical Care Experts (24x7)",
            "Trained Emergency Response Team",
            "Skilled ICU Nurses",
            "Diagnostic Technicians",
            "Rehab & Physio Experts",
          ].map((item, i) => <Card key={i} icon={Users} title={item} content="" />)}
        </div>
      </Section>

      <Section title="Awards & Accreditations">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "JCI Accredited (8th Edition)",
            "NABH Accreditation in Process",
            "Most Technologically Advanced Hospital (2025)",
            "AI Implementation Excellence Award",
          ].map((item, i) => <Card key={i} icon={Award} title={item} content="" />)}
        </div>
      </Section>

      <Section title="Milestones & Timeline">
        <Card icon={Award} title="2021 - 2026+" content={`2021: Conceptualized\n2022: Construction Began\n2024: Soft Launch\n2025: Grand Opening\n2026+: Telemedicine & Clinics`} />
      </Section>

      <Section title="Quality & Safety Initiatives">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Infection Control & Prevention",
            "Digital EHR & Consent",
            "Surgical Safety Checklists",
            "ICU AI Surveillance",
            "Internal Clinical Audits",
            "24x7 ACLS Emergency Response",
          ].map((item, i) => <Card key={i} icon={ShieldCheck} title={item} content="" />)}
        </div>
      </Section>

      <Section title="CSR & Community Outreach">
        <Card icon={Users} title="Healthcare Beyond the Hospital" content={`Free Health Camps | Cancer Awareness | Tribal Units | Health Education | Blood Donation | School & Environmental Campaigns`} />
      </Section>

      <Section title="Our Group of Hospitals">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SP Fort Hospital",
              content: "Multi-specialty tertiary care, decades of trust.\nCall: 0471 2450540",
            },
            {
              title: "SP Health Plus",
              content: "Urban hub for preventive & diagnostic care.\nCall: +91 471 245 0850",
            },
            {
              title: "SP Well Fort",
              content: "Wellness hospital for recovery & rehab.\nCall: 0471 4567890",
            },
          ].map((h, i) => <Card key={i} icon={Hospital} {...h} />)}
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
