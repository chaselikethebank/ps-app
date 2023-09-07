import React from "react";
import "../style/window.css"
import "../style/snippet.css"

const ZoneSnippets = ({ selectedZone }) => {

  return (
    <div >
      <div className="odd">
        <div className="left">Cycle time</div>
        <div className="center">
          <div className="font-up">{selectedZone.runTime} </div>
          min
        </div>
        <div className="posi-change"> ^ 14% over last month</div>
      </div>
      <div className="even">
        <div className="left">Cycles per week</div>
        <div className="center">
          <div className="font-up">{selectedZone.runTime} </div>
          days
        </div>
        <div className="posi-change"> 0% over last month</div>
      </div>
      <div className="odd">
        <div className="left">Monthly ET </div>
        <div className="center">
          <div className="font-up">4.5 </div>
          inches
        </div>
        <div className="posi-change"> ^ 14% over last month</div>
      </div>
      <div className="even">
        <div className="left">Zone Cost</div>
        <div className="center">
          <div className="font-up">$4 </div>
          per month
        </div>
        <div className="posi-change"> 0% over last month</div>
      </div>
    </div>
  );
};

export default ZoneSnippets;
