"use client";
import React, { useEffect, useRef, useState } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import ContentTwo from "@/components/Layout/team-kami/contentTeamTwo";
import ContentOne from "@/components/Layout/team-kami/contentTeamOne";
import ContentThree from "@/components/Layout/team-kami/contentTeamThree";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsSignMergeLeft } from "react-icons/bs";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const TentangKami = () => {
  useEffect(function () {
    Aos.init({ duration: 3000 });
  }, []);

  const translate = useTranslations("tentang-kami");

  const route = useRouter();
  const router = usePathname();
  const pid = router;
  const newString = pid.replace("/en/", "");

  const [scroll, setScroll] = useState("tentang_eureka");

  const TeamUs = useRef<HTMLInputElement | null>(null);
  const We = useRef<HTMLInputElement | null>(null);
  const OrgStruk = useRef<HTMLInputElement | null>(null);
  const Bisnis = useRef<HTMLInputElement | null>(null);

  const handleClickWe = () => {
    We.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("tentang_eureka");
  };

  const handleClickTeamUs = () => {
    TeamUs.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("team_kami");
  };

  const handleClickOrgStruk = () => {
    OrgStruk.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("struktur_org");
  };

  const handleClickBisnis = () => {
    Bisnis.current?.scrollIntoView({ behavior: "smooth" });
    setScroll("lini_bisnis_produk");
  };

  return (
    <RootLandingPage>
      <div className="flex flex-col min-h-[100vh]">
        <div className="w-full h-[80vh] max-[686px]:h-auto bg-[url('/image/back-layer.svg')]">
          <div
            className={`w-full bg-black-colorNew flex gap-9 px-[12rem] max-[1037px]:px-1 max-[687px]:hidden fixed`}
          >
            <span
              className={`text-white p-3 cursor-pointer ${
                scroll == "tentang_eureka"
                  ? "border-b-2 border-blue-600 p-3 pb-1"
                  : "p-3"
              }`}
              onClick={handleClickWe}
            >
              {translate("sec1")}
            </span>
            <span
              className={`text-white cursor-pointer ${
                scroll == "team_kami"
                  ? "border-b-2 border-blue-600 p-3 pb-1"
                  : "p-3"
              }`}
              onClick={handleClickTeamUs}
            >
              {translate("sec2")}
            </span>
            <span
              className={`text-white cursor-pointer ${
                scroll == "struktur_org"
                  ? "border-b-2 border-blue-600 p-3 pb-1"
                  : "p-3"
              }`}
              onClick={handleClickOrgStruk}
            >
              {translate("sec3")}
            </span>
            <span
              className={`text-white cursor-pointer ${
                scroll == "lini_bisnis_produk"
                  ? "border-b-2 border-blue-600 p-3 pb-1"
                  : "p-3"
              }`}
              onClick={handleClickBisnis}
            >
              {translate("sec4")}
            </span>
          </div>
          <div
            className="w-full h-full flex justify-end max-[873px]:justify-start items-center"
            ref={We}
          >
            <div
              className="w-[50%] h-auto p-[7rem] max-[1278px]:w-[60%] max-[1123px]:w-[70%] max-[1035px]:w-[90%] max-[873px]:w-[100%] max-[873px]:p-[1rem] max-[686px]:py-[8rem] flex flex-col gap-4"
              data-aos="fade-right"
            >
              <span className="text-white font-bold text-[2rem]">
                {translate("sec5")}
              </span>
              <span className="text-white font-extralight">
                {translate("sec6")}
              </span>

              <Link
                href={"/produk"}
                className="p-2 bg-[#369FFF] text-white font-extralight w-[12rem] rounded-full mt-8 cursor-pointer flex justify-center items-center"
              >
                {translate("sec7")}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col" ref={TeamUs}>
          <ContentOne />
        </div>
        <div className="flex flex-col" ref={OrgStruk}>
          <ContentTwo />
        </div>
        <div className="flex flex-col" ref={Bisnis}>
          <ContentThree />
        </div>
      </div>
    </RootLandingPage>
  );
};

export default TentangKami;
