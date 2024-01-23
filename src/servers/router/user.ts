import { userSchema } from "@/lib/validations";
import { procedure, router } from "../tRPC";

export const userRouter = router({
  store: procedure.input(userSchema).mutation((opts) => {
    console.log("opt: ", opts);
  }),
  index: procedure.query(async () => {
    return [1, 2, 3, 4];
  }),
});
