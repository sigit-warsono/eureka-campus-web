import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/FrameEdIcon.svg";
import img2 from "../../../../../public/image/FrameEdu1.svg";
import img3 from "../../../../../public/image/FrameEdu3.svg";
import img4 from "../../../../../public/image/FrameEdu4.svg";
import img5 from "../../../../../public/image/Frame_335X.svg";

const ContentPDEOne = () => {
  return (
    <div className="flex w-full max-[990px]:flex-col">
      <div className="flex w-[50%] max-[990px]:w-full h-auto max-[787px]:h-[30rem] bg-[url('/image/Rectangle_99.png')] bg-no-repeat bg-cover"></div>
      <div className="w-[50%] max-[990px]:w-full h-auto flex flex-col justify-start items-start gap-7 p-20 max-[991px]:p-5 max-[991px]:justify-center">
        <span className="text-[2rem] font-bold text-black">
          Tujuan Edutainment
        </span>
        <div className="flex flex-col justify-start gap-10">
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Create an event that uses digital technology as a foundation to
              achieve the events objective for all segment
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img2}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Organize inspiring programs for savvy citizens
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img3}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Performing world-class quality education and entertainment
              (edutainment) programs
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img4}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Providing innovative solutions as the clients top priority
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPDEOne;
