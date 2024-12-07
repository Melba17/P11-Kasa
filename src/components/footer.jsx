import React from 'react';
import "../styles/components/footer.scss";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src="/icons/White_Logo.svg" alt="Kasa Logo" className="footer__logo" />
        <p>© 2024 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
