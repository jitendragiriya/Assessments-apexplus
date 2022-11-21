import React from "react";
import { Link } from "react-router-dom";

const SideBarOption = ({ url, name }) => {
  return (
    <>
      <Link
        to={url}
        className="hover:bg-[#f7f7f7] text-[#000000cb] hover:text-cyan-500 font-semibold p-3 capitalize"
      >
        {name}
      </Link>
    </>
  );
};

export default SideBarOption;
