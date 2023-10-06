import "../src/assets/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./assets/Components/Navigation";
import Footer from "./assets/Components/Footer";
import SiteBuild from "./assets/Components/SiteBuild";
import ZonesList from "./assets/Components/ZonesList";
import ZoneWindow from "./assets/Components/ZoneWindow";
import AddZone from "./assets/Components/AddZone";
import { useState, useEffect } from "react";
import System from "./assets/Components/System";
import LandingPage from "./assets/Components/LandingPage";

function App() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [zoneData, setZoneData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const backendUrl = "http://localhost:3006";

  const handleAddZoneClick = () => {
    setAddMode(true);
    setSelectedZone(null);
  };

  const handleSelectZone = (zone) => {
    setSelectedZone(zone);
    setAddMode(false);
    setEditMode(false);
  };

  const handleEditZoneClick = () => {
    setEditMode(true); 
    setSelectedZone(null);
    console.log("edit mode: " + editMode)
  }

  const fetchUserData = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/userdata`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchZoneData = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/zonedata`);
      const data = await res.json();
      setZoneData(data);
    } catch (error) {
      console.error("Error fetching zone data:", error);
    }
  };

  useEffect(() => {
    fetchZoneData();
  }, []);

  const handleAddZone = async (newZoneData) => {
    try {
      const response = await fetch(`${backendUrl}/api/zonedata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newZoneData),
      });
      if (!response.ok) {
        throw new Error(`POST request failed with status ${response.status}`);
      }
      const responseData = await response.json();
      setZoneData([...zoneData, responseData.data]);
    } catch (error) {
      console.error("POST Error:", error);
    }
  };

  const handleEditZone = async (editedZoneData) => {
    try {
      const response = await fetch(`${backendUrl}/api/zonedata/${editedZoneData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedZoneData),
      });
      if (!response.ok) {
        throw new Error(`PUT request failed with status ${response.status}`);
      }
      const updatedZoneData = zoneData.map((zone) =>
        zone.id === editedZoneData.id ? editedZoneData : zone
      );
      setZoneData(updatedZoneData);
    } catch (error) {
      console.error("PUT Error:", error);
    }
  };

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <div>
          {/* <div 
          className="sticky">
            <System userData={userData} />
            </div> */}
          <div className="main-grid">
            <ZonesList
              
              zones={zoneData}
              onSelectZone={handleSelectZone}
              userData={userData}
              loggedIn={loggedIn}
              handleLogoutClick={handleLogoutClick}
              onAddZoneClick={handleAddZoneClick}
            />
            {addMode ? (
              <AddZone
                oldZoneData={zoneData}
                backendUrl={backendUrl}
                onSubmit={handleAddZone}
              />
            ) : (
              <ZoneWindow zoneData={zoneData} selectedZone={selectedZone} userData={userData} onEditZoneClick={handleEditZoneClick}/>
            )}
          </div>
          {/* <div className="footer">
            <Footer />
          </div> */}
          <div className="break">
            {" "}
          </div>
        </div>
      ) : (
        <div>
          <LandingPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
      )}
    </>
  );
}

export default App;
