import React, { useState, useEffect } from "react";

import { useAppSelector } from "../../hooks";
import { extractAuthData } from "../../helpers";
import { NextComponentType } from "next";
import { useCreateTaskMutation } from "../../services";

import { Button, DashboardLayout } from "../../components";

type InitialValues = {
  createdAt: Date;
  createdBy: string | undefined;
  description: string;
  title: string;
};
const CreateTask = () => {
  const auth = useAppSelector((state) => extractAuthData(state));
  const [createTask, response] = useCreateTaskMutation({});

  const [task, setTask] = useState<any>({
    createdBy: auth?.fullName,
    description: "",
    title: "",
  });

  const makeQuery = async (e) => {
    e.preventDefault();
    await createTask({
      title: task.title,
      description: task.description,
      dueDate: new Date(21, 5, 5).toISOString(),
      createdBy: "Myself",
    });
  };

  useEffect(() => {
    const { isSuccess } = response;
    if (isSuccess) {
      setTask({
        createdBy: "",
        description: "",
        title: "",
      });
    }
  }, [response]);

  return (
    <section className="bg-gray-100 p-4 w-full h-full flex flex-row justify-center items-center col-start-1 col-end-3">
      <form
        className="bg-white rounded-lg p-8 sm:max-w-md m-auto"
        onSubmit={(e) => makeQuery(e)}
      >
        <h1 className="text-2xl font-bold mb-4">Create a task</h1>
        <p className="text-gray-900 sm:w-4/5 text-base">
          Get started by creating a new task. Once a new task has been created
          it will instantly appear on your tasks dashboard
        </p>
        <div className="inputs flex flex-col md:flex-row flex-wrap jstify-center md:justify-between mt-3 w-full mx-auto items-center">
          <div className="input-group flex-col w-full mt-3">
            <label htmlFor="title" className="font-bold text-capitalize">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-2 rounded-sm w-full py-2 px-2 border-1 border-gray-200 placeholder:text-sm outline-none"
              onChange={(e) =>
                setTask({
                  ...task,
                  title: e.target.value,
                })
              }
              value={task.title}
              placeholder="Ex. New task"
            />
          </div>
          <div className="input-group flex flex-col w-full mt-3">
            <label htmlFor="description" className="font-bold text-capitalize">
              Description
            </label>
            <textarea
              id="description"
              className="mt-2 rounded-sm w-full py-2 px-2 border-1 border-gray-200 placeholder:text-sm outline-none"
              value={task.description}
              onChange={(e) =>
                setTask({
                  ...task,
                  description: e.target.value,
                })
              }
              placeholder="Ex. Description"
              cols={3}
              rows={8}
            ></textarea>
          </div>
          <Button
            text="Continue"
            type="submit"
            className="btn-blue rounded-lg w-fit md:w-2/5"
          />
        </div>
      </form>
    </section>
  );
};

CreateTask.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default CreateTask;
