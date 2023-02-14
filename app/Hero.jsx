"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import catArr from "@/CatsArr";
import {Mystery_Quest} from '@next/font/google'

const mystery = Mystery_Quest({
  subsets:['latin'],
  weight:['400']
});

const Hero = () => {

  const [search, setSearch] = useState("");
  const [foundResults, setFoundResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFoundResults(catArr.filter(({name}) => name.toLowerCase().includes(search.toLowerCase())))
  },[search])

  return (
    <div className="pt-[21px] lg:pt-[115px] pl-[29px] lg:pl-[108px] pb-[25px] lg:pb-[144px] w-full bg-hero-sm lg:bg-hero-lg bg-cover bg-center rounded-t-[42px]">
      <Image
        src="/CatWikiLogo.svg"
        className="invert contrast-[150%] h-auto hidden lg:block"
        height={87}
        width={309}
        alt="logo"
      />
      <h2 className={`${mystery.className} text-white text-[14px] leading-[19px] lg:hidden`}>
        CatWiki
      </h2>
      <p className="pt-[7px] lg:pt-[11px] max-w-[135px] lg:max-w-[371.3px] font-[500] text-white text-[10px] lg:text-[24px] leading-[12px] lg:leading-[29px]">
        Get to know more about your cat breed
      </p>
      <div className="mt-[52px] relative inline-block">
        <input
          type="text"
          name="breed"
          id="breed"
          placeholder="Search"
          className="pl-[13px] pr-[36px] lg:pr-[28px] lg:pl-[28px] py-[8px] lg:py-[23px] rounded-[59px] box-border w-[91px] lg:w-[394px] placeholder:text-[12px] lg:placeholder:text-[18px] placeholder:leading-[15px] lg:placeholder:leading-[22px] placeholder:text-[#291507]"
          onChange={handleChange}
        />
        <span className="text-[#291507] absolute top-[50%] translate-y-[-50%] right-[11px] lg:right-[27px]">
          <Image
            src="/SearchIcon.svg"
            width={17}
            height={17}
            alt="search-icon"
          />
        </span>
        <div className={` w-[394px] h-[219px] px-[11px] bg-white rounded-[24px] absolute -bottom-[235px] z-10 ${search === '' ? 'hidden' : 'block'}`}>
          <div className="listbox w-full h-full overflow-y-scroll first:pt-[28px] last:pb-[28px] flex flex-col items-start gap-[21px]">
            {
              foundResults.map(({name, id}) => (
                <ListItem key={id} id={id} name={name}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
