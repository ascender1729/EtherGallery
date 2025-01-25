import React from 'react';
import '../styles/NoNFTsMessage.css';

const NoNFTsMessage = () => {
  return (
    <div className="no-nfts-container glass-panel">
      <div className="no-nfts-content">
        <div className="no-nfts-icon">🖼️</div>
        <h3 className="no-nfts-title">No NFTs Found</h3>
        <p className="no-nfts-text">
          This wallet doesn't have any NFTs yet, or they might be on a different network.
        </p>
        <div className="no-nfts-decoration"></div>
      </div>
    </div>
  );
};

export default NoNFTsMessage;