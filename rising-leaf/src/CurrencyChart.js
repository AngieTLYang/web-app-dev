/*
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CurrencyChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data), // Currency codes
    datasets: [
      {
        label: 'Exchange Rate (to USD)',
        data: Object.values(data), // Exchange rates
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div >
      <Line data={chartData} />
    </div>
  );
};

export default CurrencyChart;

*/

// CurrencyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const CurrencyChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Currency Rates',
        data: Object.values(data),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart resizes with the container
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <h2>Currency Exchange Rates</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CurrencyChart;