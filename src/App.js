import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";
import "./app.css";
import Breakdown from "./Components/breakdown/Breakdown";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navlinks/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/" element={<Breakdown/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
