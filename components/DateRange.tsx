import React from "react";

import { CgCalendar, CgChevronDown } from "react-icons/cg";
import type { DateRange as IDateRange } from "../types";

type DateRangeProps = {
  dates: IDateRange[];
};

const DateRange = (props: DateRangeProps) => {
  const { dates } = props;
  return (
    <div className="custom-selector flex flex-row items-center relative">
      <CgCalendar className="text-gray-500 text-1xl date-calendar absolute" />
      <select
        className="bg-white rounded-3xl w-full cursor-pointer uppercase"
        name="date"
      >
        <option value="" className="font-bold">
          Choose range
        </option>
        {dates.map((date: any) => (
          <option key={date.id} value={date.date}>
            {date.date}
          </option>
        ))}
      </select>
      <CgChevronDown className="text-gray-500 text-1xl custom-arrow absolute" />
    </div>
  );
};

export default DateRange;
