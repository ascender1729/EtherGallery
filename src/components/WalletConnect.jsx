import React, { useState } from 'react';
import '../styles/WalletConnect.css';

const WalletConnect = ({ onConnect }) => {
  const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setConnected(true);
        onConnect(accounts[0]);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  return (
    <button 
      onClick={handleConnect} 
      className={`connect-wallet-button ${connected ? 'connected' : ''}`}
    >
      {connected ? 'Wallet Connected' : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnect;