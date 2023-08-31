import React, { useState } from "react";
import "../style/addZone.css";

const AddZone = ({oldZoneData}) => {
  const [zoneData, setZoneData] = useState({
    num: "",
    name: "",
    img: "",
    sun: "",
    type: "",
    daysPerWeek: "",
    runTime: "",
    desc: "",
    notes: "",
    emoji: "",
  });

   
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setZoneData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form data:", zoneData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", zoneData);
  };

  //need to solve for validating duplicates based on the prev zone numbers that have been allocated
  const currentZoneNum = oldZoneData.map((zone) => zone.num);
    // console.log(currentZoneNum);


  return (


    <div className="add-zone-container">
      <h2>Create a New Zone</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Zone Number:
          <input
            type="number"
            name="num"
            value={zoneData.num}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Zone Name:
          <input
            type="text"
            name="name"
            value={zoneData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Sun Exposure:
          <select
            type="number"
            name="sun"
            value={zoneData.sun}
            onChange={handleInputChange}
            required
          >
            <option value="">Select %</option>
            <option value="0">0</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </label>
        <br />

        <label>
          Type of Zone:
          <select
            value={zoneData.type}
            name="type"
            onChange={handleInputChange}
            required
          >
            <option value="">Select type</option>
            <option value="drip">Drip</option>
            <option value="rotor">Rotor</option>
            <option value="spray">Spray</option>
          </select>
        </label>
        <br />

        <label>
          Number of days Per Week:
          <select
            value={zoneData.daysPerWeek}
            name="daysPerWeek"
            onChange={handleInputChange}
            required
          >
            <option value="">Select days</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <br />

        <label>
          Description:
          <textarea
            type="text"
            name="desc"
            value={zoneData.desc}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Notes:
          <textarea
            type="text"
            name="notes"
            value={zoneData.notes}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Emoji:
          <input
            type="text"
            name="emoji"
            value={zoneData.emoji}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit Zone</button>
      </form>
    </div>
  );
};

export default AddZone;
