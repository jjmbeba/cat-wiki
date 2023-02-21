"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import catArr from "@/CatsArr";
import { Mystery_Quest } from "@next/font/google";
import SearchMenu from "./SearchMenu";
import { useQuery } from "react-query";

const mystery = Mystery_Quest({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  const [search, setSearch] = useState("");
  const [foundResults, setFoundResults] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    setFoundResults(
      data?.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
      )
      );
    }, [search]);
    
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    };
    
    const handleClick = () => {
      setShowMenu(true);
    }
    
    const {isLoading, error, data} = useQuery('data',() => fetch('http://localhost:3000/api/cats').then(res => res.json()))
    
    if(isLoading) return 'Loading...'
    
    if(error) return 'An error has occurred'+error.message
    
    console.log(data);
    
    return (
    <>
      <div className="pt-[21px] lg:pt-[115px] pl-[29px] lg:pl-[108px] pb-[25px] lg:pb-[144px] w-full bg-hero-sm lg:bg-hero-lg bg-cover bg-center rounded-t-[42px]">
        <img
          src="/logo.svg"
          className="invert contrast-[150%] w-auto hidden lg:block h-[87px]"
          alt="logo"
        />
        <h2
          className={`${mystery.className} text-white text-[14px] leading-[19px] lg:hidden`}
        >
          CatWiki
        </h2>
        <p className="pt-[7px] lg:pt-[11px] max-w-[135px] lg:max-w-[371.3px] font-[500] text-white text-[10px] lg:text-[24px] leading-[12px] lg:leading-[29px]">
          Get to know more about your cat breed
        </p>
        <div className="mt-[52px] inline-block relative lg:hidden">
          <div
            className="pl-[13px] pr-[36px] bg-white py-[8px] rounded-[59px] box-border w-[91px] text-[12px] leading-[15px] text-[#291507]"
            onClick={handleClick}
          >
            Search
          </div>
          <span className="text-[#291507] absolute top-[50%] translate-y-[-50%] right-[11px]">
            <Image
              src="/SearchIcon.svg"
              width={17}
              height={17}
              alt="search-icon"
            />
          </span>
        </div>
        <div className="mt-[52px] hidden relative lg:inline-block">
          <input
            type="text"
            name="breed"
            id="breed"
            placeholder="Search"
            className="pr-[28px] pl-[28px] py-[23px] rounded-[59px] box-border w-[394px] placeholder:text-[18px] placeholder:leading-[22px] placeholder:text-[#291507]"
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
          <div
            className={` w-[394px] h-[219px] px-[11px] bg-white rounded-[24px] absolute -bottom-[235px] z-10 ${
              search === "" ? "hidden" : "block"
            }`}
          >
            <div className="listbox w-full h-full overflow-y-scroll first:pt-[28px] last:pb-[28px] flex flex-col items-start gap-[21px]">
              {foundResults?.map(({ name, id }) => (
                <ListItem key={id} id={id} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {showMenu && <SearchMenu setShowMenu={setShowMenu}/>}
    </>
  );
};

export default Hero;