'use client';

import React, { useState } from 'react';
import doctorList from '@/data/doctorList';
import { FaSearch } from 'react-icons/fa';
import Breadcrumb from '@/components/shared/Breadcrumb';

const departments = [
  'Orthopedics', 'Pediatric Orthopedics', 'Spine Surgery', 'Plastic Surgery',
  'Internal Medicine', 'Cardiology', 'Dermatology', 'Pediatrics', 'Family Medicine',
  'ENT', 'Neurosciences', 'General Surgery', 'Robotic & Laparoscopic General Surgery',
  'Urology', 'Oncology', 'Emergency Medicine', 'Anesthesia', 'Critical Care',
  'ICU', 'Pediatric Surgery', 'Physiotherapy', 'Endocrinology', 'Radiology',
  'Nephrology', 'Laryngology', 'Respiratory Medicine'
];

export default function FindADoctor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleDepartmentChange = (dept) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedDepartments([]);
    setSortBy('name');
  };

  const filteredDoctors = doctorList
    .filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(doc.department);

      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) =>
      sortBy === 'name'
        ? a.name.localeCompare(b.name)
        : a.department.localeCompare(b.department)
    );

  return (
    <section className="bg-white pb-20">
      {/* Top Banner with Breadcrumb */}
      <div className="bg-primary text-white p-6 relative">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb textColor="text-white" borderColor="border-white" />
          <h1 className="text-4xl font-bold mb-2">Find a Doctor</h1>
        </div>

        {/* Floating Search Bar */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your Expert at SP Medifort Hospital..."
              className="w-full border rounded-full px-6 py-4 shadow-xl focus:outline-none text-black"
            />
            <FaSearch className="absolute right-5 top-4 text-black" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="border rounded-xl p-4 shadow space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-red-500 underline"
                >
                  Clear
                </button>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Sort by</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy('name')}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      sortBy === 'name' ? 'bg-primary text-white' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </button>
                  <button
                    onClick={() => setSortBy('department')}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      sortBy === 'department' ? 'bg-primary text-white' : 'text-gray-700'
                    }`}
                  >
                    Department
                  </button>
                </div>
              </div>

              <hr className="my-2" />

              <div>
                <h3 className="text-sm font-semibold mb-2">Departments</h3>
                <ul className="space-y-2 text-sm text-gray-700 max-h-60 overflow-y-auto">
                  {departments.map((dept, idx) => (
                    <li key={idx}>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedDepartments.includes(dept)}
                          onChange={() => handleDepartmentChange(dept)}
                          className="mr-2"
                        />
                        {dept}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Doctor Cards */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredDoctors.map((doc, index) => (
              <div
  key={index}
  className="w-full max-w-[220px] mx-auto border border-primary rounded-xl p-4 shadow-md text-center hover:shadow-lg transition"
>
  <img
    src="/images/doctors-card/rohit.png"
    alt={doc.name}
    className="w-36 h-48 mx-auto object-cover mb-4 border-primary border-2 rounded-xl"
  />
  <h3 className="text-lg font-bold text-primary text-left">{doc.name}</h3>
  <p className="text-sm text-black-700 text-left">{doc.position}</p>
  <p className="text-sm text-black-600 italic text-left">{doc.department}</p>
  <button className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-full shadow hover:bg-opacity-90">
    Book Consultation
  </button>
</div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 text-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="inline-block w-8 h-8 rounded-full border text-primary border-primary hover:bg-primary hover:text-white transition"
            >
              {page}
            </button>
          ))}
        </div>

        {/* Help CTA */}
        <div className="mt-12 p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between bg-primary text-white">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img
              src="/doctor-woman.png"
              alt="Support Doctor"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">
                Need help choosing the right specialist?
              </h4>
              <ul className="text-sm mt-2 space-y-1">
                <li>📞 Call our Helpline: +91-XXXXXXXXXX</li>
                <li>📤 Upload Reports for Prior Review</li>
                <li>💬 Chat with Care Coordinator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
