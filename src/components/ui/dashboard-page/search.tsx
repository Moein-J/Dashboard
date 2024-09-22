import ArrowSvg from "@/components/icons/arrow-svg";
import DotsSvg from "@/components/icons/dots-svg";
import MTeamsSvg from "@/components/icons/mteams-svg";
import Image from "next/image";
import SearchInput from "./search-input";
import BotSvg from "@/components/icons/bot-svg";

export default function Search() {
  return (
    <>
      <div className="flex  items-center justify-between w-full h-12 py-2 px-6">
        <MTeamsSvg width="24" height="24" />
        <div className="sm:flex max-sm:hidden items-center gap-6">
          <div className="flex items-center gap-6 justify-center">
            <ArrowSvg direction="right" />
            <ArrowSvg direction="left" />
          </div>
          <SearchInput type={"md"} placeholder="Search" />
        </div>
        <div className="flex flex-row-reverse justify-between max-sm:w-full items-center gap-4">
          <div className="max-sm:flex max-sm:items-center max-sm:gap-4">
            <BotSvg />
            <DotsSvg />
          </div>

          <div className="max-sm:flex max-sm:items-center max-sm:gap-2">
            <Image
              src="/profile-pic.png"
              alt="user profile picture"
              width={32}
              height={32}
            />
            <p className="hidden max-sm:block text-[26px] font-bold">
              Van Arsdel
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
