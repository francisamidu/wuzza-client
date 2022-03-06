import { format, addWeeks, differenceInDays } from "date-fns";

class Formatter {
  static formatDate(date: number | Date) {
    const newDate = new Date(date);
    const formattedDate = format(newDate, "d MMMM yyyy");
    return formattedDate;
  }
  static formatRandomDate(date: number | Date) {
    const newDate = new Date(date);
    const formattedDate = format(addWeeks(newDate, 2), "d MMM yyyy");
    return formattedDate;
  }
  static formatTask(task: any) {
    return {
      id: task._id,
      completed: task.completed,
      createdAt: Formatter.formatDate(task.createdAt),
      createdBy: task.createdBy,
      dueDate: Formatter.formatDate(task.dueDate),
      description: task.description,
      title: task.title,
    };
  }
  static getDaysRemaining(firstDate: Date | number, secondDate: Date | number) {
    const _first = new Date(firstDate);
    const _second = new Date(secondDate);
    const formattedDate = differenceInDays(_first, _second);
    return formattedDate;
  }
}
export default Formatter;
