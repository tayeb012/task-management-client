import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleLetsGo = () => {
    navigate(`/dashBoard/taskManagement`);
  };

  return (
    <div className="relative">
      <div className="absolute ml-2 xl:right-1/4 top-1/2 z-30 w-2/5">
        <Button
          onClick={handleLetsGo}
          gradientDuoTone="redToYellow"
          className="relative btn btn-outline md:btn-wide py-2 md:py-10 flex justify-center items-center "
        >
          <span className="relative bottom-6 text-base md:text-3xl font-bold">
            Let’s Explore
          </span>
        </Button>
      </div>
      <div className="carousel w-full h-fit mt-0">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/57/79/01/1000_F_257790123_BvYxUIcdPG10CsD3DA6P0g50llCuz5O0.jpg"
            className="w-full"
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2"></div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-4 bottom-2 md:right-10 md:bottom-5 lg:right-20 lg:bottom-10 ">
            <a href="#slide4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/57/79/00/1000_F_257790084_svLeg7hvki7JC7UXoKWWRLWnBYN630bl.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2"></div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-4 bottom-2 md:right-10 md:bottom-5 lg:right-20 lg:bottom-10 ">
            <a href="#slide1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/39/40/02/1000_F_239400298_c2zDATKfowCy2BAOCfsD1MynQibE4PvW.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2"></div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-4 bottom-2 md:right-10 md:bottom-5 lg:right-20 lg:bottom-10 ">
            <a href="#slide2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/82/76/34/1000_F_282763482_FcgLse17tyosYbo31SiRhSXadDXhvOL0.jpg"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2"></div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-4 bottom-2 md:right-10 md:bottom-5 lg:right-20 lg:bottom-10 ">
            <a href="#slide3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❮
                </span>
              </button>
            </a>
            <a href="#slide1">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ❯
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
