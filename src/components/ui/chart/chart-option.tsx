import { Dispatch, SetStateAction } from "react";

const ChartOption = ({
  timeLine,
  setTimeLine,
}: {
  timeLine: number;
  setTimeLine: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="flex items-center max-sm:justify-center w-full text-sm font-semibold gap-4 px-6">
        <button
          onClick={() => {
            setTimeLine(7);
          }}
          className={`px-1 py-2 border-b-2 ${
            timeLine === 7 && "border-[#5B5FC7]"
          }`}
        >
          7 days
        </button>
        <button
          onClick={() => {
            setTimeLine(30);
          }}
          className={`px-1 py-2 border-b-2 ${
            timeLine === 30 && "border-[#5B5FC7]"
          }`}
        >
          30 days
        </button>
        <button
          onClick={() => {
            setTimeLine(60);
          }}
          className={`px-1 py-2 border-b-2 ${
            timeLine === 60 && "border-[#5B5FC7]"
          }`}
        >
          60 days
        </button>
      </div>
    </>
  );
};

export default ChartOption;
