import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { Link } from "@/navigation";
import { IoArrowBack } from "react-icons/io5";
import imgProduk1 from "../../../../../public/image/imgProduk2.svg";
import Image from "next/image";
import ContentPEOne from "@/components/Layout/produk/produk-detail-expert/ContentPEOne";
import ContentPETwo from "@/components/Layout/produk/produk-detail-expert/ContentPETwo";
import ContentPEThree from "@/components/Layout/produk/produk-detail-expert/ContentPEThree";

const Page = () => {
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="bg-[url('/image/bg-expert.svg')] w-full min-h-[100vh] max-[433px]:h-auto bg-no-repeat bg-cover flex flex-col gap-2 p-9">
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
                Eureka Xpert
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Diluncurkan pada November 2022, Eureka Xpert merupakan salah
                satu produk Eureka yang bertujuan untuk mengembangkan bakat dan
                keterampilan profesional terutama digital skill agar dapat
                beradaptasi dengan transformasi digital dan dunia profesional.
              </span>

              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Layanan dari Eureka Xpert hadir dan dirancang untuk membantu
                dalam pengembangan soft skill dan digital skill. Hingga saat
                ini, Eureka Xpert tetap konsisten untuk memberikan pelayanan
                untuk tiap individu maupun kelompok agar memiliki kemampuan
                digital skill yang diinginkan.
              </span>

              <span className="text-white text-[1rem] font-extralight w-[50%] max-[932px]:w-[100%]">
                Layanan dari Eureka Xpert terdiri dari beberapa kelompok, yaitu
                executive leraning untuk profesional, digital talent untuk para
                talenta digital, collage preparation untuk mahasiswa yang ingin
                melanjutan kuliah di jenjang yang lebih tinggi, serta language
                preparation untuk masyarakat umum yang ingin meningkatkan
                kemampuan berbahasa untuk keperluanya masing-masing.
              </span>
            </div>
          </div>
        </div>
        <ContentPEOne />
        <ContentPETwo />
        <ContentPEThree />
      </div>
    </RootLandingPage>
  );
};

export default Page;
