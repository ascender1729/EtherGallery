import React, { useState, useEffect, useCallback } from 'react';
import NFTCard from './NFTCard';
import LoadingSpinner from './LoadingSpinner';
import { fetchNFTs } from '../services/opensea';
import '../styles/NFTGrid.css';

const NFTGrid = ({ walletAddress, filters }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 12;

  const loadNFTs = useCallback(async () => {
    if (!walletAddress) return;
    
    setLoading(true);
    try {
      const data = await fetchNFTs(walletAddress, {
        ...filters,
        offset: (page - 1) * perPage,
        limit: perPage
      });
      setNfts(data || []);
    } catch (error) {
      console.error('Error loading NFTs:', error);
    } finally {
      setLoading(false);
    }
  }, [walletAddress, filters, page, perPage]);

  useEffect(() => {
    loadNFTs();
  }, [loadNFTs]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(p => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (nfts.length === perPage) {
      setPage(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!walletAddress) {
    return <div className="connect-prompt">Please connect your wallet to view NFTs</div>;
  }

  return (
    <div className="nft-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="nft-grid">
            {nfts.map(nft => (
              <NFTCard key={`${nft.id}-${nft.token_id}`} nft={nft} />
            ))}
          </div>
          
          {nfts.length > 0 && (
            <div className="pagination-container">
              <button 
                className="pagination-button"
                onClick={handlePreviousPage} 
                disabled={page === 1 || loading}
              >
                Previous
              </button>
              <div className="page-number">Page {page}</div>
              <button 
                className="pagination-button"
                onClick={handleNextPage} 
                disabled={nfts.length < perPage || loading}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NFTGrid;