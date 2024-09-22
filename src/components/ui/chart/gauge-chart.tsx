import { gaugeData, gaugeOptions, gaugePlugin } from "@/lib/gauge-settings";
import { Doughnut } from "react-chartjs-2";

const GaugeChart = () => {
  return (
    <>
      <Doughnut
        data={gaugeData}
        options={gaugeOptions}
        plugins={[gaugePlugin]}
      />
    </>
  );
};

export default GaugeChart;
