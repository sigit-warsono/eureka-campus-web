"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import SlideOne from "./slideShow/SlideOne";
import SlideTwo from "./slideShow/SlideTwo";
import SlideThree from "./slideShow/SlideThree";
import SlideFour from "./slideShow/SlideFour";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const ContentPKTwo = () => {
  const swiper = useSwiper();
  const [numSwiper, setNumSwiper] = useState(0);
  useEffect(() => {}, [numSwiper]);

  console.log(numSwiper);
  return (
    <div>
      <div className="text-white text-[2rem] font-bold flex justify-center w-full mt-[5rem] absolute z-20 max-[933px]:mt-[3rem]">
        <span>Milestones</span>
      </div>
      <div
        className={`flex items-center ${
          numSwiper == 0
            ? "bg-[#369FFF]"
            : numSwiper == 1
            ? "bg-[#002A62]"
            : numSwiper == 2
            ? "bg-[#8F48A3]"
            : "bg-[#FDBF50]"
        } px-10 max-[601px]:px-2`}
      >
        {/* <div className={`flex items-center bg-transparent`}> */}
        <button className="arrow-right arrow text-[2rem] text-white">
          <GrPrevious />
        </button>
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          onSlideChange={(swiper) => {
            setNumSwiper(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideThree />
          </SwiperSlide>
          <SwiperSlide>
            <SlideFour />
          </SwiperSlide>
        </Swiper>
        <button className="arrow-left arrow  z-20 text-[2rem] text-white">
          <GrNext />
        </button>
      </div>
      {/* <div className="flex w-full justify-between -mt-[25rem] max-[933px]:-mt-[34rem] px-20 absolute max-[1264px]:px-2"></div>  */}
      <div className="flex w-full justify-center absolute -mt-[6rem] max-[933px]:-mt-[13rem] z-20">
        <div className="flex justify-center gap-1 items-center w-[40rem] max-[655px]:w-[35rem] max-[579px]:w-[20rem] p-3 bg-[#FAFAFA] rounded-full">
          <span
            className={`w-[1rem] h-[1rem] max-[579px]:h-[0.5rem] rounded-full ${
              numSwiper >= 0 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[9rem] p-1   rounded-full ${
              numSwiper > 0 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[1rem] h-[1rem] max-[579px]:h-[0.5rem] rounded-full ${
              numSwiper > 1 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[9rem] p-1 rounded-full ${
              numSwiper > 1 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[1rem] h-[1rem] max-[579px]:h-[0.5rem] rounded-full ${
              numSwiper > 1 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[9rem] p-1 rounded-full ${
              numSwiper > 2 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
          <span
            className={`w-[1rem] h-[1rem] max-[579px]:h-[0.5rem] rounded-full ${
              numSwiper > 2 ? "bg-black" : "bg-[#CECECE]"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ContentPKTwo;
