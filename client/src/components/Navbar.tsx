import { useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6">



      <div className="max-w-6xl mx-auto h-22 flex items-center justify-between">


        <div className="flex items-center gap-3">

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >

            <MdOutlineMenu />
          </button>
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-28 sm:w-32 md:w-40 object-contain"
            />

          </div></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">

          <p className="cursor-pointer hover:text-[#013376] text-zinc-600 flex gap-0.5">Jobs
            <BiSolidDownArrow className="text-xs" />

          </p>

          <p className="cursor-pointer hover:text-[#013376] text-zinc-600 flex gap-0.5 ">Internships
            <BiSolidDownArrow className="text-xs" />

          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-6">

          <div className=" flex items-center relative justify-between w-full ">
            <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-xl pl-8 py-1 w-32 sm:w-44 md:w-60 outline-none"

            />

          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex  gap-4 border-r border-l px-4 border-gray-300">
            <button className="text-[#013376] px-4 py-1 rounded-lg border border-[#013376] hover:bg-blue-50">
              Login
            </button>
            <button className="bg-[#013376] text-white px-4 py-1 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
          <button className="hidden md:flex items-center text-[#013376] text-sm whitespace-nowrap cursor-pointer hover:text-blue-700">

            Register as Employer
            <IoIosArrowForward className="inline-block  " />
          </button>




        </div>

        {/* Hamburger (Mobile) */}


        {/* Mobile Menu */}
        {open && (
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-4 md:hidden z-50">


            <div className="flex flex-col gap-4">
              <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Internships</p>
              <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Jobs</p>
              <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Contact Us</p>

            </div>

            <div className=" w-full border-b  mt-6 mb-6 border-gray-300 ">

            </div>

            <div className="flex gap-4 flex-col items-start justify-be">
              <button className=" text-zinc-700  cursor-pointer  ">
                Register as Employer
              </button>
              <button className=" text-zinc-700 cursor-pointer ">
                Register as Student
              </button>
              <button className=" text-zinc-700  cursor-pointer">
                Login
              </button>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
