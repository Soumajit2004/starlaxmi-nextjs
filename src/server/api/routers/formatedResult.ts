import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { lastThreeMonthsDateRange, standardizeHour } from "../../../utils/dateTimeFormating";


export const formatedResultsRouter = createTRPCRouter({
  getFullDayResults: publicProcedure
    .input(z.object({ queryDate: z.date() }))
    .query(async ({ input: { queryDate }, ctx }) => {
      return ctx.prisma.result.findMany({
        select: {
          timeSlot: true,
          resultLarge: true,
          resultSmall: true
        },
        where: {
          date: { equals: standardizeHour(queryDate) }
        }
      });
    }),
  getThreeLastMonthsResults: publicProcedure
    .query(async ({ ctx }) => {
      const getMonthsResult = async ({ start, end }: { start: Date, end: Date }) => {
        const res = await ctx.prisma.result.findMany({
          select: {
            date: true,
            timeSlot: true,
            resultLarge: true,
            resultSmall: true
          },
          where: {
            date: { lte: end, gt: start }
          }
        });


        return res.map((value) => {
          return {
            date: value.date.toISOString(),
            timeSlot: value.timeSlot,
            resultLarge: value.resultLarge,
            resultSmall: value.resultSmall
          };
        });

      };

      const dateRanges = lastThreeMonthsDateRange();

      return {
        thisMonth: {
          results: await getMonthsResult(dateRanges.one),
          allDates: dateRanges.one.allDates
        },
        lastMonth: {
          results: await getMonthsResult(dateRanges.two),
          allDates: dateRanges.two.allDates
        },
        secondLastMonth: {
          results: await getMonthsResult(dateRanges.three),
          allDates: dateRanges.three.allDates
        }
      };
    })
});