import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/Logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-white via-blue-400 to-red-500 p-4 justify-between items-center text-white font-semibold px-8 py-2">
        <div className="container mx-auto flex items-center justify-between">

          <Link to="/">
            <div>
              <img className="w-20" src={img} alt="Logo" />
            </div>
          </Link>
          <ul
            className={`hidden space-x-6 md:flex md:items-center gap-8 absolute md:static md:opacity-100 transition-all duration-300 ${
              menuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px]"
            } left-0 w-full md:w-auto`}>
            <Link to="/" >
              <li onClick={() => setMenuOpen(false)} className="py-2 md:py-0 md:px-0 px-6 hover:text-black">Home</li>
            </Link>
            <Link to="/ServiceProduct">
              <li onClick={() => setMenuOpen(false)} className="py-2 md:py-0 md:px-0 px-6 hover:text-black">Service</li>
           </Link>
            <Link to="/WhyChooseUs" >
              <li onClick={() => setMenuOpen(false)} className="py-2 md:py-0 md:px-0 px-6 hover:text-black">Why Choose Us</li>
            </Link>
            <Link to="/FAQ"> <li className="hover:text-black cursor-pointer">Help & FAQs</li></Link> 

          </ul>

          {/* Hamburger Icon */}
          <i
            className="fa-solid fa-bars text-3xl cursor-pointer mx-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link to="/Sing In">
              <button className="bg-blue-900 rounded-lg px-6 py-2 hover:bg-blue-400">Request</button>
            </Link>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
