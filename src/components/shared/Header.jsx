// Header.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const navLinks = [
  { href: '#', label: 'DISCOVER SP MEDIFORT' },
  { href: '#', label: 'SPECIALITES & TREATMENT' },
  { href: '#', label: 'SERVICES' },
  { href: '#', label: 'INTERNATIONAL PATIENTS' },
  { href: '#', label: 'HOSPITAL FACILITIES' },
  { href: '#', label: 'CONTACT US' },
];

const discoverItems = [
  { name: 'About Us', href: '/discover/about' },
  { name: 'Careers', href: '/discover/careers' },
];

const treatmentItems = [
  { name: 'Physiotherapy & Rehabilitation', href: '/services/physiotherapy-rehabilitation' },
  { name: 'Clinical Laboratory', href: '/services/clinical-laboratory' },
  { name: 'Pharmacy', href: '/services/pharmacy' },
  { name: 'Cath Lab', href: '/services/cath-lab' },
  { name: 'Nursing Services', href: '/services/nursing-services' },
  { name: 'Blood Centre', href: '/services/blood-centre' },
  { name: 'Medical Records', href: '/services/medical-records' },
  { name: 'Audiology & Speech Therapy', href: '/services/audiology-speech-therapy' },
  { name: 'Imaging Services', href: '/services/imaging-services' },
  { name: 'EMG / EEG / ECG', href: '/services/emg-eeg-ecg' },
  { name: 'Dietetics & Nutrition', href: '/services/dietetics-nutrition' },
  { name: 'CSSD (Central Sterile Services Department)', href: '/services/cssd' },
];

const departmentItems = [
  { name: 'Cardiac Science', href: '/departments/cardiac-science' },
  { name: 'Anesthesiology', href: '/departments/anesthesiology' },
  { name: 'Critical Care', href: '/departments/critical-care' },
  { name: 'Dental Oral & Maxillo Facial Surgery', href: '/departments/dental-oral-maxillofacial' },
  { name: 'Department of Surgery', href: '/departments/surgery' },
  { name: 'Dermatology', href: '/departments/dermatology' },
  { name: 'Emergency Medicine', href: '/departments/emergency-medicine' },
  { name: 'Endocrinology', href: '/departments/endocrinology' },
  { name: 'ENT', href: '/departments/ent' },
  { name: 'Family Medicine', href: '/departments/family-medicine' },
  { name: 'Gastroenterology', href: '/departments/gastroenterology' },
  { name: 'General Medicine', href: '/departments/general-medicine' },
  { name: 'Laryngology', href: '/departments/laryngology' },
  { name: 'Nephrology', href: '/departments/nephrology' },
  { name: 'Neuroscience', href: '/departments/neuroscience' },
  { name: 'Obstetrics & Gynaecology', href: '/departments/obstetrics-gynaecology' },
  { name: 'Oncology', href: '/departments/oncology' },
  { name: 'Ophthalmology', href: '/departments/ophthalmology' },
  { name: 'Orthopedics & Spine', href: '/departments/orthopedics-spine' },
  { name: 'Pediatrics', href: '/departments/pediatrics' },
  { name: 'Plastic & Micro Vascular Surgery', href: '/departments/plastic-micro-vascular' },
  { name: 'Psychiatry', href: '/departments/psychiatry' },
  { name: 'Radiodiagnosis', href: '/departments/radiodiagnosis' },
  { name: 'Respiratory Medicine', href: '/departments/respiratory-medicine' },
  { name: 'Rheumatology', href: '/departments/rheumatology' },
  { name: 'Speech Therapy', href: '/departments/speech-therapy' },
  { name: 'Urology', href: '/departments/urology' },
];

const servicesItems = [
  { name: 'Medical Services', href: '/services/medical-services' },
  { name: 'Health Check Packages', href: '/services/#' },
  { name: 'Find a Doctor', href: '/services/#' },
  { name: 'Book Appointment', href: '/services/#' },
  { name: 'Patient Testimonial', href: '/services/#' },
];

const patientsItems = [
  { name: 'Patient Care', href: '/international/patient-Care' },
  { name: 'International Patient Care', href: '/international/international-patient-care' },
];

const facilitiesItems = [
  { name: 'Hospital Facilities', href: '/facilities/hospital-facilities' },
  { name: 'Advanced Technology & Infrastructure', href: '/facilities/parking' },
];

const contactItems = [
  { name: 'Contact Us', href: '/contact/info' },
  { name: 'Book Appointment', href: '/contact/feedback' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const getMenuProps = (label) => {
    switch (label) {
      case 'SPECIALITES & TREATMENT':
        return {
          type: 'specialities',
          data: {
            treatment: treatmentItems,
            department: departmentItems,
          },
        };
      case 'DISCOVER SP MEDIFORT':
        return { type: 'simple', data: { items: discoverItems } };
      case 'SERVICES':
        return { type: 'simple', data: { items: servicesItems } };
      case 'INTERNATIONAL PATIENTS':
        return { type: 'simple', data: { items: patientsItems } };
      case 'HOSPITAL FACILITIES':
        return { type: 'simple', data: { items: facilitiesItems } };
      case 'CONTACT US':
        return { type: 'simple', data: { items: contactItems } };
      default:
        return null;
    }
  };

  return (
      <header className="w-full bg-primary text-white shadow-md sticky top-0 z-50 font-body">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Left-side links */}
          <div className="flex gap-6" style={{ lineHeight: '100px' }}>
            {navLinks.slice(0, 3).map((link) => {
              const menuProps = getMenuProps(link.label);
              return menuProps ? (
                <div key={link.label} className="group">
                  <span className="cursor-pointer text-sm font-semibold">
                    {link.label}
                  </span>
                  <MegaMenu {...menuProps} label={link.label} />
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="text-sm font-semibold">
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[140px] h-[70px]">
              <Image
                src="/images/navbar/sp-medifort-logo.png"
                alt="SP Medifort"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right-side links */}
          <div className="flex gap-6">
            {navLinks.slice(3).map((link) => {
              const menuProps = getMenuProps(link.label);
              return menuProps ? (
                <div key={link.label} className="group">
                  <span className="cursor-pointer text-sm font-semibold">
                    {link.label}
                  </span>
                  <MegaMenu {...menuProps} label={link.label} />
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="text-sm font-semibold">
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden mx-auto">
          <Link href="/">
            <Image
              src="/images/navbar/sp-medifort-logo.png"
              alt="SP Medifort"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-dark px-4 py-4 space-y-3 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}