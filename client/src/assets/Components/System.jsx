import React from "react";
import "../style/System.css";

const System = ({ systemName, email, password, systemImg, city }) => {
  return (
    <div className="system-container">
      <h2 className="system-name">2987 Green Grass Dr</h2>
      <div className="system-image">{city}</div>
    </div>
  );
};

export default System;
