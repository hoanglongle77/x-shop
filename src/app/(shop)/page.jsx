import CategoryHighlight from "@/components/home/CategoryHighlight/CategoryHighlight";
import FeaturedProducts from "@/components/home/Featured/Featured";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import Lastest from "@/components/home/Lastest/Lastest";
import CommonBG from "@/layout/CommonBG/CommonBG";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <CommonBG>
        <FeaturedProducts />
        <CategoryHighlight />
        <Lastest />
      </CommonBG>
      {/* <NewsletterCTA /> */}
    </>
  );
};

export default page;
