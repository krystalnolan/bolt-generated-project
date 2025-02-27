import React, { useState } from 'react';

function UsersTab() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customerProfilePermission, setCustomerProfilePermission] = useState(false);
  const [ticketingPermission, setTicketingPermission] = useState(false);

  const handleSave = () => {
    // Simple password hashing (not secure for production)
    const hashedPassword = btoa(password);

    // Save user logic here
    alert(`User created with email: ${email} and password: ${hashedPassword}`);

    // Clear form
    setEmail('');
    setPassword('');
    setCustomerProfilePermission(false);
    setTicketingPermission(false);
  };

  return (
    <div className="users-tab">
      <h2>Create New User</h2>
      <label>Email Address:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={customerProfilePermission}
          onChange={(e) => setCustomerProfilePermission(e.target.checked)}
        />
        Customer Profile Permission
      </label>

      <label>
        <input
          type="checkbox"
          checked={ticketingPermission}
          onChange={(e) => setTicketingPermission(e.target.checked)}
        />
        Ticketing Permission
      </label>

      <button onClick={handleSave}>Create User</button>
    </div>
  );
}

export default UsersTab;
