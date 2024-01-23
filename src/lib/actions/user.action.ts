"use server";

import { TUserSchema } from "@/types";
import { revalidatePath } from "next/cache";

export const createProfile = async (inputs: TUserSchema, pathname: string) => {
  console.log("inputs: ", inputs);
  console.log("path: ", pathname);
};
// export const updateUser = async (
//   inputs: TUserSchema,
//   pathname: string
// ): Promise<void> => {
//   const { success } = userSchema.safeParse(inputs);
//   if (!success) throw new Error("Invalid inputs");

//   try {
//     const isUser = await db.query.user.findFirst({
//       where: (user, { eq }) => eq(user.username, inputs.username),
//     });
//     if (!isUser) {
//       await db.insert(user).values(inputs);
//     } else {
//       await db.update(user).set(inputs);
//     }
//     if (pathname === "/profile/edit") revalidatePath(pathname);
//   } catch (err) {
//     throw new Error("Fail to update user.");
//   }
// };

// export const fetchUser = async (username: string) => {
//   if (!username) throw new Error("Username is required to fetch user!");

//   try {
//     return (await db.query.user.findFirst({
//       where: (user, { eq }) => eq(user.username, username),
//     })) as TUserSchema;
//   } catch (err) {
//     throw new Error("Fail to fetch user");
//   }
// };
