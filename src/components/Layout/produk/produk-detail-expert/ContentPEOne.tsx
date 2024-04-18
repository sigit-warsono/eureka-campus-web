import React from "react";
import Image from "next/image";
import img from "../../../../../public/image/Rectangle_99.svg";
import img1 from "../../../../../public/image/Frame_331X.svg";
import img2 from "../../../../../public/image/Frame_332X.svg";
import img3 from "../../../../../public/image/Frame_333x.svg";
import img4 from "../../../../../public/image/Frame_334X.svg";
import img5 from "../../../../../public/image/Frame_335X.svg";

const ContentPEOne = () => {
  return (
    <div className="flex w-full max-[990px]:flex-col">
      <div className="flex w-[50%] max-[990px]:w-full h-auto max-[787px]:h-[30rem] bg-[url('/image/Rectangle_99.png')] bg-no-repeat bg-cover"></div>
      <div className="w-[50%] max-[990px]:w-full h-auto flex flex-col justify-start items-start gap-7 p-20 max-[991px]:p-5 max-[991px]:justify-center">
        <span className="text-[2rem] font-bold text-black">Tujuan Xpert</span>
        <div className="flex flex-col justify-start gap-10">
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img1}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Soft skills acceleration in professional world
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
              Improve employees digital skills in corporate world
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
              Encourage talent to quickly adapt to digital advances
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
              Help student candidates to prepare their career and study plan
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-[70%] max-[1320px]:w-full">
            <Image
              src={img5}
              alt=""
              width={120}
              height={120}
              className="w-[4rem] h-[4rem]"
            ></Image>
            <span className="text-[1rem] font-extralight p-2 rounded-xl bg-white shadow-xl min-h-[5rem] flex items-center">
              Improve language skills of student to ready to go on the
              international
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPEOne;
