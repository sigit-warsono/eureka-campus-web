import React from "react";
import img1 from "../../../../../public/image/Frame_334E.svg";
import img2 from "../../../../../public/image/Frame_335E.svg";
import img3 from "../../../../../public/image/Frame_336E.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const ContentPDTwo = () => {
  const translate = useTranslations("produk-detail.eurekaEdutech");
  return (
    <div className="flex justify-center items-center bg-[#0A1F33] w-full h-[40rem] max-[559px]:h-[30rem]">
      <div className="flex flex-col justify-center items-center gap-[7rem] w-full max-[559px]:gap-[3rem]">
        <span className="text-[2rem] text-white font-bold max-[559px]:text-[1.8rem]">
          {translate("ContentTwo.sec1")}
        </span>
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={img1}
              alt=""
              width={120}
              height={120}
              className="w-[9rem] h-[9rem] max-[559px]:w-[6rem] max-[559px]:h-[6rem] max-[454px]:w-[4rem] max-[454px]:h-[4rem]"
            ></Image>
            <span className="text-[1rem] max-[559px]:text-[0.8rem] font-semibold text-white w-[60%] text-center">
              K-12 LEARNING PLATFORM
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={img2}
              alt=""
              width={120}
              height={120}
              className="w-[9rem] h-[9rem] max-[559px]:w-[6rem] max-[559px]:h-[6rem] max-[454px]:w-[4rem] max-[454px]:h-[4rem]"
            ></Image>
            <span className="text-[1rem] max-[559px]:text-[0.8rem] font-semibold text-white w-[60%] text-center">
              COLLEGE PREPARATION
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={img3}
              alt=""
              width={120}
              height={120}
              className="w-[9rem] h-[9rem] max-[559px]:w-[6rem] max-[559px]:h-[6rem] max-[454px]:w-[4rem] max-[454px]:h-[4rem]"
            ></Image>
            <span className="text-[1rem] max-[559px]:text-[0.8rem] font-semibold text-white w-[60%] text-center">
              EXAM PREPARATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPDTwo;
