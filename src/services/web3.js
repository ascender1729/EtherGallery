// src/services/web3.js
import React, { createContext, useContext, useState } from 'react';
import Web3 from 'web3';

const Web3Context = createContext(null);

export const isValidAddress = (address) => {
  const web3 = new Web3(window.ethereum);
  return web3.utils.isAddress(address);
};

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [error, setError] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    setIsConnecting(true);
    setError('');

    try {
      if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this feature');
      }

      const web3Instance = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      setWeb3(web3Instance);
      setAddress(accounts[0]);
      return accounts[0];
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsConnecting(false);
    }
  };

  // Listen for account changes
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setAddress(accounts[0]);
      } else {
        setAddress('');
      }
    });
  }

  const contextValue = {
    web3,
    connectWallet,
    isConnecting,
    error,
    address,
    isValidAddress: (address) => web3?.utils.isAddress(address) || false
  };

  return (
    <Web3Context.Provider value={contextValue}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};