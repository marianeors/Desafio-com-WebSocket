import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StockCard from "./components/StockCard";
import "./App.css";

const App = () => {
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/quotes");

    socket.onopen = () => {
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setStocks((oldStocks) => {
        const newStocks = { ...oldStocks };
        Object.keys(data).forEach((key) => {
          if (key !== "timestamp" && data[key] !== undefined) {
            if (!newStocks[key]) {
              newStocks[key] = [];
            }
            newStocks[key].push(data[key]);
            if (newStocks[key].length > 50) {
              newStocks[key].shift();
            }
          }
        });
        return newStocks;
      });
    };

    return () => {
      socket.close();
    };
  }, []);

  const sortedStocks = Object.entries(stocks)
    .filter(([_, prices]) => {
      return (
        prices.length > 0 &&
        prices[prices.length - 1] !== null &&
        prices[prices.length - 1] !== 0
      );
    })
    .sort((a, b) => b[1][b[1].length - 1] - a[1][a[1].length - 1]);

  const top5 = sortedStocks.slice(0, 5);
  const bottom5 = sortedStocks.slice(-5);

  return (
    <div className="App">
      <Header />
      <h1 className="app-tittle">Explore o mercado</h1>
      <div className="stock-list">
        {top5.map(([symbol, prices], index) => (
          <StockCard
            key={`top-${index}`}
            symbol={symbol}
            price={prices[prices.length - 1]}
            data={prices}
            priceClass="top"
          />
        ))}
      </div>
      <div className="stock-list">
        {bottom5.map(([symbol, prices], index) => (
          <StockCard
            key={`bottom-${index}`}
            symbol={symbol}
            price={prices[prices.length - 1]}
            data={prices}
            priceClass="bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
