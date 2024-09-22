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

export const gaugeData: ChartData<"doughnut"> = {
  labels: ["show", "hide"],
  datasets: [
    {
      label: "shop 1",
      data: [75, 25],
      backgroundColor: ["#00B7C3", "#D1D1D1"],
      borderColor: ["#00B7C3", "#D1D1D1"],
      circumference: 180,
      rotation: 270,
      spacing:5,
    },
  ],
};

export const gaugePlugin: Plugin<"doughnut"> = {
  id: "chartPlugin",
  afterDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { left, right },
    } = chart;
    ctx.save();

    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;

    ctx.font = "600 12px Segoe UI";
    ctx.fillStyle = "#424242";
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    ctx.fillText("0", left + 5, yCoor - 10);
    ctx.fillText("100", right - 5, yCoor - 10);
    ctx.restore();

    ctx.font = "600 32px Segoe UI";
    ctx.fillStyle = "#424242";
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillText("75%", xCoor, yCoor);
  },
};

export const gaugeOptions: ChartOptions<"doughnut"> = {
  aspectRatio: 2,
  layout: {
    padding: 20,
  },
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
