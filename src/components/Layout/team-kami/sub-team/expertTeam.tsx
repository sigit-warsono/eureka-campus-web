"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ExpertTeam = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-0 mb-[3rem]">
      <div className="flex w-[17rem] h-[20rem] max-[581px]:w-[50%] max-[406px]:h-[15rem] bg-[#369FFF] bg-[url('/image/IIM.svg')] bg-no-repeat bg-center bg-[length:206px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            XPERT PRODUCT LEADER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[60%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            IIM ABDUL M.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/KRIS.svg')] bg-no-repeat bg-center bg-[length:246px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            XPERT MARKETING EXECUTIVE
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            KRISTIANA HINDRIYANI
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#8F48A3] bg-[url('/image/ANANDA.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            XPERT MARKETING OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            ANANDA RANDY P.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#FDBF50] bg-[url('/image/PUTRI.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            XPERT MARKETING OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            PUTRI HUSNUL A.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/KHAFI.svg')] bg-no-repeat bg-center bg-[length:246px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            XPERT PROJECT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            MUHAMMAD KAHFI
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
