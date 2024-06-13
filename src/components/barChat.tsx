// // components/BarChart.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// interface Dataset {
//     label: string;
//     backgroundColor: string;
//     borderColor: string;
//     borderWidth: number;
//     hoverBackgroundColor: string;
//     hoverBorderColor: string;
//     data: number[];
//   }
  
//   interface ChartData {
//     labels: string[];
//     datasets: Dataset[];
//   }

// const BarChart = ({ data }: { data: ChartData }) => {
//     const options = {
//         scales: {
//           x: {
//             beginAtZero: true,
//             ticks: {
//               callback: function(value: number, index: any, values: any) {
//                 // Convert numeric value to month name
//                 return new Date(value * 1000).toLocaleString('default', { month: 'short' });
//               }
//             }
//           },
//           y: {
//             beginAtZero: true
//           }
//         }
//       };
//   return (
//     <div>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default BarChart;
