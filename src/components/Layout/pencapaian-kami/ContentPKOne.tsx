import React, { useEffect } from "react";
import icon5 from "../../../../public/icon/Icon5.svg";
import icon6 from "../../../../public/icon/vector6.svg";
import icon7 from "../../../../public/icon/mdi_thumb-up-outline.svg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

const ContentPKOne = () => {
  const translate = useTranslations("pencapaian-kami");
  useEffect(function () {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex flex-col gap-16 justify-center items-center bg-[#FAFAFA] w-full h-auto p-3 mb-[10rem] max-[662px]:mb-[4rem]">
      <span className="font-bold text-[3rem] max-[860px]:text-[2rem]">
        {translate("sec3")}
      </span>
      <div className="flex justify-around w-full mt-[7rem] max-[860px]:mt-[2rem] max-[997px]:flex-col max-[997px]:justify-center max-[997px]:items-center max-[997px]:gap-[6rem]">
        <div className="flex flex-col" data-aos="fade-left">
          <span className="w-[6rem] h-[6rem] max-[1148px]:w-[5rem] max-[1148px]:h-[5rem] rounded-full bg-[#0A1F33] absolute -mt-[4rem] flex justify-center items-center">
            <Image
              src={icon5}
              alt=""
              width={120}
              height={120}
              className="w-[3rem] h-[3rem] max-[1148px]:w-[3rem] max-[1148px]:h-[3rem]"
            ></Image>
          </span>
          <div className="box w-[22rem] h-[14rem] max-[1148px]:w-[19rem] max-[1148px]:h-[12rem] shadow-xl border border-slate-100 flex flex-col justify-center items-start p-2">
            <span className="text-[2rem] text-black font-bold max-[598px]:text-[1.7rem]">
              Prepare
            </span>
            <span className="text-[1rem] text-slate-500">
              Preparing the younger generation to enter the professional world.
            </span>
          </div>
        </div>
        <div className="flex flex-col" data-aos="fade-top">
          <span className="w-[6rem] h-[6rem] max-[1148px]:w-[5rem] max-[1148px]:h-[5rem] rounded-full bg-[#0A1F33] absolute -mt-[4rem] flex justify-center items-center">
            <Image
              src={icon6}
              alt=""
              width={120}
              height={120}
              className="w-[3rem] h-[3rem] max-[1148px]:w-[3rem] max-[1148px]:h-[3rem]"
            ></Image>
          </span>
          <div className="box w-[22rem] h-[14rem] max-[1148px]:w-[19rem] max-[1148px]:h-[12rem] shadow-xl border border-slate-100 flex flex-col justify-center items-start p-2">
            <span className="text-[2rem] text-black font-bold max-[598px]:text-[1.7rem]">
              Improve
            </span>
            <span className="text-[1rem] text-slate-500">
              Improve grassroot level digital talents and skills
            </span>
          </div>
        </div>
        <div className="flex flex-col" data-aos="fade-right">
          <span className="w-[6rem] h-[6rem] max-[1148px]:w-[5rem] max-[1148px]:h-[5rem] rounded-full bg-[#0A1F33] absolute -mt-[4rem] flex justify-center items-center">
            <Image
              src={icon7}
              alt=""
              width={120}
              height={120}
              className="w-[3rem] h-[3rem] max-[1148px]:w-[3rem] max-[1148px]:h-[3rem]"
            ></Image>
          </span>
          <div className="box w-[22rem] h-[14rem] max-[1148px]:w-[19rem] max-[1148px]:h-[12rem] shadow-xl border border-slate-100 flex flex-col justify-center items-start p-2">
            <span className="text-[2rem] text-black font-bold max-[598px]:text-[1.7rem]">
              Encourage
            </span>
            <span className="text-[1rem] text-slate-500">
              Talents to quickly adapt to digital and professionals advance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPKOne;
