import React from 'react';
import Header from './Header';
import img from '../assets/WhyChooseUs.png';
import Footer from './Footer';

function WhyChooseUs  ()  {
  return (
  <>
  <Header/>
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
  
        <div className="w-full lg:w-1/2 mb-8  lg:mb-0">
          <img src={img}alt="Technology illustration"className="w-full " />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-8">
          <h2 className="text-lg text-blue-600 font-semibold mb-2">WHY CHOOSE US</h2>
          <h1 className="text-4xl font-bold mb-4">  Why Our Customers Choose{' '}
            <span className="text-blue-500 underline">Working</span> With Us
          </h1>
          <p className="text-gray-500 mb-8">
          Choosing an advertising agency can provide expert guidance in creating impactful campaigns, leveraging their
           specialized skills in branding, media strategy, and audience targeting to
            boost your brand’s visibility and drive growth efficiently.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl font-bold mr-4">01.</div>
              <div>
                <h3 className="text-xl font-semibold">Digital Marketing</h3>
                <p className="text-gray-500">
                Utilizing online platforms for advertising, including 
                social media marketing, email marketing, and content marketing
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-500 text-2xl font-bold mr-4">02.</div>
              <div>
                <h3 className="text-xl font-semibold">Social Media Advertising</h3>
                <p className="text-gray-500">
                Creating targeted ads on platforms like Facebook, Instagram, Twitter,and Linkedin.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-500 text-2xl font-bold mr-4">03.</div>
              <div>
                <h3 className="text-xl font-semibold">Creative Development</h3>
                <p className="text-gray-500">
                Designing eye-catching ads, including graphics, copywriting, and multimedia content.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default WhyChooseUs;
