// Preloader.js

import React from 'react';
import splashlogo from '../images/olewin1.svg';
import '../components/preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={splashlogo} alt="Olewin" />
    </div>
  );
};

export default Preloader;

