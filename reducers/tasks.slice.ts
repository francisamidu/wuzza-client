import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatRandomDate, formatTask, generateId } from "../helpers";
import { Task } from "../types";

const name = "tasks";

const initialState: Task[] = [];

const reducers = {
  addTask: (state: typeof initialState, action: PayloadAction<Task>) => {
    const currentState = JSON.parse(JSON.stringify(state));
    return [
      ...currentState,
      {
        ...action.payload,
      },
    ];
  },
  removeTask: (state: typeof initialState, action: PayloadAction<Task>) => {
    const currentState = JSON.parse(JSON.stringify(state));
    return [
      ...currentState.filter((item: Task) => item.id !== action.payload.id),
    ];
  },
  toggleCompletion: (
    state: typeof initialState,
    action: PayloadAction<Task>
  ) => {
    const currentState = JSON.parse(JSON.stringify(state));
    return [
      ...currentState.map((item: Task) => {
        if (item.id === action.payload.id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    ];
  },
  setTasks: (
    state: typeof initialState,
    action: PayloadAction<any | any[]>
  ) => {
    const tasks = action.payload?.map((t) => formatTask(t));
    return tasks;
  },
};

export const tasksSlice = createSlice({
  name,
  initialState,
  reducers,
});
