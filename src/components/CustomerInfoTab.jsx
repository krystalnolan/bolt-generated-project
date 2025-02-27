
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerInfoTab.css';

function CustomerInfoTab() {
  const [email, setEmail] = useState('');
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneType, setPhoneType] = useState('Mobile');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showAllCustomers, setShowAllCustomers] = useState(false);
  const navigate = useNavigate();

  // Sample country list (replace with a more comprehensive list)
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'JP', name: 'Japan' },
    { code: 'IN', name: 'India' },
  ];

  const handleSearch = () => {
    // Dummy search results
    const dummyResults = [
      { id: 1, email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      { id: 2,