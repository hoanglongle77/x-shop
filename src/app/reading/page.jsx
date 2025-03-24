import QuestionList from "@/components/Final-UI/QuestionList/QuestionList";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-300 p-4 min-h-screen flex justify-around">
      <QuestionList />
      <Sidebar />
    </div>
  );
};

export default page;
