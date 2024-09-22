import ChatSvg from "@/components/icons/chat-svg";
import LeftMenuItem from "./leftMenu-item";
import AlertSvg from "@/components/icons/alert-svg";
import Teams from "@/components/icons/teams-svg";
import Calendar from "@/components/icons/calendar-svg";
import Calls from "@/components/icons/calls-svg";
import Files from "@/components/icons/files-svg";
import Van from "@/components/icons/van-svg";
import DotsSvg from "@/components/icons/dots-svg";
import Apps from "@/components/icons/apps-svg";

const LeftMenu = () => {
  return (
    <div className="w-[68px] h-full p-1 py-2 md:flex max-sm:hidden flex-col gap-4 items-center text-[10px] text-[#616161] font-normal">
      <LeftMenuItem icon={<AlertSvg />} title="Activity" path="activity" />
      <LeftMenuItem icon={<ChatSvg />} title="Chat" path="chat" />
      <LeftMenuItem icon={<Teams />} title="Teams" path="teams" />
      <LeftMenuItem icon={<Calendar />} title="Calendar" path="calendar" />
      <LeftMenuItem icon={<Calls />} title="Calls" path="calls" />
      <LeftMenuItem icon={<Files />} title="Files" path="files" />
      <LeftMenuItem
        icon={<Van color="#616161" />}
        title="Van Arsdel"
        path="vanarsdel"
      />
      <LeftMenuItem icon={<DotsSvg />} path="others" />
      <LeftMenuItem icon={<Apps />} title="Apps" path="apps" />
    </div>
  );
};

export default LeftMenu;
