import "../src/assets/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./assets/Components/Navigation";
import Footer from "./assets/Components/Footer";
import SiteBuild from "./assets/Components/SiteBuild";
import ZonesList from "./assets/Components/ZonesList";
import ZoneCard from "./assets/Components/ZoneCard";
import AddZone from "./assets/Components/AddZone"; 
import { useState, useEffect } from "react";
import System from "./assets/Components/System";
import LandingPage from "./assets/Components/LandingPage";

function App() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [zoneData, setZoneData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [addMode, setAddMode] = useState(false); 
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAddZoneClick = () => {
    setAddMode(true);
    setSelectedZone(null); 
  };

  const handleSelectZone = (zone) => {
    setSelectedZone(zone);
    setAddMode(false); 
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch('../local_db/userData.json');
      const data = await res.json();
      setUserData(data)
    } catch (error) {
      console.error("Error fetching user data", error)
    }
  };

  useEffect(() => {
    fetchUserData()
  }, []);

  const fetchZoneData = async () => {
    try {
      const response = await fetch('../local_db/zoneData.json'); 
      const data = await response.json();
      setZoneData(data)
    } catch (error) {
      console.error("Error fetching zone data:", error);
    }
  };

  useEffect(() => {
    fetchZoneData();
  }, []);

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
          <div className="main-grid">
            <ZonesList
              zones={zoneData}
              onSelectZone={handleSelectZone}
              userData={userData}
              loggedIn={loggedIn}
              handleLogoutClick={handleLogoutClick}
              onAddZoneClick={handleAddZoneClick}
            />
            {addMode ? <AddZone oldZoneData={zoneData}/> : <ZoneCard selectedZone={selectedZone} />}
          </div>
          {/* <div className="footer">
            <Footer />
          </div> */}
        </div>
      ) : (
        <div>
          <LandingPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </div>
      )}
    </>
  );
}

export default App;
