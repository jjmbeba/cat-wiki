import Link from "next/link";
import React from "react";

const Cat = ({ image, name, id }) => {
  return (
    <Link href={`/cat/${id}`}>
      <div className="w-[134px] lg:w-[180px] h-[134px] lg:h-[180px]">
        <img
          src={image}
          alt="cat-image"
          className="rounded-[12px] lg:rounded-[24px] h-[134px] lg:h-[180px] object-cover"
        />
      </div>
      <h3 className="mt-[11px] lg:mt-[20px] font-[600] text-[12px] lg:text-[18px] leading-[15px] lg:leading-[22px] text-[#291507]">
        {name}
      </h3>
    </Link>
  );
};

export default Cat;
