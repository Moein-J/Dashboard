import ArrowDownSvg from "@/components/icons/arrow-down-svg";
import { useState } from "react";

const Option = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 text-sm font-normal transition-all">
        <button
          disabled={!children}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="flex w-full items-center justify-start gap-2 text-sm font-normal"
        >
          <ArrowDownSvg color="#424242" isOpen={isOpen} />
          <p>{title}</p>
        </button>

        <div
          className={`flex flex-col gap-1 w-8/12 transition-all ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Option;
