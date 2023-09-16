import React from "react";
import { Chart } from "react-google-charts";
import CardDisplay from "./CardDisplay";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Your SEO Report",
};
export default function App() {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <CardDisplay/>
    </div>
  );
}
