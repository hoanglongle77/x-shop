import ProductList from "@/components/product/ProductList/ProductList";
import CommonBG from "@/layout/CommonBG/CommonBG";
import PageHeader from "@/shared/UI/store/PageHeader/PageHeader";
import React from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Bàn phím cơ Keychron K8",
    desc: "Bluetooth / Wireless - LED RGB - Layout TKL",
    price: "2.590.000₫",
    image: "/keyboard.jpg",
  },
  {
    id: 2,
    name: "Tai nghe Sony WH-1000XM5",
    desc: "Chống ồn chủ động, âm thanh chất lượng cao",
    price: "8.990.000₫",
    image: "/headphones.jpg",
  },
  // Thêm sản phẩm nữa nếu cần
];

const categories = ["Laptop", "Điện thoại", "Gadget"];

const recentProducts = [
  {
    id: 1,
    title: "Sản phẩm mới 1",
    excerpt: "Lorem ipsum...",
    image: "/path/to/product1.jpg",
  },
  {
    id: 2,
    title: "Sản phẩm mới 2",
    excerpt: "Lorem ipsum...",
    image: "/path/to/product2.jpg",
  },
  // thêm sản phẩm mới nhất ở đây
];

const page = () => {
  return (
    <CommonBG>
      <PageHeader
        title="Tất cả sản phẩm"
        description="Khám phá các thiết bị công nghệ được gợi ý bởi AI – dành riêng cho bạn."
      />
      <div className="mt-8">
        <ProductList products={dummyProducts} />
      </div>
    </CommonBG>
  );
};

export default page;
