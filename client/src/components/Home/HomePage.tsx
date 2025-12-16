import Navbar from "../Navbar/Navbar";
import Home from "../../assets/homepic.png";
import { IoIosArrowForward } from "react-icons/io";
import images from "../../assets/images";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full  top-2 relative   min-h-screen">

      {/* HERO SECTION */}
      <Navbar />
      <div className=" bg-gradient-to-r from-[#3c5f91] via-blue-950 to-[#3c5f91] pt-10 w-full  flex items-center justify-center  ">
        <div className=" text-white text-3xl font-semibold  flex  md:flex-row  flex-col gap-8 items-center justify-around">
          <div className="col-span-1 flex flex-col text-4xl ml-8 ">
            <p>Welcome to <span className="text-amber-400">TalentTrail</span></p>
            <p className="text-xl ">Your Gateway to Exciting Internships and Job Opportunities</p>
            <div className="w-[68%] border-3 rounded-2xl ml-45 text-blue-300 hidden md:block"></div>
            <button className=" flex items-center text-sm cursor-pointer  md:py-4 py-2 w-fit">

              Register as Employer
              <IoIosArrowForward />
            </button>
          </div>


          <img
            src={Home}
            alt="home"
            className="w-130 mt-10 md:mt-0"
          />
        </div>
      </div>


      {/* LOGO SCROLLER */}
      <div className="absolute left-0 right-0 md:bottom-8 md:top-135 lg:bottom-20 xl:bottom-10 sm:bottom-0  z-10 bg-[#083269]  overflow-hidden  ">
        <motion.div
          className="flex items-center gap-16 justify-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt=""
              className="
              h-20 md:h-32
      grayscale-[90%]  
      hover:grayscale-0
      hover:brightness-100
      transition-all duration-300
      flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* optional fade edges (premium look) */}

        <div className="
  pointer-events-none absolute inset-0
  bg-gradient-to-r from-[#083269] via-transparent to-[#083269]
  flex items-center justify-between
">
          {/* LEFT BOX */}

          <div className="w-[30%] h-full flex flex-col items-center justify-center bg-[#083269]">
            <div className="h-9 md:h-15 border-l-4 ml-4 md:ml-45 text-blue-800 ">
              <div className="flex flex-col items-start w-full justify-center word-wrap ml-4 ">
                <p className="md:text-4xl font-bold text-amber-50">10k+</p>
                <p className="text-xs md:text-xl text-white font-semibold   ">Openings daily</p>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="w-[20%] h-full  bg-[#083269] hidden md:block">

          </div>

        </div>



      </div>

    </div>
  );
};

export default HomePage;
