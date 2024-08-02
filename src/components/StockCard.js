import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./StockCard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StockCard = ({ symbol, price, data, priceClass }) => {
  if (!price) {
    return null;
  }

  const chartData = {
    labels: Array(data.length).fill(""),
    datasets: [
      {
        label: `${symbol} Price`,
        data: data,
        fill: true,
        backgroundColor: "#cceff6",
        borderColor: "#00ADD2",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const getArrow = (priceClass) => {
    if (priceClass === "top") {
      return '↑';
    } else if (priceClass === "bottom") {
      return '↓';
    }
    return '';
  };

  return (
    <div className="stock-card">
      <h2 className="symbol">{symbol}</h2>
      <p>PREÇO DO ATIVO</p>
      <h1 className={`price ${priceClass}`}>R$ {price.toFixed(2)}{getArrow(priceClass)}</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StockCard;
