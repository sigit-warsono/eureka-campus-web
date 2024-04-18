import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Rectangle_952.svg";

const SlideTwo = () => {
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
        <div className="flex flex-col gap-2 w-[20%] max-[998px]:-mt-[3rem] max-[998px]:w-[95%]">
          <span className="text-[2rem] text-white font-bold max-[485px]:text-[1.4rem]">
            In 2021
          </span>
          <span className="text-[1rem] text-white font-extralight max-[485px]:text-[0.9rem]">
            Assessment National android application has launched at the end of
            the year for Senior high school (Free trial)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;
