"use client";
import React, { useState } from "react";
import Lb from "../../../../public/image/Lini_bisnis.svg";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const ContentThree = () => {
  const [collapse, setCollapse] = useState(true);
  const translate = useTranslations("tentang-kami");
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="flex items-center justify-between px-10 w-full p-3 bg-[#0A1F33] text-white border-b border-white">
        <span className="font-bold text-[2rem] max-[501px]:text-[1.5rem] max-[416px]:text-[1.3rem]">
          {translate("sec10")}
        </span>
        {collapse ? (
          <FaChevronDown
            className="text-white text-[2rem] max-[416px]:text-[1.3rem] cursor-pointer"
            onClick={() => setCollapse(false)}
          />
        ) : (
          <FaChevronRight
            className="text-white text-[2rem] max-[416px]:text-[1.3rem] cursor-pointer "
            onClick={() => setCollapse(true)}
          />
        )}
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-3 p-20 max-[709px]:p-2 pb-10 ${
          collapse ? "block" : "hidden"
        }`}
      >
        <div className="flex w-full justify-center">
          <Image src={Lb} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ContentThree;
