import { procedure, router } from "@/servers/tRPC";
import { db } from "@/database";
import { users } from "@/schemas";
import { userSchema } from "@/validators/schema";

export const appRouter = router({
  index: procedure.query(async () => {
    return await db.query.users.findMany();
  }),
  store: procedure.input(userSchema).mutation(async (opts) => {
    console.log("requested data: ", opts);
    return true;
  }),
  // user: userRouter,
});
export type TAppRouter = typeof appRouter;
