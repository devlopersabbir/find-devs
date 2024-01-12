import { userSchema } from "@/validators/schema";
import { TUserSchema } from "./CreateProfile";
import { trpc } from "@/tRPC/client";

export const profile = async (inputs: TUserSchema) => {
  const { success } = userSchema.safeParse(inputs);
  if (!success) throw new Error("Invalid inputs");

  /** cheak user already exists with name slug */
  // TODO

  const mutation = trpc.store.useMutation();
  return mutation.mutate(inputs);
};
