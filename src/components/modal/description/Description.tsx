import React from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Description = ({ setModal }: { setModal: any }) => {
  const translate = useTranslations("modal-description");
  return (
    <div className="flex justify-center items-center bg-black-colorNew w-full h-[100vh] left-0 top-0 z-50 fixed">
      <div className="box flex flex-col items-center justify-center w-[70%] max-[540px]:w-[95%]">
        <div className="w-full bg-black-colorNew flex justify-end items-center p-3">
          <IoMdClose
            className="text-white cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="w-full bg-white h-[40rem] flex flex-col">
          <div className="w-full h-[20rem] bg-[url('/image/FotoBG.svg')] bg-no-repeat bg-cover"></div>
          <div className="flex flex-col gap-3 overflow-auto p-6 px-[10rem] max-[966px]:px-[2rem]">
            <span className="text-[2rem] font-bold max-[595px]:text-[1.3rem]">
              {translate("title")}
            </span>
            <span className="font-extralight">{translate("explain1")}</span>
            <span className="font-extralight">{translate("explain2")}</span>
            <span className="font-extralight">{translate("explain3")}</span>
            <span className="font-extralight">{translate("explain4")}</span>
            <span className="font-extralight">{translate("explain5")}</span>
            <span className="font-extralight">{translate("explain6")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
