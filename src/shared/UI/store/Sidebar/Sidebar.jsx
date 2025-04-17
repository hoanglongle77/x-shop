"use client";
import React, { useState } from "react";
import { Menu, Checkbox, Slider, Input } from "antd";
import { motion } from "framer-motion";

const { Range } = Slider;

const Sidebar = ({
  type = "product",
  recentItems = [],
  categories = [],
  priceRanges = [],
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Ensure categories and recentItems are arrays
  const validCategories = Array.isArray(categories) ? categories : [];
  const validRecentItems = Array.isArray(recentItems) ? recentItems : [];

  const menuItems = [
    {
      label: <div className="font-semibold text-primary">Danh mục</div>,
      key: "1",
      children: (
        <Checkbox.Group
          options={validCategories}
          value={selectedCategories}
          onChange={handleCategoryChange}
        />
      ),
    },
    {
      label: <div className="font-semibold text-primary">Giá</div>,
      key: "2",
      children: (
        <Range
          min={0}
          max={1000000}
          defaultValue={[0, 500000]}
          onChange={handlePriceChange}
          value={priceRange}
          step={10000}
          tipFormatter={(value) => `${value} VND`}
        />
      ),
    },
    {
      label: <div className="font-semibold text-primary">Tìm kiếm</div>,
      key: "3",
      children: (
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Tìm kiếm..."
        />
      ),
    },
  ];

  return (
    <motion.div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <div
        className={`bg-muted p-4 shadow-lg rounded-lg h-full ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Menu mode="inline" className="text-foreground" items={menuItems} />
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-primary">
            {type === "blog" ? "Bài viết mới nhất" : "Sản phẩm mới nhất"}
          </h3>
          {validRecentItems.map((item) => (
            <div key={item.id} className="mt-4">
              <a href={`/${type}/${item.id}`} className="block text-primary">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white p-2 bg-primary rounded-lg"
      >
        {isOpen ? "Ẩn" : "Hiện"} Sidebar
      </button>
    </motion.div>
  );
};

export default Sidebar;
