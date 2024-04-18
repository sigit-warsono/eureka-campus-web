"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Eureka from "../../../../public/image/Eureka_Edutech_Logo.svg";
import EurekaExpert from "../../../../public/image/Eureka_Expert_Logo.svg";
import EurekaEdu from "../../../../public/image/Eureka_Edutainment_Logo.svg";
import EurekaBiz from "../../../../public/image/EurekaBIZ_Logo.svg";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

const ContentTwo = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  const [flip, setFlip] = useState("");
  const translate = useTranslations("contentHomeTwo");

  return (
    <div className="bg-[#0A1F33] max-w-full w-[100%] flex flex-col justify-start items-center p-10 gap-10 mt-[5rem] h-auto">
      <div
        className="flex flex-col items-center justify-center gap-2"
        data-aos="fade-right"
      >
        <span className="text-[2rem] text-white font-semibold max-[556px]:text-[1.5rem]">
          {translate("section1")},
        </span>
        <span className="text-[2rem] text-white font-semibold max-[556px]:text-[1.5rem]">
          {translate("section2")}
        </span>
      </div>
      <div
        className="flex flex-wrap gap-4 items-center justify-center"
        data-aos="fade-left"
      >
        <div className="flex group perspective-800 group">
          <div
            className={`${
              flip == "eureka" ? "backface-hidden rotate-y-180 absolute" : ""
            } absolute transform transition duration-[1.5s] box w-[18rem] h-[25rem] bg-[#369FFF] rounded-xl flex justify-center items-center cursor-pointer`}
            onClick={() => setFlip("eureka")}
          >
            <Image
              src={Eureka}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
          </div>
          <div
            className={`${
              flip !== "eureka" ? "backface-hidden -rotate-y-180 " : ""
            } transform transition duration-[1.5s]  box w-[18rem] bg-[#369FFF] rounded-xl flex flex-col justify-around h-[25rem]  p-5 items-start`}
            onClick={() => setFlip("eureka")}
          >
            <Image
              src={Eureka}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
            <div className="flex flex-col">
              <span className="text-[1.2rem] text-white font-bold">
                {translate("section3")}
              </span>
              <span className="text-white font-extralight">
                {translate("section4")}
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-white font-extralight">
                {translate("section5")}
              </span>
              <a
                target="_blank"
                href={"https://www.eurekaedutech.com/"}
                className="w-[3rem] h-[3rem] rounded-full bg-white p-2 flex justify-center items-center cursor-pointer"
              >
                <GrNext />
              </a>
            </div>
          </div>
        </div>

        <div className="flex group perspective-800 group">
          <div
            className={`${
              flip == "edutechBis"
                ? "backface-hidden rotate-y-180 absolute"
                : ""
            } absolute transform transition duration-[1.5s] box w-[18rem] h-[25rem] bg-[#002A62] rounded-xl flex justify-center items-center cursor-pointer`}
            onClick={() => setFlip("edutechBis")}
          >
            <Image
              src={EurekaExpert}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
          </div>
          <div
            className={`${
              flip !== "edutechBis" ? "backface-hidden -rotate-y-180 " : ""
            } transform transition duration-[1.5s]  box w-[18rem] bg-[#002A62] rounded-xl flex flex-col justify-around h-[25rem]  p-5 items-start`}
            onClick={() => setFlip("edutechBis")}
          >
            <Image
              src={EurekaExpert}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
            <div className="flex flex-col">
              <span className="text-[1.2rem] text-white font-bold">
                Digital Skill & Talent
              </span>
              <span className="text-white font-extralight">
                {translate("section6")}
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-white font-extralight">
                {translate("section5")}
              </span>
              <a
                href="https://lms-xpert.eurekaedutech.com/"
                target="_blank"
                className="w-[3rem] h-[3rem] rounded-full bg-white p-2 flex justify-center items-center cursor-pointer"
              >
                <GrNext />
              </a>
            </div>
          </div>
        </div>

        <div className="flex group perspective-800 group">
          <div
            className={`${
              flip == "edutechEdu"
                ? "backface-hidden rotate-y-180 absolute"
                : ""
            } absolute transform transition duration-[1.5s] box w-[18rem] h-[25rem] bg-[#8F48A3] rounded-xl flex justify-center items-center cursor-pointer`}
            onClick={() => setFlip("edutechEdu")}
          >
            <Image
              src={EurekaEdu}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
          </div>
          <div
            className={`${
              flip !== "edutechEdu" ? "backface-hidden -rotate-y-180 " : ""
            } transform transition duration-[1.5s]  box w-[18rem] bg-[#8F48A3] rounded-xl flex flex-col justify-around h-[25rem]  p-5 items-start`}
            onClick={() => setFlip("edutechEdu")}
          >
            <Image
              src={EurekaEdu}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
            <div className="flex flex-col">
              <span className="text-[1.2rem] text-white font-bold">
                {translate("section7")}
              </span>
              <span className="text-white font-extralight">
                {translate("section8")}
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-white font-extralight">
                {translate("section5")}
              </span>
              <a
                target="_blank"
                href="https://edutainment.eurekaedutech.com/"
                className="w-[3rem] h-[3rem] rounded-full bg-white p-2 flex justify-center items-center cursor-pointer"
              >
                <GrNext />
              </a>
            </div>
          </div>
        </div>

        <div className="flex group perspective-800 group">
          <div
            className={`${
              flip == "edutechBiz"
                ? "backface-hidden rotate-y-180 absolute"
                : ""
            } absolute transform transition duration-[1.5s] box w-[18rem] h-[25rem] bg-[#FDBF50] rounded-xl flex justify-center items-center cursor-pointer`}
            onClick={() => setFlip("edutechBiz")}
          >
            <Image
              src={EurekaBiz}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
          </div>

          <div
            className={`${
              flip !== "edutechBiz" ? "backface-hidden -rotate-y-180 " : ""
            } transform transition duration-[1.5s]  box w-[18rem] bg-[#FDBF50] rounded-xl flex flex-col justify-around h-[25rem]  p-5 items-start`}
            onClick={() => setFlip("edutechBiz")}
          >
            <Image
              src={EurekaBiz}
              alt=""
              width={120}
              height={120}
              className="w-[8rem] h-[5rem]"
            ></Image>
            <div className="flex flex-col">
              <span className="text-[1.2rem] text-white font-bold">
                {translate("section9")}
              </span>
              <span className="text-white font-extralight">
                {translate("section10")}
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-white font-extralight">
                {translate("section5")}
              </span>
              <a
                target="_blank"
                href="https://biz.eurekaedutech.com/"
                className="w-[3rem] h-[3rem] rounded-full bg-white p-2 flex justify-center items-center cursor-pointer"
              >
                <GrNext />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <button className="p-4 bg-[#369FFF] rounded-full text-white font-extralight w-[12rem]">
          Selengkapnya
        </button>
      </div> */}
    </div>
  );
};

export default ContentTwo;
