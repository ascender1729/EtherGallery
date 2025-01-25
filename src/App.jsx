import React, { useState, useEffect } from 'react';
import WalletConnect from './components/WalletConnect';
import NFTGrid from './components/NFTGrid';
import FilterBar from './components/FilterBar';
import AddressSearch from './components/AddressSearch';
import CryptoBackground from './components/CryptoBackground';
import LoadingSpinner from './components/LoadingSpinner';
import { Web3Provider } from './services/web3';
import './styles/App.css';

function App() {
  const [connectedWallet, setConnectedWallet] = useState('');
  const [activeAddress, setActiveAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    collection: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'date',
    walletAddress: ''
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleConnect = async (address) => {
    setIsLoading(true);
    try {
      setConnectedWallet(address);
      setActiveAddress(address);
      setFilters(prev => ({
        ...prev,
        walletAddress: address
      }));
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressSearch = (address) => {
    setActiveAddress(address);
    setFilters(prev => ({
      ...prev,
      walletAddress: address
    }));
  };

  return (
    <Web3Provider>
      <div className={`app ${pageLoaded ? 'loaded' : ''}`}>
        <CryptoBackground />
        
        <header className="app-header glass-panel animate-fade-in">
          <div className="header-content">
            <div className="logo-container animate-float">
              <h1 className="gradient-text">EtherGallery</h1>
              <p className="subtitle">Explore the NFT Universe</p>
            </div>
            
            <div className="header-actions">
              <WalletConnect onConnect={handleConnect} isLoading={isLoading} />
              <AddressSearch onSearch={handleAddressSearch} />
            </div>
          </div>
        </header>

        <main className="main-content">
          {activeAddress && (
            <div className="active-address-container glass-panel animate-fade-in">
              <div className="address-info">
                <span className="address-label">Current Gallery</span>
                <span className="address-value">{activeAddress}</span>
              </div>
              {connectedWallet && activeAddress !== connectedWallet && (
                <button 
                  className="view-own-button glow-effect"
                  onClick={() => handleAddressSearch(connectedWallet)}
                >
                  View My Collection
                </button>
              )}
            </div>
          )}

          <FilterBar 
            filters={filters} 
            onFilterChange={setFilters}
            className="animate-fade-in"
          />

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <NFTGrid 
              walletAddress={activeAddress} 
              filters={filters}
              className="animate-fade-in"
            />
          )}
        </main>
      </div>
    </Web3Provider>
  );
}

export default App;