export type todayResultType =
  {
    resultLarge: number;
    resultSmall: number;
    timeSlot: string;
  }[]


export type threeMonthResultType = {
  date: string,
  timeSlot: string,
  resultLarge: number,
  resultSmall: number
}[]

export type pastThreeMonthsResultType =
  {
    thisMonth: {
      results: threeMonthResultType,
      allDates: string[]
    },
    lastMonth: {
      results: threeMonthResultType,
      allDates: string[]
    },
    secondLastMonth: {
      results: threeMonthResultType,
      allDates: string[]
    }
  }