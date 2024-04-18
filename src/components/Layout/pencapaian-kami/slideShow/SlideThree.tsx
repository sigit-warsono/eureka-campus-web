import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Xpert.svg";

const SlideThree = () => {
  return (
    <div className="flex justify-center items-center bg-transparent w-full h-[50rem] max-[933px]:h-auto">
      <div className="flex justify-center gap-10 w-full items-center max-[998px]:flex-col max-[998px]:gap-1">
        <div className="flex w-[50%] max-[998px]:w-full justify-end items-center">
          <Image
            src={img}
            alt=""
            width={120}
            height={120}
            className="w-[30rem] h-[25rem] max-[1049px]:w-[27rem] max-[533px]:w-[24rem]"
          ></Image>
        </div>

        <div className="flex w-[50%] justify-start max-[998px]:w-full pl-4">
          <div className="flex flex-col gap-2 w-[60%] max-[998px]:w-full">
            <span className="text-[2rem] text-white font-bold">In 2022</span>
            <span className="text-[1rem] text-white font-extralight">
              <ul className="list-disc flex flex-col gap-4">
                <li>
                  Assessment National books have launched for Senior high school
                </li>
                <li>Community Segment Digital Literacy</li>
                <li>
                  Community Segment Digital Literacy Programme in DKI Jakarta
                  and Banten for Siberkreasi, KOMINFO 270K participants
                </li>
                <li>Eureka Xpert has launched</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
