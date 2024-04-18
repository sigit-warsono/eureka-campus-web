import React from "react";
import Logo from "../../../../public/image/Eureka_Edutech_Logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#0A1F33] text-white p-5 flex gap-2 items-center justify-center">
      <span>Powered By</span>
      <Image src={Logo} alt="" className="w-[6rem] h-[6rem]" />
    </div>
  );
};

export default Footer;
