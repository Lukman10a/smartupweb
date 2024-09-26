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

const BarChart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: title },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
