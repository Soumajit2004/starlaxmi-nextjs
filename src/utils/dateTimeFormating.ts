import moment, { months } from "moment";

export const standardizeHour = (currentDate: Date): Date => {
  currentDate.setUTCHours(12, 0, 0, 0);
  return currentDate;
};

const pastMonthsRange = (monthsBack: number) => {
  const subtractedDate = moment(new Date()).subtract(monthsBack, "months");
  const start = subtractedDate.startOf("month").toDate();
  const end = subtractedDate.endOf("month").toDate();

  const count =  subtractedDate.daysInMonth();
  const days = [];
  for (let i = 1; i < count+1; i++) {
    days.push(standardizeHour(subtractedDate.date(i).toDate()).toISOString());
  }

  return { start, end, allDates:days};
};
export const lastThreeMonthsDateRange = () => {
  const pastDates = {
    three: pastMonthsRange(2),
    two: pastMonthsRange(1),
    one: pastMonthsRange(0)
  };

  return pastDates;
};