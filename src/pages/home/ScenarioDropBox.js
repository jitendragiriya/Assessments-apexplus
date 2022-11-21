import React, { useState } from "react";
import { scenarios } from "../../database/scenarios";
import { RiArrowDropDownLine } from "react-icons/ri";

const ScenarioDropBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(scenarios[0]);

  return (
    <>
      <div className="relative w-40">
        <div
          className={`w-full p-2 border rounded border-gray-300 flex justify-between cursor-pointer py-1 bg-[#3f3f3f] capitalize items-center ${
            open ? "border-blue-400" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          {value} 
          <span className="">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className={`absolute w-full top-full left-0 ${open ? "" : "hidden"}`}>
          {scenarios.map((item, index) => (
            <div key={index} className="py-1 p-2 bg-[#3f3f3f] rounded capitalize cursor-pointer" onClick={()=>setValue(item)}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScenarioDropBox;
