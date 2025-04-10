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
    <section className="w-full px-4 sm:px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        Sản phẩm nổi bật 🔥
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
