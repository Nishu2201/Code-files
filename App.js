import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home1 from './Components/Home1.jsx';
import Home from './Components/Home.jsx';
import WebDev  from './Components/WebDev.jsx';
import FrontEndDev  from './Components/FrontEndDev.jsx';
import BackEndDev  from './Components/BackEndDev.jsx';
import MobileDev from './Components/MobileDev.jsx';
import BlockchainDev from './Components/BlockchainDev.jsx';
import GameDev from './Components/GameDev.jsx';
import Design from './Components/Design.jsx';
import Service from './Components/Service.jsx';
import Contact from './Components/Contact.jsx';
import About  from './Components/About.jsx';
import Navbar from './Components/Navbar.jsx'

//  css files path
// import './Styles/Contact.css';
// import './Styles/About.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home1 />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/web devlopmement' element={<WebDev />} />
          <Route path='/frontend' element={<FrontEndDev />} />
          <Route path='/backend' element={<BackEndDev />} />
          <Route path='/mobile devlopmement' element={<MobileDev />} />
          <Route path='/game devlopmement' element={<GameDev />} />
          <Route path='/blockchain devlopmement' element={<BlockchainDev />} />
          <Route path='/design' element={<Design />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
     
    </div>
  );
}

export default App;
