import React from "react";
import { Task as ITask } from "../types";

import { IoCalendar, IoCheckmark, IoTrashOutline } from "react-icons/io5";
import { formatDate } from "../helpers";
import { useAppDispatch } from "../hooks";
import { toggleCompletion, removeTask } from "../reducers/tasks.slice";

type TaskProps = {
  task: ITask;
};
const Task = (props: TaskProps) => {
  const dispatch = useAppDispatch();
  const {
    task: { completed, createdAt, description, dueDate, title },
    task,
  } = props;

  const handleRemove = () => {
    dispatch(removeTask(task));
  };
  const handleToggle = () => {
    dispatch(toggleCompletion(task));
  };
  return (
    <div className="py-8 px-4 rounded-md bg-white w-480 task__card mr-4">
      <div className="flex flex-row items-center justify-between">
        <div className="w-1/2 flex flex-row items-center">
          <IoCalendar className="mr-4 text-gray-500 text-1xl" />
          <span className="text-gray-500">{formatDate(createdAt)}</span>
        </div>
        <div
          className="flex flex-row items-center justify-between cursor-pointer"
          onClick={() => handleToggle()}
        >
          {completed || (
            <div className="border-2 border-gray-200 rounded-md p-1 bg-blue mr-4">
              <IoCheckmark className="text-base text-white" />
            </div>
          )}
          <div
            className="border-2 border-gray-200 rounded-md p-1 bg-white cursor-pointer justify-self-end"
            onClick={() => handleRemove()}
          >
            <IoTrashOutline className="text-gray-500 text-base" />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold my-2">{title}</h1>
      <p className="py-2 text-gray-700 border-b-2 border-gray-100">
        {description}
      </p>
    </div>
  );
};

export default Task;
