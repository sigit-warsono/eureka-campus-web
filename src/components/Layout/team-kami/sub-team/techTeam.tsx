"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TechTeam = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-0 mb-[3rem]">
      <div className="flex w-[17rem] h-[20rem] max-[581px]:w-[50%] max-[406px]:h-[15rem] bg-[#369FFF] bg-[url('/image/man.png')] bg-no-repeat bg-center bg-[length:256px_150px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            LEAD SOFTWARE ENGINEER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            DANIEL SAPUTRA
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/man.png')] bg-no-repeat bg-center bg-[length:256px_150px] max-[406px]:bg-[length:200px_950px] ">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            SOFTWARE ENGINEER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            GALUH ESA I.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#8F48A3] bg-[url('/image/man.png')] bg-no-repeat bg-center bg-[length:256px_150px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            UI/UX DESIGNER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            FATURACHMAN ASYARI O.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#FDBF50] bg-[url('/image/man.png')] bg-no-repeat bg-center bg-[length:256px_150px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            ANDROID DEVELOPER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            ALDY YOGA
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/man.png')] bg-no-repeat bg-center bg-[length:256px_150px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            FULLSTACK DEVELOPER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            SIGIT WARSONO
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechTeam;
