import React from "react";
import { useEffect } from "react";
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

const ZoneWindow = ({ selectedZone, zoneData, userData}) => {
  const backendUrl = "http://localhost:3001";
  const [ETData, setETData] = useState(null);
  const [userET, setUserET] = useState('Austin');


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
  // console.log(backendUrl)


  useEffect(() => {

    fetchETData();
    pullUsersET()
  }, []);

  const fetchETData = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/ETdata`);
      const data = await res.json();
      setETData(data);
    } catch (error) {
      console.error("Error fetching zone data:", error);
    }
  };

  const pullUsersET = async () => { 
    //loop through the ETData and return the monthly ET for the user's city
    try { await fetchETData()
    console.log(ETData)
  } catch (err){
    console.log(err, 'error in pullUsersET')
  }}

  if (!selectedZone) {
    return (
      <div className="dash-main">
        <Dash zoneData={zoneData} userData={userData} />
      </div>
    );
  }



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
