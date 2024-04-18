import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Rectangle_99.svg";
import img1 from "../../../../../public/image/Frame_331.svg";
import img2 from "../../../../../public/image/Frame_332.svg";
import img3 from "../../../../../public/image/Frame_333.svg";
import { useTranslations } from "next-intl";

const ContentPDOne = () => {
  const translate = useTranslations("produk-detail.eurekaEdutech");
  return (
    <div className="flex w-full max-[990px]:flex-col">
      <div className="flex w-[50%] max-[990px]:w-full h-[40rem] max-[787px]:h-[30rem] bg-[url('/image/Rectangle_99.png')] bg-no-repeat bg-cover"></div>
      <div className="w-[50%] max-[990px]:w-full h-[30rem] flex flex-col justify-start items-start gap-7 p-20 max-[991px]:p-5 max-[991px]:justify-center">
        <span className="text-[2rem] font-bold text-black">
          {translate("ContentOne.sec1")}
        </span>
        <div className="flex flex-col justify-start gap-10">
          <div className="flex items-center justify-start gap-2 w-[80%] max-[1320px]:w-full">
            <Image
              src={img1}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[4rem] flex items-center">
              Encourage teachers to develop basic cognitive competencies and the
              character of students as a whole
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[80%] max-[1320px]:w-full">
            <Image
              src={img2}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[4rem] flex items-center">
              Encourage that the development of student competence and character
              should be the main goal of the school
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[80%] max-[1320px]:w-full">
            <Image
              src={img3}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-auto"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[4rem] flex items-center">
              Provide an overview of the essential characteristics of effective
              schools to achieve these goals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPDOne;
