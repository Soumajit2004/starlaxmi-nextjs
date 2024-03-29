import { createTRPCRouter } from "./trpc";
import { singleResultRouter } from "./routers/singleResult";
import { formatedResultsRouter } from "./routers/formatedResult";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  result: singleResultRouter,
  formatedResults: formatedResultsRouter
});


// export type definition of API
export type AppRouter = typeof appRouter;
