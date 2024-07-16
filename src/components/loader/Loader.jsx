import {  ScaleLoader } from "react-spinners";
import React from "react";
import "./Loader.css";

function Screen() {
  return (
    <div className="loadingScreen" data-testid = "loader">
      <ScaleLoader color="#36d7b7" /> 
    </div>
  );
}

export default Screen;