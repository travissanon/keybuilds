import "./App.css";
import { Routes, Route } from "react-router-dom";
import KeyboardBuilder from "./components/KeyboardBuilder/index.tsx";
import PartPicker from "./components/PartPicker/index.tsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<KeyboardBuilder />} />
        <Route path="/pick-part" element={<PartPicker />} />
      </Routes>
    </div>
  );
}

export default App;
