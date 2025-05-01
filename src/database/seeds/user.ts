import type { DB } from "@/database";
import * as schema from "@/schemas";
import { usersData } from "../faker";

export default async function seed(db: DB) {
  await Promise.all(
    usersData.map(
      async (user) => await db.insert(schema.users).values({ ...user })
    )
  );
}
