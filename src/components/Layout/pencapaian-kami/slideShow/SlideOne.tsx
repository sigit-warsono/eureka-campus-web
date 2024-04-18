import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Rectangle_951.svg";

const SlideOne = () => {
  return (
    <div className="flex justify-center items-center bg-transparent w-full h-[50rem] max-[933px]:h-[40rem]">
      <div className="flex justify-center gap-10 w-full items-center max-[998px]:flex-col max-[998px]:gap-1">
        <Image
          src={img}
          alt=""
          width={120}
          height={120}
          className="w-[30rem] h-[25rem] max-[1049px]:w-[27rem] max-[533px]:w-[24rem]"
        ></Image>
        <div className="flex flex-col gap-2  max-[998px]:-mt-[3rem]">
          <span className="text-[2rem] text-white font-bold max-[485px]:text-[1.4rem]">
            In 2020
          </span>
          <span className="text-[1rem] text-white font-extralight max-[485px]:text-[0.9rem]">
            Established at the end of the year
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
