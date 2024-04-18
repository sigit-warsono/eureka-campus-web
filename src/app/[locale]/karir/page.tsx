"use client";
import React, { useEffect } from "react";
import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";
import Aos from "aos";
import "aos/dist/aos.css";

const Karir = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const transalte = useTranslations("career");
  return (
    <RootLandingPage>
      <div className="w-full min-h-[150vh]">
        <div className="flex bg-[url('/image/Images123.svg')] bg-no-repeat bg-cover h-[50rem] max-[598px]:h-[30rem] w-[100%] justify-start p-48 items-end max-[960px]:items-center max-[960px]:p-6">
          <span
            className="text-[3rem] font-bold text-white w-[45rem] max-[694px]:text-[2rem]"
            data-aos="fade-left"
          >
            {transalte("sec1")}
          </span>
        </div>
        <div className="flex justify-center w-full mt-6">
          <div className="flex gap-3 max-[994px]:flex-col">
            <div className="flex">
              <CiSearch className="text-[1.5rem] absolute mt-2 ml-3 text-slate-400" />
              <input
                type="text"
                placeholder="Cari lowongan"
                className="p-2 border-slate-300 border rounded-full outline-none px-9 w-[29rem] max-[1152px]:w-[18rem] max-[994px]:w-[19rem]"
              />
            </div>
            <div className="flex items-center">
              <select
                name=""
                id=""
                className="p-2 border-slate-300 border w-[19rem] rounded-full outline-none px-3 appearance-none"
              >
                <option value="" className="text-slate-400">
                  Semua Divisi
                </option>
                <option value="">Technology</option>
                <option value="">Marketing</option>
                <option value="">Manager</option>
              </select>
              <IoIosArrowDown className="text-[1.5rem] absolute ml-[17rem] text-slate-400 select-all pointer-events-none" />
            </div>
            <div className="flex items-center">
              <select
                name=""
                id=""
                className="p-2 border-slate-300 border w-[19rem] rounded-full outline-none px-3 appearance-none"
              >
                <option value="" className="text-slate-400">
                  Jenis Pekerjaan
                </option>
                <option value="">Software Engineering</option>
                <option value="">Data Science</option>
                <option value="">Project Manajer</option>
              </select>
              <IoIosArrowDown className="text-[1.5rem] absolute ml-[17rem] text-slate-400 select-all pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <span className="hidden max-[817px]:block text-[1rem] text-slate-400 font-bold">
            Mohon maaf, kami belum membuka lowongan apapun
          </span>
          <table className="table-fixed border-collapse border border-slate-400 w-[50rem] max-[817px]:hidden">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">Posisi</th>
                <th className="border border-slate-300 p-2">Divisi</th>
                <th className="border border-slate-300 p-2">Jenis Pekerjaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={3}
                  className="border border-slate-300 text-center p-5 py-24"
                >
                  Mohon maaf, kami belum membuka lowongan apapun
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </RootLandingPage>
  );
};

export default Karir;
