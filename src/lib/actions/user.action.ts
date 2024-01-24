"use server";

import { TUserSchema } from "@/types";
import { revalidatePath } from "next/cache";
import { userSchema } from "../validations";
import { db } from "@/database";
import { users } from "@/schemas";

/**
 * Creating a new profile
 * @param {TUserSchema} inputs - user informations
 * @param {string} pathname - the current pathname
 */
export const createProfile = async (
  inputs: TUserSchema,
  pathname: string
): Promise<void> => {
  const { success } = userSchema.safeParse(inputs);
  if (!success) throw new Error("Invalid inputs");
  const isProfile = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.portfolio, inputs.portfolio),
  });
  if (isProfile) throw new Error("Developer Profile Already Exists🥲");

  await db.insert(users).values(inputs);
  revalidatePath(pathname);
};
