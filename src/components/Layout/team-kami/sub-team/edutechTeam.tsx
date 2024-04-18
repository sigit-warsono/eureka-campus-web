"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const EdutechTeam = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-0 mb-[3rem]">
      <div className="flex w-[17rem] h-[20rem] max-[581px]:w-[50%] max-[406px]:h-[15rem] bg-[#369FFF] bg-[url('/image/DIMAS.svg')] bg-no-repeat bg-center bg-[length:206px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            EDUTECH PRODUCT LEADER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            DIMAS WIDIANTO R.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/NANDA.svg')] bg-no-repeat bg-center bg-[length:246px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            LITERACY CONTENT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            ANANDA RESTIANA K.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#8F48A3] bg-[url('/image/CAHYA.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            LITERACY CONTENT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            CAHYARANI PARAMESTI
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#FDBF50] bg-[url('/image/MELATI.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            LITERACY CONTENT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            MELATI NURJANA
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/SUCI.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            LITERACY CONTENT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[60%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            SUCI NADILLA A.
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#8F48A3] bg-[url('/image/KHOIR.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            NUMERACY CONTENT OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[80%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            M. KHOIRUL IKHSAN
          </span>
        </div>
      </div>
    </div>
  );
};

export default EdutechTeam;
