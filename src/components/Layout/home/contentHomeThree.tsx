"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import icon1 from "../../../../public/icon/Icon1.svg";
import icon2 from "../../../../public/icon/Icon2.svg";
import icon3 from "../../../../public/icon/Icon3.svg";
import icon4 from "../../../../public/icon/Icon4.svg";
import Image from "next/image";

const ContentThree = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const translate = useTranslations("contentHomeThree");
  return (
    <div className="flex flex-col gap-16 w-full h-auto p-16">
      <div className="flex flex-col gap-1" data-aos="fade-left">
        <span className="font-semibold text-black text-[1.2rem]">
          {translate("section1")}
        </span>
        <span className="font-semibold text-black text-[2rem] max-[843px]:text-[1.5rem]">
          {translate("section2")}
        </span>
      </div>
      <div className="flex gap-10 w-full justify-center">
        <div className="flex justify-center w-[90%] h-auto max-[1008px]:flex-col">
          <div className="w-[50%] max-[1008px]:w-[100%] h-auto">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10 max-[1008px]:grid max-[1008px]:grid-cols-2 max-[1008px]:gap-20 max-[506px]:gap-5">
                <div className="flex gap-3 items-center max-[843px]:flex-col">
                  {/* <span className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-300"></span> */}
                  <Image
                    src={icon1}
                    alt=""
                    className="w-[4.5rem] h-[4.5rem] rounded-full"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col gap-0 max-[843px]:items-center">
                    <span className="text-[2rem] max-[506px]:text-[1.5rem] font-bold text-black">
                      <CountUp
                        end={100}
                        duration={5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                      +
                    </span>
                    <span className="text-[1rem] max-[506px]:text-[0.8rem] font-extralight text-black">
                      App download since 2021*
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center max-[843px]:flex-col">
                  {/* <span className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-300"></span> */}
                  <Image
                    src={icon2}
                    alt=""
                    className="w-[4.5rem] h-[4.5rem] rounded-full"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col gap-0 max-[843px]:items-center">
                    <span className="text-[2rem] max-[506px]:text-[1.5rem] font-bold text-black">
                      <CountUp
                        end={50}
                        duration={5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                      +
                    </span>
                    <span className="text-[1rem] max-[506px]:text-[0.8rem] font-extralight text-black">
                      App download since 2021*
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center max-[843px]:flex-col">
                  <Image
                    src={icon3}
                    alt=""
                    className="w-[4.5rem] h-[4.5rem] rounded-full"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col gap-0 max-[843px]:items-center">
                    <span className="text-[2rem] max-[506px]:text-[1.5rem] font-bold text-black">
                      <CountUp
                        end={270}
                        duration={5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                      K+
                    </span>
                    <span className="text-[1rem] max-[506px]:text-[0.8rem] font-extralight text-black">
                      participant program literasi digital
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center max-[843px]:flex-col">
                  <Image
                    src={icon4}
                    alt=""
                    className="w-[4.5rem] h-[4.5rem] rounded-full"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col gap-0 max-[843px]:items-center">
                    <span className="text-[2rem] max-[506px]:text-[1.5rem] font-bold text-black">
                      <CountUp
                        end={100}
                        duration={5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                      K+
                    </span>
                    <span className="text-[1rem] max-[506px]:text-[0.8rem] font-extralight text-black">
                      participant program literasi digital
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[0.8rem] text-black font-extralight">
                *{translate("section3")}
              </span>
            </div>
          </div>
          <div className="w-[50%] h-full max-[1008px]:w-full max-[1008px]:h-[35rem] max-[1008px]:mt-7 max-[732px]:h-[25rem] max-[433px]:h-[17rem]">
            <div className="box w-full h-[40rem] max-[1421px]:h-full bg-[url('/image/MapLand.svg')] bg-no-repeat bg-[length:100%_100%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentThree;
