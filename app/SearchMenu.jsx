"use client";

import catArr from "@/CatsArr";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

const SearchMenu = ({ setShowMenu }) => {
  const [search, setSearch] = useState("");
  const [foundResults, setFoundResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFoundResults(
      catArr.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleClick = () => {
    setShowMenu(false);
  }

  return (
    <div className="pt-[19.2px] px-[18px] fixed z-20 top-0 left-0 bg-white rounded-[12px] w-screen h-[412px]">
      <div className="w-full h-auto flex justify-end">
        <div className="p-[12px] bg-[rgba(151,151,151,0.1)] rounded-[8px]">
          <Image src="/Close.svg" width={20} height={20} alt="close" onClick={handleClick}/>
        </div>
      </div>
      <div className="mt-[30px] relative inline-block">
        <input
          type="text"
          name="breed"
          id="breed"
          placeholder="Search"
          className="px-[20px] py-[13px] border border-black rounded-[59px] box-border w-[339px] placeholder:text-[18px] placeholder:leading-[22px] lg:placeholder:leading-[22px] placeholder:text-[#291507]"
          onChange={handleChange}
        />
        <span className="text-[#291507] absolute top-[50%] translate-y-[-50%] right-[27px]">
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
            {foundResults.map(({ name, id }) => (
              <ListItem key={id} id={id} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
