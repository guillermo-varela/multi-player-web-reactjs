import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">{(new Date().getFullYear())}</span>
      </div>
    </footer>
  );
}

export default Footer;
