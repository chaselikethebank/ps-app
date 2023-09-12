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
  const [ETData, setETData] = useState();
  const [userET, setUserET] = useState('Austin');
  const [month, setMonth] = useState('July');
  const [sprayRunTime, setSprayRunTime] = useState(0);
  const [rotorRunTime, setRotorRunTime] = useState(0);
  const [dripRunTime, setDripRunTime] = useState(0);


  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

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
  
  useEffect(() => {
    if (ETData) {
      pullUsersET();
    }
  }, [ETData]);
  
  const pullUsersET = () => {
    if (ETData) {
      let userCity = userData[0].city;
      let usersET = ETData.filter((city) => city.city === userCity);
      // console.log(usersET);

      const currentMonthIndex = new Date().getMonth();
      let currentMonth = monthNames[currentMonthIndex];
      const thisMonthsET = usersET[0][currentMonth];

      console.log(currentMonth, thisMonthsET);
      setUserET(thisMonthsET);
      setMonth(currentMonth);
      getSprayRunTime();
      // getRotorRunTime();
      // getDripRunTime();
    } else {
      console.log("ETData is null");
    }
  };

  const getSprayRunTime = () => {
  console.log(selectedZone)
  // let spray = ((((userET / 4) / 1.5) * 60) / selectedZone.daysPerWeek).toFixed(0);
  // console.log(spray)
  }


  if (!selectedZone) {
    return (
      <div className="dash-main">
        <Dash zoneData={zoneData} userData={userData} userET={userET} month={month}/>
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
        <ZoneSnippets selectedZone={selectedZone} userET={userET} month={month}/>
      </div>
{/* 
      <div className="grid-card ">
       
      </div> */}

     
    </div>
  );
};

export default ZoneWindow;
