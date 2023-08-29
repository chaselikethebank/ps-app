import React from "react";
import "../style/card.css";

const ZoneCard = ({ selectedZone }) => {
  if (!selectedZone) {
    return (
      <div className="zone-card">
        <div className="zone-img">
          <div className="center-message">Please select from your zones.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="zone-card">
      <h2>
        Zone {selectedZone.num} : {selectedZone.name}
      </h2>
      <h4>Run Time: {selectedZone.runTime} min</h4>
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
              <h3>&#9999;&#65039;</h3>
              <h3>Edit Zone</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
