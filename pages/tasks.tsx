import React, { useEffect, useState } from "react";
import { NextComponentType } from "next";
import router from "next/router";

import { Button, DashboardLayout, Task, TaskTabs } from "../components";
import { IoAdd } from "react-icons/io5";

import { useAppSelector } from "../hooks";
import { Tab, Task as ITask } from "../types";
import { generateId } from "../helpers";

const Tasks = () => {
  const {
    auth,
    tasks: { length },
    tasks,
  } = useAppSelector((state) => state);
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => !!task.completed).length;
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: generateId(),
      active: true,
      count: tasks.length,
      name: "all",
    },
    {
      id: generateId(),
      active: false,
      count: pendingCount,
      name: "pending",
    },
    {
      id: generateId(),
      active: false,
      count: pendingCount,
      name: "due",
    },
    {
      id: generateId(),
      active: false,
      count: completedCount,
      name: "completed",
    },
  ]);
  const [localTasks, setLocalTasks] = useState<ITask[]>([]);
  const [currentTab, setCurrentTab] = useState("all");

  const setTasks = () => {
    switch (currentTab) {
      case "completed":
        const completedTasks = tasks.filter((task) => !!task.completed);
        setLocalTasks(completedTasks);
        break;
      case "due":
        const dueTasks = tasks.filter((task) => !task.completed);
        setLocalTasks(dueTasks);
        break;
      case "pending":
        const pendingTasks = tasks.filter((task) => !task.completed);
        setLocalTasks(pendingTasks);
        break;
      default:
        setLocalTasks(tasks);
    }
  };

  useEffect(() => {
    const tab = tabs.find((tab) => tab.active);
    setCurrentTab(tab.name);
  }, [tabs]);

  useEffect(() => {
    setTasks();
  }, [currentTab]);

  const redirectToCreateTaskPage = () => {
    router.push("/create-task");
  };

  return (
    <main className="py-4 px-4 bg-blue-50 col-start-1 col-end-3">
      <div className="p-2">
        <h1 className="text-3xl">
          Hello David, you have
          <span className="font-bold ml-2">{length} tasks</span>
        </h1>
      </div>
      <section className="pt-4 mt-4 px-2">
        <div className="flex flex-row items-center justify-between">
          <TaskTabs tabs={tabs} setTabs={setTabs} />
          <Button
            text="Create Task"
            left={true}
            icon={<IoAdd className="text-white text-lg" />}
            onClick={redirectToCreateTaskPage}
            className="btn-blue rounded-xl"
          />
        </div>
        <div className="flex flex-row items-center justify-around mt-4">
          {localTasks.map((task: ITask, index: number) => (
            <Task task={task} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

Tasks.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Tasks;
