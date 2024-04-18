"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import Description from "@/components/modal/description/Description";

const ContentOne = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const [modal, setModal] = useState(false);

  const translate = useTranslations("ContentHomeOne");

  return (
    <>
      {modal && <Description setModal={setModal} />}
      <div className="w-full flex flex-wrap gap-1 justify-center items-start max-[1008px]:flex-col max-[1008px]:items-center max-[1008px]:w-full mt-10 overflow-x-hidden ">
        <div
          className="flex justify-center w-[40%] h-[50vh] max-[1008px]:w-full"
          data-aos="fade-right"
        >
          <div className="w-[80%] h-full  bg-auto bg-[url('/image/imageFlow6.png')] bg-no-repeat max-[1008px]:bg-[length:100%_100%] max-[556px]:bg-[length:100%_75%]"></div>
        </div>
        <div
          className="flex flex-col gap-8 max-[556px]:gap-2 w-[40%] max-[1008px]:p-4 max-[1008px]:w-full h-auto justify-center items-start max-[556px]:-mt-[4rem]"
          data-aos="fade-left"
        >
          <span className="text-[2.5rem] font-semibold max-[556px]:text-[1.7rem]">
            {translate("section1")}
          </span>
          <div className="flex flex-col gap-5">
            <span className="text-[1.2rem] text-justify max-[556px]:text-[1rem] max-[556px]:text-left">
              {translate("section2")}
            </span>
            <span className="text-[1.2rem] text-justify max-[556px]:text-[1rem] max-[556px]:text-left">
              {translate("section4")}
            </span>
          </div>

          <button
            className="p-4 bg-[#369FFF] rounded-full text-white font-extralight w-[12rem] max-[556px]:p-2 max-[556px]:w-[9rem] cursor-pointer"
            onClick={() => setModal(true)}
          >
            {translate("section3")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentOne;
