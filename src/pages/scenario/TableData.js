import React  from "react";
import TableChild from "./TableChild";
import { MdEdit } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";
import { VEHICLE_ADD } from "../../constants/urls";
import { setLocalData } from "../../hooks/useLocalStoage";
import { LOCAL_SCENARIO, SCENARIOS } from "../../constants";

const TableData = ({ data , scenario, setscenario}) => {
  const navigate = useNavigate();

  //set data and redirect
  const saveAndRedirect = () => {
    setLocalData(LOCAL_SCENARIO, data.name);
    navigate(VEHICLE_ADD);
  };

   // delete this scenario
   const deleteScenaio = () => { 
    const result = scenario.filter((d) => d.id !== data.id);
    setLocalData(SCENARIOS, result)
    setscenario(result);
  };

  return (
    <>
      <div className="w-full relative flex items-center bg-white text-black border-b border-b-black last:border-b-0">
        <TableChild data={data.id} />
        <TableChild data={data.name} />
        <TableChild data={data.time + "s"} />
        <TableChild data={data.ctn ? data.ctn : 0}/> 
        <button
          onClick={saveAndRedirect}
          className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl"
        >
          <IoIosAddCircle />
        </button>
        <div className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl">
          <MdEdit />
        </div>
        <button className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl" onClick={deleteScenaio}>
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default TableData;
