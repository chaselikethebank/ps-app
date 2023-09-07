import React from "react";
import "../style/System.css";

const System = ({
  userData: [{ city, systemImg, systemName, weather, temp, state }],
}) => {
  let today = new Date();
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString(undefined, dateOptions);

  return (
    <div className="system-container">
      
      {/* <h4 className="city">{state}</h4> */}
      <h4 className="system-name">
       
        {city} {state} {weather} {temp}°<br></br>
        {formattedDate}
        <div>
          {systemName}
        </div>
      </h4>

     
    </div>
  );
};

export default System;
