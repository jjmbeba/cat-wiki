import Image from "next/image";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="absolute bottom-0 left-[18px] lg:left-[96px] pt-[34px] pb-[42px] w-[339px] lg:w-[1049px] bg-black px-[18px] lg:pl-[108px] lg:pr-[32px] rounded-t-[42px] flex flex-col lg:flex-row items-start gap-[21px] lg:items-center lg:justify-between">
      <Image
        src="/logo.svg"
        className="invert contrast-[150%]"
        height={42.67}
        width={127.72}
        alt="logo"
      />
      <div className="text-white flex items-center">
        <span className="text-[24px] leading-[29px]">© </span>
        <span className="text-[12px] leading-[15px]">created by jjmbeba - devChallenge.io {year}</span>
      </div>
    </div>
  );
};

export default Footer;
