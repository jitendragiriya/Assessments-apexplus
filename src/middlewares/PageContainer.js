import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PageContainer = () => {
  return (
    <>
      <div className="flex w-full relative">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default PageContainer;
