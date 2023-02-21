import React from "react";

const Block = ({brown}) => {
  return <div className={`block w-[30px] lg:w-[60px] h-[8px] lg:h-[12px] rounded-[8px] ${brown ? 'bg-[#544439]' : 'bg-[#E0E0E0]'}`}/>;
};

export default Block;
