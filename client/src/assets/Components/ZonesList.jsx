import React from 'react';
import System from './System';
import AddZone from './AddZone';

const ZonesList = ({ zones, onSelectZone, userData, onAddZoneClick }) => {

 
  return (
    <div>
<System userData={userData}/>
<h5 className='my-zones'>&#127968; My Zones: </h5>

    <div className='zones-list'>

      {zones.map((zone) => (
        <div key={zone.num} onClick={() => onSelectZone(zone)} className='zone-item'>
          {zone.name}
        </div>
        
      ))}

{/* <div className='zones-item' onClick={onAddZoneClick}> <a href="/zones/add">+ Zone </a> </div> */}
<button onClick={onAddZoneClick}>+ Zone</button>


     
    </div>
 </div>
    
  );
};

export default ZonesList;