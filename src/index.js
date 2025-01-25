import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/App.css';
import './styles/NFTCard.css';
import './styles/NFTGrid.css';
import './styles/FilterBar.css';
import './styles/CryptoBackground.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);