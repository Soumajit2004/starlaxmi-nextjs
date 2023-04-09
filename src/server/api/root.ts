import { createTRPCRouter } from "./trpc";
import { singleResultRouter } from "./routers/singleResult";
import { prisma } from "../db";
import { formatedResultsRouter } from "./routers/formatedResult";
import { authRouter } from "./routers/auth";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  result: singleResultRouter,
  formatedResults: formatedResultsRouter,
  auth: authRouter
});

export const serverSideCaller = appRouter.createCaller({ prisma });

// export type definition of API
export type AppRouter = typeof appRouter;
