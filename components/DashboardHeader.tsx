import React, { useState } from "react";
import { formatDate, generateId } from "../helpers";
import { DateRange as IDateRange } from "../types";
import DateRange from "./DateRange";
import Image from "next/image";

import { IoMdNotificationsOutline as Notification } from "react-icons/io";
import { CgChevronDown, CgMoon } from "react-icons/cg";

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
  return (
    <div className="app-bar py-2 pr-6 flex sticky top-0 w-full flex-row justify-between items-center bg-white shadow-sm col-start-1 col-end-3 row-start-1 row-end-2">
      <div className="flex flex-col pl-2">
        <h1 className="message font-bold">Welcome Back, David Lew</h1>
        <h2 className="text-md text-gray-400">{date}</h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center mx-4">
          <DateRange dates={dateRanges} />
          <div className="badge relative cursor-pointer ml-4">
            <span className="absolute rounded-full bg-red-700"></span>
            <Notification className="text-gray-500 text-3xl" />
          </div>
        </div>
        <CgMoon className="text-gray-500 text-2xl cursor-pointer mr-4" />
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
