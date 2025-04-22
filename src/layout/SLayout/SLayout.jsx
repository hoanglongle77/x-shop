import Sidebar from "@/shared/UI/store/Sidebar/Sidebar";
import React from "react";
import CommonBG from "../CommonBG/CommonBG";
import PageHeader from "@/shared/UI/store/PageHeader/PageHeader";
import { Row, Col } from "antd";

const SLayout = ({ children, title, description }) => {
  return (
    <CommonBG>
      <PageHeader title={title} description={description} />
      <div className="mt-8">{children}</div>
    </CommonBG>
  );
};

export default SLayout;
