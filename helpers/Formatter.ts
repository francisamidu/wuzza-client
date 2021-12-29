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
  static getDaysRemaining(firstDate: Date | number, secondDate: Date | number) {
    const _first = new Date(firstDate);
    const _second = new Date(secondDate);
    const formattedDate = differenceInDays(_first, _second);
    return formattedDate;
  }
}
export default Formatter;
