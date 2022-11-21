import React from "react";
import { scenarioTableOptions } from "../../database/scenario-table-top";



const TableTop = () => {
  return (
    <>
      <div className="w-full relative flex items-center justify-between bg-[#3f3f3f] text-white">
        {scenarioTableOptions?.map((item, index) => (
          <div className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center" key={index}>
            {item.option}
          </div>
        ))}
      </div>
    </>
  );
};

export default TableTop;
