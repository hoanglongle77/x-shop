import React from "react";
import { renderTextWithDropdowns } from "@/constant/questionType";

const DDList = ({ dataSource }) => {
  return <div>{renderTextWithDropdowns(dataSource.Content)}</div>;
};

export default DDList;
