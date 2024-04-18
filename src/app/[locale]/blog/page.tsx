"use client";
import React, { useState } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import Image from "next/image";
import Article1 from "../../../../public/image/ImageArticle.png";
import Article2 from "../../../../public/image/ArtThumb1.png";
import Article3 from "../../../../public/image/ArtThumb2.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { space } from "postcss/lib/list";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Blog = () => {
  const translate = useTranslations("blog");
  const [selectArt, setSelectArt] = useState("semua");
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh] p-8 bg-white gap-6 [@media(max-width:1131px)]:p-2">
        <div className="flex title gap-3 p-10 flex-col">
          <span className="text-[2rem] font-bold max-[544px]:text-[1.7rem]">
            {translate("sec1")}
          </span>
          <span className="text-[1rem] font-extralight">
            {translate("sec2")}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 px-10 mb-5 [@media(max-width:1131px)]:px-1">
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "semua" ? "bg-blue-300 text-[#369FFF]" : "bg-white"
            }`}
            onClick={() => setSelectArt("semua")}
          >
            Semua
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Press_release"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Press_release")}
          >
            Press release
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer  ${
              selectArt == "story" ? "bg-blue-300 text-[#369FFF]" : "bg-white"
            }`}
            onClick={() => setSelectArt("story")}
          >
            Story
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "career" ? "bg-blue-300 text-[#369FFF]" : "bg-white"
            }`}
            onClick={() => setSelectArt("career")}
          >
            Career
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Lifestyle"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Lifestyle")}
          >
            Lifestyle
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "events" ? "bg-blue-300 text-[#369FFF]" : "bg-white"
            }`}
            onClick={() => setSelectArt("events")}
          >
            Events
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Technology"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Technology")}
          >
            Technology
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Education"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Education")}
          >
            Education
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Digital_skill"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Digital_skill")}
          >
            Digital skill
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Professional"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Professional")}
          >
            Professional
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer ${
              selectArt == "Edutainment"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Edutainment")}
          >
            Edutainment
          </span>
          <span
            className={`p-2 rounded-full w-[12rem] border border-slate-400 flex justify-center items-center [@media(max-width:490px)]:w-[7rem] cursor-pointer  ${
              selectArt == "Business"
                ? "bg-blue-300 text-[#369FFF]"
                : "bg-white"
            }`}
            onClick={() => setSelectArt("Business")}
          >
            Business
          </span>
        </div>
        <div className="flex gap-12 [@media(max-width:863px)]:flex-col">
          <div className="w-[50%] [@media(max-width:863px)]:w-[100%] bg-[url('/image/bg-blog.svg')] bg-no-repeat bg-cover h-[20rem]"></div>
          <div className="w-[50%] [@media(max-width:863px)]:w-[100%] flex flex-col gap-[7rem] items-start justify-start">
            <span className="text-[2rem] font-bold w-[100%] max-[544px]:text-[1.7rem]">
              Yuk, Kenal Kurikulum Merdeka Lebih Dekat!
            </span>
            <div className="flex flex-col gap-3">
              <span className="p-2 rounded-full border border-slate-300 font-semibold w-[10rem] flex justify-center">
                Education
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[1rem] font-semibold">Edukasi Tech.</span>
                <span className="font-extralight text-[0.9rem]">
                  27 Desember 2023
                </span>
              </div>
            </div>
          </div>
        </div>

        {selectArt == "semua" || selectArt == "Technology" ? (
          <div className="w-full flex flex-col">
            <div className="flex justify-center flex-wrap gap-5 max-[997px]:flex-col w-full items-start max-[997px]:items-center mt-7 cursor-pointer">
              <Link
                href={
                  "https://medium.com/eureka-edutech/brand-memory-aksi-korporasi-lebih-dari-sekadar-akuisisi-137263b8476d"
                }
                target="_blank"
                className="w-[25%] h-auto max-[997px]:w-[23rem] max-[440px]:w-[18rem]"
              >
                <div className="w-full">
                  <Image
                    src={Article1}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-[17rem] max-[1169px]:h-[14rem]"
                  ></Image>
                </div>
                <div className="flex flex-col gap-6 justify-start p-3">
                  <span className="text-[1.8rem] font-bold max-[1169px]:text-[1.5rem]">
                    Brand Memory, Aksi Korporasi Lebih Dari Sekadar Akuisisi
                  </span>
                  <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                    Technology
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[1.2rem] font-bold">
                      Eureka Edutech
                    </span>
                    <span className="text-[1rem] font-extralight">
                      18 Oktober 2023
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href={
                  "https://medium.com/eureka-edutech/optimalkan-komunikasi-bisnis-sukses-bermitra-7ca522e18f36"
                }
                target="_blank"
                className="w-[25%] h-auto max-[997px]:w-[23rem] max-[440px]:w-[18rem]"
              >
                <div className="w-full">
                  <Image
                    src={Article2}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-[17rem] max-[1169px]:h-[14rem]"
                  ></Image>
                </div>
                <div className="flex flex-col gap-6 justify-start p-3">
                  <span className="text-[1.8rem] font-bold max-[1169px]:text-[1.5rem]">
                    Optimalkan Komunikasi Bisnis, Sukses Bermitra!
                  </span>
                  <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                    Technology
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[1.2rem] font-bold">
                      Eureka Edutech
                    </span>
                    <span className="text-[1rem] font-extralight">
                      12 Oktober 2023
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href={
                  "https://medium.com/eureka-edutech/hore-rilis-aplikasi-eureka-edutech-diramaikan-seminar-pendidikan-nasional-711e9b56795d"
                }
                target="_blank"
                className="w-[25%] h-auto max-[997px]:w-[23rem] max-[440px]:w-[18rem]"
              >
                <div className="w-full">
                  <Image
                    src={Article3}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-[17rem] max-[1169px]:h-[14rem]"
                  ></Image>
                </div>
                <div className="flex flex-col gap-6 justify-start p-3">
                  <span className="text-[1.8rem] font-bold max-[1169px]:text-[1.5rem]">
                    Hore! Rilis Aplikasi Eureka Edutech Diramaikan Seminar
                    Pendidikan Nasional
                  </span>
                  <div className="flex gap-2">
                    <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                      Press Release
                    </span>
                    <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                      Technology
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[1.2rem] font-bold">
                      Eureka Edutech
                    </span>
                    <span className="text-[1rem] font-extralight">
                      25 Desember 2021
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex w-full justify-center items-center gap-8 max-[1018px]:mt-[2rem]">
              <div className="flex justify-center items-center gap-2">
                <div className="w-[3rem] h-[3rem] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                  <HiMiniChevronDoubleLeft className="text-slate-300 text-[2rem]" />
                </div>
                <div className="w-[3rem] h-[3rem] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                  <MdArrowBackIos className="ml-2 text-slate-300" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-[3rem] h-[3rem] rounded-full bg-blue-300 border border-blue-500 flex justify-center items-center text-blue-500">
                  1
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-[3rem] h-[3rem] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                  <MdArrowForwardIos className="ml-2 text-slate-300" />
                </div>
                <div className="w-[3rem] h-[3rem] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                  <HiMiniChevronDoubleRight className="text-slate-300 text-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        ) : selectArt == "Press_release" ? (
          <div className="w-full flex flex-col">
            <div className="flex justify-center flex-wrap gap-5 max-[997px]:flex-col w-full items-start max-[997px]:items-center mt-7">
              <div className="w-[25%] h-auto max-[997px]:w-[23rem] max-[440px]:w-[18rem]">
                <div className="w-full">
                  <Image
                    src={Article3}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-[17rem] max-[1169px]:h-[14rem]"
                  ></Image>
                </div>
                <div className="flex flex-col gap-6 justify-start p-3">
                  <span className="text-[1.8rem] font-bold max-[1169px]:text-[1.5rem]">
                    Hore! Rilis Aplikasi Eureka Edutech Diramaikan Seminar
                    Pendidikan Nasional
                  </span>
                  <div className="flex gap-2">
                    <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                      Press Release
                    </span>
                    <span className="p-2 rounded-full w-[9rem] flex justify-center items-center border border-slate-500">
                      Technology
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[1.2rem] font-bold">
                      Eureka Edutech
                    </span>
                    <span className="text-[1rem] font-extralight">
                      25 Desember 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span className="text-blue-400 font-bold flex w-full justify-center">
            Cooming Soon!
          </span>
        )}
      </div>
    </RootLandingPage>
  );
};

export default Blog;
