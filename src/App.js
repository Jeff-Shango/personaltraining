import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";
import Breakdown from "./Components/breakdown/Breakdown";
import Sessions from "./Components/sessions/Sessions.jsx"
import Add from "./Components/add/Add"
import Terms from "./Components/terms/TermsCondition"
import ParQForm from "./Components/parq/ParQForm";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Navlinks/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <div className="container">
            <Dashboard/>
            <Breakdown/>
          </div>
        }/>    

          <Route path="/sessions" element={
          <div className="sessions">
            <Sessions/>
          </div>
          
        }/>

          <Route path="/add" element={
            <div className="add">
              <Add/>
            </div>
          } />
          <Route path="/termscondition" element={<Terms/>}/>
          <Route path="/parq" element={<ParQForm/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
