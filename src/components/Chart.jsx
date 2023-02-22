import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);
function Chart() {
  const data = {
    labels: [' "May 12", "May 13", "May 14", "May 15", "May 16"," May 17"'],
    datasets: [
      {
        data: [8, 7.8, 6, 8, 7, 5, 6],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
      },
    ],
  };
  const options = {};
  return (
    <div className=" w-[500px] h-[500px] ml-[20px]">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Chart;
