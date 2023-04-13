import moment from "moment";

export const standardizeHour = (currentDate: Date): Date => {
  currentDate.setUTCHours(12, 0, 0, 0);
  return currentDate;
};

const monthsRange = (monthsBack: number, startingDate = new Date()) => {
  const subtractedDate = moment(startingDate).subtract(monthsBack, "months");
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
    three: monthsRange(2),
    two: monthsRange(1),
    one: monthsRange(0)
  };

  return pastDates;
};

export const yearDateRange = (dateOfYear: Date) => {
  const pastDates: {[k: string]: any} = {};

  const endOfYear = moment(dateOfYear).endOf("year").toDate();

  for (let i = 0; i <= 12; i++) {
    const monthsRanges = monthsRange(i, endOfYear)

    pastDates[moment(monthsRanges.end).format("MMMM YYYY") as string] = {
      allDates: monthsRanges.allDates
    }

  }

  return pastDates;
};