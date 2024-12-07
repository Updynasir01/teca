
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#8B75A5] text-white sm:py-10 ">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pt-4">
        
//         <div>
//           <h3 className="text-lg font-bold mb-4">Advertising Service</h3>
//           <ul className="space-y-2 ">
//           <Link to="/FAQ"> <li className="hover:text-blue-400 cursor-pointer">Help & FAQs</li></Link> 
//             <li className="hover:text-blue-400 cursor-pointer">Returns & Exchanges</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li className="hover:text-blue-400 cursor-pointer">Services</li>
//             <li className="hover:text-blue-400 cursor-pointer">Special Offers</li>
//             <li className="hover:text-blue-400 cursor-pointer">Gift Cards</li>
//             <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
//           <p className="mb-4">Sign up for our newsletter to receive updates on new products and exclusive offers:</p>
//           <form className="flex space-x-2">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
//             />
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Subscribe
//             </button>
//           </form>
//           <div className="mt-6 flex space-x-4">
//             <i className="fa-brands fa-facebook text-blue-600 hover:text-blue-400"></i>
//             <i className="fa-brands fa-twitter text-blue-600 hover:text-blue-400"></i>
//             <i className="fa-brands fa-instagram text-blue-600 hover:text-blue-400"></i>
//             <i className="fa-brands fa-linkedin text-blue-600 hover:text-blue-400"></i>
//             <i className="fa-brands fa-whatsapp text-blue-600 hover:text-blue-400"></i>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-gray-500">
//         <p>© 2024 Your E-Commerce Store. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer  ()  {
  return (
    <footer className="bg-[#A36589] text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Advertising Agency</h3>
            <p className="text-sm">Your partner in effective advertising solutions.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Advertising Agency. All rights reserved.</p>
        </div>
        <div className="mt-2 text-center">
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
