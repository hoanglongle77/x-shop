import CategoryHighlight from "@/components/home/CategoryHighlight/CategoryHighlight";
import FeaturedProducts from "@/components/home/Featured/Featured";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import Lastest from "@/components/home/Lastest/Lastest";
import CommonBG from "@/layout/CommonBG/CommonBG";
import BlogModal from "@/shared/UI/store/BlogModal/BlogModal";
import React from "react";

export const metadata = {
  title: "Trang chủ",
  description:
    "Khám phá các sản phẩm nổi bật, danh mục hấp dẫn và những sản phẩm mới nhất tại cửa hàng của chúng tôi.",
};

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
