import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";

function App() {
  return (
    <div className="App">
      <Navlinks/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
