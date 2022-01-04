type Task = {
  id: string;
  completed: boolean;
  title: string;
  description: string;
  createdAt: number | any;
  createdBy:string
  dueDate: number | any;
};

export default Task;
