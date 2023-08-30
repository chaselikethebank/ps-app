import React from 'react';
import System from './System';

const ZonesList = ({ zones, onSelectZone, userData }) => {
  return (
    <div>
<System userData={userData}/>
    <div className='zones-list'>

      <h5>&#127968; My Zones: </h5>
      {zones.map((zone) => (
        <div key={zone.num} onClick={() => onSelectZone(zone)} className='zone-item'>
          {zone.name}
        </div>
        
      ))}

<div className='zones-item'> <a href="/zones/add">+ Zone </a> </div>


     
    </div>
 </div>
    
  );
};

export default ZonesList;