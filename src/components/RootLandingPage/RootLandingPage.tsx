"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../Layout/navbar/Navbar";
import Footer from "../Layout/footer/footer";
import { usePathname } from "next/navigation";
import { usePathname as LangLocal } from "@/navigation";
import { useLocale } from "next-intl";

const RootLandingPage = ({ children }: { children: ReactNode }) => {
  const routePath = usePathname();
  const [lang, setLang] = useState(false);
  const locale = useLocale();

  return (
    <div className="overflow-x-hidden" onClick={() => setLang(false)}>
      <Navbar
        routePath={routePath}
        lang={lang}
        setLang={setLang}
        locale={locale}
      />
      <div className="content mt-20 "></div>
      {children}
      <Footer />
    </div>
  );
};

export default RootLandingPage;
