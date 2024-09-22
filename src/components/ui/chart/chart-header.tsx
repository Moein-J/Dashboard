import DotsSvg from "@/components/icons/dots-svg";

const ChartHeader = ({title,desc}:{title:string,desc:string}) => {
  return (
    <>
      <div className="flex flex-col w-full px-4">
        <div className="flex items-center justify-between font-bold text-sm">
          <p>{title}</p>
          <DotsSvg />
        </div>
        <p className="text-[12px] text-[#616161] ">{desc}</p>
      </div>
    </>
  );
};

export default ChartHeader;
