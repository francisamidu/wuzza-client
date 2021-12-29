import React from "react";
import { Tab, TaskTabProps } from "../types";

const TaskTab = (props: TaskTabProps) => {
  const {
    tab: { name, active, count, id },
    tabs,
    setTabs,
  } = props;
  const toggleTab = () => {
    setTabs(
      tabs.map((tab: Tab) => {
        if (tab.id === id) {
          tab.active = true;
        } else {
          tab.active = false;
        }
        return tab;
      })
    );
  };
  return (
    <div
      className={
        active
          ? "py-3 px-2 task-tab active-tab relative color-blue"
          : "py-3 px-2 task-tab relative cursor-pointer"
      }
      onClick={() => toggleTab()}
    >
      <div className="flex flex-row items-center">
        <span className="capitalize text-md mr-2">{name}</span>
        <span className="bg-white rounded-xl p-2 task-badge text-center flex flex-row items-center justify-center">
          {count}
        </span>
      </div>
    </div>
  );
};

export default TaskTab;
