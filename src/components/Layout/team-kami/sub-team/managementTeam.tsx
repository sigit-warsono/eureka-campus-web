import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ManagemenentTeam = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-0 mb-[3rem]">
      <div className="flex w-[17rem] h-[20rem] max-[581px]:w-[50%] max-[406px]:h-[15rem] bg-[#369FFF] bg-[url('/image/Pak_Herman.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            FOUNDER & COMMISIONER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            HERMAN HUANG
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#002A62] bg-[url('/image/Pak_Yogi.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            CHIEF EXECUTIVE OFFICER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            YOGI LESMANA
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#8F48A3] bg-[url('/image/Elvita_Sari.svg')] stroke-cyan-500 bg-no-repeat bg-center bg-[length:206px_950px] max-[406px]:bg-[length:150px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            PRODUCT MANAGER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            ELVITA SARI
          </span>
        </div>
      </div>
      <div className="flex w-[17rem] h-[20rem] max-[406px]:h-[15rem] max-[581px]:w-[50%] bg-[#FDBF50] bg-[url('/image/SONIA_YUNITA.svg')] bg-no-repeat bg-center bg-[length:256px_950px] max-[406px]:bg-[length:200px_950px]">
        <div className="flex flex-col justify-end w-full p-5 bg-gradient-to-t from-slate-800 gap-1">
          <span
            className="text-white text-[0.8rem] font-extralight"
            data-aos="fade-left"
          >
            MARKETING MANAGER
          </span>
          <span className="border-spacing-1 border-b-4 border-white w-[3rem]"></span>
          <span
            className="w-[30%] font-bold text-[1.5rem] text-white leading-normal max-[557px]:text-[1rem]"
            data-aos="fade-right"
          >
            SONIA YUNITA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManagemenentTeam;
