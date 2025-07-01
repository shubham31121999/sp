'use client';
import React from 'react';
import { Icon } from '@iconify/react';

function ComprehensiveServices({ comprehensiveCare }) {
  if (!comprehensiveCare) return null;

  const { title, subtitle, description, items } = comprehensiveCare;

  return (
    <section className="bg-white py-12 px-6 border-y border-primary">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-left">
          <h2 className="text-3xl font-mercurial font-light text-primary">{title}</h2>
          <p className="text-xl font-semibold text-accent mt-2">{subtitle}</p>
          <p className="text-base text-left text-gray-700 mt-4  mx-auto">{description}</p>
        </div>

        {/* Slider */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-[1000px] sm:min-w-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon icon={item.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveServices;
