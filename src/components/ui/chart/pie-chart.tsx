import { pieData, pieOptions, piePlugin } from "@/lib/pie-settings";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  return (
    <>
      <Doughnut data={pieData} options={pieOptions} plugins={[piePlugin]} />
    </>
  );
};

export default PieChart;
