import Van from "@/components/icons/van-svg";
import TopMenuItem from "./topMenu-item";
import AnotherSvg from "@/components/icons/another-svg";
import DotsSvg from "@/components/icons/dots-svg";

const TopMenu = () => {
  return (
    <div className="md:flex max-sm:hidden justify-between items-center w-full h-[53px] gap-3">
      <div className="flex items-center h-full gap-3">
        <div className="flex items-center w-8 h-8 justify-center bg-black rounded-[4px]">
          <Van color="#fff" />
        </div>
        <p className="font-bold text-lg">Van Arsel</p>
        <TopMenuItem title="Home" />
        <TopMenuItem title="Timeline" />
        <TopMenuItem title="chat" />
        <TopMenuItem title="Assigned to you" />
      </div>
      <div className="flex items-center gap-2">
        <button>
          <AnotherSvg />
        </button>
        <button>
          <DotsSvg />
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
