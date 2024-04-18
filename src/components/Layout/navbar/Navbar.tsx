"use client";
import React, { useEffect, useState } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import Image from "next/image";
import Logo from "../../../../public/image/Logo.svg";
import Word from "../../../../public/icon/word.svg";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "@/components/modal/sidebar/sidebar";
import { IoClose } from "react-icons/io5";
import { Link } from "@/navigation";
import EdutechBlack from "../../../../public/image/EdutechBlack.svg";
import { useTranslations } from "next-intl";

const Navbar = ({
  routePath,
  lang,
  setLang,
  locale,
}: {
  routePath: string;
  lang: boolean;
  setLang: any;
  locale: string;
}) => {
  const [openSide, setOpenSide] = useState(false);
  const [LogoImage, setLogoImage] = useState(false);
  const [navBagColor, setNavBagColor] = useState(false);

  const newRoute = routePath.replace(`/${locale}/`, "");
  const menu = useTranslations("Navbar");

  return (
    <div>
      <div
        className={`w-full flex justify-between items-center p-3 px-20 [@media(max-width:1045px)]:px-3 fixed z-50 [@media(max-width:952px)]:p-4 bg-[#0A1F33] text-white`}
      >
        <div className="flex items-center gap-2">
          {openSide ? (
            <IoClose
              className="text-white hidden [@media(max-width:952px)]:block text-[2rem] [@media(max-width:952px)]:text-[2rem]"
              onClick={() => setOpenSide(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-white hidden [@media(max-width:952px)]:block text-[2rem] [@media(max-width:952px)]:text-[1.3rem]"
              onClick={() => setOpenSide(true)}
            />
          )}

          {LogoImage ? (
            <Image
              src={EdutechBlack}
              alt=""
              className="w-[8rem] h-[2.5rem] [@media(max-width:952px)]:h-[3rem]"
            />
          ) : (
            <Image
              src={Logo}
              alt=""
              className="w-[8rem] h-[4rem] [@media(max-width:952px)]:h-[3rem]"
            />
          )}
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-10 max-[1191px]:gap-4 [@media(max-width:952px)]:hidden">
            <Link
              href={"/"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("Homepage")}
            </Link>
            <Link
              href={"/tentang-kami"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/tentang-kami`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("AboutUs")}
            </Link>
            <Link
              href={"/pencapaian-kami"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/pencapaian-kami`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("OurAchievements")}
            </Link>
            <Link
              href={"/produk"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/produk` ||
                routePath == `/${locale}/produk/produk-detail-edutech` ||
                routePath == `/${locale}/produk/produk-detail-expert` ||
                routePath == `/${locale}/produk/produk-detail-edutainment` ||
                routePath == `/${locale}/produk/produk-detail-biz`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("Product")}
            </Link>
            <Link
              href={"/karir"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/karir`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("Career")}
            </Link>
            <Link
              href={"/blog"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/blog`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("Blogs")}
            </Link>
            <Link
              href={"/hubungi-kami"}
              className={`font-semibold hover:text-blue-500 cursor-pointer ${
                routePath == `/${locale}/hubungi-kami`
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "border-b-2 border-transparent text-white cursor-pointer"
              }`}
            >
              {menu("Contactus")}
            </Link>
          </div>

          <div
            className="flex flex-col"
            onClick={(e: any) => e.stopPropagation()}
          >
            <div className="flex gap-2 items-center">
              <Image
                src={Word}
                alt=""
                className="w-[1.5rem] h-[1.3rem] [@media(max-width:952px)]:h-[1.3rem]"
              />
              <span>{locale == "id" ? "ID" : "EN"}</span>
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => setLang(true)}
              />
            </div>
            <div
              className={`flex flex-col bg-slate-400 absolute rounded-md mt-8 ${
                lang ? "block" : "hidden"
              }`}
            >
              <Link
                href={routePath == `/${locale}` ? `/` : `/${newRoute}`}
                locale="id"
                className="p-2 text-[0.9rem] border-b-2 border-slate-600 cursor-pointer"
                onClick={() => setLang(false)}
              >
                Indonesia
              </Link>
              <Link
                href={routePath == `/${locale}` ? `/` : `/${newRoute}`}
                locale="en"
                className="p-2 text-[0.9rem] cursor-pointer"
                onClick={() => setLang(false)}
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </div>
      {openSide && <Sidebar setOpenSide={setOpenSide} />}
    </div>
  );
};

export default Navbar;
