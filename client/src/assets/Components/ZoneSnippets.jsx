import React from "react";
import "../style/window.css"
import "../style/snippet.css"
import EditIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Scope from '@mui/material/ScopedCssBaseline';



const ZoneSnippets = ({ selectedZone }) => {

  return (
    <div className="data-container">
    <div className="data-block">
      Run time: {selectedZone.runTime} min
      </div>
      <div className="data-block">
      Cycles per week: {selectedZone.daysPerWeek }
    </div>
    <div className="data-block">
      Type: {selectedZone.type } zone
    </div>
    <div className="data-block">
      Sun Exposure: {selectedZone.sun }%
    </div>
    <div className="data-block">
      Monthly ET Req: 3.4''
    </div>
    <div className="data-block">
      $3.55 / month
    </div>
    <div className="data-block">
      Desc: {selectedZone.desc}
    </div>
    <div className="data-block">
      Notes: {selectedZone.notes}
    </div>
    <button className="data-block">
      Edit zone 
      <Scope>
      <EditIcon />
      </Scope>
    </button>
    </div>
  );
};

export default ZoneSnippets;
