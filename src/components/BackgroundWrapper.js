// BackgroundWrapper.js
import React from 'react';
import './backgroundWrapper.css';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="background-wrapper">
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;