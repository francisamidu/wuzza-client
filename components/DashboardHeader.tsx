import React, { useState } from "react";
import { formatDate, generateId } from "../helpers";
import { DateRange as IDateRange } from "../types";
import DateRange from "./DateRange";
import Image from "next/image";

import { IoMdNotificationsOutline as Notification } from "react-icons/io";
import { CgChevronDown } from "react-icons/cg";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useTheme } from "../contexts";

const DashboardHeader = () => {
  const date = formatDate(new Date());
  const [dateRanges, setDateRanges] = useState<IDateRange[]>([
    {
      date: "Weekly",
      id: generateId(),
    },
    {
      date: "Monthly",
      id: generateId(),
    },
    {
      date: "Yearly",
      id: generateId(),
    },
  ]);
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app-bar py-2 pr-6 flex sticky z-20 bg-white top-0 w-full flex-row justify-between items-center shadow-sm col-start-1 col-end-3 row-start-1 row-end-2">
      <div className="flex flex-col pl-2">
        <h1 className="message font-bold text-base">Welcome Back, David Lew</h1>
        <h2 className="text-sm text-gray-400">{date}</h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center mx-4">
          <DateRange dates={dateRanges} />
          <div className="badge relative cursor-pointer ml-4">
            <span className="absolute rounded-full bg-red-700"></span>
            <Notification className="text-gray-500 text-3xl" />
          </div>
        </div>
        {theme === "light" ? (
          <IoMoonOutline
            className="text-gray-500 text-2xl cursor-pointer mr-4"
            onClick={handleThemeToggle}
          />
        ) : (
          <IoMoon
            className="text-gray-400 text-2xl cursor-pointer mr-4"
            onClick={handleThemeToggle}
          />
        )}
        <div className="flex flex-row items-center justify-center relative">
          <Image
            src="/avatar.png"
            width="40"
            height="40"
            layout="fixed"
            className="rounded-full"
          />
          <span className="font-bold text-1xl capitalize mx-4 mr-3">
            David Lew
          </span>
          <CgChevronDown className="text-gray-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
