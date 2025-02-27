import React, { useState } from 'react';
import './Addresses.css';

function Addresses({ customer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState(customer ? [{
    street1: customer.street1 || '',
    street2: customer.street2 || '',
    suburb: customer.suburb || '',
    state: customer.state || '',
    postcode: customer.postcode || '',
    country: customer.country || ''
  }] : []);

  const [newAddress, setNewAddress] = useState({
    street1: '',
    street2: '',
    suburb: '',
    state: '',
    postcode: '',
    country: ''
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress({
      street1: '',
      street2: '',
      suburb: '',
      state: '',
      postcode: '',
      country: ''
    });
  };

  const handleNewAddressChange = (field, value) => {
    setNewAddress({ ...newAddress, [field]: value });
  };

  return (
    <div className="addresses">
      <h3>Addresses</h3>

      {addresses.map((address, index) => (
        <div key={index} className="address-card">
          {isEditing ? (
            <div className="address-form">
              <label>Street 1:</label>
              <input
                type="text"
                value={address.street1}
                onChange={(e) => handleAddressChange(index, 'street1', e.target.value)}
              />
              <label>Street 2:</label>
              <input
                type="text"
                value={address.street2}
                onChange={(e) => handleAddressChange(index, 'street2', e.target.value)}
              />
              <label>Suburb:</label>
              <input
                type="text"
                value={address.suburb}
                onChange={(e) => handleAddressChange(index, 'suburb', e.target.value)}
              />
              <label>State:</label>
              <input
                type="text"
                value={address.state}
                onChange={(e) => handleAddressChange(index, 'state', e.target.value)}
              />
              <label>Postcode:</label>
              <input
                type="text"
                value={address.postcode}
                onChange={(e) => handleAddressChange(index, 'postcode', e.target.value)}
              />
              <label>Country:</label>
              <input
                type="text"
                value={address.country}
                onChange={(e) => handleAddressChange(index, 'country', e.target.value)}
              />
            </div>
          ) : (
            <div className="address-info">
              <p>Street 1: {address.street1}</p>
              <p>Street 2: {address.street2}</p>
              <p>Suburb: {address.suburb}</p>
              <p>State: {address.state}</p>
              <p>Postcode: {address.postcode}</p>
              <p>Country: {address.country}</p>
            </div>
          )}
        </div>
      ))}

      {isEditing ? (
        <button onClick={toggleEdit}>Save</button>
      ) : (
        <button onClick={toggleEdit}>Edit</button>
      )}

      <div className="new-address-form">
        <h4>Add New Address</h4>
        <label>Street 1:</label>
        <input
          type="text"
          value={newAddress.street1}
          onChange={(e) => handleNewAddressChange('street1', e.target.value)}
        />
        <label>Street 2:</label>
        <input
          type="text"
          value={newAddress.street2}
          onChange={(e) => handleNewAddressChange('street2', e.target.value)}
        />
        <label>Suburb:</label>
        <input
          type="text"
          value={newAddress.suburb}
          onChange={(e) => handleNewAddressChange('suburb', e.target.value)}
        />
        <label>State:</label>
        <input
          type="text"
          value={newAddress.state}
          onChange={(e) => handleNewAddressChange('state', e.target.value)}
        />
        <label>Postcode:</label>
        <input
          type="text"
          value={newAddress.postcode}
          onChange={(e) => handleNewAddressChange('postcode', e.target.value)}
        />
        <label>Country:</label>
        <input
          type="text"
          value={newAddress.country}
          onChange={(e) => handleNewAddressChange('country', e.target.value)}
        />
        <button onClick={handleAddAddress}>Add Address</button>
      </div>
    </div>
  );
}

export default Addresses;
