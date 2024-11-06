import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
  title: string;
}
const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: title },
    },
  };

  return <Pie options={options} data={data} />;
};

export default PieChart;
