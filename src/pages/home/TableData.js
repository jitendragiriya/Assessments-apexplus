import React from "react";
import TableChild from "./TableChild";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { setLocalData } from "../../hooks/useLocalStoage";
import {  SCENARIO_WITH_VEHICLE } from "../../constants";

const TableData = ({ data, scenario, setscenario }) => {
  // delete this scenario
  const deleteScenaio = () => { 
    const result = scenario.filter((d) => d.id !== data.id);
    setLocalData(SCENARIO_WITH_VEHICLE, result)
    setscenario(result);
  };

  return (
    <>
      <div className="w-full relative flex items-center bg-white text-black border-b border-b-black last:border-b-0">
        <TableChild data={data.id} />
        <TableChild data={data.vehicleName} />
        <TableChild data={data.positionX} />
        <TableChild data={data.positionY} />
        <TableChild data={data.speed} />
        <TableChild data={data.direction} />
        <div className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl">
          <MdEdit />
        </div>
        <button
          className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl"
          onClick={deleteScenaio}
        >
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default TableData;
