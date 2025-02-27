import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerInfoTab from './components/CustomerInfoTab';
import CustomerProfileTab from './components/CustomerProfileTab';
import UsersTab from './components/UsersTab';
import OptInTab from './components/OptInTab';
import TicketingTab from './components/TicketingTab';
import PerformanceTab from './components/PerformanceTab';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/customer-info">Customer Info</Link></li>
        <li><Link to="/customer-profile">Customer Profile</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/opt-in">Opt-In</Link></li>
        <li><Link to="/ticketing">Ticketing</Link></li>
        <li><Link to="/performance">Performance</Link></li>
      </ul>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/customer-info" element={<CustomerInfoTab />} />
        <Route path="/customer-profile" element={<CustomerProfileTab />} />
        <Route path="/users" element={<UsersTab />} />
        <Route path="/opt-in" element={<OptInTab />} />
        <Route path="/ticketing" element={<TicketingTab />} />
        <Route path="/performance" element={<PerformanceTab />} />
        <Route path="/" element={<CustomerInfoTab />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
