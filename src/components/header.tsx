"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  if (path == "/") {
    return;
  }
  return (
    <div className="w-full flex flex-row h-[10%] justify-center items-center ">
      <span className="pt-8 text-2xl">
        Le jugement de <span style={{ color: "#4CAF50" }}>Compostius</span>
      </span>
    </div>
  );
};
export default Header;
