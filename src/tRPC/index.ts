import { createTRPCReact } from "@trpc/react-query";
import type { TAppRouter } from "./appRouter";

export const trpc = createTRPCReact<TAppRouter>({});
