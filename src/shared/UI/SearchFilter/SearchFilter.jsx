"use client";
import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import { Search } from "lucide-react"; // Bạn có thể dùng một icon khác nếu thích
import classNames from "classnames";
import PropTypes from "prop-types"; // Đảm bảo chúng ta sử dụng đúng PropTypes

const { Option } = Select;

const SearchFilter = ({
  onSearch,
  onFilterChange,
  onSortChange,
  filters = [],
  sortOptions = [],
  placeholder = "Tìm kiếm...",
  buttonText = "Tìm kiếm",
  filterDefaultValue = "all",
  sortDefaultValue = "price_asc",
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filterDefaultValue);
  const [selectedSort, setSelectedSort] = useState(sortDefaultValue);

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  const handleSortChange = (value) => {
    setSelectedSort(value);
    onSortChange(value);
  };

  return (
    <div className="flex items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-300">
      {/* Tìm kiếm */}
      <div className="flex items-center gap-2 flex-1">
        <Search className="text-xl" />
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={placeholder}
          className="w-full"
        />
        <Button type="primary" onClick={handleSearch}>
          {buttonText}
        </Button>
      </div>

      {/* Bộ lọc */}
      <div className="flex items-center gap-4">
        {/* Bộ lọc sản phẩm */}
        <Select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="w-32"
          defaultValue={filterDefaultValue}
        >
          {filters.map((filter) => (
            <Option key={filter.value} value={filter.value}>
              {filter.label}
            </Option>
          ))}
        </Select>

        {/* Sắp xếp */}
        <Select
          value={selectedSort}
          onChange={handleSortChange}
          className="w-32"
          defaultValue={sortDefaultValue}
        >
          {sortOptions.map((sort) => (
            <Option key={sort.value} value={sort.value}>
              {sort.label}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

// Kiểm tra kiểu dữ liệu của props
SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  filters: PropTypes.array,
  sortOptions: PropTypes.array,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  filterDefaultValue: PropTypes.string,
  sortDefaultValue: PropTypes.string,
};

// Mặc định giá trị cho props
SearchFilter.defaultProps = {
  filters: [
    { label: "Tất cả", value: "all" },
    { label: "Mới", value: "new" },
    { label: "Giảm giá", value: "sale" },
    { label: "Cao cấp", value: "premium" },
  ],
  sortOptions: [
    { label: "Giá tăng dần", value: "price_asc" },
    { label: "Giá giảm dần", value: "price_desc" },
    { label: "Mới nhất", value: "newest" },
    { label: "Đánh giá cao", value: "rating" },
  ],
  placeholder: "Tìm kiếm sản phẩm",
  buttonText: "Tìm kiếm",
  filterDefaultValue: "all",
  sortDefaultValue: "price_asc",
};

export default SearchFilter;
