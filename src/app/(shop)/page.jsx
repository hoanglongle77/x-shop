import AISuggestBanner from "@/components/home/AISuggestBanner/AISuggestBanner";
import CategoryHighlight from "@/components/home/CategoryHighlight/CategoryHighlight";
import FeaturedProducts from "@/components/home/Featured/Featured";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import Lastest from "@/components/home/Lastest/Lastest";
import NewsletterCTA from "@/components/home/NewsletterCTA/NewsletterCTA";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <AISuggestBanner />
      <FeaturedProducts />
      <CategoryHighlight />
      <Lastest />
      <NewsletterCTA />
    </>
  );
};

export default page;
