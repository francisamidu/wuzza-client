import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatRandomDate, generateId } from "../helpers";
import { Task } from "../types";

const name = "tasks";

const initialState: Task[] = [
  {
    id: generateId(),
    completed: false,
    createdAt: Date.now(),
    dueDate: Date.now(),
    description: "This is a description",
    title: "This is the first task",
  },
  {
    id: generateId(),
    completed: false,
    createdAt: Date.now(),
    dueDate: Date.now(),
    description: "This is a second description",
    title: "This is the second task",
  },
  {
    id: generateId(),
    completed: false,
    createdAt: Date.now(),
    dueDate: Date.now(),
    description: "This is a third description",
    title: "This is the third task",
  },
];

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
};

export const tasksSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { addTask, removeTask, toggleCompletion } = tasksSlice.actions;
