'use client'
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const coreValues = [
  {
    title: 'Compassion',
    description: 'We treat every patient like family',
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards of care',
  },
  {
    title: 'Innovation',
    description: 'We embrace change to improve healthcare',
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and transparency',
  },
  {
    title: 'Respect',
    description: 'We value everyone’s dignity and voice',
  },
];

const CoreValuesAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
   <>
     <div className="max-w-4xl mx-auto py-16 px-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#870064] mb-6">
        Our Core Values
      </h2>

      <div className="space-y-3">
        {coreValues.map((item, index) => (
          <div
            key={index}
             data-aos="fade-up"
             data-aos-delay={index * 200}
            className={`border border-[#870064] rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? 'bg-white shadow-xl' : 'bg-white shadow-xl'
            }`}
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#000] ">
                  0{index + 1}. {item.title}
                </p>
                {activeIndex === index && (
                  <p className="text-sm text-[#002D39] mt-3 font-medium duration-700">{item.description}</p>
                )}
              </div>
              <div className="text-[#870064]">
                {activeIndex === index ? <Minus className='border-2 border-[#870064] rounded-2xl'/> : <Plus className='border-2 border-[#870064] rounded-2xl' />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default CoreValuesAccordion