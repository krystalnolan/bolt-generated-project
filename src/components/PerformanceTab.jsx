import React, { useState } from 'react';
import PerformanceDetails from './PerformanceTabs/PerformanceDetails';
import DatesAndTimes from './PerformanceTabs/DatesAndTimes';
import Pricing from './PerformanceTabs/Pricing';
import SalesChannels from './PerformanceTabs/SalesChannels';
import TicketDesign from './PerformanceTabs/TicketDesign';
import SYOSTab from './PerformanceTabs/SYOSTab';

function PerformanceTab() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="performance-tab">
      <h2>Performance</h2>
      <div className="performance-tabs">
        <button onClick={() => setActiveTab('details')}>Performance Details</button>
        <button onClick={() => setActiveTab('dates')}>Dates and Times</button>
        <button onClick={() => setActiveTab('pricing')}>Pricing</button>
        <button onClick={() => setActiveTab('channels')}>Sales Channels</button>
        <button onClick={() => setActiveTab('ticket-design')}>Ticket Design</button>
        <button onClick={() => setActiveTab('syos')}>SYOS</button>
      </div>

      <div className="tab-content">
        {activeTab === 'details' && <PerformanceDetails />}
        {activeTab === 'dates' && <DatesAndTimes />}
        {activeTab === 'pricing' && <Pricing />}
        {activeTab === 'channels' && <SalesChannels />}
        {activeTab === 'ticket-design' && <TicketDesign />}
        {activeTab === 'syos' && <SYOSTab />}
      </div>
    </div>
  );
}

export default PerformanceTab;
