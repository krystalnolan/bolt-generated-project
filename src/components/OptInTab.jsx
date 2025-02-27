import React, { useState } from 'react';

function OptInTab() {
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);

  const handleSave = () => {
    // Save opt-in preferences logic here
    alert(`Email Opt-In: ${emailOptIn}, SMS Opt-In: ${smsOptIn}`);
  };

  return (
    <div className="opt-in-tab">
      <h2>Opt-In Preferences</h2>
      <label>
        <input
          type="checkbox"
          checked={emailOptIn}
          onChange={(e) => setEmailOptIn(e.target.checked)}
        />
        Email Opt-In
      </label>

      <label>
        <input
          type="checkbox"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
        />
        SMS Opt-In
      </label>

      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
}

export default OptInTab;
