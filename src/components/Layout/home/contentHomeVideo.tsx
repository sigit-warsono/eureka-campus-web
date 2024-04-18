"use client";
import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type MutableRef = any;
const ContentHomeVideo = () => {
  const videoRef = useRef<MutableRef>(null);
  const [play, setPlay] = useState(false);
  useEffect(function () {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      videoRef.current.play();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const routerPath = usePathname();
  const VideoBg =
    "https://pub-67e0b71fba844ee08ca50af804222f1e.r2.dev/Video_Compro.mp4";
  const Thumbnail =
    "https://pub-67e0b71fba844ee08ca50af804222f1e.r2.dev/traveler.svg";
  const translate = useTranslations("Thumbnail");

  return (
    <div>
      <div className="-z-20">
        <video
          width="320"
          height="3"
          className="w-full h-[100vh] max-[946px]:h-[50vh] object-cover"
          //poster="https://eureka-edutech.s3.ap-southeast-1.amazonaws.com/video/traveler.svg"
          //poster="image/traveler.svg"
          //poster={Thumbnail}
          //poster={Thumbnail}
          poster={Thumbnail}
          preload="none"
          muted
          ref={videoRef}
          loop
        >
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>

      <div className="cont w-full h-[100vh] max-[946px]:h-[50vh] bg-black-colorVid absolute mt-20 top-0 z-20"></div>
      <div
        className="flex flex-col leading-[6rem] max-[1039px]:leading-[3rem] -mt-[40rem] max-[949px]:-mt-[18rem] max-[919px]:w-[70%] absolute z-30 px-9 max-[392px]:px-2 ml-2"
        data-aos="fade-right"
      >
        <span className="text-white font-medium text-[1.5rem] max-[647px]:text-[1rem]">
          {translate("section1")} #KarenaEureka
        </span>
        <div className="flex items-center gap-2 text-white">
          <span className="font-extralight text-[4rem] max-[1039px]:text-[1.9rem] mt-3 max-[647px]:mt-1.5 max-[647px]:text-[1.2rem]">
            {translate("section2")}
          </span>
          <span className="font-semibold text-[6rem] max-[1039px]:text-[3rem] max-[647px]:text-[1.8rem]">
            {translate("section3")}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <span className="font-semibold text-[6rem] text-yellow-400 max-[1039px]:text-[3rem] max-[647px]:text-[2rem] ">
            {translate("section4")}
          </span>
          <span className="font-extralight text-[4rem] max-[1039px]:text-[1.9rem] max-[647px]:text-[1.4rem] mt-4 max-[647px]:mt-2">
            {translate("section5")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentHomeVideo;
