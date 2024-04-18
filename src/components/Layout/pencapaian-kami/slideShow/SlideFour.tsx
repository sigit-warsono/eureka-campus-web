import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Rectangle_957.svg";

const SlideFour = () => {
  return (
    <div className="flex justify-center items-center bg-transparent w-full h-[50rem] max-[998px]:overflow-y-auto">
      <div className="flex justify-center gap-10 max-[998px]:gap-1 w-full items-center max-[998px]:flex-col max-[998px]:mt-28">
        <div className="flex w-[50%] max-[998px]:w-full justify-end max-[998px]:justify-center items-center ">
          <Image
            src={img}
            alt=""
            width={120}
            height={120}
            className="w-[30rem] h-[25rem]"
          ></Image>
        </div>

        <div className="flex w-[50%] max-[998px]:w-full justify-start max-[998px]:justify-center">
          <div className="flex flex-col gap-2 w-[60%] max-[998px]:w-full max-[998px]:pl-4">
            <span className="text-[2rem] text-black font-bold">In 2023</span>
            <span className="text-[1rem] text-black font-extralight">
              <ul className="list-disc flex flex-col gap-4">
                <li>Data Scientist bootcamp with COFI 15 participants</li>
                <li>
                  Mobile developer  for Talenthub (Kemenaker) 72 participants
                </li>
                <li>
                  Delegation for forum discussion with the President of Timor
                  Leste and holding Corporate training for Telkomcel Timor Leste
                  with 35 participants
                </li>
                <li>
                  Study Preparation Consultation Services for The Amartha
                  Cendikia Scholarship Program with 30 participants
                </li>
                <li>
                  Leadership and Womenpreneur Camp, collaboration with Pijar
                  Foundation 50 participants
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFour;
