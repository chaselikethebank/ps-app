import React, { useState, useEffect } from 'react';
import DashZone from './DashComponents/DashZone';
        


const Dash = ({ zoneData, userData }) => {
  
  const [loading, setLoading] = useState(true);
  // console.log()

  return (
    <div>
      <h1>&#10024; {userData[0].systemName} &#10024;</h1>
      <DashZone zoneData={zoneData}/>
      <div>
      </div>
    </div>
  );
};

export default Dash;

