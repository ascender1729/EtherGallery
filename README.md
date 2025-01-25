# EtherGallery - NFT Portfolio Viewer

![EtherGallery Preview](preview.png)

## 🚀 Overview

EtherGallery is a modern dApp that allows users to explore NFT collections across Ethereum wallets. Built with React and Web3.js, it offers a seamless experience for viewing and filtering NFTs with a stunning crypto-themed UI.

### ✨ Features

- 🔗 MetaMask wallet integration
- 🖼️ View NFTs from any Ethereum address
- 🔍 Advanced filtering options
- 💫 Animated crypto-themed UI
- 📱 Fully responsive design
- ⚡ Real-time OpenSea data integration

## 🛠️ Technologies Used

- React.js
- Web3.js
- OpenSea API
- MetaMask
- CSS3 with Animations
- GitHub Pages

## 🏃‍♂️ Quick Start

1. Clone the repository:
```bash
git clone https://github.com/ascender1729/EtherGallery.git
cd EtherGallery
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file with your API keys:
```env
REACT_APP_OPENSEA_API_KEY=your_opensea_api_key_here
```

4. Run the development server:
```bash
npm start
```

Visit `http://localhost:3000` to view the app.

## 📁 Project Structure

```
EtherGallery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddressSearch.jsx
│   │   ├── CryptoBackground.jsx
│   │   ├── FilterBar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── NFTCard.jsx
│   │   ├── NFTGrid.jsx
│   │   └── WalletConnect.jsx
│   ├── services/
│   │   ├── opensea.js
│   │   └── web3.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── AddressSearch.css
│   │   ├── CryptoBackground.css
│   │   ├── FilterBar.css
│   │   ├── LoadingSpinner.css
│   │   ├── NFTCard.css
│   │   └── NFTGrid.css
│   ├── App.jsx
│   └── index.js
└── package.json
```

## 🔧 Configuration

1. OpenSea API Key:
   - Get your API key from [OpenSea](https://opensea.io/account/settings/api)
   - Add it to your .env file

2. MetaMask:
   - Install [MetaMask](https://metamask.io/) browser extension
   - Create or import a wallet

## 🚀 Deployment

The app is deployed on GitHub Pages. To deploy your own version:

1. Update the homepage in package.json:
```json
{
  "homepage": "https://ascender1729.github.io/EtherGallery"
}
```

2. Deploy using:
```bash
npm run deploy
```

Visit [https://ascender1729.github.io/EtherGallery](https://ascender1729.github.io/EtherGallery) to see the live app.

## 🎨 Features in Detail

### NFT Display
- Grid layout with responsive design
- Animated card transitions
- Glass morphism effects
- Hover state information

### Wallet Integration
- Seamless MetaMask connection
- View any wallet's NFTs
- Real-time updates

### Filters
- Collection filtering
- Price range filtering
- Sort by date or price
- Pagination support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenSea API
- MetaMask
- React.js community
- Web3.js contributors

## 📞 Contact

Your Name - [@ascender1729](https://github.com/ascender1729)

Project Link: [https://github.com/ascender1729/EtherGallery](https://github.com/ascender1729/EtherGallery)