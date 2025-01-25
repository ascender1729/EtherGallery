const OPENSEA_API = {
  assets: 'https://api.opensea.io/api/v1/assets',
  collections: 'https://api.opensea.io/api/v1/collections'
};

const headers = {
  'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY
};

export const fetchNFTs = async (walletAddress, filters) => {
  if (!walletAddress) return [];
  
  console.log('Fetching NFTs for:', walletAddress);
  const { collection, minPrice, maxPrice, sortBy, offset, limit } = filters;
  
  const params = new URLSearchParams({
    owner: walletAddress,
    offset: offset || 0,
    limit: limit || 12,
    order_direction: 'desc',
    order_by: sortBy === 'date' ? 'created_date' : 'sale_price'
  });

  if (collection) {
    params.append('collection', collection);
  }

  try {
    console.log('Making API request to:', `${OPENSEA_API.assets}?${params}`);
    const response = await fetch(`${OPENSEA_API.assets}?${params}`, { headers });
    
    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Received NFTs:', data.assets);

    if (!data.assets) {
      console.log('No assets found');
      return [];
    }

    // Filter by price if specified
    return data.assets.filter(asset => {
      const price = asset.last_sale?.payment_token.eth_price;
      if (minPrice && price < minPrice) return false;
      if (maxPrice && price > maxPrice) return false;
      return true;
    });
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    throw error;
  }
};

export const fetchCollections = async (walletAddress) => {
  if (!walletAddress) return [];

  try {
    const response = await fetch(
      `${OPENSEA_API.collections}?asset_owner=${walletAddress}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`);
    }

    const data = await response.json();
    return data.collections || [];
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
};