import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/Logo.png';

function Header() {
  const [open ,setopen]=useState(false)
  const handleopen = () =>{
      setopen(true)
  }
  const handleclose =()=>{
      setopen(false)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-white via-blue-400 to-red-500 p-4 justify-between items-center text-white font-semibold px-8 py-2">
        <div className="container mx-auto flex items-center justify-between">

          <Link to="/">
            <div>
              <img className="w-20" src={img} alt="Logo" />
            </div>
          </Link>

<div>
<ul style={{display : open == true ? "block" :"" }}  className="hidden sm:bg-none mt-4 sm:mt-0 sm:text-white bg-gradient-to-r from-white via-blue-400 to-red-500 h-[120px] text-red-400 sm:gap-8 spac md:flex md:items-center   absolute md:static md:opacity-100 transition-all duration-300 left-0 w-full md:w-auto">
          {/* ${
               "opacity-100 top-16" : "opacity-0 top-[-400px]"
            }  */}
            <Link to="/" >
              <li onClick={() => setMenuOpen(false)} className=" md:py-0 md:px-0 px-6 hover:text-black">Home</li>
            </Link>
            <Link to="/ServiceProduct">
              <li onClick={() => setMenuOpen(false)} className=" md:py-0 md:px-0 px-6 hover:text-black">Service</li>
           </Link>
            <Link to="/WhyChooseUs" >
              <li onClick={() => setMenuOpen(false)} className=" md:py-0 md:px-0 px-6 hover:text-black">Why Choose Us</li>
            </Link>
            <Link to="/FAQ"> <li className="  hover:text-black md:px-0 ml-6 cursor-pointer">Help & FAQs</li></Link> 

          </ul>

</div>
          

          {/* Hamburger Icon */}
          <i
            className="fa-solid fa-bars text-3xl cursor-pointer mx-2 md:hidden"
            onClick={handleopen} style={{display :open == true ?"none" :""}}
          ></i>
          <i onClick={handleclose}  style={{display :open == false ?"none" :""}}  class="fa-solid fa-xmark text-3xl cursor-pointer mx-2 md:hidden    "></i>

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
