import React from "react";
import CommonBG from "@/layout/CommonBG/CommonBG";
import PageHeader from "@/shared/UI/store/PageHeader/PageHeader";

const page = () => {
  return (
    <CommonBG>
      <PageHeader
        title="Tất cả bài viết"
        description="Khám phá các bài viết công nghệ được gợi ý bởi AI – dành riêng cho bạn."
      />
    </CommonBG>
  );
};

export default page;
