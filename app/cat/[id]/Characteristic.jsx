import React from "react";
import Block from "./Block";

const Characteristic = ({ name, rating }) => {
  const rem = 5 - rating;

  return (
    <div className="pt-[32px] flex items-center gap-[70px] relative">
      <span className="font-[700] text-[16px] leading-[20px] text-black">
        {name}:
      </span>
      <div className="flex items-center gap-[8px] absolute left-[175px]">
        {[...Array(rating)].map((item, index) => (
          <Block key={index} brown />
        ))}
        {[...Array(rem)].map((item, index) => (
          <Block key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Characteristic;
