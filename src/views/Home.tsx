import React from "react";
import LineSparkLine from "../components/Chart/LineSparkLine";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        // drawBorder: false,
        // display: false,
        drawOnChartArea: false,
        // drawTicks: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.4,
      fill: { value: 25 },
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.4,
      borderDash: [5, 5],
    },
  ],
};

const doughnutOptions = {
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
};
const doughnutData = {
  labels: ["Living Room", "Kitchen", "Attic", "Garage", "Basement"],
  datasets: [
    {
      // weight: 30,
      cutout: 50,
      // tension: 0.9,
      pointRadius: 2,
      // borderWidth: 2,
      backgroundColor: ["#FF0080", "#A8B8D8", "#21d4fd", "#98ec2d", "#ff667c"],
      data: [15, 20, 13, 32, 20],
      fill: false,
      hoverOffset: 4,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        color: "#e7eaf3",
        drawBorder: false,
        zeroLineColor: "#e7eaf3",
      },
      ticks: {
        beginAtZero: true,
        stepSize: 100,
        fontSize: 12,
        fontColor: "#97a4af",
        fontFamily: "Open Sans, sans-serif",
        padding: 10,
        postfix: "$",
      },
      stacked: true,
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        fontSize: 12,
        fontColor: "#97a4af",
        fontFamily: "Open Sans, sans-serif",
        padding: 5,
      },
      categoryPercentage: 0.5,
      maxBarThickness: 10,
      stacked: true,
    },
  },
  cornerRadius: 2,
};
const barData = {
  labels: [
    "May 1",
    "May 2",
    "May 3",
    "May 4",
    "May 5",
    "May 6",
    "May 7",
    "May 8",
    "May 9",
    "May 10",
  ],
  datasets: [
    {
      data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
      backgroundColor: "#377dff",
      hoverBackgroundColor: "#377dff",
      borderColor: "#377dff",
      maxBarThickness: 10,
    },
    {
      data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
      backgroundColor: "#e7eaf3",
      borderColor: "#e7eaf3",
      maxBarThickness: 10,
    },
  ],
};

const Home = () => {
  return (
    <main className="p-4 bg-gray-50">
      <ul className="flex gap-4 flex-wrap lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4">
        <li className="w-full rounded  shadow p-4 bg-white">
          <p className="text-gray-600 text-sm font-medium">Users</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-2xl font-medium">74,123</span>
            <div className="w-32 h-12">
              <LineSparkLine
                chartData={Array(31)
                  .fill(0)
                  .map((i) => Math.floor(Math.random() * 100))}
              />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded">
              +1,234
            </span>
            <span className="text-gray-400 ml-2 text-sm">Since yesterday</span>
          </div>
        </li>
        <li className="w-full rounded  shadow p-4 bg-white">
          <p className="text-gray-600 text-sm font-medium">Income</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-2xl font-medium">$24,234</span>
            <div className="w-32 h-12">
              <LineSparkLine
                chartData={Array(31)
                  .fill(0)
                  .map((i) => Math.floor(Math.random() * 100))}
              />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded">
              -$2,234
            </span>
            <span className="text-gray-400 ml-2 text-sm">Since last week</span>
          </div>
        </li>
        <li className="w-full rounded  shadow p-4 bg-white">
          <p className="text-gray-600 text-sm font-medium">Recharge Users</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-2xl font-medium">3,234</span>
            <div className="w-32 h-12">
              <LineSparkLine
                chartData={Array(31)
                  .fill(0)
                  .map((i) => Math.floor(Math.random() * 100))}
              />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded">
              +%12
            </span>
            <span className="text-gray-400 ml-2 text-sm">Since yesterday</span>
          </div>
        </li>
        <li className="w-full rounded  shadow p-4 bg-white">
          <p className="text-gray-600 text-sm font-medium">Orders</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-2xl font-medium">423</span>
            <div className="w-32 h-12">
              <LineSparkLine
                chartData={Array(31)
                  .fill(0)
                  .map((i) => Math.floor(Math.random() * 100))}
              />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded">
              -%13
            </span>
            <span className="text-gray-400 ml-2 text-sm">Since last month</span>
          </div>
        </li>
      </ul>
      <div className="xl:grid xl:grid-cols-6 xl:gap-4">
        <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-4">
          <p>Total Income</p>
          <div className="mt-2">
            <Line options={options} data={data} className="h-80 xl:h-[375px]" />
          </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
          <p>Weekly sales</p>
          <div className="mt-2">
            <Doughnut
              options={doughnutOptions}
              data={doughnutData}
              className="h-40"
            />
          </div>
          <table className="w-full mt-2 h-16 text-sm text-gray-800">
            <thead>
              <tr>
                <th className="pl-4 text-left font-medium py-2">Type</th>
                <th className="text-right font-medium">Revenue</th>
                <th className="pr-4 text-right font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y border-t">
              <tr>
                <th className="pl-4 text-left font-normal  py-2">
                  Living Room
                </th>
                <td className="text-right">15</td>
                <td className="pr-4 text-right">
                  <span className="text-green-600">+70%</span>
                </td>
              </tr>
              <tr>
                <th className="pl-4 text-left font-normal py-2">Kitchen</th>
                <td className="text-right">20</td>
                <td className="pr-4 text-right">
                  <span className="text-red-600">-2%</span>
                </td>
              </tr>
              <tr>
                <th className="pl-4 text-left font-normal py-2">Attic</th>
                <td className="text-right">13</td>
                <td className="pr-4 text-right">
                  <span className="text-green-600">+30%</span>
                </td>
              </tr>
              <tr>
                <th className="pl-4 text-left font-normal py-2">Garage</th>
                <td className="text-right">32</td>
                <td className="pr-4 text-right">
                  <span className="text-red-600">-13%</span>
                </td>
              </tr>
              <tr>
                <th className="pl-4 text-left font-normal py-2">Basement</th>
                <td className="text-right">20</td>
                <td className="pr-4 text-right">
                  <span className="text-green-600">+12%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-6 xl:gap-4">
        <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
          <p>Money Expenses</p>
          <div className="mt-2">
            <Bar options={barOptions} data={barData} className="h-80" />
          </div>
        </div>

        <div className="mt-4 bg-white p-4 rounded shadow overflow-x-auto xl:col-span-4">
          <table className="w-full">
            <thead>
              <tr className="text-sm">
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Title</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y border-t">
              {Array(6)
                .fill(1)
                .map((v, i) => (
                  <tr key={i}>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      Leon
                    </td>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      Front-end Developer
                    </td>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      {i % 2 === 0 ? (
                        <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                          InActive
                        </span>
                      )}
                    </td>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      leon.fu@example.com
                    </td>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      Owner
                    </td>
                    <td className="text-left whitespace-nowrap text-sm p-4">
                      <span className="text-indigo-600">Edit</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
