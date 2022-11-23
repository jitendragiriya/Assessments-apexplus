import React, { useState, useEffect } from "react";
import HeadText from "../../components/HeadText";
import InputText from "../../components/InputText";
import SmallText from "../../components/SmallText";
import { SCENARIOS } from "../../constants";
import { getLocalData, setLocalData } from "../../hooks/useLocalStoage";

const ScenarioAdd = () => {
  const [scenario, setScenario] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const [isName, setIsName] = useState(true);
  const [isTime, setIsTime] = useState(true);

  //get local scenarios
  const getLocal = async () => {
    const data = await getLocalData(SCENARIOS);
    if (data && data.length) {
      setScenario(data);
    }
  };
  useEffect(() => {
    getLocal();
  }, []);
  
  //reset scenario inputs
  const resetInputs = () => {
    setName("");
    setTime("");
  };

  //add scenario
  const addScenario = () => {
    if (!name) {
      setIsName(false);
    } else if (!time) {
      setIsTime(false);
    } else {
      const data = {
        id: scenario.length + 1,
        name,
        time,
      };
      let isExist = false;
      scenario.forEach((item) => {
        if (data.name === item.name) {
          isExist = true;
          alert("This scenario name is exist!")
        }
      });
      if (!isExist) {
        const alldata = [...scenario, data];  
        setLocalData(SCENARIOS, alldata);
        setScenario(alldata);
        resetInputs();
        alert("scenario added successfully.")
      }
    }
  };


  // goto previous page
  const goBack = () => {};

  return (
    <>
      <div className="w-full relative py-6 px-12">
        <SmallText head={"scenario / add"} />
        <div className="mt-6">
          <HeadText head={"add scenario"} />
        </div>
        <div className="p-12 bg-[#2f2f2f] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-4">
          <InputText
            label={"Scenario name"}
            value={name}
            setValue={setName}
            isValid={isName}
            setIsValid={setIsName}
          />
          <InputText
            label={"scenario time (seconds)"}
            value={time}
            setValue={setTime}
            isValid={isTime}
            setIsValid={setIsTime}
            type="number"
          />
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

export default ScenarioAdd;
