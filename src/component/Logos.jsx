import React, { useState } from 'react';
import '../CSS/logo.css';
import airbnb from '../assets/logos/air.png';
import spotify from '../assets/logos/spotify.png';
import google from '../assets/logos/google.png';
import wal from '../assets/logos/walmart.png';
import binance from '../assets/logos/binance.png';
import micro from '../assets/logos/micro.png';

const LogoMarquee = () => {
  const [paused, setPaused] = useState(false);

  const handleHover = () => {
    setPaused(!paused);
  };

  return (
    <div className="logo-marquee" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={`marquee-container ${paused ? 'paused' : ''}`}>
        <div className="marquee">
          <img src={wal} alt="" className="logo" />
          <img src={google} alt="" className="logo" />
          <img src={spotify} alt="" className="logo" />
          <img src={binance} alt="" className="logo" />
          <img src={micro} alt="" className="logo" />
          <img src={airbnb} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
