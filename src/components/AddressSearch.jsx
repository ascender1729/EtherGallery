import React, { useState } from 'react';
import '../styles/AddressSearch.css';

const AddressSearch = ({ onSearch }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      onSearch(address);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="0x789774D0cC649567Cc5..."
        className="address-input"
      />
      <button 
        onClick={handleSubmit}
        className="view-nfts-button"
      >
        View NFTs
      </button>
    </div>
  );
};

export default AddressSearch;