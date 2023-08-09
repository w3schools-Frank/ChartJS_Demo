import { Line } from 'react-chartjs-2';
import React from 'react';
import './Graph.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart Demo using API',
      },
    }
};

function Graph({ data }) {

    const { periods } = data.properties;
    const labels = periods.map(x => x.name);
    const temperatures = periods.map(x => x.temperature);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Temperatures',
                data: temperatures,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    return (
        <div id='canvas-container'>
            <Line options={options} data={chartData} />
        </div>
    )
}

export default Graph;