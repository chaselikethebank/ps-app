import React from 'react';

const DashZone = ({ zoneData }) => {
  return (
    <div>
      <ul>
        {zoneData.map((zone) => (
          <li key={zone.num}>
            Name: {zone.name} Zone #{zone.num} Cycle time: {zone.runTime} Cycles per week: {zone.daysPerWeek}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashZone;
