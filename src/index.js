import React from 'react';
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ReactDOM.render(
//   <BrowserRouter basename="/"><App /></BrowserRouter>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);