"use client";
import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { Link } from "@/navigation";
import { IoArrowBack } from "react-icons/io5";
import imgProduk1 from "../../../../../public/image/EurekaBIZ_Logo_White.svg";
import Image from "next/image";
import ContentPEOne from "@/components/Layout/produk/produk-detail-expert/ContentPEOne";
import ContentPETwo from "@/components/Layout/produk/produk-detail-expert/ContentPETwo";
import ContentPEThree from "@/components/Layout/produk/produk-detail-expert/ContentPEThree";

import ContentPDBOne from "@/components/Layout/produk/produk-detail-biz/ContentPDBOne";
import ContentPDBTwo from "@/components/Layout/produk/produk-detail-biz/ContentPDBTwo";
import ContentPDBThree from "@/components/Layout/produk/produk-detail-biz/ContentPDBThree";

const Page = () => {
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="bg-[url('/image/imageBiz.svg')] w-full h-[50rem] max-[433px]:h-auto bg-no-repeat bg-cover flex flex-col gap-2 p-9">
          <Link
            href={"/produk"}
            className="flex justify-center items-center  gap-1 p-2 w-[12rem] border border-white rounded-full bg-transparent text-white"
          >
            <IoArrowBack /> Kembali
          </Link>
          <div className="flex flex-col gap-1 max-[716px]:gap-0 max-[627px]:mt-[2rem]">
            <Image
              src={imgProduk1}
              alt=""
              width={120}
              height={120}
              className="w-[13rem] h-[10rem] max-[674px]:h-[4rem]"
            ></Image>
            <div className="flex flex-col gap-6 max-[716px]:gap-3 max-[627px]:mt-[2rem]">
              <span className="text-[2rem] font-bold text-white">
                Eureka Biz
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Eureka BIZ merupakan inovasi produk terbaru yang diluncurkan
                oleh Eureka Edutech. Kami hadir memberikan solusi dengan
                membangun ekosistem perekonomian yang lebih mudah melalui satu
                pintu, yang mempertemukan mitra bisnis, investor, dan sesama
                pengguna untuk saling terhubung guna menemukan peluang bisnis
                baru khususnya di bidang pendidikan.
              </span>
            </div>
          </div>
        </div>
        <ContentPDBOne />
        <ContentPDBTwo />
        <ContentPDBThree />
      </div>
    </RootLandingPage>
  );
};

export default Page;
