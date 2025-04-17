"use client";

import ProductCard from "@/shared/UI/store/ProductCard/ProductCard";
const dummyProducts = [
  {
    id: 1,
    name: "Bàn phím cơ RGB",
    category: "Gaming Gear",
    price: "1.200.000",
    image: "/products/keyboard1.png",
  },
  {
    id: 2,
    name: "Chuột không dây AI",
    category: "Accessories",
    price: "850.000",
    image: "/products/mouse1.png",
  },
  {
    id: 3,
    name: "Tai nghe Noise Cancel",
    category: "Audio",
    price: "2.100.000",
    image: "/products/headphone1.png",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center tracking-tight">
        Sản phẩm nổi bật 🔥
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
