import React, { useState, FormEvent } from "react";
import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { Task } from "../types";

import { useAppSelector } from "../hooks";
import { extractAuthData } from "../helpers";
import { Button, DashboardLayout } from "../components";
import { NextComponentType } from "next";
import { useCreateTaskMutation } from "../services";

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
    createdAt: new Date(),
    createdBy: auth?.fullName,
    description: "",
    title: "",
  });

  const formik = useFormik({
    initialValues: {
      createdAt: new Date(),
      createdBy: auth?.fullName,
      description: "",
      title: "",
    } as InitialValues,
    onSubmit: (
      values: InitialValues,
      formikHelpers: FormikHelpers<InitialValues>
    ) => {
      const { setSubmitting } = formikHelpers;
      setSubmitting(true);
      console.log(values);
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      createdAt: Yup.date().required("Date is required"),
      createdBy: Yup.string(),
      description: Yup.string().required("Description is required"),
      title: Yup.string().required("Title is required"),
    }),
  });

  return (
    <section className="bg-gray-100 p-4 w-full h-full flex flex-row justify-center items-center col-start-1 col-end-3">
      <form
        className="bg-white rounded-lg p-8 sm:max-w-md m-auto"
        onSubmit={(e) => formik.handleSubmit(e)}
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
              className="mt-2 rounded-sm w-full py-2 px-2 border-1 border-gray-200 placeholder:text-sm"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Ex. New task"
            />
          </div>
          <div className="input-group flex flex-col w-full mt-3">
            <label htmlFor="description" className="font-bold text-capitalize">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="mt-2 rounded-sm w-full py-2 px-2 border-1 border-gray-200 placeholder:text-sm"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Ex. Description"
            />
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
