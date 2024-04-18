"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImgProduk1 from "../../../../public/image/imgProduk1.svg";
import ImgProduk2 from "../../../../public/image/imgProduk2.svg";
import ImgProduk3 from "../../../../public/image/imgProduk3.svg";
import ImgProduk4 from "../../../../public/image/EurekaBIZ_Logo_White.svg";
import { Link } from "@/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export const ContentPodukContentOne = () => {
  const translate = useTranslations("product");
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex flex-col gap-4 w-full p-10 mt-6 mb-6">
      <div
        className="w-[100%] rounded-xl h-[30rem] bg-[url('/image/imageProduk1.svg')] bg-no-repeat bg-cover flex flex-col justify-center items-start p-5 max-[992px]:items-center"
        data-aos="fade-left"
      >
        <Image
          src={ImgProduk1}
          alt=""
          width={120}
          height={120}
          className="w-[9rem] h-[9rem]"
        ></Image>
        <div className="flex flex-col gap-3 w-[40%] max-[904px]:w-[80%]">
          <span className="text-[2rem] font-bold text-white max-[660px]:text-[1.7rem]">
            Eureka Edutech
          </span>
          <span className="text-white text-[1rem]">
            {translate("explainEurekaEdutech")}
          </span>
          <Link
            href={"/produk/produk-detail-edutech"}
            className="p-3 w-[12rem] border border-[#FAFAFA] bg-transparent text-white rounded-full flex justify-center items-center"
          >
            {translate("button")}
          </Link>
        </div>
      </div>
      <div
        className="w-[100%] rounded-xl h-[30rem] bg-[url('/image/imageProduk2.svg')] bg-no-repeat bg-cover flex flex-col justify-center items-start p-5 max-[992px]:items-center"
        data-aos="fade-right"
      >
        <Image
          src={ImgProduk2}
          alt=""
          width={120}
          height={120}
          className="w-[9rem] h-[9rem]"
        ></Image>
        <div className="flex flex-col gap-3 w-[40%] max-[904px]:w-[80%]">
          <span className="text-[2rem] font-bold text-white max-[660px]:text-[1.7rem]">
            Eureka Xpert
          </span>
          <span className="text-white text-[1rem]">
            {translate("explainEurekaXpert")}
          </span>
          <Link
            href={"/produk/produk-detail-expert"}
            className="p-3 w-[12rem] border border-[#FAFAFA] bg-transparent text-white rounded-full flex justify-center items-center"
          >
            {translate("button")}
          </Link>
        </div>
      </div>
      <div
        className="w-[100%] rounded-xl h-[30rem] bg-[url('/image/imageProduk3.svg')] bg-no-repeat bg-cover flex flex-col justify-center items-start p-5 max-[992px]:items-center"
        data-aos="fade-left"
      >
        <Image
          src={ImgProduk3}
          alt=""
          width={120}
          height={120}
          className="w-[9rem] h-[9rem]"
        ></Image>
        <div className="flex flex-col gap-3 w-[40%] max-[904px]:w-[80%]">
          <span className="text-[2rem] font-bold text-white max-[660px]:text-[1.7rem]">
            Eureka Edutainment
          </span>
          <span className="text-white text-[1rem]">
            {translate("explainEurekaEdutainment")}
          </span>
          <Link
            href={"/produk/produk-detail-edutainment"}
            className="p-3 w-[12rem] border border-[#FAFAFA] bg-transparent text-white rounded-full flex justify-center items-center"
          >
            {translate("button")}
          </Link>
        </div>
      </div>
      <div
        className="w-[100%] rounded-xl h-[30rem] bg-[url('/image/imageProduk4.svg')] bg-no-repeat bg-cover flex flex-col justify-center items-start p-5 max-[992px]:items-center"
        data-aos="fade-right"
      >
        <Image
          src={ImgProduk4}
          alt=""
          width={120}
          height={120}
          className="w-[9rem] h-[9rem]"
        ></Image>
        <div className="flex flex-col gap-3 w-[40%] max-[904px]:w-[80%]">
          <span className="text-[2rem] font-bold text-white max-[660px]:text-[1.7rem]">
            Eureka Biz
          </span>
          <span className="text-white text-[1rem]">
            {translate("explainEurekaBiz")}
          </span>
          <Link
            href={"/produk/produk-detail-biz"}
            className="p-3 w-[12rem] border border-[#FAFAFA] bg-transparent text-white rounded-full flex justify-center items-center"
          >
            {translate("button")}
          </Link>
        </div>
      </div>
    </div>
  );
};
