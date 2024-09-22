import { useState } from "react";
import ChartFooter from "./chart-footer";
import ChartOption from "./chart-option";
import ChartHeader from "./chart-header";

const Chart = ({
  title,
  desc,
  hasOption,
  type,
  isVertical,
}: {
  title: string;
  desc: string;
  hasOption: boolean;
  type: React.ReactNode;
  isVertical: boolean;
}) => {
  const [timeLine, setTimeLine] = useState(7);
  return (
    <div className="flex flex-col w-full items-start gap-3 p-4">
      <ChartHeader title={title} desc={desc} />
      {hasOption ? (
        <ChartOption timeLine={timeLine} setTimeLine={setTimeLine} />
      ) : (
        <div className="h-10 w-full"></div>
      )}
      <div
        className={`flex-grow ${
          isVertical && "max-sm:h-96"
        }  relative w-full flex flex-col justify-center items-center`}
      >
        {type}
      </div>

      <ChartFooter />
    </div>
  );
};

export default Chart;
