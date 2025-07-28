import React from 'react';
import { MapPin, Share2 } from 'lucide-react'; 

const HospitalLocation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Hospital Location</h2>

        <div className="border border-pink-300 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start">
         
          <div className="md:w-1/3 w-full rounded-lg overflow-hidden">
            <img
              src="/images/contact/hospitalocation.jpg" 
              alt="Hospital Interior"
              className="w-full h-full object-cover"
            />
          </div>

       
          <div className="flex-1 relative space-y-2">
        
            <div className="absolute top-0 right-0">
              <Share2 size={20} className="text-gray-600 cursor-pointer" />
            </div>

          
            <h3 className="text-lg font-bold text-[#003554]">
              SP Medifort Hospital (Flagship Campus)
            </h3>
            <p className="flex items-center text-sm text-gray-700 ">
               <img
              src="/images/contact/map.svg" 
              alt="Hospital Interior"
              className="w-3 mr-2 object-cover"
            />
              Eanchakkal, Thiruvananthapuram – 695008, Kerala, India
            </p>

     
             <p className="flex items-center text-sm text-gray-700 font-bold">
              <img
              src="/images/contact/location.svg" 
              alt="Hospital Interior"
              className="w-4 mr-2 object-cover"
            />
              [View on Google Maps]

            </p>
            {/* Additional info */}
            <p className="text-lg text-[#002D39A8] pt-2">
              Ample multi-level covered parking available <br />
              Easily accessible from the city centre, the airport, and the railway station
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalLocation;
