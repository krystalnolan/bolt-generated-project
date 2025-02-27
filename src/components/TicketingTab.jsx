import React, { useState } from 'react';

function TicketingTab() {
  const [email, setEmail] = useState('');
  const [performance, setPerformance] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customerDetails, setCustomerDetails] = useState(null);

  const handleSearch = () => {
    // Dummy customer details
    const dummyCustomer = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    // Simulate searching for customer details
    setCustomerDetails(dummyCustomer);
  };

  const handlePurchase = () => {
    // Purchase logic here
    alert(`Purchased ${quantity} tickets for ${performance} for ${customerDetails.firstName} ${customerDetails.lastName}`);
  };

  return (
    <div className="ticketing-tab">
      <h2>Ticketing</h2>
      <div className="search-section">
        <input
          type="email"
          placeholder="Search customer by email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSearch}>Search Customer</button>
      </div>

      {customerDetails && (
        <div className="customer-details">
          <h3>Customer Details:</h3>
          <p>Name: {customerDetails.firstName} {customerDetails.lastName}</p>
          <p>Email: {customerDetails.email}</p>
        </div>
      )}

      <div className="purchase-section">
        <h3>Purchase Tickets</h3>
        <label>Performance:</label>
        <select value={performance} onChange={(e) => setPerformance(e.target.value)}>
          <option>Performance A</option>
          <option>Performance B</option>
          <option>Performance C</option>
        </select>

        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />

        <button onClick={handlePurchase}>Purchase Tickets</button>
      </div>
    </div>
  );
}

export default TicketingTab;
