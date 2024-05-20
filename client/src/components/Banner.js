import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="relative w-screen h-full">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full object-fill"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full object-fill"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full object-fill"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full object-fill"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10 md:bottom-20 lg:bottom-32">
          <div
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
