"use client";
import Addition from "@/shared/UI/Addition/Addition";
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-bg flex justify-center items-center p-8">
      <div className="flex w-[375] flex-col md:flex-row md:gap-4 md:w-[690] md:h-[380] lg:flex-row lg:gap-6 lg:w-[1050] lg:h-fit">
        <div className="heroLeft w-full flex flex-col md:w-1/2 lg:w-1/2 gap-2">
          <div className="title text-string">
            <h1 className="text-[28px] md:text-[38px] lg:text-[67px]">
              Discover digital art & Collect NFTs
            </h1>
            <p className="text-[16px] md:text-[16px] lg:text-[22px]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <Link
            className="cta w-full text-string text-center font-bold rounded-3xl bg-blue-400 p-4 md:w-[225] lg:w-[225]"
            href="/"
          >
            Get Started
          </Link>
          <div className="addition flex justify-between">
            <Addition title={"Total Sale"} value={"240K+"} />
            <Addition title={"Auctions"} value={"100K+"} />
            <Addition title={"Artists"} value={"240K+"} />
          </div>
        </div>
        <div className="heroRigh w-full md:w-1/2 lg:w-1/2 lg:p-6">
          <Card className="md:w-[330] md:h-[330] lg:w-[510] lg:h-[510]"></Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
