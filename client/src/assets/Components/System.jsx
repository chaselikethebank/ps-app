import React from "react";
import "../style/System.css";

const System = ({ userData: [{ city, systemImg, systemName, weather, temp, state }] }) => {

  return (
    <div className="system-container">
      <div className="system-image-border">
        <img className="system-image" src={systemImg} alt={systemName} />
      </div>
      <h2 className="city">{state}</h2>

      <h2 className="system-name">
        <div>
          <h6>{systemName}</h6>
        </div>
        {city} {state} {weather} {temp}°<br></br>
      </h2>
        <a href="/" className="logout">
          Logout 
        </a>
    </div>
  );
};

export default System;

