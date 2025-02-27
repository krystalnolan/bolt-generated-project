import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Addresses from './CustomerProfileTabs/Addresses';
import OptIns from './CustomerProfileTabs/OptIns';
import Relationships from './CustomerProfileTabs/Relationships';
import Donations from './CustomerProfileTabs/Donations';
import Memberships from './CustomerProfileTabs/Memberships';
import Subscriptions from './CustomerProfileTabs/Subscriptions';
import TicketHistory from './CustomerProfileTabs/TicketHistory';
import './CustomerProfileTab.css';

function CustomerProfileTab() {
  const location = useLocation();
  const { customer } = location.state || { customer: null };

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('addresses');

  const [firstName, setFirstName] = useState(customer?.firstName || '');
  const [lastName, setLastName] = useState(customer?.lastName || '');
  const [email, setEmail] = useState(customer?.email || '');
  const [street1, setStreet1] = useState(customer?.street1 || '');
  const [street2, setStreet2] = useState(customer?.street2 || '');
  const [suburb, setSuburb] = useState(customer?.suburb || '');
  const [state, setState] = useState(customer?.state || '');
  const [postcode, setPostcode] = useState(customer?.postcode || '');
  const [country, setCountry] = useState(customer?.country || '');

  if (!customer) {
    return <div>No customer selected.</div>;
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Save logic here (e.g., update database)
    alert(
      `Customer updated: Name: ${firstName} ${lastName}, Email: ${email}`
    );
    setIsEditing(false);
  };

  return (
    <div className="customer-profile-tab">
      <h2>Customer Profile</h2>

      <p><strong>Customer ID:</strong> {customer.id}</p>

      {isEditing ? (
        <div className="edit-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {firstName} {lastName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      )}

      <button className="btn btn-secondary" onClick={toggleEdit}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab('addresses')}>Addresses</button>
        <button onClick={() => setActiveTab('opt-ins')}>Opt-Ins</button>
        <button onClick={() => setActiveTab('relationships')}>Relationships</button>
        <button onClick={() => setActiveTab('donations')}>Donations</button>
        <button onClick={() => setActiveTab('memberships')}>Memberships</button>
        <button onClick={() => setActiveTab('subscriptions')}>Subscriptions</button>
        <button onClick={() => setActiveTab('ticket-history')}>Ticket History</button>
      </div>

      <div className="tab-content">
        {activeTab === 'addresses' && <Addresses customer={customer} />}
        {activeTab === 'opt-ins' && <OptIns />}
        {activeTab === 'relationships' && <Relationships />}
        {activeTab === 'donations' && <Donations />}
        {activeTab === 'memberships' && <Memberships />}
        {activeTab === 'subscriptions' && <Subscriptions />}
        {activeTab === 'ticket-history' && <TicketHistory />}
      </div>
    </div>
  );
}

export default CustomerProfileTab;
