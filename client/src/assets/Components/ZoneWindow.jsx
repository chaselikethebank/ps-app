import React from "react";
import { useEffect } from "react";
import "../style/window.css";
import "../style/barchart.css";
import "../style/dash.css";
import "../style/snippet.css";
import axios from "axios";

import { Chart } from "chart.js";
import { Bar } from "recharts";
import BarChart from "./BarChart";
import { useState } from "react";
import ZoneSnippets from "./ZoneSnippets";
import Dash from "./Dash";

const ZoneWindow = ({ selectedZone, zoneData, userData, onEditZoneClick }) => {
  const backendUrl = "http://localhost:3001";
  const [ETData, setETData] = useState();
  const [userET, setUserET] = useState("Austin");
  const [month, setMonth] = useState("July");
  const [sprayRunTime, setSprayRunTime] = useState(5);
  const [rotorRunTime, setRotorRunTime] = useState(5);
  const [dripRunTime, setDripRunTime] = useState(5);
  const [ETDataAirtable, setETDataAirtable] = useState();

  useEffect(() => {
    const airTableURL =
      "https://api.airtable.com/v0/appFkJKWLKJo8Go47/Imported%20table?maxRecords=100&view=Grid%20view";
    const bearerToken =
      "patmdYbW280PO4iD6.a496ca4b7c4d143d63943d4e92240b6e9ecb2a19b5b7f01306c497114222ce2d";

    axios
      .get(airTableURL, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data.records);
        setETDataAirtable(response.data.records);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(ETData)

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
    "December",
  ];

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

  useEffect(() => {
    fetchETData();
  }, [selectedZone]);

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
      pullETFromAirtable();
    }
  }, [ETData]);
  
  const pullETFromAirtable = () => {
    if (ETDataAirtable && userData && ETDataAirtable.length > 0 && userData.length > 0) {
      const userCityAirtable = userData[0].city;
      const usersETAirtable = ETDataAirtable.filter(
        (region) => region.fields.city === userCityAirtable
      );
  
      if (usersETAirtable.length > 0) {
        const currentMonthIndex = new Date().getMonth();
        const currentMonth = monthNames[currentMonthIndex];
        const thisMonthsET = usersETAirtable[0].fields[currentMonth];
  
        console.log(usersETAirtable);
        console.log(currentMonth, thisMonthsET);
  
        setUserET(thisMonthsET);
        setMonth(currentMonth);
        getRunTime();
      } else {
        console.log("No data found for the user's city in Airtable.");
      }
    } else {
      console.log("ETDataAirtable or userData is null or empty.");
    }
  };
  

  // const pullUsersETLocal = () => {
  //   if (ETData) {
  //     let userCity = userData[0].city;
  //     let usersET = ETData.filter((city) => city.city === userCity);
  //     // console.log(usersET);

  //     const currentMonthIndex = new Date().getMonth();
  //     let currentMonth = monthNames[currentMonthIndex];
  //     const thisMonthsET = usersET[0][currentMonth];

  //     // console.log(currentMonth, thisMonthsET);
  //     setUserET(thisMonthsET);
  //     setMonth(currentMonth);
  //     getRunTime();
  //   } else {
  //     console.log("ETData is null");
  //   }
  // };

  const getRunTime = () => {
    let monthET = userET;
    let cropET = (monthET * 0.65).toFixed(2);
    let weekET = (cropET / 4.2).toFixed(2);

    if (selectedZone) {
      let sun = (selectedZone.sun * 0.05).toFixed(0);
      // console.log("sun: +" + sun);

      let selectedZoneType = selectedZone.type.toLowerCase();
      if (selectedZoneType === "spray") {
        let spray = (((weekET / 1.5) * 60) / selectedZone.daysPerWeek).toFixed(
          0
        );
        setSprayRunTime(spray);
      } else if (selectedZoneType === "rotor") {
        let rotor = (
          ((weekET / 0.625) * 60) /
          selectedZone.daysPerWeek
        ).toFixed(0);
        setRotorRunTime(rotor);
      } else if (selectedZoneType === "drip") {
        let drip = (((weekET / 0.15) * 60) / selectedZone.daysPerWeek).toFixed(
          0
        );
        setDripRunTime(drip);
      }
    }
  };
  // console.log(
  //   "spray: " + sprayRunTime,
  //   "rotor: " + rotorRunTime,
  //   "drip: " + dripRunTime
  // );

  if (!selectedZone) {
    return (
      <div className="dash-main">
        <Dash
          zoneData={zoneData}
          userData={userData}
          userET={userET}
          month={month}
        />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="grid-card  ">
        <div className="zone-num data-container">
          <div className="data-blocks space-between">
            <div>Zone {selectedZone.num} </div>
            <div>
              {selectedZone.name} {selectedZone.emoji}
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="grid-card square-img">
        <img src={selectedZone.img} />
      </div>
      <div className="grid-card ">
        <ZoneSnippets
          onEditZoneClick={onEditZoneClick}
          selectedZone={selectedZone}
          userET={userET}
          month={month}
          sprayRunTime={sprayRunTime}
          rotorRunTime={rotorRunTime}
          dripRunTime={dripRunTime}
          zoneData={zoneData}
        />
      </div>
    </div>
  );
};

export default ZoneWindow;
