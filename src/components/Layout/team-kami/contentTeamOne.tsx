"use client";
import React, { useState } from "react";
import ManagemenentTeam from "./sub-team/managementTeam";
import FinanceTeam from "./sub-team/financeTeam";
import EdutechTeam from "./sub-team/edutechTeam";
import ExpertTeam from "./sub-team/expertTeam";
import EdutementTeam from "./sub-team/edutementTeam";
import DesignTeam from "./sub-team/designTeam";
import TechTeam from "./sub-team/techTeam";
import { useTranslations } from "next-intl";

const ContentOne = () => {
  const translate = useTranslations("tentang-kami");
  const [selectTeam, setSelectTeam] = useState("management_team");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-3 p-20 pb-10">
        <span className="text-black font-bold text-[2rem] max-[981px]:w-full max-[981px]:flex max-[981px]:justify-center max-[501px]:text-[1.5rem]">
          {translate("sec8")}
        </span>
        <div className="flex w-full justify-center text-[1rem] max-[1231px]:text-[0.8rem] max-[1231px]:w-[60rem]">
          <div className="flex max-[985px]:w-[30rem] max-[985px]:flex-wrap max-[985px]:gap-1 max-[985px]:justify-center max-[487px]:w-[20rem]">
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "management_team"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("management_team")}
            >
              Management Team
            </span>
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "finance"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("finance")}
            >
              Finance & Logistic Team
            </span>
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "edutech"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("edutech")}
            >
              Edutech Team
            </span>
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "expert_team"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("expert_team")}
            >
              Xpert Team
            </span>
            {/* <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "edutement_team"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("edutement_team")}
            >
              Edutainment Team
            </span> */}
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "design_team"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("design_team")}
            >
              Design Team
            </span>
            <span
              className={`p-4 border-b-2 cursor-pointer ${
                selectTeam == "tech_team"
                  ? "border-blue-500 border-b-4"
                  : "border-slate-300 cursor-pointer"
              }`}
              onClick={() => setSelectTeam("tech_team")}
            >
              Technology Team
            </span>
          </div>
        </div>
      </div>
      {selectTeam == "management_team" ? (
        <ManagemenentTeam />
      ) : selectTeam == "finance" ? (
        <FinanceTeam />
      ) : selectTeam == "edutech" ? (
        <EdutechTeam />
      ) : selectTeam == "expert_team" ? (
        <ExpertTeam />
      ) : selectTeam == "edutement_team" ? (
        <EdutementTeam />
      ) : selectTeam == "design_team" ? (
        <DesignTeam />
      ) : (
        <TechTeam />
      )}
    </div>
  );
};

export default ContentOne;
