import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../types";

export const tasksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://wuzza-client.herokuapp.com",
  }),
  endpoints: (builder) => ({
    tasks: builder.query<Partial<Task[]>, any>({
      query: () => ({
        headers: { "Content-Type": "application/json" },
        method: "GET",
        url: "/tasks",
      }),
    }),
    task: builder.query<Partial<Task>, any>({
      query: ({ id }) => ({
        headers: { "Content-Type": "application/json" },
        method: "GET",
        url: `/task/${id}`,
      }),
    }),
    createTask: builder.mutation<Partial<Task>, any>({
      query: ({ description, title, createdAt, createdBy }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          createdAt,
          createdBy,
          description,
          title,
        },
        method: "POST",
        url: "/create-task",
      }),
    }),
    deleteTask: builder.mutation<Partial<Task>, any>({
      query: ({ id }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          id,
        },
        method: "POST",
        url: "/delete-task",
      }),
    }),
    markTaskComplete: builder.mutation<Partial<Task>, any>({
      query: ({ id }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          id,
        },
        method: "POST",
        url: "/mark-task-complete",
      }),
    }),
  }),
});
