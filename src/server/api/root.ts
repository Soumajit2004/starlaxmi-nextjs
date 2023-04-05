import { createTRPCRouter } from "./trpc";
import { resultsRouter } from "./routers/results";
import { prisma } from "../db";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  result: resultsRouter,
});

export const serverSideCaller = appRouter.createCaller({ prisma });

// export type definition of API
export type AppRouter = typeof appRouter;
