"use client";
import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  Lock,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SidebarLink from "../SiderBarLink";

function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setshowPriority] = useState(true);

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
              className="rounded-xl border-none bg-slate-50 text-2xl shadow-lg hover:bg-gray-500"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="hover:text-black-500 h-5 w-5 cursor-pointer text-xl font-bold text-black hover:text-white dark:text-gray-50"></X>
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

        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>

        <div>
          {" "}
          <button
            onClick={() => setShowProjects((prev) => !prev)}
            className="3 flex w-full items-center justify-between px-8 py-4 text-gray-500"
          >
            <span>Projects</span>
            {showProjects ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <div>
          {" "}
          <button
            onClick={() => setshowPriority((prev) => !prev)}
            className="3 flex w-full items-center justify-between px-8 py-4 text-gray-500"
          >
            <span>Meetings</span>
            {showPriority ? <ChevronUp /> : <ChevronDown />}
          </button>
          {showPriority && (
            <>
              <SidebarLink
                icon={AlertCircle}
                label="Urgent"
                href="/priority/urgent"
              />
              <SidebarLink
                icon={ShieldAlert}
                label="High"
                href="/priority/high"
              />
              <SidebarLink
                icon={AlertTriangle}
                label="Medium"
                href="/priority/medium"
              />
              <SidebarLink
                icon={AlertOctagon}
                label="Low"
                href="/priority/low"
              />
              <SidebarLink
                icon={Layers3}
                label="Backlog"
                href="/priority/backlog"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
