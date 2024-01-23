import { procedure, router } from "@/servers/tRPC";
import { db } from "@/database";
import { users } from "@/schemas";
import { userSchema } from "@/lib/validations";

export const appRouter = router({
  store: procedure.input(userSchema).mutation(async ({ input }) => {
    await db.insert(users).values({
      name: input.name,
      description: input.description,
      location: input.location,
      skills: input.skills,
      portfolio: input.portfolio,
      role: input.role,
      social: input.social as any,
      profileImage: input.profileImage,
    });
    return true;
  }),
});
export type TAppRouter = typeof appRouter;
