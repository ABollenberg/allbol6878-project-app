import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const HistoryChart = ({ history }) => {
  const data = {
    labels: history.map((_, index) => `Entry ${index + 1}`),
    datasets: [
      {
        label: 'Randomized Values',
        data: history,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default HistoryChart;
