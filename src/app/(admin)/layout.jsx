import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
