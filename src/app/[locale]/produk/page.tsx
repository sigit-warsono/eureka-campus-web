"use client";
import React, { useEffect } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { ContentPodukContentOne } from "@/components/Layout/produk/ContentPodukContentOne";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const transalte = useTranslations("produk");
  return (
    <RootLandingPage>
      <div className="min-h-[100vh]">
        <div className="bg-[url('/image/bgCover.svg')] bg-cover bg-no-repeat h-[40rem] flex justify-start items-center p-8">
          <span
            className="font-bold text-[2rem] w-[40%] text-white max-[989px]:w-[70%] max-[564px]:w-[80%] max-[427px]:text-[1.4rem]"
            data-aos="fade-left"
          >
            {transalte("sec1")}
          </span>
        </div>
        <ContentPodukContentOne />
      </div>
    </RootLandingPage>
  );
};

export default Page;
