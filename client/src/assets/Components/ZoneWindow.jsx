import React from "react";
import "../style/window.css";
import "../style/barchart.css"
// import "../style/increDecre.css";
import { Chart } from "chart.js";
import { Bar } from "recharts";
import BarChart from "./BarChart";
import { useState } from "react";


const ZoneWindow = ({ selectedZone, zoneData }) => {
  const [chartData, setChartData] = useState({
    labels: zoneData.map((zone) => zone.num),
    datasets: [{ 
        label: "Run Times", 
        data: zoneData.map((zone) => zone.runTime),}],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
        ]
        
  });

  if (!selectedZone) {
    return (
      <div className="please-card ">
        &#10024; Please select from your zones. &#10024;
      </div>
    );
  }
  // console.log([zoneData]);

  return (
    <div className="main">
      <div className="grid-card title space-between ">
        <div className="zone-num"> Zone {selectedZone.num} </div>
        <div>
          {selectedZone.name} {selectedZone.emoji}
        </div>
      </div>

      <div className="grid-card square-img">
        <img src={selectedZone.img} />
      </div>

      <div className="grid-card no-pad det-print title">
        <div className="odd">
          <div className="left">Cycle time</div>
          <div className="center">
            <div className="font-up">{selectedZone.runTime} </div>
            min
          </div>
          <div className="posi-change"> ^ 14% over last month</div>
        </div>
        <div className="even">
          <div className="left">Cycles per week</div>
          <div className="center">
            <div className="font-up">{selectedZone.runTime} </div>
            days
          </div>
          <div className="posi-change"> 0% over last month</div>
        </div>
        <div className="odd">
          <div className="left">Monthly ET requirements</div>
          <div className="center">
            <div className="font-up">4.5 </div>
            inches
          </div>
          <div className="posi-change"> ^ 14% over last month</div>
        </div>
        <div className="even">
          <div className="left">Zone Cost</div>
          <div className="center">
            <div className="font-up">$4 </div>
            per month
          </div>
          <div className="posi-change"> 0% over last month</div>
        </div>
      </div>

      <div className="grid-card ">
      <BarChart chartData={chartData}/>
        
      </div>

      <div className="grid-card no-pad det-row title">
        <div className="even">
          <div className="center title">Zone {selectedZone.num} Details</div>
          <div className="center text">
           {selectedZone.type} Zone
          </div>
          <div className="center text">

           {selectedZone.desc}
          </div>
          <div className="center text">

           {selectedZone.notes}
           
          </div>
          
      
         
        </div>
      </div>
    </div>
  );
};

export default ZoneWindow;
