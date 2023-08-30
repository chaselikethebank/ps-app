import React from "react";
import "../style/card.css";

const ZoneCard = ({ selectedZone }) => {
  if (!selectedZone) {
    return (
      <div className="please-card ">
     
     &#10024; Please select from your zones. &#10024;
   
      </div>
    );
  }

  return (
    <div className="zone-card">
      <h2>
        Zone {selectedZone.num} : {selectedZone.name} {selectedZone.emoji}
      </h2>
      <h4>&#128166; Run Time: {selectedZone.runTime} min &#128166;</h4>
      <div className="zone-img">
        <img src={selectedZone.img} alt={selectedZone.name} />
      </div>
      <div className="zone-card-grid">
        <div className="zone-card-section">
          <h3 className="zone-card-title">Programming</h3>
          <div>
            <p>Seasonal ET: 3.4 inches</p>
            <p>Days / week: {selectedZone.daysPerWeek}</p>

            <p>Run Time: {selectedZone.runTime} min</p>
          </div>
        </div>
        <div className="zone-card-section">
          <h3 className="zone-card-title">Quantitative Data</h3>
          <div>
            <p>Type: {selectedZone.type}</p>
            <p>Sun Exposure: {selectedZone.sun}%</p>
          </div>
          <div></div>
        </div>
        <div className="zone-card-section">
          <h3 className="zone-card-title">Qualitative Data</h3>
          <p>{selectedZone.desc}</p>
          <p>{selectedZone.notes}</p>
        </div>
        <div className="zone-card-section">
          
          <div className="util">
            <div>
              <h6>&#9999;&#65039;</h6>
              <h6>Edit Zone</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
