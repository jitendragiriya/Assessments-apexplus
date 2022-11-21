import React, { useEffect } from "react";
import TableChild from "./TableChild";
import { MdEdit } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SCENARIO_ADD } from "../../constants/urls";

const TableData = ({ data }) => {
    
    
  return (
    <>
      <div className="w-full relative flex items-center bg-white text-black border-b border-b-black last:border-b-0">
        <TableChild data={data.id} />
        <TableChild data={data.name} />
        <TableChild data={data.time + "s"} />
        <Link
          to={SCENARIO_ADD}
          className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl"
        >
          <IoIosAddCircle />
        </Link>
        <div className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl">
          <MdEdit />
        </div>
        <button className="py-2 whitespace-nowrap capitalize font-semibold w-48 flex items-center justify-center text-2xl">
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default TableData;
