import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChar(props) {
  const labels = props.x_axis.replace(/[^a-zа-яё\s]/gi, '').split(' ').filter(el => el !== '');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: props.y_axis.replace(/[^0-9\s]/g, '').split(' '),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return <Bar options={options} data={data} />;
}
