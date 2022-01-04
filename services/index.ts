import { authApi } from "./auth.api";
import { tasksApi } from "./tasks.api";

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  authApi;
export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useMarkTaskCompleteMutation,
  useTaskQuery,
  useTasksQuery,
} = tasksApi;
export { authApi as auth, tasksApi as tasks };
