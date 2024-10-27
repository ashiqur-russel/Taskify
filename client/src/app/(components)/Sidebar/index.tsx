"use client";
import { Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setshowPriority] = useState(true);

  const siderBarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl
  transition-all duration-300 h-full z-40 dark:bg-black overfloy-y-auto bg-white w-64`;

  return (
    <div className={siderBarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="animate-pulse text-xl font-bold text-gray-800 dark:text-white">
            TASKiFY
          </div>
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
