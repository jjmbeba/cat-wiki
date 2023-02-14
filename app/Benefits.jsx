import Image from "next/image";
import Link from "next/link";
import React from "react";

const Benefits = () => {
  return (
    <div className="pt-[83px] lg:pt-[100px] flex flex-col lg:flex-row items-center gap-[63px] lg:gap-[46px] pl-0 lg:pl-[108px]">
      <div>
        <h2 className='font-bold text-[40px] lg:text-[48px] leading-[49px] lg:leading-[59px] max-w-[325px] lg:max-w-[430px] text-[#291507] mt-0 lg:mt-[96.4px] relative after:content-[""] after:absolute after:block after:w-[50px] lg:after:w-[67.15px] after:h-[3.21px] after:bg-[#4D270C] after:-top-[16px] after:rounded-[77px]'>
          Why should you have a cat?
        </h2>
        <p className="mt-[43px] font-[500] text-[18px] leading-[22px] text-[#291507] max-w-[339px] lg:max-w-[447px]">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leaves
        </p>
        <Link className="flex items-center gap-[7px] lg:gap-[9px] mt-[26px] lg:mt-[72px]" href="/">
          <span className="text-[#29150799] text-[12px] lg:text-[18px] leading-[15px] lg:leading-[22px] font-[700]">
            SEE MORE
          </span>
          <Image
              src="/ArrowRight.svg"
              width={18}
              height={6}
              alt="arrow-right"
              className="h-auto"
            />
        </Link>
      </div>
      <div className="px-[18px] grid grid-cols-[50px_122.5px_149.98px] lg:grid-cols-[78.03px_195.49px_283.47px] grid-rows-[105.09px_137.6px_46.83px] lg:grid-rows-[167.08px_218.79px_74.45px] gap-[16px] lg:gap-[27px]">
        <Image
          className="col-start-1 col-end-3 flex justify-self-end"
          src="/image2.png"
          width={273.52}
          height={167.08}
          alt="grid-image"
        />
        <Image
          src="/image3.png"
          width={238.47}
          height={385.87}
          alt="grid-image"
          className="col-start-3 col-end-4"
        />
        <Image
          src="/image1.png"
          width={195.49}
          height={293.24}
          alt="grid-image"
          className="row-start-2 row-end-4 col-start-2 col-end-3"
        />
      </div>
    </div>
  );
};

export default Benefits;
