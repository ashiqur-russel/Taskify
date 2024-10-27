"use client";
import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Lock, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

function Sidebar() {
  {
    /**
    const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setshowPriority] = useState(true);
  */
  }

  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const siderBarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-transform duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    ${isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"}
  `;

  return (
    <div className={siderBarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 text-transparent dark:text-white">
            <h1 className="animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
              TASKiFY
            </h1>
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="h-5 w-5 cursor-pointer font-bold text-black hover:text-gray-500 dark:text-gray-50"></X>
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 border-y-[1.5px] border-gray-200 px-7 py-4 dark:text-white">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h3 className="trackig-wide text-md font-bold text-gray-500 dark:text-gray-300">
              Team Product
            </h3>
            <div className="flex items-start gap-2">
              <Lock
                width={15}
                height={15}
                className="text-gray-500 dark:text-gray-300"
              />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
