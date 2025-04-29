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
    <div className="w-full flex justify-center px-2 py-2">
    <div className="w-full max-w-[1920px] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-200 bg-white">   

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
  </div>
  );
}

export default App;
