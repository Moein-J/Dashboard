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
} from "chart.js";

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export const barData: ChartData<"bar"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        "#00B7C3",
        "#00B7C3",
        "#00B7C3",
        "#00B7C3",
        "#00B7C3",
        "#00B7C3",
        "#00B7C3",
      ],
    },
  ],
};

export const barOptions: ChartOptions<"bar"> = {
  aspectRatio: 0,
  scales: {
    x: {
      title: {
        text: "X-axis title",
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
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
    padding: 30,
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

