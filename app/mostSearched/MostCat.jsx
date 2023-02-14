import Link from "next/link";
import React from "react";

const MostCat = ({ id, index, image, name, description }) => {
  return (
    <Link href={`/cat/${id}`} className="flex items-center gap-[46px]">
    <img src={image} alt='cat-image' className="w-[170px] h-[170px] rounded-[24px] object-cover"/>
      <div>
        <h2 className="font-[600] text-[36px] leading-[44px] text-[#291507]">
          {index + 1}. {name}
        </h2>
        <p className="pt-[24px] font-[500] text-[18px] leading-[22px] text-[#291507]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MostCat;
