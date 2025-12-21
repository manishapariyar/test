import { FaArrowTrendUp } from "react-icons/fa6"
import { Banners } from "../assets/images"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";


const TrandingJods = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="px-4 md:py-10 py-30 flex flex-col gap-6 w-[80%] m-auto" >
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">Trending now</h1>
        <FaArrowTrendUp className="text-white text-3xl bg-blue-500 p-1 rounded-full" />
      </div>

      <Carousel
        arrows
        responsive={responsive}
        // autoPlay
        infinite
      >
        {Banners.map((banner) => (
          <div key={banner.id} className="px-2">
            <img
              key={banner.id}
              src={banner.src}
              alt={`Banner ${banner.id}`}
              className="w-120 rounded-lg "
            />
          </div>
        ))}
      </Carousel >
    </div >
  );
};


export default TrandingJods