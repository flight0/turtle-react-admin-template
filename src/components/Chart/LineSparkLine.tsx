import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  hover: {
    intersect: false,
  },
};

const labels = [
  "1 May",
  "2 May",
  "3 May",
  "4 May",
  "5 May",
  "6 May",
  "7 May",
  "8 May",
  "9 May",
  "10 May",
  "11 May",
  "12 May",
  "13 May",
  "14 May",
  "15 May",
  "16 May",
  "17 May",
  "18 May",
  "19 May",
  "20 May",
  "21 May",
  "22 May",
  "23 May",
  "24 May",
  "25 May",
  "26 May",
  "27 May",
  "28 May",
  "29 May",
  "30 May",
  "31 May",
];

const LineSparkLine = ({ chartData }: { chartData: Number[] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
        borderColor: "#377dff",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  return <Line options={options} data={data} style={{ height: "48px" }} />;
};

export default LineSparkLine;
