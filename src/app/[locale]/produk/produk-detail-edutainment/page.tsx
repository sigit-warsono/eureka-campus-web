import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { Link } from "@/navigation";
import { IoArrowBack } from "react-icons/io5";
import imgProduk1 from "../../../../../public/image/imgProduk3.svg";
import Image from "next/image";

import ContentPDEOne from "@/components/Layout/produk/produk-detail-edutainment/ContentPDEOne";
import ContentPDETwo from "@/components/Layout/produk/produk-detail-edutainment/ContentPDETwo";
import ContentPDEThree from "@/components/Layout/produk/produk-detail-edutainment/ContentPDEThree";

const Page = () => {
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="bg-[url('/image/BGeDUT.svg')] w-full h-[50rem] max-[433px]:h-auto bg-no-repeat bg-cover flex flex-col gap-2 p-9">
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
                Eureka Edutainment
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Eureka Edutainment hadir setelah event “Indonesia Makin Cakap
                Digital 2022” yang bekerja sama dengan Kementrian Informasi dan
                Komunikasi sebagai bagian dari program nasional Literasi Digital
                2022 yang bertujuan untuk mengakselarasi transformasi digital di
                Indonesia.
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Eureka Edutainment membuat sebuah terobosan, dengan memberikan
                layanan hiburan pendidikan yang komprehensif berdasarkan
                kebutuhan mitra. Layanan ini ada sebagai bentuk perkembangan
                dunia digital yang dapat memanfaatkan teknologi untuk
                kebermanfaatan banyak orang termasuk dalam bidang edukasi.
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Layanan Eureka Edutainment yang ada termasuk Event Organizer and
                Concepting untuk merancang konsep dan mengimplementasi acara
                terkait edukasi dan transformasi digital yang dapat diminati
                orang-orang.
              </span>
            </div>
          </div>
        </div>
        <ContentPDEOne />
        <ContentPDETwo />
        <ContentPDEThree />
      </div>
    </RootLandingPage>
  );
};

export default Page;
