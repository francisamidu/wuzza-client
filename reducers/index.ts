import { tasksSlice } from "./tasks.slice";

export const { addTask, removeTask, toggleCompletion, setTasks } =
  tasksSlice.actions;

export { tasksSlice };
