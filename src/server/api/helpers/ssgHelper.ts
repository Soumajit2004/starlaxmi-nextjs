import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";
import { appRouter } from "../root";
import { createInnerTRPCContext, createTRPCContext } from "../trpc";

export const generateSSGHelper = async () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({session: null}),
    transformer: superjson // optional - adds superjson serialization
  });