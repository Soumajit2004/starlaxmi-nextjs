export type todayResultType =
  {
    resultLarge: number;
    resultSmall: number;
    timeSlot: string;
  }[]


export type monthlyResultType = {
  date: string,
  timeSlot: string,
  resultLarge: number,
  resultSmall: number
}[]

export type pastThreeMonthsResultType =
  {
    thisMonth: {
      results: monthlyResultType,
      allDates: string[]
    },
    lastMonth: {
      results: monthlyResultType,
      allDates: string[]
    },
    secondLastMonth: {
      results: monthlyResultType,
      allDates: string[]
    }
  }