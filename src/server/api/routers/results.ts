import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { serverSideCaller } from "../root";

const standardizeHour = (currentDate: Date): Date => {
  currentDate.setUTCHours(12);
  return currentDate;
};


export const resultsRouter = createTRPCRouter({

  singleResult: publicProcedure
    .input(z.object({ queryDate: z.date(), queryTimeSlot: z.string() }))
    .query(async ({ input, ctx }) => {

      const { queryDate, queryTimeSlot } = input;

      const res = await ctx.prisma.result.findFirst({
        select: {
          resultLarge: true, resultSmall: true
        }, where: {
          date: standardizeHour(queryDate),
          timeSlot: queryTimeSlot
        }
      });


      return {
        resultPublished: res?.resultLarge || res?.resultSmall,
        resultBig: res?.resultLarge || null,
        resultSmall: res?.resultSmall || null
      };
    }),

// mutation of results
  publishResult: publicProcedure
    .input(z.object({
      date: z.date(),
      timeSlot: z.string(),
      resultLarge: z.number(),
      resultSmall: z.number()
    }))
    .mutation(async ({
                       input: {
                         date,
                         timeSlot,
                         resultLarge,
                         resultSmall
                       }, ctx
                     }) => {
      standardizeHour(date);

      const { resultPublished } = await serverSideCaller.result.singleResult({
        queryDate: date,
        queryTimeSlot: timeSlot
      });

      const response = {
        error: false
      };


      let res;
      if (resultPublished) {
        // updating result

        res = await ctx.prisma.result.update({
          select: {
            id: true
          }, data: {
            resultLarge: resultLarge == 0 ? undefined : resultLarge,
            resultSmall: resultSmall == 0 ? undefined : resultSmall
          }, where: {
            date_timeSlot: {
              date: date,
              timeSlot: timeSlot
            }
          }
        });

      } else {
        // publishing result

        res = await ctx.prisma.result.create({
          select: {
            id: true
          },
          data: {
            date: date,
            timeSlot: timeSlot,
            resultLarge: resultLarge,
            resultSmall: resultSmall
          }
        });

      }
      (!res) ? response.error = true : false;

      return response;
    })
});