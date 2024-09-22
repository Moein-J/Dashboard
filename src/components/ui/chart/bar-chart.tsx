import { barData, barOptions } from "@/lib/bar-settings";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <>
      <Bar
        data={barData}
        options={barOptions}
        
      />
    </>
  );
};

export default BarChart;
