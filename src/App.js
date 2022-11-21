import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HOME_URL,
  SCENARIO_ADD,
  SCENARIO_ALL,
  VEHICLE_ADD,
} from "./constants/urls";
import Home from "./pages/home/Home";
import PageContainer from "./middlewares/PageContainer";
import ScenarioAdd from "./pages/scenario/ScenarioAdd";
import VehicleAdd from "./pages/vehicle/VehicleAdd";
import ScenarioAll from "./pages/scenario/ScenarioAll";

function App() {
  return (
    <Router>
      <div className="bg-[#242424] text-[#fff6f6cb] duration-100">
        <Routes>
          <Route element={<PageContainer />}>
            <Route path={HOME_URL} element={<Home />} />
            <Route path={SCENARIO_ADD} element={<ScenarioAdd />} />
            <Route path={SCENARIO_ALL} element={<ScenarioAll />} />
            <Route path={VEHICLE_ADD} element={<VehicleAdd />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
