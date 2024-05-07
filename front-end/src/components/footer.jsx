import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
