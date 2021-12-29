import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import {
  BiTask,
  BiNote,
  BiLayout,
  BiArchive,
  BiCalendar,
} from "react-icons/bi";

type IconProps = {
  icon: string;
};

const Icons = (props: IconProps) => {
  const { icon } = props;
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "calendar":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <BiCalendar className="text-3xl text-blue-900" />
          </div>
        );
      case "task":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <BiTask className="text-3xl text-blue-900" />
          </div>
        );
      case "note":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <BiNote className="text-3xl text-blue-900" />
          </div>
        );
      case "projects":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <BiLayout className="text-3xl text-blue-900" />
          </div>
        );
      case "scheduler":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <AiFillSchedule className="text-3xl text-blue-900" />
          </div>
        );
      case "goals":
        return (
          <div className="text-3xl bg-blue-100 p-4 rounded-full">
            <BiArchive className="text-3xl text-blue-900" />
          </div>
        );
      default:
        return null;
    }
  };
  return <>{renderIcon(icon)}</>;
};

export default Icons;
