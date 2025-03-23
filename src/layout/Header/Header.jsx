"use client";
import Image from "next/image";
import React from "react";
import readingIcon from "@/assets/images/reading.png";

const Header = () => {
  return (
    <div className="bg-gray-300 lg:p-[15px]">
      <div className="flex items-center gap-2 ms-10">
        <Image src={readingIcon} alt="Reading Icon" width={45} height={45} />
        <h3 className="lg:text-[24px] font-bold">Reading Test</h3>
      </div>
    </div>
  );
};

export default Header;
