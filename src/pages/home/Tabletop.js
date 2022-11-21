import React from "react";
import { tableOptions } from "../../database/table-top-options";

const Tabletop = () => {
  return (
    <>
      <div className="w-full relative flex items-center">
        {tableOptions?.map((item) => (
          <div className="py-2 whitespace-nowrap bg-[#3F3F3F] text-white capitalize font-semibold w-48 flex items-center justify-center">
            {item.option}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabletop;
