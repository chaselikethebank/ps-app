import React from 'react';
import System from './System';
import AddZone from './AddZone';

const ZonesList = ({ zones, onSelectZone, userData, onAddZoneClick }) => {

  const onDashboardClick = () => { 
      onSelectZone(null);
  }
 
  return (
    <div className='zones-plus'>
<div className='my-zones'>
  <h4>🔑</h4>
</div>
    <div className='zones-list'>

      {zones.map((zone) => (
        <div key={zone.num} onClick={() => onSelectZone(zone)} className='zone-item '>
          
         {zone.name}
        </div>
        
      ))}

{/* <div className='zones-item' onClick={onAddZoneClick}> <a href="/zones/add">+ Zone </a> </div> */}
<button onClick={onAddZoneClick}>+ Zone</button>
<button onClick={onDashboardClick}>Dashboard</button>

     
    </div>
    

 </div>
    
  );
};

export default ZonesList;