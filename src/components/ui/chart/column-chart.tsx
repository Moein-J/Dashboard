import { columnData, columnOptions } from "@/lib/column-settings";
import { Bar } from "react-chartjs-2";

const ColumnChart = () => {
  return (
    <>
      <Bar data={columnData} options={columnOptions} />
    </>
  );
};

export default ColumnChart;
