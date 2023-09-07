import React, { useState, useEffect } from "react";
import "../style/addZone.css";

const AddZone = ({ oldZoneData, backendUrl, onSubmit }) => {
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [oldZoneNums, setOldZoneNums] = useState([]);
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
    // console.log("Form data:", zoneData);
  };

  const initializeOldZoneNums = () => {
    const nums = oldZoneData.map((zone) => zone.num);
    setOldZoneNums(nums);
  };

  useEffect(() => {
    initializeOldZoneNums();
  }, [oldZoneData]);

  useEffect(() => {
    initializeOldZoneNums();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const num = parseInt(zoneData.num);
    const sun = parseInt(zoneData.sun);
    const daysPerWeek = parseInt(zoneData.daysPerWeek);
    const runTime = parseInt(zoneData.runTime);
    console.log(num, sun, daysPerWeek);

    const isDuplicate = oldZoneNums.includes(parseInt(zoneData.num));

    if (isDuplicate) {
      setError(
        "That Zone Number already exists in your system. Try selecting a zone number that doesn't already represent a zone in your system."
      );
    } else {
      console.log("New Data:", {
        ...zoneData, 
        num,
        sun,
        daysPerWeek,
        runTime
      });
  
      // onSubmit({
      //   ...zoneData, 
      //   num,
      //   sun,
      //   daysPerWeek,
      // });

      setZoneData({
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
      onSubmit({...zoneData, 
        num,
        sun,
        daysPerWeek});
      



      setError("");
      setSubmissionStatus("success");
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 4000);
    }
  };

  const renderErrorMessage = error && <div className="error">{error}</div>;

  const renderSuccessMessage = submissionStatus === "success" && (
    <div className="message-container">
      <div className="message">Your Zone has been added! 🎉</div>
    </div>
  );

  return (
    <div className="add-zone-container">
      <h2>Create a New Zone</h2>
      {renderErrorMessage}

      <form onSubmit={handleSubmit}>
        <label>
          Zone Number:
          <input
            type="number"
            name="num"
            placeholder="7"
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
            placeholder="Back Beds"
            value={zoneData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Image URL:
          <input
            type="text"
            name="img"
            value={zoneData.img}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Sun Exposure:
          <select
            type="number"
            name="sun"
            placeholder="80"
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
            placeholder="Spray"
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
            placeholder="3"
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
            placeholder="Variety of flowers, both perennials and annuals."
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
            placeholder="Sandy soil, can take a lot of water quickly"
            value={zoneData.notes}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Emoji:
          <select
            name="emoji"
            value={zoneData.emoji}
            onChange={handleInputChange}
          >
            <option value="">Select an emoji</option>
            <option value="🌸">🌸 Cherry Blossom</option>
            <option value="🌼">🌼 Blossom</option>
            <option value="🌷">🌷 Tulip</option>
            <option value="🌹">🌹 Rose</option>
            <option value="🌺">🌺 Hibiscus</option>
            <option value="🌻">🌻 Sunflower</option>
            <option value="🌿">🌿 Herb</option>
            <option value="💐">💐 Bouquet</option>
            <option value="🍃">🍃 Leaves</option>
            <option value="🌱">🌱 Sprout</option>
            <option value="🌳">🌳 Tree</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit Zone</button>
        {renderSuccessMessage}
        {renderErrorMessage}
      </form>
    </div>
  );
};

export default AddZone;
