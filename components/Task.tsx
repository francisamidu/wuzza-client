import React from "react";
import { Task as ITask } from "../types";

import {
  IoCalendar,
  IoCheckmark,
  IoTrashOutline,
  IoRefreshOutline,
} from "react-icons/io5";
import { formatDate } from "../helpers";
import { useAppDispatch } from "../hooks";
import { toggleCompletion, removeTask } from "../reducers/tasks.slice";

type TaskProps = {
  task: ITask;
};
const Task = (props: TaskProps) => {
  const dispatch = useAppDispatch();
  const {
    task: { completed, createdAt, createdBy, description, dueDate, title },
    task,
  } = props;

  const handleRemove = () => {
    dispatch(removeTask(task));
  };
  const handleToggle = () => {
    dispatch(toggleCompletion(task));
  };
  return (
    <div className="py-4 rounded-md bg-white w-480 task__card mr-4">
      <div className="flex flex-row items-center justify-between px-4">
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
      <div className="py-2 px-4 ">
        <h1 className="text-xl font-bold my-2">{title}</h1>
        <p className="text-gray-700 border-b-2 border-gray-100 pb-2">
          {description}
        </p>
      </div>
      <p className="flex flex-row items-center justify-between px-4">
        <span className="capitalize">{createdBy}</span>
        {completed ? (
          <p className="flex flex-row items-center justify-center">
            <IoCheckmark className="text-base text-green-500 mr-4" />
            <span className="text-green-500">Done</span>
          </p>
        ) : (
          <p className="flex flex-row items-center justify-center">
            <IoRefreshOutline className="text-base text-gray-500 mr-4" />
            <span className="text-gray-500">Incomplete</span>
          </p>
        )}
      </p>
    </div>
  );
};

export default Task;
