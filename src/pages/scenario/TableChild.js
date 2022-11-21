import React from "react";

const TableChild = ({data}) => {
  return (
    <>
      <div className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center">
        {data}
      </div> 
    </>
  );
};

export default TableChild;
