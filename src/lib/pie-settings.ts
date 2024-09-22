import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

export const pieData: ChartData<"doughnut"> = {
  labels: ["show", "hide"],
  datasets: [
    {
      label: "shop 1",
      data: [270, 25, 35, 25],
      backgroundColor: ["#A6E9ED", "#00666D", "#005B70", "#00B7C3"],
      circumference: 270,
      spacing: 2,
    },
  ],
};

export const piePlugin: Plugin<"doughnut"> = {
  id: "chartPlugin",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.save();

    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;

    ctx.font = "600 28px Segoe UI";
    ctx.fillStyle = "#424242";
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillText("1000", xCoor, yCoor+15);
  },
};

export const pieOptions: ChartOptions<"doughnut"> = {
  aspectRatio: 2,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  cutout: "75%",
};
