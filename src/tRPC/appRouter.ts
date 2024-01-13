import { procedure, router } from "@/servers/tRPC";
import { db } from "@/database";
import { users } from "@/schemas";
import { userSchema } from "@/validators/schema";
import { desc } from "drizzle-orm";

export const appRouter = router({
  index: procedure.query(async () => {
    return await db.query.users.findMany({
      orderBy: desc(users.createdAt),
    });
  }),
  store: procedure.input(userSchema).mutation(async ({ input }) => {
    await db.insert(users).values({
      name: input.name,
      description: input.description,
      location: input.location,
      skills: input.skill,
      portfolio: input.portfolio,
      role: input.role,
      social: input.social as any,
      profileImage: input.profileImage,
    });
    return true;
  }),
  // user: userRouter,
});
export type TAppRouter = typeof appRouter;
