import AlertSvg from "@/components/icons/alert-svg";
import Calendar from "@/components/icons/calendar-svg";
import ChatSvg from "@/components/icons/chat-svg";
import DotsSvg from "@/components/icons/dots-svg";
import Teams from "@/components/icons/teams-svg";

const FooterNav = () => {
  return (
    <>
      <div className="hidden max-sm:fixed max-sm:flex bottom-0 items-center w-full bg-white p-5 justify-between z-20">
        <div className="flex flex-col items-center">
          <AlertSvg />
          <p>Activity</p>
        </div>
        <div className="flex flex-col items-center">
          <ChatSvg />
          <p>chat</p>
        </div>
        <div className="flex flex-col items-center">
          <Teams />
          <p>Teams</p>
        </div>
        <div className="flex flex-col items-center">
          <Calendar />
          <p>Calendar</p>
        </div>
        <div className="flex flex-col h-full justify-end items-center gap-3">
          <DotsSvg />
          <p>More</p>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
