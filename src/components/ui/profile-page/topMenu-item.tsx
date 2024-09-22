import { TabContext } from "@/components/hooks/TabContextProvider";
import { useContext } from "react";

const TopMenuItem = ({ title }: { title: string }) => {
  const { tab, setTab } = useContext(TabContext);
  return (
    <>
      <button
        onClick={() => {
          setTab(title);
        }}
        className={`${
          tab === title && "font-semibold"
        } text-sm h-full flex flex-col justify-end gap-4`}
      >
        <p className="">{title}</p>
        {tab === title ? (
          <div className="h-[3px] bg-[#5B5FC7] rounded-t-2xl w-full" />
        ) : (
          <div className="h-[3px] w-full" />
        )}
      </button>
    </>
  );
};

export default TopMenuItem;
