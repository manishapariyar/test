import { useState } from "react";
import logo from "../../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-white shadow-md flex items-center px-6">
      <div className="w-[80%] mx-auto flex items-center">
        <div className="flex gap-3">
          <button
            className="md:hidden text-2xl mt-5"
            onClick={() => setOpen(!open)}
          >
            <MdOutlineMenu />
          </button>
          {/* Logo */}
          <div className="flex items-center mr-4">
            <img src={logo} alt="Logo" className="w-34 md:w-40 ml-8 " />
          </div></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm ml-20">
          <p className="cursor-pointer hover:text-blue-600 text-zinc-600 flex gap-0.5">Jobs
            <BiSolidDownArrow className="mt-1 text-sm" />
          </p>

          <p className="cursor-pointer hover:text-blue-600 text-zinc-600 flex gap-0.5 ">Internships
            <BiSolidDownArrow className="mt-1 text-sm" />
          </p>
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="flex items-center gap-4">
          <div className=" ml-40 flex items-center relative justify-bewteen  ">
            <CiSearch className="absolute  mt-2 text-gray-400 text-xl m-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-xl pl-7 py-1 outline-none  text-l mt-1 "
            />
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex  gap-4 border-r border-l px-4 border-gray-300">
            <button className="text-blue-500 px-4 py-1 rounded-lg border border-blue-500 hover:bg-blue-50">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
          <button className=" hidden md:block text-blue-600  cursor-pointer text-sm ">
            Register as Employer
            <IoIosArrowForward className="inline-block  " />
          </button>




        </div>

        {/* Hamburger (Mobile) */}


        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-0 left-0 w-[40%] bg-white shadow-md flex flex-col  items-start gap-4 p-4 md:hidden h-full">
            <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Internships</p>
            <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Jobs</p>
            <p className="cursor-pointer hover:text-blue-600 text-zinc-700 ">Contact Us</p>

            <div className=" w-full border-b mb-2 border-gray-300 ">

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
