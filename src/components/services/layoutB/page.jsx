import React from "react";

const LayoutB = ({ data }) => {
  return (
    <div className="font-roboto text-gray-900">
      {/* Breadcrumb */}
      {data?.hero?.breadcrumb && (
        <div className="bg-[#f0dff4] text-sm px-4 py-2 text-purple-800">
          {data.hero.breadcrumb}
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#f5e8f5] py-10 px-4 md:px-20 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {data.hero?.title}
        </h1>
        <p className="text-lg md:text-xl text-purple-700">
          {data.hero?.tagline}
        </p>
      </section>

      {/* Overview */}
      {data.overview && (
        <section className="py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            {data.overview.heading}
          </h2>
          <p className="text-gray-700">{data.overview.description}</p>
        </section>
      )}

      {/* What We Offer */}
      {data.whatWeOffer?.length > 0 && (
        <section className="bg-purple-50 py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            What the Service Includes
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {data.whatWeOffer.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Who Performs */}
      {data.team?.length > 0 && (
        <section className="py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            Who Performs the Service?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {data.team.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Technology */}
      {data.technologies?.length > 0 && (
        <section className="bg-purple-50 py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            Technology & Infrastructure
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {data.technologies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* When to Use */}
      {data.whenToUse?.length > 0 && (
        <section className="py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            When Should You Use This Service?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {data.whenToUse.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Why Choose */}
      {data.whyChoose?.length > 0 && (
        <section className="bg-purple-50 py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            Why Choose SP Medifort?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {data.whyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Patient Experience */}
      {data.successStories?.length > 0 && (
        <section className="py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            Patient Experience
          </h2>
          <div className="space-y-6">
            {data.successStories.map((story, idx) => (
              <div key={idx} className="bg-purple-100 p-4 rounded-lg">
                <p className="italic mb-2">“{story.content}”</p>
                <span className="text-sm font-semibold text-purple-700">
                  — {story.author}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs?.length > 0 && (
        <section className="bg-purple-50 py-10 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {data.faqs.map((faq, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-purple-700 mb-1">
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Appointment CTA */}
      {data.appointmentSection && (
        <section className="text-center bg-[#f5e8f5] py-12 px-4 md:px-20">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            {data.appointmentSection.heading}
          </h2>
          <p className="mb-2 text-gray-700">
            {data.appointmentSection.description}
          </p>
          <p className="font-semibold text-purple-900 mb-6">
            {data.appointmentSection.callToAction}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.appointmentSection.buttons.map((btn, idx) => (
              <button
                key={idx}
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
              >
                {btn}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LayoutB;
