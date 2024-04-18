import React from "react";
import { useTranslations } from "next-intl";

const ContentPDThree = () => {
  const translate = useTranslations("produk-detail.eurekaEdutech");
  return (
    <div className="h-[40rem] w-full flex max-[710px]:flex-col">
      <div className="w-[50%] max-[710px]:w-full h-[30rem] max-[373px]:h-auto flex justify-center items-center">
        <div className="flex justify-start flex-col gap-3 w-[70%]">
          <span className="title text-[3rem] max-[1096px]:text-[2rem] max-[1096px]:leading-normal max-[459px]:text-[1.5rem]  text-black font-bold leading-[65px]">
            {translate("ContentThree.sec1")}
          </span>
          <span className="text-[1rem] font-extralight">
            {translate("ContentThree.sec2")}
          </span>
        </div>
      </div>
      <div className="w-[50%] max-[710px]:w-full h-[30rem] bg-[url('/image/Rectangle99E.svg')] bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default ContentPDThree;
