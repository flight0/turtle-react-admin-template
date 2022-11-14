import React from "react";
import LineSparkLine from "../components/Chart/LineSparkLine";
import { Line, Doughnut, Bar } from "react-chartjs-2";

const Stat = () => {
  const data = [
    {
      title: "Users",
      value: "74,123",
      type: "increase",
      change: "+1,234",
      from: "Since yesterday",
    },
    {
      title: "Income",
      value: "$24,234",
      type: "decrease",
      change: "-$2,234",
      from: "Since last week",
    },
    {
      title: "Recharge Users",
      value: "3,234",
      type: "increase",
      change: "+%12",
      from: "Since yesterday",
    },
    {
      title: "Orders",
      value: "423",
      type: "decrease",
      change: "-%13",
      from: "Since last month",
    },
  ];

  return (
    <ul className="flex gap-4 flex-wrap lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4">
      {data.map((v, i) => (
        <li className="w-full rounded  shadow p-4 bg-white" key={i}>
          <p className="text-gray-600 text-sm font-medium">{v.title}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-2xl font-medium">{v.value}</span>
            <div className="w-32 h-12">
              <LineSparkLine
                chartData={Array(31)
                  .fill(0)
                  .map((i) => Math.floor(Math.random() * 100))}
              />
            </div>
          </div>
          <div className="mt-2">
            <span
              className={`text-sm ${
                v.type === "increase"
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              } px-1 py-0.5 rounded`}
            >
              {v.change}
            </span>
            <span className="text-gray-400 ml-2 text-sm">{v.from}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const LineChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
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

  return (
    <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-4">
      <p>Total Income</p>
      <div className="mt-2">
        <Line options={options} data={data} className="h-80 xl:h-[375px]" />
      </div>
    </div>
  );
};

const DoughnutChart = () => {
  const options = {
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
  const data = {
    labels: ["Living Room", "Kitchen", "Attic", "Garage", "Basement"],
    datasets: [
      {
        cutout: 50,
        pointRadius: 2,
        backgroundColor: [
          "#FF0080",
          "#A8B8D8",
          "#21d4fd",
          "#98ec2d",
          "#ff667c",
        ],
        data: [15, 20, 13, 32, 20],
        fill: false,
        hoverOffset: 4,
      },
    ],
  };
  const tableData = [
    {
      type: "Living Roon",
      revenue: 15,
      value: "+70%",
      increase: 1,
    },
    {
      type: "Kitchen",
      revenue: 20,
      value: "-2%",
      increase: 0,
    },
    {
      type: "Attic",
      revenue: 13,
      value: "+30%",
      increase: 1,
    },
    {
      type: "Garage",
      revenue: 32,
      value: "-13%",
      increase: 0,
    },
    {
      type: "Basement",
      revenue: 20,
      value: "+12%",
      increase: 1,
    },
  ];

  return (
    <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
      <p>Weekly sales</p>
      <div className="mt-2">
        <Doughnut options={options} data={data} className="h-40" />
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
          {tableData.map((v, i) => (
            <tr key={i}>
              <th className="pl-4 text-left font-normal  py-2">{v.type}</th>
              <td className="text-right">{v.revenue}</td>
              <td className="pr-4 text-right">
                <span
                  className={`${
                    v.increase === 1 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {v.value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BarChart = () => {
  const options = {
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
  const data = {
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
  return (
    <div className="mt-4 bg-white p-4 rounded shadow xl:col-span-2">
      <p>Money Expenses</p>
      <div className="mt-2">
        <Bar options={options} data={data} className="h-80" />
      </div>
    </div>
  );
};

const Table = () => {
  const titles = ["Name", "Title", "Status", "Email", "Role"];

  return (
    <div className="mt-4 bg-white p-4 rounded shadow overflow-x-auto xl:col-span-4">
      <table className="w-full">
        <thead>
          <tr className="text-sm">
            {titles.map((v, i) => (
              <th className="text-left p-4 font-medium" key={i}>
                {v}
              </th>
            ))}
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
  );
};

const Home = () => {
  return (
    <>
      <Stat />
      <div className="xl:grid xl:grid-cols-6 xl:gap-4">
        <LineChart />
        <DoughnutChart />
      </div>

      <div className="xl:grid xl:grid-cols-6 xl:gap-4">
        <BarChart />
        <Table />
      </div>
    </>
  );
};

export default Home;
