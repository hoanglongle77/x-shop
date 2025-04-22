import SLayout from "@/layout/SLayout/SLayout";
import React from "react";

export const metadata = {
  title: "Tất cả danh mục",
  description:
    "Khám phá các danh mục sản phẩm được gợi ý bởi AI – dành riêng cho bạn.",
};

const page = () => {
  return (
    <SLayout title={metadata.title} description={metadata.description}>
      <div>
        <h1>Danh muc san pham</h1>
      </div>
    </SLayout>
  );
};

export default page;
