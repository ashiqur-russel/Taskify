import React from "react";
import { Menu, Moon, MoonStar, Search, Settings } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
function Navbar() {
  const dispatch = useAppDispatch();

  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="dark:black flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      <div className="flex items-center gap-8">
        {!isSideBarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSideBarCollapsed))}
          >
            <Menu className="h-8 w-8 dark:text-white"></Menu>
          </button>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="placeholder: w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        {!isDarkMode ? (
          <Moon
            onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
            className={`cursor-pointer ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`}
          />
        ) : (
          <MoonStar
            onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
            className={`cursor-pointer ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`}
          />
        )}

        <Link
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-black"
        >
          <Settings className="h-5 w-5 cursor-pointer dark:text-white"></Settings>
        </Link>
        <div className="bg-gray-20 ml-2 mr-5 hidden min-h-[2rem] w-[0.1rem] md:inline-block"></div>
      </div>
    </div>
  );
}

export default Navbar;
