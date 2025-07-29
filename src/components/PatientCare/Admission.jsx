import Image from "next/image";

const data = {
  whyChoose: [
    "Admissions are based on the consultant’s recommendation",
    "Room category and facilities are explained before admission",
    "Final bill settlement, discharge summary, and medication instructions are provided at the time of discharge",
    "A nurse educator explains post-discharge care to the family",
  ],
};

const Admission = () => {
  return (
    <>
      {data.whyChoose?.length > 0 && (
        <section className="py-12 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
            <div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#870064] leading-[50px] mb-8">
               Admission & Discharge Process
              </h2>
              <ul className="space-y-4">
                {data.whyChoose.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-center items-center gap-5 text-base md:text-lg text-black leading-relaxed"
                  >
                    <Image
                      src="/images/patient/group.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <span className="text-2xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto ">
                <img
                  src="/images/patient/Medical-Records(why-choose).jpg"
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Admission;
