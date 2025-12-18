import { FaTwitter } from "react-icons/fa"
import { FaInstagram, FaSquareFacebook, FaYoutube } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="w-full bg-[#333333] h-fit  text-white">
      <div className="grid">
        <div className="max-w-7xl md:px-25 px-8 py-6 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10 ">
          <div className="flex flex-col gap-3 ">

            <p className="text-gray-300 cursor-pointer hover:text-white font-bold text-sm ">About Us</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">We're hiring</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">Hire interns for your company</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">Post a Job</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-300 cursor-pointer hover:text-white font-bold text-sm ">Team Diary</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">Blog</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">Our Services</p>

          </div>
          <div className="flex flex-col gap-3 ">
            <p className="text-gray-300 cursor-pointer hover:text-white font-bold text-sm ">
              Terms & Conditions</p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">
              Privacy </p>
            <p className="text-gray-300 cursor-pointer hover:text-white text-sm font-bold">Contact us</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-5 md:pb-10 px-6 sm:px-10  md:text-right flex flex-col  ">

        <div className="w-full border-b flex mb-3 border-gray-300 ">
        </div>
        <div className="">
          <div className="flex  md:justify-end mb-4 gap-4 ">
            <FaSquareFacebook className="h-6 w-6 cursor-pointer hover:opacity-70" />
            <FaYoutube className="h-6 w-6 cursor-pointer hover:backdrop-opacity-70" />
            <FaInstagram className="h-6 w-6 cursor-pointer hover:backdrop-opacity-70" />
            <FaTwitter className="h-6 w-6 cursor-pointer hover:backdrop-opacity-70" />

          </div>
        </div>
        <p className="text-white contain-content font-bold text-xs  md:mb-6">© Copyright 2026 TalentTrail <br />All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer