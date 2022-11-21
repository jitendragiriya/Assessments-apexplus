import React from "react";

const Row = () => {
  return (
    <>
    <div className="flex">
        
      {[...Array(21)].map((d) => (
        <div className="border border-green-500 w-full h-14"></div>
      ))}
      </div>
    </>
  );
};

export default Row;
