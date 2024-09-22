import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler
);

export const areaData: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      label: "first",
      data: [31, 25, 6, 60, 42, 50],
      backgroundColor: "#00B7C34D",
      // borderColor: "#323ca8",
      // pointBorderColor: "#323ca8",
      // pointBackgroundColor: "#323ca8",
      // pointHoverBackgroundColor: "#fff",
      // pointBorderWidth: 1,
      // pointHoverBorderColor: "#fff",
      tension: 0.4,
      fill: true,
      pointStyle: false,
    },
    {
      label: "second",
      data: [22, 40, 12, 5, 32, 4],
      tension: 0.4,
      backgroundColor: "#00cc85a7",
      fill: true,
      pointStyle: false,
    },
  ],
};

export const areaOptions: ChartOptions<"line"> = {
  // responsive: true,
  // maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        text: "X-axis title",
        display: true,
      },
    },
    y: {
      title: {
        text: "Y-axis title",
        display: true,
      },
      beginAtZero: true,
      ticks: {
        font: {
          size: 12,
          weight: 400,
        },
        color: "#424242",
        callback: function (value) {
          return value + "k";
        },
      },
    },
  },
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
};

// export const areaPlugin: Plugin<"polarArea"> = {
//   id: "chartPlugin",
//   afterDatasetsDraw(chart) {
//     const {
//       ctx,
//       chartArea: { left },
//     } = chart;
//     ctx.save();

//     const xCoor = chart.getDatasetMeta(0).data[2].x;
//     const yCoor = chart.getDatasetMeta(0).data[0].y;

//     ctx.font = "600 12px Segoe UI";
//     ctx.fillStyle = "#424242";
//     ctx.textBaseline = "top";
//     ctx.textAlign = "center";
//     ctx.rotate(-0.5 * Math.PI);
//     ctx.fillText("Y-axis title", left - 180, yCoor - 70);

//     ctx.restore();

//     ctx.font = "600 12px Segoe UI";
//     ctx.fillStyle = "#424242";
//     ctx.textBaseline = "top";
//     ctx.textAlign = "center";
//     ctx.fillText("x-axis title", xCoor + 20, yCoor + 160);
//   },
// };
