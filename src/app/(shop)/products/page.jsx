import ProductList from "@/components/product/ProductList/ProductList";
import CommonBG from "@/layout/CommonBG/CommonBG";
import { productsPage } from "@/services/exampleData";
import PageHeader from "@/shared/UI/store/PageHeader/PageHeader";
import React from "react";

const page = () => {
  return (
    <CommonBG>
      <PageHeader
        title="Tất cả sản phẩm"
        description="Khám phá các thiết bị công nghệ được gợi ý bởi AI – dành riêng cho bạn."
      />
      <div className="mt-8">
        <ProductList products={productsPage} />
      </div>
    </CommonBG>
  );
};

export default page;
