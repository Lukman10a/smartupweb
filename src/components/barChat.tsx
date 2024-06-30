// components/BarChart.tsx

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string }[];
  };
  backgroundColor: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, backgroundColor }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Scores",
        },
        ticks: {
          stepSize: 25,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: backgroundColor,
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
