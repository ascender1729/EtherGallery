// src/components/FilterBar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { fetchCollections } from '../services/opensea';

const FilterBar = ({ filters, onFilterChange }) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCollections = useCallback(async () => {
    if (!filters?.walletAddress) return;

    setLoading(true);
    setError(null);
    try {
      const data = await fetchCollections(filters.walletAddress);
      setCollections(data || []);
    } catch (err) {
      setError('Failed to load collections');
      console.error('Error loading collections:', err);
    } finally {
      setLoading(false);
    }
  }, [filters?.walletAddress]);

  useEffect(() => {
    loadCollections();
  }, [loadCollections]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filter-bar">
      <select 
        name="collection" 
        value={filters?.collection || ''}
        onChange={handleChange}
        className="filter-select"
        disabled={loading}
      >
        <option value="">All Collections</option>
        {collections?.map(collection => (
          <option key={collection.slug} value={collection.slug}>
            {collection.name}
          </option>
        ))}
      </select>

      <div className="price-filters">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters?.minPrice || ''}
          onChange={handleChange}
          className="price-input"
          min="0"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters?.maxPrice || ''}
          onChange={handleChange}
          className="price-input"
          min="0"
        />
      </div>

      <select 
        name="sortBy" 
        value={filters?.sortBy || 'date'}
        onChange={handleChange}
        className="sort-select"
      >
        <option value="date">Date Acquired</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FilterBar;