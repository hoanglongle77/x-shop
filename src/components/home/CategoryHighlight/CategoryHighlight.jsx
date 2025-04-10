"use client";

import CategoryCard from "@/shared/UI/store/CategoryCard/CategoryCard";
import {
  LaptopOutlined,
  MobileOutlined,
  ApiOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

export default function CategoryHighlight() {
  const categories = [
    {
      title: "Laptop",
      description: "Hiệu năng cao, phù hợp học tập & gaming.",
      icon: <LaptopOutlined />,
      onClick: () => console.log("Go to Laptop"),
    },
    {
      title: "Mobile",
      description: "Smartphone mới nhất, giá tốt nhất.",
      icon: <MobileOutlined />,
      onClick: () => console.log("Go to Mobile"),
    },
    {
      title: "Phụ kiện AI",
      description: "Thiết bị thông minh, hỗ trợ AI.",
      icon: <ApiOutlined />,
      onClick: () => console.log("Go to AI Devices"),
    },
    {
      title: "Âm thanh",
      description: "Tai nghe, loa, mic chất lượng cao.",
      icon: <CustomerServiceOutlined />,
      onClick: () => console.log("Go to Sound"),
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        Danh mục nổi bật
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, index) => (
          <CategoryCard key={index} category={cat} />
        ))}
      </div>
    </section>
  );
}
