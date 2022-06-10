import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChar(props) {
  const labels = props.x_axis.replace(/[^a-zа-яё\s]/gi, '').split(' ').filter(el => el !== '');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: props.y_axis.replace(/[^0-9\s]/g, '').split(' '),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return <Line options={options} data={data} />;
}
