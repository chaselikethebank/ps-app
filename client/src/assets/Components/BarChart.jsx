import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ zoneData }) => {
  return (
    <div className="bar-chart">
      <Bar data={zoneData} options={options} />
    </div>
  );
};

export default BarChart;