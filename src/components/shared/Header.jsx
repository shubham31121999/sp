'use client';


import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { layoutMap } from '@/data/departments/layoutMap';

const prefix = '/mainClient/out';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'DISCOVER SP MEDIFORT' },
    // { href: '#', label: 'SPECIALITES & TREATMENT' },
    { href: '#', label: 'SERVICES' }, 
    { href: '#', label: 'INTERNATIONAL PATIENTS' },
    { href: '#', label: 'HOSPITAL FACILITIES' },
    { href: '#', label: 'CONTACT US' },
    // { href: '/about', label: 'DISCOVER SP MEDIFORT' },
    // { href: '#', label: 'DISCOVER SP MEDIFORT' },
    { href: '/departments', label: 'SPECIALITES & TREATMENT' },
    // { href: '/services', label: 'SERVICES' }, 
    // { href: '/international-patients', label: 'INTERNATIONAL PATIENTS' },
    // { href: '/facilities', label: 'HOSPITAL FACILITIES' },
    // { href: '/contact', label: 'CONTACT US' },
  ];

  const serviceLinks = Object.entries(layoutMap).map(([slug, info]) => ({
    href: `/departments/${slug}`,
    label: info.label,
  }));

  return (
    <header className="w-full bg-primary text-white shadow-md sticky top-0 z-50 font-body">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 md:px-2 py-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-white hover:text-primary transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Left Nav Links */}
          <div className="flex gap-5">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm tracking-wide font-semibold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* SERVICES Dropdown */}
            {/* SERVICES Dropdown */}
            {/* <div className="relative group">
              <Link
                href="/services"
                className="text-white text-sm tracking-wide font-semibold transition-colors duration-200"
              >
                SERVICES
              </Link>
            </div> */}

          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[120px] md:w-[140px] h-[70px]">
              <Image
                src="/images/navbar/sp-medifort-logo.png"
                alt="SP Medifort"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right Nav Links */}
          <div className="flex gap-5">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm tracking-wide font-semibold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Logo Centered */}
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

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-sm">
          {navLinks.map((link) => {
            if (link.href === '/services') {
              return (
                <div key="services">
                  <div className="block text-sm font-semibold text-dark">SERVICES</div>
                  <div className="ml-3 mt-1 space-y-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-dark hover:text-primary"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-body text-dark hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
