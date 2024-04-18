import React from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { Link } from "@/navigation";
import { IoArrowBack } from "react-icons/io5";
import imgProduk1 from "../../../../../public/image/imgProduk1.svg";
import Image from "next/image";
import ContentPDOne from "@/components/Layout/produk/produk-detail-edutech/ContentPDOne";
import ContentPDTwo from "@/components/Layout/produk/produk-detail-edutech/ContentPDTwo";
import ContentPDThree from "@/components/Layout/produk/produk-detail-edutech/ContentPDThree";
import { useTranslations } from "next-intl";

const Page = () => {
  const translate = useTranslations("produk-detail.eurekaEdutech");
  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="bg-[url('/image/EduDetail.svg')] w-full min-h-[100vh] bg-no-repeat bg-cover flex flex-col gap-2 p-9">
          <Link
            href={"/produk"}
            className="flex justify-center items-center  gap-1 p-2 w-[12rem] border border-white rounded-full bg-transparent text-white"
          >
            <IoArrowBack /> {translate("back")}
          </Link>
          <div className="flex flex-col gap-1 max-[716px]:gap-0 max-[627px]:-mt-[2rem]">
            <Image
              src={imgProduk1}
              alt=""
              width={120}
              height={120}
              className="w-[13rem] h-[10rem]"
            ></Image>
            <div className="flex flex-col gap-6 max-[716px]:gap-3 max-[627px]:-mt-[2rem]">
              <span className="text-[2rem] font-bold text-white">
                Eureka Edutech
              </span>
              <div className="flex flex-col gap-1"></div>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[716px]:w-[80%]">
                {translate("explaiLanding.explain1")}
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[716px]:w-[80%]">
                {translate("explaiLanding.explain2")}
              </span>
              <span className="text-white text-[1rem] font-extralight w-[50%] max-[716px]:w-[80%]">
                {translate("explaiLanding.explain3")}
              </span>
            </div>
          </div>
        </div>
        <ContentPDOne />
        <ContentPDTwo />
        <ContentPDThree />
      </div>
    </RootLandingPage>
  );
};

export default Page;
