"use client";
import React, { useEffect, useRef, useState } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { useTranslations } from "next-intl";
import ContentPKOne from "@/components/Layout/pencapaian-kami/ContentPKOne";
import ContentPKTwo from "@/components/Layout/pencapaian-kami/ContentPKTwo";
import ContentPKThree from "@/components/Layout/pencapaian-kami/ContentPKThree";
import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const transalte = useTranslations("pencapaian-kami");
  useEffect(function () {
    Aos.init({ duration: 3000 });
  }, []);

  const [scroll, setScroll] = useState("tujuan_eureka");

  const TujuanEureka = useRef<HTMLInputElement | null>(null);
  const Komitmen = useRef<HTMLInputElement | null>(null);
  const Millstone = useRef<HTMLInputElement | null>(null);

  const handleClickTujuan = () => {
    TujuanEureka.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("tujuan_eureka");
  };

  const handleClickKomit = () => {
    Komitmen.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("komitmen");
  };

  const handleClickOrgMillstoe = () => {
    Millstone.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("millstone");
  };

  return (
    <RootLandingPage>
      <div
        className={`w-full bg-black-colorNew flex gap-9 px-[12rem] max-[1037px]:px-1 max-[687px]:hidden fixed z-10`}
      >
        <span
          className={`text-white p-3 cursor-pointer ${
            scroll == "tujuan_eureka"
              ? "border-b-2 border-blue-600 p-3 pb-1"
              : "p-3"
          }`}
          onClick={handleClickTujuan}
        >
          {transalte("sec4")}
        </span>
        <span
          className={`text-white cursor-pointer ${
            scroll == "komitmen" ? "border-b-2 border-blue-600 p-3 pb-1" : "p-3"
          }`}
          onClick={handleClickKomit}
        >
          {transalte("sec5")}
        </span>
        <span
          className={`text-white cursor-pointer ${
            scroll == "millstone"
              ? "border-b-2 border-blue-600 p-3 pb-1"
              : "p-3"
          }`}
          onClick={handleClickOrgMillstoe}
        >
          {transalte("sec6")}
        </span>
      </div>
      <div className="min-h-[100rem]">
        <div
          className="h-[40rem] w-full bg-[url('/image/bgsection3.svg')] bg-no-repeat bg-cover flex justify-start items-center"
          ref={TujuanEureka}
        >
          <div className="flex flex-col gap-3 justify-start w-[40%] max-[1040px]:w-[50%] max-[812px]:w-[80%] max-[434px]:w-[95%] p-12 text-white">
            <span
              className="text-[3rem] max-[812px]:text-[2rem] font-bold"
              data-aos="fade-left"
            >
              {transalte("sec1")}
            </span>
            <span className="text-[1rem]" data-aos="fade-left">
              {transalte("sec2")}
            </span>
          </div>
        </div>
        <div className="flex" ref={Komitmen}>
          <ContentPKOne />
        </div>
        <div className="flex flex-col" ref={Millstone}>
          <ContentPKTwo />
        </div>

        {/* <ContentPKThree /> */}
      </div>
    </RootLandingPage>
  );
};

export default Page;
