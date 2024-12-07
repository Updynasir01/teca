import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ServProducts  (){

  return (
    <>
     <Header/>
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 p-6 ">
          {/* Degital */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">          
              <img className="rounded-t-lg w-full h-48 object-cover"src="https://img.freepik.com/premium-photo/digital-marketing-strategy-concept-with-seo-email-blog-viral-video-icons_1297820-3586.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid"alt="Customer Testimonials" />

            <div className="p-4"> 
              <h3 className="text-2xl font-semibold mb-2">Digital Marketing:  </h3> 
            <p className="text-gray-600 mb-4">  Utilizing online platforms for advertising, including social media marketing, email marketing, and content marketing.</p> <a href="Premier"className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Get </a>
            </div>
          </div>

          {/* Social media*/}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">           
             <img className="rounded-t-lg w-full h-48 object-cover" src="https://img.freepik.com/free-vector/circular-influencer-marketing-vector_23-2147698406.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid" alt="Digital marketing"/>

            <div className="p-4"> <h3 className="text-2xl font-semibold mb-2"> Social Media Advertising:</h3> 
            <p className="text-gray-600 mb-4"> Creating targeted ads on platforms like Facebook, Instagram, Twitter,and Linkedin.</p> <a href="/Sombank"className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Get</a>
            </div>
          </div>

          {/* Creative Development*/}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src="https://img.freepik.com/premium-photo/wooden-create-letters-with-digital-paint-splatters-workshop-background_1143378-13756.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid" alt="FAQs"/>
            <div className="p-4"> 
              <h3 className="text-2xl font-semibold mb-2">Creative Development</h3> 
            <p className="text-gray-600 mb-4">  Designing eye-catching ads, including graphics, copywriting, and multimedia content. </p> <a href="/Amal" className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >Get</a>
            </div>
          </div>

          {/* Public Relations */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover"  src="https://img.freepik.com/premium-photo/marketing-strategy-business-composition-megaphone-with-human-characters-like-pictograms-illustration_968529-276773.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid" alt="Contact Us"
            />
            <div className="p-4">
               <h3 className="text-2xl font-semibold mb-2">Public Relations</h3> 
            <p className="text-gray-600 mb-4">  Managing communications and relationships with the media to enhance brand reputation. </p> <a  href="#"  className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >Get</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover"  src="https://img.freepik.com/premium-photo/coffee-white-cup-wrist-watch-calculator-black-table-nearby-is-pen-notebook-with-text-e-mail-marketing_380694-4061.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid" alt="Contact Us"
            />
            <div className="p-4">
               <h3 className="text-2xl font-semibold mb-2">Email Marketing:</h3> 
               <p className="text-gray-600 mb-4"> Designing and managing email campaigns to nurture leads and retain customers. </p> <a  href="#"  className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >Get</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover"  src="https://img.freepik.com/free-vector/call-center-assistant-helping-customers_23-2148192098.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid" alt="Contact Us"
            />
            <div className="p-4"> 
              <h3 className="text-2xl font-semibold mb-2">Consultation Service</h3> 
            <p className="text-gray-600 mb-4">  Assessing client needs and developing tailored advertising strategies. </p> 
            <a  href="#"  className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >Get</a>
            </div> 
          </div>

         
      
          </div>

    <Footer/>
    </>
  );
};

export default ServProducts;
