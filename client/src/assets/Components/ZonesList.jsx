import React from 'react';
import System from './System';
import AddZone from './AddZone';

const ZonesList = ({ zones, onSelectZone, userData, onAddZoneClick, backendUrl }) => {

 
  return (
    <div className='zones-plus'>
<div className='my-zones'>
  <h4>🔑</h4>
  <h5>My Zones</h5>
</div>
    <div className='zones-list'>

      {zones.map((zone) => (
        <div key={zone.num} onClick={() => onSelectZone(zone)} className='zone-item'>
          {zone.name}
        </div>
        
      ))}

{/* <div className='zones-item' onClick={onAddZoneClick}> <a href="/zones/add">+ Zone </a> </div> */}
<button onClick={onAddZoneClick}>+ Zone</button>


     
    </div>
    {/* write conditional rendering based on media query for display none when in mobile and vice verse on the other vew for the other component */}
{/* <System userData={userData}/> */}

 </div>
    
  );
};

export default ZonesList;