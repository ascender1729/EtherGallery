import React from 'react';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container glass-panel">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <div className="error-text">{message}</div>
        <div className="error-bg"></div>
      </div>
    </div>
  );
};

export default ErrorMessage;