import React from "react";

const ContentPKThree = () => {
  return (
    <div className="flex w-full justify-center flex-col gap-4 items-center">
      <div className="title text-[1.5rem] font-bold mt-5">Product roadmap</div>
      <div className="flex w-full items-end h-[20vh] bg-slate-300 overflow-auto overflow-x-scroll">
        <div className="flex ">
          <span className="w-[50rem] h-[2rem] bg-blue-300"></span>
          <span className="w-[50rem] h-[2rem] bg-green-300"></span>
          <span className="w-[50rem] h-[2rem] bg-red-300"></span>
          <span className="w-[50rem] h-[2rem] bg-yellow-300"></span>
        </div>
      </div>
    </div>
  );
};

export default ContentPKThree;
