"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftMenuItem = ({
  title,
  icon,
  path,
}: {
  title?: string;
  icon: React.ReactNode;
  path: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={"/" + path}
      className={`flex flex-col items-center gap-1 justify-center w-full hover:scale-105 transition-all ${
        pathname.includes(path)
          ? "text-[#4F52B2] " + "border-l-2 border-[#4F52B2]"
          : ""
      }`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default LeftMenuItem;
