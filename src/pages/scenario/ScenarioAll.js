import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeadText from "../../components/HeadText";
import { SCENARIOS } from "../../constants";
import { SCENARIO_ADD, VEHICLE_ADD } from "../../constants/urls";
import { getLocalData, removeLocalData } from "../../hooks/useLocalStoage";
import TableData from "./TableData";
import TableTop from "./TableTop";

const ScenarioAll = () => {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState([]);

  const getLocalScenario = async () => {
    const data = await getLocalData(SCENARIOS);
    if (data && data.length) {
      setScenarios(data);
    } else {
      navigate(SCENARIO_ADD);
    }
  };
  useEffect(() => {
    getLocalScenario();
  }, []);

  //delete all scenario
  const deleteAllScenario = () => {
    removeLocalData(scenarios);
  };

  return (
    <>
      <div className="w-full relative py-6 px-12 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <HeadText head={"all scenario"} />
          <div className="flex mt-6 gap-4">
            <Link to={SCENARIO_ADD} className="our-button bg-blue-600">
              add scenario
            </Link>
            <Link to={VEHICLE_ADD} className="our-button bg-green-600">
              add vehicle
            </Link>
            <button
              className="our-button bg-orange-600"
              onClick={deleteAllScenario}
            >
              delete all
            </button>
          </div>
        </div>
        <TableTop />
        {scenarios.map((data, index) => (
          <TableData data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default ScenarioAll;
