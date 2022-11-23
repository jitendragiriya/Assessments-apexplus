import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadText from "../../components/HeadText";
import InputText from "../../components/InputText";
import SmallText from "../../components/SmallText";
import { SCENARIO_WITH_VEHICLE, SCENARIOS, LOCAL_SCENARIO } from "../../constants";
import { SCENARIO_ADD } from "../../constants/urls";
import { directions } from "../../database/vehicle-directions";
import { getLocalData, setLocalData } from "../../hooks/useLocalStoage";
import ScenarioSelect from "./ScenarioSelect";
import VehicleDirection from "./VehicleDirection";

const VehicleAdd = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [scenarios, setScenarios] = useState([]);
  const [scenario, setScenario] = useState(scenarios[0]?.name);
  const [vehicleName, setVehicleName] = useState("");
  const [speed, setSpeed] = useState("");
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [direction, setDirection] = useState(directions[0]?.direction);

  const [isVehicle, setIsVehicle] = useState(true);
  const [isSpeed, setIsSpeed] = useState(true);
  const [isPositionX, setIsPositionX] = useState(true);
  const [isPositionY, setIsPositionY] = useState(true);

  const getLocalScenarios = async () => {
    const data = await getLocalData(SCENARIOS);
    const vehics = await getLocalData(SCENARIO_WITH_VEHICLE);
    if (data && data.length) {
      setScenarios(data);
      setScenario(data[0]?.name);
    } else {
      navigate(SCENARIO_ADD);
    }

    if (vehics && vehics.length) {
      setVehicles(vehics);
    }
    const localScenario = await getLocalData(LOCAL_SCENARIO);
    if(localScenario) setScenario(localScenario)
  };
  useEffect(() => {
    getLocalScenarios();
  }, []);
  //reset scenario inputs
  const resetInputs = () => {
    setVehicleName("");
    setPositionX("");
    setPositionY("");
    setSpeed("");
  };

  //add scenario
  const addScenario = () => {
    if (!vehicleName) {
      setIsVehicle(false);
    } else if (!speed) {
      setIsSpeed(false);
    } else {
      const data = {
        id: vehicles.length + 1,
        scenario,
        vehicleName,
        positionX,
        positionY,
        speed,
        direction,
      };
      let isExist = false;
      vehicles.forEach((item) => {
        if (data.vehicleName === item.vehicleName) {
          isExist = true;
          alert("This vehicle is already exist!");
        }
      });
      if (!isExist) {
        const alldata = [...vehicles, data];
        setLocalData(SCENARIO_WITH_VEHICLE, alldata);
        setVehicles(alldata);
        resetInputs();
        alert("vehicle added successfully.")
      }
    }
  };

  // goto previous page
  const goBack = () => {};

  return (
    <>
      <div className="w-full relative py-6 px-12">
        <SmallText head={"vehicle / add"} />
        <div className="mt-6">
          <HeadText head={"add vehicle"} />
        </div>
        <div className="p-12 bg-[#2f2f2f] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-x-24 lg:gap-y-12 mt-4">
          <ScenarioSelect
            scenarios={scenarios}
            scenario={scenario}
            setScenario={setScenario}
          />
          <InputText
            label={"vehicle name"}
            value={vehicleName}
            setValue={setVehicleName}
            isValid={isVehicle}
            setIsValid={setIsVehicle}
          />
          <InputText
            label={"speed"}
            value={speed}
            setValue={setSpeed}
            isValid={isSpeed}
            setIsValid={setIsSpeed}
            type="number"
          />
          <InputText
            label={"position x"}
            value={positionX}
            setValue={setPositionX}
            isValid={isPositionX}
            setIsValid={setIsPositionX}
            type="number"
          />
          <InputText
            label={"position y"}
            value={positionY}
            setValue={setPositionY}
            isValid={isPositionY}
            setIsValid={setIsPositionY}
            type="number"
          />
          <VehicleDirection direction={direction} setDirection={setDirection} />
        </div> 
        <div className="flex mt-6 gap-4">
          <button className="our-button bg-green-600" onClick={addScenario}>
            add
          </button>
          <button className="our-button bg-orange-600" onClick={resetInputs}>
            reset
          </button>
          <button className="our-button bg-blue-600">go back</button>
        </div>
      </div>
    </>
  );
};

export default VehicleAdd;
