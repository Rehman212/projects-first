"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function SimpleCol() {
  const isRtl = false;

  const columnChart = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "#ffffff", // ✅ Makes ApexChart background white
      },
      colors: ["#805dca", "#e7515a"],
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      grid: {
        borderColor: "#e0e6ed",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        opposite: isRtl,
        labels: {
          offsetX: isRtl ? -10 : 0,
        },
      },
      tooltip: {
        theme: "light",
        y: {
          formatter: (val) => val,
        },
      },
    },
  };

  return (
    <div className="rounded-lg bg-white  text-black overflow-hidden p-4 shadow-md">
      <ReactApexChart
        series={columnChart.series}
        options={columnChart.options}
        type="bar"
        height={300}
      />
    </div>
  );
}
