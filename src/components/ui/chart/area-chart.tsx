import { areaData, areaOptions } from "@/lib/area-settings";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  return (
    <>
      <Line data={areaData} options={areaOptions}/>
    </>
  );
};

export default AreaChart;
