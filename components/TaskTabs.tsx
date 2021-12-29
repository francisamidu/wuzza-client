import React from "react";
import { TaskTab } from ".";
import { TaskTabProps } from "../types";

const TasksTab = (props: TaskTabProps) => {
  const { tabs, setTabs } = props;
  return (
    <div className="flex flex-row items-center border-b-2 py-2 border-gray-200">
      {tabs.map((tab) => (
        <TaskTab tab={tab} key={tab.id} setTabs={setTabs} tabs={tabs} />
      ))}
    </div>
  );
};

export default TasksTab;
