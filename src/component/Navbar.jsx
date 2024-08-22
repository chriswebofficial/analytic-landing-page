// this the nave bar section 
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Ins<span className="text-white font-sans ">igh</span>tix </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <CiMenuBurger size={20} /> : <CiMenuBurger size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-full border-r border-gray-700 bg-gray-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">Company</li>
          <li className="p-4 border-b border-gray-400">Resources</li>
          <li className="p-4 border-b border-gray-400">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;