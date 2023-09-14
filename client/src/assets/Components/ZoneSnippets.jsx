import { React, useEffect, useState } from "react";
import "../style/window.css";
import "../style/index.css";
import "../style/snippet.css";
import { Edit2 } from "react-feather";
import { GoTrash } from 'react-icons/go';
import EditZone  from "./Modals/EditZone";

const ZoneSnippets = ({ zoneData, selectedZone, userET, month, sprayRunTime, rotorRunTime, dripRunTime, onEditZoneClick }) => {
  const [runtime, setRuntime] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false); 


  const getRuntime = () => {
    const runtimeMap = {
      spray: sprayRunTime, 
      rotor: rotorRunTime, 
      drip: dripRunTime,   
    };

    let selectedZoneType = selectedZone.type.toLowerCase();

    if (selectedZoneType === "spray" || selectedZoneType === "rotor" || selectedZoneType === "drip"    ) {
      const runtime = runtimeMap[selectedZoneType];
      if (runtime !== undefined) {
        return runtime;
      }
    }

    return null; 
  };

  useEffect(() => {
    setRuntime(getRuntime());
  }, [selectedZone, sprayRunTime, rotorRunTime, dripRunTime]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div className="data-container">
      <div className="data-block">Run time: {runtime} min</div>
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
        <button onClick={openModal} className="change-snippet">
          <Edit2 size={16} />
        </button>
        <button className="change-snippet">
          <GoTrash size={16} />
        </button>
      </div>

      {modalIsOpen && (
        <EditZone
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedZone={selectedZone}
        zoneData={zoneData}
      />
      )}
    </div>
  );
};

export default ZoneSnippets;