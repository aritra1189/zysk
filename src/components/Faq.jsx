import React, { useState } from "react";
import ava1 from '../assets/avator1.jpg'
import ava2 from '../assets/avator2.jpg'
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can switch between plans anytime from your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel anytime. If you cancel within the first 30 days, you’ll receive a full refund.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional billing details during the payment process.",
    },
    {
      question: "How does billing work?",
      answer: "We bill annually or monthly depending on the plan you choose. Billing details are available in your account.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email from the profile settings in your account dashboard.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-9xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-3 text-lg">
        Everything you need to know about the product and billing.
      </p>

      {/* FAQ Items */}
      <div className="mt-10 mx-auto max-w-5xl">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-gray-900 font-medium text-xl"
            >
              {faq.question}
              <span className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-3 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions? Section */}
      <div className="mt-16 bg-gray-100 p-10 rounded-lg flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src={ava1}
            alt="Team Member"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={ava2}
            alt="Team Member"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={ava1}
            alt="Team Member"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Text */}
        <h3 className="text-2xl font-semibold mt-4">Still have questions?</h3>
        <p className="text-gray-600 mt-2 text-lg">
          Can’t find the answer you’re looking for? Please chat with our friendly team.
        </p>

        {/* Button */}
        <button className="mt-5 px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-medium hover:bg-red-600 transition">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Faq;


