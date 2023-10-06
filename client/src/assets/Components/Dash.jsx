import React, { useState, useEffect } from "react";
import DashZone from "./DashComponents/DashZone";
import DashWeather from "./DashComponents/DashWeather";
import "../style/Dashboard.css";

const Dash = ({ zoneData, userData, userET }) => {
  const [loading, setLoading] = useState(true);
  console.log(userData)

  return (
    <div className="dashboard-container parent">
      <div className="head">
        <h1>Dashboard</h1>
        <h3> &#10024; {userData[0].systemName} &#10024;</h3>
      </div>

      <div className="quick-zones dash-card">
        <h4> My Zones</h4>
        <DashZone zoneData={zoneData} />
      </div>

      <div className="quick-forecast dash-card">
        <h4>Forecast</h4>
        <DashWeather userData={userData} />
      </div>

      <div className="quick-overview dash-card">
        <h4>Consumption and Evapotranspiration</h4>
      </div>
    </div>
  );
};

export default Dash;
