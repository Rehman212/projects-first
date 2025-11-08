"use client";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart only on the client
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const donutChart = {
    series: [44, 55, 13],
    options: {
      chart: {
        height: 300,
        type: "donut",
        background: "#ffffff",
        toolbar: { show: false },
      },
      stroke: { show: false },
      labels: ["Team A", "Team B", "Team C"],
      colors: ["#4361ee", "#805dca", "#e2a03f"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 200 },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md overflow-hidden">
      <ReactApexChart
        series={donutChart.series}
        options={donutChart.options}
        type="donut"
        height={300}
      />
    </div>
  );
}
