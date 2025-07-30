import Image from "next/image";
import { MdLocationOn, MdPhone, MdComputer } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#72005F] to-[#9A007D]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 ">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-2xl font-bold mb-2">Post A Medical Query:</h2>
          <p className="mb-6">Post A Question, And We Will Get Back To You Soon.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name:"
              className="w-full px-4 py-2 rounded-full text-black placeholder-black focus:outline-none"
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Mobile:"
                className="w-1/2 px-4 py-2 rounded-full text-black placeholder-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email:"
                className="w-1/2 px-4 py-2 rounded-full text-black  placeholder-black focus:outline-none"
              />
            </div>

            <select className="w-full px-4 py-2 rounded-full text-black focus:outline-none">
              <option>Select Treatment:</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopaedics</option>
              <option>Oncology</option>
            </select>

            <textarea
              placeholder="Your Message Here:"
              rows="4"
              className="w-full px-4 py-2 rounded-lg text-black  placeholder-black focus:outline-none"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm">
                I Agree To The T&C And Privacy Policy And I Am Giving My Consent
                To Receive Updates Through SMS/Email.
              </label>
            </div>

            <button
              type="submit"
              className="bg-white text-[#72005F] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Submit Now!
            </button>
          </form>
        </div>

        {/* Image + Info Cards */}
        <div className="w-full lg:w-full relative">
          <div className="w-full h-full relative overflow-visible">
            <Image
              src="/images/Homepage/img12.png"
              alt="Doctors"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-20 right-0 space-y-4 pr-2 mt-[12rem] hidden sm:block">
  {/* Card 1 */}
  <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
    <div className="bg-primary p-2 rounded-full text-white text-lg">
      <MdLocationOn />
    </div>
    <p className="text-sm">
      <span className="font-bold text-[#72005F]">Visit Us:</span> Reach
      Our Thiruvananthapuram Campus With Ease Using Online Directions
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
    <div className="bg-[#72005F] p-2 rounded-full text-white text-lg">
      <MdPhone />
    </div>
    <p className="text-sm">
      <span className="font-bold text-[#72005F]">Emergency 24x7:</span>{" "}
      Reach Us On Our Emergency Helpline: +91-0471 3100 100
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
    <div className="bg-[#72005F] p-2 rounded-full text-white text-lg">
      <MdComputer />
    </div>
    <p className="text-sm">
      <span className="font-bold text-[#72005F]">Online Consultation:</span>{" "}
      Talk To Our Doctors From Where You Sit
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
