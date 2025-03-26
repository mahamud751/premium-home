"use client";

import { useState } from "react";

const faqData = {
  "General FAQ": [
    {
      question: "What is Sharikana?",
      answer:
        "Sharikana is a market hub where you can invest in Venture projects & Commercial assets fractionally.",
    },
    {
      question: "What does Sharikana do?",
      answer:
        "Sharikana allows users to invest in various projects securely and efficiently.",
    },
    {
      question: "How does Sharikana work?",
      answer:
        "It connects investors with lucrative investment opportunities with transparency.",
    },
  ],
  "Project Investment FAQ": [
    {
      question: "How do I invest in a project?",
      answer:
        "You can browse projects and invest directly through our platform.",
    },
    {
      question: "What are the risks involved?",
      answer:
        "All investments carry risks. We provide detailed reports to help you make informed decisions.",
    },
  ],
  "Co-ownership FAQ": [
    {
      question: "How does co-ownership work?",
      answer:
        "Multiple investors can own a fraction of an asset and share profits accordingly.",
    },
    {
      question: "What legal documents are required?",
      answer:
        "Proper agreements and legal documents ensure smooth co-ownership transitions.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="our-faq pt-0 py-12 md:px-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="w-full md:w-1/4 bg-[#046C4E] text-white p-3 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold md:mb-6 text-white">Categories</h2>
          <ul className="space-y-3">
            {Object.keys(faqData).map((category) => (
              <li
                key={category}
                className={`md:p-3 p-2 cursor-pointer rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-teal-800 font-semibold shadow-md"
                    : "hover:bg-teal-700"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Content */}
        <div className="w-full md:w-3/4 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold    text-teal-800">
            {activeCategory}
          </h2>
          <div className="space-y-4">
            {faqData[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div
                  className="w-full cursor-pointer text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center font-medium text-gray-800"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="p-4 bg-white text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
