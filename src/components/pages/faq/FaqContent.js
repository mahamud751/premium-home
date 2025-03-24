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
    <section className="our-faq pt-0 bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories - 30% Width */}
        <div className="w-full md:w-3/10 bg-[#046C4E] text-white p-6 rounded-xl shadow-lg flex-shrink-0">
          <h2 className="text-xl font-bold mb-6">Categories</h2>
          <ul className="space-y-3">
            {Object.keys(faqData).map((category) => (
              <li
                key={category}
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-teal-800 font-semibold shadow-md"
                    : "hover:bg-teal-700"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Reset accordion when switching categories
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Content - 70% Width */}
        <div className="w-full md:w-7/10 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-grow">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-800">
            {activeCategory}
          </h2>
          <div className="space-y-4">
            {faqData[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <div
                  className="w-full cursor-pointer text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center font-medium text-gray-800 focus:outline-none"
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
