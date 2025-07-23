import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // npm install lucide-react

const faqs = [
  {
    question: "Will I receive life-changing treatment at SP Medifort?",
    answer: "Absolutely.At SP Medifort, we provide advanced, personalized treatments designed to make a real difference in your life and health.",
  },
  {
    question: "Is SP Medifort equipped well?",
    answer:
      "Absolutely. From robot surgery to AI diagnostics, we have some of South Kerala's most advanced medical technology.",
  },
  {
    question: "Will I be looked after while I'm here?",
    answer: "Yes, you’ll be well looked after.Our team is here to ensure your comfort, safety, and care throughout your stay.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-pink-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Find answers to common questions about our services, treatments,
          appointments, and patient care options to help you make informed
          health decisions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 ${
                openIndex === index && faq.answer ? "shadow-lg" : ""
              }`}
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-purple-900 font-semibold text-base">
                  {faq.question}
                </h3>
                <span className="bg-pink-200 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center">
                  {openIndex === index && faq.answer ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-4 text-sm text-gray-800 leading-relaxed">
                  {faq.answer.split("advanced medical technology").map((part, i, arr) =>
                    i === arr.length - 1 ? (
                      part
                    ) : (
                      <>
                        {part}
                        <a
                          href="#"
                          className="text-blue-700 underline font-medium"
                        >
                          advanced medical technology
                        </a>
                      </>
                    )
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <a
            href="#"
            className="text-sm font-bold text-purple-900 hover:underline flex items-center justify-end gap-1"
          >
            More FAQs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
