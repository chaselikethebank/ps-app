import React from "react";
import "../style/window.css";
import "../style/index.css";
import "../style/snippet.css";
import { Edit2 } from "react-feather";
import { GoTrash } from 'react-icons/go';


const ZoneSnippets = ({ selectedZone, userET, month }) => {
  


  return (
    <div className="data-container">
      <div className="data-block">Run time: {selectedZone.runTime} min</div>
      <div className="data-block">
        Cycles per week: {selectedZone.daysPerWeek}
      </div>
      <div className="data-block">Type: {selectedZone.type} zone</div>
      <div className="data-block">Sun Exposure: {selectedZone.sun}%</div>
      <div className="data-block">{month}'s ET: {userET}''</div>
      <div className="data-block">$3.55 / month</div>
      <div className="data-block">Desc: {selectedZone.desc}</div>
      <div className="data-block">Notes: {selectedZone.notes}</div>
      <div className="change-snippet-container ">
        <button className="change-snippet">
          <Edit2 size={16} />
        </button>
        <button className="change-snippet">
          <GoTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default ZoneSnippets;
