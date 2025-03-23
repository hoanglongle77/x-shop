import TrendingCard from "@/shared/UI/TrendingCard/TrendingCard";
import React from "react";

const Trending = () => {
  return (
    <div className="bg-bg text-white w-full p-8 flex justify-center items-center">
      <div className="flex flex-col gap-[30px] md:w-[690] lg:w-[1050]">
        <div className="heading">
          <h3 className="text-[28px] lg:text-[38px]">Trending Products</h3>
          <p className="text-[16px] lg:text-[22px]">
            Checkout our weekly updated trending products.
          </p>
        </div>

        <div className="trendingList grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </div>
    </div>
  );
};

export default Trending;
