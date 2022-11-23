import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeadText from "../../components/HeadText";
import { SCENARIOS, SCENARIO_WITH_VEHICLE } from "../../constants";
import { SCENARIO_ADD, VEHICLE_ADD } from "../../constants/urls";
import { getLocalData, removeLocalData } from "../../hooks/useLocalStoage";
import TableData from "./TableData";
import TableTop from "./TableTop";

const ScenarioAll = () => {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState([]);

  const getLocalScenario = async () => {
    const data = await getLocalData(SCENARIOS);
    const vehicles = await getLocalData(SCENARIO_WITH_VEHICLE);
    if (data && data.length) {
      let arr = [];
      data.map((d) => { 
        let ctn = 0;
        vehicles.map((da) => { 
          if (d.name === da.scenario) {
            ctn++; 
          }
        });
        arr = [...arr, { ...d, ctn }];
      }); 
      setScenarios(arr);
    } else {
      navigate(SCENARIO_ADD);
    }
  };
  useEffect(() => {
    getLocalScenario();
  }, []);

  //delete all scenario
  const deleteAllScenario = () => {
    alert("scenaios deleting...")
    setScenarios([])
    removeLocalData(SCENARIOS);
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
          <TableData data={data} key={index} scenario={scenarios} setscenario={setScenarios} />
        ))}
      </div>
    </>
  );
};

export default ScenarioAll;
