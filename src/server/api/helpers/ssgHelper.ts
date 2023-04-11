import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";
import { appRouter } from "../root";
import { createInnerTRPCContext } from "../trpc";

export const generateSSGHelper = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({session: null}),
    transformer: superjson // optional - adds superjson serialization
  });