"use client";

import { useState } from "react";
import Link from "next/link";
import layoutA from "@/data/services/layoutA";
import layoutB from "@/data/services/layoutB";
import { FaSearch, FaCogs } from "react-icons/fa"; // fallback icon

const allServices = [
  ...Object.entries(layoutA).map(([slug, data]) => ({
    slug,
    label: data?.label,
    icon: data?.icon,
  })),
  ...Object.entries(layoutB).map(([slug, data]) => ({
    slug,
    label: data?.label,
    icon: data?.icon,
  })),
];

export default function AllServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = allServices.filter(service =>
    service.label?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
          Our Services
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center w-full max-w-xl rounded-full border-2 border-primary px-4 py-2 bg-white shadow-sm">
            <FaSearch className="text-primary text-lg mr-3" />
            <input
              type="text"
              placeholder="Search for Service"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-primary placeholder:text-primary font-medium text-base bg-transparent"
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filteredServices.map(({ slug, label, icon: Icon }) => (
            <Link key={slug} href={`/services/${slug}`}>
              <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shrink-0">
                  {Icon ? <Icon /> : <FaCogs />}
                </div>
                <div className="text-lg font-semibold text-black">{label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
