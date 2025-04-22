"use client";

import React from "react";
import { Drawer, Button, Checkbox, Collapse } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import clsx from "clsx";

const Sidebar = ({
  type = "product",
  categories = [],
  priceRanges = [],
  tags = [],
}) => {
  const [open, setOpen] = React.useState(false);

  const filters = {
    product: [
      { label: "Danh mục", list: categories },
      { label: "Khoảng giá", list: priceRanges },
    ],
    blog: [
      { label: "Chủ đề", list: categories },
      { label: "Thẻ", list: tags },
    ],
  };

  const data = filters[type] || [];

  const renderList = (list) => {
    const safeList = Array.isArray(list) ? list : [];
    return (
      <Checkbox.Group className="flex flex-col gap-2">
        {safeList.map((item) => (
          <Checkbox key={item} value={item}>
            {item}
          </Checkbox>
        ))}
      </Checkbox.Group>
    );
  };

  const collapseItems = data.map(({ label, list }) => ({
    key: label,
    label,
    children: renderList(list),
  }));

  return (
    <>
      {/* Mobile Button */}
      <div className="md:hidden text-end mb-4">
        <Button icon={<FilterOutlined />} onClick={() => setOpen(true)}>
          Lọc
        </Button>
      </div>

      {/* Sidebar for Desktop */}
      <div
        className={clsx(
          "hidden md:block w-full md:max-w-[250px] p-4 rounded-2xl bg-background border border-border shadow-md"
        )}
      >
        <h2 className="text-lg font-semibold text-primary mb-4">Bộ lọc</h2>
        <Collapse items={collapseItems} accordion ghost />
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Bộ lọc"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        className="md:hidden"
      >
        <Collapse items={collapseItems} accordion ghost />
      </Drawer>
    </>
  );
};

export default Sidebar;
