"use server";

import { TUserSchema } from "@/types";
import { revalidatePath } from "next/cache";
import { userSchema } from "../validations";
import { db } from "@/database";
import { users } from "@/schemas";
import { trpc } from "@/tRPC/client";

/**
 * Creating a new profile
 * @param {TUserSchema} inputs - user informations
 * @param {string} pathname - the current pathname
 */
const mutation = trpc.store.useMutation();
export const createProfile = async (
  inputs: TUserSchema,
  pathname: string
): Promise<void> => {
  const { success } = userSchema.safeParse(inputs);
  if (!success) throw new Error("Invalid inputs");
  try {
    const isProfile = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.portfolio, inputs.portfolio),
    });
    if (isProfile) throw new Error("Developer Profile Already Exists🥲");

    // await db.insert(users).values(inputs);
    await mutation.mutate(inputs);
    revalidatePath(pathname);
  } catch (err) {
    console.log("error: ", err);
    throw new Error(
      "Something went wrong! \nFail to create developer account!"
    );
  }
};
