import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Listing from './pages/Listning';
import PortfolioDetail from './pages/PortfolioDetail';
import Notification from './pages/Notification';
import Summary from './pages/Summary';
import ClientReview from './pages/ClientReview';
import Userprofile from './pages/Userprofile';
import AuthCard from './pages/AuthCard';



function App() {
  return (
    <div className="font-[Poppins]">
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/authcard" element={<AuthCard/>} />

        <Route path="/listning" element={<Listing/>} />
        <Route path="/detail" element={<PortfolioDetail/>} />
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/profile" element={<Userprofile/>}/>
        <Route path="/clientreview" element={<ClientReview/>}/>
        <Route path="/notification" element={<Notification/>}/>

      </Routes>
    </Router>
  </div>
  );
}

export default App;
