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

export const columnData: ChartData<"bar"> = {
  labels: ["XS", "S", "M", "L", "XL", "XXL"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 65, 65, 65, 65, 65],
      backgroundColor: "#93C5FD",
    },
    {
      label: "My First Dataset",
      data: [85, 85, 85, 85, 85, 85],
      backgroundColor: "#1D4ED8",
    },
    {
      label: "My First Dataset",
      data: [30, 30, 30, 30, 30, 30],
      backgroundColor: "#888888",
    },
  ],
};

export const columnOptions: ChartOptions<"bar"> = {
  aspectRatio: 0,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        font: {
          size: 12,
          weight: 400,
        },
        color: "#424242",
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
