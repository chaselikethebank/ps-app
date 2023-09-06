import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {} from "chart.js/auto"

const BarChart = ({ chartData }) => {
    // let thisMonth = new Date().getMonth();
    let allMonths = [
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
    ];


 

  return (
    <div className="bar-chart">
      <Bar data={chartData}/>
    </div>
  );
};

export default BarChart;
