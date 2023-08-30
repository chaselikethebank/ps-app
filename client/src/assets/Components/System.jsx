import React from "react";
import "../style/System.css";

const System = ({ userData: [{ city, systemImg, systemName, weather, temp }] }) => {
  console.log(systemName);

  return (
    <div className="system-container">
        <div className="system-image-border">
        <img className="system-image" src={systemImg} alt={systemName} />
      </div>
      <h2 className="city"></h2>

      <h2 className="system-name"><h6>{systemName}</h6>{city} {weather} {temp}°<br></br> </h2>
    
    </div>
  );
};

export default System;
