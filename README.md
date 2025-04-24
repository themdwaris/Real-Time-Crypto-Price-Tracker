# 📈 Real-Time Crypto Price Tracker

A responsive web application built with **React**, **Redux Toolkit**, and **Tailwind CSS** that simulates **real-time cryptocurrency price tracking** like CoinMarketCap. This app displays dynamic price movements, percentage changes, and key market stats for top cryptocurrencies using mock data and simulated WebSocket updates.

Live->🚀 https://real-time-crypto-price-tracker-seven.vercel.app

---
## 🚀 Features

- 🔄 **Real-Time Data Simulation**: Simulates live WebSocket updates every 1–2 seconds using `setInterval`, modifying price, volume, and percent changes.
- 🧠 **Redux-Powered State**: All state is managed globally using Redux Toolkit and optimized with selectors.
- 📊 **Responsive UI Table**: Tabular display of 5 crypto assets (BTC, ETH, USDT, XRP, SOL) with the following columns:
  - `#`, `Logo`, `Name`, `Symbol`, `Price`
  - `1h %`, `24h %`, `7d %` (color-coded)
  - `Market Cap`, `24h Volume`, `Circulating Supply`, `Max Supply`, `7D Chart`
- 🌈 **Color Coding**: Percentage values are green if positive and red if negative.
- 📉 **Static 7D Chart**: Each coin has a pre-rendered 7-day line chart in SVG format.
- 🌐 **Mobile-First Design**: Fully responsive layout using Tailwind’s utility classes.

---

## 🛠️ Tech Stack

- **Frontend**: React (with Vite)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + React Redux
- **Data Source**: Static JSON file (`sampleData.json`) with 5 pre-defined assets
- **Chart Rendering**: Static SVG charts (via [QuickChart.io](https://quickchart.io))

---

## 🧱 Project Architecture

```
/src
│
├── app
│   └── store.js                # Redux store configuration
│
├── features
│   └── crypto
│       ├── cryptoSlice.js      # Redux slice for crypto state
│       ├── sampleData.json     # Initial data used to populate state
│       └── CryptoTable.jsx     # Main UI component (data table)
│
├── assets
│   └── logos & SVGs            # Logos and 7D chart SVGs (in /public folder)
│
├── App.jsx                     # Root component
└── main.jsx                    # App entry point (with Redux <Provider>)
```

---

## 🧪 How Real-Time Works

A `setInterval` inside a custom hook or component dispatches Redux actions every 1–2 seconds to simulate price/volume/percentage fluctuations using random values. No local state is used — all updates go through Redux.

---

## 🧰 Setup & Run

```bash
npm install
npm run dev
```

Make sure you place your SVGs and logo images inside the `public/charts/` and `public/logos/` folders, respectively, and reference them in your JSON data.

---

> Made with ❤️ using React + Redux + Tailwind

