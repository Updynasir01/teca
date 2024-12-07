// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setSubmitted(true); // Set submitted state to true to trigger navigation
//   };

//   // If the form has been submitted, navigate to the home page
//   if (submitted) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="flex flex-col md:flex-row p-8 bg-gray-100">
//       {/* Left Section */}
//       <div className="md:w-1/2 p-8 bg-blue-900 text-white rounded-lg">
//         <h3 className="text-xl font-semibold">Prefer to call?</h3>
//         <p className="text-3xl font-bold my-4">888.598.4449</p>
//         <p className="mb-6">
//           Feel confident in the process and proud of the results. See why 1000’s
//           of businesses have trusted HigherVisibility since 2009. Our digital
//           consultants are ready to discuss your needs.
//         </p>
//         <div className="flex space-x-2">
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold">
//           Request Your FREE <span className="text-red-500">Proposal</span>
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Complete the form and get strategic insights, our plan of action, and pricing options.
//         </p>

//         {/* Form */}
//         <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="relative">
//               <label htmlFor="email" className="sr-only">Email Address *</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email Address *"
//                 className="p-2 border border-gray-300 rounded w-full"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <label htmlFor="firstName" className="sr-only">First Name *</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 placeholder="First Name *"
//                 className="p-2 border border-gray-300 rounded w-full"
//                 required
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="relative">
//               <label htmlFor="lastName" className="sr-only">Last Name *</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 placeholder="Last Name *"
//                 className="p-2 border border-gray-300 rounded w-full"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <label htmlFor="company" className="sr-only">Company *</label>
//               <input
//                 type="text"
//                 id="company"
//                 placeholder="Company *"
//                 className="p-2 border border-gray-300 rounded w-full"
//                 required
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="relative">
//               <label htmlFor="phone" className="sr-only">Phone Number *</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="Phone Number *"
//                 className="p-2 border border-gray-300 rounded w-full"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <label htmlFor="website" className="sr-only">Website URL</label>
//               <input
//                 type="url"
//                 id="website"
//                 placeholder="Website URL"
//                 className="p-2 border border-gray-300 rounded w-full"
//               />
//             </div>
//           </div>

//           {/* Services */}
//           <div className="mt-4">
//             <p className="font-semibold text-gray-700">What Services are you Interested in?</p>
//             <div className="flex flex-wrap space-x-4 mt-2">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 SEO
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 PPC
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Paid Social
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Link Building
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Web Design
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 CRO
//               </label>
//             </div>
//           </div>

//           {/* Monthly Budget */}
//           <div className="mt-4">
//             <label htmlFor="budget" className="font-semibold text-gray-700">
//               What is your Estimated Monthly Budget?
//             </label>
//             <select
//               id="budget"
//               className="p-2 border border-gray-300 rounded w-full mt-2"
//               required
//             >
//               <option value="">Select a budget</option>
//               <option value="Less than $1,000">Less than $1,000</option>
//               <option value="$1,000 - $5,000">$1,000 - $5,000</option>
//               <option value="$5,000 - $10,000">$5,000 - $10,000</option>
//               <option value="$10,000 - $20,000">$10,000 - $20,000</option>
//               <option value="More than $20,000">More than $20,000</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md mt-6 hover:bg-blue-600"
//           >
//             Submit Proposal Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function ContactForm ()  {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true); // Set submitted state to true to trigger navigation
  };

  // If the form has been submitted, navigate to the home page
  if (submitted) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col md:flex-row p-8 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 p-8 bg-blue-900 text-white rounded-lg">
        <h3 className="text-xl font-semibold">Prefer to call?</h3>
        <p className="text-3xl font-bold my-4">888.598.4449</p>
        <p className="mb-6">
          Feel confident in the process and proud of the results. See why 1000’s
          of businesses have trusted HigherVisibility since 2009. Our digital
          consultants are ready to discuss your needs.
        </p>
        <div className="flex space-x-2">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">
          Request Your FREE <span className="text-red-500">Proposal</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Complete the form and get strategic insights, our plan of action, and pricing options.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email Address *</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address *"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="firstName" className="sr-only">First Name *</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name *"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="lastName" className="sr-only">Last Name *</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name *"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="company" className="sr-only">Company *</label>
              <input
                type="text"
                id="company"
                placeholder="Company *"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="phone" className="sr-only">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number *"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="website" className="sr-only">Website URL</label>
              <input
                type="url"
                id="website"
                placeholder="Website URL"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mt-4">
            <p className="font-semibold text-gray-700">What Services are you Interested in?</p>
            <div className="flex flex-wrap space-x-4 mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> SEO</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" />PPC </label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Paid Social</label>
              <label className="flex items-center"> <input type="checkbox" className="mr-2" /> Link Building</label>
              <label className="flex items-center"> <input type="checkbox" className="mr-2" /> Web Design</label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> CRO</label>
            </div>
          </div>

          <div className="mt-4">
            <select id="budget" className="p-2 border border-gray-300 rounded w-full mt-2" required > 
            <option value=""> What is your Estimated Monthly Budget?</option>
              <option value="Less than $1,000">Less than $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $20,000">$10,000 - $20,000</option>
              <option value="More than $20,000">More than $20,000</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-6 hover:bg-blue-600" >Submit Proposal Request </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
