import React from "react";

const Addition = ({ title, value }) => {
  return (
    <div className="text-string">
      <h4 className="font-bold text-[22px] lg:text-[28px]">{value}</h4>
      <p className="text-[16px] lg:text-[24px]">{title}</p>
    </div>
  );
};

export default Addition;
