import { procedure, router } from "@/servers/tRPC";

export const appRouter = router({
  apiRoute: procedure.query(() => {
    return "Hello World";
  }),
});
export type TAppRouter = typeof appRouter;
