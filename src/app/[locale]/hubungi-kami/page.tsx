"use client";
import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import Image from "next/image";
import img1 from "../../../../public/image/Frame_326.svg";
import img2 from "../../../../public/image/Frame_327.svg";
import img3 from "../../../../public/image/Frame_328.svg";
import { useTranslations } from "next-intl";
// Rectangle_19.svg;
const HubKami = () => {
  const translate = useTranslations("hubungi-kami");
  return (
    <RootLandingPage>
      <div className="w-full min-h-[100vh] flex justify-center mb-10 max-[992px]:flex-col">
        <div className="w-[50%] max-[992px]:w-full h-auto flex flex-col mt-16 gap-8">
          <div className="w-full h-[40rem] max-[992px]:h-[26rem] bg-[url('/image/Rectangle_19.svg')] bg-no-repeat bg-cover"></div>
          <div className="flex justify-center">
            <div className="box w-[70%] max-[524px]:w-[25rem] max-[420px]:w-[23rem] h-auto border border-slate-800 flex flex-col gap-2 justify-start p-10">
              <span className="text-[1.5rem] text-slate-700 font-semibold max-[556px]:text-[1.2rem]">
                {translate("sec2")} :
              </span>
              <div className="flex gap-1 items-center max-[390px]:flex-col">
                <Image
                  src={img1}
                  alt=""
                  width={120}
                  height={120}
                  className="w-[4rem] h-[4rem]"
                ></Image>
                <div className="flex flex-col gap-1 max-[390px]:items-center max-[390px]:-mt-4">
                  <span className="text-[1.2rem] font-semibold">
                    {translate("sec3")}
                  </span>
                  <span className="text-[1rem] font-extralight">
                    08123456789
                  </span>
                </div>
              </div>
              <div className="flex gap-1 items-center max-[390px]:flex-col">
                <Image
                  src={img2}
                  alt=""
                  width={120}
                  height={120}
                  className="w-[4rem] h-[4rem]"
                ></Image>
                <div className="flex flex-col gap-1 max-[390px]:items-center max-[390px]:-mt-4">
                  <span className="text-[1.2rem] font-semibold">Email</span>
                  <span className="text-[1rem] font-extralight">
                    email.eurekacampus@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex gap-1 items-center max-[390px]:flex-col">
                <Image
                  src={img3}
                  alt=""
                  width={120}
                  height={120}
                  className="w-[4rem] h-[4rem]"
                ></Image>
                <div className="flex flex-col gap-1 max-[390px]:items-center max-[390px]:-mt-4">
                  <span className="text-[1.2rem] font-semibold">
                    {translate("sec4")}
                  </span>
                  <span className="text-[1rem] font-extralight">
                    Graha Satria Lt. 2. 201, Jl. RS. Fatmawati Raya No. 5,
                    RT.1/RW.9, Special Capital Region of Jakarta 12430
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-auto mt-16 px-20 max-[496px]:px-3 max-[992px]:w-full flex flex-col gap-12 max-[496px]:gap-4">
          <span className="text-[2rem] font-bold text-black max-[870px]:text-[1.5rem]">
            {translate("sec1")}
          </span>
          <span className="text-[0.9rem] font-extralight text-slate-600">
            {translate("sec6")}
          </span>
          <div className="flex flex-col gap-8 w-full">
            <input
              type="text"
              className="p-2 rounded-xl border border-slate-400 outline-none"
              placeholder="Nama"
            />
            <input
              type="text"
              className="p-2 rounded-xl border border-slate-400 outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              className="p-2 rounded-xl border border-slate-400 outline-none"
              placeholder="Perusahaan"
            />
            <input
              type="text"
              className="p-2 rounded-xl border border-slate-400 outline-none"
              placeholder="No.Telepon"
            />
            <input
              type="text"
              className="p-2 rounded-xl border border-slate-400 outline-none"
              placeholder="Subjek"
            />
            <textarea
              name=""
              id=""
              className="h-[12rem] rounded-xl border border-slate-400 outline-none p-3 resize-none"
            ></textarea>
          </div>
          <div className="flex gap-1 items-start">
            <input type="checkbox" className="border border-slate-400 mt-1" />
            <span className="text-[0.9rem] font-extralight text-slate-600">
              {translate("sec5")}
            </span>
          </div>
          <button className="p-2 bg-[#369FFF] text-white text-center rounded-full w-[12rem]">
            {translate("sec7")}
          </button>
        </div>
      </div>
    </RootLandingPage>
  );
};

export default HubKami;
