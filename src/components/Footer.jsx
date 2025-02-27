import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} CRM &amp; Ticketing System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
