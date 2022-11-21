import React from "react";
import { sidebarOptions } from "../database/sidebar-options";
import SideBarOption from "./SideBarOption";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#cfecf1] w-72 relative min-h-screen flex flex-col pt-10 min-w-[288px]">
        {sidebarOptions && sidebarOptions.length
          ? sidebarOptions.map((option, index) => (
              <SideBarOption name={option.name} url={option.url} key={index} />
            ))
          : null}
      </div>
    </>
  );
};

export default Sidebar;
