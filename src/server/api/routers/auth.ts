import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  validateUser: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(1) }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email_password: {
            email: input.email,
            password: input.password
          }
        }
      });

      return user ? {
        id: user.id,
        name: user.name,
        email: user.email,
        lastLogin: user.lastLogin
      } : null;
    })
});