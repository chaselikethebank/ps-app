import React from 'react';

const ZonesList = ({ zones, onSelectZone }) => {
  return (
 
    <div className='zones-list'>
      <h5>My Zones:</h5>
      {zones.map((zone) => (
        <div key={zone.num} onClick={() => onSelectZone(zone)} className='zone-item'>
          {zone.name}
        </div>
      ))}
    </div>
    
  );
};

export default ZonesList;