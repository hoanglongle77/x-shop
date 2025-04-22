import ProductList from "@/components/product/ProductList/ProductList";
import CommonBG from "@/layout/CommonBG/CommonBG";
import SLayout from "@/layout/SLayout/SLayout";
import { productsPage } from "@/services/exampleData";
import PageHeader from "@/shared/UI/store/PageHeader/PageHeader";
import Sidebar from "@/shared/UI/store/Sidebar/Sidebar";
import { Row, Col } from "antd";
import React from "react";

export const metadata = {
  title: "Tất cả sản phẩm",
  description:
    "Khám phá các thiết bị công nghệ được gợi ý bởi AI – dành riêng cho bạn.",
};

const page = () => {
  return (
    <SLayout title={metadata.title} description={metadata.description}>
      <ProductList products={productsPage} />
    </SLayout>
  );
};

export default page;
