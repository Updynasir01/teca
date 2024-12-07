import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function FAQ  () {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does your advertising agency offer?",
      answer: "We provide a range of services, including digital marketing, social media management, graphic design, content creation, and advertising strategy development."
    },
    {
      question: "How can I contact your agency?",
      answer: "You can reach us through our contact form on the website, via email at [your email], or by calling us at [your phone number]."
    },
    {
      question: "How do I start a project with your agency?",
      answer: "To start a project, please fill out our project inquiry form, and one of our team members will get back to you shortly to discuss your needs."
    },
    {
      question: "What information do I need to provide when starting a project?",
      answer: "Please provide details about your business, target audience, project goals, and any specific services you’re interested in."
    },
    {
      question: "How is pricing determined for your services?",
      answer: "Pricing varies depending on the scope of the project and the services requested. We provide customized quotes after assessing your specific needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms."
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <>
  <Header/>
    <div className="max-w-3xl my-8 mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Help & FAQ</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-semibold">{faq.question}</h3>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-100 rounded-lg mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
