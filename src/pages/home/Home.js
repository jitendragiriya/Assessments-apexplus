import React, { useEffect, useState } from "react";
import { SCENARIO_WITH_VEHICLE } from "../../constants";
import { getLocalData } from "../../hooks/useLocalStoage";
import Row from "./Row";
import ScenarioDropBox from "./ScenarioDropBox";
import TableData from "./TableData";
import Tabletop from "./Tabletop";

const Home = () => {
  const [start, setStart] = useState(false);
  const [scenario, setscenario] = useState([]);

  const getLocalScenarios = async () => {
    const data = await getLocalData(SCENARIO_WITH_VEHICLE);
    if (data && data.length) {
      setscenario(data);
    }
  };
  useEffect(() => {
    getLocalScenarios();
  }, []);
  
  console.log(scenario)

  return (
    <>
      <div className="w-full p-8 overflow-auto">
        <ScenarioDropBox />
        <div className="mt-12">
          <Tabletop />
          {scenario.map((data) => (
            <TableData data={data} />
          ))}
        </div>
        <div className="flex items-center justify-end my-6">
          <button className="our-button" onClick={() => setStart(true)}>
            start simulation
          </button>
          <button
            className="our-button bg-blue-500 ml-6"
            onClick={() => setStart(false)}
          >
            stop simulation
          </button>
        </div>

        <div className="w-full overflow-hidden border border-green-600 rounded bg-black relative">
          {/* col */}
          {[...Array(7)].map((item) => (
            // row
            <Row />
          ))}
          {scenario.map((sce) => (
            <div
              className={`absolute top-0 left-0 ${
                start ? `top-[${+sce.positionX}] left-[${+sce.positionY}]` : ""
              } h-4 w-4 rounded-full bg-orange-500 duration-[${+sce.time}s]`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
