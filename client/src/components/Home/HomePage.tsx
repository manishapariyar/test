import Navbar from "../Navbar/Navbar"
import Home from "../../assets/homepic.png"
import { IoIosArrowForward } from "react-icons/io"

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-[#3c5f91] to-blue-900  w-full">
      <Navbar />
      <div className="text-white text-3xl font-semibold mt-20 mx-10 flex  md:flex-row  flex-col gap-8 items-center justify-around">
        <div className="col-span-1 flex flex-col text-4xl ml-8 ">
          <p>Welcome to <span className="text-amber-400">TalentTrail</span></p>
          <p className="text-xl ">Your Gateway to Exciting Internships and Job Opportunities</p>
          <div className="w-[68%] border-3 rounded-2xl ml-45 text-blue-300"></div>
          <button className=" flex items-center text-sm cursor-pointer  py-4 w-fit">

            Register as Employer
            <IoIosArrowForward className="inline-block  " />
          </button>
        </div>
        <img src={Home} alt="" className="w-130" />
      </div>
    </div>
  )
}

export default HomePage