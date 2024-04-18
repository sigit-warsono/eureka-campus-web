import React from "react";

const ContentPDEThree = () => {
  return (
    <div className="h-[40rem] w-full flex max-[710px]:flex-col">
      <div className="w-[50%] max-[710px]:w-full h-[30rem] max-[373px]:h-auto flex justify-center items-center">
        <div className="flex justify-start flex-col gap-3 w-[70%]">
          <span className="title text-[3rem] max-[1096px]:text-[2rem] max-[1096px]:leading-normal max-[459px]:text-[1.5rem]  text-black font-bold leading-[65px]">
            Eureka Edutainment untuk masa yang akan datang
          </span>
          <span className="text-[1rem] font-extralight">
            Eureka Edutainment adalah sebuah bentuk dari kretivitas yang
            memadukan unsur pendidikan dan hiburan didalam layanannya, dengan
            harapan mampu membuat sebuah suatu proses pembelajaran yang lebih
            fleksibel, dapat dinikmati semua orang dan tetap mempertahankan
            unsur edukasi didalamnya.
          </span>
        </div>
      </div>
      <div className="w-[50%] max-[710px]:w-full h-[30rem] bg-red-300 bg-[url('/image/RectangleEDUS.svg')] bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default ContentPDEThree;
