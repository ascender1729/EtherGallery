import React, { useState } from 'react';
import '../styles/NFTCard.css';

const NFTCard = ({ nft }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateAddress = (address) => {
    return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
  };

  return (
    <div 
      className={`nft-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="nft-image-container">
        <img 
          src={nft.image_url} 
          alt={nft.name} 
          className="nft-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
        <div className="nft-overlay">
          <span className="collection-badge">
            {nft.collection?.name || 'Unknown Collection'}
          </span>
          {nft.last_sale && (
            <span className="price-badge">
              Ξ {parseFloat(nft.last_sale.payment_token.eth_price).toFixed(3)}
            </span>
          )}
        </div>
      </div>
      
      <div className="nft-info">
        <h3 className="nft-name">{nft.name || `#${nft.token_id}`}</h3>
        <p className="nft-owner">
          Owner: {truncateAddress(nft.owner?.address)}
        </p>
        <div className="nft-links">
          <a 
            href={`https://opensea.io/assets/${nft.asset_contract?.address}/${nft.token_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View on OpenSea
          </a>
        </div>
      </div>

      <div className="card-glow" />
    </div>
  );
};

export default NFTCard;