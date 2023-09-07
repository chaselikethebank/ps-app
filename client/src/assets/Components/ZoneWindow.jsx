import React from "react";
import "../style/window.css";
import "../style/barchart.css";
import "../style/dash.css";
import "../style/snippet.css";

import { Chart } from "chart.js";
import { Bar } from "recharts";
import BarChart from "./BarChart";
import { useState } from "react";
import ZoneSnippets from "./ZoneSnippets";
import Dash from "./Dash";

const ZoneWindow = ({ selectedZone, zoneData, userData }) => {
  const [chartData, setChartData] = useState({
    labels: zoneData.map((zone) => zone.num),
    datasets: [
      {
        label: "Run Times",
        data: zoneData.map((zone) => zone.runTime),
        backgroundColor: [
          "rgba(255, 0, 0, 0.8)",
          "rgba(0, 0, 255, 0.8)",
          "#1cff01",
          "rgba(255, 0, 255, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
      },
    ],
  });

  if (!selectedZone) {
    return (
      <div className="dash-main">
        <Dash zoneData={zoneData} userData={userData} />
      </div>
    );
  }
  console.log([zoneData]);
  console.log(selectedZone.runTime, "min");

  return (
    <div className="main">
      <div className="grid-card  ">
        <div className="zone-num data-container"> 
        <div className="data-blocks space-between">
          <div>
        Zone {selectedZone.num} </div><div>
        {selectedZone.name} {selectedZone.emoji}</div></div>
        <div>
        </div>
        </div>
      </div>

      <div className="grid-card square-img">
        <img src={selectedZone.img} />
      </div>
      <div className="grid-card ">
        <ZoneSnippets selectedZone={selectedZone} />
      </div>
{/* 
      <div className="grid-card ">
       
      </div> */}

     
    </div>
  );
};

export default ZoneWindow;
