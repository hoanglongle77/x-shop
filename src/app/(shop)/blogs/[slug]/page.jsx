import CommonBG from "@/layout/CommonBG/CommonBG";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return <CommonBG>{slug}</CommonBG>;
};

export default page;
