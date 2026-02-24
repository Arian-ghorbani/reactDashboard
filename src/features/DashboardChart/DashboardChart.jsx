import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { generateChart } from "/src/utils/home.js";
import summariesData from "../../data/homeData";
import TooltipCustom from "./components/TooltipCustom";

function DashboardChart() {
  const data = generateChart({ ...summariesData });

  return (
    <BarChart
      style={{
        width: "100%",
        maxHeight: "100%",
        aspectRatio: 1.618,
        direction: "ltr",
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="value" width="auto" className="pr-4" />
      <Tooltip content={TooltipCustom} />
      <Bar
        dataKey="value"
        className="fill-primary hover:fill-tertiary hover:stroke-primary"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}

export default DashboardChart;
