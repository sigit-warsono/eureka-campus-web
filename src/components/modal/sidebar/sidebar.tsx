import React from "react";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const Sidebar = ({ setOpenSide }: { setOpenSide: any }) => {
  const routePath = usePathname();
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-0 w-full bg-[#0A1F33] h-[100vh] mt-20 pt-4 [@media(min-width:952px)]:hidden fixed z-40 items-center">
      <Link
        href={"/"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]   flex justify-center`}
      >
        <span className="p-3">Beranda</span>
      </Link>
      <Link
        href={"/tentang-kami"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/tentang-kami` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]  flex justify-center`}
      >
        <span className="p-3">Tentang Kami</span>
      </Link>
      <Link
        href={"/pencapaian-kami"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/pencapaian-kami`
            ? "border-l-8"
            : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]  flex justify-center`}
      >
        <span className="p-3">Pencapaian Kami</span>
      </Link>
      <Link
        href={"/produk"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/produk` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px] flex justify-center`}
      >
        <span className="p-3">Produk</span>
      </Link>
      <Link
        href={"/karir"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/karir` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]  flex justify-center`}
      >
        <span className="p-3">Karir</span>
      </Link>
      <Link
        href={"/blog"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/blog` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]  flex justify-center`}
      >
        <span className="p-3">Blog</span>
      </Link>
      <Link
        href={"/hubungi-kami"}
        onClick={() => setOpenSide(false)}
        className={`font-semibold text-white ${
          routePath == `/${locale}/hubungi-kami` ? "border-l-8" : "border-l-0"
        } border-blue-500 hover:bg-slate-200 hover:text-[#0A1F33] w-full border-b-[0.7px]  flex justify-center`}
      >
        <span className="p-3">Hubungi Kami</span>
      </Link>
    </div>
  );
};

export default Sidebar;
