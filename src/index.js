import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
ReactDOM.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>,
  document.getElementById("root")
);
