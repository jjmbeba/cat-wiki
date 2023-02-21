import React from "react";
import Link from "next/link";
import Cat from "./components/Cat";
import catArr from "@/CatsArr";
import Image from "next/image";

const MostSearched = async () => {
  // const cats = await fetch('http://localhost:3000/api/cats').then((res) => res.json());

  return (
    <div className="pt-[18px] lg:pt-[40px] pb-[53px] lg:pb-[98px] px-[29px] lg:px-[108px] bg-[#E3E1DC]">
      <h3 className='font-[500] text-[12px] lg:text-[18px] leading-[15px] lg:leading-[22px] text-[#291507] relative after:absolute after:content-[""] after:w-[40px] lg:after:w-[59px] after:h-[3px] after:bg-[#4D270C] after:rounded-[77px] after:-bottom-[5px] lg:after:-bottom-[8px] after:left-0'>
        Most Searched Breeds
      </h3>
      <div className="pt-[26px] lg:pt-[47px] flex items-end justify-between">
        <h2 className="font-[700] max-w-[185.12px] lg:max-w-[536.93px] text-[18px] lg:text-[48px] leading-[22px] lg:leading-[58px] text-[#291507]">
          66+ Breeds For you to discover
        </h2>
        <Link className="hidden lg:flex items-center gap-[9px]" href="/mostSearched">
          <span className="text-[#29150799] text-[18px] leading-[22px] font-[700]">
            SEE MORE
          </span>
            <Image
              src="/ArrowRight.svg"
              width={18}
              height={6}
              alt="arrow-right"
            />
        </Link>
      </div>
      <div className="pt-[26px] lg:pt-[46px] grid grid-cols-2 lg:grid-cols-4 gap-x-[16px] gap-y-[18px] lg:gap-[51px]">
        {catArr.map(({ name, id, image }) => (
          <Cat name={name} id={id} key={id} image={image.url} />
        ))}
      </div>
    </div>
  );
};

export default MostSearched;
