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

export const radialData: ChartData<"doughnut"> = {
  datasets: [
    {
      label: "shop 1",
      data: [75],
      rotation: -220,
      backgroundColor: ["#00B7C3"],
      borderColor: ["#fff"],
      circumference: 220,
    },
    {
      label: "shop 2",
      data: [100],
      rotation: -200,
      backgroundColor: ["#00B7C3"],
      borderColor: ["#fff"],
      circumference: 200,
    },
    {
      label: "shop 2",
      data: [100],
      rotation: -100,
      backgroundColor: ["#00B7C3"],
      borderColor: ["#fff"],
      circumference: 100,
    },
    {
      label: "shop 2",
      data: [100],
      rotation: -120,
      backgroundColor: ["#00B7C3"],
      borderColor: ["#fff"],
      circumference: 120,
    },
    {
      label: "shop 2",
      data: [100],
      rotation: -170,
      backgroundColor: ["#00B7C3"],
      borderColor: ["#fff"],
      circumference: 170,
    },
  ],
};

export const radialPlugin: Plugin<"doughnut"> = {
  id: "chartPlugin",
  afterDatasetsDraw: (chart) => {
    const { ctx, data } = chart;
    ctx.save();

    ctx.font = "600 12px Segoe UI";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";

    for (const i in data.datasets) {
      const outer = chart.getDatasetMeta(Number(i)).controller.outerRadius;
      const inner = chart.getDatasetMeta(Number(i)).controller.innerRadius;

      const width = outer - inner;
      const xCoor = chart.getDatasetMeta(Number(i)).data[0].x;
      const yCoor = chart.getDatasetMeta(Number(i)).data[0].y;
      // ctx.fillRect(xCoor + 5, yCoor - inner - width / 2, 2, 2);
      
      ctx.fillText(
        data.datasets[Number(i)].label as string,
        xCoor + 5,
        yCoor - inner - width / 2
      );
    }
  },
};

export const radialOptions: ChartOptions<"doughnut"> = {
  aspectRatio: 0,
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  cutout: "40%",
};
