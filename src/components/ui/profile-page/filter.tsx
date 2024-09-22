import ArrowDownSvg from "@/components/icons/arrow-down-svg";
import LinesSvg from "@/components/icons/lines-svg";
import RadioInput from "./radio-input";
import SearchInput from "../dashboard-page/search-input";

const Filter = () => {
  return (
    <div className="w-full h-12 md:flex max-sm:hidden items-center justify-between px-2 mt-2">
      <div className="flex items-center max-lg:hidden gap-4 h-full">
        <LinesSvg />
        <button className="w-[78px] h-[32px] rounded-[4px] bg-[#5B5FC7] flex items-center justify-center gap-1 text-white p-1">
          <div className="w-4 h-4 rounded-full border-white border mr-1"></div>
          <p className="text-sm font-semibold">Text</p>
          <ArrowDownSvg color="#fff" isOpen/>
        </button>
        <RadioInput />
        <RadioInput />
        <div className="w-[1px] h-1/2 bg-[#D1D1D1]" />
        <RadioInput />
        <RadioInput />
        <RadioInput />

        <div />
        <RadioInput />
        <RadioInput />
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-sm">Filter</p>
        <SearchInput type="sm" placeholder="Find" />
      </div>
    </div>
  );
};

export default Filter;
