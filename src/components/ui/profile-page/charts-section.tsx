import AreaChart from "../chart/area-chart";
import BarChart from "../chart/bar-chart";
import Chart from "../chart/chart";
import ColumnChart from "../chart/column-chart";
import GaugeChart from "../chart/gauge-chart";
import PieChart from "../chart/pie-chart";
import RadialChart from "../chart/radial-chart";

const ChartsSection = () => {
  return (
    <>
      <div className="lg:w-[calc(100%-190px)] max-lg:w-full max-sm:w-full h-full  relative grid lg:grid-cols-[30%,30%,40%] lg:grid-rows-2 md:grid-cols-2 max-sm:grid-cols-1 py-2 gap-4">
        <Chart
          title="Card title"
          desc="Description"
          type={<GaugeChart />}
          hasOption
          isVertical={false}
        />
        <Chart
          title="Card title"
          desc="Description"
          type={<BarChart />}
          hasOption={false}
          isVertical={true}
        />
        <Chart
          title="Card title"
          desc="Description"
          type={<AreaChart />}
          hasOption={false}
          isVertical={false}
        />

        <Chart
          title="Card title"
          desc="Description"
          type={<RadialChart />}
          hasOption={false}
          isVertical={true}
        />
        <Chart
          title="Card title"
          desc="Description"
          type={<PieChart />}
          hasOption
          isVertical={false}
        />
        <Chart
          title="Card title"
          desc="Description"
          type={<ColumnChart />}
          hasOption={false}
          isVertical={true}
        />
      </div>
    </>
  );
};

export default ChartsSection;
