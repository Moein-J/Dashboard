import { radialData, radialOptions, radialPlugin } from "@/lib/radial-settings";
import { Doughnut } from "react-chartjs-2";

const RadialChart = () => {
  return (
    <>
      <Doughnut
        data={radialData}
        options={radialOptions}
        plugins={[radialPlugin]}
      />
    </>
  );
};

export default RadialChart;
