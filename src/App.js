import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";
import "./app.css";
import Breakdown from "./Components/breakdown/Breakdown";

function App() {
  return (
    <div className="App">
      <Navlinks/>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      <Breakdown/>
    </div>
    </div>
  );
}

export default App;
