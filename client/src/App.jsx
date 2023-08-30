import '../src/assets/style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './assets/Components/Navigation';
import Footer from './assets/Components/Footer';
import SiteBuild from './assets/Components/SiteBuild'
import ZonesList from './assets/Components/ZonesList'
import ZoneCard from './assets/Components/ZoneCard';
import { useState } from 'react';
import System from './assets/Components/System';

const zoneData = [
  {
    num: 1,
    name: "Front Bed",
    img: "https://yardzen.com/wp-content/uploads/2022/05/Austin-First-Image.jpg",
    sun: 45,
    type: 'Drip',
    daysPerWeek: 4,
    runTime: 18,
    desc: "A bit of a slope, sandy clay soil",
    notes: 'anything over 20 min tends to runoff',
    emoji: '🌼'
  },
  {
    num: 2,
    name: "Backyard Lawn",
    img: "https://images.beazer.com/7ccdbf12-16c2-4323-92b7-359643fee657-c",
    sun: 65,
    type: 'Spray',
    daysPerWeek: 3,
    runTime: 20,
    desc: "Flat terrain, well-draining soil",
    notes: 'even coverage is important',
    emoji: '🌱'
  },
  {
    num: 3,
    name: "Garden Beds",
    img: "https://s.hdnux.com/photos/01/23/10/50/21793336/4/1200x0.jpg",
    sun: 30,
    type: 'Rotor',
    daysPerWeek: 2,
    runTime: 15,
    desc: "Mixed soil with different plant types",
    notes: 'adjustments needed seasonally',
    emoji: '🌲'
  },
  {
    num: 4,
    name: "Vegetable Garden",
    img: "https://images.ctfassets.net/zma7thmmcinb/6M9SHwNw1Vxa42yMxdg879/b0cbc4f4e22ddf526a9717e9ecef54c0/vertical-vegetable-gardening.jpg",
    sun: 60,
    type: 'Drip',
    daysPerWeek: 5,
    runTime: 12,
    desc: "Raised bed garden with rich soil",
    notes: 'monitor moisture levels regularly',
    emoji: '🥕'
  },
  {
    num: 5,
    name: "Side Patio",
    img: "https://www.sunset.com/wp-content/uploads/side-yards-dining-pr-0223-1200x600.jpg",
    sun: 75,
    type: 'Sprinkler',
    daysPerWeek: 3,
    runTime: 25,
    desc: "Flat area with mixed soil composition",
    notes: 'adjust run time during hot months',
    emoji: '🌱'
  },
  {
    num: 6,
    name: "Side Bed",
    img: "https://www.marthastewart.com/thmb/-j8GdlUc0Lv6KPL3SYJdVanXx4A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flower-bed-getty-0323-2000-629cf34554e24ab1b5fc7bb3033071c9.jpg",
    sun: 45,
    type: 'Drip',
    daysPerWeek: 4,
    runTime: 18,
    desc: "A bit of a slope, sandy clay soil",
    notes: 'anything over 20 min tends to runoff',
    emoji: '🌼'
  }
  
  
  
];

const userData = [
  {
    systemName: "2987 Green Grass HQ",
    email: "2987GreenGrassDr@gmail.com",
    password: 'Greengrass1!',
    systemImg: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    city: 'Dallas, Tx',
    weather: '☀️',
    temp: 85

  }
]

function App() {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleSelectZone = (zone) => {
    setSelectedZone(zone);
  };

  return (
    <>
        {/* <Navigation userData={userData}/> */}

    
      <div className="main-grid">
        <ZonesList zones={zoneData} onSelectZone={handleSelectZone} userData={userData} />
        <ZoneCard selectedZone={selectedZone} />
      </div>

      <div className='footer'>
        <Footer />
        {/* <SiteBuild /> */}
      </div>
    </>
  );
}

export default App;