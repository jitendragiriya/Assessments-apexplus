import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const ScenarioSelect = ({ scenarios, setScenario, scenario }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative w-full z-40">
        <div className="absolute -top-6 left-0 capitalize font-semibold">scenario list</div>
        <div
          className={`w-full p-2 border rounded border-gray-300 flex justify-between cursor-pointer bg-[#3f3f3f] capitalize items-center ${
            open ? "border-blue-400" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          {scenario}
          <span className="">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div
          className={`absolute w-full top-full left-0 ${open ? "" : "hidden"}`}
        >
          {scenarios.map((item, index) => (
            <div
              key={index}
              className="p-2 bg-[#3f3f3f] rounded capitalize cursor-pointer border-b border-b-black last:border-b-0"
              onClick={() => setScenario(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScenarioSelect;
