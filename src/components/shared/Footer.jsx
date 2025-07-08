"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
const prefix = "/mainClient/out";
export default function Footer() {
  return (
    <footer className="bg-white text-dark font-body border-t border-gray-100 pt-10">
      <div className="w-full px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
          {/* For Patients */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              For Patients
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-bold" href="#">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Second Opinion
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Health Packages
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Virtual Consultations
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Book a Lab Test
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Homecare Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Hospital Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Hospital Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-bold" href="#">
                  Medical Specialties
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Emergency & ICU Care
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Insurance & Billing Help
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Services for International Patients
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Physiotherapy & Recovery
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Onsite Pharmacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-bold" href="#">
                  News & Media Highlights
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Health Blogs & Tips
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Careers at SP Medifort
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Download Our Brochure
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="#">
                  Take a Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Contact & Support
            </h3>
            <div className="space-y-2 text-sm">
              <p className="font-bold">
                SP Medifort Hospital, Eanchakkal, Thiruvananthapuram, Kerala
              </p>
              <p>
                <span className="font-semibold text-primary">
                  Emergency Line:
                </span>{" "}
                +91-0471 3100 100
              </p>
              <p>
                <span className="font-semibold text-primary">Email:</span>{" "}
                info@spmedifort.com
              </p>
              <p className="text-primary font-semibold">
                <Link className="font-bold" href="#">
                  Post a Medical Query
                </Link>
              </p>
              <p className="text-primary font-semibold">
                <Link className="font-bold" href="#">
                  Get Directions to the Hospital
                </Link>
              </p>
              <p className="text-primary font-semibold">
                <Link className="font-bold" href="#">
                  Feedback & Complaints
                </Link>
              </p>
            </div>
          </div>

          {/* Logo & Buttons */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Image
              src={`${prefix}/images/footer/sp-logo.png`}
              alt="SP Medifort Logo"
              width={400}
              height={100}
              className="object-contain"
              priority
            />
            <div className="w-full max-w-[280px]">
              <button className="w-full bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-primary/90 transition">
                Emergency 24x7
              </button>
            </div>

            <div className="w-full max-w-[280px]">
              <button className="w-full border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-primary hover:text-white transition">
                Book An Appointment!
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 pb-4 text-center text-xs text-dark">
          <div className="space-x-4 text-sm py-3">
            <Link className="font-bold" href="#">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link className="font-bold" href="#">
              Terms of Use
            </Link>
            <span>|</span>
            <Link className="font-bold" href="#">
              Site Map
            </Link>
          </div>
          <div className="flex justify-center space-x-6 mb-3 text-xl text-primary">
            <Link className="font-bold" href="#">
              <FaFacebookF />
            </Link>
            <Link className="font-bold" href="#">
              <FaXTwitter />
            </Link>
            <Link className="font-bold" href="#">
              <FaInstagram />
            </Link>
            <Link className="font-bold" href="#">
              <FaYoutube />
            </Link>
          </div>
          <p className="py-3 text-sm font-bold">
            Empowering Lives. Redefining Healthcare.
          </p>
          <div className="border-t border-gray-200 py-6 text-center text-sm font-bold text-dark bg-[#feeef8]">
            <p className="">
              Copyright © 2025 SP Medifort All Rights Reserved. Designed &
              Maintained by{" "}
              <Link href="https://www.healthus.ai/" target="_blank">
                Healthus.AI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
