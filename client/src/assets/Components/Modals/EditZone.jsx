import {React, useEffect, useState } from "react";
import Modal from "react-modal";
import "../../style/addZone.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    border: "none",
    borderRadius: "10px",
    maxWidth: "1000px",
    maxHeight: "90vh",
  },
};

Modal.setAppElement('#root')

function EditZone({ zoneData, modalIsOpen, closeModal, selectedZone }) {
    const [error, setError] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null);
    let backendUrl = 'http://localhost:3000';

  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      zoneData[name] = value;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const zoneId = zoneData.num;
    
        try {
        //   const response = await fetch(`${backendUrl}/zones/${zoneId}`, {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(zoneData),
        //   });
    
        //   if (!response.ok) {
        //     throw new Error("Failed to update zone.");
        //   }
    
          setSubmissionStatus("success");
          setError("");
          onSubmit();
        } catch (error) {
          setError("Failed to update zone. Please try again later.");
        }
      };

  const renderErrorMessage = error && <div className="error">{error}</div>;

  const renderSuccessMessage = submissionStatus === "success" && (
    <div className="message-container">
      <div className="message">Zone updated successfully! 🎉</div>
    </div>
  );

  return (
    <div className="edit-modal">
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={() => console.log("Modal state has changed!")}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Zone Modal"
    >
      <div className="add-zone-container">
        <h2>Edit Zone</h2>
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

          <button type="submit">Update Zone</button>
          <button onClick={closeModal}>Cancel</button>
          {renderSuccessMessage}
          {renderErrorMessage}
        </form>
      </div>
    </Modal>
    </div>
  );
}

export default EditZone;
