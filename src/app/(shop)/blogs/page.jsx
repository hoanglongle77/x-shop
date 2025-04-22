import React from "react";
import SLayout from "@/layout/SLayout/SLayout";
import BlogList from "@/components/blog/BlogLIst/BlogList";
import { blogPosts } from "@/services/exampleData";

export const metadata = {
  title: "Tất cả bài viết",
  description:
    "Khám phá các bài viết công nghệ được gợi ý bởi AI – dành riêng cho bạn.",
};

const page = () => {
  return (
    <SLayout title={metadata.title} description={metadata.description}>
      <BlogList blogs={blogPosts} />
    </SLayout>
  );
};

export default page;
