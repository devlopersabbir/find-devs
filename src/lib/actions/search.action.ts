"use server";

import { db } from "@/database";
import { users } from "@/schemas";
import { like } from "drizzle-orm";

/**
 * Search Profile Server Actions
 * @param {string} queryString - Search query will be only string
 */
export const searchProfilesAction = async (queryString: string) => {
  // console.log("querystring: ", queryString);
  const res = await db
    .select()
    .from(users)
    .where(like(users.name, queryString));
  console.log(res);
};
